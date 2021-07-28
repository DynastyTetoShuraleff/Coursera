var names=new Array();
names[0]="Yackor";
names[1]="Jonny";
names[2]="Jennet";
names[3]="jaskson";
names[4]="paulyn";
names[5]="frankline";
names[6]="larryin";
names[7]="paulary";
names[8]="lauray";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}