namespace _0031_ProyectoForms3
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
            this.cajaTexto3 = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // cajaTexto1
            // 
            this.cajaTexto1.Location = new System.Drawing.Point(56, 114);
            this.cajaTexto1.Name = "cajaTexto1";
            this.cajaTexto1.Size = new System.Drawing.Size(259, 23);
            this.cajaTexto1.TabIndex = 0;
            // 
            // cajaTexto2
            // 
            this.cajaTexto2.Location = new System.Drawing.Point(54, 183);
            this.cajaTexto2.Name = "cajaTexto2";
            this.cajaTexto2.Size = new System.Drawing.Size(261, 23);
            this.cajaTexto2.TabIndex = 1;
            // 
            // cajaTexto3
            // 
            this.cajaTexto3.Location = new System.Drawing.Point(55, 270);
            this.cajaTexto3.Name = "cajaTexto3";
            this.cajaTexto3.Size = new System.Drawing.Size(260, 23);
            this.cajaTexto3.TabIndex = 2;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(58, 347);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(257, 23);
            this.button1.TabIndex = 3;
            this.button1.Text = "Guardar datos";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(399, 479);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.cajaTexto3);
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
        private TextBox cajaTexto3;
        private Button button1;
    }
}