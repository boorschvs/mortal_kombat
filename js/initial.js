window.mortal_kombat  = {
	elements: {},
	getElements(){
		var el 					= mortal_kombat.elements;

			el.mortal_kombat	= document.querySelector('#motral-kombat');
	},
	globals: {
		db: [
			{	
				id		: 1,
				name	: 'Kano',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/b/b8/Kano_tower.png/revision/latest?cb=20200901155538&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/2/21/Kano_MK3_bio.gif/revision/latest?cb=20110709163100&path-prefix=ru'
			},
			{
				id		: 2,
				name	: 'Nightwolf',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/c/c8/Nightwolf_tower.png/revision/latest?cb=20200828172417&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/9/90/NW_bio_MK3.gif/revision/latest?cb=20110219024047&path-prefix=ru'
			},
			{
				id		: 3,
				name	: 'Sindel',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/3/39/Sindel_Tower.png/revision/latest?cb=20200826201206&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/b/b4/Sindel_MK3_Bio.gif/revision/latest?cb=20110212063827&path-prefix=ru'
			},
			{
				id		: 4,
				name	: 'Sektor',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/0/09/Sek_ladder_Calm1.png/revision/latest?cb=20120616191626&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/7/73/Sek_MK3_Bio.gif/revision/latest?cb=20110205044721&path-prefix=ru'
			},
			{
				id		: 5,
				name	: 'Cyrax',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/7/70/Cy_ladder_Calm1.png/revision/latest?cb=20120623081239&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/c/cb/Cyrax_MK3_bios.gif/revision/latest?cb=20110129072930&path-prefix=ru'
			},
			{
				id		: 6,
				name	: 'Kabal',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/3/3e/Kabal_tower.png/revision/latest?cb=20200828174232&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/3/3a/Kab_bio_MK3.gif/revision/latest?cb=20110121205918&amp;path-prefix=ru'
			},
			{
				id		: 7,
				name	: 'Sheeva',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/a/a7/Sheeva_tower.png/revision/latest?cb=20200828180023&amp;path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/3/32/Sheeva_Bio_MK3.gif/revision/latest?cb=20110114221858&path-prefix=ru'
			},
			{
				id		: 8,
				name	: 'Sonya Blade',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/e/e6/Sonya_tower.png/revision/latest?cb=20200829114901&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/b/ba/Sonya_bio.gif/revision/latest?cb=20110207134851&path-prefix=ru'
			},
			{
				id		: 9,
				name	: 'Jax',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/3/30/Jax_tower.png/revision/latest?cb=20200901130804&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/e/ee/Jax_MK3_Bio.gif/revision/latest?cb=20110416103215&amp;path-prefix=ru'
			},
			{
				id		: 10,
				name	: 'Sub-Zero',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/8/86/Sub_tower.png/revision/latest?cb=20200829104722&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/c/cc/Bio_Sub1.gif/revision/latest?cb=20110323120306&path-prefix=ru'
			},
			{
				id		: 11,
				name	: 'Kung Lao',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/6/6d/Lao_tower.png/revision/latest?cb=20200829120054&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/a/ad/Bio.gif/revision/latest?cb=20110205155137&path-prefix=ru'
			},
			{
				id		: 12,
				name	: 'Shang Tsung',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/f/fd/ShangTsung_tower.png/revision/latest?cb=20200826082150&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/6/6e/Snag_MK3_bio.gif/revision/latest?cb=20110514101140&path-prefix=ru'
			},
			{
				id		: 13,
				name	: 'Liu Kang',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/9/9f/Liu_tower.png/revision/latest?cb=20200829080113&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/6/64/Liu_MK3_bio.gif/revision/latest?cb=20110625112812&amp;path-prefix=ru'
			},
			{
				id		: 14,
				name	: 'Raiden',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/9/9c/Raiden_tower.png/revision/latest?cb=20200901135910&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/b/b9/Raiden_mk4.gif/revision/latest?cb=20101226152156&path-prefix=ru'
			},
			{
				id		: 15,
				name	: 'Scorpion',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/c/c2/Scorp_tower.png/revision/latest?cb=20200829083157&path-prefix=ru',
				full_img: 'https://static.wikia.nocookie.net/mortalkombat/images/d/dc/Sco_MK4_ren.gif/revision/latest?cb=20110618155548&path-prefix=ru'
			},
		],
		personage_default: 0,
		player1		     : [],
		player2		     : [],
	},
	initial(){
		mortal_kombat.getElements();
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;
		mortal_kombat.starting_page()
	},
	starting_page(){
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;

		let menu 				= document.createElement('div');
			menu.className 		= 'mortal-kombat-menu';
			menu.dataset.show	= true;

		let menu_btn1				= document.createElement('span');
			menu_btn1.textContent 	= '1 player';
			menu_btn1.onclick		= () => {
				menu_hide();
				mortal_kombat.selecting_page(false);
			}

		let menu_btn2				= document.createElement('span');
			menu_btn2.textContent 	= '2 players';
			menu_btn2.onclick		= () => {
				menu_hide();
				mortal_kombat.selecting_page(true);
			}

		menu.appendChild(menu_btn1);
		menu.appendChild(menu_btn2);

		let menu_hide = function(){
			menu.dataset.show=false;
			setTimeout(()=> {
				menu.remove();
			}, 1000)
		}
		el.mortal_kombat.appendChild(menu)
	},
	selecting_page(games){
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;

		let selecting_menu = document.createElement('div');
			selecting_menu.className = 'selecting-menu'
			selecting_menu.innerHTML = `
				<h1>select your fighter</h1>
			`
			selecting_menu.dataset.show = true;

		let personage_list = document.createElement('div');
			personage_list.className = 'personage_list';

		for(var i=0; i<gl.db.length; i++){
			var item = gl.db[i];

			let personage 				= document.createElement('div');
				personage.className		= 'personage';
				personage.id			= item.id;
				personage.innerHTML		= `
					<img src='${item.icon}'alt='icon mortal-kombat parsonage'>
				`
			if(!i){
				personage.classList.add('active');
			}

			personage_list.appendChild(personage);

		}

		selecting_menu.appendChild(personage_list);
		el.mortal_kombat.appendChild(selecting_menu);

		document.body.addEventListener('keydown', function(e){
			selected_parsonage(e.keyCode);
		});	

		

		let selected_parsonage = function(keyCode){
			el.personage_item  = document.querySelectorAll('.personage');
			console.log(keyCode)
			switch (keyCode) {
				case 37:
					if(gl.personage_default !=0){
						gl.personage_default = gl.personage_default - 1;
						status(gl.personage_default);
					}
					break;
				case 38:
					if(el.personage_item[gl.personage_default-5]){
						gl.personage_default = gl.personage_default - 5;
						status(gl.personage_default);
					}
					break;
				case 39:
					if(el.personage_item[gl.personage_default+1]){
						gl.personage_default = gl.personage_default+1;
						status(gl.personage_default);
					}
					break;
				case 40:
					
					if(el.personage_item[gl.personage_default+5]){
						gl.personage_default = gl.personage_default+5;
						status(gl.personage_default);
					}
					break;

				case 13:

						
					break;
			}

			function status(){
				for(let p=0; p<el.personage_item.length; p++){
					if(p == id){
						el.personage_item[p].classList.add('active');
					}else{
						el.personage_item[p].classList.remove('active');
					}
				}
			}
		}
	}
};
document.addEventListener("DOMContentLoaded", mortal_kombat.initial);