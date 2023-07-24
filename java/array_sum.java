import java.util.*;

class array_sum {
    public static int solve(int[] nums) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int idx = 0; idx < nums.length; idx++) {
            pq.add(nums[idx]);
        }
        Iterator iterator = pq.iterator();
        int sum =0;
        while(iterator.hasNext()) {
            if(!pq.isEmpty()) {
                int el1 = pq.poll();
                if(!pq.isEmpty()) {
                    int el2 = pq.poll();
                    pq.add(el1 + el2);
                    sum = sum + el1 + el2;
                }
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        System.out.println(solve(nums));
    }
}