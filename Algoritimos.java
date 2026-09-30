
public class Algoritmos {

    // 1. Número Primo
    public static boolean ehPrimo(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    // 2. Somatório
    public static long calcularSomatorio(int n) {
        long soma = 0;
        for (int i = 1; i <= n; i++) soma += i;
        return soma;
    }

    // 3. Fibonacci
    public static String calcularFibonacci(int n) {
        if (n <= 0) return "0";
        long a = 0, b = 1;
        StringBuilder seq = new StringBuilder("0");
        for (int i = 1; i < n; i++) {
            seq.append(", ").append(b);
            long temp = a + b;
            a = b;
            b = temp;
        }
        return seq.toString();
    }

    // 4. MDC
    public static int calcularMDC(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // 5. Quicksort
    public static void quicksort(int[] arr, int inicio, int fim) {
        if (inicio < fim) {
            int pivoIndex = particionar(arr, inicio, fim);
            quicksort(arr, inicio, pivoIndex - 1);
            quicksort(arr, pivoIndex + 1, fim);
        }
    }

    private static int particionar(int[] arr, int inicio, int fim) {
        int pivo = arr[fim];
        int i = inicio - 1;
        for (int j = inicio; j < fim; j++) {
            if (arr[j] <= pivo) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[fim];
        arr[fim] = temp;
        return i + 1;
    }

    // 6. Contagem
    public static int contarElementos(int[] arr) {
        int count = 0;
        for (int i = 0; i < arr.length; i++) count++;
        return count;
    }

    public static void main(String[] args) {
        System.out.println("=== BACKEND JAVA CARREGADO ===");
    }
}
