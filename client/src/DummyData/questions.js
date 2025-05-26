const arrayQuestions = [
    {
        questionId: 'q001',
        title: 'Two Sum',
        shortDescription: 'Find two numbers that add up to target',
        detailedDescription:
            'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Each input will have exactly one solution, and the same element may not be used twice.',
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/two-sum/',
        },
        solved: true,
        tags: ['Array', 'Hash Table'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++', 'c#', 'go'],
        editorial: {
            reference: 'https://leetcode.com/problems/two-sum/editorial/',
            description:
                'Use a hash map to store value-to-index mappings and check for complement at each step.',
            images: [
                'https://assets.leetcode.com/uploads/2020/11/04/two_sum.jpg',
            ],
        },
        testCases: [
            { input: 'nums = [2, 7, 11, 15], target = 9', output: '[0, 1]' },
            { input: 'nums = [3, 2, 4], target = 6', output: '[1, 2]' },
        ],
        companies: ['Google', 'Amazon', 'Microsoft', 'Apple'],
        frequency: '80%',
        acceptanceRate: 45.5,
        notes: 'Classic hash map problem',
    },
    {
        questionId: 'q002',
        title: 'Best Time to Buy and Sell Stock',
        shortDescription: 'Maximize profit by choosing a single buy-sell pair',
        detailedDescription:
            'Given an array prices where prices[i] is the price of a stock on the ith day, return the maximum profit. You may only complete one transaction.',
        difficulty: 'easy',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/stock-buy-sell/',
        },
        solved: false,
        tags: ['Array', 'Dynamic Programming'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/editorial/',
            description:
                'Track the minimum price so far and compute profit at each step.',
            images: [],
        },
        testCases: [
            { input: 'prices = [7,1,5,3,6,4]', output: '5' },
            { input: 'prices = [7,6,4,3,1]', output: '0' },
        ],
        companies: ['Amazon', 'Bloomberg'],
        frequency: '75%',
        acceptanceRate: 53.1,
        notes: 'Greedy single pass solution possible',
    },
    {
        questionId: 'q003',
        title: 'Contains Duplicate',
        shortDescription: 'Check if array contains any duplicates',
        detailedDescription:
            'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/contains-duplicate/',
        },
        solved: false,
        tags: ['Array', 'Hash Table', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/contains-duplicate/editorial/',
            description: 'Use a hash set to detect duplicates while iterating.',
            images: [],
        },
        testCases: [
            { input: 'nums = [1,2,3,1]', output: 'true' },
            { input: 'nums = [1,2,3,4]', output: 'false' },
        ],
        companies: ['Amazon', 'Adobe'],
        frequency: '65%',
        acceptanceRate: 60.3,
        notes: 'Set-based solution is the most optimal',
    },
    {
        questionId: 'q004',
        title: 'Maximum Subarray',
        shortDescription: 'Find the contiguous subarray with the maximum sum',
        detailedDescription:
            'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
        difficulty: 'medium',
        platform: {
            name: 'codechef',
            link: 'https://www.codechef.com/problems/MAXSUBAR',
        },
        solved: false,
        tags: ['Array', 'Dynamic Programming', 'Divide and Conquer'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/maximum-subarray/editorial/',
            description:
                "Kadane's Algorithm efficiently finds the maximum sum in O(n) time.",
            images: [],
        },
        testCases: [
            { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6' },
            { input: 'nums = [1]', output: '1' },
        ],
        companies: ['Amazon', 'Microsoft', 'Adobe'],
        frequency: '78%',
        acceptanceRate: 51.8,
        notes: "Kadane's Algorithm must-know",
    },
    {
        questionId: 'q005',
        title: 'Merge Intervals',
        shortDescription: 'Merge all overlapping intervals',
        detailedDescription:
            'Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/merge-intervals/',
        },
        solved: true,
        tags: ['Array', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/merge-intervals/editorial/',
            description:
                'Sort intervals by start time, then merge overlapping ones.',
            images: [],
        },
        testCases: [
            {
                input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
                output: '[[1,6],[8,10],[15,18]]',
            },
            { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]' },
        ],
        companies: ['Google', 'Facebook'],
        frequency: '69%',
        acceptanceRate: 51.4,
        notes: 'Sort-based greedy merging',
    },
    {
        questionId: 'q006',
        title: 'Majority Element',
        shortDescription: 'Find element appearing more than n/2 times',
        detailedDescription:
            'Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.',
        difficulty: 'easy',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/majority-element/',
        },
        solved: false,
        tags: ['Array', 'Divide and Conquer', 'Hash Table', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/majority-element/editorial/',
            description:
                'Use Boyer-Moore Voting Algorithm for O(n) time and O(1) space.',
            images: [],
        },
        testCases: [
            { input: 'nums = [3,2,3]', output: '3' },
            { input: 'nums = [2,2,1,1,1,2,2]', output: '2' },
        ],
        companies: ['Adobe', 'Google'],
        frequency: '68%',
        acceptanceRate: 64.8,
        notes: 'Voting algorithm is optimal',
    },
    {
        questionId: 'q007',
        title: 'Product of Array Except Self',
        shortDescription:
            'Return array such that each element is the product of all other elements',
        detailedDescription:
            'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i], without using division.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/product-of-array-except-self/',
        },
        solved: false,
        tags: ['Array', 'Prefix Sum'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/product-of-array-except-self/editorial/',
            description:
                'Use prefix and suffix product arrays to build final result in O(n).',
            images: [],
        },
        testCases: [
            { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
            { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' },
        ],
        companies: ['Amazon', 'Google', 'Facebook'],
        frequency: '73%',
        acceptanceRate: 61.1,
        notes: 'Careful handling of 0s',
    },
    {
        questionId: 'q008',
        title: 'Rotate Array',
        shortDescription: 'Rotate array to the right by k steps',
        detailedDescription:
            'Given an array, rotate the array to the right by k steps, where k is non-negative.',
        difficulty: 'medium',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/array-rotation/',
        },
        solved: false,
        tags: ['Array', 'Two Pointers'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/rotate-array/editorial/',
            description: 'Use array reversal technique for in-place rotation.',
            images: [],
        },
        testCases: [
            {
                input: 'nums = [1,2,3,4,5,6,7], k = 3',
                output: '[5,6,7,1,2,3,4]',
            },
            { input: 'nums = [-1,-100,3,99], k = 2', output: '[3,99,-1,-100]' },
        ],
        companies: ['Amazon', 'Microsoft'],
        frequency: '60%',
        acceptanceRate: 44.9,
        notes: 'In-place reversal based rotation is best',
    },
    {
        questionId: 'q009',
        title: 'Set Matrix Zeroes',
        shortDescription:
            'Modify matrix in-place such that if any cell is 0, its row and column become 0',
        detailedDescription:
            'Given an m x n integer matrix, if an element is 0, set its entire row and column to 0 in-place.',
        difficulty: 'medium',
        platform: {
            name: 'codechef',
            link: 'https://www.codechef.com/problems/MATZERO',
        },
        solved: true,
        tags: ['Array', 'Matrix'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/set-matrix-zeroes/editorial/',
            description:
                'Use the first row and column as markers to store zero state.',
            images: [],
        },
        testCases: [
            {
                input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
                output: '[[1,0,1],[0,0,0],[1,0,1]]',
            },
        ],
        companies: ['Amazon', 'Apple'],
        frequency: '57%',
        acceptanceRate: 54.2,
        notes: 'In-place trick using matrix markers',
    },
    {
        questionId: 'q010',
        title: 'Spiral Matrix',
        shortDescription: 'Return all elements of the matrix in spiral order',
        detailedDescription:
            'Given an m x n matrix, return all elements of the matrix in spiral order.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/spiral-matrix/',
        },
        solved: false,
        tags: ['Array', 'Matrix', 'Simulation'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/spiral-matrix/editorial/',
            description:
                'Simulate the movement by updating top, bottom, left, and right bounds.',
            images: [],
        },
        testCases: [
            {
                input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
                output: '[1,2,3,6,9,8,7,4,5]',
            },
        ],
        companies: ['Microsoft', 'Adobe'],
        frequency: '55%',
        acceptanceRate: 42.1,
        notes: 'Classic boundary-control simulation',
    },
    {
        questionId: 'q011',
        title: '3Sum',
        shortDescription: 'Find all unique triplets that sum to zero',
        detailedDescription:
            'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j != k and nums[i] + nums[j] + nums[k] == 0.',
        difficulty: 'medium',
        platform: {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/challenges/3sum/problem',
        },
        solved: false,
        tags: ['Array', 'Two Pointers', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/3sum/editorial/',
            description:
                'Sort the array and use two-pointer technique to find triplets.',
            images: [],
        },
        testCases: [
            {
                input: 'nums = [-1,0,1,2,-1,-4]',
                output: '[[-1,-1,2],[-1,0,1]]',
            },
            { input: 'nums = [0,1,1]', output: '[]' },
        ],
        companies: ['Amazon', 'Facebook', 'Google'],
        frequency: '72%',
        acceptanceRate: 32.5,
        notes: 'Handle duplicates carefully',
    },
    {
        questionId: 'q012',
        title: 'Next Permutation',
        shortDescription: 'Find the lexicographically next greater permutation',
        detailedDescription:
            'Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If not possible, rearrange to lowest possible order.',
        difficulty: 'medium',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/find-the-next-lexicographically-greater-word-than-a-given-word/',
        },
        solved: false,
        tags: ['Array', 'Two Pointers'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/next-permutation/editorial/',
            description:
                'Find the first decreasing element from end, then swap with next greater element and reverse the suffix.',
            images: [],
        },
        testCases: [
            { input: 'nums = [1,2,3]', output: '[1,3,2]' },
            { input: 'nums = [3,2,1]', output: '[1,2,3]' },
        ],
        companies: ['Amazon', 'Microsoft', 'Adobe'],
        frequency: '58%',
        acceptanceRate: 36.7,
        notes: 'Standard algorithm to remember',
    },
    {
        questionId: 'q013',
        title: 'Search in Rotated Sorted Array',
        shortDescription: 'Search target in a rotated sorted array',
        detailedDescription:
            'Given an integer array nums sorted in ascending order (with distinct values) and then rotated at some pivot, return the index of target if found, else -1.',
        difficulty: 'medium',
        platform: {
            name: 'codechef',
            link: 'https://www.codechef.com/problems/ROTSORT',
        },
        solved: true,
        tags: ['Array', 'Binary Search'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/search-in-rotated-sorted-array/editorial/',
            description:
                'Modified binary search to determine which half is sorted and if target lies within it.',
            images: [],
        },
        testCases: [
            { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
            { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
        ],
        companies: ['Amazon', 'Microsoft', 'Facebook'],
        frequency: '67%',
        acceptanceRate: 38.2,
        notes: 'Binary search with extra conditions',
    },
    {
        questionId: 'q014',
        title: 'Container With Most Water',
        shortDescription: 'Find two lines that form the largest container',
        detailedDescription:
            'Given an integer array height of length n representing vertical lines, find two lines that together with the x-axis form a container that holds the most water.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/container-with-most-water/',
        },
        solved: false,
        tags: ['Array', 'Two Pointers', 'Greedy'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/container-with-most-water/editorial/',
            description:
                'Use two pointers starting at ends, moving the shorter one inward at each step.',
            images: [],
        },
        testCases: [
            { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49' },
            { input: 'height = [1,1]', output: '1' },
        ],
        companies: ['Amazon', 'Google', 'Adobe'],
        frequency: '63%',
        acceptanceRate: 53.8,
        notes: 'Classic two-pointer problem',
    },
    {
        questionId: 'q015',
        title: 'Trapping Rain Water',
        shortDescription:
            'Calculate how much water can be trapped between bars',
        detailedDescription:
            'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
        difficulty: 'hard',
        platform: {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/challenges/trapping-rain-water/problem',
        },
        solved: false,
        tags: ['Array', 'Two Pointers', 'Dynamic Programming', 'Stack'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/trapping-rain-water/editorial/',
            description:
                'Calculate water at each index based on max left and right heights.',
            images: [],
        },
        testCases: [
            { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' },
            { input: 'height = [4,2,0,3,2,5]', output: '9' },
        ],
        companies: ['Amazon', 'Google', 'Microsoft'],
        frequency: '71%',
        acceptanceRate: 56.3,
        notes: 'Multiple approaches possible',
    },
];

const stringQuestions = [
    {
        questionId: 'qs001',
        title: 'Longest Substring Without Repeating Characters',
        shortDescription:
            'Find the length of the longest substring without repeating characters',
        detailedDescription:
            'Given a string s, find the length of the longest substring without repeating characters.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
        },
        solved: false,
        tags: ['Hash Table', 'String', 'Sliding Window'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/longest-substring-without-repeating-characters/editorial/',
            description:
                'Use sliding window with a hash map to track the indices of characters.',
            images: [],
        },
        testCases: [
            { input: '"abcabcbb"', output: '3' },
            { input: '"bbbbb"', output: '1' },
        ],
        companies: ['Amazon', 'Facebook'],
        frequency: '78%',
        acceptanceRate: 33.6,
        notes: 'Sliding window + set/hash map technique.',
    },
    {
        questionId: 'qs002',
        title: 'Valid Anagram',
        shortDescription: 'Check if two strings are anagrams',
        detailedDescription:
            'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/valid-anagram/',
        },
        solved: true,
        tags: ['String', 'Hash Table', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++', 'go'],
        editorial: {
            reference: 'https://leetcode.com/problems/valid-anagram/editorial/',
            description:
                'Use a hash map to count character occurrences or sort both strings and compare.',
            images: [],
        },
        testCases: [
            { input: 's = "anagram", t = "nagaram"', output: 'true' },
            { input: 's = "rat", t = "car"', output: 'false' },
        ],
        companies: ['Microsoft', 'Uber'],
        frequency: '65%',
        acceptanceRate: 60.7,
        notes: 'Hashing or sorting are both valid solutions.',
    },
    {
        questionId: 'qs003',
        title: 'Longest Palindromic Substring',
        shortDescription: 'Find the longest palindromic substring',
        detailedDescription:
            'Given a string s, return the longest palindromic substring in s.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/longest-palindromic-substring/',
        },
        solved: false,
        tags: ['String', 'Dynamic Programming', 'Two Pointers'],
        supportedLanguages: ['python', 'java', 'javascript', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/longest-palindromic-substring/editorial/',
            description:
                'Use expand around center or dynamic programming to check substrings.',
            images: [],
        },
        testCases: [
            { input: '"babad"', output: '"bab" or "aba"' },
            { input: '"cbbd"', output: '"bb"' },
        ],
        companies: ['Google', 'Adobe'],
        frequency: '76%',
        acceptanceRate: 31.4,
        notes: 'Classic palindrome problem with multiple approaches.',
    },
    {
        questionId: 'qs004',
        title: 'Group Anagrams',
        shortDescription: 'Group strings that are anagrams',
        detailedDescription:
            'Given an array of strings strs, group the anagrams together.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/group-anagrams/',
        },
        solved: false,
        tags: ['Hash Table', 'String', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java'],
        editorial: {
            reference:
                'https://leetcode.com/problems/group-anagrams/editorial/',
            description:
                'Use a hash map with sorted string as key to group anagrams.',
            images: [],
        },
        testCases: [
            {
                input: '["eat","tea","tan","ate","nat","bat"]',
                output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
            },
        ],
        companies: ['Facebook', 'Amazon'],
        frequency: '70%',
        acceptanceRate: 63.3,
        notes: 'Map sorted words to original groups.',
    },
    {
        questionId: 'qs005',
        title: 'Implement strStr()',
        shortDescription:
            'Return index of first occurrence of needle in haystack',
        detailedDescription:
            'Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.',
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
        },
        solved: true,
        tags: ['Two Pointers', 'String'],
        supportedLanguages: ['python', 'c++', 'java'],
        editorial: {
            reference:
                'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/editorial/',
            description:
                'Use sliding window approach or built-in methods for clarity.',
            images: [],
        },
        testCases: [
            { input: 'haystack = "hello", needle = "ll"', output: '2' },
            { input: 'haystack = "aaaaa", needle = "bba"', output: '-1' },
        ],
        companies: ['Apple', 'Bloomberg'],
        frequency: '68%',
        acceptanceRate: 39.5,
        notes: 'Common string searching task.',
    },
    {
        questionId: 'qs006',
        title: 'Add Binary',
        shortDescription: 'Add two binary strings',
        detailedDescription:
            'Given two binary strings a and b, return their sum as a binary string.',
        difficulty: 'easy',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/add-binary-strings/',
        },
        solved: false,
        tags: ['Math', 'String'],
        supportedLanguages: ['python', 'javascript', 'java'],
        editorial: {
            reference: 'https://www.geeksforgeeks.org/add-binary-strings/',
            description:
                'Simulate addition from end of both strings and track carry.',
            images: [],
        },
        testCases: [
            { input: 'a = "11", b = "1"', output: '"100"' },
            { input: 'a = "1010", b = "1011"', output: '"10101"' },
        ],
        companies: ['Adobe'],
        frequency: '55%',
        acceptanceRate: 55.5,
        notes: 'Classic simulation problem.',
    },
    {
        questionId: 'qs007',
        title: 'Reverse Words in a String',
        shortDescription: 'Reverse the words in a given string',
        detailedDescription:
            'Given an input string s, reverse the order of the words.',
        difficulty: 'medium',
        platform: {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/challenges/reverse-words-in-a-string/problem',
        },
        solved: false,
        tags: ['String', 'Two Pointers'],
        supportedLanguages: ['python', 'java'],
        editorial: {
            reference: '',
            description: 'Split the string by spaces and reverse the list.',
            images: [],
        },
        testCases: [
            { input: '"the sky is blue"', output: '"blue is sky the"' },
        ],
        companies: ['LinkedIn'],
        frequency: '60%',
        acceptanceRate: 58.9,
        notes: 'Whitespace handling is key.',
    },
    {
        questionId: 'qs008',
        title: 'Is Subsequence',
        shortDescription: 'Check if s is a subsequence of t',
        detailedDescription:
            'Given two strings s and t, check if s is a subsequence of t.',
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/is-subsequence/',
        },
        solved: true,
        tags: ['Two Pointers', 'Dynamic Programming'],
        supportedLanguages: ['python', 'javascript', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/is-subsequence/editorial/',
            description:
                'Use two-pointer approach to iterate through both strings.',
            images: [],
        },
        testCases: [
            { input: 's = "abc", t = "ahbgdc"', output: 'true' },
            { input: 's = "axc", t = "ahbgdc"', output: 'false' },
        ],
        companies: ['Google'],
        frequency: '59%',
        acceptanceRate: 48.3,
        notes: 'Use pointer movement strategy.',
    },
    {
        questionId: 'qs009',
        title: 'Count and Say',
        shortDescription: 'Generate the nth term of the count-and-say sequence',
        detailedDescription:
            'Given an integer n, generate the nth term of the count-and-say sequence.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/count-and-say/',
        },
        solved: false,
        tags: ['String', 'Recursion'],
        supportedLanguages: ['python', 'javascript', 'java'],
        editorial: {
            reference: 'https://leetcode.com/problems/count-and-say/editorial/',
            description:
                'Iteratively or recursively build each term using counts of consecutive digits.',
            images: [],
        },
        testCases: [
            { input: 'n = 1', output: '"1"' },
            { input: 'n = 4', output: '"1211"' },
        ],
        companies: ['Amazon'],
        frequency: '50%',
        acceptanceRate: 47.1,
        notes: 'Pattern generation problem.',
    },
    {
        questionId: 'qs010',
        title: 'Valid Parentheses',
        shortDescription: 'Check if parentheses are valid',
        detailedDescription:
            'Given a string containing just the characters (), {}, and [], determine if the input string is valid.',
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/valid-parentheses/',
        },
        solved: true,
        tags: ['Stack', 'String'],
        supportedLanguages: ['python', 'c++', 'java'],
        editorial: {
            reference:
                'https://leetcode.com/problems/valid-parentheses/editorial/',
            description:
                'Use a stack to validate matching opening and closing brackets.',
            images: [],
        },
        testCases: [
            { input: '"()"', output: 'true' },
            { input: '"(]"', output: 'false' },
        ],
        companies: ['Amazon', 'Google'],
        frequency: '87%',
        acceptanceRate: 42.2,
        notes: 'Stack-based pattern matching.',
    },
    {
        questionId: 'qs001',
        title: 'Valid Palindrome',
        shortDescription: 'Check if a string is a palindrome',
        detailedDescription:
            'Determine whether a given string reads the same backward as forward.',
        difficulty: 'easy',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/problems/palindrome-string0817/1',
        },
        solved: false,
        tags: ['String', 'Two Pointers'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://www.geeksforgeeks.org/palindrome-string/',
            description:
                'Use two pointers to compare characters from both ends moving towards the center.',
            images: [],
        },
        testCases: [
            { input: "s = 'abba'", output: 'true' },
            { input: "s = 'abc'", output: 'false' },
        ],
        companies: ['Amazon', 'Google'],
        frequency: '70%',
        acceptanceRate: 60.0,
        notes: 'Consider ignoring non-alphanumeric characters and case sensitivity.',
    },
    {
        questionId: 'qs002',
        title: 'Group Anagrams',
        shortDescription: 'Group strings that are anagrams of each other',
        detailedDescription:
            'Given an array of strings, group the anagrams together.',
        difficulty: 'medium',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/problems/print-anagrams-together/1',
        },
        solved: false,
        tags: ['String', 'Hash Table', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/',
            description:
                'Sort each string and use a hash map to group anagrams.',
            images: [],
        },
        testCases: [
            {
                input: "strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']",
                output: "[['eat','tea','ate'],['tan','nat'],['bat']]",
            },
        ],
        companies: ['Facebook', 'Amazon'],
        frequency: '65%',
        acceptanceRate: 55.0,
        notes: 'Efficient grouping using sorted strings as keys.',
    },
    {
        questionId: 'qs003',
        title: 'Longest Common Prefix',
        shortDescription: 'Find the longest common prefix among strings',
        detailedDescription:
            'Write a function to find the longest common prefix string amongst an array of strings.',
        difficulty: 'easy',
        platform: {
            name: 'LeetCode',
            link: 'https://leetcode.com/problems/longest-common-prefix/',
        },
        solved: false,
        tags: ['String', 'Trie'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/longest-common-prefix/editorial/',
            description: 'Compare characters of strings one by one.',
            images: [],
        },
        testCases: [
            { input: "strs = ['flower','flow','flight']", output: "'fl'" },
            { input: "strs = ['dog','racecar','car']", output: "''" },
        ],
        companies: ['Google', 'Microsoft'],
        frequency: '75%',
        acceptanceRate: 50.0,
        notes: 'Consider vertical scanning or divide and conquer approaches.',
    },
    {
        questionId: 'qs004',
        title: 'Valid Anagram',
        shortDescription: 'Check if two strings are anagrams',
        detailedDescription:
            'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
        difficulty: 'easy',
        platform: {
            name: 'LeetCode',
            link: 'https://leetcode.com/problems/valid-anagram/',
        },
        solved: false,
        tags: ['String', 'Hash Table', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/valid-anagram/editorial/',
            description:
                'Sort both strings or use a hash map to count character frequencies.',
            images: [],
        },
        testCases: [
            { input: "s = 'anagram', t = 'nagaram'", output: 'true' },
            { input: "s = 'rat', t = 'car'", output: 'false' },
        ],
        companies: ['Amazon', 'Facebook'],
        frequency: '80%',
        acceptanceRate: 60.0,
        notes: 'Efficient solutions use character count arrays.',
    },
];

