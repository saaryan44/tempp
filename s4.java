public class s4{
	public static void main(String[] args){
	
		java.util.Deque<Integer> x = new java.util.ArrayDeque<Integer>();

		for(int i=0;i<5;i++){x.push(i+1);}System.out.println(x.toString()); System.out.println(x.peek());System.out.println(x.size());
		System.out.println(x.isEmpty());for(int i=0;i<5;i++){System.out.print(x.pop()+" ");}System.out.println("\n"+x.isEmpty());
		
		for(int i=0;i<5;i++){x.push(i+1);} while(!x.isEmpty()){System.out.print("cc "+x.pop()+44+"--- ");}System.out.println();
	}
}