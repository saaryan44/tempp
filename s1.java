import java.util.Stack;
public class s1{
	public static void main(String[] args){
		Stack<Integer> x=new Stack<>();
		for(int i=0;i<5;i++){x.push(i);} System.out.println(x.toString()); System.out.println(x.peek());
		System.out.printf("%d means found and %d means not found\n",x.search(3),x.search(-1)); 
		for(int i=0;i<5;i++){System.out.print(x.pop()+" ");} System.out.println("\n "+ x.toString());
	}
}