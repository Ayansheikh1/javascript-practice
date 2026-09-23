/**
 * Book Allocation Problem
 *
 * Goal:
 * Allocate books to k students in contiguous order
 * such that the maximum pages given to any student is minimized.
 *
 * Approach:
 * Binary Search on Answer
 *
 * We search for the minimum possible "maximum pages per student".
 */

let arr = [12, 34, 67, 90];
const k = 2;


// Checks whether it is possible to allocate all books
// such that no student gets more than `mid` pages.
function isValid(arr, k, mid) {
    let numberOfStudents = 1;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        // If adding this book exceeds the allowed limit,
        // give the book to a new student.
        if (sum + arr[i] > mid) {
            numberOfStudents++;
            sum = arr[i];

            // More than k students means this capacity is not possible.
            if (numberOfStudents > k) {
                return false;
            }
        } else {
            sum += arr[i];
        }
    }

    return true;
}


function findPages(arr, k) {

    // Not enough books to give at least one book to every student.
    if (k > arr.length) return -1;

    let first = 0;
    let last = 0;
    let ans = -1;

    // Search space:
    // Minimum = largest single book
    // Maximum = total pages of all books
    for (let i = 0; i < arr.length; i++) {
        first = Math.max(first, arr[i]);
        last += arr[i];
    }

    // Binary search for the minimum valid maximum pages.
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);

        if (isValid(arr, k, mid)) {

            // `mid` works, so store it and try a smaller value.
            ans = mid;
            last = mid - 1;

        } else {

            // `mid` doesn't work, so we need more capacity.
            first = mid + 1;
        }
    }

    return ans;
}

console.log(findPages(arr, k));