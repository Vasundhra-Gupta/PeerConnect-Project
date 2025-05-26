const arrayQuestions = [
    {
        questionId: 1,
        title: 'Two Sum',
        shortDescription: 'Find two numbers that add up to target',
        detailedDescription:
            'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Each input will have exactly one solution, and the same element may not be used twice.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/two-sum/',
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
        questionId: 2,
        title: 'Best Time to Buy and Sell Stock',
        shortDescription: 'Maximize profit by choosing a single buy-sell pair',
        detailedDescription:
            'Given an array prices where prices[i] is the price of a stock on the ith day, return the maximum profit. You may only complete one transaction.',
        difficulty: 'easy',
        leetcodeLink:
            'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
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
        questionId: 3,
        title: 'Contains Duplicate',
        shortDescription: 'Check if array contains any duplicates',
        detailedDescription:
            'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
        difficulty: 'hard',
        leetcodeLink: 'https://leetcode.com/problems/contains-duplicate/',
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
        questionId: 4,
        title: 'Maximum Subarray',
        shortDescription: 'Find the contiguous subarray with the maximum sum',
        detailedDescription:
            'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/maximum-subarray/',
        solved: false,
        tags: ['Array', 'Dynamic Programming', 'Divide and Conquer'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/maximum-subarray/editorial/',
            description:
                'Kadane’s Algorithm efficiently finds the maximum sum in O(n) time.',
            images: [],
        },
        testCases: [
            { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6' },
            { input: 'nums = [1]', output: '1' },
        ],
        companies: ['Amazon', 'Microsoft', 'Adobe'],
        frequency: '78%',
        acceptanceRate: 51.8,
        notes: 'Kadane’s Algorithm must-know',
    },
    {
        questionId: 5,
        title: 'Merge Intervals',
        shortDescription: 'Merge all overlapping intervals',
        detailedDescription:
            'Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/merge-intervals/',
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
        questionId: 6,
        title: 'Majority Element',
        shortDescription: 'Find element appearing more than n/2 times',
        detailedDescription:
            'Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/majority-element/',
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
        questionId: 7,
        title: 'Product of Array Except Self',
        shortDescription:
            'Return array such that each element is the product of all other elements',
        detailedDescription:
            'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i], without using division.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/product-of-array-except-self/',
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
        questionId: 8,
        title: 'Rotate Array',
        shortDescription: 'Rotate array to the right by k steps',
        detailedDescription:
            'Given an array, rotate the array to the right by k steps, where k is non-negative.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/rotate-array/',
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
        questionId: 9,
        title: 'Set Matrix Zeroes',
        shortDescription:
            'Modify matrix in-place such that if any cell is 0, its row and column become 0',
        detailedDescription:
            'Given an m x n integer matrix, if an element is 0, set its entire row and column to 0 in-place.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/set-matrix-zeroes/',
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
        questionId: 10,
        title: 'Spiral Matrix',
        shortDescription: 'Return all elements of the matrix in spiral order',
        detailedDescription:
            'Given an m x n matrix, return all elements of the matrix in spiral order.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/spiral-matrix/',
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
];

const stringQuestions = [
    {
        questionId: 11,
        title: 'Valid Anagram',
        shortDescription: 'Check if two strings are anagrams',
        detailedDescription:
            'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/valid-anagram/',
        solved: true,
        tags: ['String', 'Hash Table', 'Sorting'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/valid-anagram/editorial/',
            description:
                'Compare frequency of characters using hash maps or sort both strings.',
            images: [],
        },
        testCases: [
            { input: 's = "anagram", t = "nagaram"', output: 'true' },
            { input: 's = "rat", t = "car"', output: 'false' },
        ],
        companies: ['Amazon', 'Adobe'],
        frequency: '80%',
        acceptanceRate: 62.2,
        notes: 'Great starter problem',
    },
    {
        questionId: 12,
        title: 'Longest Palindromic Substring',
        shortDescription: 'Find the longest palindromic substring',
        detailedDescription:
            'Given a string s, return the longest palindromic substring in s.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/longest-palindromic-substring/',
        solved: true,
        tags: ['String', 'Dynamic Programming', 'Expand Around Center'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/longest-palindromic-substring/editorial/',
            description:
                'Use expand-around-center for O(n^2) or dynamic programming approach.',
            images: [],
        },
        testCases: [
            { input: 's = "babad"', output: '"bab" or "aba"' },
            { input: 's = "cbbd"', output: '"bb"' },
        ],
        companies: ['Google', 'Facebook'],
        frequency: '76%',
        acceptanceRate: 33.9,
        notes: 'Classic palindrome pattern problem',
    },
    {
        questionId: 13,
        title: 'Group Anagrams',
        shortDescription: 'Group strings that are anagrams',
        detailedDescription:
            'Given an array of strings strs, group the anagrams together.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/group-anagrams/',
        solved: false,
        tags: ['String', 'Hash Table'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/group-anagrams/editorial/',
            description: 'Use sorted string as key for hash map grouping.',
            images: [],
        },
        testCases: [
            {
                input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
                output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
            },
        ],
        companies: ['Amazon', 'Uber'],
        frequency: '78%',
        acceptanceRate: 62.5,
        notes: 'Sorted string or character count as keys',
    },
    {
        questionId: 14,
        title: 'Zigzag Conversion',
        shortDescription: 'Convert string into zigzag pattern',
        detailedDescription:
            'Convert a string to a zigzag pattern on a given number of rows and return it row-wise.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/zigzag-conversion/',
        solved: false,
        tags: ['String'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/zigzag-conversion/editorial/',
            description: 'Simulate zigzag row filling using direction switch.',
            images: [],
        },
        testCases: [
            {
                input: 's = "PAYPALISHIRING", numRows = 3',
                output: '"PAHNAPLSIIGYIR"',
            },
        ],
        companies: ['Google'],
        frequency: '65%',
        acceptanceRate: 49.8,
        notes: 'Simulation problem with pattern flow',
    },
    {
        questionId: 15,
        title: 'String to Integer (atoi)',
        shortDescription: 'Implement atoi function',
        detailedDescription:
            'Convert a string to a 32-bit signed integer similar to the C/C++ atoi function.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/string-to-integer-atoi/',
        solved: false,
        tags: ['String'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/string-to-integer-atoi/editorial/',
            description: 'Handle white space, sign, overflow, and digits.',
            images: [],
        },
        testCases: [
            { input: 's = "42"', output: '42' },
            { input: 's = "   -42"', output: '-42' },
        ],
        companies: ['Microsoft', 'Bloomberg'],
        frequency: '61%',
        acceptanceRate: 17.9,
        notes: 'Watch for edge cases: overflow, sign, space',
    },
    {
        questionId: 16,
        title: 'Reverse Words in a String',
        shortDescription: 'Reverse the order of words in a string',
        detailedDescription:
            'Given an input string s, reverse the order of the words.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/reverse-words-in-a-string/',
        solved: false,
        tags: ['String', 'Two Pointers'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/reverse-words-in-a-string/editorial/',
            description: 'Split by spaces, reverse list, and join back.',
            images: [],
        },
        testCases: [
            { input: 's = "the sky is blue"', output: '"blue is sky the"' },
        ],
        companies: ['Amazon', 'Apple'],
        frequency: '59%',
        acceptanceRate: 40.9,
        notes: 'Trim and handle multiple spaces',
    },
    {
        questionId: 17,
        title: 'Valid Palindrome',
        shortDescription:
            'Check if string is palindrome after removing non-alphanumerics',
        detailedDescription:
            'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/valid-palindrome/',
        solved: false,
        tags: ['String', 'Two Pointers'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/valid-palindrome/editorial/',
            description: 'Use two pointers with isalnum check.',
            images: [],
        },
        testCases: [
            { input: 's = "A man, a plan, a canal: Panama"', output: 'true' },
        ],
        companies: ['Apple', 'Google'],
        frequency: '67%',
        acceptanceRate: 46.1,
        notes: 'Ignore punctuation and cases',
    },
    {
        questionId: 18,
        title: 'Implement strStr()',
        shortDescription:
            'Return index of first occurrence of needle in haystack',
        detailedDescription:
            'Return the index of the first occurrence of needle in haystack, or -1 if not part of haystack.',
        difficulty: 'easy',
        leetcodeLink:
            'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
        solved: false,
        tags: ['String', 'Two Pointers'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/editorial/',
            description: 'Can use built-in index or implement KMP/Rabin-Karp.',
            images: [],
        },
        testCases: [
            { input: 'haystack = "hello", needle = "ll"', output: '2' },
            { input: 'haystack = "aaaaa", needle = "bba"', output: '-1' },
        ],
        companies: ['Microsoft', 'Amazon'],
        frequency: '60%',
        acceptanceRate: 43.6,
        notes: 'Basic search or advanced KMP if required',
    },
    {
        questionId: 19,
        title: 'Longest Common Prefix',
        shortDescription: 'Find longest common prefix among strings',
        detailedDescription:
            'Write a function to find the longest common prefix string amongst an array of strings.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/longest-common-prefix/',
        solved: false,
        tags: ['String', 'Trie'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/longest-common-prefix/editorial/',
            description: 'Compare characters of each string until mismatch.',
            images: [],
        },
        testCases: [
            { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
        ],
        companies: ['Google'],
        frequency: '62%',
        acceptanceRate: 41.1,
        notes: 'Can use vertical or horizontal scanning',
    },
    {
        questionId: 20,
        title: 'Check If Two String Arrays are Equivalent',
        shortDescription:
            'Check if two string arrays represent the same string',
        detailedDescription:
            'Given two string arrays word1 and word2, return true if the two arrays represent the same string.',
        difficulty: 'hard',
        leetcodeLink:
            'https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/',
        solved: false,
        tags: ['String'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/editorial/',
            description: 'Use join() to compare the final strings.',
            images: [],
        },
        testCases: [
            {
                input: 'word1 = ["ab", "c"], word2 = ["a", "bc"]',
                output: 'true',
            },
        ],
        companies: ['Amazon'],
        frequency: '58%',
        acceptanceRate: 72.6,
        notes: 'String manipulation intro problem',
    },
];

const dPQuestions = [
    {
        questionId: 21,
        title: 'Climbing Stairs',
        shortDescription: 'Count ways to reach the top with 1 or 2 steps.',
        detailedDescription:
            'Given n, return the number of distinct ways to climb to the top using either 1 or 2 steps at a time.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/climbing-stairs/',
        solved: true,
        tags: ['Dynamic Programming'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/climbing-stairs/editorial/',
            description:
                'Use recursion with memoization or a bottom-up DP array.',
            images: [],
        },
        testCases: [
            { input: 'n = 2', output: '2' },
            { input: 'n = 3', output: '3' },
        ],
        companies: ['Amazon', 'Google'],
        frequency: '75%',
        acceptanceRate: 55.3,
        notes: 'Classic Fibonacci DP pattern',
    },
    {
        questionId: 22,
        title: 'House Robber',
        shortDescription: 'Max sum without robbing adjacent houses.',
        detailedDescription:
            'Given an array of non-negative integers representing the amount of money of each house, return the maximum amount you can rob tonight without alerting the police (no two adjacent houses).',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/house-robber/',
        solved: false,
        tags: ['Dynamic Programming'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/house-robber/editorial/',
            description: 'Use DP to keep track of max loot at each house.',
            images: [],
        },
        testCases: [
            { input: 'nums = [1,2,3,1]', output: '4' },
            { input: 'nums = [2,7,9,3,1]', output: '12' },
        ],
        companies: ['Amazon', 'Microsoft'],
        frequency: '70%',
        acceptanceRate: 46.1,
        notes: 'DP with skip-one pattern',
    },
    {
        questionId: 23,
        title: 'Longest Palindromic Substring',
        shortDescription:
            'Find the longest palindromic substring in a given string.',
        detailedDescription:
            'Given a string s, return the longest palindromic substring in s.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/longest-palindromic-substring/',
        solved: false,
        tags: ['Dynamic Programming', 'String'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/longest-palindromic-substring/editorial/',
            description: 'Use 2D DP to track palindromes.',
            images: [],
        },
        testCases: [
            { input: 's = "babad"', output: '"bab"' },
            { input: 's = "cbbd"', output: '"bb"' },
        ],
        companies: ['Adobe', 'Google'],
        frequency: '60%',
        acceptanceRate: 34.1,
        notes: 'DP with palindrome checking',
    },
    {
        questionId: 24,
        title: 'Longest Increasing Subsequence',
        shortDescription: 'Find length of the longest increasing subsequence.',
        detailedDescription:
            'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/longest-increasing-subsequence/',
        solved: false,
        tags: ['Dynamic Programming', 'Binary Search'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/longest-increasing-subsequence/editorial/',
            description:
                'Use a DP array or patience sorting with binary search.',
            images: [],
        },
        testCases: [{ input: 'nums = [10,9,2,5,3,7,101,18]', output: '4' }],
        companies: ['Amazon', 'Facebook'],
        frequency: '72%',
        acceptanceRate: 47.8,
        notes: 'Key binary search + DP logic',
    },
    {
        questionId: 25,
        title: 'Partition Equal Subset Sum',
        shortDescription:
            'Check if array can be partitioned into equal sum subsets.',
        detailedDescription:
            'Given a non-empty array nums containing only positive integers, return true if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/partition-equal-subset-sum/',
        solved: true,
        tags: ['Dynamic Programming', 'Subset Sum'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/partition-equal-subset-sum/editorial/',
            description: 'Use 1D DP for subset sum target.',
            images: [],
        },
        testCases: [
            { input: 'nums = [1,5,11,5]', output: 'true' },
            { input: 'nums = [1,2,3,5]', output: 'false' },
        ],
        companies: ['Google', 'Apple'],
        frequency: '58%',
        acceptanceRate: 44.9,
        notes: 'Classic 0/1 knapsack variant',
    },
    {
        questionId: 26,
        title: 'Coin Change',
        shortDescription: 'Minimum number of coins to make given amount.',
        detailedDescription:
            'You are given coins of different denominations and a total amount. Return the fewest number of coins that make up the amount.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/coin-change/',
        solved: true,
        tags: ['Dynamic Programming'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/coin-change/editorial/',
            description: 'Use bottom-up DP with min coin tracking.',
            images: [],
        },
        testCases: [{ input: 'coins = [1, 2, 5], amount = 11', output: '3' }],
        companies: ['Amazon', 'Google'],
        frequency: '78%',
        acceptanceRate: 41.9,
        notes: 'Unbounded knapsack variant',
    },
    {
        questionId: 27,
        title: 'Edit Distance',
        shortDescription: 'Find minimum operations to convert word1 to word2.',
        detailedDescription:
            'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.',
        difficulty: 'hard',
        leetcodeLink: 'https://leetcode.com/problems/edit-distance/',
        solved: false,
        tags: ['Dynamic Programming'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/edit-distance/editorial/',
            description:
                'Use 2D DP table with insert/delete/replace operations.',
            images: [],
        },
        testCases: [{ input: 'word1 = "horse", word2 = "ros"', output: '3' }],
        companies: ['Google', 'Amazon'],
        frequency: '62%',
        acceptanceRate: 43.8,
        notes: 'DP classic problem',
    },
    {
        questionId: 28,
        title: 'Maximum Product Subarray',
        shortDescription: 'Find contiguous subarray with max product.',
        detailedDescription:
            'Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/maximum-product-subarray/',
        solved: true,
        tags: ['Dynamic Programming'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/maximum-product-subarray/editorial/',
            description: 'Track both max and min product up to current index.',
            images: [],
        },
        testCases: [{ input: 'nums = [2,3,-2,4]', output: '6' }],
        companies: ['Microsoft', 'Adobe'],
        frequency: '63%',
        acceptanceRate: 45.5,
        notes: 'Handle negatives with dual tracking',
    },
    {
        questionId: 29,
        title: 'Unique Paths',
        shortDescription:
            'Find total paths from top-left to bottom-right in grid.',
        detailedDescription:
            'There is a robot on an m x n grid. The robot can only move down or right at any point. Find the number of unique paths to the bottom-right.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/unique-paths/',
        solved: true,
        tags: ['Dynamic Programming', 'Combinatorics'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/unique-paths/editorial/',
            description: 'Use DP table or combinatorial formula.',
            images: [],
        },
        testCases: [{ input: 'm = 3, n = 7', output: '28' }],
        companies: ['Adobe', 'Google'],
        frequency: '85%',
        acceptanceRate: 58.2,
        notes: 'Simple DP or math formula',
    },
    {
        questionId: 30,
        title: 'Burst Balloons',
        shortDescription: 'Max coins by bursting balloons wisely.',
        detailedDescription:
            'Given n balloons with numbers, burst them in order to maximize coins. When you burst balloon i, coins = nums[i-1] * nums[i] * nums[i+1].',
        difficulty: 'hard',
        leetcodeLink: 'https://leetcode.com/problems/burst-balloons/',
        solved: false,
        tags: ['Dynamic Programming', 'Divide and Conquer'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/burst-balloons/editorial/',
            description: 'Use interval DP with memoization.',
            images: [],
        },
        testCases: [{ input: 'nums = [3,1,5,8]', output: '167' }],
        companies: ['Google', 'Bloomberg'],
        frequency: '55%',
        acceptanceRate: 53.4,
        notes: 'Interval DP - tricky but elegant',
    },
];

const graphQuestions = [
    {
        questionId: 31,
        title: 'Number of Islands',
        shortDescription: 'Count the number of islands in a 2D grid.',
        detailedDescription:
            'Given a 2D grid map of "1"s (land) and "0"s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/number-of-islands/',
        solved: true,
        tags: ['Graph', 'DFS', 'BFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/number-of-islands/editorial/',
            description:
                'Use DFS or BFS to traverse each island and mark visited land.',
            images: [],
        },
        testCases: [
            {
                input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
                output: '3',
            },
        ],
        companies: ['Amazon', 'Google', 'Facebook'],
        frequency: 'High',
        acceptanceRate: 50.5,
        notes: 'Classic graph traversal problem.',
    },
    {
        questionId: 32,
        title: 'Clone Graph',
        shortDescription: 'Clone an undirected graph.',
        detailedDescription:
            'Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/clone-graph/',
        solved: false,
        tags: ['Graph', 'DFS', 'BFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference: 'https://leetcode.com/problems/clone-graph/editorial/',
            description: 'Use DFS or BFS with a hash map to clone nodes.',
            images: [],
        },
        testCases: [
            {
                input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]',
                output: '[[2,4],[1,3],[2,4],[1,3]]',
            },
        ],
        companies: ['Facebook', 'Amazon', 'Microsoft'],
        frequency: 'Medium',
        acceptanceRate: 45.3,
        notes: 'Graph cloning with visited tracking.',
    },
    {
        questionId: 33,
        title: 'Course Schedule',
        shortDescription: 'Determine if you can finish all courses.',
        detailedDescription:
            'There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites. Determine if it is possible to finish all courses.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/course-schedule/',
        solved: true,
        tags: ['Graph', 'Topological Sort'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/course-schedule/editorial/',
            description:
                'Use DFS for cycle detection or Kahn’s algorithm for topological sort.',
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
        frequency: 'High',
        acceptanceRate: 41.2,
        notes: 'Cycle detection in directed graph.',
    },
    {
        questionId: 34,
        title: 'Pacific Atlantic Water Flow',
        shortDescription: 'Find cells where water can flow to both oceans.',
        detailedDescription:
            'Given an m x n matrix of non-negative integers representing the height of each unit cell, find all cells where water can flow to both the Pacific and Atlantic oceans.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/pacific-atlantic-water-flow/',
        solved: false,
        tags: ['Graph', 'DFS', 'BFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/pacific-atlantic-water-flow/editorial/',
            description:
                'Perform DFS from ocean borders and find intersection.',
            images: [],
        },
        testCases: [
            {
                input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',
                output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',
            },
        ],
        companies: ['Google', 'Amazon'],
        frequency: 'Medium',
        acceptanceRate: 45.8,
        notes: 'DFS from multiple sources.',
    },
    {
        questionId: 35,
        title: 'Redundant Connection',
        shortDescription: 'Find the redundant edge in a graph.',
        detailedDescription:
            'In this problem, a tree is a connected graph without cycles. You are given a graph that started as a tree with N nodes, with one additional edge added. Find the edge that can be removed to restore the tree.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/redundant-connection/',
        solved: true,
        tags: ['Graph', 'Union Find'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/redundant-connection/editorial/',
            description: 'Use Union Find to detect cycles.',
            images: [],
        },
        testCases: [
            {
                input: 'edges = [[1,2],[1,3],[2,3]]',
                output: '[2,3]',
            },
        ],
        companies: ['Facebook', 'Google'],
        frequency: 'Medium',
        acceptanceRate: 54.1,
        notes: 'Cycle detection using DSU.',
    },
    {
        questionId: 36,
        title: 'Graph Valid Tree',
        shortDescription: 'Check if the graph is a valid tree.',
        detailedDescription:
            'Given n nodes labeled from 0 to n-1 and a list of undirected edges, write a function to check whether these edges make up a valid tree.',
        difficulty: 'medium',
        leetcodeLink: 'https://leetcode.com/problems/graph-valid-tree/',
        solved: false,
        tags: ['Graph', 'DFS', 'Union Find'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/graph-valid-tree/editorial/',
            description: 'Check for cycles and connectivity.',
            images: [],
        },
        testCases: [
            {
                input: 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]',
                output: 'true',
            },
            {
                input: 'n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]',
                output: 'false',
            },
        ],
        companies: ['Google', 'Amazon'],
        frequency: 'Medium',
        acceptanceRate: 40.7,
        notes: 'Tree validation via DFS or Union Find.',
    },
    {
        questionId: 37,
        title: 'Alien Dictionary',
        shortDescription:
            'Determine the order of letters in an alien language.',
        detailedDescription:
            'Given a list of words sorted lexicographically in an alien language, derive the order of letters in that language.',
        difficulty: 'hard',
        leetcodeLink: 'https://leetcode.com/problems/alien-dictionary/',
        solved: false,
        tags: ['Graph', 'Topological Sort'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/alien-dictionary/editorial/',
            description: 'Build graph and perform topological sort.',
            images: [],
        },
        testCases: [
            {
                input: 'words = ["wrt","wrf","er","ett","rftt"]',
                output: '"wertf"',
            },
        ],
        companies: ['Facebook', 'Amazon'],
        frequency: 'Low',
        acceptanceRate: 30.2,
        notes: 'Topological sorting with character precedence.',
    },
    {
        questionId: 38,
        title: 'Reconstruct Itinerary',
        shortDescription: 'Reconstruct itinerary from flight tickets.',
        detailedDescription:
            'Given a list of airline tickets represented by pairs of departure and arrival airports, reconstruct the itinerary in order.',
        difficulty: 'hard',
        leetcodeLink: 'https://leetcode.com/problems/reconstruct-itinerary/',
        solved: false,
        tags: ['Graph', 'DFS', 'Eulerian Path'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/reconstruct-itinerary/editorial/',
            description: 'Use Hierholzer’s algorithm for Eulerian path.',
            images: [],
        },
        testCases: [
            {
                input: 'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',
                output: '["JFK","MUC","LHR","SFO","SJC"]',
            },
        ],
        companies: ['Google', 'Amazon'],
        frequency: 'Medium',
        acceptanceRate: 36.5,
        notes: 'Eulerian path reconstruction.',
    },
];

const binaryTreeQuestions = [
    {
        questionId: 41,
        title: 'Maximum Depth of Binary Tree',
        shortDescription: 'Find the maximum depth of a binary tree.',
        detailedDescription:
            'Given the root of a binary tree, return its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
        difficulty: 'easy',
        leetcodeLink:
            'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
        solved: true,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/maximum-depth-of-binary-tree/editorial/',
            description: 'Use DFS to traverse the tree and track the depth.',
            images: [],
        },
        testCases: [
            {
                input: 'root = [3,9,20,null,null,15,7]',
                output: '3',
            },
        ],
        companies: ['Amazon', 'Microsoft', 'Facebook'],
        frequency: 'High',
        acceptanceRate: 72.3,
        notes: 'Basic DFS traversal problem.',
    },
    {
        questionId: 42,
        title: 'Binary Tree Level Order Traversal',
        shortDescription: 'Return the level order traversal of a binary tree.',
        detailedDescription:
            "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/binary-tree-level-order-traversal/',
        solved: false,
        tags: ['Binary Tree', 'BFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/binary-tree-level-order-traversal/editorial/',
            description: 'Use BFS with a queue to traverse each level.',
            images: [],
        },
        testCases: [
            {
                input: 'root = [3,9,20,null,null,15,7]',
                output: '[[3],[9,20],[15,7]]',
            },
        ],
        companies: ['Google', 'Amazon', 'Apple'],
        frequency: 'High',
        acceptanceRate: 61.2,
        notes: 'Classic BFS traversal.',
    },
    {
        questionId: 43,
        title: 'Binary Tree Right Side View',
        shortDescription: 'Return the right side view of a binary tree.',
        detailedDescription:
            'Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/binary-tree-right-side-view/',
        solved: true,
        tags: ['Binary Tree', 'BFS', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/binary-tree-right-side-view/editorial/',
            description:
                'Use BFS or DFS to capture the rightmost node at each level.',
            images: [],
        },
        testCases: [
            {
                input: 'root = [1,2,3,null,5,null,4]',
                output: '[1,3,4]',
            },
        ],
        companies: ['Facebook', 'Amazon'],
        frequency: 'Medium',
        acceptanceRate: 56.7,
        notes: 'View-based traversal problem.',
    },
    {
        questionId: 44,
        title: 'Serialize and Deserialize Binary Tree',
        shortDescription:
            'Design an algorithm to serialize and deserialize a binary tree.',
        detailedDescription:
            'Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored or transmitted. Design an algorithm to serialize and deserialize a binary tree.',
        difficulty: 'hard',
        leetcodeLink:
            'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
        solved: false,
        tags: ['Binary Tree', 'Design'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/editorial/',
            description:
                'Use pre-order traversal with null markers for serialization.',
            images: [],
        },
        testCases: [
            {
                input: 'root = [1,2,3,null,null,4,5]',
                output: '[1,2,3,null,null,4,5]',
            },
        ],
        companies: ['Google', 'Amazon', 'Microsoft'],
        frequency: 'High',
        acceptanceRate: 47.8,
        notes: 'Tree serialization problem.',
    },
    {
        questionId: 45,
        title: 'Binary Tree Paths',
        shortDescription: 'Return all root-to-leaf paths in a binary tree.',
        detailedDescription:
            'Given the root of a binary tree, return all root-to-leaf paths in any order.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/binary-tree-paths/',
        solved: true,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/binary-tree-paths/editorial/',
            description: 'Use DFS to explore all paths from root to leaves.',
            images: [],
        },
        testCases: [
            {
                input: 'root = [1,2,3,null,5]',
                output: '["1->2->5","1->3"]',
            },
        ],
        companies: ['Apple', 'Amazon'],
        frequency: 'Medium',
        acceptanceRate: 63.5,
        notes: 'Path enumeration problem.',
    },
    {
        questionId: 46,
        title: 'Invert Binary Tree',
        shortDescription: 'Invert a binary tree.',
        detailedDescription:
            'Given the root of a binary tree, invert the tree, and return its root.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/invert-binary-tree/',
        solved: false,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/invert-binary-tree/editorial/',
            description: 'Swap left and right children recursively.',
            images: [],
        },
        testCases: [
            {
                input: 'root = [4,2,7,1,3,6,9]',
                output: '[4,7,2,9,6,3,1]',
            },
        ],
        companies: ['Google', 'Facebook'],
        frequency: 'High',
        acceptanceRate: 69.4,
        notes: 'Tree inversion problem.',
    },
    {
        questionId: 47,
        title: 'Lowest Common Ancestor of a Binary Tree',
        shortDescription:
            'Find the lowest common ancestor of two nodes in a binary tree.',
        detailedDescription:
            'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.',
        difficulty: 'medium',
        leetcodeLink:
            'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
        solved: true,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/editorial/',
            description:
                'Use DFS to find the LCA by checking left and right subtrees.',
            images: [],
        },
        testCases: [
            {
                input: 'root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1',
                output: '3',
            },
        ],
        companies: ['Amazon', 'Microsoft'],
        frequency: 'High',
        acceptanceRate: 55.2,
        notes: 'Ancestor finding problem.',
    },
    {
        questionId: 48,
        title: 'Diameter of Binary Tree',
        shortDescription: 'Find the diameter of a binary tree.',
        detailedDescription:
            'Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree.',
        difficulty: 'easy',
        leetcodeLink: 'https://leetcode.com/problems/diameter-of-binary-tree/',
        solved: false,
        tags: ['Binary Tree', 'DFS'],
        supportedLanguages: ['python', 'javascript', 'java', 'c++'],
        editorial: {
            reference:
                'https://leetcode.com/problems/diameter-of-binary-tree/editorial/',
            description:
                'Compute the depth of left and right subtrees and update the diameter.',
            images: [],
        },
        testCases: [
            {
                input: 'root = [1,2,3,4,5]',
                output: '3',
            },
        ],
        companies: ['Facebook', 'Amazon'],
        frequency: 'Medium',
        acceptanceRate: 65.1,
        notes: 'Longest path computation.',
    },
];

export const questionsByTopics = {
    t001: arrayQuestions,
    t002: stringQuestions,
    t003: dPQuestions,
    t004: graphQuestions,
    t005: binaryTreeQuestions,
};
