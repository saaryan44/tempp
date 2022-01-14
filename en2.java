public class en2{
	enum Xyz{a,b,c;};	
	public static void main(String[] args){
	Xyz[] arr=Xyz.values(); System.out.println(java.util.Arrays.toString(arr));
	System.out.println(arr[2].ordinal());
	for(Xyz f:arr){System.out.print(f.ordinal()+" ");} System.out.println();
	System.out.println(Xyz.valueOf(arr[1].toString()).toString());
}
}