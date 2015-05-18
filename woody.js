var woody = {
	// buttons constants
	CANCEL: 0,
	OK: 1,
	YES: 2,
	NO: 3,
	CONFIRM: 4,
	CONTINUE: 5,

	theme: "light",

	setTheme: function (theme) {
		if ($.inArray(theme, ["light", "dark"])>-1) this.theme = theme;
	},

	fadeBkg: 100,
	fadeBox: 150,

	// buttons
	buttons: [
		'<button data-ret="0" class="woody-btn" id="woody-btn-cancel">Annuler</button>',
		'<button data-ret="1" class="woody-btn" id="woody-btn-ok">Ok</button>',
		'<button data-ret="2" class="woody-btn" id="woody-btn-yes">Oui</button>',
		'<button data-ret="3" class="woody-btn" id="woody-btn-no">Non</button>',
		'<button data-ret="4" class="woody-btn" id="woody-btn-confirm">Confirmer</button>',
		'<button data-ret="5" class="woody-btn" id="woody-btn-continue">Continuer</button>'
	],

	// divs
	bkg: '<div id="woody-bkg"></div>',
	box: '<div id="woody-box"><div id="woody-box-content"></div><div id="woody-box-buttons"></div></div>',

	// opening / closing functions
	open: function() {
		$('body').append(this.bkg).append(this.box);
		$('#woody-box').attr('class', "woody-"+this.theme);
	},
	show: function() {
		var woody = this;
		$('#woody-bkg').fadeIn(woody.fadeBkg, function() {$('#woody-box').fadeIn(woody.fadeBox);});
	},
	close: function(callback, cbk) {
		var woody = this;
		$('#woody-box').fadeOut(woody.fadeBox, function() {$('#woody-bkg').fadeOut(woody.fadeBkg, function() {callback(cbk);});});	
	},

	// main functions
	alert: function (msg, callback) {
		this.confirm(msg, [woody.OK], callback);
	},
	confirm: function (msg, buttons, callback) {
		var woody = this;
		woody.open();

		// place msg
		$('#woody-box-content').html(msg);

		// calculate buttons
		var btns = "";
		$.each(buttons, function(key, btn) {
			btns += woody.buttons[btn];
		});

		// place buttons
		$('#woody-box-buttons').html(btns);

		// actions buttons
		$('.woody-btn').each(function() {
			$(this).click(function () { woody.close(callback, $(this).data('ret'));	});
		});
		
		woody.show();
	},
	prompt: function (msg, placeholder, callback) {
		var woody = this;
		woody.open();

		msg += '<p><input type="text" id="woody-text" placeholder="'+placeholder+'"></p>';
		// place msg
		$('#woody-box-content').html(msg);

		// place buttons
		$('#woody-box-buttons').html(woody.buttons[woody.OK]+" "+woody.buttons[woody.CANCEL]);


		$("#woody-btn-ok").click(function () { woody.close(callback, $("#woody-text").val());});
		$("#woody-btn-cancel").click(function () { woody.close(callback, null);});

		woody.show();
	}
}