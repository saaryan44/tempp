enum Xyz{a,b,c;}
public class en1{
	enum Hx{xyz,xx,xxx;}
	public static void main(String[] args){
		System.out.println(Xyz.a); System.out.println(Hx.xxx.toString());
		System.out.println(Xyz.valueOf("c").toString()); Hx g=Hx.valueOf("xyz"); System.out.println(g);
		
	}
}