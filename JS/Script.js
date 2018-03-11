var app = new function() {
    this.el = document.getElementById('empresas');
    this.empresas = [];

    this.Count = function(data) {
        var el   = document.getElementById('counter');
        var name = 'empresa';
        if (data) {
            if (data > 1) {
                name = 'empresas';
            }
            el.innerHTML = data + ' ' + name ;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };
  
    this.FetchAll = function() {
        var data = '';
        if (this.empresas.length > 0) {
            for (i = 0; i < this.empresas.length; i++) {
                data += '<tr>';
                data += '<td>' + this.empresas[i][0] + '</td>'+'<td>' + this.empresas[i][1] + '</td>'+'<td>'+ this.empresas[i][2] + '</td>'+'<td>'+ this.empresas[i][3] + '</td>'+'<td>'+ this.empresas[i][4] + '</td>'+'<td>'+ this.empresas[i][5] + '</td>'+'<td>'+ this.empresas[i][6] + '</td>'+'<td>'+ this.empresas[i][7] + '</td>'+'<td>'+ this.empresas[i][8] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.empresas.length);
        return this.el.innerHTML = data;
    };

    this.Add = function () {
        nit = document.getElementById('nit');
        nombre = document.getElementById('nombre');
        telefono = document.getElementById('telefono');
        fechaCreacion = document.getElementById('fechaCreacion');
        curso = document.getElementById('curso');
        certificado = document.getElementById('certificado');
        categorias = document.getElementById('categorias');
        calificacion = document.getElementById('calificacion');
        email = document.getElementById('Email');
        password = document.getElementById('Password');
        // Get the value
        var empresa = [nit.value, nombre.value, telefono.value, fechaCreacion.value, curso.value, certificado.value , categorias.value, calificacion.value, email.value, password.value];

        if (empresa ) {
            // Add the new value
            this.empresas.push(empresa);
            // Reset input value
            nit.value ='';
            nombre.value ='';
            telefono.value = '';
            fechaCreacion.value = '';
            email.value ='';
            password.value = '';
            calificacion.value='';
            curso.value='';
            certificado.value='';
            categorias.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };

  this.Edit = function (item) {
    var nit = document.getElementById('edit-nit');
    var nombre = document.getElementById('edit-nombre');
    var telefono = document.getElementById('edit-telefono');
    var fechaCreacion = document.getElementById('edit-fechaCreacion');
    var curso = document.getElementById('edit-curso');
    var certificado = document.getElementById('edit-certificado');
    var categorias = document.getElementById('edit-categorias');
    var calificacion = document.getElementById('edit-calificacion');
    var email = document.getElementById('edit-Email');
    var password = document.getElementById('edit-Password');
    // Display value in the field
    nit.value = this.empresas[item][0];
    nombre.value = this.empresas[item][1];
    telefono.value = this.empresas[item][2];
    fechaCreacion.value = this.empresas[item][3];
    curso.value = this.empresas[item][4];
    certificado.value = this.empresas[item][5];
    categorias.value = this.empresas[item][6];
    calificacion.value = this.empresas[item][7];
    email.value = this.empresas[item][8];
    password.value = this.empresas[item][9];
    // Display fields
    document.getElementById('fom').style.display = 'none';
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var empresa = [nit.value, nombre.value, telefono.value, fechaCreacion.value, curso.value, certificado.value , categorias.value, calificacion.value, email.value, password.value];
      if (empresa) {
        // Edit value
        self.empresas.splice(item, 1, empresa);
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.empresas.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
    this.Busqueda = function () {
        nit = document.getElementById('bus-nit');
        opc = document.getElementById('opcion');
        var data = '';
        if (this.empresas.length > 0) {
            for (i = 0; i < this.empresas.length; i++) {
                if (opc.value == "nit"){
                    if(this.empresas[i][0] == nit.value ){
                    data += '<tr>';
                    data += '<td>' + this.empresas[i][0] + '</td>'+'<td>' + this.empresas[i][1] + '</td>'+'<td>'+ this.empresas[i][2] + '</td>'+'<td>'+ this.empresas[i][3] + '</td>'+'<td>'+ this.empresas[i][4] + '</td>'+'<td>'+ this.empresas[i][5] + '</td>'+'<td>'+ this.empresas[i][6] + '</td>'+'<td>'+ this.empresas[i][7] + '</td>'+'<td>'+ this.empresas[i][8] + '</td>';
                    data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                    data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                    data += '</tr>';
                }
                }
                if (opc.value == "nombre"){
                    if(this.empresas[i][1] == nit.value ){
                    data += '<tr>';
                    data += '<td>' + this.empresas[i][0] + '</td>'+'<td>' + this.empresas[i][1] + '</td>'+'<td>'+ this.empresas[i][2] + '</td>'+'<td>'+ this.empresas[i][3] + '</td>'+'<td>'+ this.empresas[i][4] + '</td>'+'<td>'+ this.empresas[i][5] + '</td>'+'<td>'+ this.empresas[i][6] + '</td>'+'<td>'+ this.empresas[i][7] + '</td>'+'<td>'+ this.empresas[i][8] + '</td>';
                    data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                    data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                    data += '</tr>';
                }
                }
                
                
            }
        }
        return this.el.innerHTML = data;
    };
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
  document.getElementById('fom').style.display = 'block';
}