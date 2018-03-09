var app = new function() {
    this.el = document.getElementById('empresas');
    this.empresas = [['12312312', 'thehav', '121212', '21212','1212@gmail.com']];
    this.Count = function(data) {
        var el   = document.getElementById('counter');
        var name = 'empresa';
        if (data) {
			if (data > 1) {
                name = 'empresas';
            }
        	el.innerHTML = data + ' ' + name ;
        }else{
			el.innerHTML = 'No ' + name;
        }
    };
    this.FetchAll = function() {
		var data = '';
        if (this.empresas.length > 0) {
            for (i = 0; i < this.empresas.length; i++) {
				data += '<tr>';
            	data += '<td>' + this.empresas[i][0] + '</td>'+'<td>' + this.empresas[i][1] + '</td>'+'<td>'+ this.empresas[i][2] + '</td>'+'<td>'+ this.empresas[i][3] + '</td>'+'<td>'+ this.empresas[i][4] + '</td>';
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
        email = document.getElementById('Email');
        password = document.getElementById('Password');
        // Get the value
    	var empresa = [nit.value, nombre.value, telefono.value, fechaCreacion.value, email.value, password.value];            
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
            // Dislay the new list
            this.FetchAll();
            }
        };
                    
        this.Edit = function (item) {
        	var nit = document.getElementById('edit-nit');
            var nombre = document.getElementById('edit-nombre');
            // Display value in the field
            nit.value = this.empresas[item][0];
            nombre.value = this.empresas[item][1];
            // Display fields
            document.getElementById('spoiler').style.display = 'block';
            self = this;
            document.getElementById('saveEdit').onsubmit = function() {
                // Get value
            	var empresa = [nit.value, nombre.value, telefono.value, fechaCreacion.value, email.value, password.value];
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
                      
	}
	
	app.FetchAll();
    function CloseInput() {
        document.getElementById('spoiler').style.display = 'none';
    }