#include <iostream>
using namespace std;

int findSmallestM(int N) {
    int m = 1;
    while (true) {
        int currentRegion = 1;
        int remainingRegions = N;
        while (remainingRegions > 1) {
            currentRegion = (currentRegion + m - 1) % remainingRegions;
            if (currentRegion == 0) {
                currentRegion = remainingRegions;
            }
            if (currentRegion == 13) {
                break;
            }
            remainingRegions--;
        }
        if (currentRegion == 13) {
            return m;
        }
        m++;
    }
    // No valid m found
    return -1;
}

int main() {
    int N;
    while (true) {
        cin >> N;
        if (N == 0) {
            break;
        }
        int m = findSmallestM(N);
        cout << m << endl;
    }

    return 0;
}
