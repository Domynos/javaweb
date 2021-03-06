

var global = this,
loadMyLib = function(onloaded){

	global.Esgi = {};
	global.Esgi.html = {};
	
	Esgi.html.img = function(cfg){
	var me = this
	me.cfg = cfg;
	me.el = $("<img src='"+me.cfg.src+"'/>");
	$(me.cfg.renderTo).append(me.el);
	}

//	/
//	/  FORM
//	/


	/**
	 **  @cfg.renderTo : Dom css identifier
	 **  @cfg.url : url to submit form.
	 **  @cfg.inputs : list of inputs cfg
	 */

	global.Esgi.html.Form = function(cfg) {
		var me = this;
		me.cfg = cfg;
		me.render();
		me.submit = $("<button>Envoyer</button>");
		me.initInputs();
		//$(me.cfg.renderTo).append(me.submit);
		me.submit.on('click', function(e){me.onButtonClick(e)});
	};

	global.Esgi.html.Form.prototype = {
			initInputs : function(){
				var me = this;
				me._inputs = {};
				me.table = $('<table id="connexion" />');
				
				
				var colgroup = $('<colgroup/>');
				var col1 = $('<col/>');
				col1.css("width","0px");
				var col2 = $('<col/>')
				col2.css("width","140px");
				colgroup.append(col1,col2);

				me.table.append(colgroup);
				me.el.append(me.table);

				var tfoot = $('<tfoot/>');
				me.table.append(tfoot);
				
				var ligneFoot = $("<tr />");
				var cellFoot = $("<td colspan=\"2\"/>");
				cellFoot.css("height","40px");
				cellFoot.css("vertical-align","bottom");
				ligneFoot.append(cellFoot);
				var center = $("<center/>");

				center.append(me.submit);
				cellFoot.append(center);
				tfoot.append(ligneFoot);

				$.each(this.cfg.inputs, function(idx, item) {
					var elem = $("<tr/>");
					me.table.append(elem);
					item.renderTo = elem;
					me._inputs[item.name] = new Esgi.html.inputs[item.type](item); 
				});
			},
			render : function(){
				this.el = $("<form/>");
				$(this.cfg.renderTo).append(this.el)
			},
			onButtonClick : function(e) {
				var me = this, data = {};
				$.each(me._inputs, function(key, item) {
					data[key] = item.getValue();
				});
				$.ajax({
					url : me.cfg.url,
					method : 'POST',
					data : data,
					success : function(response) {
						obj = JSON.parse(response);

						if(obj["success"]){
							window.location.reload();
						}
						else
						{
							$("#errorMsg").html("<br> Login ou mot de passe incorrect.")
						}
					}

				})
				e.preventDefault();
				return false;
			}

	};

	deleteUser = function(item,idx){
		$.ajax({
			url : APP_CONTEXT+"/user/delete",
			method : 'POST',
			data : item,
			success : function(response) {
				obj = JSON.parse(response);
				if(obj["success"]){
					$("#row_"+idx).remove();
				}
			}
		});
	}


//	INPUTS

	var commons = {
			init : function(){
				var me = this;
				if (me.cfg.label) {
					var label = $('<label>');
					label.css("color","black");
					td1 = $('<td/>');
					td1.append(label)
					td2 = $('<td/>');
					td2.append(me.el);
					//label.text(me.cfg.label);
					$(me.cfg.renderTo).append(td1,td2);
				}
				else
					$(me.cfg.renderTo).append(me.el);
			},
			getValue : function(){
				return $(this.el).val();
			}
	}

	Esgi.html.inputs = {};
	Esgi.html.inputs.Text = function(cfg){
		var me = this;
		me.cfg = cfg;
		
		me.el = $("<input placeholder='"+me.cfg.label+"'/>");
		this.init();

	}
	Esgi.html.inputs.Text.prototype = commons;

	Esgi.html.inputs.Password = function(cfg){
		var me = this;
		me.cfg = cfg;
		me.el = $("<input type='password' placeholder='"+me.cfg.label+"'/>");
		me.init();

	}
	Esgi.html.inputs.Password.prototype = commons;

	Esgi.html.inputs.Select = function(cfg){
		var me = this;
		me.cfg = cfg;
		me.el = $("<select/>");
		me.init();

	}
	Esgi.html.inputs.Select.prototype = commons;
	
	Esgi.html.inputs.Textarea = function(cfg){
		var me = this;
		me.cfg = cfg;
		me.el = $("<textarea rows='"+ me.cfg.rows + "' cols='" +me.cfg.cols+"' placeholder='"+me.cfg.label+"'/>");
		me.init();

	}
	Esgi.html.inputs.Textarea.prototype = commons;
	
	Esgi.html.inputs.Email = function(cfg){
		var me = this;
		me.cfg = cfg;
		me.el = $("<input type='email' placeholder='"+me.cfg.label+"'/>");
		me.init();

	}
	Esgi.html.inputs.Email.prototype = commons;


}

$(loadMyLib);



