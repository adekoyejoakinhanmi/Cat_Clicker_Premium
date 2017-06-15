let cats = [
	{
		id : 1,
		name : "Marx",
		url : "imgs/cat_1_750.jpg",
		clickCount : 0
	},{
		id : 2,
		name : "Meerkat",
		url : "imgs/cat_2_750.jpg",
		clickCount : 0
	},{
		id : 3,
		name : "Cutie",
		url : "imgs/cat_3_750.jpeg",
		clickCount : 0
	},{
		id : 4,
		name : "Mellon",
		url : "imgs/cat_4_750.jpeg",
		clickCount : 0
	},{
		id : 5,
		name : "Mickey",
		url : "imgs/cat_5_750.jpeg",
		clickCount : 0
	}	
];


var vm = new Vue({
	el : '#app',
	data : {
		catsList : cats,
		activeCat : cats[0],
		catEdit : false,
		editingCat : {
			name : '',
			clickCount : 0,
			url : ''
		}
	},
	methods:{
		setActiveCat: function(cat) {
			this.activeCat = cat;
			//I added this to ensure that the catEdit value is changed when a new activeCat comes into view
			this.catEdit = false;
		},
		incrementClickCount : function () {
			this.activeCat.clickCount++;
		},
		toggleEdit : function () {
			this.catEdit = !this.catEdit
		},
		updateCat : function () {
			for (var i in this.editingCat) {
				if (this.editingCat[i].trim() && this.editingCat[i] !== this.activeCat[i]) {
					this.activeCat[i] = this.editingCat[i];
					this.editingCat[i] = '';
				}
			}
			this.catEdit = false;
		}
	}
});
