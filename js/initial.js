window.mortal_kombat  = {
	elements: {},
	getElements(){
		var el 					= mortal_kombat.elements;
			el.body				= document.querySelector('body');
			el.mortal_kombat	= document.querySelector('#motral-kombat');
	},
	globals: {
		db: [
			{	
				id		: 1,
				name	: 'Kano',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/b/b8/Kano_tower.png/revision/latest?cb=20200901155538&path-prefix=ru',
				gif     : 'https://static.wikia.nocookie.net/mortalkombat/images/3/38/KanoMk3.gif/revision/latest?cb=20210716171120&path-prefix=ru'
			},
			{
				id		: 2,
				name	: 'Nightwolf',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/c/c8/Nightwolf_tower.png/revision/latest?cb=20200828172417&path-prefix=ru',
				gif     : 'https://static.wikia.nocookie.net/mortalkombat/images/5/51/NightwolfMk3-.gif/revision/latest?cb=20210716171846&path-prefix=ru'
			},
			{
				id		: 3,
				name	: 'Sindel',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/3/39/Sindel_Tower.png/revision/latest?cb=20200826201206&path-prefix=ru',
				gif     : 'https://static.wikia.nocookie.net/mortalkombat/images/4/41/SindelMk3.gif/revision/latest?cb=20210716170824&path-prefix=ru'
			},
			{
				id		: 4,
				name	: 'Sektor',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/0/09/Sek_ladder_Calm1.png/revision/latest?cb=20120616191626&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/4/4c/SektorMk3.gif/revision/latest?cb=20210716171804&path-prefix=ru'
			},
			{
				id		: 5,
				name	: 'Cyrax',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/7/70/Cy_ladder_Calm1.png/revision/latest?cb=20120623081239&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/e/e6/CyraxMk3r.gif/revision/latest?cb=20210716171723&path-prefix=ru'
			},
			{
				id		: 6,
				name	: 'Kabal',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/3/3e/Kabal_tower.png/revision/latest?cb=20200828174232&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/1/17/KabalMk3.gif/revision/latest?cb=20210716172521&path-prefix=ru'
			},
			{
				id		: 7,
				name	: 'Sheeva',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/a/a7/Sheeva_tower.png/revision/latest?cb=20200828180023&amp;path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/5/5d/SheevaMk3.gif/revision/latest?cb=20210717040141&path-prefix=ru'
			},
			{
				id		: 8,
				name	: 'Sonya Blade',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/e/e6/Sonya_tower.png/revision/latest?cb=20200829114901&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/0/0c/SonyaMk3-.gif/revision/latest?cb=20210716171301&path-prefix=ru'
			},
			{
				id		: 9,
				name	: 'Jax',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/3/30/Jax_tower.png/revision/latest?cb=20200901130804&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/3/32/JaxMk3.gif/revision/latest?cb=20210716171029&path-prefix=ru'
			},
			{
				id		: 10,
				name	: 'Sub-Zero',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/8/86/Sub_tower.png/revision/latest?cb=20200829104722&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/9/92/SubZeroMk3.gif/revision/latest?cb=20210716171636&path-prefix=ru'
			},
			{
				id		: 11,
				name	: 'Kung Lao',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/6/6d/Lao_tower.png/revision/latest?cb=20200829120054&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/4/43/Kunglao-mk2-fix.gif/revision/latest/scale-to-width-down/28?cb=20210409154106&path-prefix=ru'
			},
			{
				id		: 12,
				name	: 'Shang Tsung',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/f/fd/ShangTsung_tower.png/revision/latest?cb=20200826082150&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/a/a1/Shangtsung-mk2.gif/revision/latest?cb=20210409155927&path-prefix=ru'
			},
			{
				id		: 13,
				name	: 'Liu Kang',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/9/9f/Liu_tower.png/revision/latest?cb=20200829080113&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/0/0b/Liu_Kang_MK2_%281%29.gif/revision/latest?cb=20210409154043&path-prefix=ru'
			},
			{
				id		: 14,
				name	: 'Raiden',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/9/9c/Raiden_tower.png/revision/latest?cb=20200901135910&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/e/ec/RAIDEN.gif/revision/latest?cb=20210408060506&path-prefix=ru'
			},
			{
				id		: 15,
				name	: 'Scorpion',
				icon	: 'https://static.wikia.nocookie.net/mortalkombat/images/c/c2/Scorp_tower.png/revision/latest?cb=20200829083157&path-prefix=ru',
				gif		: 'https://static.wikia.nocookie.net/mortalkombat/images/0/0c/SCORPION.gif/revision/latest?cb=20210408060549&path-prefix=ru'
			},
		],
		random			 :  false, 
		keydown			 : 	false,
		two_players		 :	false,
		personage_default: 	0,
		player1		     : 	[],
		player2		     : 	[],
		interval_count	 :  0,
	},
	initial(){
		mortal_kombat.getElements();
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;

		mortal_kombat.starting_page()

	},
	modal(text){
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;

		var container_modal = document.createElement('div');
			container_modal.className = 'container-modal';

		var modal = document.createElement('div')
			modal.className = 'modal';
			modal.dataset.modal = false
			modal.innerHTML = `
				${text}
			`
		container_modal.appendChild(modal);
		setTimeout(()=>{
			modal.dataset.modal = true;
		}, 200)

		setTimeout(()=>{
			rmv_modal();
		}, 3000)
		
		let rmv_modal =()=> {
			modal.dataset.modal = false;
			setTimeout(()=>{
				modal.parentNode.remove()
			}, 200)
		}

		el.body.appendChild(container_modal)
	},
	starting_page(){
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;

		let menu 				= document.createElement('div');
			menu.className 		= 'mortal-kombat-menu bg';
			menu.dataset.show	= false;

		let menu_btn1				= document.createElement('span');
			menu_btn1.className 	= 'white';
			menu_btn1.textContent 	= '1 player';
			menu_btn1.onclick		= () => {
				menu_hide();
				mortal_kombat.selecting_page(false);
			}

		let menu_btn2				= document.createElement('span');
			menu_btn2.className 	= 'white';
			menu_btn2.textContent 	= '2 players';
			menu_btn2.onclick		= () => {
				menu_hide();
				mortal_kombat.selecting_page(true);
			}

		menu.appendChild(menu_btn1);
		menu.appendChild(menu_btn2);


		setTimeout(()=> {
			menu.dataset.show	= true;
		}, 200)

		let menu_hide = function(){
			menu.dataset.show=false;
		}
		el.mortal_kombat.appendChild(menu)
	},
	selecting_page(games){
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;

		if(games){
			gl.two_players = true;
			mortal_kombat.modal('two player mode');
		}else {
			mortal_kombat.modal('single player mode');
		}

		let preview = document.createElement('div');
			preview.className = 'preview_parsonage';
			preview.innerHTML = `
				<img src='${gl.db[0].gif}' alt='icon'>
				<img src='${gl.db[0].gif}' alt='icon'>
			`

		let selecting_menu = document.createElement('div');
			selecting_menu.className = 'selecting-menu';
			selecting_menu.dataset.show = false;
			selecting_menu.innerHTML = `
				<h1 class='white'>select your fighter</h1>
			`
		let personage_list = document.createElement('div');
			personage_list.className = 'personage_list bg';

		for(var i=0; i<gl.db.length; i++){
			var item = gl.db[i];

			let personage 				= document.createElement('div');
				personage.className		= 'personage';
				personage.id			= item.id;
				personage.innerHTML		= `
					<img src='${item.icon}'alt='icon mortal-kombat parsonage'>
					<p class='white'>${item.name}</p>
				`
			if(!i){
				personage.classList.add('active');
				preview_parsonage(item.id);
			}

			personage_list.appendChild(personage);

		}

		personage_list.appendChild(preview)
		selecting_menu.appendChild(personage_list);
		el.mortal_kombat.appendChild(selecting_menu);

		setTimeout(()=> {
			selecting_menu.dataset.show	= true;
		}, 200)

		document.body.addEventListener('keydown', function(e){
			if(!gl.keydown){
				selected_parsonage(e.keyCode);
			}
		});	

		let selected_parsonage = function(keyCode){
			el.personage_item  = document.querySelectorAll('.personage');
			let max_right	   = [4,9];
			let max_left	   = [5, 10];

			switch (keyCode) {
				case 37:
					if(gl.personage_default !=0 && !max_left.some((x)=> { return x == gl.personage_default})){
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
					if(el.personage_item[gl.personage_default+1] && !max_right.some((x)=> { return x == gl.personage_default})){
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
					add_parsonage(el.personage_item[gl.personage_default].id, false);
					break;
			}

			function status(id){
				for(let p=0; p<el.personage_item.length; p++){
					if(p == id){
						el.personage_item[p].classList.add('active');
						preview_parsonage(el.personage_item[p].id)
					}else{
						el.personage_item[p].classList.remove('active');
					}
				}
			}
		}

		function preview_parsonage(id){
			var img = gl.db.find((x)=> { return x.id == id});
		
			if(gl.player1.length==0){
				preview.children[0].src = img.gif;
			}else{
				preview.children[1].src = img.gif;
			}

		}
		function random_personage(interval){
			let rand = 1 + Math.random() * (gl.db.length - 1);
			let id 	 = Math.round(rand);

			el.personage_item.forEach((el)=> {
				if(el.id == id){
					el.classList.add('active');
					preview_parsonage(id);
					gl.personage_default = id-1;
					if(!interval){
						gl.random = true;
						add_parsonage(id, true)
					}
				}else{
					el.classList.remove('active');
				}
			})
		}

		function add_parsonage(id, status){
	
			el.personage_item.forEach(element => {
				if(element.id == id){
					element.classList.remove('active');
					if(!gl.two_players && !gl.random){
						gl.keydown = true;
						
						let interval = setInterval(()=> {
							if(gl.interval_count == 5){
								clearInterval(interval);
								random_personage(false);
							}else {
								random_personage(true);
							}
							gl.interval_count++;
						}, 1500)

						if(!status){
							gl.player1 = gl.db.find((x)=> { return x.id == id});
							element.dataset.player = 1;
							mortal_kombat.modal(`First player selected ${gl.player1.name}`);
						}
					}

					if(gl.random){

						if(status){
							gl.player2 = gl.db.find((x)=> { return x.id == id});
							element.dataset.player = 2;
							mortal_kombat.modal(`Two player selected ${gl.player2.name}`);
						}


						setTimeout(()=> {
							selecting_menu.dataset.show = false;
							mortal_kombat.preview_page();
						}, 2000)
						
					}

					if(gl.two_players){
						
						if(gl.player1.length == 0){
							gl.player1 = gl.db.find((x)=> { return x.id == id});
							element.dataset.player = 1;
							mortal_kombat.modal(`First player selected ${gl.player1.name}`);
							el.personage_item[0].classList.add('active');
							gl.personage_default = +el.personage_item[0].id-1;

						}else {
							
							gl.player2 = gl.db.find((x)=> { return x.id == id});
							mortal_kombat.modal(`Two player selected ${gl.player2.name}`);
							element.dataset.player = 2;
							gl.keydown = true;

							setTimeout(()=> {
								selecting_menu.dataset.show = false;
								mortal_kombat.preview_page();
							}, 2000)
					
						}
					}
				}
			});
		}
	},
	preview_page(){
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;

		let random 	= [];
		let newArr 	= [];
		let max_r  	=  6;
		let navigation = [81, 87, 69, 82, 84, 89] 

		for(var i=0;i<=gl.db.length - 1;i++){
			random.push(i)
		}
		 
		for(var j = 1; j<=max_r; j++){
			newArr.push(random.splice(Math.random()*random.length,1)[0]);
		}

		let ul = document.createElement('ul')

		for(var p=0; p<newArr.length; p++){
			let item = newArr[p];
			let db 		= gl.db.find((x)=> { return x.id == item});
			if(db){
				var li 		= document.createElement('li');
					li.dataset.navkey = navigation[p];
					li.id	= db.id;
					li.innerHTML = `
						<img src='${db.icon}' alt='icon'>
						${db.name}
					`;

				ul.appendChild(li);
			}
		}
			
		document.body.addEventListener('keydown', function(e){
			change(e.keyCode);
		});	

		let change = (el)=> {
			switch (el) {
				case 81:
					change_personage(el);
					break;
				case 87:
					change_personage(el);
					break;
				case 69:
					change_personage(el);
					break;
				case 82:
					change_personage(el);
					break;
				case 84:
					change_personage(el);
					break;
				case 89:
					change_personage(el);
					break;

			}

			function change_personage(id){
		
				document.querySelectorAll('.random_list ul li').forEach((li)=> {
					if(li.dataset.navkey == id){
						var db 		= gl.db.find((x)=> { return x.id == li.id});
						var fighter = document.querySelectorAll('.previe-fighter')[0];

						fighter.innerHTML =  `
							<p class='white'>${db.name}</p>
							<img src='${db.gif}' alt='personage'>
						`
					}
				})
			}
		}

		let previe_page = document.createElement('div');
			previe_page.className = 'previe_page';
			previe_page.dataset.show = false;
			previe_page.innerHTML = `
				<h1 class='white'>battle 1</h1>
				<div class='previe bg'>
					<div class='previe-fighter'>
						<p class='white'>${gl.player1.name}</p>
						<img src='${gl.player1.gif}' alt='personage'>
					</div>
					<div class='random_list'>
						${ul.outerHTML}
					</div>
					<div class='previe-fighter'>
						<p class='white'>${gl.player2.name}</p>
						<img class='two' src='${gl.player2.gif}' alt='personage'>
					</div>
				</div>
			`;

		el.mortal_kombat.appendChild(previe_page);
		setTimeout(()=> {
			previe_page.dataset.show	= true;
		}, 200)

		
		setTimeout(()=> {
			previe_page.dataset.show	= false;
			mortal_kombat.finish_him()
		}, 4000)
	},
	finish_him(){
		let el = mortal_kombat.elements;
		let gl = mortal_kombat.globals;


		let video 				= document.createElement('video');
			video.width 		= '1170';
			video.autoplay 		= true;
			video.loop 			= true;
			video.src 			= 'https://media3.giphy.com/media/9bo8aUGrNj4wNX5SYF/giphy360p.mp4?cid=ecf05e47voov3uhgkrh3o1iar2x3j1vcnr72j3akcphgeedz&amp;rid=giphy360p.mp4&amp;ct=v'
		el.mortal_kombat.appendChild(video)
	}
};
document.addEventListener("DOMContentLoaded", mortal_kombat.initial);