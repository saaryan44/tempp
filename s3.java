import java.util.Stack;
public class s3{

	public static void main(String[] args){

	Stack x=new Stack();x.push("hello world"); x.push("hu"); x.push(33+4); System.out.println(x+" "+x.empty());
	int[] arr={1,2,34,5}; x.addAll(java.util.Arrays.asList(arr)); System.out.println(x);
	x.clear();System.out.println(x); 
	x.push(3); System.out.println(x.contains(2)+"\t" +x.contains(3));
	x.addAll(java.util.Arrays.asList(arr)); x.containsAll(java.util.Arrays.asList(arr));
	x.push("hi"); System.out.println(x.elementAt(2)); 
	System.out.println(x); System.out.println(x.peek());
	
}
}