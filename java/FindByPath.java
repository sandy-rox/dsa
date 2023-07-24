import java.util.HashMap;

public class FindByPath {
    public static void main(String[] args) {
        int c = 12;
        HashMap b = new HashMap();
        b.put("c", c);
        HashMap a = new HashMap();
        a.put("b", b);
        HashMap obj = new HashMap();
        obj.put("a", a);
        System.out.println(findByPath(obj, "a:b:c"));
    }

    public static Object findByPath(HashMap map, String path) {
        HashMap map_copy = map;
        String[] path_arr = path.split(":");
        for (int i = 0; i < path_arr.length -1; i++) {
            String key = path_arr[i];
            map_copy = (HashMap) map_copy.get(key);
        }
        String key = path_arr[path_arr.length-1];
        map_copy = (HashMap) map_copy.get(key);
        return map_copy;
    }
}
