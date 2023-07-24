public class Paypal {

    public static int bubbleSort(char arr[])
    {
        int n = arr.length;
        int count = 0;
        for (int i = 0; i < n - 1; i++) {
            for (int j = i; j < n - i - 1; j++) {
                if (arr[j] == '0' && arr[j+1] == '1') {
                    char temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }

        }
        return count ;
    }
        public static int getSwapTime(String color) {
            char ch[] = color.toCharArray();
            return bubbleSort(ch);
        }

    public static void main(String[] args) {
        System.out.println(getSwapTime("0101"));
    }
}
