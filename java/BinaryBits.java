import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;

public class BinaryBits {
    public static void main(String[] args) {
        System.out.println(getOneBits(161));
    }
    public static String getCapitalCity(String country)  {
        String str = getUrlContents("https://jsonmock.hackerrank.com/api/countries?name="+country);

        JSONObject jsonObject = new JSONObject("{\"phonetype\":\"N95\",\"cat\":\"WP\"}");
        JSONObject obj = (JSONObject) data_obj.get("Global");
        JSONObject json = new JSONObject(str);
        System.out.println(json.toString());
        return str;

    }
    public static List<Integer> getOneBits(int n) {
        String str = Integer.toBinaryString(n);
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '1') {
                count++;
            }
        }
        List<Integer> list = new ArrayList<>();
        list.add(count);
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '1') {
                list.add(i + 1);
            }
        }
        return list;
    }

    private static String getUrlContents(String theUrl) {
        StringBuilder content = new StringBuilder();
        try {
            URL url = new URL(theUrl);
            URLConnection urlConnection = url.openConnection();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                content.append(line + "\n");
            }
            bufferedReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return content.toString();
    }
}
