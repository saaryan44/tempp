public class s5{
	

	public static void main(String[] args){
		Gomu q=new Gomu();System.out.println(q.isEmpty()); for(int i=0;i<9;i++){q.push(i-10);}System.out.println(q.size());System.out.println(q.isEmpty());System.out.println(q.toString());
		System.out.println(q.peek()); for(int i=0;i<8;i++){System.out.printf("%d ",q.pop()*10);} System.out.println(q.pop());
		System.out.println(q.toString()); System.out.println(q.size());
		
			
	}
}
 interface Stack<E>{
		public boolean isEmpty();
		public E peek();
		public void push(E e);
		public E pop();
		public E size();
		
	}	
class Gomu implements Stack<Integer>{
		java.util.Deque<Integer> x=new java.util.ArrayDeque<Integer>();
		public boolean isEmpty(){return this.x.isEmpty();}
		public Integer peek(){return this.x.peek();}
		public void push(Integer g){this.x.push(g);}
		public Integer pop(){return this.x.pop();}
		public Integer size(){return this.x.size();}
		public String toString(){return this.x.toString();}	
	}