const dPQuestions = [
    {
        questionId: 'qdp001',
        title: 'Longest Increasing Subsequence',
        shortDescription:
            'Find length of longest increasing subsequence in an array',
        detailedDescription:
            'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
        difficulty: 'medium',
        platform: {
            name: 'gfg',
            link: 'https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1',
        },
        solved: false,
        tags: ['Dynamic Programming', 'Binary Search'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/',
            description:
                'Use DP to build LIS lengths for each index by checking previous smaller elements.',
            images: [
                'https://media.geeksforgeeks.org/wp-content/uploads/longincsubseq.png',
            ],
        },
        testCases: [
            { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4' },
            { input: 'nums = [0,1,0,3,2,3]', output: '4' },
        ],
        companies: ['Google', 'Microsoft', 'Amazon'],
        frequency: 'high',
        acceptanceRate: 52.0,
        notes: 'Classic DP problem with O(n^2) solution; O(n log n) optimized using binary search.',
    },
    {
        questionId: 'qdp002',
        title: 'Climbing Stairs',
        shortDescription: 'Count ways to reach the top of stairs',
        detailedDescription:
            'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. Return the number of distinct ways to reach the top.',
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/climbing-stairs/',
        },
        solved: true,
        tags: ['Dynamic Programming', 'Math'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++', 'c#'],
        editorial: {
            reference:
                'https://leetcode.com/problems/climbing-stairs/solution/',
            description:
                'Use DP to store number of ways to reach each step using bottom-up approach.',
            images: ['https://assets.leetcode.com/uploads/2021/03/17/1.png'],
        },
        testCases: [
            { input: 'n = 2', output: '2' },
            { input: 'n = 3', output: '3' },
        ],
        companies: ['Facebook', 'Amazon', 'Microsoft'],
        frequency: 'very high',
        acceptanceRate: 45.3,
        notes: 'Similar to Fibonacci sequence; foundational DP problem.',
    },
    {
        questionId: 'qdp003',
        title: 'Coin Change Problem',
        shortDescription: 'Count the ways to make change for a given amount',
        detailedDescription:
            'Given a set of coin denominations and an amount, find the total number of ways to make the amount using the coins.',
        difficulty: 'medium',
        platform: {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/challenges/coin-change/problem',
        },
        solved: false,
        tags: ['Dynamic Programming', 'Combinatorics'],
        supportedLanguages: ['python', 'java', 'c++'],
        editorial: {
            reference: 'https://www.geeksforgeeks.org/coin-change-dp-7/',
            description:
                'Use DP to build up number of ways from smaller subproblems, iterating over coins and amounts.',
            images: [],
        },
        testCases: [
            { input: 'coins = [1, 2, 3], amount = 4', output: '4' },
            { input: 'coins = [2, 5, 3, 6], amount = 10', output: '5' },
        ],
        companies: ['Google', 'Microsoft'],
        frequency: 'medium',
        acceptanceRate: 40.0,
        notes: 'Standard DP problem focusing on combinations rather than permutations.',
    },
    {
        questionId: 'qdp004',
        title: 'Min Cost Path',
        shortDescription:
            'Find minimum cost path to reach bottom-right in a matrix',
        detailedDescription:
            'Given a cost matrix, find the minimum cost path to reach the bottom-right cell from the top-left cell, moving only right, down, or diagonally down-right.',
        difficulty: 'medium',
        platform: {
            name: 'codechef',
            link: 'https://www.codechef.com/problems/MINPATH',
        },
        solved: false,
        tags: ['Dynamic Programming', 'Matrix'],
        supportedLanguages: ['python', 'java', 'c++', 'javascript'],
        editorial: {
            reference: 'https://www.geeksforgeeks.org/min-cost-path-dp-6/',
            description:
                'Use DP to find minimal cost by comparing costs from reachable neighbors.',
            images: [],
        },
        testCases: [{ input: 'cost = [[1,2,3],[4,8,2],[1,5,3]]', output: '8' }],
        companies: ['Amazon', 'Google'],
        frequency: 'medium',
        acceptanceRate: 35.0,
        notes: 'A classic DP matrix problem — good practice for grid-based DP.',
    },
];

const graphQuestions = [
    {
        questionId: 'qg001',
        title: 'Breadth First Search (BFS) of Graph',
        shortDescription: 'Perform BFS traversal starting from vertex 0',
        detailedDescription:
            'Given a directed graph, perform a Breadth First Search (BFS) traversal starting from vertex 0.',
        difficulty: 'easy',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1',
        },
        solved: false,
        tags: ['Graph', 'BFS', 'Traversal'],
        supportedLanguages: ['python', 'java', 'c++'],
        editorial: {
            reference:
                'https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/',
            description:
                'Use a queue to traverse the graph level by level, marking visited nodes.',
            images: [],
        },
        testCases: [
            {
                input: 'V = 5, adj = [[1,2,3],[],[4],[],[]]',
                output: '0 1 2 3 4',
            },
        ],
        companies: ['Amazon', 'Microsoft'],
        frequency: 'high',
        acceptanceRate: 70.0,
        notes: 'Fundamental graph traversal technique.',
    },
    {
        questionId: 'qg002',
        title: 'Find if Path Exists in Graph',
        shortDescription:
            'Check if a path exists between two nodes in an undirected graph',
        detailedDescription:
            'Given an undirected graph with n nodes and edges, determine if there is a valid path between two given nodes.',
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/find-if-path-exists-in-graph/',
        },
        solved: false,
        tags: ['Graph', 'DFS', 'BFS'],
        supportedLanguages: ['python', 'java', 'c++', 'javascript'],
        editorial: {
            reference:
                'https://leetcode.com/problems/find-if-path-exists-in-graph/editorial/',
            description:
                'Use DFS or BFS to traverse the graph and check for connectivity.',
            images: [],
        },
        testCases: [
            {
                input: 'n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2',
                output: 'true',
            },
        ],
        companies: ['Google', 'Facebook'],
        frequency: 'medium',
        acceptanceRate: 60.0,
        notes: 'Basic connectivity check in graphs.',
    },
    {
        questionId: 'qg003',
        title: 'Breadth First Search: Shortest Reach',
        shortDescription:
            'Find shortest distances from a source node to all other nodes',
        detailedDescription:
            'Given an undirected graph and a starting node, determine the shortest distances to all other nodes using BFS.',
        difficulty: 'medium',
        platform: {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/challenges/bfsshortreach/problem',
        },
        solved: false,
        tags: ['Graph', 'BFS', 'Shortest Path'],
        supportedLanguages: ['python', 'java', 'c++'],
        editorial: {
            reference:
                'https://www.hackerrank.com/challenges/bfsshortreach/editorial',
            description:
                'Implement BFS to compute shortest distances from the source node.',
            images: [],
        },
        testCases: [
            {
                input: 'n = 4, m = 2, edges = [[1,2],[1,3]], s = 1',
                output: '6 6 -1',
            },
        ],
        companies: ['Amazon', 'Microsoft'],
        frequency: 'medium',
        acceptanceRate: 65.0,
        notes: 'Classic BFS application for shortest paths.',
    },
    {
        questionId: 'qg004',
        title: 'Clone a Graph',
        shortDescription: 'Create a deep copy of a given graph',
        detailedDescription:
            'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.',
        difficulty: 'medium',
        platform: {
            name: 'codechef',
            link: 'https://www.codechef.com/practice/course/interview-dsa/DSAPREP_12/problems/PREP50',
        },
        solved: false,
        tags: ['Graph', 'DFS', 'BFS', 'Hash Map'],
        supportedLanguages: ['python', 'java', 'c++'],
        editorial: {
            reference: 'https://www.geeksforgeeks.org/clone-graph/',
            description:
                'Use DFS or BFS along with a hash map to clone nodes and their connections.',
            images: [],
        },
        testCases: [
            {
                input: 'Graph with nodes: 1-2, 2-3, 3-1',
                output: 'Cloned graph with same structure',
            },
        ],
        companies: ['Google', 'Facebook'],
        frequency: 'medium',
        acceptanceRate: 55.0,
        notes: 'Common problem to test understanding of graph traversal and cloning.',
    },
    {
        questionId: 'qg005',
        title: 'Number of Islands',
        shortDescription: 'Count the number of islands in a 2D grid',
        detailedDescription:
            "Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/number-of-islands/',
        },
        solved: false,
        tags: ['Graph', 'DFS', 'BFS', 'Union Find'],
        supportedLanguages: ['python', 'java', 'c++', 'javascript'],
        editorial: {
            reference:
                'https://leetcode.com/problems/number-of-islands/editorial/',
            description:
                'Use DFS or BFS to traverse each island and mark visited lands.',
            images: [],
        },
        testCases: [
            {
                input: "grid = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]",
                output: '3',
            },
        ],
        companies: ['Amazon', 'Google', 'Facebook'],
        frequency: 'high',
        acceptanceRate: 55.0,
        notes: 'Classic problem to practice graph traversal techniques.',
    },
    {
        questionId: 'qg007',
        title: 'Detect Cycle in an Undirected Graph',
        shortDescription: 'Check if an undirected graph contains a cycle',
        detailedDescription:
            'Given an undirected graph, determine whether it contains a cycle.',
        difficulty: 'medium',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1',
        },
        solved: false,
        tags: ['Graph', 'DFS', 'Union Find'],
        supportedLanguages: ['python', 'java', 'c++'],
        editorial: {
            reference:
                'https://www.geeksforgeeks.org/detect-cycle-undirected-graph/',
            description: 'Use DFS traversal or Union-Find to detect cycles.',
            images: [],
        },
        testCases: [
            { input: 'V = 5, adj = [[1],[0,2],[1,3],[2,4],[3]]', output: 'No' },
        ],
        companies: ['Amazon', 'Microsoft'],
        frequency: 'medium',
        acceptanceRate: 65.0,
        notes: 'Fundamental problem to understand cycle detection in graphs.',
    },
    {
        questionId: 'qg010',
        title: 'Topological Sort',
        shortDescription: 'Return a topological ordering of a DAG',
        detailedDescription:
            'Given a Directed Acyclic Graph (DAG), perform topological sorting of its vertices. Return any valid topological ordering.',
        difficulty: 'medium',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/problems/topological-sort/1',
        },
        solved: false,
        tags: ['Graph', 'Topological Sort', 'DFS', 'BFS'],
        supportedLanguages: ['python', 'java', 'c++'],
        editorial: {
            reference: 'https://www.geeksforgeeks.org/topological-sorting/',
            description:
                'Use DFS + stack or Kahn’s algorithm for BFS-based topological sorting.',
            images: [],
        },
        testCases: [
            {
                input: 'V = 6, adj = [[2,3], [3], [], [1], [0,1], [0,2]]',
                output: '5 4 2 3 1 0',
            },
        ],
        companies: ['Amazon', 'Microsoft', 'Google'],
        frequency: 'high',
        acceptanceRate: 60.0,
        notes: 'Topological sort is key for scheduling and dependency problems.',
    },
    {
        questionId: 'qg009',
        title: 'Course Schedule',
        shortDescription:
            'Determine if all courses can be finished given prerequisites',
        detailedDescription:
            "There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites. Determine if it's possible to finish all courses.",
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/course-schedule/',
        },
        solved: false,
        tags: ['Graph', 'Topological Sort', 'DFS', 'BFS'],
        supportedLanguages: ['python', 'java', 'c++', 'javascript'],
        editorial: {
            reference:
                'https://leetcode.com/problems/course-schedule/editorial/',
            description:
                'Use DFS to detect cycles or BFS for topological sorting to determine if all courses can be completed.',
            images: [],
        },
        testCases: [
            {
                input: 'numCourses = 2, prerequisites = [[1,0]]',
                output: 'true',
            },
            {
                input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]',
                output: 'false',
            },
        ],
        companies: ['Google', 'Facebook', 'Amazon'],
        frequency: 'high',
        acceptanceRate: 41.0,
        notes: 'Essential problem for understanding course scheduling and cycle detection.',
    },
    {
        questionId: 'qg008',
        title: 'Graph Coloring',
        shortDescription:
            'Determine if a graph can be colored with at most M colors',
        detailedDescription:
            'Given an undirected graph and an integer M, determine if the graph can be colored using at most M colors such that no two adjacent vertices have the same color.',
        difficulty: 'medium',
        platform: {
            name: 'codechef',
            link: 'https://www.codechef.com/problems/GRAPHCLR',
        },
        solved: false,
        tags: ['Graph', 'Backtracking'],
        supportedLanguages: ['python', 'java', 'c++'],
        editorial: {
            reference:
                'https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/',
            description:
                'Use backtracking to try assigning colors to vertices ensuring adjacent vertices have different colors.',
            images: [],
        },
        testCases: [
            {
                input: 'N = 4, M = 3, edges = [[0,1],[1,2],[2,3],[3,0]]',
                output: 'Yes',
            },
        ],
        companies: ['Google', 'Facebook'],
        frequency: 'medium',
        acceptanceRate: 50.0,
        notes: 'Classic problem to understand graph coloring and backtracking.',
    },
    {
        questionId: 'qg013',
        title: 'Roads and Libraries',
        shortDescription:
            'Find minimum cost to ensure every city has access to a library',
        detailedDescription:
            'Given cities and roads, with costs for building libraries and roads, calculate the minimum total cost to provide library access to all citizens.',
        difficulty: 'medium',
        platform: {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/challenges/torque-and-development/problem',
        },
        solved: false,
        tags: ['Graph', 'DFS', 'Greedy', 'Union Find'],
        supportedLanguages: ['python', 'java', 'c++'],
        editorial: {
            reference:
                'https://www.hackerrank.com/challenges/torque-and-development/editorial',
            description:
                'Build roads within components only if cheaper than building libraries in every city.',
            images: [],
        },
        testCases: [
            {
                input: 'n = 3, c_lib = 2, c_road = 1, roads = [[1,2],[3,1],[2,3]]',
                output: '4',
            },
        ],
        companies: ['Amazon'],
        frequency: 'medium',
        acceptanceRate: 48.0,
        notes: 'Involves cost analysis and graph connectivity logic.',
    },
];

