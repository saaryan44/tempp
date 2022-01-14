class s7{
	

	public static void main(String[] args){
		xyz x=new xyz(5,4);
		x.fx1("eh hello",1);x.fx1("eh ",1);x.fx1(" hello",1);x.fx1("eh hlo",1);x.fx1("uuyuuy",1);x.fx1("eh hello",1);
	}
}

class xyz{
	String []a1; int []a2; int[]a3;
	int k; int la; int p;
	public xyz(int al,int sl){this.k=sl;this.la=al; a1=new String[this.la]; a2=new int[this.la]; a3=new int[this.k]; for(int i=0;i<la;i++){a2[i]=i+1;}  java.util.Arrays.fill(this.a3,0,k,-1); this.p=0; }

	public void fx1(String x,int sn){if(this.p==this.la){System.out.println("array is full "+this.a2[this.la-1]); return;}this.a2[p]=this.a3[sn]; this.a3[sn]=p; this.p++; this.a1[this.a3[sn]]=x;System.out.println(this.a1[this.a3[sn]]);}
}