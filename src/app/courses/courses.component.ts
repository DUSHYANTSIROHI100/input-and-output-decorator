import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
courses=[
  {id:101,name:'javaScript for begginers',author:'john heikela',duration:48,type:'Free',
price:0.00,rating:3.5,image:'assets/product-image-1.jpg',description:'lorem ipsum i love you baby are you fine and we are good are we are fine we are good'
},

  {id:101,name:'javaScript for begginers',author:'john heikela',duration:48,type:'Free',
price:0.00,rating:3.5,image:'assets/product-image-2.jpg',description:'lorem ipsum i love you baby are you fine and we are good are we are fine we are good'
},

  {id:101,name:'javaScript for begginers',author:'john heikela',duration:48,type:'Free',
price:0.00,rating:3.5,image:'assets/product-image-3.jpg',description:'lorem ipsum i love you baby are you fine and we are good are we are fine we are good'
  },

  { id:101,name:'javaScript for begginers',author:'john heikela',duration:48,type:'Free',
price:0.00,rating:3.5,image:'assets/product-image-4.jpg',description:'lorem ipsum i love you baby are you fine and we are good are we are fine we are good'
},

  {id:101,name:'javaScript for begginers',author:'john heiksela',duration:48,type:'Premium',
price:0.00,rating:3.5,image:'assets/product-image-5.jpg',description:'lorem ipsum i love you baby are you fine and we are good are we are fine we are good'
},

  {id:101,name:'ll',author:'john heikela',duration:48,type:'Free',
price:0.00,rating:3.5,image:'assets/product-image-6.jpg',description:'lorem ipsum i love you baby are you fine and we are good are we are fine we are good'
},

  {id:101,name:'javaScript for begginers',author:'john heikelsa',duration:48,type:'Premium',
price:0.00,rating:3.5,image:'assets/product-image-7.jpg',description:'lorem ipsum i love you baby are you fine and we are good are we are fine we are good'
}
]

getTotalCourses(){
  return this.courses.length;
}

getTotalFreeCourses(){
  return this.courses.filter(course=>course.type==='Free').length;
}
getTotalPremiumCourses(){
  return this.courses.filter(course=>course.type==='Premium').length;
}

courseCountRadioButton:string='All';
searchText:string="";

onFilterRadioButtonChanged(data:string){
  this.courseCountRadioButton=data;
}

onSearchTestEntered(searchValue:string){
this.searchText=searchValue;
}
}
