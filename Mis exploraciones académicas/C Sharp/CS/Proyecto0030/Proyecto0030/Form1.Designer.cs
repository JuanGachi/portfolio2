namespace Proyecto0030
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.cajaTexto1 = new System.Windows.Forms.TextBox();
            this.cajaTexto2 = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.button1 = new System.Windows.Forms.Button();
            this.etiqueta1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // cajaTexto1
            // 
            this.cajaTexto1.Location = new System.Drawing.Point(25, 95);
            this.cajaTexto1.Name = "cajaTexto1";
            this.cajaTexto1.Size = new System.Drawing.Size(175, 23);
            this.cajaTexto1.TabIndex = 0;
            // 
            // cajaTexto2
            // 
            this.cajaTexto2.Location = new System.Drawing.Point(25, 176);
            this.cajaTexto2.Name = "cajaTexto2";
            this.cajaTexto2.Size = new System.Drawing.Size(175, 23);
            this.cajaTexto2.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(25, 57);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(117, 15);
            this.label1.TabIndex = 2;
            this.label1.Text = "Introduce tu nombre";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(25, 141);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(127, 15);
            this.label2.TabIndex = 3;
            this.label2.Text = "Introduce tus apellidos";
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(25, 232);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(175, 23);
            this.button1.TabIndex = 4;
            this.button1.Text = "Dime los datos";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // etiqueta1
            // 
            this.etiqueta1.AutoSize = true;
            this.etiqueta1.Location = new System.Drawing.Point(25, 282);
            this.etiqueta1.Name = "etiqueta1";
            this.etiqueta1.Size = new System.Drawing.Size(38, 15);
            this.etiqueta1.TabIndex = 5;
            this.etiqueta1.Text = "label3";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(355, 322);
            this.Controls.Add(this.etiqueta1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.cajaTexto2);
            this.Controls.Add(this.cajaTexto1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private TextBox cajaTexto1;
        private TextBox cajaTexto2;
        private Label label1;
        private Label label2;
        private Button button1;
        private Label etiqueta1;
    }
}