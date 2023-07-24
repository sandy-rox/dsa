import java.util.HashSet;
import java.util.Set;

public class ContainDuplicate {
        public static boolean containsDuplicate(int[] nums) {
            Set<Integer> set = new HashSet<>();
            boolean flag = false;
            for (int idx = 0; idx < nums.length; idx++) {
                if(set.contains(nums[idx])) {
                    flag =  true;
                    break;
                }
                else {
                    set.add(nums[idx]);
                }
            }
            return  flag;
        }

    public static void main(String[] args) {
        int[] nums = {1,2,3,1};
        System.out.println(containsDuplicate(nums));
    }
}
