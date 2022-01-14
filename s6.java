class s6{

	public static void main(String[] args){
		Xyz x=new Xyz();
		x.gx1("hello world");System.out.printf("%d  %s,  \"%s\" is at the  middle\n",x.g,x.y1.fx1(),x.gx2()); 
		x.gx1("programming is mechanical assembling and dsa is machine design");
		x.gx1("third item on stack...");System.out.println(x.y1.x2.x2.fx1());	
	}
}

class Abc{

	public Abc x1;public Abc x2; 
	private String a;
	public Abc(String x){this.a=x; this.x1=null;this.x2=null;}
	public String fx1(){return this.a;}
}

class Xyz{
	public Abc y1=null; public Abc y2=null; public int g=0;
	public void gx1(String data){

		if(this.g==0){g++; this.y1=new Abc(data); this.y2=this.y1; return; }
		g++; Abc temp=new Abc(data); temp.x2=this.y1; this.y1=temp; this.y1.x2.x1=this.y1; 
		if(g%2==0){return;}else{this.y2=this.y2.x1; System.out.println(this.y2.fx1());}
	}

	public String gx2(){if(this.g==0){return "";} return this.y2.fx1(); }
	
}