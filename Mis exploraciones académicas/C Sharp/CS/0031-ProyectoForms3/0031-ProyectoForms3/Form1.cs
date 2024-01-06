namespace _0031_ProyectoForms3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            String nombre = cajaTexto1.Text;
            String email = cajaTexto2.Text;
            String telefono = cajaTexto3.Text;

            String cadena = nombre + "," + email + "," + telefono + "\n";

            //File.WriteAllText("agenda.txt", cadena);
            File.AppendAllText("agenda.txt", cadena);

        }
    }
}