const binaryTreeQuestions = [
    {
        questionId: 'bt001',
        title: 'Invert Binary Tree',
        shortDescription: 'Invert a binary tree left-to-right',
        detailedDescription:
            "Given the root of a binary tree, invert the tree by swapping each node's left and right subtrees, and return the root of the inverted tree.",
        difficulty: 'easy',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/invert-binary-tree/',
        },
        solved: true,
        tags: ['Binary Tree', 'DFS', 'BFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/invert-binary-tree/editorial/',
            description:
                'Use recursive post-order traversal or iterative level-order traversal to swap left and right children.',
            images: [
                'https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg',
            ],
        },
        testCases: [
            { input: '[4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
            { input: '[2,1,3]', output: '[2,3,1]' },
        ],
        companies: ['Google', 'Amazon'],
        frequency: '75%',
        acceptanceRate: 72.3,
        notes: 'Classic tree manipulation problem',
    },
    {
        questionId: 'bt002',
        title: 'Maximum Depth of Binary Tree',
        shortDescription: 'Find the maximum depth/height of a binary tree',
        detailedDescription:
            'Given the root of a binary tree, return its maximum depth - the number of nodes along the longest path from the root node to the farthest leaf node.',
        difficulty: 'easy',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/',
        },
        solved: false,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/maximum-depth-of-binary-tree/editorial/',
            description:
                'Recursively calculate height as 1 + max(left_height, right_height).',
            images: [],
        },
        testCases: [
            { input: '[3,9,20,null,null,15,7]', output: '3' },
            { input: '[1,null,2]', output: '2' },
        ],
        companies: ['Amazon', 'Microsoft'],
        frequency: '85%',
        acceptanceRate: 68.9,
        notes: 'Fundamental tree traversal problem',
    },
    {
        questionId: 'bt003',
        title: 'Binary Tree Level Order Traversal',
        shortDescription: 'Return nodes level by level',
        detailedDescription:
            "Given the root of a binary tree, return the level order traversal of its nodes' values (from left to right, level by level).",
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
        },
        solved: false,
        tags: ['Binary Tree', 'BFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/binary-tree-level-order-traversal/editorial/',
            description:
                'Use a queue to implement BFS, tracking nodes at each level.',
            images: [],
        },
        testCases: [
            { input: '[3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' },
            { input: '[1]', output: '[[1]]' },
        ],
        companies: ['Facebook', 'Amazon', 'Bloomberg'],
        frequency: '78%',
        acceptanceRate: 59.2,
        notes: 'Standard BFS implementation',
    },
    {
        questionId: 'bt004',
        title: 'Serialize and Deserialize Binary Tree',
        shortDescription: 'Convert tree to string and reconstruct',
        detailedDescription:
            'Design an algorithm to serialize and deserialize a binary tree. Serialization is converting a tree to a string, and deserialization is reconstructing the tree from the string.',
        difficulty: 'hard',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
        },
        solved: false,
        tags: ['Binary Tree', 'DFS', 'BFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/editorial/',
            description:
                'Use pre-order traversal with null markers for serialization, then reconstruct recursively.',
            images: [],
        },
        testCases: [
            { input: '[1,2,3,null,null,4,5]', output: '[1,2,3,null,null,4,5]' },
        ],
        companies: ['Google', 'Amazon', 'Microsoft'],
        frequency: '65%',
        acceptanceRate: 52.7,
        notes: 'Important for tree storage/transmission',
    },
    {
        questionId: 'bt005',
        title: 'Lowest Common Ancestor of BST',
        shortDescription: 'Find LCA of two nodes in BST',
        detailedDescription:
            'Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST. The LCA is the lowest node that has both nodes as descendants.',
        difficulty: 'medium',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/',
        },
        solved: true,
        tags: ['Binary Search Tree', 'LCA'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/editorial/',
            description:
                'Use BST property - LCA is where paths to p and q diverge.',
            images: [],
        },
        testCases: [
            { input: '[6,2,8,0,4,7,9,null,null,3,5], p=2, q=8', output: '6' },
            { input: '[6,2,8,0,4,7,9,null,null,3,5], p=2, q=4', output: '2' },
        ],
        companies: ['Facebook', 'Microsoft'],
        frequency: '70%',
        acceptanceRate: 56.4,
        notes: 'Easier than LCA in normal binary tree',
    },
    {
        questionId: 'bt006',
        title: 'Validate Binary Search Tree',
        shortDescription: 'Check if tree is valid BST',
        detailedDescription:
            'Given the root of a binary tree, determine if it is a valid binary search tree (BST). A BST is valid if for every node, its value is greater than all left subtree values and less than all right subtree values.',
        difficulty: 'medium',
        platform: {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/challenges/ctci-is-binary-search-tree/problem',
        },
        solved: false,
        tags: ['Binary Search Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/validate-binary-search-tree/editorial/',
            description:
                'Perform in-order traversal checking for increasing sequence, or track valid value ranges per node.',
            images: [],
        },
        testCases: [
            { input: '[2,1,3]', output: 'true' },
            { input: '[5,1,4,null,null,3,6]', output: 'false' },
        ],
        companies: ['Amazon', 'Bloomberg'],
        frequency: '73%',
        acceptanceRate: 29.8,
        notes: 'Common interview mistake is only checking immediate children',
    },
    {
        questionId: 'bt007',
        title: 'Binary Tree Right Side View',
        shortDescription: 'Return values of nodes visible from right',
        detailedDescription:
            'Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/binary-tree-right-side-view/',
        },
        solved: false,
        tags: ['Binary Tree', 'BFS', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/binary-tree-right-side-view/editorial/',
            description:
                'Modified BFS capturing last node at each level, or DFS prioritizing right side.',
            images: [],
        },
        testCases: [
            { input: '[1,2,3,null,5,null,4]', output: '[1,3,4]' },
            { input: '[1,null,3]', output: '[1,3]' },
        ],
        companies: ['Facebook', 'Amazon'],
        frequency: '62%',
        acceptanceRate: 57.3,
        notes: 'Variation of level order traversal',
    },
    {
        questionId: 'bt008',
        title: 'Count Complete Tree Nodes',
        shortDescription: 'Count nodes in complete binary tree',
        detailedDescription:
            'Given the root of a complete binary tree, return the number of nodes in the tree. A complete binary tree has all levels filled except possibly the last, which is filled left to right.',
        difficulty: 'medium',
        platform: {
            name: 'codechef',
            link: 'https://www.codechef.com/problems/COUNTNODES',
        },
        solved: false,
        tags: ['Binary Tree', 'Binary Search'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/count-complete-tree-nodes/editorial/',
            description:
                'Use complete tree properties to optimize from O(n) to O(log n × log n).',
            images: [],
        },
        testCases: [
            { input: '[1,2,3,4,5,6]', output: '6' },
            { input: '[]', output: '0' },
        ],
        companies: ['Google'],
        frequency: '55%',
        acceptanceRate: 50.2,
        notes: 'Optimized solution is non-trivial',
    },
    {
        questionId: 'bt009',
        title: 'Construct Binary Tree from Preorder and Inorder',
        shortDescription: 'Rebuild tree from traversal sequences',
        detailedDescription:
            'Given two integer arrays preorder and inorder representing the preorder and inorder traversals of a binary tree, construct and return the binary tree.',
        difficulty: 'medium',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/',
        },
        solved: false,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/editorial/',
            description:
                'Use preorder to find root, then partition inorder into left/right subtrees recursively.',
            images: [],
        },
        testCases: [
            {
                input: 'preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]',
                output: '[3,9,20,null,null,15,7]',
            },
        ],
        companies: ['Amazon', 'Microsoft'],
        frequency: '68%',
        acceptanceRate: 56.9,
        notes: 'Fundamental tree construction problem',
    },
    {
        questionId: 'bt010',
        title: 'Binary Tree Maximum Path Sum',
        shortDescription: 'Find maximum path sum in tree',
        detailedDescription:
            'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. The path sum is the sum of node values. Return the maximum path sum (path may not pass through root).',
        difficulty: 'hard',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
        },
        solved: false,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/binary-tree-maximum-path-sum/editorial/',
            description:
                'Post-order traversal tracking max path sums through each node.',
            images: [],
        },
        testCases: [
            { input: '[1,2,3]', output: '6' },
            { input: '[-10,9,20,null,null,15,7]', output: '42' },
        ],
        companies: ['Facebook', 'Amazon', 'Microsoft'],
        frequency: '60%',
        acceptanceRate: 36.8,
        notes: 'Important dynamic programming on trees',
    },
    {
        questionId: 'bt011',
        title: 'Flatten Binary Tree to Linked List',
        shortDescription: 'Convert tree to right-skewed linked list',
        detailedDescription:
            'Given the root of a binary tree, flatten the tree into a "linked list" using the same TreeNode class where the right child points to the next node and left child is always null.',
        difficulty: 'medium',
        platform: {
            name: 'hackerrank',
            link: 'https://www.hackerrank.com/challenges/flatten-tree/problem',
        },
        solved: true,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/editorial/',
            description:
                'Recursive post-order traversal with pointer manipulation.',
            images: [],
        },
        testCases: [
            {
                input: '[1,2,5,3,4,null,6]',
                output: '[1,null,2,null,3,null,4,null,5,null,6]',
            },
        ],
        companies: ['Microsoft', 'Uber'],
        frequency: '58%',
        acceptanceRate: 54.2,
        notes: 'In-place modification required',
    },
    {
        questionId: 'bt012',
        title: 'Vertical Order Traversal',
        shortDescription: 'Traverse tree column-wise',
        detailedDescription:
            "Given the root of a binary tree, return the vertical order traversal of its nodes' values. For each vertical line from left to right, return values top to bottom. Nodes in same position should be sorted by value.",
        difficulty: 'hard',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/',
        },
        solved: false,
        tags: ['Binary Tree', 'BFS', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/editorial/',
            description:
                'Track column and row indices during BFS, then sort by column, row, and value.',
            images: [],
        },
        testCases: [
            {
                input: '[3,9,20,null,null,15,7]',
                output: '[[9],[3,15],[20],[7]]',
            },
        ],
        companies: ['Facebook', 'Amazon'],
        frequency: '53%',
        acceptanceRate: 40.1,
        notes: 'Complex sorting requirements',
    },
    {
        questionId: 'bt013',
        title: 'Sum Root to Leaf Numbers',
        shortDescription: 'Sum all root-to-leaf path numbers',
        detailedDescription:
            'Each root-to-leaf path represents a number (e.g., 1->2->3 = 123). Return the total sum of all root-to-leaf numbers.',
        difficulty: 'medium',
        platform: {
            name: 'codechef',
            link: 'https://www.codechef.com/problems/SUMPATHS',
        },
        solved: false,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/sum-root-to-leaf-numbers/editorial/',
            description:
                'DFS traversal accumulating path values, sum when reaching leaves.',
            images: [],
        },
        testCases: [
            { input: '[1,2,3]', output: '25' },
            { input: '[4,9,0,5,1]', output: '1026' },
        ],
        companies: ['Amazon', 'Google'],
        frequency: '65%',
        acceptanceRate: 52.9,
        notes: 'Good path accumulation problem',
    },
    {
        questionId: 'bt014',
        title: 'Binary Tree Cameras',
        shortDescription: 'Minimum cameras to monitor all nodes',
        detailedDescription:
            'Given a binary tree, place cameras on nodes so that every node is monitored (a camera monitors parent, itself, and children). Return the minimum number of cameras needed.',
        difficulty: 'hard',
        platform: {
            name: 'gfg',
            link: 'https://www.geeksforgeeks.org/vertex-cover-problem-set-2-dynamic-programming-solution-tree/',
        },
        solved: false,
        tags: ['Binary Tree', 'DFS', 'Greedy'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/binary-tree-cameras/editorial/',
            description:
                'Post-order traversal tracking node states (covered, camera, needs coverage).',
            images: [],
        },
        testCases: [
            { input: '[0,0,null,0,0]', output: '1' },
            { input: '[0,0,null,0,null,0,null,null,0]', output: '2' },
        ],
        companies: ['Amazon', 'Google'],
        frequency: '48%',
        acceptanceRate: 42.7,
        notes: 'Advanced greedy approach',
    },
    {
        questionId: 'bt015',
        title: 'Kth Smallest Element in BST',
        shortDescription: 'Find kth smallest element in BST',
        detailedDescription:
            'Given the root of a BST and integer k, return the kth smallest value (1-indexed) of all values in the tree.',
        difficulty: 'medium',
        platform: {
            name: 'leetcode',
            link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
        },
        solved: true,
        tags: ['Binary Search Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/kth-smallest-element-in-a-bst/editorial/',
            description:
                'In-order traversal until kth element found, or augment tree with subtree counts.',
            images: [],
        },
        testCases: [
            { input: '[3,1,4,null,2], k=1', output: '1' },
            { input: '[5,3,6,2,4,null,null,1], k=3', output: '3' },
        ],
        companies: ['Amazon', 'Facebook'],
        frequency: '72%',
        acceptanceRate: 63.5,
        notes: 'Leverages BST property efficiently',
    },
];

export const questionsByTopics = {
    t001: arrayQuestions,
    t002: stringQuestions,
    t003: dPQuestions,
    t004: graphQuestions,
    t005: binaryTreeQuestions,
};
