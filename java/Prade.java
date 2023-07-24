public class Prade {
    public static int getSwapTime(String c) {
        boolean allSorted = false;
        int count = 0;
        while (!allSorted) {
            int i = 0;
            boolean tempIndicator=true;
            while (i < c.length() - 1) {
//if(ch[i]=='0' && ch[i+1]=='1'){
                if ( c.charAt(i) == '0' && c.charAt(i+1) =='1')
                {
                    c = swap(c,i,i+1);
                    i = i + 2;
                    tempIndicator=false;
                } else
                    i++;
            }
            if(tempIndicator){
                System.out.println("count " + count);
                return count;
            }
            ++count;
        }
        return count;
    }

    static String swap(String str, int i, int j)
    {
        if (j == str.length() - 1)
            return str.substring(0, i) + str.charAt(j)
                    + str.substring(i + 1, j) + str.charAt(i);

        return str.substring(0, i) + str.charAt(j)
                + str.substring(i + 1, j) + str.charAt(i)
                + str.substring(j + 1, str.length());
    }
}
