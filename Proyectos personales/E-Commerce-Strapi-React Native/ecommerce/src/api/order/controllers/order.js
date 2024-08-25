"use strict";
// @ts-ignore
const Stripe = require('stripe')('sk_test_51Po77pHXVTvtE58RONBD9ficr3YUMhCW885k9Mkx0gE8LmsTd3TI5IARoWFf5C8RGbf0X98Irdy5Jg4UtCUdFK8I00wcw8fZwt');

// Función para calcular el precio con descuento
function calcDiscountPrice(price, discount) {
    if (!discount) return price;

    const discountAmount = (price * discount) / 100;
    const result = price - discountAmount;

    return result.toFixed(2);
}

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async paymentOrder(ctx) {
        // Asegúrate de que ctx.request.body tiene la estructura esperada
        // @ts-ignore
        const { token, products, userId, addressShipping } = ctx.request.body;

        // Calcular el total del pago
        let totalPayment = 0;
        products.forEach((product) => {
            const priceTemp = calcDiscountPrice(product.price, product.discount);
            totalPayment += Number(priceTemp) * product.quantity;
        });

        // Crear un cargo con Stripe
        const charge = await Stripe.charges.create({
            amount: Math.round(totalPayment * 100), // Stripe maneja los pagos en centavos, por eso multiplicamos por 100
            currency: "eur",
            source: token, // Aquí se debe usar el token pasado en el cuerpo de la solicitud
            description: `User ID: ${userId}`,
        });

        // Preparar los datos para crear la orden en Strapi
        const data = {
            products,
            user: userId,
            totalPayment,
            idPayment: charge.id,
            addressShipping,
        };

        // Validar los datos usando el validador de entidades de Strapi
        const model = strapi.contentTypes["api::order.order"];
        const validData = await strapi.entityValidator.validateEntityCreation(
            model,
            // @ts-ignore
            data
        );

        // Crear la entrada en la base de datos
        const entry = await strapi.db.query("api::order.order").create({
            data: validData,
        });

        // Enviar la respuesta
        ctx.body = { message: 'Order processed successfully', order: entry };
    },
}));
