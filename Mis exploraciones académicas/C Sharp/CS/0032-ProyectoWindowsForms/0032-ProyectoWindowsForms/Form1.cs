namespace _0032_ProyectoWindowsForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            String leerArchivo = File.ReadAllText("agenda.txt");
            etiqueta1.Text = leerArchivo;   
        }
    }
}