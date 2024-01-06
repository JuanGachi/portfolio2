namespace Proyecto033_WindowsForms4
{
    public partial class Form1 : Form
    {
        int contador = 0;
        public Form1()
        {
            InitializeComponent();
        }

        private void rejillaDatos1_Click(object sender, EventArgs e)
        {
            dataGridView1[0, contador].Value = "JoseVicente";
            dataGridView1[1, contador].Value = "Info@josevicentecarratala.com";
            dataGridView1[2, contador].Value = "132456";
            dataGridView1.Rows.Add();
            contador++;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            String cadena = File.ReadAllText("agenda.txt");
            string[] partido = cadena.Split(',');
            dataGridView1[0, 0].Value = partido[0];
            dataGridView1[1, 0].Value = partido[1];
            dataGridView1[2, 0].Value = partido[2];
        }
    }
}