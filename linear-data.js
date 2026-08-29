window.LINEAR_DATA = {
  "source": {
    "title": "Linear Algebra Done Right",
    "edition": "4",
    "author": "Sheldon Axler",
    "license": "CC BY-NC 4.0",
    "url": "https://linear.axler.net/"
  },
  "categories": [
    {
      "slug": "ch1",
      "name_en": "Vector Spaces",
      "name_zh": "向量空间",
      "sort_order": 1
    },
    {
      "slug": "ch2",
      "name_en": "Finite-Dimensional Vector Spaces",
      "name_zh": "有限维向量空间",
      "sort_order": 2
    },
    {
      "slug": "ch3",
      "name_en": "Linear Maps",
      "name_zh": "线性映射",
      "sort_order": 3
    },
    {
      "slug": "ch4",
      "name_en": "Polynomials",
      "name_zh": "多项式",
      "sort_order": 4
    },
    {
      "slug": "ch5",
      "name_en": "Eigenvalues and Eigenvectors",
      "name_zh": "特征值和特征向量",
      "sort_order": 5
    },
    {
      "slug": "ch6",
      "name_en": "Inner Product Spaces",
      "name_zh": "内积空间",
      "sort_order": 6
    },
    {
      "slug": "ch7",
      "name_en": "Operators on Inner Product Spaces",
      "name_zh": "内积空间上的算子",
      "sort_order": 7
    },
    {
      "slug": "ch8",
      "name_en": "Operators on Complex Vector Spaces",
      "name_zh": "复向量空间上的算子",
      "sort_order": 8
    },
    {
      "slug": "ch9",
      "name_en": "Multilinear Algebra and Determinants",
      "name_zh": "多重线性代数和行列式",
      "sort_order": 9
    }
  ],
  "entries": [
    {
      "id": "1.1",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.1",
      "name_en": "complex numbers, ℂ",
      "name_zh": "复数",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A complex number is an ordered pair (a, b), where a, b ∈ ℝ, written a + bi.",
          "zh": "一个复数是一个有序对 (a, b)，其中 a, b ∈ ℝ，写成 a + bi。"
        },
        {
          "t": "bullet",
          "en": "ℂ = { a + bi : a, b ∈ ℝ }.",
          "zh": "ℂ = { a + bi : a, b ∈ ℝ }。"
        },
        {
          "t": "bullet",
          "en": "(a + bi) + (c + di) = (a + c) + (b + d)i<br>(a + bi)(c + di) = (ac − bd) + (ad + bc)i<br>with a, b, c, d ∈ ℝ.",
          "zh": "(a + bi) + (c + di) = (a + c) + (b + d)i<br>(a + bi)(c + di) = (ac − bd) + (ad + bc)i<br>其中 a, b, c, d ∈ ℝ。"
        }
      ],
      "note": null,
      "statement_en": "A complex number is an ordered pair (a, b), where a, b ∈ ℝ, written a + bi. ℂ = { a + bi : a, b ∈ ℝ }. (a + bi) + (c + di) = (a + c) + (b + d)i(a + bi)(c + di) = (ac − bd) + (ad + bc)iwith a, b, c, d ∈ ℝ.",
      "statement_zh": "一个复数是一个有序对 (a, b)，其中 a, b ∈ ℝ，写成 a + bi。 ℂ = { a + bi : a, b ∈ ℝ }。 (a + bi) + (c + di) = (a + c) + (b + d)i(a + bi)(c + di) = (ac − bd) + (ad + bc)i其中 a, b, c, d ∈ ℝ。"
    },
    {
      "id": "1.3",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.3",
      "name_en": "properties of complex arithmetic",
      "name_zh": "复数的算术性质",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "Commutativity. α + β = β + α and αβ = βα for all α, β ∈ ℂ",
          "zh": "可交换性 对于所有 α, β ∈ ℂ，都有 α + β = β + α 以及 αβ = βα。"
        },
        {
          "t": "bullet",
          "en": "Associativity. (α + β) + λ = α + (β + λ) and (αβ)λ = α(βλ) for all α, β, λ ∈ ℂ",
          "zh": "可结合性 对于所有 α, β, λ ∈ ℂ，都有 (α + β) + λ = α + (β + λ) 以及 (αβ)λ = α(βλ)。"
        },
        {
          "t": "bullet",
          "en": "Identities. λ + 0 = λ and λ1 = λ for all λ ∈ ℂ",
          "zh": "恒等元 对于所有 λ ∈ ℂ，都有 λ + 0 = λ 以及 λ1 = λ。"
        },
        {
          "t": "bullet",
          "en": "Additive inverse. For every α ∈ ℂ, there exists a unique β ∈ ℂ such that α + β = 0",
          "zh": "加法逆元 对于每个 α ∈ ℂ，都存在唯一的 β ∈ ℂ 使得 α + β = 0。"
        },
        {
          "t": "bullet",
          "en": "Multiplicative inverse. For every α ∈ ℂ with α ≠ 0, there exists a unique β ∈ ℂ such that αβ = 1",
          "zh": "乘法逆元 对于每个 α ∈ ℂ 且 α ≠ 0，都存在唯一的 β ∈ ℂ 使得 αβ = 1。"
        },
        {
          "t": "bullet",
          "en": "Distributive property. λ(α + β) = λα + λβ for all λ, α, β ∈ ℂ",
          "zh": "分配性质 对于所有 λ, α, β ∈ ℂ，都有 λ(α + β) = λα + λβ。"
        }
      ],
      "note": null,
      "statement_en": "Commutativity. α + β = β + α and αβ = βα for all α, β ∈ ℂ Associativity. (α + β) + λ = α + (β + λ) and (αβ)λ = α(βλ) for all α, β, λ ∈ ℂ Identities. λ + 0 = λ and λ1 = λ for all λ ∈ ℂ Additive inverse. For every α ∈ ℂ, there exists a unique β ∈ ℂ such that α + β = 0 Multiplicative inverse. For every α ∈ ℂ with α ≠ 0, there exists a unique β ∈ ℂ such that αβ = 1 Distributive property. λ(α + β) = λα + λβ for all λ, α, β ∈ ℂ",
      "statement_zh": "可交换性 对于所有 α, β ∈ ℂ，都有 α + β = β + α 以及 αβ = βα。 可结合性 对于所有 α, β, λ ∈ ℂ，都有 (α + β) + λ = α + (β + λ) 以及 (αβ)λ = α(βλ)。 恒等元 对于所有 λ ∈ ℂ，都有 λ + 0 = λ 以及 λ1 = λ。 加法逆元 对于每个 α ∈ ℂ，都存在唯一的 β ∈ ℂ 使得 α + β = 0。 乘法逆元 对于每个 α ∈ ℂ 且 α ≠ 0，都存在唯一的 β ∈ ℂ 使得 αβ = 1。 分配性质 对于所有 λ, α, β ∈ ℂ，都有 λ(α + β) = λα + λβ。"
    },
    {
      "id": "1.5",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.5",
      "name_en": "−𝛼, subtraction, 1/𝛼, division",
      "name_zh": "−𝛼、减法(subtraction)，1/𝛼、除法",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝛼, 𝛽 ∈ 𝐂. • Let −𝛼 denote the additive inverse of 𝛼. Thus −𝛼 is the unique complex number such that 𝛼+(−𝛼) = 0. • Subtraction on 𝐂 is defined by 𝛽−𝛼 = 𝛽+(−𝛼). • For 𝛼 ≠ 0, let 1/𝛼 and 𝛼<sub>1</sub> denote the multiplicative inverse of 𝛼. Thus 1/𝛼 is the unique complex number such that 𝛼(1/𝛼) = 1. • For𝛼≠0,divisionby𝛼isdefinedby 𝛽/𝛼 = 𝛽(1/𝛼). So that we can conveniently make definitions and prove theorems that apply to both real and complex numbers, we adopt the following notation.",
          "zh": "令 −𝛼 表示 𝛼 的加法逆元.于是 −𝛼 是唯一使得 𝛼 + (−𝛼) = 0 成立的复数. C 上的减法的定义为 对于𝛼 = ̸0，令/𝛼和 𝛼<sub>1</sub> 表示𝛼的乘法逆元.于是/𝛼是唯一使得 𝛽 − 𝛼 = 𝛽 + (−𝛼). 𝛼(1/𝛼) = 1 成立的复数. 对于 𝛼 = ̸ 0，除以 𝛼 的定义为 𝛽/𝛼 = 𝛽(1/𝛼). 为便于下定义，也便于证明对于实数和复数都适用的定理，我们采用以下记号."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝛼, 𝛽 ∈ 𝐂. • Let −𝛼 denote the additive inverse of 𝛼. Thus −𝛼 is the unique complex number such that 𝛼+(−𝛼) = 0. • Subtraction on 𝐂 is defined by 𝛽−𝛼 = 𝛽+(−𝛼). • For 𝛼 ≠ 0, let 1/𝛼 and 𝛼1 denote the multiplicative inverse of 𝛼. Thus 1/𝛼 is the unique complex number such that 𝛼(1/𝛼) = 1. • For𝛼≠0,divisionby𝛼isdefinedby 𝛽/𝛼 = 𝛽(1/𝛼). So that we can conveniently make definitions and prove theorems that apply to both real and complex numbers, we adopt the following notation.",
      "statement_zh": "令 −𝛼 表示 𝛼 的加法逆元.于是 −𝛼 是唯一使得 𝛼 + (−𝛼) = 0 成立的复数. C 上的减法的定义为 对于𝛼 = ̸0，令/𝛼和 𝛼1 表示𝛼的乘法逆元.于是/𝛼是唯一使得 𝛽 − 𝛼 = 𝛽 + (−𝛼). 𝛼(1/𝛼) = 1 成立的复数. 对于 𝛼 = ̸ 0，除以 𝛼 的定义为 𝛽/𝛼 = 𝛽(1/𝛼). 为便于下定义，也便于证明对于实数和复数都适用的定理，我们采用以下记号."
    },
    {
      "id": "1.6",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.6",
      "name_en": "𝐅",
      "name_zh": "F 在全书中，F 代表 R 或 C.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Throughout this book, 𝐅 stands for either 𝐑 or 𝐂. Thus if we prove a theorem involving 𝐅, we will know that it holds when 𝐅 is replaced with 𝐑 and when 𝐅 is replaced with 𝐂. The letter 𝐅 is used because 𝐑 and 𝐂 are examples of what are called fields. Elements of 𝐅 are called scalars. The word “scalar” (which is just a fancy word for “number”) is often used when we want to emphasize that an object is a number, as opposed to a vector (vectors will be defined soon). For 𝛼 ∈ 𝐅 and 𝑚 a positive integer, we define 𝛼<sub>𝑚</sub> to denote the product of 𝛼 with itself 𝑚 times: 𝛼 𝑚 = 𝛼 ⏟⋯ 𝛼. 𝑚 times This definition implies that (𝛼<sub>𝑚</sub>)𝑛 = 𝛼<sub>𝑚</sub>𝑛 and (𝛼𝛽)𝑚 = 𝛼<sub>𝑚</sub>𝛽<sub>𝑚</sub> for all 𝛼, 𝛽 ∈ 𝐅 and all positive integers 𝑚, 𝑛. ant examples. Lists",
          "zh": "因此，如果我们证明了一个涉及 F 的定理，我们就会知道当把 F 替换为 R 或 C 时，这个 定理也是成立的. 称 F 中的元素为标量(scalar).通常， 使用字母 F 是因为 R 和 C 都是所谓域 当我们想要强调一个对象是数，而不是向量 (field)的实例. (稍后将给出定义)时，就使用“标量”这个词(它只是“数”的一个花哨的表达法). 对于𝛼 ∈ F 以及正整数𝑚，我们定义𝛼<sub>𝑚</sub> 表示𝛼自乘𝑚次: 𝛼<sub>𝑚</sub> = 𝛼···𝛼. |{z} 𝑚个𝛼 这个定义蕴涵着，对于所有 𝛼, 𝛽 ∈ F 和所有正整数 𝑚, 𝑛，有 (𝛼<sub>𝑚</sub>)𝑛 = 𝛼<sub>𝑚</sub>𝑛 及 (𝛼𝛽)𝑚 = 𝛼<sub>𝑚</sub> 𝛽<sub>𝑚</sub>. 组 在定义 R<sup>𝑛</sup> 和 C 𝑛 之前，我们先看两个重要的例子."
        }
      ],
      "note": null,
      "statement_en": "Throughout this book, 𝐅 stands for either 𝐑 or 𝐂. Thus if we prove a theorem involving 𝐅, we will know that it holds when 𝐅 is replaced with 𝐑 and when 𝐅 is replaced with 𝐂. The letter 𝐅 is used because 𝐑 and 𝐂 are examples of what are called fields. Elements of 𝐅 are called scalars. The word “scalar” (which is just a fancy word for “number”) is often used when we want to emphasize that an object is a number, as opposed to a vector (vectors will be defined soon). For 𝛼 ∈ 𝐅 and 𝑚 a positive integer, we define 𝛼𝑚 to denote the product of 𝛼 with itself 𝑚 times: 𝛼 𝑚 = 𝛼 ⏟⋯ 𝛼. 𝑚 times This definition implies that (𝛼𝑚)𝑛 = 𝛼𝑚𝑛 and (𝛼𝛽)𝑚 = 𝛼𝑚𝛽𝑚 for all 𝛼, 𝛽 ∈ 𝐅 and all positive integers 𝑚, 𝑛. ant examples. Lists",
      "statement_zh": "因此，如果我们证明了一个涉及 F 的定理，我们就会知道当把 F 替换为 R 或 C 时，这个 定理也是成立的. 称 F 中的元素为标量(scalar).通常， 使用字母 F 是因为 R 和 C 都是所谓域 当我们想要强调一个对象是数，而不是向量 (field)的实例. (稍后将给出定义)时，就使用“标量”这个词(它只是“数”的一个花哨的表达法). 对于𝛼 ∈ F 以及正整数𝑚，我们定义𝛼𝑚 表示𝛼自乘𝑚次: 𝛼𝑚 = 𝛼···𝛼. |{z} 𝑚个𝛼 这个定义蕴涵着，对于所有 𝛼, 𝛽 ∈ F 和所有正整数 𝑚, 𝑛，有 (𝛼𝑚)𝑛 = 𝛼𝑚𝑛 及 (𝛼𝛽)𝑚 = 𝛼𝑚 𝛽𝑚. 组 在定义 R𝑛 和 C 𝑛 之前，我们先看两个重要的例子."
    },
    {
      "id": "1.8",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.8",
      "name_en": "list, length",
      "name_zh": "组(list)、长度",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑛 is a nonnegative integer. A list of length 𝑛 is an ordered collec- tion of 𝑛 elements (which might be numbers, other lists, or more abstract objects). • Two lists are equal if and only if they have the same length and the same elements in the same order. Lists are often written as elements separated by commas and surrounded by parentheses. Thus a list of length two is an ordered pair that might be written as (𝑎, 𝑏). A list of length three is an ordered triple that might be written as (𝑥, 𝑦, 𝑧). A list of length 𝑛 might look like this: (𝑧<sub>1</sub>,..., 𝑧<sub>𝑛</sub>). Sometimes we will use the word list without specifying its length. Remember, however, that by definition each list has a finite length that is a nonnegative integer. Thus an object that looks like (𝑥<sub>1</sub>, 𝑥<sub>2</sub>,... ), which might be said to have infinite length, is not a list. A list of length 0 looks like this: ( ). We consider such an object to be a list so that some of our theorems will not have trivial exceptions. Lists differ from finite sets in two ways: in lists, order matters and repetitions have meaning; in sets, order and repetitions are irrelevant.",
          "zh": "假设 𝑛 是非负整数.一个长度为 𝑛 的组是 𝑛 个有顺序的元素，这些元素可能是数、其 他组或是更抽象的对象. 两个组是相等的，当且仅当它们具有相同的长度和按相同顺序排列的相同元素. 组的通常写法，是将其中元素以逗号分 许多数学家将长度为 𝑛 的组称为 𝑛 元组(𝑛- 隔并用圆括号括起来.于是，长度为 2 的组就 tuple). 是有序对，可以写成 (𝑎, 𝑏).长度为 3 的组就是有序三元组，可以写成 (𝑥, 𝑦, 𝑧).长度为 𝑛 的组 可能看起来是这样的: (𝑧<sub>1</sub>,…,𝑧<sub>𝑛</sub>). 有时我们会单用组这个词而不明说其长度.但请记住，根据定义，每个组都具有有限长度， 且这长度是非负整数.从而，对于形如 (𝑥<sub>1</sub>, 𝑥<sub>2</sub>, …) 的对象，我们可以说它“具有无限的长度”， 所以它不是组. 长度是 0 的组看起来是这样的:().我们将这样的对象看成组，是为了使一些定理不出现 平凡的例外情形. 组与有限集有两方面差异:在组中，顺序很重要，并且重复是有含义的;而在集合里，顺 序和重复都无关紧要."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑛 is a nonnegative integer. A list of length 𝑛 is an ordered collec- tion of 𝑛 elements (which might be numbers, other lists, or more abstract objects). • Two lists are equal if and only if they have the same length and the same elements in the same order. Lists are often written as elements separated by commas and surrounded by parentheses. Thus a list of length two is an ordered pair that might be written as (𝑎, 𝑏). A list of length three is an ordered triple that might be written as (𝑥, 𝑦, 𝑧). A list of length 𝑛 might look like this: (𝑧1,..., 𝑧𝑛). Sometimes we will use the word list without specifying its length. Remember, however, that by definition each list has a finite length that is a nonnegative integer. Thus an object that looks like (𝑥1, 𝑥2,... ), which might be said to have infinite length, is not a list. A list of length 0 looks like this: ( ). We consider such an object to be a list so that some of our theorems will not have trivial exceptions. Lists differ from finite sets in two ways: in lists, order matters and repetitions have meaning; in sets, order and repetitions are irrelevant.",
      "statement_zh": "假设 𝑛 是非负整数.一个长度为 𝑛 的组是 𝑛 个有顺序的元素，这些元素可能是数、其 他组或是更抽象的对象. 两个组是相等的，当且仅当它们具有相同的长度和按相同顺序排列的相同元素. 组的通常写法，是将其中元素以逗号分 许多数学家将长度为 𝑛 的组称为 𝑛 元组(𝑛- 隔并用圆括号括起来.于是，长度为 2 的组就 tuple). 是有序对，可以写成 (𝑎, 𝑏).长度为 3 的组就是有序三元组，可以写成 (𝑥, 𝑦, 𝑧).长度为 𝑛 的组 可能看起来是这样的: (𝑧1,…,𝑧𝑛). 有时我们会单用组这个词而不明说其长度.但请记住，根据定义，每个组都具有有限长度， 且这长度是非负整数.从而，对于形如 (𝑥1, 𝑥2, …) 的对象，我们可以说它“具有无限的长度”， 所以它不是组. 长度是 0 的组看起来是这样的:().我们将这样的对象看成组，是为了使一些定理不出现 平凡的例外情形. 组与有限集有两方面差异:在组中，顺序很重要，并且重复是有含义的;而在集合里，顺 序和重复都无关紧要."
    },
    {
      "id": "1.10",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.10",
      "name_en": "𝑛",
      "name_zh": "𝑛",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Fix a positive integer 𝑛 for the rest of this chapter.",
          "zh": "在本章剩余内容中，将 𝑛 取为某一固定的正整数."
        }
      ],
      "note": null,
      "statement_en": "Fix a positive integer 𝑛 for the rest of this chapter.",
      "statement_zh": "在本章剩余内容中，将 𝑛 取为某一固定的正整数."
    },
    {
      "id": "1.11",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.11",
      "name_en": "F<sup>n</sup>, coordinate",
      "name_zh": "F<sup>n</sup>、坐标",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "F<sup>n</sup> is the set of all lists of length n of elements of F:",
          "zh": "F<sup>n</sup> 是全体具有 n 个 F 中元素的组所构成的集合："
        },
        {
          "t": "formula",
          "en": "F<sup>n</sup> = {(x<sub>1</sub>, …, x<sub>n</sub>) : x<sub>k</sub> ∈ F for k = 1, …, n}",
          "zh": "F<sup>n</sup> = {(x<sub>1</sub>, …, x<sub>n</sub>) : 对于 k = 1, …, n 有 x<sub>k</sub> ∈ F}"
        },
        {
          "t": "p",
          "en": "For (x<sub>1</sub>, …, x<sub>n</sub>) ∈ F<sup>n</sup> and k ∈ {1, …, n}, we say that x<sub>k</sub> is the kth coordinate of (x<sub>1</sub>, …, x<sub>n</sub>).",
          "zh": "对于 (x<sub>1</sub>, …, x<sub>n</sub>) ∈ F<sup>n</sup> 和 k ∈ {1, …, n}，我们称 x<sub>k</sub> 是 (x<sub>1</sub>, …, x<sub>n</sub>) 的第 k 个坐标。"
        }
      ],
      "note": null,
      "statement_en": "Fn is the set of all lists of length n of elements of F: Fn = {(x1, …, xn) : xk ∈ F for k = 1, …, n} For (x1, …, xn) ∈ Fn and k ∈ {1, …, n}, we say that xk is the kth coordinate of (x1, …, xn).",
      "statement_zh": "Fn 是全体具有 n 个 F 中元素的组所构成的集合： Fn = {(x1, …, xn) : 对于 k = 1, …, n 有 xk ∈ F} 对于 (x1, …, xn) ∈ Fn 和 k ∈ {1, …, n}，我们称 xk 是 (x1, …, xn) 的第 k 个坐标。"
    },
    {
      "id": "1.13",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.13",
      "name_en": "addition in 𝐅<sup>𝑛</sup>",
      "name_zh": "F<sup>𝑛</sup> 中的加法(addition in F<sup>𝑛</sup>) F<sup>𝑛</sup> 中的加法定义为将对应坐标分别相加",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Addition in 𝐅<sup>𝑛</sup> is defined by adding corresponding coordinates: (𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>)+(𝑦<sub>1</sub>,…,𝑦<sub>𝑛</sub>) = (𝑥<sub>1</sub> +𝑦<sub>1</sub>,…,𝑥<sub>𝑛</sub> +𝑦<sub>𝑛</sub>). Often the mathematics of 𝐅<sup>𝑛</sup> becomes cleaner if we use a single letter to denote a list of 𝑛 numbers, without explicitly writing the coordinates. For example,",
          "zh": "(𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>)+(𝑦<sub>1</sub>,…,𝑦<sub>𝑛</sub>) = (𝑥<sub>1</sub> +𝑦<sub>1</sub>,…,𝑥<sub>𝑛</sub> +𝑦<sub>𝑛</sub>). 可阅读埃德温· A·艾勃特(Edwin A. Ab- bott)的《平面国》(Flatland: A Romance of Many Dimensions)，其中有趣地描述了生活 在 R<sup>2</sup> 的生物是如何认知 R<sup>3</sup> 的.这本发表 于 1884 年的小说也许能帮助你想象四维或 更高维的物理空间. 如果我们使用单个字母来表示 𝑛 个数组成的组，而不是显式地写出坐标的话，往往可以更 简洁地表达有关 F<sup>𝑛</sup> 的数学内容.例如，在陈述接下来的结果时，我们用的是 F<sup>𝑛</sup> 中的 𝑥 和 𝑦， 即便其证明仍需 (𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) 和 (𝑦<sub>1</sub>,…,𝑦<sub>𝑛</sub>) 这些更繁琐的记号. 其中第二个和第四个等号成立是由于 F<sup>𝑛</sup> 中的加法定义，第三个等号成立是因为 F 中加法的通 常的可交换性. 如果用单个字母来表示 F<sup>𝑛</sup> 中的元素，那 符号 表示“证明完毕”. 么在必须列出坐标时，就用同一个字母加上合适的下标来表示.例如，如果 𝑥 ∈ F<sup>𝑛</sup>，那么令 𝑥 等于 (𝑥<sub>1</sub>, …, 𝑥<sub>𝑛</sub>) 是个好的记法，如上面的证明所示.如果可行的话，只使用 𝑥 并避免显式使 用坐标则更好."
        }
      ],
      "note": {
        "en": "the next result is stated with 𝑥 and 𝑦 in 𝐅<sup>𝑛</sup> even though the",
        "zh": ""
      },
      "statement_en": "Addition in 𝐅𝑛 is defined by adding corresponding coordinates: (𝑥1,…,𝑥𝑛)+(𝑦1,…,𝑦𝑛) = (𝑥1 +𝑦1,…,𝑥𝑛 +𝑦𝑛). Often the mathematics of 𝐅𝑛 becomes cleaner if we use a single letter to denote a list of 𝑛 numbers, without explicitly writing the coordinates. For example, the next result is stated with 𝑥 and 𝑦 in 𝐅𝑛 even though the",
      "statement_zh": "(𝑥1,…,𝑥𝑛)+(𝑦1,…,𝑦𝑛) = (𝑥1 +𝑦1,…,𝑥𝑛 +𝑦𝑛). 可阅读埃德温· A·艾勃特(Edwin A. Ab- bott)的《平面国》(Flatland: A Romance of Many Dimensions)，其中有趣地描述了生活 在 R2 的生物是如何认知 R3 的.这本发表 于 1884 年的小说也许能帮助你想象四维或 更高维的物理空间. 如果我们使用单个字母来表示 𝑛 个数组成的组，而不是显式地写出坐标的话，往往可以更 简洁地表达有关 F𝑛 的数学内容.例如，在陈述接下来的结果时，我们用的是 F𝑛 中的 𝑥 和 𝑦， 即便其证明仍需 (𝑥1,…,𝑥𝑛) 和 (𝑦1,…,𝑦𝑛) 这些更繁琐的记号. 其中第二个和第四个等号成立是由于 F𝑛 中的加法定义，第三个等号成立是因为 F 中加法的通 常的可交换性. 如果用单个字母来表示 F𝑛 中的元素，那 符号 表示“证明完毕”. 么在必须列出坐标时，就用同一个字母加上合适的下标来表示.例如，如果 𝑥 ∈ F𝑛，那么令 𝑥 等于 (𝑥1, …, 𝑥𝑛) 是个好的记法，如上面的证明所示.如果可行的话，只使用 𝑥 并避免显式使 用坐标则更好."
    },
    {
      "id": "1.14",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.14",
      "name_en": "commutativity of addition in",
      "name_zh": "F<sup>𝑛</sup> 中加法的可交换性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐅<sup>𝑛</sup> If 𝑥, 𝑦 ∈ 𝐅<sup>𝑛</sup>, then 𝑥 + 𝑦 = 𝑦 + 𝑥. If a single letter is used to denote an element of 𝐅<sup>𝑛</sup>, then the same letter with appropriate subscripts is often used when coordinates must be displayed. For example, if 𝑥 ∈ 𝐅<sup>𝑛</sup>, then letting 𝑥 equal (𝑥<sub>1</sub>, …, 𝑥<sub>𝑛</sub>) is good notation, as shown in the",
          "zh": "如果 𝑥, 𝑦 ∈ F<sup>𝑛</sup>，那么 𝑥 + 𝑦 = 𝑦 + 𝑥."
        }
      ],
      "note": null,
      "statement_en": "𝐅𝑛 If 𝑥, 𝑦 ∈ 𝐅𝑛, then 𝑥 + 𝑦 = 𝑦 + 𝑥. If a single letter is used to denote an element of 𝐅𝑛, then the same letter with appropriate subscripts is often used when coordinates must be displayed. For example, if 𝑥 ∈ 𝐅𝑛, then letting 𝑥 equal (𝑥1, …, 𝑥𝑛) is good notation, as shown in the",
      "statement_zh": "如果 𝑥, 𝑦 ∈ F𝑛，那么 𝑥 + 𝑦 = 𝑦 + 𝑥."
    },
    {
      "id": "1.15",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.15",
      "name_en": "0",
      "name_zh": "0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Let 0 denote the list of length 𝑛 whose coordinates are all 0: 0 = (0,…,0). Here we are using the symbol 0 in two different ways—on the left side of the equation above, the symbol 0 denotes a list of length 𝑛, which is an element of 𝐅<sup>𝑛</sup>, whereas on the right side, each 0 denotes a number. This potentially confusing practice actually causes no problems because the context should always make clear which 0 is intended.",
          "zh": "令 0 表示长度为 𝑛 且所有坐标都是 0 的组: 0 = (0, …, 0). 1A R<sup>𝑛</sup> 和 C 𝑛 7 这里我们以两种不同的方式使用符号 0:在上面等式的左边，符号 0 表示长度为 𝑛 的组， 它是 F<sup>𝑛</sup> 中的元素;而在右边，每个 0 都表示一个数.这种做法看似可能令人困惑，实际上不 会造成任何问题，因为根据上下文就能明确使用的是哪种 0."
        }
      ],
      "note": null,
      "statement_en": "Let 0 denote the list of length 𝑛 whose coordinates are all 0: 0 = (0,…,0). Here we are using the symbol 0 in two different ways—on the left side of the equation above, the symbol 0 denotes a list of length 𝑛, which is an element of 𝐅𝑛, whereas on the right side, each 0 denotes a number. This potentially confusing practice actually causes no problems because the context should always make clear which 0 is intended.",
      "statement_zh": "令 0 表示长度为 𝑛 且所有坐标都是 0 的组: 0 = (0, …, 0). 1A R𝑛 和 C 𝑛 7 这里我们以两种不同的方式使用符号 0:在上面等式的左边，符号 0 表示长度为 𝑛 的组， 它是 F𝑛 中的元素;而在右边，每个 0 都表示一个数.这种做法看似可能令人困惑，实际上不 会造成任何问题，因为根据上下文就能明确使用的是哪种 0."
    },
    {
      "id": "1.17",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.17",
      "name_en": "additive inverse in 𝐅<sup>𝑛</sup>, −𝑥 such that",
      "name_zh": "F<sup>𝑛</sup> 中的加法逆元(additive inverse in F<sup>𝑛</sup>)、−𝑥",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑥 + (−𝑥) = 0. Thus if 𝑥 = (𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>), then −𝑥 = (−𝑥<sub>1</sub>,…,−𝑥<sub>𝑛</sub>). The additive inverse of a vector in 𝐑<sup>2</sup> is the vector with the same length but pointing in the opposite direction. The figure here illustrates this way of thinking about the additive inverse in 𝐑<sup>2</sup>. As you can see, the vector labeled −𝑥 has the same length as the vector labeled 𝑥 but points in the opposite direction. A vector and its additive inverse. Having dealt with addition in 𝐅<sup>𝑛</sup>, we now turn to multiplication. We could define a multiplication in 𝐅<sup>𝑛</sup> in a similar fashion, starting with two elements of 𝐅<sup>𝑛</sup> and getting another element of 𝐅<sup>𝑛</sup> by multiplying corresponding coordinates. Experience shows that this definition is not useful for our purposes. Another type of multiplication, called scalar multiplication, will be central to our subject. Specifically, we need to define what it means to multiply an element of 𝐅<sup>𝑛</sup> by an element of 𝐅.",
          "zh": "对于 𝑥 ∈ F<sup>𝑛</sup>，𝑥 的加法逆元，记作 −𝑥，是满足下式的向量 −𝑥 ∈ F<sup>𝑛</sup>: 𝑥 + (−𝑥) = 0. 由此，如果𝑥 = (𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>)，那么−𝑥 = (−𝑥<sub>1</sub>,…,−𝑥<sub>𝑛</sub>). R<sup>2</sup> 中一向量的加法逆元是与之长度相同但指向相反方向的 向量.这里的图说明了这种思考 R<sup>2</sup> 中加法逆元的方式.正如你 所见，标记为 −𝑥 的向量与标记为 𝑥 的向量具有相同的长度，但 是指向相反的方向. 讨论完 F<sup>𝑛</sup> 中的加法后，我们现在转而研究乘法.我们本可 以用与加法类似的方式定义 F<sup>𝑛</sup> 中的乘法:取出 F<sup>𝑛</sup> 的两个元素，将它们对应的坐标相乘，得出 F<sup>𝑛</sup> 中的另一个元素.经验表明，这种定义无助于实现我们的目的.另一类乘法，称为标量乘 法，将成为我们讨论的核心.具体地说，我们需要定义将 F<sup>𝑛</sup> 中的一个元素乘以 F 中的一个元 素是什么含义."
        }
      ],
      "note": null,
      "statement_en": "𝑥 + (−𝑥) = 0. Thus if 𝑥 = (𝑥1,…,𝑥𝑛), then −𝑥 = (−𝑥1,…,−𝑥𝑛). The additive inverse of a vector in 𝐑2 is the vector with the same length but pointing in the opposite direction. The figure here illustrates this way of thinking about the additive inverse in 𝐑2. As you can see, the vector labeled −𝑥 has the same length as the vector labeled 𝑥 but points in the opposite direction. A vector and its additive inverse. Having dealt with addition in 𝐅𝑛, we now turn to multiplication. We could define a multiplication in 𝐅𝑛 in a similar fashion, starting with two elements of 𝐅𝑛 and getting another element of 𝐅𝑛 by multiplying corresponding coordinates. Experience shows that this definition is not useful for our purposes. Another type of multiplication, called scalar multiplication, will be central to our subject. Specifically, we need to define what it means to multiply an element of 𝐅𝑛 by an element of 𝐅.",
      "statement_zh": "对于 𝑥 ∈ F𝑛，𝑥 的加法逆元，记作 −𝑥，是满足下式的向量 −𝑥 ∈ F𝑛: 𝑥 + (−𝑥) = 0. 由此，如果𝑥 = (𝑥1,…,𝑥𝑛)，那么−𝑥 = (−𝑥1,…,−𝑥𝑛). R2 中一向量的加法逆元是与之长度相同但指向相反方向的 向量.这里的图说明了这种思考 R2 中加法逆元的方式.正如你 所见，标记为 −𝑥 的向量与标记为 𝑥 的向量具有相同的长度，但 是指向相反的方向. 讨论完 F𝑛 中的加法后，我们现在转而研究乘法.我们本可 以用与加法类似的方式定义 F𝑛 中的乘法:取出 F𝑛 的两个元素，将它们对应的坐标相乘，得出 F𝑛 中的另一个元素.经验表明，这种定义无助于实现我们的目的.另一类乘法，称为标量乘 法，将成为我们讨论的核心.具体地说，我们需要定义将 F𝑛 中的一个元素乘以 F 中的一个元 素是什么含义."
    },
    {
      "id": "1.18",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.18",
      "name_en": "scalar multiplication in 𝐅<sup>𝑛</sup>",
      "name_zh": "F<sup>𝑛</sup> 中的标量乘法",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The product of a number 𝜆 and a vector in 𝐅<sup>𝑛</sup> is computed by multiplying each coordinate of the vector by 𝜆: 𝜆(𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) = (𝜆𝑥<sub>1</sub>,…, 𝜆𝑥<sub>𝑛</sub>); here 𝜆 ∈ 𝐅 and (𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) ∈ 𝐅<sup>𝑛</sup>. Scalar multiplication has a nice geo- metric interpretation in 𝐑<sup>2</sup>. If 𝜆 &gt; 0 and 𝑥 ∈ 𝐑<sup>2</sup>, then 𝜆𝑥 is the vector that points in the same direction as 𝑥 and whose length is 𝜆 times the length of 𝑥. In other words, to get 𝜆𝑥, we shrink or stretch 𝑥 by a factor of 𝜆, depending on whether 𝜆 &lt; 1 or 𝜆 &gt; 1. If 𝜆 &lt; 0 and 𝑥 ∈ 𝐑<sup>2</sup>, then 𝜆𝑥 is the vector that points in the direction opposite to that of 𝑥 and whose length is |𝜆| times the length of 𝑥, as shown here. Scalar multiplication in 𝐅<sup>𝑛</sup> multiplies together a scalar and a vector, getting a vector. In contrast, the dot product in 𝐑<sup>2</sup> or 𝐑<sup>3</sup> multiplies together two vec- tors and gets a scalar. Generalizations of the dot product will become impor- tant in Chapter 6. Scalar multiplication. A field is a set containing at least two distinct elements called 0 and 1, along with operations of addition and multiplication satisfying all properties listed in 1.3. Thus 𝐑 and 𝐂 are fields, as is the set of rational numbers along with the usual operations of addition and multiplication. Another example of a field is the set {0, 1} with the usual operations of addition and multiplication except that 1 + 1 is defined to equal 0. In this book we will not deal with fields other than 𝐑 and…",
          "zh": "数 𝜆 与 F<sup>𝑛</sup> 中的向量之乘积(product)是通过将这向量的每一个坐标都乘以 𝜆 计算得到 的: 一向量及其加法逆元. 𝜆(𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) = (𝜆𝑥<sub>1</sub>,…,𝜆𝑥<sub>𝑛</sub>)， 此处 𝜆 ∈ F 且 (𝑥<sub>1</sub>, …, 𝑥<sub>𝑛</sub>) ∈ F<sup>𝑛</sup>. 标量乘法在 R<sup>2</sup> 中具有很漂亮的几何解 释.如果𝜆&gt;0且𝑥 ∈ R<sup>2</sup>，那么𝜆𝑥就是与𝑥 指向相同且长度是 𝑥 的 𝜆 倍的向量.换句话 说，为了得到 𝜆𝑥，我们把 𝑥 缩短或者延长到 原来的 𝜆 倍，至于是缩短还是延长取决于 𝜆 是小于 1 还是大于 1. 如果 𝜆 &lt; 0 且 𝑥 ∈ R<sup>2</sup>，那么 𝜆𝑥 就是与 𝑥 指向相反且长度是 𝑥 的 |𝜆| 倍的向量，如此处 所示."
        }
      ],
      "note": null,
      "statement_en": "The product of a number 𝜆 and a vector in 𝐅𝑛 is computed by multiplying each coordinate of the vector by 𝜆: 𝜆(𝑥1,…,𝑥𝑛) = (𝜆𝑥1,…, 𝜆𝑥𝑛); here 𝜆 ∈ 𝐅 and (𝑥1,…,𝑥𝑛) ∈ 𝐅𝑛. Scalar multiplication has a nice geo- metric interpretation in 𝐑2. If 𝜆 &gt; 0 and 𝑥 ∈ 𝐑2, then 𝜆𝑥 is the vector that points in the same direction as 𝑥 and whose length is 𝜆 times the length of 𝑥. In other words, to get 𝜆𝑥, we shrink or stretch 𝑥 by a factor of 𝜆, depending on whether 𝜆 &lt; 1 or 𝜆 &gt; 1. If 𝜆 &lt; 0 and 𝑥 ∈ 𝐑2, then 𝜆𝑥 is the vector that points in the direction opposite to that of 𝑥 and whose length is |𝜆| times the length of 𝑥, as shown here. Scalar multiplication in 𝐅𝑛 multiplies together a scalar and a vector, getting a vector. In contrast, the dot product in 𝐑2 or 𝐑3 multiplies together two vec- tors and gets a scalar. Generalizations of the dot product will become impor- tant in Chapter 6. Scalar multiplication. A field is a set containing at least two distinct elements called 0 and 1, along with operations of addition and multiplication satisfying all properties listed in 1.3. Thus 𝐑 and 𝐂 are fields, as is the set of rational numbers along with the usual operations of addition and multiplication. Another example of a field is the set {0, 1} with the usual operations of addition and multiplication except that 1 + 1 is defined to equal 0. In this book we will not deal with fields other than 𝐑 and…",
      "statement_zh": "数 𝜆 与 F𝑛 中的向量之乘积(product)是通过将这向量的每一个坐标都乘以 𝜆 计算得到 的: 一向量及其加法逆元. 𝜆(𝑥1,…,𝑥𝑛) = (𝜆𝑥1,…,𝜆𝑥𝑛)， 此处 𝜆 ∈ F 且 (𝑥1, …, 𝑥𝑛) ∈ F𝑛. 标量乘法在 R2 中具有很漂亮的几何解 释.如果𝜆&gt;0且𝑥 ∈ R2，那么𝜆𝑥就是与𝑥 指向相同且长度是 𝑥 的 𝜆 倍的向量.换句话 说，为了得到 𝜆𝑥，我们把 𝑥 缩短或者延长到 原来的 𝜆 倍，至于是缩短还是延长取决于 𝜆 是小于 1 还是大于 1. 如果 𝜆 &lt; 0 且 𝑥 ∈ R2，那么 𝜆𝑥 就是与 𝑥 指向相反且长度是 𝑥 的 |𝜆| 倍的向量，如此处 所示."
    },
    {
      "id": "1.19",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.19",
      "name_en": "addition, scalar multiplication",
      "name_zh": "加法(addition)、标量乘法",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "An addition on a set V is a function that assigns an element u + v ∈ V to each pair of elements u, v ∈ V.",
          "zh": "集合 V 上的加法是一个函数，它将每一对 u, v ∈ V 对应到一个元素 u + v ∈ V。"
        },
        {
          "t": "bullet",
          "en": "A scalar multiplication on a set V is a function that assigns an element λv ∈ V to each λ ∈ F and each v ∈ V.",
          "zh": "集合 V 上的标量乘法是一个函数，它将每个 λ ∈ F 和每个 v ∈ V 对应到一个元素 λv ∈ V。"
        }
      ],
      "note": null,
      "statement_en": "An addition on a set V is a function that assigns an element u + v ∈ V to each pair of elements u, v ∈ V. A scalar multiplication on a set V is a function that assigns an element λv ∈ V to each λ ∈ F and each v ∈ V.",
      "statement_zh": "集合 V 上的加法是一个函数，它将每一对 u, v ∈ V 对应到一个元素 u + v ∈ V。 集合 V 上的标量乘法是一个函数，它将每个 λ ∈ F 和每个 v ∈ V 对应到一个元素 λv ∈ V。"
    },
    {
      "id": "1.20",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.20",
      "name_en": "vector space",
      "name_zh": "向量空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A vector space is a set V along with an addition on V and a scalar multiplication on V such that the following properties hold.",
          "zh": "一个向量空间是一个集合 V，V 上的加法和标量乘法满足下列性质："
        },
        {
          "t": "bullet",
          "en": "Commutativity. u + v = v + u for all u, v ∈ V",
          "zh": "可交换性 对于所有 u, v ∈ V，都有 u + v = v + u。"
        },
        {
          "t": "bullet",
          "en": "Associativity. (u + v) + w = u + (v + w) and (ab)v = a(bv) for all u, v, w ∈ V and all a, b ∈ F",
          "zh": "可结合性 对于所有 u, v, w ∈ V 以及所有 a, b ∈ F，都有 (u + v) + w = u + (v + w) 以及 (ab)v = a(bv)。"
        },
        {
          "t": "bullet",
          "en": "Additive identity. There exists an element 0 ∈ V such that v + 0 = v for all v ∈ V",
          "zh": "加法恒等元 存在一个元素 0 ∈ V，使得对所有 v ∈ V 都有 v + 0 = v。"
        },
        {
          "t": "bullet",
          "en": "Additive inverse. For every v ∈ V, there exists w ∈ V such that v + w = 0",
          "zh": "加法逆元 对于每个 v ∈ V，都存在 w ∈ V 使得 v + w = 0。"
        },
        {
          "t": "bullet",
          "en": "Multiplicative identity. 1v = v for all v ∈ V",
          "zh": "乘法恒等元 对于所有 v ∈ V，都有 1v = v。"
        },
        {
          "t": "bullet",
          "en": "Distributive properties. a(u + v) = au + av and (a + b)v = av + bv for all a, b ∈ F and all u, v ∈ V",
          "zh": "分配性质 对于所有 u, v ∈ V 以及所有 a, b ∈ F，都有 a(u + v) = au + av 且 (a + b)v = av + bv。"
        }
      ],
      "note": null,
      "statement_en": "A vector space is a set V along with an addition on V and a scalar multiplication on V such that the following properties hold. Commutativity. u + v = v + u for all u, v ∈ V Associativity. (u + v) + w = u + (v + w) and (ab)v = a(bv) for all u, v, w ∈ V and all a, b ∈ F Additive identity. There exists an element 0 ∈ V such that v + 0 = v for all v ∈ V Additive inverse. For every v ∈ V, there exists w ∈ V such that v + w = 0 Multiplicative identity. 1v = v for all v ∈ V Distributive properties. a(u + v) = au + av and (a + b)v = av + bv for all a, b ∈ F and all u, v ∈ V",
      "statement_zh": "一个向量空间是一个集合 V，V 上的加法和标量乘法满足下列性质： 可交换性 对于所有 u, v ∈ V，都有 u + v = v + u。 可结合性 对于所有 u, v, w ∈ V 以及所有 a, b ∈ F，都有 (u + v) + w = u + (v + w) 以及 (ab)v = a(bv)。 加法恒等元 存在一个元素 0 ∈ V，使得对所有 v ∈ V 都有 v + 0 = v。 加法逆元 对于每个 v ∈ V，都存在 w ∈ V 使得 v + w = 0。 乘法恒等元 对于所有 v ∈ V，都有 1v = v。 分配性质 对于所有 u, v ∈ V 以及所有 a, b ∈ F，都有 a(u + v) = au + av 且 (a + b)v = av + bv。"
    },
    {
      "id": "1.21",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.21",
      "name_en": "vector, point",
      "name_zh": "向量(vector)、点(point) 向量空间的元素被称作向量或点.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Elements of a vector space are called vectors or points. The scalar multiplication in a vector space depends on 𝐅. Thus when we need to be precise, we will say that 𝑉 is a vector space over 𝐅 instead of saying simply that 𝑉 is a vector space. For example, 𝐑<sup>𝑛</sup> is a vector space over 𝐑, and 𝐂<sup>𝑛</sup> is a vector space over 𝐂.",
          "zh": "向量空间上的标量乘法依赖于 F 的选取.由此，当我们需要描述得更确切时，我们会说 𝑉 是 F 上的向量空间(vector space over F)，而不是仅仅说 𝑉 是向量空间.例如，R<sup>𝑛</sup> 是 R 上的 向量空间，而 C 𝑛 是 C 上的向量空间. 1B 向量空间的定义 11"
        }
      ],
      "note": null,
      "statement_en": "Elements of a vector space are called vectors or points. The scalar multiplication in a vector space depends on 𝐅. Thus when we need to be precise, we will say that 𝑉 is a vector space over 𝐅 instead of saying simply that 𝑉 is a vector space. For example, 𝐑𝑛 is a vector space over 𝐑, and 𝐂𝑛 is a vector space over 𝐂.",
      "statement_zh": "向量空间上的标量乘法依赖于 F 的选取.由此，当我们需要描述得更确切时，我们会说 𝑉 是 F 上的向量空间(vector space over F)，而不是仅仅说 𝑉 是向量空间.例如，R𝑛 是 R 上的 向量空间，而 C 𝑛 是 C 上的向量空间. 1B 向量空间的定义 11"
    },
    {
      "id": "1.22",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.22",
      "name_en": "real vector space, complex vector space •",
      "name_zh": "实向量空间(real vector space)、复向量空间(complex vector space) R 上的向量空间称作实向量空间.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A vector space over 𝐂 is called a complex vector space. Usually the choice of 𝐅 is either clear from the context or irrelevant. Thus we often assume that 𝐅 is lurking in the background without specifically mentioning it. With the usual operations of addition and scalar multiplication, 𝐅<sup>𝑛</sup> is a vector space over 𝐅,",
          "zh": "C 上的向量空间称作复向量空间. 通常，F 的选取要么可以从上下文明确得知，要么无关紧要.因此我们一般假定 F 暗含于 语境中，而无需专门提及它. 带有通常的加法和标量乘法运算的 F<sup>𝑛</sup> 最简单的向量空间是 {0}，它只包含一个点. 是 F 上的向量空间(你应自行验证这一点).F<sup>𝑛</sup> 这个例子为我们定义向量空间提供了动因."
        }
      ],
      "note": null,
      "statement_en": "A vector space over 𝐂 is called a complex vector space. Usually the choice of 𝐅 is either clear from the context or irrelevant. Thus we often assume that 𝐅 is lurking in the background without specifically mentioning it. With the usual operations of addition and scalar multiplication, 𝐅𝑛 is a vector space over 𝐅,",
      "statement_zh": "C 上的向量空间称作复向量空间. 通常，F 的选取要么可以从上下文明确得知，要么无关紧要.因此我们一般假定 F 暗含于 语境中，而无需专门提及它. 带有通常的加法和标量乘法运算的 F𝑛 最简单的向量空间是 {0}，它只包含一个点. 是 F 上的向量空间(你应自行验证这一点).F𝑛 这个例子为我们定义向量空间提供了动因."
    },
    {
      "id": "1.24",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.24",
      "name_en": "F<sup>S</sup>",
      "name_zh": "F<sup>S</sup>",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "If S is a set, then F<sup>S</sup> denotes the set of functions from S to F.",
          "zh": "如果 S 是集合，那么 F<sup>S</sup> 表示从 S 到 F 的所有函数构成的集合。"
        },
        {
          "t": "bullet",
          "en": "For f, g ∈ F<sup>S</sup>, the sum f + g ∈ F<sup>S</sup> is the function defined by (f + g)(x) = f(x) + g(x) for all x ∈ S.",
          "zh": "对于 f, g ∈ F<sup>S</sup>，和 f + g ∈ F<sup>S</sup> 是由下式定义的函数：对于所有 x ∈ S，(f + g)(x) = f(x) + g(x)。"
        },
        {
          "t": "bullet",
          "en": "For λ ∈ F and f ∈ F<sup>S</sup>, the product λf ∈ F<sup>S</sup> is the function defined by (λf)(x) = λf(x) for all x ∈ S.",
          "zh": "对于 λ ∈ F 与 f ∈ F<sup>S</sup>，乘积 λf ∈ F<sup>S</sup> 是由下式定义的函数：对于所有 x ∈ S，(λf)(x) = λf(x)。"
        }
      ],
      "note": null,
      "statement_en": "If S is a set, then FS denotes the set of functions from S to F. For f, g ∈ FS, the sum f + g ∈ FS is the function defined by (f + g)(x) = f(x) + g(x) for all x ∈ S. For λ ∈ F and f ∈ FS, the product λf ∈ FS is the function defined by (λf)(x) = λf(x) for all x ∈ S.",
      "statement_zh": "如果 S 是集合，那么 FS 表示从 S 到 F 的所有函数构成的集合。 对于 f, g ∈ FS，和 f + g ∈ FS 是由下式定义的函数：对于所有 x ∈ S，(f + g)(x) = f(x) + g(x)。 对于 λ ∈ F 与 f ∈ FS，乘积 λf ∈ FS 是由下式定义的函数：对于所有 x ∈ S，(λf)(x) = λf(x)。"
    },
    {
      "id": "1.26",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.26",
      "name_en": "unique additive identity",
      "name_zh": "加法恒等元唯一",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A vector space has a unique additive identity.",
          "zh": "向量空间有唯一的加法恒等元。"
        }
      ],
      "note": null,
      "statement_en": "A vector space has a unique additive identity.",
      "statement_zh": "向量空间有唯一的加法恒等元。"
    },
    {
      "id": "1.27",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.27",
      "name_en": "unique additive inverse",
      "name_zh": "加法逆元唯一",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every element in a vector space has a unique additive inverse.",
          "zh": "向量空间里的每个元素都有唯一的加法逆元。"
        }
      ],
      "note": null,
      "statement_en": "Every element in a vector space has a unique additive inverse.",
      "statement_zh": "向量空间里的每个元素都有唯一的加法逆元。"
    },
    {
      "id": "1.28",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.28",
      "name_en": "−𝑣, 𝑤 − 𝑣",
      "name_zh": "−𝑣、𝑤 − 𝑣",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "−𝑣 denotes the additive inverse of 𝑣; • 𝑤−𝑣 is defined to be 𝑤+(−𝑣). Almost all results in this book involve some vector space. To avoid having to restate frequently that 𝑉 is a vector space, we now make the necessary declaration once and for all.",
          "zh": "−𝑣 表示 𝑣 的加法逆元; 𝑤 − 𝑣 定义为 𝑤 + (−𝑣). 本书中几乎所有的结果都涉及向量空间.为了避免频繁地重申 𝑉 是向量空间，我们现在 作出以下声明，便可一劳永逸:"
        }
      ],
      "note": null,
      "statement_en": "−𝑣 denotes the additive inverse of 𝑣; • 𝑤−𝑣 is defined to be 𝑤+(−𝑣). Almost all results in this book involve some vector space. To avoid having to restate frequently that 𝑉 is a vector space, we now make the necessary declaration once and for all.",
      "statement_zh": "−𝑣 表示 𝑣 的加法逆元; 𝑤 − 𝑣 定义为 𝑤 + (−𝑣). 本书中几乎所有的结果都涉及向量空间.为了避免频繁地重申 𝑉 是向量空间，我们现在 作出以下声明，便可一劳永逸:"
    },
    {
      "id": "1.29",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.29",
      "name_en": "𝑉",
      "name_zh": "𝑉",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For the rest of this book, 𝑉 denotes a vector space over 𝐅.",
          "zh": "在本书的剩余部分中，𝑉 表示 F 上的向量空间. 1B 向量空间的定义 13 在接下来的结果中，等式左侧的 0 表示的是标量(数 0 ∈ F)，等式右侧的 0 表示的是向量 (𝑉 的加法恒等元)."
        }
      ],
      "note": null,
      "statement_en": "For the rest of this book, 𝑉 denotes a vector space over 𝐅.",
      "statement_zh": "在本书的剩余部分中，𝑉 表示 F 上的向量空间. 1B 向量空间的定义 13 在接下来的结果中，等式左侧的 0 表示的是标量(数 0 ∈ F)，等式右侧的 0 表示的是向量 (𝑉 的加法恒等元)."
    },
    {
      "id": "1.30",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.30",
      "name_en": "the number 0 times a vector",
      "name_zh": "数 0 与向量相乘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "0v = 0 for every v ∈ V.",
          "zh": "对于每个 v ∈ V，都有 0v = 0。"
        }
      ],
      "note": null,
      "statement_en": "0v = 0 for every v ∈ V.",
      "statement_zh": "对于每个 v ∈ V，都有 0v = 0。"
    },
    {
      "id": "1.31",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.31",
      "name_en": "a number times the vector 0",
      "name_zh": "数与向量 0 相乘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "a0 = 0 for every a ∈ F.",
          "zh": "对于每个 a ∈ F，都有 a0 = 0。"
        }
      ],
      "note": null,
      "statement_en": "a0 = 0 for every a ∈ F.",
      "statement_zh": "对于每个 a ∈ F，都有 a0 = 0。"
    },
    {
      "id": "1.32",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.32",
      "name_en": "the number −1 times a vector",
      "name_zh": "数 −1 与向量相乘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(−1)v = −v for every v ∈ V.",
          "zh": "对于每个 v ∈ V，都有 (−1)v = −v。"
        }
      ],
      "note": null,
      "statement_en": "(−1)v = −v for every v ∈ V.",
      "statement_zh": "对于每个 v ∈ V，都有 (−1)v = −v。"
    },
    {
      "id": "1.33",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.33",
      "name_en": "subspace",
      "name_zh": "子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A subset 𝑈 of 𝑉 is called a subspace of 𝑉 if 𝑈 is also a vector space with the same additive identity, addition, and scalar multiplication as on 𝑉.",
          "zh": "如果 𝑉 的子集 𝑈 是与 𝑉 具有相同的加法恒等元、加法和标量乘法运算的向量空间，那 么 𝑈 就称为 𝑉 的子空间. 接下来的结果给出了检验向量空间的子 有人使用术语“线性子空间”(linear sub- 集是否为子空间的最简单方法. space)，这和子空间意思一样."
        }
      ],
      "note": {
        "en": "The next result gives the easiest way to check whether a subset of a vector space is a subspace. Some people use the terminology linear subspace, which means the same as subspace.",
        "zh": ""
      },
      "statement_en": "A subset 𝑈 of 𝑉 is called a subspace of 𝑉 if 𝑈 is also a vector space with the same additive identity, addition, and scalar multiplication as on 𝑉. The next result gives the easiest way to check whether a subset of a vector space is a subspace. Some people use the terminology linear subspace, which means the same as subspace.",
      "statement_zh": "如果 𝑉 的子集 𝑈 是与 𝑉 具有相同的加法恒等元、加法和标量乘法运算的向量空间，那 么 𝑈 就称为 𝑉 的子空间. 接下来的结果给出了检验向量空间的子 有人使用术语“线性子空间”(linear sub- 集是否为子空间的最简单方法. space)，这和子空间意思一样."
    },
    {
      "id": "1.34",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.34",
      "name_en": "conditions for a subspace",
      "name_zh": "子空间的条件",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A subset 𝑈 of 𝑉 is a subspace of 𝑉 if and only if 𝑈 satisfies the following three conditions. additive identity 0 ∈ 𝑈. closed under addition 𝑢, 𝑤 ∈ 𝑈 implies 𝑢 + 𝑤 ∈ 𝑈. closed under scalar multiplication 𝑎 ∈ 𝐅 and 𝑢 ∈ 𝑈 implies 𝑎𝑢 ∈ 𝑈.",
          "zh": "当且仅当 𝑉 的子集 𝑈 满足以下三个条件时，𝑈 是 𝑉 的子空间. 加法恒等元(additive identity) 0 ∈ 𝑈. 对于加法封闭(closed under addition) 𝑢, 𝑤 ∈ 𝑈 意味着 𝑢 + 𝑤 ∈ 𝑈. 对于标量乘法封闭(closed under scalar multiplication) 𝑎 ∈ F 且 𝑢 ∈ 𝑈 意味着 𝑎𝑢 ∈ 𝑈."
        }
      ],
      "note": null,
      "statement_en": "A subset 𝑈 of 𝑉 is a subspace of 𝑉 if and only if 𝑈 satisfies the following three conditions. additive identity 0 ∈ 𝑈. closed under addition 𝑢, 𝑤 ∈ 𝑈 implies 𝑢 + 𝑤 ∈ 𝑈. closed under scalar multiplication 𝑎 ∈ 𝐅 and 𝑢 ∈ 𝑈 implies 𝑎𝑢 ∈ 𝑈.",
      "statement_zh": "当且仅当 𝑉 的子集 𝑈 满足以下三个条件时，𝑈 是 𝑉 的子空间. 加法恒等元(additive identity) 0 ∈ 𝑈. 对于加法封闭(closed under addition) 𝑢, 𝑤 ∈ 𝑈 意味着 𝑢 + 𝑤 ∈ 𝑈. 对于标量乘法封闭(closed under scalar multiplication) 𝑎 ∈ F 且 𝑢 ∈ 𝑈 意味着 𝑎𝑢 ∈ 𝑈."
    },
    {
      "id": "1.36",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.36",
      "name_en": "sum of subspaces",
      "name_zh": "子空间的和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The union of subspaces is rarely a sub- space (see",
          "zh": "假设𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub> 是𝑉 的子空间.𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub> 的和是由𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub> 中元素所有可能的和所构 成的集合，记作 𝑉<sub>1</sub> + ⋯ + 𝑉<sub>𝑚</sub>.更确切地说， 集合{0}是𝑉的最小子空间，而𝑉本身是𝑉 的最大子空间.空集不是 𝑉 的子空间，因为 子空间必须是向量空间，因此必须包含至少 一个元素，即加法恒等元. 𝑉<sub>1</sub> +···+𝑉<sub>𝑚</sub> = {𝑣<sub>1</sub> +···+𝑣<sub>𝑚</sub> :𝑣<sub>1</sub> ∈ 𝑉<sub>1</sub>,…,𝑣<sub>𝑚</sub> ∈ 𝑉<sub>𝑚</sub>}. 我们看几个有关子空间之和的例子."
        }
      ],
      "note": null,
      "statement_en": "The union of subspaces is rarely a sub- space (see",
      "statement_zh": "假设𝑉1,…,𝑉𝑚 是𝑉 的子空间.𝑉1,…,𝑉𝑚 的和是由𝑉1,…,𝑉𝑚 中元素所有可能的和所构 成的集合，记作 𝑉1 + ⋯ + 𝑉𝑚.更确切地说， 集合{0}是𝑉的最小子空间，而𝑉本身是𝑉 的最大子空间.空集不是 𝑉 的子空间，因为 子空间必须是向量空间，因此必须包含至少 一个元素，即加法恒等元. 𝑉1 +···+𝑉𝑚 = {𝑣1 +···+𝑣𝑚 :𝑣1 ∈ 𝑉1,…,𝑣𝑚 ∈ 𝑉𝑚}. 我们看几个有关子空间之和的例子."
    },
    {
      "id": "1.40",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.40",
      "name_en": "sum of subspaces is the smallest containing subspace",
      "name_zh": "子空间的和是包含这些子空间的最小子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose V<sub>1</sub>, …, V<sub>m</sub> are subspaces of V. Then V<sub>1</sub> + ⋯ + V<sub>m</sub> is the smallest subspace of V containing V<sub>1</sub>, …, V<sub>m</sub>.",
          "zh": "假设 V<sub>1</sub>, …, V<sub>m</sub> 是 V 的子空间，那么 V<sub>1</sub> + ⋯ + V<sub>m</sub> 是最小的包含 V<sub>1</sub>, …, V<sub>m</sub> 的子空间。"
        }
      ],
      "note": null,
      "statement_en": "Suppose V1, …, Vm are subspaces of V. Then V1 + ⋯ + Vm is the smallest subspace of V containing V1, …, Vm.",
      "statement_zh": "假设 V1, …, Vm 是 V 的子空间，那么 V1 + ⋯ + Vm 是最小的包含 V1, …, Vm 的子空间。"
    },
    {
      "id": "1.41",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.41",
      "name_en": "direct sum, ⊕",
      "name_zh": "直和(direct sum)、⊕ 设𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub> 是𝑉 的子空间.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose V<sub>1</sub>, …, V<sub>m</sub> are subspaces of V.",
          "zh": "假设 V<sub>1</sub>, …, V<sub>m</sub> 是 V 的子空间。"
        },
        {
          "t": "bullet",
          "en": "The sum V<sub>1</sub> + ⋯ + V<sub>m</sub> is called a direct sum if each element of V<sub>1</sub> + ⋯ + V<sub>m</sub> can be written in only one way as a sum v<sub>1</sub> + ⋯ + v<sub>m</sub>, where each v<sub>k</sub> ∈ V<sub>k</sub>.",
          "zh": "和 V<sub>1</sub> + ⋯ + V<sub>m</sub> 称为直和，如果其中每个元素都能以唯一的方式写成和 v<sub>1</sub> + ⋯ + v<sub>m</sub>，其中每个 v<sub>k</sub> ∈ V<sub>k</sub>。"
        },
        {
          "t": "bullet",
          "en": "If V<sub>1</sub> + ⋯ + V<sub>m</sub> is a direct sum, then V<sub>1</sub> ⊕ ⋯ ⊕ V<sub>m</sub> denotes V<sub>1</sub> + ⋯ + V<sub>m</sub>, with the ⊕ notation serving as an indication that this is a direct sum.",
          "zh": "如果 V<sub>1</sub> + ⋯ + V<sub>m</sub> 是直和，那么 V<sub>1</sub> ⊕ ⋯ ⊕ V<sub>m</sub> 表示 V<sub>1</sub> + ⋯ + V<sub>m</sub>，其中 ⊕ 标明这是直和。"
        }
      ],
      "note": null,
      "statement_en": "Suppose V1, …, Vm are subspaces of V. The sum V1 + ⋯ + Vm is called a direct sum if each element of V1 + ⋯ + Vm can be written in only one way as a sum v1 + ⋯ + vm, where each vk ∈ Vk. If V1 + ⋯ + Vm is a direct sum, then V1 ⊕ ⋯ ⊕ Vm denotes V1 + ⋯ + Vm, with the ⊕ notation serving as an indication that this is a direct sum.",
      "statement_zh": "假设 V1, …, Vm 是 V 的子空间。 和 V1 + ⋯ + Vm 称为直和，如果其中每个元素都能以唯一的方式写成和 v1 + ⋯ + vm，其中每个 vk ∈ Vk。 如果 V1 + ⋯ + Vm 是直和，那么 V1 ⊕ ⋯ ⊕ Vm 表示 V1 + ⋯ + Vm，其中 ⊕ 标明这是直和。"
    },
    {
      "id": "1.45",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.45",
      "name_en": "condition for a direct sum",
      "name_zh": "直和的条件",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose V<sub>1</sub>, …, V<sub>m</sub> are subspaces of V. Then V<sub>1</sub> + ⋯ + V<sub>m</sub> is a direct sum if and only if the only way to write 0 as a sum v<sub>1</sub> + ⋯ + v<sub>m</sub>, where each v<sub>k</sub> ∈ V<sub>k</sub>, is by taking each v<sub>k</sub> equal to 0.",
          "zh": "假定 V<sub>1</sub>, …, V<sub>m</sub> 是 V 的子空间。那么 V<sub>1</sub> + ⋯ + V<sub>m</sub> 是直和，当且仅当用 v<sub>1</sub> + ⋯ + v<sub>m</sub>（其中各 v<sub>k</sub> ∈ V<sub>k</sub>）表示 0 的唯一方式是将每个 v<sub>k</sub> 都取 0。"
        }
      ],
      "note": null,
      "statement_en": "Suppose V1, …, Vm are subspaces of V. Then V1 + ⋯ + Vm is a direct sum if and only if the only way to write 0 as a sum v1 + ⋯ + vm, where each vk ∈ Vk, is by taking each vk equal to 0.",
      "statement_zh": "假定 V1, …, Vm 是 V 的子空间。那么 V1 + ⋯ + Vm 是直和，当且仅当用 v1 + ⋯ + vm（其中各 vk ∈ Vk）表示 0 的唯一方式是将每个 vk 都取 0。"
    },
    {
      "id": "1.46",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.46",
      "name_en": "direct sum of two subspaces",
      "name_zh": "两个子空间的直和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose U and W are subspaces of V. Then",
          "zh": "假定 U 和 W 是 V 的子空间。那么"
        },
        {
          "t": "formula",
          "en": "U + W is a direct sum  ⇔  U ∩ W = {0}.",
          "zh": "U + W 是直和  ⇔  U ∩ W = {0}."
        }
      ],
      "note": null,
      "statement_en": "Suppose U and W are subspaces of V. Then U + W is a direct sum  ⇔  U ∩ W = {0}.",
      "statement_zh": "假定 U 和 W 是 V 的子空间。那么 U + W 是直和  ⇔  U ∩ W = {0}."
    },
    {
      "id": "2.1",
      "kind": "notation",
      "chapter": "ch2",
      "number": "2.1",
      "name_en": "list of vectors",
      "name_zh": "向量组 书写向量组时，我们通常不用圆括号括起来.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "We will usually write lists of vectors without surrounding parentheses. Linear Combinations and Span A sum of scalar multiples of the vectors in a list is called a linear combination of the list. Here is the formal definition.",
          "zh": "线性组合和张成空间 将一个向量组中的向量乘以标量再求和的结果，就称为该向量组的线性组合.下面是正式 的定义."
        }
      ],
      "note": null,
      "statement_en": "We will usually write lists of vectors without surrounding parentheses. Linear Combinations and Span A sum of scalar multiples of the vectors in a list is called a linear combination of the list. Here is the formal definition.",
      "statement_zh": "线性组合和张成空间 将一个向量组中的向量乘以标量再求和的结果，就称为该向量组的线性组合.下面是正式 的定义."
    },
    {
      "id": "2.2",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.2",
      "name_en": "linear combination",
      "name_zh": "线性组合(linear combination) 𝑉 中向量组 𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub> 的线性组合2是形如",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear combination of a list 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub> of vectors in 𝑉 is a vector of the form 𝑎<sub>1</sub>𝑣<sub>1</sub> + ⋯ + 𝑎<sub>𝑚</sub>𝑣<sub>𝑚</sub>, where 𝑎<sub>1</sub>,…,𝑎<sub>𝑚</sub> ∈ 𝐅.",
          "zh": "𝑎<sub>1</sub>𝑣<sub>1</sub> +···+𝑎<sub>𝑚</sub>𝑣<sub>𝑚</sub> 的向量，其中𝑎<sub>1</sub>,…,𝑎<sub>𝑚</sub> ∈ F."
        }
      ],
      "note": null,
      "statement_en": "A linear combination of a list 𝑣1, …, 𝑣𝑚 of vectors in 𝑉 is a vector of the form 𝑎1𝑣1 + ⋯ + 𝑎𝑚𝑣𝑚, where 𝑎1,…,𝑎𝑚 ∈ 𝐅.",
      "statement_zh": "𝑎1𝑣1 +···+𝑎𝑚𝑣𝑚 的向量，其中𝑎1,…,𝑎𝑚 ∈ F."
    },
    {
      "id": "2.4",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.4",
      "name_en": "span",
      "name_zh": "张成空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The span of v<sub>1</sub>, …, v<sub>m</sub> is the set of all linear combinations of those vectors. The span of the empty list is {0}.",
          "zh": "v<sub>1</sub>, …, v<sub>m</sub> 的张成空间是这些向量的所有线性组合所构成的集合。空向量组的张成空间为 {0}。"
        }
      ],
      "note": null,
      "statement_en": "The span of v1, …, vm is the set of all linear combinations of those vectors. The span of the empty list is {0}.",
      "statement_zh": "v1, …, vm 的张成空间是这些向量的所有线性组合所构成的集合。空向量组的张成空间为 {0}。"
    },
    {
      "id": "2.6",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.6",
      "name_en": "span is the smallest containing subspace",
      "name_zh": "向量组的张成空间是最小的包含组中所有向量的子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The span of a list of vectors in 𝑉 is the smallest subspace of 𝑉 containing all vectors in the list.",
          "zh": "𝑉 中向量组的张成空间是最小的包含这向量组中所有向量的 𝑉 的子空间."
        }
      ],
      "note": null,
      "statement_en": "The span of a list of vectors in 𝑉 is the smallest subspace of 𝑉 containing all vectors in the list.",
      "statement_zh": "𝑉 中向量组的张成空间是最小的包含这向量组中所有向量的 𝑉 的子空间."
    },
    {
      "id": "2.7",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.7",
      "name_en": "spans",
      "name_zh": "张成",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If span(𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub>) equals 𝑉, we say that the list 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub> spans 𝑉. Some mathematicians use the terminol- 30 ans 𝐅<sup>𝑛</sup> Suppose 𝑛 is a positive integer. We want to show that (1,0,…,0),(0,1,0,…,0),…,(0,…,0,1) spans 𝐅<sup>𝑛</sup>. Here the 𝑘 th vector in the list above has 1 in the 𝑘 th slot and 0 in all other slots. Suppose (𝑥<sub>1</sub>, …, 𝑥<sub>𝑛</sub>) ∈ 𝐅<sup>𝑛</sup>. Then (𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) = 𝑥<sub>1</sub>(1,0,…,0)+𝑥<sub>2</sub>(0,1,0,…,0)+⋯+𝑥<sub>𝑛</sub>(0,…,0,1). Thus (𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) ∈ span((1,0,…,0),(0,1,0,…,0),…,(0,…,0,1)), as desired. Now we can make one of the key definitions in linear algebra.",
          "zh": "3"
        }
      ],
      "note": null,
      "statement_en": "If span(𝑣1, …, 𝑣𝑚) equals 𝑉, we say that the list 𝑣1, …, 𝑣𝑚 spans 𝑉. Some mathematicians use the terminol- 30 ans 𝐅𝑛 Suppose 𝑛 is a positive integer. We want to show that (1,0,…,0),(0,1,0,…,0),…,(0,…,0,1) spans 𝐅𝑛. Here the 𝑘 th vector in the list above has 1 in the 𝑘 th slot and 0 in all other slots. Suppose (𝑥1, …, 𝑥𝑛) ∈ 𝐅𝑛. Then (𝑥1,…,𝑥𝑛) = 𝑥1(1,0,…,0)+𝑥2(0,1,0,…,0)+⋯+𝑥𝑛(0,…,0,1). Thus (𝑥1,…,𝑥𝑛) ∈ span((1,0,…,0),(0,1,0,…,0),…,(0,…,0,1)), as desired. Now we can make one of the key definitions in linear algebra.",
      "statement_zh": "3"
    },
    {
      "id": "2.9",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.9",
      "name_en": "finite-dimensional vector space",
      "name_zh": "有限维向量空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A vector space is called finite-dimensional if some list of vectors in it spans the space. Example",
          "zh": "上面的例 2.8 表明，对于每个正整数 𝑛，F<sup>𝑛</sup> 都是有限维的向量空间. 多项式的定义对你来说无疑是很熟悉 回想一下:根据定义，每个组都具有有限长 的. 度."
        }
      ],
      "note": null,
      "statement_en": "A vector space is called finite-dimensional if some list of vectors in it spans the space. Example",
      "statement_zh": "上面的例 2.8 表明，对于每个正整数 𝑛，F𝑛 都是有限维的向量空间. 多项式的定义对你来说无疑是很熟悉 回想一下:根据定义，每个组都具有有限长 的. 度."
    },
    {
      "id": "2.10",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.10",
      "name_en": "polynomial, 𝒫(𝐅)",
      "name_zh": "多项式(polynomial)、P",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A function 𝑝 ∶ 𝐅 → 𝐅 is called a polynomial with coefficients in 𝐅 if there exist 𝑎<sub>0</sub>,…,𝑎<sub>𝑚</sub> ∈ 𝐅 such that 𝑝(𝑧) = 𝑎<sub>0</sub> +𝑎<sub>1</sub>𝑧+𝑎<sub>2</sub>𝑧<sub>2</sub> +⋯+𝑎<sub>𝑚</sub>𝑧<sub>𝑚</sub> for all 𝑧 ∈ 𝐅.",
          "zh": "𝑝(𝑧) = 𝑎<sub>0</sub> + 𝑎<sub>1</sub>𝑧 + 𝑎<sub>2</sub>𝑧<sub>2</sub> + ⋯ + 𝑎<sub>𝑚</sub>𝑧<sub>𝑚</sub>， 则称 𝑝 为系数在 F 中的多项式. P(F) 是系数在 F 中的全体多项式所构成的集合. 带有通常的加法和标量乘法运算的 P (F) 是 F 上的向量空间(你应自行验证).因此，P (F) 是 FF(全体由 F 到 F 的函数所构成的向量空间)的子空间. 如果一个多项式(视为一个由 F 到 F 的函数)可由两组系数表示，那么将其中一种表示 法减去另一种，就能得到这样一个多项式——F 上的恒等于 0 的函数，因此它的所有系数都为 0(如果你对这个事实不熟悉，暂且相信它是对的，之后我们会证明它——参见 4.8).结论:一 个多项式的系数由该多项式唯一决定.于是，下述定义唯一地规定了多项式的次数."
        },
        {
          "t": "bullet",
          "en": "𝒫(𝐅) is the set of all polynomials with coefficients in 𝐅. With the usual operations of addition and scalar multiplication, 𝒫(𝐅) is a vector space over 𝐅,",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "A polynomial 𝑝 ∈ 𝒫(𝐅) is said to have degree 𝑚 if there exist scalars 𝑎<sub>0</sub>,𝑎<sub>1</sub>,…,𝑎<sub>𝑚</sub> ∈ 𝐅 with 𝑎<sub>𝑚</sub> = ̸ 0 such that for every 𝑧 ∈ 𝐅, we have 𝑝(𝑧) = 𝑎<sub>0</sub> +𝑎<sub>1</sub>𝑧+⋯+𝑎<sub>𝑚</sub>𝑧<sub>𝑚</sub>.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "The polynomial that is identically 0 is said to have degree −∞.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "The degree of a polynomial 𝑝 is denoted by deg 𝑝.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "A function 𝑝 ∶ 𝐅 → 𝐅 is called a polynomial with coefficients in 𝐅 if there exist 𝑎0,…,𝑎𝑚 ∈ 𝐅 such that 𝑝(𝑧) = 𝑎0 +𝑎1𝑧+𝑎2𝑧2 +⋯+𝑎𝑚𝑧𝑚 for all 𝑧 ∈ 𝐅. 𝒫(𝐅) is the set of all polynomials with coefficients in 𝐅. With the usual operations of addition and scalar multiplication, 𝒫(𝐅) is a vector space over 𝐅, A polynomial 𝑝 ∈ 𝒫(𝐅) is said to have degree 𝑚 if there exist scalars 𝑎0,𝑎1,…,𝑎𝑚 ∈ 𝐅 with 𝑎𝑚 = ̸ 0 such that for every 𝑧 ∈ 𝐅, we have 𝑝(𝑧) = 𝑎0 +𝑎1𝑧+⋯+𝑎𝑚𝑧𝑚. The polynomial that is identically 0 is said to have degree −∞. The degree of a polynomial 𝑝 is denoted by deg 𝑝.",
      "statement_zh": "𝑝(𝑧) = 𝑎0 + 𝑎1𝑧 + 𝑎2𝑧2 + ⋯ + 𝑎𝑚𝑧𝑚， 则称 𝑝 为系数在 F 中的多项式. P(F) 是系数在 F 中的全体多项式所构成的集合. 带有通常的加法和标量乘法运算的 P (F) 是 F 上的向量空间(你应自行验证).因此，P (F) 是 FF(全体由 F 到 F 的函数所构成的向量空间)的子空间. 如果一个多项式(视为一个由 F 到 F 的函数)可由两组系数表示，那么将其中一种表示 法减去另一种，就能得到这样一个多项式——F 上的恒等于 0 的函数，因此它的所有系数都为 0(如果你对这个事实不熟悉，暂且相信它是对的，之后我们会证明它——参见 4.8).结论:一 个多项式的系数由该多项式唯一决定.于是，下述定义唯一地规定了多项式的次数.    "
    },
    {
      "id": "2.11",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.11",
      "name_en": "degree of a polynomial, deg 𝑝",
      "name_zh": "多项式的次数(degree of a polynomial)、deg 𝑝",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A polynomial 𝑝 ∈ 𝒫(𝐅) is said to have degree 𝑚 if there exist scalars 𝑎0,𝑎1,...,𝑎𝑚 ∈ 𝐅 with 𝑎𝑚 ≠ 0 such that for every 𝑧 ∈ 𝐅, we have 𝑝(𝑧)=𝑎0 +𝑎1𝑧+⋯+𝑎𝑚𝑧<sub>𝑚</sub>. • The polynomial that is identically 0 is said to have degree −∞. • The degree of a polynomial 𝑝 is denoted by deg 𝑝.",
          "zh": "𝑝(𝑧) = 𝑎<sub>0</sub> + 𝑎<sub>1</sub>𝑧 + ⋯ + 𝑎<sub>𝑚</sub>𝑧<sub>𝑚</sub>， 规定恒等于 0 的多项式的次数为 −∞. 多项式 𝑝 的次数记为 deg 𝑝. 在下面的定义中，我们约定 −∞ &lt; 𝑚，这意味着多项式 0 属于 P<sub>𝑚</sub> (F). 那么就说 𝑝 的次数是 𝑚. 对于非负整数 𝑚，P<sub>𝑚</sub> (F) 表示系数在 F 中且次数不高于 𝑚 的所有多项式所构成的集合. 如果 𝑚 是非负整数，那么 P<sub>𝑚</sub> (F) = span(1, 𝑧, …, 𝑧<sub>𝑚</sub>)(此处我们令 𝑧<sub>𝑘</sub> 表示一个函数，这有 点滥用记号 5).于是，对于每个非负整数 𝑚，P<sub>𝑚</sub> (F) 都是有限维向量空间."
        }
      ],
      "note": null,
      "statement_en": "A polynomial 𝑝 ∈ 𝒫(𝐅) is said to have degree 𝑚 if there exist scalars 𝑎0,𝑎1,...,𝑎𝑚 ∈ 𝐅 with 𝑎𝑚 ≠ 0 such that for every 𝑧 ∈ 𝐅, we have 𝑝(𝑧)=𝑎0 +𝑎1𝑧+⋯+𝑎𝑚𝑧𝑚. • The polynomial that is identically 0 is said to have degree −∞. • The degree of a polynomial 𝑝 is denoted by deg 𝑝.",
      "statement_zh": "𝑝(𝑧) = 𝑎0 + 𝑎1𝑧 + ⋯ + 𝑎𝑚𝑧𝑚， 规定恒等于 0 的多项式的次数为 −∞. 多项式 𝑝 的次数记为 deg 𝑝. 在下面的定义中，我们约定 −∞ &lt; 𝑚，这意味着多项式 0 属于 P𝑚 (F). 那么就说 𝑝 的次数是 𝑚. 对于非负整数 𝑚，P𝑚 (F) 表示系数在 F 中且次数不高于 𝑚 的所有多项式所构成的集合. 如果 𝑚 是非负整数，那么 P𝑚 (F) = span(1, 𝑧, …, 𝑧𝑚)(此处我们令 𝑧𝑘 表示一个函数，这有 点滥用记号 5).于是，对于每个非负整数 𝑚，P𝑚 (F) 都是有限维向量空间."
    },
    {
      "id": "2.12",
      "kind": "notation",
      "chapter": "ch2",
      "number": "2.12",
      "name_en": "𝒫<sub>m</sub>(F)",
      "name_zh": "𝒫<sub>m</sub>(F)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For m a nonnegative integer, 𝒫<sub>m</sub>(F) denotes the set of all polynomials with coefficients in F and degree at most m.",
          "zh": "对于非负整数 m，𝒫<sub>m</sub>(F) 表示系数在 F 中且次数不高于 m 的所有多项式所构成的集合。"
        },
        {
          "t": "p",
          "en": "If m is a nonnegative integer, then",
          "zh": "如果 m 是非负整数，那么"
        },
        {
          "t": "formula",
          "en": "𝒫<sub>m</sub>(F) = span(1, z, …, z<sup>m</sup>)",
          "zh": "𝒫<sub>m</sub>(F) = span(1, z, …, z<sup>m</sup>)"
        },
        {
          "t": "p",
          "en": "[here we slightly abuse notation by letting z<sup>k</sup> denote a function]. Thus 𝒫<sub>m</sub>(F) is a finite-dimensional vector space for each nonnegative integer m.",
          "zh": "（此处我们令 z<sup>k</sup> 表示一个函数，这有点滥用记号。）于是，对于每个非负整数 m，𝒫<sub>m</sub>(F) 都是有限维向量空间。"
        }
      ],
      "note": null,
      "statement_en": "For m a nonnegative integer, 𝒫m(F) denotes the set of all polynomials with coefficients in F and degree at most m. If m is a nonnegative integer, then 𝒫m(F) = span(1, z, …, zm) [here we slightly abuse notation by letting zk denote a function]. Thus 𝒫m(F) is a finite-dimensional vector space for each nonnegative integer m.",
      "statement_zh": "对于非负整数 m，𝒫m(F) 表示系数在 F 中且次数不高于 m 的所有多项式所构成的集合。 如果 m 是非负整数，那么 𝒫m(F) = span(1, z, …, zm) （此处我们令 zk 表示一个函数，这有点滥用记号。）于是，对于每个非负整数 m，𝒫m(F) 都是有限维向量空间。"
    },
    {
      "id": "2.13",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.13",
      "name_en": "infinite-dimensional vector space",
      "name_zh": "无限维向量空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A vector space is called infinite-dimensional if it is not finite-dimensional.",
          "zh": "如果一个向量空间不是有限维的，就称它是无限维的."
        }
      ],
      "note": null,
      "statement_en": "A vector space is called infinite-dimensional if it is not finite-dimensional.",
      "statement_zh": "如果一个向量空间不是有限维的，就称它是无限维的."
    },
    {
      "id": "2.15",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.15",
      "name_en": "linearly independent",
      "name_zh": "线性无关",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A list v<sub>1</sub>, …, v<sub>m</sub> of vectors in V is called linearly independent if the only choice of a<sub>1</sub>, …, a<sub>m</sub> ∈ F that makes",
          "zh": "对于 V 中的向量组 v<sub>1</sub>, …, v<sub>m</sub>，如果使得"
        },
        {
          "t": "formula",
          "en": "a<sub>1</sub>v<sub>1</sub> + ⋯ + a<sub>m</sub>v<sub>m</sub> = 0",
          "zh": "a<sub>1</sub>v<sub>1</sub> + ⋯ + a<sub>m</sub>v<sub>m</sub> = 0"
        },
        {
          "t": "p",
          "en": "is a<sub>1</sub> = ⋯ = a<sub>m</sub> = 0.",
          "zh": "成立的 a<sub>1</sub>, …, a<sub>m</sub> ∈ F 的唯一选取方式是 a<sub>1</sub> = ⋯ = a<sub>m</sub> = 0，那么称该向量组为线性无关的。"
        },
        {
          "t": "bullet",
          "en": "The empty list ( ) is also declared to be linearly independent.",
          "zh": "规定空向量组 ( ) 也是线性无关的。"
        }
      ],
      "note": {
        "en": "The reasoning above shows that v<sub>1</sub>, …, v<sub>m</sub> is linearly independent if and only if each vector in span(v<sub>1</sub>, …, v<sub>m</sub>) has only one representation as a linear combination of v<sub>1</sub>, …, v<sub>m</sub>.",
        "zh": "上面的推导说明，v<sub>1</sub>, …, v<sub>m</sub> 是线性无关的，当且仅当 span(v<sub>1</sub>, …, v<sub>m</sub>) 中的每个向量都只能唯一地表示成 v<sub>1</sub>, …, v<sub>m</sub> 的线性组合。"
      },
      "statement_en": "A list v1, …, vm of vectors in V is called linearly independent if the only choice of a1, …, am ∈ F that makes a1v1 + ⋯ + amvm = 0 is a1 = ⋯ = am = 0. The empty list ( ) is also declared to be linearly independent. The reasoning above shows that v1, …, vm is linearly independent if and only if each vector in span(v1, …, vm) has only one representation as a linear combination of v1, …, vm.",
      "statement_zh": "对于 V 中的向量组 v1, …, vm，如果使得 a1v1 + ⋯ + amvm = 0 成立的 a1, …, am ∈ F 的唯一选取方式是 a1 = ⋯ = am = 0，那么称该向量组为线性无关的。 规定空向量组 ( ) 也是线性无关的。 上面的推导说明，v1, …, vm 是线性无关的，当且仅当 span(v1, …, vm) 中的每个向量都只能唯一地表示成 v1, …, vm 的线性组合。"
    },
    {
      "id": "2.17",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.17",
      "name_en": "linearly dependent",
      "name_zh": "线性相关",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A list of vectors in 𝑉 is called linearly dependent if it is not linearly inde- pendent. • In other words, a list 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub> of vectors in 𝑉 is linearly dependent if there exist 𝑎<sub>1</sub>,…,𝑎<sub>𝑚</sub> ∈ 𝐅,notall0,such that 𝑎<sub>1</sub>𝑣<sub>1</sub> +⋯+𝑎<sub>𝑚</sub>𝑣<sub>𝑚</sub> = 0.",
          "zh": "如果 𝑉 中的一个向量组不是线性无关的，就称它是线性相关的. 换言之，对于 𝑉 中的向量组 𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>，如果存在不全为 0 的 𝑎<sub>1</sub>,…,𝑎<sub>𝑚</sub> 𝑎<sub>1</sub>𝑣<sub>1</sub> + ⋯ + 𝑎<sub>𝑚</sub>𝑣<sub>𝑚</sub> = 0，那么该向量组是线性相关的."
        }
      ],
      "note": null,
      "statement_en": "A list of vectors in 𝑉 is called linearly dependent if it is not linearly inde- pendent. • In other words, a list 𝑣1, …, 𝑣𝑚 of vectors in 𝑉 is linearly dependent if there exist 𝑎1,…,𝑎𝑚 ∈ 𝐅,notall0,such that 𝑎1𝑣1 +⋯+𝑎𝑚𝑣𝑚 = 0.",
      "statement_zh": "如果 𝑉 中的一个向量组不是线性无关的，就称它是线性相关的. 换言之，对于 𝑉 中的向量组 𝑣1,…,𝑣𝑚，如果存在不全为 0 的 𝑎1,…,𝑎𝑚 𝑎1𝑣1 + ⋯ + 𝑎𝑚𝑣𝑚 = 0，那么该向量组是线性相关的."
    },
    {
      "id": "2.19",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.19",
      "name_en": "linear dependence lemma",
      "name_zh": "中 𝑚 = 1 的特殊情况中遇到，见作者在 2.19 证明后所作的说明.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub> is a linearly dependent list in 𝑉. Then there exists 𝑘 ∈ {1,2,...,𝑚} such that Furthermore, if 𝑘 satisfies the condition above and the 𝑘th term is removed 𝑣<sub>𝑘</sub> ∈span(𝑣<sub>1</sub>,...,𝑣<sub>𝑘</sub>−1). from 𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub>, then the span of the remaining list equals span(𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub>).",
          "zh": "C4 就是全体由四个复数组成的组所构成的集合: C4 = {(𝑧<sub>1</sub>,𝑧<sub>2</sub>,𝑧<sub>3</sub>,𝑧<sub>4</sub>) : 𝑧<sub>1</sub>,𝑧<sub>2</sub>,𝑧<sub>3</sub>,𝑧<sub>4</sub> ∈ C}. 如果 𝑛 ≥ 4，我们就无法将 R<sup>𝑛</sup> 可视化为 物理实体;类似地，C1 可以被视作一个平面， 但是对于 𝑛 ≥ 2 情形，人脑就不能想象出 C 𝑛 的全貌了.然而，即便 𝑛 很大，我们也可以如 在 R<sup>2</sup> 或 R<sup>3</sup> 中那样简便地在 F<sup>𝑛</sup> 中进行代数 运算.例如，F<sup>𝑛</sup> 中的加法运算定义如下."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣1,..., 𝑣𝑚 is a linearly dependent list in 𝑉. Then there exists 𝑘 ∈ {1,2,...,𝑚} such that Furthermore, if 𝑘 satisfies the condition above and the 𝑘th term is removed 𝑣𝑘 ∈span(𝑣1,...,𝑣𝑘−1). from 𝑣1,..., 𝑣𝑚, then the span of the remaining list equals span(𝑣1,..., 𝑣𝑚).",
      "statement_zh": "C4 就是全体由四个复数组成的组所构成的集合: C4 = {(𝑧1,𝑧2,𝑧3,𝑧4) : 𝑧1,𝑧2,𝑧3,𝑧4 ∈ C}. 如果 𝑛 ≥ 4，我们就无法将 R𝑛 可视化为 物理实体;类似地，C1 可以被视作一个平面， 但是对于 𝑛 ≥ 2 情形，人脑就不能想象出 C 𝑛 的全貌了.然而，即便 𝑛 很大，我们也可以如 在 R2 或 R3 中那样简便地在 F𝑛 中进行代数 运算.例如，F𝑛 中的加法运算定义如下."
    },
    {
      "id": "2.22",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.22",
      "name_en": "length of linearly independent list",
      "name_zh": "线性无关组的长度 ≤ 张成组的长度",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "≤ length of spanning list In a finite-dimensional vector space, the length of every linearly independent list of vectors is less than or equal to the length of every spanning list of vectors.",
          "zh": "在有限维向量空间中，每个线性无关向量组的长度小于或等于每个张成向量组的长度."
        }
      ],
      "note": null,
      "statement_en": "≤ length of spanning list In a finite-dimensional vector space, the length of every linearly independent list of vectors is less than or equal to the length of every spanning list of vectors.",
      "statement_zh": "在有限维向量空间中，每个线性无关向量组的长度小于或等于每个张成向量组的长度."
    },
    {
      "id": "2.25",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.25",
      "name_en": "finite-dimensional subspaces",
      "name_zh": "有限维的子空间 有限维向量空间的每个子空间都是有限维的.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every subspace of a finite-dimensional vector space is finite-dimensional.",
          "zh": "有限维的子空间 有限维向量空间的每个子空间都是有限维的."
        }
      ],
      "note": null,
      "statement_en": "Every subspace of a finite-dimensional vector space is finite-dimensional.",
      "statement_zh": "有限维的子空间 有限维向量空间的每个子空间都是有限维的."
    },
    {
      "id": "2.26",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.26",
      "name_en": "basis",
      "name_zh": "基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A basis of 𝑉 is a list of vectors in 𝑉 that is linearly independent and spans 𝑉.",
          "zh": "𝑉 中线性无关且张成 𝑉 的向量组称为 𝑉 的基."
        }
      ],
      "note": null,
      "statement_en": "A basis of 𝑉 is a list of vectors in 𝑉 that is linearly independent and spans 𝑉.",
      "statement_zh": "𝑉 中线性无关且张成 𝑉 的向量组称为 𝑉 的基."
    },
    {
      "id": "2.28",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.28",
      "name_en": "criterion for basis",
      "name_zh": "基的判定准则",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A list v<sub>1</sub>, …, v<sub>n</sub> of vectors in V is a basis of V if and only if every v ∈ V can be written uniquely in the form",
          "zh": "V 中的向量组 v<sub>1</sub>, …, v<sub>n</sub> 是 V 的基，当且仅当每个 v ∈ V 都能唯一地写成下式"
        },
        {
          "t": "formula",
          "en": "v = a<sub>1</sub>v<sub>1</sub> + ⋯ + a<sub>n</sub>v<sub>n</sub>",
          "zh": "v = a<sub>1</sub>v<sub>1</sub> + ⋯ + a<sub>n</sub>v<sub>n</sub>"
        },
        {
          "t": "p",
          "en": "where a<sub>1</sub>, …, a<sub>n</sub> ∈ F.",
          "zh": "其中 a<sub>1</sub>, …, a<sub>n</sub> ∈ F。"
        }
      ],
      "note": null,
      "statement_en": "A list v1, …, vn of vectors in V is a basis of V if and only if every v ∈ V can be written uniquely in the form v = a1v1 + ⋯ + anvn where a1, …, an ∈ F.",
      "statement_zh": "V 中的向量组 v1, …, vn 是 V 的基，当且仅当每个 v ∈ V 都能唯一地写成下式 v = a1v1 + ⋯ + anvn 其中 a1, …, an ∈ F。"
    },
    {
      "id": "2.29",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.29",
      "name_en": "is unique, suppose",
      "name_zh": "is unique, suppose",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑐<sub>1</sub>, …, 𝑐<sub>𝑛</sub> are scalars such that we also have This",
          "zh": "is unique, suppose"
        }
      ],
      "note": null,
      "statement_en": "𝑐1, …, 𝑐𝑛 are scalars such that we also have This",
      "statement_zh": "is unique, suppose"
    },
    {
      "id": "2.30",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.30",
      "name_en": "every spanning list contains a basis",
      "name_zh": "每个张成组都包含基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every spanning list in a vector space can be reduced to a basis of the vector space.",
          "zh": "向量空间中的每个张成组都能被削减成该向量空间的基."
        }
      ],
      "note": null,
      "statement_en": "Every spanning list in a vector space can be reduced to a basis of the vector space.",
      "statement_zh": "向量空间中的每个张成组都能被削减成该向量空间的基."
    },
    {
      "id": "2.31",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.31",
      "name_en": "basis of finite-dimensional vector space",
      "name_zh": "有限维向量空间的基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every finite-dimensional vector space has a basis.",
          "zh": "每个有限维向量空间都有基。"
        }
      ],
      "note": null,
      "statement_en": "Every finite-dimensional vector space has a basis.",
      "statement_zh": "每个有限维向量空间都有基。"
    },
    {
      "id": "2.32",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.32",
      "name_en": "every linearly independent list extends to a basis",
      "name_zh": "每个线性无关组都可被扩充成基 有限维向量空间中每个线性无关向量组都可被扩充成该向量空间的基.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every linearly independent list of vectors in a finite-dimensional vector space can be extended to a basis of the vector space.",
          "zh": "2B 基 35"
        }
      ],
      "note": null,
      "statement_en": "Every linearly independent list of vectors in a finite-dimensional vector space can be extended to a basis of the vector space.",
      "statement_zh": "2B 基 35"
    },
    {
      "id": "2.33",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.33",
      "name_en": "every subspace of",
      "name_zh": "𝑉 的每个子空间都是等于 𝑉 的直和的组成部分",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉 is part of a direct sum equal to 𝑉 Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then there is a subspace 𝑊 of 𝑉 such that 𝑉 = 𝑈 ⊕ 𝑊.",
          "zh": "假设𝑉 是有限维的，𝑈 是𝑉 的子空间.那么存在𝑉 的子空间𝑊，使得𝑉 = 𝑈 ⊕𝑊."
        }
      ],
      "note": null,
      "statement_en": "𝑉 is part of a direct sum equal to 𝑉 Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then there is a subspace 𝑊 of 𝑉 such that 𝑉 = 𝑈 ⊕ 𝑊.",
      "statement_zh": "假设𝑉 是有限维的，𝑈 是𝑉 的子空间.那么存在𝑉 的子空间𝑊，使得𝑉 = 𝑈 ⊕𝑊."
    },
    {
      "id": "2.34",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.34",
      "name_en": "basis length does not depend on basis",
      "name_zh": "基的长度不依赖于基的选取 有限维向量空间的任意两个基都有相同的长度.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Any two bases of a finite-dimensional vector space have the same length.",
          "zh": "2C 维数 37 2C 维数 尽管我们一直在讨论有限维数的向量空间，我们仍未定义这种对象的“维数”究竟是什么. 应该怎么定义维数呢?一个合理的定义，应该能使 F<sup>𝑛</sup> 的维数等于 𝑛.注意到，F<sup>𝑛</sup> 的标准基 (1, 0, …, 0), (0, 1, …, 0), …, (0, …, 0, 1) 的长度是 𝑛.于是，我们想把维数定义成基的长度.然而，一个有限维向量空间往往有很多不 同的基，只有当给定向量空间中所有的基都有相同长度时，我们期望的定义才是合理的.幸好 事实就是如此——现在我们就给出证明."
        }
      ],
      "note": null,
      "statement_en": "Any two bases of a finite-dimensional vector space have the same length.",
      "statement_zh": "2C 维数 37 2C 维数 尽管我们一直在讨论有限维数的向量空间，我们仍未定义这种对象的“维数”究竟是什么. 应该怎么定义维数呢?一个合理的定义，应该能使 F𝑛 的维数等于 𝑛.注意到，F𝑛 的标准基 (1, 0, …, 0), (0, 1, …, 0), …, (0, …, 0, 1) 的长度是 𝑛.于是，我们想把维数定义成基的长度.然而，一个有限维向量空间往往有很多不 同的基，只有当给定向量空间中所有的基都有相同长度时，我们期望的定义才是合理的.幸好 事实就是如此——现在我们就给出证明."
    },
    {
      "id": "2.35",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.35",
      "name_en": "dimension, dim 𝑉",
      "name_zh": "维数(dimension)、dim 𝑉 有限维向量空间的维数是这个向量空间中任意",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The dimension of a finite-dimensional vector space is the length of any basis of the vector space. • The dimension of a finite-dimensional vector space 𝑉 is denoted by dim 𝑉.",
          "zh": "维数(dimension)、dim 𝑉 有限维向量空间的维数是这个向量空间中任意"
        }
      ],
      "note": null,
      "statement_en": "The dimension of a finite-dimensional vector space is the length of any basis of the vector space. • The dimension of a finite-dimensional vector space 𝑉 is denoted by dim 𝑉.",
      "statement_zh": "维数(dimension)、dim 𝑉 有限维向量空间的维数是这个向量空间中任意"
    },
    {
      "id": "2.37",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.37",
      "name_en": "dimension of a subspace",
      "name_zh": "子空间的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉, then dim 𝑈 ≤ dim 𝑉.",
          "zh": "如果 𝑉 是有限维的且 𝑈 是 𝑉 的子空间，那么 dim 𝑈 ≤ dim 𝑉."
        }
      ],
      "note": null,
      "statement_en": "If 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉, then dim 𝑈 ≤ dim 𝑉.",
      "statement_zh": "如果 𝑉 是有限维的且 𝑈 是 𝑉 的子空间，那么 dim 𝑈 ≤ dim 𝑉."
    },
    {
      "id": "2.38",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.38",
      "name_en": "linearly independent list of the right length is a basis",
      "name_zh": "长度恰当的线性无关组是基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. Then every linearly independent list of vectors in 𝑉 of length dim 𝑉 is a basis of 𝑉.",
          "zh": "假设 𝑉 是有限维的.那么 𝑉 中每个长度为 dim 𝑉 的线性无关向量组都是 𝑉 的基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then every linearly independent list of vectors in 𝑉 of length dim 𝑉 is a basis of 𝑉.",
      "statement_zh": "假设 𝑉 是有限维的.那么 𝑉 中每个长度为 dim 𝑉 的线性无关向量组都是 𝑉 的基."
    },
    {
      "id": "2.39",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.39",
      "name_en": "subspace of full dimension equals the whole space",
      "name_zh": "某空间中与之维数相同的子空间等于这整个空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉 such that dim 𝑈 = dim 𝑉. Then 𝑈 = 𝑉.",
          "zh": "假设 𝑉 是有限维的，𝑈 是 𝑉 的子空间且满足 dim 𝑈 = dim 𝑉.那么 𝑈 = 𝑉."
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉 such that dim 𝑈 = dim 𝑉. Then 𝑈 = 𝑉.",
      "statement_zh": "假设 𝑉 是有限维的，𝑈 是 𝑉 的子空间且满足 dim 𝑈 = dim 𝑉.那么 𝑈 = 𝑉."
    },
    {
      "id": "2.42",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.42",
      "name_en": "spanning list of the right length is a basis",
      "name_zh": "长度恰当的张成组是基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. Then every list of vectors in 𝑉 that spans 𝑉 and has length dim 𝑉 is a basis of 𝑉.",
          "zh": "假设 𝑉 是有限维的.那么 𝑉 中每个长度为 dim 𝑉 的张成组都是 𝑉 的基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then every list of vectors in 𝑉 that spans 𝑉 and has length dim 𝑉 is a basis of 𝑉.",
      "statement_zh": "假设 𝑉 是有限维的.那么 𝑉 中每个长度为 dim 𝑉 的张成组都是 𝑉 的基."
    },
    {
      "id": "2.43",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.43",
      "name_en": "dimension of a sum",
      "name_zh": "子空间之和的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑉<sub>1</sub> and 𝑉<sub>2</sub> are subspaces of a finite-dimensional vector space, then dim(𝑉<sub>1</sub> +𝑉<sub>2</sub>) = dim 𝑉<sub>1</sub> +dim 𝑉<sub>2</sub> −dim(𝑉<sub>1</sub> ∩𝑉<sub>2</sub>).",
          "zh": "如果 𝑉<sub>1</sub> 和 𝑉<sub>2</sub> 是一个有限维向量空间的子空间，那么 dim(𝑉<sub>1</sub> +𝑉<sub>2</sub>) = dim 𝑉<sub>1</sub> +dim 𝑉<sub>2</sub> −dim(𝑉<sub>1</sub> ∩𝑉<sub>2</sub>)."
        }
      ],
      "note": null,
      "statement_en": "If 𝑉1 and 𝑉2 are subspaces of a finite-dimensional vector space, then dim(𝑉1 +𝑉2) = dim 𝑉1 +dim 𝑉2 −dim(𝑉1 ∩𝑉2).",
      "statement_zh": "如果 𝑉1 和 𝑉2 是一个有限维向量空间的子空间，那么 dim(𝑉1 +𝑉2) = dim 𝑉1 +dim 𝑉2 −dim(𝑉1 ∩𝑉2)."
    },
    {
      "id": "2.44",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.44",
      "name_en": "is contained in",
      "name_zh": "is contained in",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉<sub>1</sub> ∪ 𝑉<sub>2</sub> and thus is contained in 𝑉<sub>1</sub> + 𝑉<sub>2</sub>. The span of this list contains 𝑉<sub>1</sub> and contains 𝑉<sub>2</sub> and hence is equal to 𝑉<sub>1</sub> + 𝑉<sub>2</sub>. Thus to show that 2.44 is a basis of 𝑉<sub>1</sub> + 𝑉<sub>2</sub> we only need to show that it is linearly independent. To prove that 2.44 is linearly independent, suppose 𝑎<sub>1</sub>𝑣<sub>1</sub> +⋯+𝑎<sub>𝑚</sub>𝑣<sub>𝑚</sub> +𝑏<sub>1</sub>𝑢<sub>1</sub> +⋯+𝑏<sub>𝑗</sub>𝑢<sub>𝑗</sub> +𝑐<sub>1</sub>𝑤<sub>1</sub> +⋯+𝑐<sub>𝑘</sub>𝑤<sub>𝑘</sub> = 0, where all the 𝑎’s, 𝑏’s, and 𝑐’s are scalars. We need to prove that all the 𝑎’s, 𝑏’s, and 𝑐’s equal 0. The equation above can be rewritten as 2.45 𝑐<sub>1</sub>𝑤<sub>1</sub> +⋯+𝑐<sub>𝑘</sub>𝑤<sub>𝑘</sub> = −𝑎<sub>1</sub>𝑣<sub>1</sub> −⋯−𝑎<sub>𝑚</sub>𝑣<sub>𝑚</sub> −𝑏<sub>1</sub>𝑢<sub>1</sub> −⋯−𝑏<sub>𝑗</sub>𝑢<sub>𝑗</sub>, which shows that 𝑐<sub>1</sub>𝑤<sub>1</sub> + ⋯ + 𝑐<sub>𝑘</sub>𝑤<sub>𝑘</sub> ∈ 𝑉<sub>1</sub>. All the 𝑤’s are in 𝑉<sub>2</sub>, so this implies that 𝑐<sub>1</sub>𝑤<sub>1</sub> +⋯+𝑐<sub>𝑘</sub>𝑤<sub>𝑘</sub> ∈ 𝑉<sub>1</sub> ∩𝑉<sub>2</sub>. Because 𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub> isabasisof 𝑉<sub>1</sub> ∩𝑉<sub>2</sub>,we have 𝑐<sub>1</sub>𝑤<sub>1</sub> +⋯+𝑐<sub>𝑘</sub>𝑤<sub>𝑘</sub> = 𝑑1𝑣<sub>1</sub> +⋯+𝑑𝑚𝑣<sub>𝑚</sub> for some scalars 𝑑1, …, 𝑑𝑚. But 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub>, 𝑤<sub>1</sub>, …, 𝑤<sub>𝑘</sub> is linearly independent, so the last equation implies that all the 𝑐’s (and 𝑑’s) equal 0. Thus",
          "zh": "is contained in"
        }
      ],
      "note": null,
      "statement_en": "𝑉1 ∪ 𝑉2 and thus is contained in 𝑉1 + 𝑉2. The span of this list contains 𝑉1 and contains 𝑉2 and hence is equal to 𝑉1 + 𝑉2. Thus to show that 2.44 is a basis of 𝑉1 + 𝑉2 we only need to show that it is linearly independent. To prove that 2.44 is linearly independent, suppose 𝑎1𝑣1 +⋯+𝑎𝑚𝑣𝑚 +𝑏1𝑢1 +⋯+𝑏𝑗𝑢𝑗 +𝑐1𝑤1 +⋯+𝑐𝑘𝑤𝑘 = 0, where all the 𝑎’s, 𝑏’s, and 𝑐’s are scalars. We need to prove that all the 𝑎’s, 𝑏’s, and 𝑐’s equal 0. The equation above can be rewritten as 2.45 𝑐1𝑤1 +⋯+𝑐𝑘𝑤𝑘 = −𝑎1𝑣1 −⋯−𝑎𝑚𝑣𝑚 −𝑏1𝑢1 −⋯−𝑏𝑗𝑢𝑗, which shows that 𝑐1𝑤1 + ⋯ + 𝑐𝑘𝑤𝑘 ∈ 𝑉1. All the 𝑤’s are in 𝑉2, so this implies that 𝑐1𝑤1 +⋯+𝑐𝑘𝑤𝑘 ∈ 𝑉1 ∩𝑉2. Because 𝑣1,…,𝑣𝑚 isabasisof 𝑉1 ∩𝑉2,we have 𝑐1𝑤1 +⋯+𝑐𝑘𝑤𝑘 = 𝑑1𝑣1 +⋯+𝑑𝑚𝑣𝑚 for some scalars 𝑑1, …, 𝑑𝑚. But 𝑣1, …, 𝑣𝑚, 𝑤1, …, 𝑤𝑘 is linearly independent, so the last equation implies that all the 𝑐’s (and 𝑑’s) equal 0. Thus",
      "statement_zh": "is contained in"
    },
    {
      "id": "2.45",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.45",
      "name_en": "becomes the equation",
      "name_zh": "becomes the equation",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑎<sub>1</sub>𝑣<sub>1</sub> +⋯+𝑎<sub>𝑚</sub>𝑣<sub>𝑚</sub> +𝑏<sub>1</sub>𝑢<sub>1</sub> +⋯+𝑏<sub>𝑗</sub>𝑢<sub>𝑗</sub> = 0. Because the list 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub>, 𝑢<sub>1</sub>, …, 𝑢<sub>𝑗</sub> is linearly independent, this equation implies that all the 𝑎’s and 𝑏’s are 0, completing the",
          "zh": "becomes the equation"
        }
      ],
      "note": null,
      "statement_en": "𝑎1𝑣1 +⋯+𝑎𝑚𝑣𝑚 +𝑏1𝑢1 +⋯+𝑏𝑗𝑢𝑗 = 0. Because the list 𝑣1, …, 𝑣𝑚, 𝑢1, …, 𝑢𝑗 is linearly independent, this equation implies that all the 𝑎’s and 𝑏’s are 0, completing the",
      "statement_zh": "becomes the equation"
    },
    {
      "id": "3.1",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.1",
      "name_en": "linear map",
      "name_zh": "线性映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear map from V to W is a function T : V → W with the following properties.",
          "zh": "从 V 到 W 的线性映射是满足下列性质的函数 T : V → W。"
        },
        {
          "t": "bullet",
          "en": "Additivity. T(u + v) = Tu + Tv for all u, v ∈ V",
          "zh": "可加性 对于所有 u, v ∈ V，均有 T(u + v) = Tu + Tv。"
        },
        {
          "t": "bullet",
          "en": "Homogeneity. T(λv) = λ(Tv) for all λ ∈ F and all v ∈ V",
          "zh": "齐次性 对于所有 λ ∈ F 和所有 v ∈ V，均有 T(λv) = λ(Tv)。"
        }
      ],
      "note": null,
      "statement_en": "A linear map from V to W is a function T : V → W with the following properties. Additivity. T(u + v) = Tu + Tv for all u, v ∈ V Homogeneity. T(λv) = λ(Tv) for all λ ∈ F and all v ∈ V",
      "statement_zh": "从 V 到 W 的线性映射是满足下列性质的函数 T : V → W。 可加性 对于所有 u, v ∈ V，均有 T(u + v) = Tu + Tv。 齐次性 对于所有 λ ∈ F 和所有 v ∈ V，均有 T(λv) = λ(Tv)。"
    },
    {
      "id": "3.2",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.2",
      "name_en": "L(𝑉, 𝑊), L(𝑉)",
      "name_zh": "L(𝑉,𝑊)、L",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The set of linear maps from 𝑉 to 𝑊 is denoted by L(𝑉, 𝑊). • The set of linear maps from 𝑉 to 𝑉 is denoted by L(𝑉). In other words, L(𝑉) = L(𝑉,𝑉). Let’s look at some examples of linear maps. Make sure you verify that each of the functions defined",
          "zh": "从𝑉 到𝑊 的全体线性映射构成的集合记作 L(𝑉,𝑊). 从 𝑉 到 𝑉 的全体线性映射构成的集合记作 L(𝑉).换言之，L(𝑉) = L(𝑉,𝑉). 我们看些线性映射的实例.请务必自行验证下面的例子中定义的每个函数都确实是线性 映射."
        }
      ],
      "note": null,
      "statement_en": "The set of linear maps from 𝑉 to 𝑊 is denoted by L(𝑉, 𝑊). • The set of linear maps from 𝑉 to 𝑉 is denoted by L(𝑉). In other words, L(𝑉) = L(𝑉,𝑉). Let’s look at some examples of linear maps. Make sure you verify that each of the functions defined",
      "statement_zh": "从𝑉 到𝑊 的全体线性映射构成的集合记作 L(𝑉,𝑊). 从 𝑉 到 𝑉 的全体线性映射构成的集合记作 L(𝑉).换言之，L(𝑉) = L(𝑉,𝑉). 我们看些线性映射的实例.请务必自行验证下面的例子中定义的每个函数都确实是线性 映射."
    },
    {
      "id": "3.4",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.4",
      "name_en": "linear map lemma",
      "name_zh": "线性映射引理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a basis of 𝑉 and 𝑤<sub>1</sub>,...,𝑤<sub>𝑛</sub> ∈ 𝑊. Then there exists a unique linear map 𝑇 ∶ 𝑉 → 𝑊 such that 𝑇𝑣<sub>𝑘</sub> = 𝑤<sub>𝑘</sub>",
          "zh": "假定𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>是𝑉的基且𝑤<sub>1</sub>,…,𝑤<sub>𝑛</sub> ∈ 𝑊.那么存在唯一的线性映射𝑇:𝑉→𝑊使得 对每个 𝑘 = 1,…,𝑛 都有 从 F<sup>𝑛</sup> 到 F<sup>𝑚</sup> 的映射 𝑇𝑣<sub>𝑘</sub> = 𝑤<sub>𝑘</sub>."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣1,...,𝑣𝑛 is a basis of 𝑉 and 𝑤1,...,𝑤𝑛 ∈ 𝑊. Then there exists a unique linear map 𝑇 ∶ 𝑉 → 𝑊 such that 𝑇𝑣𝑘 = 𝑤𝑘",
      "statement_zh": "假定𝑣1,…,𝑣𝑛是𝑉的基且𝑤1,…,𝑤𝑛 ∈ 𝑊.那么存在唯一的线性映射𝑇:𝑉→𝑊使得 对每个 𝑘 = 1,…,𝑛 都有 从 F𝑛 到 F𝑚 的映射 𝑇𝑣𝑘 = 𝑤𝑘."
    },
    {
      "id": "3.5",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.5",
      "name_en": "addition and scalar multiplication on L(𝑉, 𝑊)",
      "name_zh": "L(𝑉,𝑊) 上的加法和标量乘法【addition and scalar multiplication on L(𝑉,𝑊)】",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑆, 𝑇 ∈ L(𝑉, 𝑊) and 𝜆 ∈ 𝐅. The sum 𝑆 + 𝑇 and the product 𝜆𝑇 are the linear maps from 𝑉 to 𝑊 defined by (𝑆 + 𝑇)(𝑣) = 𝑆𝑣 + 𝑇𝑣 and",
          "zh": "(𝑆 + 𝑇)(𝑣) = 𝑆𝑣 + 𝑇𝑣，(𝜆𝑇)(𝑣) = 𝜆(𝑇𝑣). 你应该验证定义如上的 𝑆 + 𝑇 和 𝜆𝑇 确实 线性映射在数学中普遍存在.然而，它们并 是线性映射.换言之，如果 𝑆, 𝑇 ∈ L (𝑉, 𝑊) 且 不如有些人想象的那般无处不在.当这些人 𝜆 ∈ F，那么𝑆+𝑇 ∈ L(𝑉,𝑊)且𝜆𝑇 ∈ L(𝑉,𝑊). 错误地写出 cos(𝑥+𝑦)等于 cos 𝑥+cos 𝑦和 因为我们特地在 L(𝑉, 𝑊) 上定义了加法 cos 2𝑥 等于 2 cos 𝑥 时，似乎连 cos 都能看成 和标量乘法，所以下面结果就不足为奇了. 从 R 到 R 的线性映射."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑆, 𝑇 ∈ L(𝑉, 𝑊) and 𝜆 ∈ 𝐅. The sum 𝑆 + 𝑇 and the product 𝜆𝑇 are the linear maps from 𝑉 to 𝑊 defined by (𝑆 + 𝑇)(𝑣) = 𝑆𝑣 + 𝑇𝑣 and",
      "statement_zh": "(𝑆 + 𝑇)(𝑣) = 𝑆𝑣 + 𝑇𝑣，(𝜆𝑇)(𝑣) = 𝜆(𝑇𝑣). 你应该验证定义如上的 𝑆 + 𝑇 和 𝜆𝑇 确实 线性映射在数学中普遍存在.然而，它们并 是线性映射.换言之，如果 𝑆, 𝑇 ∈ L (𝑉, 𝑊) 且 不如有些人想象的那般无处不在.当这些人 𝜆 ∈ F，那么𝑆+𝑇 ∈ L(𝑉,𝑊)且𝜆𝑇 ∈ L(𝑉,𝑊). 错误地写出 cos(𝑥+𝑦)等于 cos 𝑥+cos 𝑦和 因为我们特地在 L(𝑉, 𝑊) 上定义了加法 cos 2𝑥 等于 2 cos 𝑥 时，似乎连 cos 都能看成 和标量乘法，所以下面结果就不足为奇了. 从 R 到 R 的线性映射."
    },
    {
      "id": "3.6",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.6",
      "name_en": "L(𝑉, 𝑊) is a vector space",
      "name_zh": "L(𝑉,𝑊) 是向量空间 有了上面定义的加法和标量乘法，L(𝑉,𝑊) 就是向量空间.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "With the operations of addition and scalar multiplication as defined above, L(𝑉, 𝑊) is a vector space. The routine",
          "zh": "3A 线性映射所成的向量空间 47 上述结论的证明很常规，留给读者完成.注意 L(𝑉,𝑊) 的加法恒等元是例 3.3 中定义的零 线性映射. 通常，将一个向量空间中的两个元素相乘没有意义，但在某些线性映射之间却能构造出有 用的乘积，接下来给出定义."
        }
      ],
      "note": null,
      "statement_en": "With the operations of addition and scalar multiplication as defined above, L(𝑉, 𝑊) is a vector space. The routine",
      "statement_zh": "3A 线性映射所成的向量空间 47 上述结论的证明很常规，留给读者完成.注意 L(𝑉,𝑊) 的加法恒等元是例 3.3 中定义的零 线性映射. 通常，将一个向量空间中的两个元素相乘没有意义，但在某些线性映射之间却能构造出有 用的乘积，接下来给出定义."
    },
    {
      "id": "3.7",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.7",
      "name_en": "product of linear maps",
      "name_zh": "线性映射的乘积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑇 ∈ L(𝑈,𝑉) and 𝑆 ∈ L(𝑉,𝑊), then the product 𝑆𝑇 ∈ L(𝑈,𝑊) is defined by for all 𝑢 ∈ 𝑈. (𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢) Thus 𝑆𝑇 is just the usual composition 𝑆 ∘ 𝑇 of two functions, but when both functions are linear, we usually write 𝑆𝑇 instead of 𝑆 ∘ 𝑇. The product notation 𝑆𝑇 helps make the distributive properties (see next result) seem natural. Note that 𝑆𝑇 is defined only when 𝑇 maps into the domain of 𝑆.",
          "zh": "如果 𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)，那么乘积 𝑆𝑇 ∈ L(𝑈,𝑊) 就定义为:对于所有 𝑢 ∈ 𝑈， (𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢). 由此可见，𝑆𝑇 就是一般的两函数复合 𝑆 ◦ 𝑇 ，不过当两个函数都是线性函数时，我们通常 使用 𝑆𝑇 这个记号而不用 𝑆 ◦ 𝑇.用 𝑆𝑇 这样的乘积表示法，有助于使下个结果中的分配性质看 起来更自然些. 注意只有当 𝑇 映射到 𝑆 的定义空间中时，𝑆𝑇 才有定义.你应该验证对于任意 𝑇 ∈ L (𝑈, 𝑉) 和 𝑆 ∈ L(𝑉,𝑊)，𝑆𝑇 的确是从 𝑈 到 𝑊 的线性映射."
        }
      ],
      "note": null,
      "statement_en": "If 𝑇 ∈ L(𝑈,𝑉) and 𝑆 ∈ L(𝑉,𝑊), then the product 𝑆𝑇 ∈ L(𝑈,𝑊) is defined by for all 𝑢 ∈ 𝑈. (𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢) Thus 𝑆𝑇 is just the usual composition 𝑆 ∘ 𝑇 of two functions, but when both functions are linear, we usually write 𝑆𝑇 instead of 𝑆 ∘ 𝑇. The product notation 𝑆𝑇 helps make the distributive properties (see next result) seem natural. Note that 𝑆𝑇 is defined only when 𝑇 maps into the domain of 𝑆.",
      "statement_zh": "如果 𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)，那么乘积 𝑆𝑇 ∈ L(𝑈,𝑊) 就定义为:对于所有 𝑢 ∈ 𝑈， (𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢). 由此可见，𝑆𝑇 就是一般的两函数复合 𝑆 ◦ 𝑇 ，不过当两个函数都是线性函数时，我们通常 使用 𝑆𝑇 这个记号而不用 𝑆 ◦ 𝑇.用 𝑆𝑇 这样的乘积表示法，有助于使下个结果中的分配性质看 起来更自然些. 注意只有当 𝑇 映射到 𝑆 的定义空间中时，𝑆𝑇 才有定义.你应该验证对于任意 𝑇 ∈ L (𝑈, 𝑉) 和 𝑆 ∈ L(𝑉,𝑊)，𝑆𝑇 的确是从 𝑈 到 𝑊 的线性映射."
    },
    {
      "id": "3.8",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.8",
      "name_en": "algebraic properties of products of linear maps",
      "name_zh": "线性映射乘积的代数性质 可结合性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "associativity (𝑇<sup>1</sup>𝑇<sup>2</sup>)𝑇<sup>3</sup> = 𝑇<sup>1</sup>(𝑇<sup>2</sup>𝑇<sup>3</sup>) whenever 𝑇<sup>1</sup>, 𝑇<sup>2</sup>, and 𝑇<sup>3</sup> are linear maps such that the products make sense (meaning 𝑇<sup>3</sup> maps into the domain of 𝑇<sup>2</sup>, and 𝑇<sup>2</sup> maps into the domain of 𝑇<sup>1</sup>). identity 𝑇𝐼 = 𝐼𝑇 = 𝑇 whenever 𝑇 ∈ L(𝑉,𝑊); here the first 𝐼 is the identity operator on 𝑉, and the second 𝐼 is the identity operator on 𝑊. distributive properties (𝑆<sup>1</sup> +𝑆<sup>2</sup>)𝑇 = 𝑆<sup>1</sup>𝑇+𝑆<sup>2</sup>𝑇 and 𝑆(𝑇<sup>1</sup> +𝑇<sup>2</sup>) = 𝑆𝑇<sup>1</sup> +𝑆𝑇<sup>2</sup> whenever 𝑇,𝑇<sup>1</sup>,𝑇<sup>2</sup> ∈ L(𝑈,𝑉) and 𝑆,𝑆<sup>1</sup>,𝑆<sup>2</sup> ∈ L(𝑉,𝑊). The routine",
          "zh": "对于任意使乘积有意义的线性映射 𝑇<sup>1</sup>,𝑇<sup>2</sup>,𝑇<sup>3</sup>(意即 𝑇<sup>3</sup> 映射到 𝑇<sup>2</sup> 的定义空间中，𝑇<sup>2</sup> 映射到𝑇<sup>1</sup> 的定义空间中)，有(𝑇<sup>1</sup>𝑇<sup>2</sup>)𝑇<sup>3</sup> = 𝑇<sup>1</sup>(𝑇<sup>2</sup>𝑇<sup>3</sup>). 恒等元(identity) 对于任意 𝑇 ∈ L(𝑉,𝑊)，有 𝑇𝐼 = 𝐼𝑇 = 𝑇.这里第一个 𝐼 是 𝑉 上的恒等算子，而第二 个 𝐼 是 𝑊 上的恒等算子. 分配性质(distributive properties) 对于任意𝑇,𝑇<sup>1</sup>,𝑇<sup>2</sup> ∈ L(𝑈,𝑉)和𝑆,𝑆<sup>1</sup>,𝑆<sup>2</sup> ∈ L(𝑉,𝑊)，有(𝑆<sup>1</sup>+𝑆<sup>2</sup>)𝑇 = 𝑆<sup>1</sup>𝑇+𝑆<sup>2</sup>𝑇且 𝑆(𝑇<sup>1</sup> + 𝑇<sup>2</sup>) = 𝑆𝑇<sup>1</sup> + 𝑆𝑇<sup>2</sup>. 上述结论的证明很常规，留给读者完成. 线性映射的乘法不满足交换律.换言之，𝑆𝑇 = 𝑇 𝑆 并不一定正确，即便式子两侧的乘积都 是有意义的."
        }
      ],
      "note": null,
      "statement_en": "associativity (𝑇1𝑇2)𝑇3 = 𝑇1(𝑇2𝑇3) whenever 𝑇1, 𝑇2, and 𝑇3 are linear maps such that the products make sense (meaning 𝑇3 maps into the domain of 𝑇2, and 𝑇2 maps into the domain of 𝑇1). identity 𝑇𝐼 = 𝐼𝑇 = 𝑇 whenever 𝑇 ∈ L(𝑉,𝑊); here the first 𝐼 is the identity operator on 𝑉, and the second 𝐼 is the identity operator on 𝑊. distributive properties (𝑆1 +𝑆2)𝑇 = 𝑆1𝑇+𝑆2𝑇 and 𝑆(𝑇1 +𝑇2) = 𝑆𝑇1 +𝑆𝑇2 whenever 𝑇,𝑇1,𝑇2 ∈ L(𝑈,𝑉) and 𝑆,𝑆1,𝑆2 ∈ L(𝑉,𝑊). The routine",
      "statement_zh": "对于任意使乘积有意义的线性映射 𝑇1,𝑇2,𝑇3(意即 𝑇3 映射到 𝑇2 的定义空间中，𝑇2 映射到𝑇1 的定义空间中)，有(𝑇1𝑇2)𝑇3 = 𝑇1(𝑇2𝑇3). 恒等元(identity) 对于任意 𝑇 ∈ L(𝑉,𝑊)，有 𝑇𝐼 = 𝐼𝑇 = 𝑇.这里第一个 𝐼 是 𝑉 上的恒等算子，而第二 个 𝐼 是 𝑊 上的恒等算子. 分配性质(distributive properties) 对于任意𝑇,𝑇1,𝑇2 ∈ L(𝑈,𝑉)和𝑆,𝑆1,𝑆2 ∈ L(𝑉,𝑊)，有(𝑆1+𝑆2)𝑇 = 𝑆1𝑇+𝑆2𝑇且 𝑆(𝑇1 + 𝑇2) = 𝑆𝑇1 + 𝑆𝑇2. 上述结论的证明很常规，留给读者完成. 线性映射的乘法不满足交换律.换言之，𝑆𝑇 = 𝑇 𝑆 并不一定正确，即便式子两侧的乘积都 是有意义的."
    },
    {
      "id": "3.10",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.10",
      "name_en": "linear maps take 0 to 0",
      "name_zh": "线性映射将 0 映射为 0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 is a linear map from 𝑉 to 𝑊. Then 𝑇(0) = 0.",
          "zh": "假设 𝑇 是由 𝑉 到 𝑊 的线性映射.那么 𝑇 (0) = 0. 𝑇 (0) = 𝑇 (0 + 0) = 𝑇 (0) + 𝑇 (0). 在等式两侧同时加上 𝑇 (0) 的加法逆元，即可得出结论 𝑇 (0) = 0. 假设 𝑚, 𝑏 ∈ R.当且仅当 𝑏 = 0 时，由 𝑓 (𝑥) = 𝑚𝑥 + 𝑏 定义的函数 𝑓 : R → R 是线性映射(利用 3.10).由此可见，高中代数中的线性函数和线性代 数所考虑的线性映射是不一样的."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 is a linear map from 𝑉 to 𝑊. Then 𝑇(0) = 0.",
      "statement_zh": "假设 𝑇 是由 𝑉 到 𝑊 的线性映射.那么 𝑇 (0) = 0. 𝑇 (0) = 𝑇 (0 + 0) = 𝑇 (0) + 𝑇 (0). 在等式两侧同时加上 𝑇 (0) 的加法逆元，即可得出结论 𝑇 (0) = 0. 假设 𝑚, 𝑏 ∈ R.当且仅当 𝑏 = 0 时，由 𝑓 (𝑥) = 𝑚𝑥 + 𝑏 定义的函数 𝑓 : R → R 是线性映射(利用 3.10).由此可见，高中代数中的线性函数和线性代 数所考虑的线性映射是不一样的."
    },
    {
      "id": "3.11",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.11",
      "name_en": "null space, null 𝑇",
      "name_zh": "零空间(null space)、null 𝑇",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑇 ∈ L(𝑉, 𝑊), the null space of 𝑇, denoted by null 𝑇, is the subset of 𝑉 consisting of those vectors that 𝑇 maps to 0: null 𝑇 = {𝑣 ∈ 𝑉 ∶ 𝑇𝑣 = 0}.",
          "zh": "对于𝑇 ∈ L(𝑉,𝑊)，𝑇 的零空间记为 null 𝑇，是𝑉 的子集，其由被𝑇 映射到0的所有向量 构成: null 𝑇 = {𝑣 ∈ 𝑉 : 𝑇𝑣 = 0}."
        }
      ],
      "note": null,
      "statement_en": "For 𝑇 ∈ L(𝑉, 𝑊), the null space of 𝑇, denoted by null 𝑇, is the subset of 𝑉 consisting of those vectors that 𝑇 maps to 0: null 𝑇 = {𝑣 ∈ 𝑉 ∶ 𝑇𝑣 = 0}.",
      "statement_zh": "对于𝑇 ∈ L(𝑉,𝑊)，𝑇 的零空间记为 null 𝑇，是𝑉 的子集，其由被𝑇 映射到0的所有向量 构成: null 𝑇 = {𝑣 ∈ 𝑉 : 𝑇𝑣 = 0}."
    },
    {
      "id": "3.13",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.13",
      "name_en": "the null space is a subspace",
      "name_zh": "零空间是子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Then null 𝑇 is a subspace of 𝑉.",
          "zh": "假设𝑇 ∈ L(𝑉,𝑊).那么 null 𝑇 是𝑉 的子空间."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Then null 𝑇 is a subspace of 𝑉.",
      "statement_zh": "假设𝑇 ∈ L(𝑉,𝑊).那么 null 𝑇 是𝑉 的子空间."
    },
    {
      "id": "3.14",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.14",
      "name_en": "injective",
      "name_zh": "单射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A function 𝑇∶ 𝑉 → 𝑊 is called injective if 𝑇𝑢 = 𝑇𝑣 implies 𝑢 = 𝑣. We could rephrase the definition above to say that 𝑇 is injective if 𝑢 = ̸ 𝑣 implies that 𝑇𝑢 = ̸ 𝑇𝑣. Thus 𝑇 is injective if and only if it maps distinct inputs to distinct outputs.",
          "zh": "对于函数 𝑇 : 𝑉 → 𝑊，若 𝑇𝑢 = 𝑇𝑣 蕴涵 𝑢 = 𝑣，则称该函数是单射. 我们可以将上述定义重新表述为:如果 𝑢 = ̸ 𝑣 蕴涵 𝑇𝑢 = ̸ 𝑇𝑣，那么 𝑇 是单射.于是，当且 仅当 𝑇 将不同的输入映射到不同的输出时，它才是单射. 接下来的结果是说，我们可以通过检验 术语“一对一的”(one-to-one)和单射的意 0 是否为唯一被映射为 0 的向量，来检验一个 思一样. 线性映射是否为单射.在例 3.12 中，我们计算了一些线性映射的零空间，应用下面结论即可 看出，这些线性映射中仅有“与 𝑥<sub>2</sub> 相乘”映射是单射(在特殊情况 𝑉 = {0} 下，零映射也是单 射)."
        }
      ],
      "note": {
        "en": "The next result says that we can check whether a linear map is injective by checking whether 0 is the only vector that gets mapped to 0. As a simple application of this result, we see that of the linear maps whose null spaces we computed in 3.12, only multiplication by 𝑥<sub>2</sub> is injective (except that the zero map is injective in the special case 𝑉 = {0}). 3.15 injectivity ⟺ null space equals {0} Let 𝑇 ∈ L(𝑉, 𝑊). Then 𝑇 is injective if and only if null 𝑇 = {0}.",
        "zh": ""
      },
      "statement_en": "A function 𝑇∶ 𝑉 → 𝑊 is called injective if 𝑇𝑢 = 𝑇𝑣 implies 𝑢 = 𝑣. We could rephrase the definition above to say that 𝑇 is injective if 𝑢 = ̸ 𝑣 implies that 𝑇𝑢 = ̸ 𝑇𝑣. Thus 𝑇 is injective if and only if it maps distinct inputs to distinct outputs. The next result says that we can check whether a linear map is injective by checking whether 0 is the only vector that gets mapped to 0. As a simple application of this result, we see that of the linear maps whose null spaces we computed in 3.12, only multiplication by 𝑥2 is injective (except that the zero map is injective in the special case 𝑉 = {0}). 3.15 injectivity ⟺ null space equals {0} Let 𝑇 ∈ L(𝑉, 𝑊). Then 𝑇 is injective if and only if null 𝑇 = {0}.",
      "statement_zh": "对于函数 𝑇 : 𝑉 → 𝑊，若 𝑇𝑢 = 𝑇𝑣 蕴涵 𝑢 = 𝑣，则称该函数是单射. 我们可以将上述定义重新表述为:如果 𝑢 = ̸ 𝑣 蕴涵 𝑇𝑢 = ̸ 𝑇𝑣，那么 𝑇 是单射.于是，当且 仅当 𝑇 将不同的输入映射到不同的输出时，它才是单射. 接下来的结果是说，我们可以通过检验 术语“一对一的”(one-to-one)和单射的意 0 是否为唯一被映射为 0 的向量，来检验一个 思一样. 线性映射是否为单射.在例 3.12 中，我们计算了一些线性映射的零空间，应用下面结论即可 看出，这些线性映射中仅有“与 𝑥2 相乘”映射是单射(在特殊情况 𝑉 = {0} 下，零映射也是单 射)."
    },
    {
      "id": "3.15",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.15",
      "name_en": "is equivalent to the condition dim null",
      "name_zh": "单射性 ⇐⇒ 零空间等于 {0}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇 = 0), then the equation above implies that dim range 𝑇 = dim 𝑉 − dim null 𝑇 = dim 𝑉 = dim 𝑊, which implies that 𝑇 is surjective (by 2.39). Conversely, if 𝑇 is surjective, then",
          "zh": "令 𝑇 ∈ L(𝑉,𝑊).那么 𝑇 是单射当且仅当 null 𝑇 = {0}."
        }
      ],
      "note": null,
      "statement_en": "𝑇 = 0), then the equation above implies that dim range 𝑇 = dim 𝑉 − dim null 𝑇 = dim 𝑉 = dim 𝑊, which implies that 𝑇 is surjective (by 2.39). Conversely, if 𝑇 is surjective, then",
      "statement_zh": "令 𝑇 ∈ L(𝑉,𝑊).那么 𝑇 是单射当且仅当 null 𝑇 = {0}."
    },
    {
      "id": "3.16",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.16",
      "name_en": "range",
      "name_zh": "值域",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑇 ∈ L(𝑉, 𝑊), the range of 𝑇 is the subset of 𝑊 consisting of those vectors that are equal to 𝑇𝑣 for some 𝑣 ∈ 𝑉: range 𝑇 = {𝑇𝑣 ∶ 𝑣 ∈ 𝑉}.",
          "zh": "对于 𝑇 ∈ L(𝑉,𝑊)，𝑇 的值域是 𝑊 的子集，由所有等于 𝑇𝑣(其中 𝑣 ∈ 𝑉)的向量构成: range 𝑇 = {𝑇𝑣 : 𝑣 ∈ 𝑉}."
        }
      ],
      "note": null,
      "statement_en": "For 𝑇 ∈ L(𝑉, 𝑊), the range of 𝑇 is the subset of 𝑊 consisting of those vectors that are equal to 𝑇𝑣 for some 𝑣 ∈ 𝑉: range 𝑇 = {𝑇𝑣 ∶ 𝑣 ∈ 𝑉}.",
      "statement_zh": "对于 𝑇 ∈ L(𝑉,𝑊)，𝑇 的值域是 𝑊 的子集，由所有等于 𝑇𝑣(其中 𝑣 ∈ 𝑉)的向量构成: range 𝑇 = {𝑇𝑣 : 𝑣 ∈ 𝑉}."
    },
    {
      "id": "3.18",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.18",
      "name_en": "the range is a subspace",
      "name_zh": "值域是子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑇 ∈ L(𝑉, 𝑊), then range 𝑇 is a subspace of 𝑊.",
          "zh": "如果𝑇 ∈ L(𝑉,𝑊)，那么 range 𝑇 是𝑊 的子空间."
        }
      ],
      "note": null,
      "statement_en": "If 𝑇 ∈ L(𝑉, 𝑊), then range 𝑇 is a subspace of 𝑊.",
      "statement_zh": "如果𝑇 ∈ L(𝑉,𝑊)，那么 range 𝑇 是𝑊 的子空间."
    },
    {
      "id": "3.19",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.19",
      "name_en": "surjective",
      "name_zh": "满射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A function 𝑇 ∶ 𝑉 → 𝑊 is called surjective if its range equals 𝑊. To illustrate the definition above, note that of the ranges we computed in 3.17, only the differentiation map is surjective (except that the zero map is surjective in the special case 𝑊 = {0}). Whether a linear map is surjective de- pends on what we are thinking of as the vector space into which it maps. Some people use the term onto, which means the same as surjective.",
          "zh": "如果函数 𝑇 : 𝑉 → 𝑊 的值域等于 𝑊，则称该函数为满射. 我们举些实例来阐释上述定义:留意在 3.17 中计算过值域的那些映射，其中只有微分映 射是满射(对于特殊情况 𝑊 = {0}，零映射也是满射). 一个线性映射是否为满射，取决于我们 有些人使用术语“映成”(onto)，这和满射 认为它映射到哪个向量空间. 意思一样."
        }
      ],
      "note": null,
      "statement_en": "A function 𝑇 ∶ 𝑉 → 𝑊 is called surjective if its range equals 𝑊. To illustrate the definition above, note that of the ranges we computed in 3.17, only the differentiation map is surjective (except that the zero map is surjective in the special case 𝑊 = {0}). Whether a linear map is surjective de- pends on what we are thinking of as the vector space into which it maps. Some people use the term onto, which means the same as surjective.",
      "statement_zh": "如果函数 𝑇 : 𝑉 → 𝑊 的值域等于 𝑊，则称该函数为满射. 我们举些实例来阐释上述定义:留意在 3.17 中计算过值域的那些映射，其中只有微分映 射是满射(对于特殊情况 𝑊 = {0}，零映射也是满射). 一个线性映射是否为满射，取决于我们 有些人使用术语“映成”(onto)，这和满射 认为它映射到哪个向量空间. 意思一样."
    },
    {
      "id": "3.21",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.21",
      "name_en": "fundamental theorem of linear maps",
      "name_zh": "线性映射基本定理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then range 𝑇 is finite- dimensional and",
          "zh": "假设𝑉 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么 range 𝑇 是有限维的，且 dim 𝑉 = dim null 𝑇 + dim range 𝑇."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then range 𝑇 is finite- dimensional and",
      "statement_zh": "假设𝑉 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么 range 𝑇 是有限维的，且 dim 𝑉 = dim null 𝑇 + dim range 𝑇."
    },
    {
      "id": "3.22",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.22",
      "name_en": "linear map to a lower-dimensional space is not injective",
      "name_zh": "映到更低维空间上的线性映射不是单射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional vector spaces such that dim 𝑉 > dim 𝑊. Then no linear map from 𝑉 to 𝑊 is injective.",
          "zh": "假设 𝑉 和 𝑊 是有限维向量空间且满足 dim 𝑉 &gt; dim 𝑊.那么从 𝑉 到 𝑊 的线性映射一定 不是单射. dimnull 𝑇 = dim 𝑉 − dimrange 𝑇 ≥ dim 𝑉 − dim 𝑊 &gt; 0， 上述第一行来自线性映射基本定理(3.21)，第二行来自 2.37.上述不等式表明，dim null 𝑇 &gt; 0. 这就意味着 null 𝑇 包含除了 0 以外的其他向量.于是 𝑇 不是单射(由 3.15)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional vector spaces such that dim 𝑉 > dim 𝑊. Then no linear map from 𝑉 to 𝑊 is injective.",
      "statement_zh": "假设 𝑉 和 𝑊 是有限维向量空间且满足 dim 𝑉 &gt; dim 𝑊.那么从 𝑉 到 𝑊 的线性映射一定 不是单射. dimnull 𝑇 = dim 𝑉 − dimrange 𝑇 ≥ dim 𝑉 − dim 𝑊 &gt; 0， 上述第一行来自线性映射基本定理(3.21)，第二行来自 2.37.上述不等式表明，dim null 𝑇 &gt; 0. 这就意味着 null 𝑇 包含除了 0 以外的其他向量.于是 𝑇 不是单射(由 3.15)."
    },
    {
      "id": "3.24",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.24",
      "name_en": "linear map to a higher-dimensional space is not surjective",
      "name_zh": "映到更高维空间上的线性映射不是满射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional vector spaces such that dim 𝑉 < dim 𝑊. Then no linear map from 𝑉 to 𝑊 is surjective.",
          "zh": "假设 𝑉 和 𝑊 是有限维向量空间且满足 dim 𝑉 &lt; dim 𝑊.那么从 𝑉 到 𝑊 的线性映射一定 不是满射."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional vector spaces such that dim 𝑉 < dim 𝑊. Then no linear map from 𝑉 to 𝑊 is surjective.",
      "statement_zh": "假设 𝑉 和 𝑊 是有限维向量空间且满足 dim 𝑉 &lt; dim 𝑊.那么从 𝑉 到 𝑊 的线性映射一定 不是满射."
    },
    {
      "id": "3.26",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.26",
      "name_en": "homogeneous system of linear equations",
      "name_zh": "齐次线性方程组 未知数个数多于方程个数的齐次线性方程组具有非零解.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A homogeneous system of linear equations with more variables than equations has nonzero solutions.",
          "zh": "3B 零空间和值域 𝑘 = 1 方程𝑇(𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) = 0(此处的0是 F<sup>𝑚</sup> 中的加法恒等元，也就是长度为𝑚的全由0构成 的组)与上面的齐次线性方程组是一样的.于是我们就想知道 null 𝑇 是否严格大于 {0}，这也 就等价于 𝑇 不是单射(由 3.15).接下来的结果给出了保证 𝑇 不是单射的条件. 𝑘 = 1"
        }
      ],
      "note": null,
      "statement_en": "A homogeneous system of linear equations with more variables than equations has nonzero solutions.",
      "statement_zh": "3B 零空间和值域 𝑘 = 1 方程𝑇(𝑥1,…,𝑥𝑛) = 0(此处的0是 F𝑚 中的加法恒等元，也就是长度为𝑚的全由0构成 的组)与上面的齐次线性方程组是一样的.于是我们就想知道 null 𝑇 是否严格大于 {0}，这也 就等价于 𝑇 不是单射(由 3.15).接下来的结果给出了保证 𝑇 不是单射的条件. 𝑘 = 1"
    },
    {
      "id": "3.27",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.27",
      "name_en": "system of linear equations",
      "name_zh": "线性方程组",
      "include": true,
      "body": [
        {
          "t": "formula",
          "en": "∑<sub>k=1</sub><sup>n</sup> A<sub>1,k</sub> x<sub>k</sub> = c<sub>1</sub>,  … ,  ∑<sub>k=1</sub><sup>n</sup> A<sub>m,k</sub> x<sub>k</sub> = c<sub>m</sub>",
          "zh": "∑<sub>k=1</sub><sup>n</sup> A<sub>1,k</sub> x<sub>k</sub> = c<sub>1</sub>,  … ,  ∑<sub>k=1</sub><sup>n</sup> A<sub>m,k</sub> x<sub>k</sub> = c<sub>m</sub>"
        }
      ],
      "note": null,
      "statement_en": "∑k=1n A1,k xk = c1,  … ,  ∑k=1n Am,k xk = cm",
      "statement_zh": "∑k=1n A1,k xk = c1,  … ,  ∑k=1n Am,k xk = cm"
    },
    {
      "id": "3.28",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.28",
      "name_en": "system of linear equations with more equations than variables",
      "name_zh": "方程个数多于未知数个数的线性方程组 方程个数多于未知数个数的线性方程组当常数项取某些值时无解.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A system of linear equations with more equations than variables has no solution for some choice of the constant terms.",
          "zh": "方程个数多于未知数个数的线性方程组 方程个数多于未知数个数的线性方程组当常数项取某些值时无解."
        }
      ],
      "note": null,
      "statement_en": "A system of linear equations with more equations than variables has no solution for some choice of the constant terms.",
      "statement_zh": "方程个数多于未知数个数的线性方程组 方程个数多于未知数个数的线性方程组当常数项取某些值时无解."
    },
    {
      "id": "3.29",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.29",
      "name_en": "matrix, 𝐴𝑗,𝑘",
      "name_zh": "矩阵(matrix)、 𝐴 𝑗, 𝑘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 and 𝑛 are nonnegative integers. An 𝑚-by-𝑛 matrix 𝐴 is a rectangular array of elements of 𝐅 with 𝑚 rows and 𝑛 columns: ⎛⎜ 𝐴1,1 ⋯ 𝐴1,𝑛 ⎞⎟ 𝐴=⎜ ⋮ ⋮ ⎟. ⎝ 𝐴𝑚,1 ⋯ 𝐴𝑚,𝑛 ⎠ The notation 𝐴𝑗,𝑘 denotes the entry in row 𝑗, column 𝑘 of 𝐴.",
          "zh": "假设 𝑚 和 𝑛 是非负整数.𝑚 × 𝑛 矩阵 𝐴 是由 F 中元素构成的 𝑚 行 𝑛 列的矩形阵列: 记号𝐴𝑗,𝑘 表示𝐴的第𝑗行第𝑘列中的元素. ©𝐴1,1 ···𝐴1,𝑛 a 𝐴 = ­.. ®. ­® «𝐴𝑚,1 ···𝐴𝑚,𝑛¬"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 and 𝑛 are nonnegative integers. An 𝑚-by-𝑛 matrix 𝐴 is a rectangular array of elements of 𝐅 with 𝑚 rows and 𝑛 columns: ⎛⎜ 𝐴1,1 ⋯ 𝐴1,𝑛 ⎞⎟ 𝐴=⎜ ⋮ ⋮ ⎟. ⎝ 𝐴𝑚,1 ⋯ 𝐴𝑚,𝑛 ⎠ The notation 𝐴𝑗,𝑘 denotes the entry in row 𝑗, column 𝑘 of 𝐴.",
      "statement_zh": "假设 𝑚 和 𝑛 是非负整数.𝑚 × 𝑛 矩阵 𝐴 是由 F 中元素构成的 𝑚 行 𝑛 列的矩形阵列: 记号𝐴𝑗,𝑘 表示𝐴的第𝑗行第𝑘列中的元素. ©𝐴1,1 ···𝐴1,𝑛 a 𝐴 = ­.. ®. ­® «𝐴𝑚,1 ···𝐴𝑚,𝑛¬"
    },
    {
      "id": "3.31",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.31",
      "name_en": "matrix of a linear map, M(𝑇)",
      "name_zh": "线性映射的矩阵(matrix of a linear map)、M",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose T ∈ L(V, W) and v<sub>1</sub>, …, v<sub>n</sub> is a basis of V and w<sub>1</sub>, …, w<sub>m</sub> is a basis of W. The matrix of T with respect to these bases is the m-by-n matrix M(T) whose entries A<sub>j,k</sub> are defined by",
          "zh": "假设 T ∈ L(V, W)，v<sub>1</sub>, …, v<sub>n</sub> 是 V 的基，w<sub>1</sub>, …, w<sub>m</sub> 是 W 的基。T 关于这些基的矩阵是 m×n 矩阵 M(T)，其元素 A<sub>j,k</sub> 由下式定义"
        },
        {
          "t": "formula",
          "en": "T v<sub>k</sub> = A<sub>1,k</sub> w<sub>1</sub> + ⋯ + A<sub>m,k</sub> w<sub>m</sub>",
          "zh": "T v<sub>k</sub> = A<sub>1,k</sub> w<sub>1</sub> + ⋯ + A<sub>m,k</sub> w<sub>m</sub>"
        }
      ],
      "note": null,
      "statement_en": "Suppose T ∈ L(V, W) and v1, …, vn is a basis of V and w1, …, wm is a basis of W. The matrix of T with respect to these bases is the m-by-n matrix M(T) whose entries Aj,k are defined by T vk = A1,k w1 + ⋯ + Am,k wm",
      "statement_zh": "假设 T ∈ L(V, W)，v1, …, vn 是 V 的基，w1, …, wm 是 W 的基。T 关于这些基的矩阵是 m×n 矩阵 M(T)，其元素 Aj,k 由下式定义 T vk = A1,k w1 + ⋯ + Am,k wm"
    },
    {
      "id": "3.34",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.34",
      "name_en": "matrix addition",
      "name_zh": "matrix addition",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The sum of two matrices of the same size is the matrix obtained by adding corresponding entries in the matrices: ⎛⎜ 𝐴 1, 1 ⋯ 𝐴 1, 𝑛 ⎞⎟ ⎛⎜ 𝐶 1, 1 ⋯ 𝐶 1, 𝑛 ⎞⎟ ⎜ ⋮ ⋮ ⎟+⎜ ⋮ ⋮ ⎟ ⎝𝐴𝑚,1 ⋯ 𝐴𝑚,𝑛 ⎠ ⎝𝐶𝑚,1 ⋯ 𝐶𝑚,𝑛 ⎠ ⎛⎜ 𝐴 1, 1 + 𝐶 1, 1 ⋯ ⎝ 𝐴𝑚,1 +𝐶𝑚,1 ⋯ 𝐴𝑚,𝑛 +𝐶𝑚,𝑛 ⎠ = ⎜ ⋮ ⎞⎟ ⎟.",
          "zh": "matrix addition"
        }
      ],
      "note": null,
      "statement_en": "The sum of two matrices of the same size is the matrix obtained by adding corresponding entries in the matrices: ⎛⎜ 𝐴 1, 1 ⋯ 𝐴 1, 𝑛 ⎞⎟ ⎛⎜ 𝐶 1, 1 ⋯ 𝐶 1, 𝑛 ⎞⎟ ⎜ ⋮ ⋮ ⎟+⎜ ⋮ ⋮ ⎟ ⎝𝐴𝑚,1 ⋯ 𝐴𝑚,𝑛 ⎠ ⎝𝐶𝑚,1 ⋯ 𝐶𝑚,𝑛 ⎠ ⎛⎜ 𝐴 1, 1 + 𝐶 1, 1 ⋯ ⎝ 𝐴𝑚,1 +𝐶𝑚,1 ⋯ 𝐴𝑚,𝑛 +𝐶𝑚,𝑛 ⎠ = ⎜ ⋮ ⎞⎟ ⎟.",
      "statement_zh": "matrix addition"
    },
    {
      "id": "3.35",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.35",
      "name_en": "matrix of the sum of linear maps",
      "name_zh": "线性映射之和的矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑆, 𝑇 ∈ L(𝑉, 𝑊). Then M(𝑆 + 𝑇) = M(𝑆) + M(𝑇). The verification of the result above follows from the definitions and is left to the reader. Still assuming that we have some bases in mind, is the matrix of a scalar times a linear map equal to the scalar times the matrix of the linear map? Again, the question does not yet make sense because we have not defined scalar multiplication on matrices. Fortunately, the natural definition again has the right properties.",
          "zh": "假设𝑆,𝑇 ∈ L(𝑉,𝑊).那么 M(𝑆+𝑇) = M(𝑆)+M(𝑇). 由定义即可验证上面这条结论，验证过程留给读者完成. 仍然假设我们已选取了某些基.一标量与线性映射之积的矩阵，是否等于同一标量与该线 性映射的矩阵之积?同样，这个问题现在也没有意义，因为我们还没有定义矩阵的标量乘法. 幸运的是，再次按自然的方式作出定义，所得定义仍有我们期望的性质."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑆, 𝑇 ∈ L(𝑉, 𝑊). Then M(𝑆 + 𝑇) = M(𝑆) + M(𝑇). The verification of the result above follows from the definitions and is left to the reader. Still assuming that we have some bases in mind, is the matrix of a scalar times a linear map equal to the scalar times the matrix of the linear map? Again, the question does not yet make sense because we have not defined scalar multiplication on matrices. Fortunately, the natural definition again has the right properties.",
      "statement_zh": "假设𝑆,𝑇 ∈ L(𝑉,𝑊).那么 M(𝑆+𝑇) = M(𝑆)+M(𝑇). 由定义即可验证上面这条结论，验证过程留给读者完成. 仍然假设我们已选取了某些基.一标量与线性映射之积的矩阵，是否等于同一标量与该线 性映射的矩阵之积?同样，这个问题现在也没有意义，因为我们还没有定义矩阵的标量乘法. 幸运的是，再次按自然的方式作出定义，所得定义仍有我们期望的性质."
    },
    {
      "id": "3.36",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.36",
      "name_en": "scalar multiplication of a matrix",
      "name_zh": "矩阵的标量乘法",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The product of a scalar and a matrix is the matrix obtained by multiplying each entry in the matrix by the scalar: ⎛⎜ 𝐴1,1 ⋯ 𝐴1,𝑛 ⎞⎟ ⎛⎜ 𝜆𝐴1,1 ⋯ 𝜆𝐴1,𝑛 ⎞⎟ 𝜆⎜ ⋮ ⋮ ⎟ = ⎜ ⋮ ⋮ ⎟. ⎝𝐴𝑚,1 ⋯ 𝐴𝑚,𝑛 ⎠ ⎝𝜆𝐴𝑚,1 ⋯ 𝜆𝐴𝑚,𝑛 ⎠ 𝐴 1, 𝑛 + 𝐶 1, 𝑛 ⋮",
          "zh": "© 𝐴1,1 ··· 𝐴1,𝑛 a © 𝜆𝐴1,1 ··· 𝜆𝐴1,𝑛 a 𝜆 ­.. ® = ­.. ®. ­®­® « 𝐴𝑚,1 ··· 𝐴𝑚,𝑛 ¬ « 𝜆𝐴𝑚,1 ··· 𝜆𝐴𝑚,𝑛 ¬"
        }
      ],
      "note": null,
      "statement_en": "The product of a scalar and a matrix is the matrix obtained by multiplying each entry in the matrix by the scalar: ⎛⎜ 𝐴1,1 ⋯ 𝐴1,𝑛 ⎞⎟ ⎛⎜ 𝜆𝐴1,1 ⋯ 𝜆𝐴1,𝑛 ⎞⎟ 𝜆⎜ ⋮ ⋮ ⎟ = ⎜ ⋮ ⋮ ⎟. ⎝𝐴𝑚,1 ⋯ 𝐴𝑚,𝑛 ⎠ ⎝𝜆𝐴𝑚,1 ⋯ 𝜆𝐴𝑚,𝑛 ⎠ 𝐴 1, 𝑛 + 𝐶 1, 𝑛 ⋮",
      "statement_zh": "© 𝐴1,1 ··· 𝐴1,𝑛 a © 𝜆𝐴1,1 ··· 𝜆𝐴1,𝑛 a 𝜆 ­.. ® = ­.. ®. ­®­® « 𝐴𝑚,1 ··· 𝐴𝑚,𝑛 ¬ « 𝜆𝐴𝑚,1 ··· 𝜆𝐴𝑚,𝑛 ¬"
    },
    {
      "id": "3.38",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.38",
      "name_en": "the matrix of a scalar times a linear map",
      "name_zh": "标量与线性映射之积的矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝜆 ∈ 𝐅 and 𝑇 ∈ L(𝑉, 𝑊). Then M(𝜆𝑇) = 𝜆M(𝑇). The verification of the result above is also left to the reader. Because addition and scalar multiplication have now been defined for matrices, you should not be surprised that a vector space is about to appear. First we introduce a bit of notation so that this new vector space has a name, and then we find the dimension of this new vector space.",
          "zh": "假设𝜆 ∈ F 且𝑇 ∈ L(𝑉,𝑊).那么 M(𝜆𝑇) = 𝜆 M(𝑇). 上述结论的验证同样留给读者完成. 因为现已定义了矩阵的加法和标量乘法，由此产生一个向量空间也就不足为奇了.我们先 引入个记号，给这个新的向量空间取个名字，然后得出这个新的向量空间的维数. 3C 矩阵 61"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝜆 ∈ 𝐅 and 𝑇 ∈ L(𝑉, 𝑊). Then M(𝜆𝑇) = 𝜆M(𝑇). The verification of the result above is also left to the reader. Because addition and scalar multiplication have now been defined for matrices, you should not be surprised that a vector space is about to appear. First we introduce a bit of notation so that this new vector space has a name, and then we find the dimension of this new vector space.",
      "statement_zh": "假设𝜆 ∈ F 且𝑇 ∈ L(𝑉,𝑊).那么 M(𝜆𝑇) = 𝜆 M(𝑇). 上述结论的验证同样留给读者完成. 因为现已定义了矩阵的加法和标量乘法，由此产生一个向量空间也就不足为奇了.我们先 引入个记号，给这个新的向量空间取个名字，然后得出这个新的向量空间的维数. 3C 矩阵 61"
    },
    {
      "id": "3.39",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.39",
      "name_en": "𝐅<sup>𝑚,𝑛</sup>",
      "name_zh": "F<sup>𝑚</sup>,𝑛",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑚 and 𝑛 positive integers, the set of all 𝑚-by-𝑛 matrices with entries in 𝐅 is denoted by 𝐅<sup>𝑚,𝑛</sup>. 3.40 dim 𝐅<sup>𝑚,𝑛</sup> = 𝑚𝑛 Suppose 𝑚 and 𝑛 are positive integers. With addition and scalar multiplication defined as above, 𝐅<sup>𝑚,𝑛</sup> is a vector space of dimension 𝑚𝑛.",
          "zh": "对于正整数 𝑚 和 𝑛，各元素均属于 F 的所有 𝑚 × 𝑛 矩阵构成的集合记作 F<sup>𝑚</sup>,𝑛."
        }
      ],
      "note": null,
      "statement_en": "For 𝑚 and 𝑛 positive integers, the set of all 𝑚-by-𝑛 matrices with entries in 𝐅 is denoted by 𝐅𝑚,𝑛. 3.40 dim 𝐅𝑚,𝑛 = 𝑚𝑛 Suppose 𝑚 and 𝑛 are positive integers. With addition and scalar multiplication defined as above, 𝐅𝑚,𝑛 is a vector space of dimension 𝑚𝑛.",
      "statement_zh": "对于正整数 𝑚 和 𝑛，各元素均属于 F 的所有 𝑚 × 𝑛 矩阵构成的集合记作 F𝑚,𝑛."
    },
    {
      "id": "3.41",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.41",
      "name_en": "matrix multiplication",
      "name_zh": "矩阵乘法",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then 𝐴𝐵 is defined to be the 𝑚-by-𝑝 matrix whose entry in row 𝑗, column 𝑘, is given by the equation Thus the entry in row 𝑗, column 𝑘, of 𝐴𝐵 is computed by taking row 𝑗 of 𝐴 and column 𝑘 of 𝐵, multiplying together corresponding entries, and then summing. Note that we define the product of two matrices only when the number of columns of the first matrix equals the number of rows of the second matrix. You may have learned this definition of matrix multiplication in an earlier course, although you may not have seen this motivation for it. (𝐴𝐵)𝑗,𝑘 = ∑ 𝐴𝑗,𝑟𝐵𝑟,𝑘. 𝑟=1 𝑛",
          "zh": "假设 𝐴 是 𝑚 × 𝑛 矩阵且 𝐵 是 𝑛 × 𝑝 矩阵.那么 𝐴𝐵 定义为一个 𝑚 × 𝑝 矩阵，其中第 𝑗 行 第 𝑘 列的元素由下式给出: (𝐴𝐵)𝑗,𝑘 = 于是，取 𝐴 的第 𝑗 行和 𝐵 的第 𝑘 列，将它们对应位置上的元素分别相乘再相加，就得 到了 𝐴𝐵 第 𝑗 行第 𝑘 列的元素. ∑𝑛 𝑟 = 1 𝐴𝑗,𝑟𝐵𝑟,𝑘. 注意，只有当第一个矩阵的列数等于第 二个矩阵的行数时，我们才能定义这两个矩 阵的乘积. 你可能在之前的课程中已经学过矩阵乘法 的定义，尽管你可能并没看出这里所说的定 义它的动机."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then 𝐴𝐵 is defined to be the 𝑚-by-𝑝 matrix whose entry in row 𝑗, column 𝑘, is given by the equation Thus the entry in row 𝑗, column 𝑘, of 𝐴𝐵 is computed by taking row 𝑗 of 𝐴 and column 𝑘 of 𝐵, multiplying together corresponding entries, and then summing. Note that we define the product of two matrices only when the number of columns of the first matrix equals the number of rows of the second matrix. You may have learned this definition of matrix multiplication in an earlier course, although you may not have seen this motivation for it. (𝐴𝐵)𝑗,𝑘 = ∑ 𝐴𝑗,𝑟𝐵𝑟,𝑘. 𝑟=1 𝑛",
      "statement_zh": "假设 𝐴 是 𝑚 × 𝑛 矩阵且 𝐵 是 𝑛 × 𝑝 矩阵.那么 𝐴𝐵 定义为一个 𝑚 × 𝑝 矩阵，其中第 𝑗 行 第 𝑘 列的元素由下式给出: (𝐴𝐵)𝑗,𝑘 = 于是，取 𝐴 的第 𝑗 行和 𝐵 的第 𝑘 列，将它们对应位置上的元素分别相乘再相加，就得 到了 𝐴𝐵 第 𝑗 行第 𝑘 列的元素. ∑𝑛 𝑟 = 1 𝐴𝑗,𝑟𝐵𝑟,𝑘. 注意，只有当第一个矩阵的列数等于第 二个矩阵的行数时，我们才能定义这两个矩 阵的乘积. 你可能在之前的课程中已经学过矩阵乘法 的定义，尽管你可能并没看出这里所说的定 义它的动机."
    },
    {
      "id": "3.43",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.43",
      "name_en": "matrix of product of linear maps",
      "name_zh": "线性映射之积的矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑇 ∈ L(𝑈, 𝑉) and 𝑆 ∈ L(𝑉, 𝑊), then M(𝑆𝑇) = M(𝑆)M(𝑇). The",
          "zh": "如果 𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)，那么 M(𝑆𝑇) = M(𝑆)M(𝑇). 上述结果的证明，就是在定义矩阵乘法之前，我们说明其动机时所做的计算. 在下面的记号中，注意，如往常一样，第一个下标代表行，第二个下标代表列;垂直居中 的点“·”用于占位."
        }
      ],
      "note": null,
      "statement_en": "If 𝑇 ∈ L(𝑈, 𝑉) and 𝑆 ∈ L(𝑉, 𝑊), then M(𝑆𝑇) = M(𝑆)M(𝑇). The",
      "statement_zh": "如果 𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)，那么 M(𝑆𝑇) = M(𝑆)M(𝑇). 上述结果的证明，就是在定义矩阵乘法之前，我们说明其动机时所做的计算. 在下面的记号中，注意，如往常一样，第一个下标代表行，第二个下标代表列;垂直居中 的点“·”用于占位."
    },
    {
      "id": "3.44",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.44",
      "name_en": "𝐴𝑗,⋅, 𝐴⋅,𝑘",
      "name_zh": "𝐴𝑗,·、𝐴·,𝑘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 1 ≤ 𝑗 ≤ 𝑚, then 𝐴𝑗,⋅ denotes the 1-by-𝑛 matrix consisting of row 𝑗 of 𝐴. • If 1 ≤ 𝑘 ≤ 𝑛, then 𝐴⋅,𝑘 denotes the 𝑚-by-1 matrix consisting of column 𝑘 of 𝐴.",
          "zh": "假设 𝐴是𝑚×𝑛矩阵. 如果 1 ≤ 𝑗 ≤ 𝑚，那么 𝐴𝑗,· 表示由 𝐴 的第 𝑗 行构成的 1×𝑛 矩阵. 如果≤𝑘≤𝑛，那么𝐴·,𝑘 表示由𝐴的第𝑘列构成的𝑚×1矩阵."
        }
      ],
      "note": null,
      "statement_en": "If 1 ≤ 𝑗 ≤ 𝑚, then 𝐴𝑗,⋅ denotes the 1-by-𝑛 matrix consisting of row 𝑗 of 𝐴. • If 1 ≤ 𝑘 ≤ 𝑛, then 𝐴⋅,𝑘 denotes the 𝑚-by-1 matrix consisting of column 𝑘 of 𝐴.",
      "statement_zh": "假设 𝐴是𝑚×𝑛矩阵. 如果 1 ≤ 𝑗 ≤ 𝑚，那么 𝐴𝑗,· 表示由 𝐴 的第 𝑗 行构成的 1×𝑛 矩阵. 如果≤𝑘≤𝑛，那么𝐴·,𝑘 表示由𝐴的第𝑘列构成的𝑚×1矩阵."
    },
    {
      "id": "3.46",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.46",
      "name_en": "entry of matrix product equals row times column",
      "name_zh": "矩阵之积的元素等于行乘以列",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then (𝐴𝐵)𝑗,𝑘 = 𝐴𝑗,⋅ 𝐵⋅,𝑘 if 1 ≤ 𝑗 ≤ 𝑚 and 1 ≤ 𝑘 ≤ 𝑝. In other words, the entry in row 𝑗, column 𝑘, of 𝐴𝐵 equals (row 𝑗 of 𝐴) times (column 𝑘 of 𝐵).",
          "zh": "假设 𝐴 是 𝑚 × 𝑛 矩阵且 𝐵 是 𝑛 × 𝑝 矩阵.那么如果 1 ≤ 𝑗 ≤ 𝑚 且 1 ≤ 𝑘 ≤ 𝑝，则 (𝐴𝐵)𝑗,𝑘 = 𝐴𝑗,·𝐵·,𝑘. 换言之，𝐴𝐵 中第 𝑗 行第 𝑘 列的元素等于:(𝐴 的第 𝑗 行) 乘以 (𝐵 的第 𝑘 列)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then (𝐴𝐵)𝑗,𝑘 = 𝐴𝑗,⋅ 𝐵⋅,𝑘 if 1 ≤ 𝑗 ≤ 𝑚 and 1 ≤ 𝑘 ≤ 𝑝. In other words, the entry in row 𝑗, column 𝑘, of 𝐴𝐵 equals (row 𝑗 of 𝐴) times (column 𝑘 of 𝐵).",
      "statement_zh": "假设 𝐴 是 𝑚 × 𝑛 矩阵且 𝐵 是 𝑛 × 𝑝 矩阵.那么如果 1 ≤ 𝑗 ≤ 𝑚 且 1 ≤ 𝑘 ≤ 𝑝，则 (𝐴𝐵)𝑗,𝑘 = 𝐴𝑗,·𝐵·,𝑘. 换言之，𝐴𝐵 中第 𝑗 行第 𝑘 列的元素等于:(𝐴 的第 𝑗 行) 乘以 (𝐵 的第 𝑘 列)."
    },
    {
      "id": "3.47",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.47",
      "name_en": "and the entry in row",
      "name_zh": "and the entry in row",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑗 of 𝐴𝐵⋅,𝑘 is the right side of 3.47. Thus (𝐴𝐵)⋅,𝑘 = 𝐴𝐵⋅,𝑘. Our next result will give another way of thinking about the product of an 𝑚-by-𝑛 matrix and an 𝑛-by-1 matrix, motivated by",
          "zh": "and the entry in row"
        }
      ],
      "note": null,
      "statement_en": "𝑗 of 𝐴𝐵⋅,𝑘 is the right side of 3.47. Thus (𝐴𝐵)⋅,𝑘 = 𝐴𝐵⋅,𝑘. Our next result will give another way of thinking about the product of an 𝑚-by-𝑛 matrix and an 𝑛-by-1 matrix, motivated by",
      "statement_zh": "and the entry in row"
    },
    {
      "id": "3.48",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.48",
      "name_en": "column of matrix product equals matrix times column",
      "name_zh": "矩阵之积的列等于矩阵与列之积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then (𝐴𝐵)⋅,𝑘 = 𝐴𝐵⋅,𝑘 if 1 ≤ 𝑘 ≤ 𝑝. In other words, column 𝑘 of 𝐴𝐵 equals 𝐴 times column 𝑘 of 𝐵.",
          "zh": "假设 𝐴 是 𝑚 × 𝑛 矩阵且 𝐵 是 𝑛 × 𝑝 矩阵.那么如果 1 ≤ 𝑘 ≤ 𝑝，则 (𝐴𝐵)·,𝑘 = 𝐴𝐵·,𝑘. 换言之，𝐴𝐵 的第 𝑘 列等于 𝐴 乘以 𝐵 的第 𝑘 列."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then (𝐴𝐵)⋅,𝑘 = 𝐴𝐵⋅,𝑘 if 1 ≤ 𝑘 ≤ 𝑝. In other words, column 𝑘 of 𝐴𝐵 equals 𝐴 times column 𝑘 of 𝐵.",
      "statement_zh": "假设 𝐴 是 𝑚 × 𝑛 矩阵且 𝐵 是 𝑛 × 𝑝 矩阵.那么如果 1 ≤ 𝑘 ≤ 𝑝，则 (𝐴𝐵)·,𝑘 = 𝐴𝐵·,𝑘. 换言之，𝐴𝐵 的第 𝑘 列等于 𝐴 乘以 𝐵 的第 𝑘 列."
    },
    {
      "id": "3.50",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.50",
      "name_en": "linear combination of columns",
      "name_zh": "列的线性组合",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝑏 = ⎜ ⋮ ⎟ is an 𝑛-by-1 matrix. Then 𝐴𝑏 = 𝑏1𝐴⋅,1 +⋯+𝑏𝑛 𝐴⋅,𝑛. In other words, 𝐴𝑏 is a linear combination of the columns of 𝐴, with the scalars that multiply the columns coming from 𝑏.",
          "zh": "假设𝐴是𝑚×𝑛矩阵且𝑏 = ­. ®是𝑛×1矩阵.那么 ­® « 𝑏<sub>𝑛</sub> ¬ 𝐴𝑏 = 𝑏<sub>1</sub>𝐴·,1 +···+𝑏<sub>𝑛</sub>𝐴·,𝑛. 换言之，𝐴𝑏 是 𝐴 中各列的线性组合，而与这些列相乘的标量则来自 𝑏. © 𝑏<sub>1</sub> a"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝑏 = ⎜ ⋮ ⎟ is an 𝑛-by-1 matrix. Then 𝐴𝑏 = 𝑏1𝐴⋅,1 +⋯+𝑏𝑛 𝐴⋅,𝑛. In other words, 𝐴𝑏 is a linear combination of the columns of 𝐴, with the scalars that multiply the columns coming from 𝑏.",
      "statement_zh": "假设𝐴是𝑚×𝑛矩阵且𝑏 = ­. ®是𝑛×1矩阵.那么 ­® « 𝑏𝑛 ¬ 𝐴𝑏 = 𝑏1𝐴·,1 +···+𝑏𝑛𝐴·,𝑛. 换言之，𝐴𝑏 是 𝐴 中各列的线性组合，而与这些列相乘的标量则来自 𝑏. © 𝑏1 a"
    },
    {
      "id": "3.51",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.51",
      "name_en": "matrix multiplication as linear combinations of columns or rows Suppose",
      "name_zh": "将矩阵乘法视为列或行的线性组合",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) If 𝑘 ∈ {1, …, 𝑛}, then column 𝑘 of 𝐶𝑅 is a linear combination of the columns of 𝐶, with the coefficients of this linear combination coming from column 𝑘 of 𝑅.",
          "zh": "(a) 如果𝑘 ∈ {1,…,𝑛}，那么𝐶𝑅的第𝑘列是𝐶的各列的线性组合，其中各系数来自𝑅 的第 𝑘 列."
        },
        {
          "t": "bullet",
          "en": "(b) If 𝑗 ∈ {1,…,𝑚}, then row 𝑗 of 𝐶𝑅 is a linear combination of the rows of 𝑅, with the coefficients of this linear combination coming from row 𝑗 of 𝐶.",
          "zh": "(b) 如果 𝑗 ∈ {1, …, 𝑚}，那么 𝐶𝑅 的第 𝑗 行是 𝑅 的各行的线性组合，其中各系数来自 𝐶 的第 𝑗 行."
        }
      ],
      "note": null,
      "statement_en": "(a) If 𝑘 ∈ {1, …, 𝑛}, then column 𝑘 of 𝐶𝑅 is a linear combination of the columns of 𝐶, with the coefficients of this linear combination coming from column 𝑘 of 𝑅. (b) If 𝑗 ∈ {1,…,𝑚}, then row 𝑗 of 𝐶𝑅 is a linear combination of the rows of 𝑅, with the coefficients of this linear combination coming from row 𝑗 of 𝐶.",
      "statement_zh": "(a) 如果𝑘 ∈ {1,…,𝑛}，那么𝐶𝑅的第𝑘列是𝐶的各列的线性组合，其中各系数来自𝑅 的第 𝑘 列. (b) 如果 𝑗 ∈ {1, …, 𝑚}，那么 𝐶𝑅 的第 𝑗 行是 𝑅 的各行的线性组合，其中各系数来自 𝐶 的第 𝑗 行."
    },
    {
      "id": "3.52",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.52",
      "name_en": "column rank, row rank",
      "name_zh": "列秩(column rank)、行秩",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix with entries in 𝐅. • The column rank of 𝐴 is the dimension of the span of the columns of 𝐴 in 𝐅<sup>𝑚</sup>,1. • The row rank of 𝐴 is the dimension of the span of the rows of 𝐴 in 𝐅1,𝑛. If 𝐴 is an 𝑚-by-𝑛 matrix, then the column rank of 𝐴 is at most 𝑛 (because 𝐴 has 𝑛 columns) and the column rank of 𝐴 is also at most 𝑚 (because dim 𝐅<sup>𝑚</sup>,1 = 𝑚). Similarly, the row rank of 𝐴 is also at most min{𝑚, 𝑛}.",
          "zh": "𝐴 的列秩是 𝐴 的各列在 F<sup>𝑚</sup>,1 中的张成空间的维数. 𝐴 的行秩是 𝐴 的各行在 F<sup>1</sup>,𝑛 中的张成空间的维数. 吴俊达、何阳 [译] 3C 矩阵 65 如果 𝐴 是 𝑚 × 𝑛 矩阵，那么 𝐴 的列秩不超过 𝑛(因为 𝐴 有 𝑛 列)同时不超过 𝑚(因为 dim F<sup>𝑚</sup>,1 = 𝑚).类似地， 𝐴 的行秩也不超过 min{𝑚, 𝑛}."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix with entries in 𝐅. • The column rank of 𝐴 is the dimension of the span of the columns of 𝐴 in 𝐅𝑚,1. • The row rank of 𝐴 is the dimension of the span of the rows of 𝐴 in 𝐅1,𝑛. If 𝐴 is an 𝑚-by-𝑛 matrix, then the column rank of 𝐴 is at most 𝑛 (because 𝐴 has 𝑛 columns) and the column rank of 𝐴 is also at most 𝑚 (because dim 𝐅𝑚,1 = 𝑚). Similarly, the row rank of 𝐴 is also at most min{𝑚, 𝑛}.",
      "statement_zh": "𝐴 的列秩是 𝐴 的各列在 F𝑚,1 中的张成空间的维数. 𝐴 的行秩是 𝐴 的各行在 F1,𝑛 中的张成空间的维数. 吴俊达、何阳 [译] 3C 矩阵 65 如果 𝐴 是 𝑚 × 𝑛 矩阵，那么 𝐴 的列秩不超过 𝑛(因为 𝐴 有 𝑛 列)同时不超过 𝑚(因为 dim F𝑚,1 = 𝑚).类似地， 𝐴 的行秩也不超过 min{𝑚, 𝑛}."
    },
    {
      "id": "3.54",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.54",
      "name_en": "transpose, 𝐴 t",
      "name_zh": "转置(transpose)、 𝐴 t",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The transpose of a matrix 𝐴, denoted by 𝐴 t, is the matrix obtained from 𝐴 by interchanging rows and columns. Specifically, if 𝐴 is an 𝑚-by-𝑛 matrix, then 𝐴 t is the 𝑛-by-𝑚 matrix whose entries are given by the equation (𝐴 t)𝑘,𝑗 = 𝐴𝑗,𝑘.",
          "zh": "矩阵 𝐴 的转置记为 𝐴 t，是互换 𝐴 的行和列所得的矩阵.具体地说，如果 𝐴 是 𝑚 × 𝑛 矩 阵，那么 𝐴 t 是 𝑛 × 𝑚 矩阵，其中各元素由下面等式给出: (𝐴 t)𝑘,𝑗 = 𝐴𝑗,𝑘."
        }
      ],
      "note": null,
      "statement_en": "The transpose of a matrix 𝐴, denoted by 𝐴 t, is the matrix obtained from 𝐴 by interchanging rows and columns. Specifically, if 𝐴 is an 𝑚-by-𝑛 matrix, then 𝐴 t is the 𝑛-by-𝑚 matrix whose entries are given by the equation (𝐴 t)𝑘,𝑗 = 𝐴𝑗,𝑘.",
      "statement_zh": "矩阵 𝐴 的转置记为 𝐴 t，是互换 𝐴 的行和列所得的矩阵.具体地说，如果 𝐴 是 𝑚 × 𝑛 矩 阵，那么 𝐴 t 是 𝑛 × 𝑚 矩阵，其中各元素由下面等式给出: (𝐴 t)𝑘,𝑗 = 𝐴𝑗,𝑘."
    },
    {
      "id": "3.56",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.56",
      "name_en": "column-row factorization",
      "name_zh": "行列分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix with entries in 𝐅 and column rank 𝑐 ≥ 1. Then there exist an 𝑚-by-𝑐 matrix 𝐶 and a 𝑐-by-𝑛 matrix 𝑅, both with entries in 𝐅, such that 𝐴 = 𝐶𝑅.",
          "zh": "假设 𝐴 是 𝑚 × 𝑛 矩阵，其中各元素均在 F 中且列秩 𝑐 ≥ 1.那么存在各元素均属于 F 的 𝑚 × 𝑐 矩阵 𝐶 和 𝑐 × 𝑛 矩阵 𝑅，使得 𝐴 = 𝐶𝑅 成立."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix with entries in 𝐅 and column rank 𝑐 ≥ 1. Then there exist an 𝑚-by-𝑐 matrix 𝐶 and a 𝑐-by-𝑛 matrix 𝑅, both with entries in 𝐅, such that 𝐴 = 𝐶𝑅.",
      "statement_zh": "假设 𝐴 是 𝑚 × 𝑛 矩阵，其中各元素均在 F 中且列秩 𝑐 ≥ 1.那么存在各元素均属于 F 的 𝑚 × 𝑐 矩阵 𝐶 和 𝑐 × 𝑛 矩阵 𝑅，使得 𝐴 = 𝐶𝑅 成立."
    },
    {
      "id": "3.58",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.58",
      "name_en": "rank",
      "name_zh": "秩(rank) 矩阵𝐴 ∈ F<sup>𝑚</sup>,𝑛 的秩是𝐴的列秩.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The rank of a matrix 𝐴 ∈ 𝐅<sup>𝑚,𝑛</sup> is the column rank of 𝐴. See",
          "zh": "列秩等于行秩的其他证明见于"
        }
      ],
      "note": null,
      "statement_en": "The rank of a matrix 𝐴 ∈ 𝐅𝑚,𝑛 is the column rank of 𝐴. See",
      "statement_zh": "列秩等于行秩的其他证明见于"
    },
    {
      "id": "3.59",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.59",
      "name_en": "invertible, inverse",
      "name_zh": "可逆的(invertible)、逆",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear map 𝑇 ∈ L(𝑉, 𝑊) is called invertible if there exists a linear map 𝑆 ∈ L(𝑊, 𝑉) such that 𝑆𝑇 equals the identity operator on 𝑉 and 𝑇𝑆 equals the identity operator on 𝑊. • A linear map 𝑆 ∈ L(𝑊,𝑉) satisfying 𝑆𝑇 = 𝐼 and 𝑇𝑆 = 𝐼 is called an inverse of 𝑇 (note that the first 𝐼 is the identity operator on 𝑉 and the second 𝐼 is the identity operator on 𝑊). The definition above mentions “an inverse”. However,",
          "zh": "对于线性映射𝑇 ∈ L(𝑉,𝑊)，如果存在线性映射𝑆 ∈ L(𝑊,𝑉)，使得𝑆𝑇等于𝑉上的恒 等算子且 𝑇 𝑆 等于 𝑊 上的恒等算子，则称 𝑇 是可逆的. 一个满足 𝑆𝑇 = 𝐼 及𝑇𝑆 = 𝐼 的线性映射 𝑆 ∈ L(𝑊,𝑉) 被称为𝑇 的一个逆.(注意，第一 个 𝐼 是 𝑉 上的恒等算子，第二个 𝐼 是 𝑊 上的恒等算子) 上面的定义中用的说法是线性映射的“一个逆”.然而，接下来的结果表明，我们可以将 这个说法换成线性映射的“逆”.7"
        }
      ],
      "note": {
        "en": "the next result shows that we can change this terminology to “the inverse”.",
        "zh": ""
      },
      "statement_en": "A linear map 𝑇 ∈ L(𝑉, 𝑊) is called invertible if there exists a linear map 𝑆 ∈ L(𝑊, 𝑉) such that 𝑆𝑇 equals the identity operator on 𝑉 and 𝑇𝑆 equals the identity operator on 𝑊. • A linear map 𝑆 ∈ L(𝑊,𝑉) satisfying 𝑆𝑇 = 𝐼 and 𝑇𝑆 = 𝐼 is called an inverse of 𝑇 (note that the first 𝐼 is the identity operator on 𝑉 and the second 𝐼 is the identity operator on 𝑊). The definition above mentions “an inverse”. However, the next result shows that we can change this terminology to “the inverse”.",
      "statement_zh": "对于线性映射𝑇 ∈ L(𝑉,𝑊)，如果存在线性映射𝑆 ∈ L(𝑊,𝑉)，使得𝑆𝑇等于𝑉上的恒 等算子且 𝑇 𝑆 等于 𝑊 上的恒等算子，则称 𝑇 是可逆的. 一个满足 𝑆𝑇 = 𝐼 及𝑇𝑆 = 𝐼 的线性映射 𝑆 ∈ L(𝑊,𝑉) 被称为𝑇 的一个逆.(注意，第一 个 𝐼 是 𝑉 上的恒等算子，第二个 𝐼 是 𝑊 上的恒等算子) 上面的定义中用的说法是线性映射的“一个逆”.然而，接下来的结果表明，我们可以将 这个说法换成线性映射的“逆”.7"
    },
    {
      "id": "3.60",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.60",
      "name_en": "inverse is unique",
      "name_zh": "逆是唯一的 可逆的线性映射具有唯一的逆.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An invertible linear map has a unique inverse.",
          "zh": "逆是唯一的 可逆的线性映射具有唯一的逆."
        }
      ],
      "note": null,
      "statement_en": "An invertible linear map has a unique inverse.",
      "statement_zh": "逆是唯一的 可逆的线性映射具有唯一的逆."
    },
    {
      "id": "3.61",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.61",
      "name_en": "𝑇<sup>−1</sup>",
      "name_zh": "𝑇<sup>−1</sup>",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑇 is invertible, then its inverse is denoted by 𝑇<sup>−1</sup>. In other words, if 𝑇 ∈ L(𝑉, 𝑊) is invertible, then 𝑇<sup>−1</sup> is the unique element of L(𝑊, 𝑉) such that 𝑇−1𝑇 = 𝐼 and 𝑇𝑇<sup>−1</sup> = 𝐼.",
          "zh": "如果𝑇 是可逆的，那么它的逆记作𝑇<sup>−1</sup>.换言之，如果𝑇 ∈ L(𝑉,𝑊) 是可逆的，那么𝑇<sup>−1</sup> 是 L(𝑊,𝑉)中唯一使得𝑇−1𝑇 = 𝐼和𝑇𝑇<sup>−1</sup> = 𝐼成立的元素."
        }
      ],
      "note": null,
      "statement_en": "If 𝑇 is invertible, then its inverse is denoted by 𝑇−1. In other words, if 𝑇 ∈ L(𝑉, 𝑊) is invertible, then 𝑇−1 is the unique element of L(𝑊, 𝑉) such that 𝑇−1𝑇 = 𝐼 and 𝑇𝑇−1 = 𝐼.",
      "statement_zh": "如果𝑇 是可逆的，那么它的逆记作𝑇−1.换言之，如果𝑇 ∈ L(𝑉,𝑊) 是可逆的，那么𝑇−1 是 L(𝑊,𝑉)中唯一使得𝑇−1𝑇 = 𝐼和𝑇𝑇−1 = 𝐼成立的元素."
    },
    {
      "id": "3.63",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.63",
      "name_en": "invertibility ⟺ injectivity and surjectivity",
      "name_zh": "可逆性 ⇐⇒ 单射性和满射性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear map is invertible if and only if it is injective and surjective.",
          "zh": "一个线性映射是可逆的，当且仅当它既是单射又是满射."
        }
      ],
      "note": null,
      "statement_en": "A linear map is invertible if and only if it is injective and surjective.",
      "statement_zh": "一个线性映射是可逆的，当且仅当它既是单射又是满射."
    },
    {
      "id": "3.65",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.65",
      "name_en": "injectivity is equivalent to surjectivity",
      "name_zh": "若 dim 𝑉 = dim 𝑊 &lt; ∞，则单射性与满射性等价",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(if dim 𝑉 = dim 𝑊 &lt; ∞) Suppose that 𝑉 and 𝑊 are finite-dimensional vector spaces, dim 𝑉 = dim 𝑊, and 𝑇 ∈ L(𝑉, 𝑊). Then 𝑇 is invertible ⟺ 𝑇 is injective ⟺ 𝑇 is surjective.",
          "zh": "假设 𝑉 和 𝑊 都是有限维向量空间，dim 𝑉 = dim 𝑊，且 𝑇 ∈ L(𝑉,𝑊).那么 𝑇可逆 ⇐⇒ 𝑇是单射 ⇐⇒ 𝑇是满射. 3D 可逆性和同构 71"
        }
      ],
      "note": null,
      "statement_en": "(if dim 𝑉 = dim 𝑊 &lt; ∞) Suppose that 𝑉 and 𝑊 are finite-dimensional vector spaces, dim 𝑉 = dim 𝑊, and 𝑇 ∈ L(𝑉, 𝑊). Then 𝑇 is invertible ⟺ 𝑇 is injective ⟺ 𝑇 is surjective.",
      "statement_zh": "假设 𝑉 和 𝑊 都是有限维向量空间，dim 𝑉 = dim 𝑊，且 𝑇 ∈ L(𝑉,𝑊).那么 𝑇可逆 ⇐⇒ 𝑇是单射 ⇐⇒ 𝑇是满射. 3D 可逆性和同构 71"
    },
    {
      "id": "3.69",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.69",
      "name_en": "isomorphism, isomorphic",
      "name_zh": "同构(isomorphism)、同构的(isomorphic) 同构就是可逆线性映射.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An isomorphism is an invertible linear map. • Two vector spaces are called isomorphic if there is an isomorphism from one vector space onto the other one. Think of an isomorphism 𝑇 ∶ 𝑉 → 𝑊 as relabeling 𝑣 ∈ 𝑉 as 𝑇𝑣 ∈ 𝑊. This viewpoint explains why two isomorphic vector spaces have the same vector space properties. The terms “isomorphism” and “invertible linear map” mean the same thing. Use “isomorphism” when you want to emphasize that the two spaces are essentially the same. It can be difficult to determine whether two mathematical structures (such as groups or topological spaces) are essentially the same, differing only in the names of the elements of underlying sets. However,",
          "zh": "对于两个向量空间，若存在将其中一个向量空间映成另一个向量空间的同构，则称它 们是同构的 8. 可以将同构 𝑇 : 𝑉 → 𝑊 理解为把 𝑣 ∈ 𝑉 改写成 𝑇𝑣 ∈ 𝑊.这个观点能解释为何两个同构的 向量空间有相同的向量空间性质.“同构”和“可逆线性映射”这两个术语同义，当你想强调 两个空间本质上相同时，就用“同构”这个词. 对于两个数学结构(例如群或拓扑空间)，要判定它们(除了基础集合 9 中元素的名称不 同外)在本质上相同，可能很困难.然而，接下来的结论说明了，要判定两个向量空间是否同 构，我们只需要关注一个数——维数——即可."
        }
      ],
      "note": {
        "en": "the next result shows that we need to look at only a single number (the dimension) to determine whether two vector spaces are isomorphic.",
        "zh": ""
      },
      "statement_en": "An isomorphism is an invertible linear map. • Two vector spaces are called isomorphic if there is an isomorphism from one vector space onto the other one. Think of an isomorphism 𝑇 ∶ 𝑉 → 𝑊 as relabeling 𝑣 ∈ 𝑉 as 𝑇𝑣 ∈ 𝑊. This viewpoint explains why two isomorphic vector spaces have the same vector space properties. The terms “isomorphism” and “invertible linear map” mean the same thing. Use “isomorphism” when you want to emphasize that the two spaces are essentially the same. It can be difficult to determine whether two mathematical structures (such as groups or topological spaces) are essentially the same, differing only in the names of the elements of underlying sets. However, the next result shows that we need to look at only a single number (the dimension) to determine whether two vector spaces are isomorphic.",
      "statement_zh": "对于两个向量空间，若存在将其中一个向量空间映成另一个向量空间的同构，则称它 们是同构的 8. 可以将同构 𝑇 : 𝑉 → 𝑊 理解为把 𝑣 ∈ 𝑉 改写成 𝑇𝑣 ∈ 𝑊.这个观点能解释为何两个同构的 向量空间有相同的向量空间性质.“同构”和“可逆线性映射”这两个术语同义，当你想强调 两个空间本质上相同时，就用“同构”这个词. 对于两个数学结构(例如群或拓扑空间)，要判定它们(除了基础集合 9 中元素的名称不 同外)在本质上相同，可能很困难.然而，接下来的结论说明了，要判定两个向量空间是否同 构，我们只需要关注一个数——维数——即可."
    },
    {
      "id": "3.70",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.70",
      "name_en": "dimension shows whether vector spaces are isomorphic",
      "name_zh": "维数表明了向量空间是否同构",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Two finite-dimensional vector spaces over 𝐅 are isomorphic if and only if they have the same dimension.",
          "zh": "对于 F 上的两个有限维向量空间，当且仅当它们的维数相同时，它们才是同构的."
        }
      ],
      "note": null,
      "statement_en": "Two finite-dimensional vector spaces over 𝐅 are isomorphic if and only if they have the same dimension.",
      "statement_zh": "对于 F 上的两个有限维向量空间，当且仅当它们的维数相同时，它们才是同构的."
    },
    {
      "id": "3.71",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.71",
      "name_en": "L(𝑉, 𝑊) and 𝐅<sup>𝑚</sup>,𝑛 are isomorphic",
      "name_zh": "L(𝑉,𝑊)与 F<sup>𝑚</sup>,𝑛是同构的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> isabasisof𝑉and𝑤<sub>1</sub>,...,𝑤<sub>𝑚</sub> isabasisof𝑊.ThenMis an isomorphism between L(𝑉, 𝑊) and 𝐅<sup>𝑚</sup>,𝑛.",
          "zh": "设𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉的基且𝑤<sub>1</sub>,…,𝑤<sub>𝑚</sub> 是𝑊的基.那么 M 是 L(𝑉,𝑊)与 F<sup>𝑚</sup>,𝑛 间的同构."
        }
      ],
      "note": null,
      "statement_en": "Suppose𝑣1,...,𝑣𝑛 isabasisof𝑉and𝑤1,...,𝑤𝑚 isabasisof𝑊.ThenMis an isomorphism between L(𝑉, 𝑊) and 𝐅𝑚,𝑛.",
      "statement_zh": "设𝑣1,…,𝑣𝑛 是𝑉的基且𝑤1,…,𝑤𝑚 是𝑊的基.那么 M 是 L(𝑉,𝑊)与 F𝑚,𝑛 间的同构."
    },
    {
      "id": "3.72",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.72",
      "name_en": "we have as desired",
      "name_zh": "dimL(𝑉,𝑊) = (dim 𝑉)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": ". dim 𝑉′ = dim 𝑉. dim 𝑉′ = dimL(𝑉,𝐅) = (dim 𝑉)(dim 𝐅) = dim 𝑉, In the following definition, the linear map lemma (3.4) implies that each 𝜑𝑗 is well defined.",
          "zh": "假设 𝑉 和 𝑊 是有限维的.那么 L (𝑉, 𝑊) 是有限维的，且 既然每个有限维向量空间都与某个 F<sup>𝑛</sup> 同构， 那么为何不只研究 F<sup>𝑛</sup> ，而还要研究更一般的 向量空间呢?要回答这个问题，就要看到对 F<sup>𝑛</sup> 的研究势必引入其他向量空间.例如，我 们会碰上线性映射的零空间和值域.尽管这 些向量空间都分别和某个 F<sup>𝑚</sup> 同构，但这样 考虑问题往往更复杂且并不带来新的见解. dimL(𝑉,𝑊) = (dim 𝑉)(dim 𝑊)."
        }
      ],
      "note": null,
      "statement_en": ". dim 𝑉′ = dim 𝑉. dim 𝑉′ = dimL(𝑉,𝐅) = (dim 𝑉)(dim 𝐅) = dim 𝑉, In the following definition, the linear map lemma (3.4) implies that each 𝜑𝑗 is well defined.",
      "statement_zh": "假设 𝑉 和 𝑊 是有限维的.那么 L (𝑉, 𝑊) 是有限维的，且 既然每个有限维向量空间都与某个 F𝑛 同构， 那么为何不只研究 F𝑛 ，而还要研究更一般的 向量空间呢?要回答这个问题，就要看到对 F𝑛 的研究势必引入其他向量空间.例如，我 们会碰上线性映射的零空间和值域.尽管这 些向量空间都分别和某个 F𝑚 同构，但这样 考虑问题往往更复杂且并不带来新的见解. dimL(𝑉,𝑊) = (dim 𝑉)(dim 𝑊)."
    },
    {
      "id": "3.73",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.73",
      "name_en": "matrix of a vector, M(𝑣)",
      "name_zh": "向量的矩阵(matrix of a vector)、M",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣 ∈ 𝑉 and 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a basis of 𝑉. The matrix of 𝑣 with respect to this basis is the 𝑛-by-1 matrix M(𝑣)=⎜ ⋮ ⎟, where 𝑏1,..., 𝑏𝑛 are the scalars such that 𝑣 = 𝑏1𝑣<sub>1</sub> + ⋯ + 𝑏𝑛𝑣<sub>𝑛</sub>. The matrix M(𝑣) of a vector 𝑣 ∈ 𝑉 depends on the basis 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> of 𝑉, as well as on 𝑣. However, the basis should be clear from the context and thus it is not included in the notation.",
          "zh": "© 𝑏<sub>1</sub> a M(𝑣) = ­. ®， « 𝑏<sub>𝑛</sub> ¬ 其中 𝑏<sub>1</sub>, …, 𝑏<sub>𝑛</sub> 是使得下式成立的标量: ­® 𝑣 = 𝑏<sub>1</sub>𝑣<sub>1</sub> + ⋯ + 𝑏<sub>𝑛</sub>𝑣<sub>𝑛</sub>. 向量 𝑣 ∈ 𝑉 的矩阵 M(𝑣) 取决于 𝑉 的基 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub>，也取决于 𝑣.然而，由上下文应该可明 确基取什么，因此它没被包含在记号里."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣 ∈ 𝑉 and 𝑣1,...,𝑣𝑛 is a basis of 𝑉. The matrix of 𝑣 with respect to this basis is the 𝑛-by-1 matrix M(𝑣)=⎜ ⋮ ⎟, where 𝑏1,..., 𝑏𝑛 are the scalars such that 𝑣 = 𝑏1𝑣1 + ⋯ + 𝑏𝑛𝑣𝑛. The matrix M(𝑣) of a vector 𝑣 ∈ 𝑉 depends on the basis 𝑣1,...,𝑣𝑛 of 𝑉, as well as on 𝑣. However, the basis should be clear from the context and thus it is not included in the notation.",
      "statement_zh": "© 𝑏1 a M(𝑣) = ­. ®， « 𝑏𝑛 ¬ 其中 𝑏1, …, 𝑏𝑛 是使得下式成立的标量: ­® 𝑣 = 𝑏1𝑣1 + ⋯ + 𝑏𝑛𝑣𝑛. 向量 𝑣 ∈ 𝑉 的矩阵 M(𝑣) 取决于 𝑉 的基 𝑣1, …, 𝑣𝑛，也取决于 𝑣.然而，由上下文应该可明 确基取什么，因此它没被包含在记号里."
    },
    {
      "id": "3.76",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.76",
      "name_en": "linear maps act like matrix multiplication",
      "name_zh": "线性映射的作用就像矩阵乘法",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉,𝑊) and 𝑣 ∈ 𝑉. Suppose 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a basis of 𝑉 and 𝑤<sub>1</sub>,...,𝑤<sub>𝑚</sub> is a basis of 𝑊. Then M(𝑇𝑣) = M(𝑇)M(𝑣).",
          "zh": "假设𝑇 ∈ L(𝑉,𝑊)且𝑣 ∈ 𝑉.假设𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉的基且𝑤<sub>1</sub>,…,𝑤<sub>𝑚</sub> 是𝑊的基.那么 M(𝑇𝑣) = M(𝑇)M(𝑣)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉,𝑊) and 𝑣 ∈ 𝑉. Suppose 𝑣1,...,𝑣𝑛 is a basis of 𝑉 and 𝑤1,...,𝑤𝑚 is a basis of 𝑊. Then M(𝑇𝑣) = M(𝑇)M(𝑣).",
      "statement_zh": "假设𝑇 ∈ L(𝑉,𝑊)且𝑣 ∈ 𝑉.假设𝑣1,…,𝑣𝑛 是𝑉的基且𝑤1,…,𝑤𝑚 是𝑊的基.那么 M(𝑇𝑣) = M(𝑇)M(𝑣)."
    },
    {
      "id": "3.77",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.77",
      "name_en": "M(Tv) via matrix multiplication",
      "name_zh": "M(Tv) 与矩阵乘法",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose v = b<sub>1</sub>v<sub>1</sub> + ⋯ + b<sub>n</sub>v<sub>n</sub>, where b<sub>1</sub>, …, b<sub>n</sub> ∈ F. Then",
          "zh": "假设 v = b<sub>1</sub>v<sub>1</sub> + ⋯ + b<sub>n</sub>v<sub>n</sub>，其中 b<sub>1</sub>, …, b<sub>n</sub> ∈ F。那么"
        },
        {
          "t": "formula",
          "en": "M(Tv) = M(T) M(v)",
          "zh": "M(Tv) = M(T) M(v)"
        }
      ],
      "note": null,
      "statement_en": "Suppose v = b1v1 + ⋯ + bnvn, where b1, …, bn ∈ F. Then M(Tv) = M(T) M(v)",
      "statement_zh": "假设 v = b1v1 + ⋯ + bnvn，其中 b1, …, bn ∈ F。那么 M(Tv) = M(T) M(v)"
    },
    {
      "id": "3.78",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.78",
      "name_en": "dimension of range",
      "name_zh": "range 𝑇 的维数等于 M(𝑇) 的列秩",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇 equals column rank of M(𝑇) Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then dim range 𝑇 equals the column rank of M(𝑇).",
          "zh": "假设𝑉 和𝑊 是有限维的，𝑇 ∈ L(𝑉,𝑊).那么 dimrange 𝑇 等于 M(𝑇) 的列秩."
        }
      ],
      "note": null,
      "statement_en": "𝑇 equals column rank of M(𝑇) Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then dim range 𝑇 equals the column rank of M(𝑇).",
      "statement_zh": "假设𝑉 和𝑊 是有限维的，𝑇 ∈ L(𝑉,𝑊).那么 dimrange 𝑇 等于 M(𝑇) 的列秩."
    },
    {
      "id": "3.79",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.79",
      "name_en": "identity matrix, I",
      "name_zh": "恒等矩阵(identity matrix)、𝐼",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑛 is a positive integer. The 𝑛-by-𝑛 matrix ⎛⎜1 0⎞⎟ ⎜ ⋱ ⎟ ⎝0 1⎠ with 1’s on the diagonal (the entries where the row number equals the column number) and 0’s elsewhere is called the identity matrix and is denoted by 𝐼. In the definition above, the 0 in the lower left corner of the matrix indicates that all entries below the diagonal are 0, and the 0 in the upper right corner indicates that all entries above the diagonal are 0. With respect to each basis of 𝑉, the matrix of the identity operator 𝐼 ∈ L(𝑉) is the identity matrix 𝐼. Note that the symbol 𝐼 is used to denote both the identity operator and the identity matrix. The context indicates which meaning of 𝐼 is intended. For example, consider the equation M(𝐼) = 𝐼; on the left side 𝐼 denotes the identity operator, and on the right side 𝐼 denotes the identity matrix. If 𝐴 is a square matrix (meaning it has the same number of rows as columns) with the same size as 𝐼, then 𝐴𝐼 = 𝐼𝐴 = 𝐴,",
          "zh": "设 𝑛 为正整数.仅对角线上(即那些行号和列号相等的位置)的元素为 1 而其他各元素 均为 0 的 𝑛 × 𝑛 矩阵 ©1 0a ­ … ® ­® «0 1¬ 就称为恒等矩阵，记作 𝐼. 在上述定义中，矩阵左下角的 0 表示对角线下方的所有元素都是 0，右上角的 0 则表示对 角线上方的元素都是 0. 恒等算子 𝐼 ∈ L (𝑉) 关于 𝑉 的每个基的矩阵都是恒等矩阵 𝐼.注意，符号 𝐼 既被用于表示恒 等算子，又被用于表示恒等矩阵.根据上下文即可知 𝐼 指的是什么意思.例如，等式 M(𝐼) = 𝐼 中，左侧的 𝐼 表示恒等算子，右侧的 𝐼 则表示恒等矩阵. 如果 𝐴 是与 𝐼 大小相同的方阵(行数等于列数的矩阵)，那么 𝐴𝐼 = 𝐼𝐴 = 𝐴(你应自行验 证)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑛 is a positive integer. The 𝑛-by-𝑛 matrix ⎛⎜1 0⎞⎟ ⎜ ⋱ ⎟ ⎝0 1⎠ with 1’s on the diagonal (the entries where the row number equals the column number) and 0’s elsewhere is called the identity matrix and is denoted by 𝐼. In the definition above, the 0 in the lower left corner of the matrix indicates that all entries below the diagonal are 0, and the 0 in the upper right corner indicates that all entries above the diagonal are 0. With respect to each basis of 𝑉, the matrix of the identity operator 𝐼 ∈ L(𝑉) is the identity matrix 𝐼. Note that the symbol 𝐼 is used to denote both the identity operator and the identity matrix. The context indicates which meaning of 𝐼 is intended. For example, consider the equation M(𝐼) = 𝐼; on the left side 𝐼 denotes the identity operator, and on the right side 𝐼 denotes the identity matrix. If 𝐴 is a square matrix (meaning it has the same number of rows as columns) with the same size as 𝐼, then 𝐴𝐼 = 𝐼𝐴 = 𝐴,",
      "statement_zh": "设 𝑛 为正整数.仅对角线上(即那些行号和列号相等的位置)的元素为 1 而其他各元素 均为 0 的 𝑛 × 𝑛 矩阵 ©1 0a ­ … ® ­® «0 1¬ 就称为恒等矩阵，记作 𝐼. 在上述定义中，矩阵左下角的 0 表示对角线下方的所有元素都是 0，右上角的 0 则表示对 角线上方的元素都是 0. 恒等算子 𝐼 ∈ L (𝑉) 关于 𝑉 的每个基的矩阵都是恒等矩阵 𝐼.注意，符号 𝐼 既被用于表示恒 等算子，又被用于表示恒等矩阵.根据上下文即可知 𝐼 指的是什么意思.例如，等式 M(𝐼) = 𝐼 中，左侧的 𝐼 表示恒等算子，右侧的 𝐼 则表示恒等矩阵. 如果 𝐴 是与 𝐼 大小相同的方阵(行数等于列数的矩阵)，那么 𝐴𝐼 = 𝐼𝐴 = 𝐴(你应自行验 证)."
    },
    {
      "id": "3.80",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.80",
      "name_en": "invertible, inverse, 𝐴−1",
      "name_zh": "可逆的(invertible)，逆(inverse)、 𝐴 − 1",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A square matrix 𝐴 is called invertible if there is a square matrix 𝐵 of the same size such that 𝐴𝐵 = 𝐵𝐴 = 𝐼; we call 𝐵 the inverse of 𝐴 and denote it by 𝐴−1. The same",
          "zh": "称方阵 𝐴 是可逆的，如果存在与之大小相等的方阵 𝐵 使得 𝐴𝐵 = 𝐵𝐴 = 𝐼.我们称 𝐵 是 𝐴 的逆且将其记为 𝐴−1. 利用与"
        }
      ],
      "note": null,
      "statement_en": "A square matrix 𝐴 is called invertible if there is a square matrix 𝐵 of the same size such that 𝐴𝐵 = 𝐵𝐴 = 𝐼; we call 𝐵 the inverse of 𝐴 and denote it by 𝐴−1. The same",
      "statement_zh": "称方阵 𝐴 是可逆的，如果存在与之大小相等的方阵 𝐵 使得 𝐴𝐵 = 𝐵𝐴 = 𝐼.我们称 𝐵 是 𝐴 的逆且将其记为 𝐴−1. 利用与"
    },
    {
      "id": "3.81",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.81",
      "name_en": "matrix of product of linear maps",
      "name_zh": "线性映射之积的矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑈,𝑉) and 𝑆 ∈ L(𝑉,𝑊). If 𝑢<sub>1</sub>,...,𝑢<sub>𝑚</sub> is a basis of 𝑈, 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a basis of 𝑉, and 𝑤<sub>1</sub>,...,𝑤𝑝 is a basis of 𝑊, then M(𝑆𝑇,(𝑢<sub>1</sub>,...,𝑢<sub>𝑚</sub>),(𝑤<sub>1</sub>,...,𝑤𝑝)) = M(𝑆, (𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>), (𝑤<sub>1</sub>,..., 𝑤𝑝))M(𝑇, (𝑢<sub>1</sub>,..., 𝑢<sub>𝑚</sub>), (𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>)).",
          "zh": "设 𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊).如果 𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub> 是 𝑈 的基，𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是 𝑉 的基且 𝑤<sub>1</sub>,…,𝑤𝑝 是𝑊的基，那么 M\u0000𝑆𝑇, (𝑢<sub>1</sub>, …, 𝑢<sub>𝑚</sub>), (𝑤<sub>1</sub>, …, 𝑤𝑝)\u0001 = M\u0000𝑆,(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>),(𝑤<sub>1</sub>,…,𝑤𝑝)\u0001M\u0000𝑇,(𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub>),(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001. 接下来的结论讨论的是恒等算子 𝐼 关于两个不同的基的矩阵.注意到 M \u0000𝐼, (𝑢<sub>1</sub>, …, 𝑢<sub>𝑛</sub>), (𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub>)\u0001 的第 𝑘 列是由将 𝑢<sub>𝑘</sub> 写成基 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 的线性组合所需的标量构成的. 下面结论的表述中，𝐼 表示由 𝑉 到 𝑉 的恒等算子.在证明中，𝐼 也表示 𝑛 × 𝑛 恒等矩阵."
        }
      ],
      "note": {
        "en": "The next result deals with the matrix of the identity operator 𝐼 with respect to two different bases. Note that the 𝑘th column of M(𝐼, (𝑢<sub>1</sub>,..., 𝑢<sub>𝑛</sub>), (𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>)) consists of the scalars needed to write 𝑢<sub>𝑘</sub> as a linear combination of the basis 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub>. In the statement of the next result, 𝐼 denotes the identity operator from 𝑉 to 𝑉. In the",
        "zh": ""
      },
      "statement_en": "Suppose 𝑇 ∈ L(𝑈,𝑉) and 𝑆 ∈ L(𝑉,𝑊). If 𝑢1,...,𝑢𝑚 is a basis of 𝑈, 𝑣1,...,𝑣𝑛 is a basis of 𝑉, and 𝑤1,...,𝑤𝑝 is a basis of 𝑊, then M(𝑆𝑇,(𝑢1,...,𝑢𝑚),(𝑤1,...,𝑤𝑝)) = M(𝑆, (𝑣1,..., 𝑣𝑛), (𝑤1,..., 𝑤𝑝))M(𝑇, (𝑢1,..., 𝑢𝑚), (𝑣1,..., 𝑣𝑛)). The next result deals with the matrix of the identity operator 𝐼 with respect to two different bases. Note that the 𝑘th column of M(𝐼, (𝑢1,..., 𝑢𝑛), (𝑣1,..., 𝑣𝑛)) consists of the scalars needed to write 𝑢𝑘 as a linear combination of the basis 𝑣1,...,𝑣𝑛. In the statement of the next result, 𝐼 denotes the identity operator from 𝑉 to 𝑉. In the",
      "statement_zh": "设 𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊).如果 𝑢1,…,𝑢𝑚 是 𝑈 的基，𝑣1,…,𝑣𝑛 是 𝑉 的基且 𝑤1,…,𝑤𝑝 是𝑊的基，那么 M\u0000𝑆𝑇, (𝑢1, …, 𝑢𝑚), (𝑤1, …, 𝑤𝑝)\u0001 = M\u0000𝑆,(𝑣1,…,𝑣𝑛),(𝑤1,…,𝑤𝑝)\u0001M\u0000𝑇,(𝑢1,…,𝑢𝑚),(𝑣1,…,𝑣𝑛)\u0001. 接下来的结论讨论的是恒等算子 𝐼 关于两个不同的基的矩阵.注意到 M \u0000𝐼, (𝑢1, …, 𝑢𝑛), (𝑣1, …, 𝑣𝑛)\u0001 的第 𝑘 列是由将 𝑢𝑘 写成基 𝑣1, …, 𝑣𝑛 的线性组合所需的标量构成的. 下面结论的表述中，𝐼 表示由 𝑉 到 𝑉 的恒等算子.在证明中，𝐼 也表示 𝑛 × 𝑛 恒等矩阵."
    },
    {
      "id": "3.82",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.82",
      "name_en": "matrix of identity operator with respect to two bases",
      "name_zh": "恒等算子关于两个基的矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑢<sub>1</sub>,..., 𝑢<sub>𝑛</sub> and 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> are bases of 𝑉. Then the matrices M(𝐼,(𝑢<sub>1</sub>,...,𝑢<sub>𝑛</sub>),(𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub>)) and M(𝐼,(𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub>),(𝑢<sub>1</sub>,...,𝑢<sub>𝑛</sub>)) are invertible, and each is the inverse of the other.",
          "zh": "假设𝑢<sub>1</sub>,…,𝑢<sub>𝑛</sub> 和𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉 的两个基.那么矩阵 M\u0000𝐼,(𝑢<sub>1</sub>,…,𝑢<sub>𝑛</sub>),(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001 和 M\u0000𝐼,(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>),(𝑢<sub>1</sub>,…,𝑢<sub>𝑛</sub>)\u0001 都是可逆的，且互为对方的逆."
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑢1,..., 𝑢𝑛 and 𝑣1,..., 𝑣𝑛 are bases of 𝑉. Then the matrices M(𝐼,(𝑢1,...,𝑢𝑛),(𝑣1,...,𝑣𝑛)) and M(𝐼,(𝑣1,...,𝑣𝑛),(𝑢1,...,𝑢𝑛)) are invertible, and each is the inverse of the other.",
      "statement_zh": "假设𝑢1,…,𝑢𝑛 和𝑣1,…,𝑣𝑛 是𝑉 的两个基.那么矩阵 M\u0000𝐼,(𝑢1,…,𝑢𝑛),(𝑣1,…,𝑣𝑛)\u0001 和 M\u0000𝐼,(𝑣1,…,𝑣𝑛),(𝑢1,…,𝑢𝑛)\u0001 都是可逆的，且互为对方的逆."
    },
    {
      "id": "3.84",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.84",
      "name_en": "change-of-basis formula",
      "name_zh": "换基公式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). Suppose 𝑢<sub>1</sub>,...,𝑢<sub>𝑛</sub> and 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> are bases of 𝑉. Let 𝐴 = M(𝑇,(𝑢<sub>1</sub>,...,𝑢<sub>𝑛</sub>)) and 𝐵 = M(𝑇,(𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub>)) and 𝐶 = M(𝐼,(𝑢<sub>1</sub>,...,𝑢<sub>𝑛</sub>),(𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub>)). Then 𝐴 = 𝐶−1𝐵𝐶.",
          "zh": "设 𝑇 ∈ L(𝑉).假设 𝑢<sub>1</sub>, …, 𝑢<sub>𝑛</sub> 和 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 都是 𝑉 的基.令 𝐴 = M\u0000𝑇,(𝑢<sub>1</sub>,…,𝑢<sub>𝑛</sub>)\u0001 且 𝐵 = M\u0000𝑇,(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001 且𝐶 = M\u0000𝐼,(𝑢<sub>1</sub>,…,𝑢<sub>𝑛</sub>),(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001.那么 𝐴 = 𝐶−1𝐵𝐶."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). Suppose 𝑢1,...,𝑢𝑛 and 𝑣1,...,𝑣𝑛 are bases of 𝑉. Let 𝐴 = M(𝑇,(𝑢1,...,𝑢𝑛)) and 𝐵 = M(𝑇,(𝑣1,...,𝑣𝑛)) and 𝐶 = M(𝐼,(𝑢1,...,𝑢𝑛),(𝑣1,...,𝑣𝑛)). Then 𝐴 = 𝐶−1𝐵𝐶.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).假设 𝑢1, …, 𝑢𝑛 和 𝑣1, …, 𝑣𝑛 都是 𝑉 的基.令 𝐴 = M\u0000𝑇,(𝑢1,…,𝑢𝑛)\u0001 且 𝐵 = M\u0000𝑇,(𝑣1,…,𝑣𝑛)\u0001 且𝐶 = M\u0000𝐼,(𝑢1,…,𝑢𝑛),(𝑣1,…,𝑣𝑛)\u0001.那么 𝐴 = 𝐶−1𝐵𝐶."
    },
    {
      "id": "3.85",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.85",
      "name_en": "gives the equation",
      "name_zh": "gives the equation",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐴 = 𝐶−1𝐵𝐶. The",
          "zh": "gives the equation"
        }
      ],
      "note": null,
      "statement_en": "𝐴 = 𝐶−1𝐵𝐶. The",
      "statement_zh": "gives the equation"
    },
    {
      "id": "3.86",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.86",
      "name_en": "matrix of inverse equals inverse of matrix",
      "name_zh": "逆的矩阵等于矩阵的逆",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> is a basis of 𝑉 and 𝑇 ∈ L(𝑉) is invertible. Then M(𝑇−1) = (M(𝑇))−1, where both matrices are with respect to the basis 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub>.",
          "zh": "设 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 是 𝑉 的基且 𝑇 ∈ L(𝑉) 是可逆的.那么 M(𝑇<sup>−1</sup>) = \u0000M(𝑇)\u0001−1，式中两个矩阵 均是关于基𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 的."
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑣1,..., 𝑣𝑛 is a basis of 𝑉 and 𝑇 ∈ L(𝑉) is invertible. Then M(𝑇−1) = (M(𝑇))−1, where both matrices are with respect to the basis 𝑣1,...,𝑣𝑛.",
      "statement_zh": "设 𝑣1, …, 𝑣𝑛 是 𝑉 的基且 𝑇 ∈ L(𝑉) 是可逆的.那么 M(𝑇−1) = \u0000M(𝑇)\u0001−1，式中两个矩阵 均是关于基𝑣1,…,𝑣𝑛 的."
    },
    {
      "id": "3.87",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.87",
      "name_en": "product of vector spaces",
      "name_zh": "向量空间的积(product of vector spaces) 设𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub> 都是 F 上的向量空间.",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "𝑉<sub>1</sub> ×⋯×𝑉<sub>𝑚</sub> = {(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>) ∶𝑣<sub>1</sub> ∈ 𝑉<sub>1</sub>,…,𝑣<sub>𝑚</sub> ∈ 𝑉<sub>𝑚</sub>}.",
          "zh": "乘积𝑉<sub>1</sub> ×···×𝑉<sub>𝑚</sub> 定义为 𝑉<sub>1</sub> ×···×𝑉<sub>𝑚</sub> = {(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>):𝑣<sub>1</sub> ∈ 𝑉<sub>1</sub>,…,𝑣<sub>𝑚</sub> ∈ 𝑉<sub>𝑚</sub>}. 𝑉<sub>1</sub> ×···×𝑉<sub>𝑚</sub> 上的加法定义为 (𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub>)+(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>) = (𝑢<sub>1</sub> +𝑣<sub>1</sub>,…,𝑢<sub>𝑚</sub> +𝑣<sub>𝑚</sub>). 𝑉<sub>1</sub> ×···×𝑉<sub>𝑚</sub> 上的标量乘法定义为 𝜆(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>) = (𝜆𝑣<sub>1</sub>,…,𝜆𝑣<sub>𝑚</sub>). 3.88 为 例:向量空间 P5 (R) 和 R<sup>3</sup> 的乘积 P5 (R) × R<sup>3</sup> 的元素是长度为 2 的组，组中第一项是 P5 (R) 的元素，第二项是 R<sup>3</sup> 的元素. 例如，\u00005−6𝑥+4𝑥<sub>2</sub>,(3,8,7)\u0001 和 \u0000𝑥+9𝑥<sub>5</sub>,(2,2,2)\u0001 都是 P5(R)×R<sup>3</sup> 的元素.它们的和定义 \u00005 − 6𝑥 + 4𝑥<sub>2</sub>, (3, 8, 7)\u0001 + \u0000𝑥 + 9𝑥<sub>5</sub>, (2, 2, 2)\u0001 = \u00005−5𝑥+4𝑥<sub>2</sub> +9𝑥<sub>5</sub>,(5,10,9)\u0001. 此外，2\u00005−6𝑥+4𝑥<sub>2</sub>,(3,8,7)\u0001 = \u000010−12𝑥+8𝑥<sub>2</sub>,(6,16,14)\u0001. 下面结论应解释成:在按 3.87 定义的加法和标量乘法运算下，向量空间的积是向量空间."
        },
        {
          "t": "bullet",
          "en": "Additionon 𝑉<sub>1</sub> ×⋯×𝑉<sub>𝑚</sub> isdefined by (𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub>)+(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>) = (𝑢<sub>1</sub> +𝑣<sub>1</sub>,…,𝑢<sub>𝑚</sub> +𝑣<sub>𝑚</sub>).",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "Scalar multiplication on 𝑉<sub>1</sub> × ⋯ × 𝑉<sub>𝑚</sub> is defined by 𝜆(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>) = (𝜆𝑣<sub>1</sub>,…, 𝜆𝑣<sub>𝑚</sub>).",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "𝑉1 ×⋯×𝑉𝑚 = {(𝑣1,…,𝑣𝑚) ∶𝑣1 ∈ 𝑉1,…,𝑣𝑚 ∈ 𝑉𝑚}. Additionon 𝑉1 ×⋯×𝑉𝑚 isdefined by (𝑢1,…,𝑢𝑚)+(𝑣1,…,𝑣𝑚) = (𝑢1 +𝑣1,…,𝑢𝑚 +𝑣𝑚). Scalar multiplication on 𝑉1 × ⋯ × 𝑉𝑚 is defined by 𝜆(𝑣1,…,𝑣𝑚) = (𝜆𝑣1,…, 𝜆𝑣𝑚).",
      "statement_zh": "乘积𝑉1 ×···×𝑉𝑚 定义为 𝑉1 ×···×𝑉𝑚 = {(𝑣1,…,𝑣𝑚):𝑣1 ∈ 𝑉1,…,𝑣𝑚 ∈ 𝑉𝑚}. 𝑉1 ×···×𝑉𝑚 上的加法定义为 (𝑢1,…,𝑢𝑚)+(𝑣1,…,𝑣𝑚) = (𝑢1 +𝑣1,…,𝑢𝑚 +𝑣𝑚). 𝑉1 ×···×𝑉𝑚 上的标量乘法定义为 𝜆(𝑣1,…,𝑣𝑚) = (𝜆𝑣1,…,𝜆𝑣𝑚). 3.88 为 例:向量空间 P5 (R) 和 R3 的乘积 P5 (R) × R3 的元素是长度为 2 的组，组中第一项是 P5 (R) 的元素，第二项是 R3 的元素. 例如，\u00005−6𝑥+4𝑥2,(3,8,7)\u0001 和 \u0000𝑥+9𝑥5,(2,2,2)\u0001 都是 P5(R)×R3 的元素.它们的和定义 \u00005 − 6𝑥 + 4𝑥2, (3, 8, 7)\u0001 + \u0000𝑥 + 9𝑥5, (2, 2, 2)\u0001 = \u00005−5𝑥+4𝑥2 +9𝑥5,(5,10,9)\u0001. 此外，2\u00005−6𝑥+4𝑥2,(3,8,7)\u0001 = \u000010−12𝑥+8𝑥2,(6,16,14)\u0001. 下面结论应解释成:在按 3.87 定义的加法和标量乘法运算下，向量空间的积是向量空间.  "
    },
    {
      "id": "3.89",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.89",
      "name_en": "product of vector spaces is a vector space",
      "name_zh": "向量空间的积是向量空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉<sub>1</sub>,..., 𝑉<sub>𝑚</sub> are vector spaces over 𝐅. Then 𝑉<sub>1</sub> × ⋯ × 𝑉<sub>𝑚</sub> is a vector space over 𝐅. The",
          "zh": "设𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub> 都是 F 上的向量空间.那么𝑉<sub>1</sub> ×···×𝑉<sub>𝑚</sub> 是 F 上的向量空间. 上述结论的证明留给读者完成.注意，𝑉<sub>1</sub> × ⋯ × 𝑉<sub>𝑚</sub> 的加法恒等元是 (0, …, 0)，其中第 𝑘 个坐标中的0是𝑉<sub>𝑘</sub> 的加法恒等元.(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>) ∈ 𝑉<sub>1</sub>×···×𝑉<sub>𝑚</sub> 的加法逆元是(−𝑣<sub>1</sub>,…,−𝑣<sub>𝑚</sub>)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉1,..., 𝑉𝑚 are vector spaces over 𝐅. Then 𝑉1 × ⋯ × 𝑉𝑚 is a vector space over 𝐅. The",
      "statement_zh": "设𝑉1,…,𝑉𝑚 都是 F 上的向量空间.那么𝑉1 ×···×𝑉𝑚 是 F 上的向量空间. 上述结论的证明留给读者完成.注意，𝑉1 × ⋯ × 𝑉𝑚 的加法恒等元是 (0, …, 0)，其中第 𝑘 个坐标中的0是𝑉𝑘 的加法恒等元.(𝑣1,…,𝑣𝑚) ∈ 𝑉1×···×𝑉𝑚 的加法逆元是(−𝑣1,…,−𝑣𝑚)."
    },
    {
      "id": "3.92",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.92",
      "name_en": "dimension of a product is the sum of dimensions",
      "name_zh": "的证明中使用的思想.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉<sub>1</sub>,..., 𝑉<sub>𝑚</sub> are finite-dimensional vector spaces. Then 𝑉<sub>1</sub> × ⋯ × 𝑉<sub>𝑚</sub> is finite-dimensional and dim(𝑉<sub>1</sub> ×⋯×𝑉<sub>𝑚</sub>)=dim𝑉<sub>1</sub> +⋯+dim𝑉<sub>𝑚</sub>.",
          "zh": "的证明中使用的思想."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉1,..., 𝑉𝑚 are finite-dimensional vector spaces. Then 𝑉1 × ⋯ × 𝑉𝑚 is finite-dimensional and dim(𝑉1 ×⋯×𝑉𝑚)=dim𝑉1 +⋯+dim𝑉𝑚.",
      "statement_zh": "的证明中使用的思想."
    },
    {
      "id": "3.93",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.93",
      "name_en": "products and direct sums",
      "name_zh": "积与直和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that V<sub>1</sub>, …, V<sub>m</sub> are subspaces of V. Define a linear map Γ : V<sub>1</sub> × ⋯ × V<sub>m</sub> → V<sub>1</sub> + ⋯ + V<sub>m</sub> by",
          "zh": "假设 V<sub>1</sub>, …, V<sub>m</sub> 是 V 的子空间。定义线性映射 Γ : V<sub>1</sub> × ⋯ × V<sub>m</sub> → V<sub>1</sub> + ⋯ + V<sub>m</sub> 为"
        },
        {
          "t": "formula",
          "en": "Γ(v<sub>1</sub>, …, v<sub>m</sub>) = v<sub>1</sub> + ⋯ + v<sub>m</sub>",
          "zh": "Γ(v<sub>1</sub>, …, v<sub>m</sub>) = v<sub>1</sub> + ⋯ + v<sub>m</sub>"
        },
        {
          "t": "p",
          "en": "Then V<sub>1</sub> + ⋯ + V<sub>m</sub> is a direct sum if and only if Γ is injective.",
          "zh": "那么 V<sub>1</sub> + ⋯ + V<sub>m</sub> 是直和，当且仅当 Γ 是单射。"
        }
      ],
      "note": null,
      "statement_en": "Suppose that V1, …, Vm are subspaces of V. Define a linear map Γ : V1 × ⋯ × Vm → V1 + ⋯ + Vm by Γ(v1, …, vm) = v1 + ⋯ + vm Then V1 + ⋯ + Vm is a direct sum if and only if Γ is injective.",
      "statement_zh": "假设 V1, …, Vm 是 V 的子空间。定义线性映射 Γ : V1 × ⋯ × Vm → V1 + ⋯ + Vm 为 Γ(v1, …, vm) = v1 + ⋯ + vm 那么 V1 + ⋯ + Vm 是直和，当且仅当 Γ 是单射。"
    },
    {
      "id": "3.94",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.94",
      "name_en": "a sum is a direct sum if and only if dimensions add up",
      "name_zh": "中证明.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose V is finite-dimensional and V<sub>1</sub>, …, V<sub>m</sub> are subspaces of V. Then V<sub>1</sub> + ⋯ + V<sub>m</sub> is a direct sum if and only if",
          "zh": "假设 V 是有限维的，且 V<sub>1</sub>, …, V<sub>m</sub> 是 V 的子空间。那么 V<sub>1</sub> + ⋯ + V<sub>m</sub> 是直和，当且仅当"
        },
        {
          "t": "formula",
          "en": "dim(V<sub>1</sub> + ⋯ + V<sub>m</sub>) = dim V<sub>1</sub> + ⋯ + dim V<sub>m</sub>",
          "zh": "dim(V<sub>1</sub> + ⋯ + V<sub>m</sub>) = dim V<sub>1</sub> + ⋯ + dim V<sub>m</sub>"
        }
      ],
      "note": null,
      "statement_en": "Suppose V is finite-dimensional and V1, …, Vm are subspaces of V. Then V1 + ⋯ + Vm is a direct sum if and only if dim(V1 + ⋯ + Vm) = dim V1 + ⋯ + dim Vm",
      "statement_zh": "假设 V 是有限维的，且 V1, …, Vm 是 V 的子空间。那么 V1 + ⋯ + Vm 是直和，当且仅当 dim(V1 + ⋯ + Vm) = dim V1 + ⋯ + dim Vm"
    },
    {
      "id": "3.95",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.95",
      "name_en": "𝑣 + 𝑈",
      "name_zh": "𝑣 + 𝑈",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣 ∈ 𝑉 and 𝑈 ⊆ 𝑉. Then 𝑣 + 𝑈 is the subset of 𝑉 defined by 𝑣 + 𝑈 = {𝑣 + 𝑢 ∶ 𝑢 ∈ 𝑈}. 99",
          "zh": "设 𝑣 ∈ 𝑉 且 𝑈 ⊆ 𝑉.那么 𝑣 + 𝑈 是 𝑉 的一个由下式定义的子集: 𝑣 + 𝑈 = {𝑣 + 𝑢 : 𝑢 ∈ 𝑈}."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣 ∈ 𝑉 and 𝑈 ⊆ 𝑉. Then 𝑣 + 𝑈 is the subset of 𝑉 defined by 𝑣 + 𝑈 = {𝑣 + 𝑢 ∶ 𝑢 ∈ 𝑈}. 99",
      "statement_zh": "设 𝑣 ∈ 𝑉 且 𝑈 ⊆ 𝑉.那么 𝑣 + 𝑈 是 𝑉 的一个由下式定义的子集: 𝑣 + 𝑈 = {𝑣 + 𝑢 : 𝑢 ∈ 𝑈}."
    },
    {
      "id": "3.97",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.97",
      "name_en": "translate",
      "name_zh": "平移",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑣 ∈ 𝑉 and 𝑈 a subset of 𝑉, the set 𝑣 + 𝑈 is said to be a translate of 𝑈.",
          "zh": "对于 𝑣 ∈ 𝑉 和 𝑉 的一个子集 𝑈，称集合 𝑣 + 𝑈 是 𝑈 的一个平移."
        }
      ],
      "note": null,
      "statement_en": "For 𝑣 ∈ 𝑉 and 𝑈 a subset of 𝑉, the set 𝑣 + 𝑈 is said to be a translate of 𝑈.",
      "statement_zh": "对于 𝑣 ∈ 𝑉 和 𝑉 的一个子集 𝑈，称集合 𝑣 + 𝑈 是 𝑈 的一个平移."
    },
    {
      "id": "3.99",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.99",
      "name_en": "quotient space, 𝑉/𝑈",
      "name_zh": "商空间(quotient space)、𝑉/𝑈",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a subspace of 𝑉. Then the quotient space 𝑉/𝑈 is the set of all translates of 𝑈. Thus 𝑉/𝑈 = {𝑣 + 𝑈 ∶ 𝑣 ∈ 𝑉}.",
          "zh": "设 𝑈 是 𝑉 的子空间.那么商空间 𝑉 /𝑈 是由 𝑈 的所有平移构成的集合.从而 𝑉/𝑈 = {𝑣 +𝑈 : 𝑣 ∈ 𝑉}."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉. Then the quotient space 𝑉/𝑈 is the set of all translates of 𝑈. Thus 𝑉/𝑈 = {𝑣 + 𝑈 ∶ 𝑣 ∈ 𝑉}.",
      "statement_zh": "设 𝑈 是 𝑉 的子空间.那么商空间 𝑉 /𝑈 是由 𝑈 的所有平移构成的集合.从而 𝑉/𝑈 = {𝑣 +𝑈 : 𝑣 ∈ 𝑉}."
    },
    {
      "id": "3.101",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.101",
      "name_en": "two translates of a subspace are equal or disjoint Suppose",
      "name_zh": "子空间的两个平移要么相等要么不相交",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑈 is a subspace of 𝑉 and 𝑣,𝑤 ∈ 𝑉. Then 𝑣−𝑤 ∈ 𝑈 ⟺ 𝑣+𝑈 = 𝑤+𝑈 ⟺ (𝑣+𝑈)∩(𝑤+𝑈) = ̸∅.",
          "zh": "设 𝑈 是 𝑉 的子空间且 𝑣, 𝑤 ∈ 𝑉.那么 𝑣−𝑤 ∈ 𝑈 ⇐⇒ 𝑣+𝑈 = 𝑤+𝑈 ⇐⇒ (𝑣+𝑈)∩(𝑤+𝑈) = ̸∅."
        }
      ],
      "note": null,
      "statement_en": "𝑈 is a subspace of 𝑉 and 𝑣,𝑤 ∈ 𝑉. Then 𝑣−𝑤 ∈ 𝑈 ⟺ 𝑣+𝑈 = 𝑤+𝑈 ⟺ (𝑣+𝑈)∩(𝑤+𝑈) = ̸∅.",
      "statement_zh": "设 𝑈 是 𝑉 的子空间且 𝑣, 𝑤 ∈ 𝑉.那么 𝑣−𝑤 ∈ 𝑈 ⇐⇒ 𝑣+𝑈 = 𝑤+𝑈 ⇐⇒ (𝑣+𝑈)∩(𝑤+𝑈) = ̸∅."
    },
    {
      "id": "3.102",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.102",
      "name_en": "addition and scalar multiplication on 𝑉/𝑈",
      "name_zh": "𝑉/𝑈 上的加法和标量乘法(addition and scalar multiplication on 𝑉/𝑈) 设𝑈是𝑉的子空间.那么𝑉/𝑈上的加法和标量乘法分别由下面两式定义:对所有𝑣,𝑤 ∈ 𝑉 和所有 𝜆 ∈ F",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a subspace of 𝑉. Then addition and scalar multiplication are defined on 𝑉/𝑈 by (𝑣 + 𝑈) + (𝑤 + 𝑈) = (𝑣 + 𝑤) + 𝑈 𝜆(𝑣 + 𝑈) = (𝜆𝑣) + 𝑈 for all 𝑣, 𝑤 ∈ 𝑉 and all 𝜆 ∈ 𝐅. As part of the",
          "zh": "(𝑣 + 𝑈) + (𝑤 + 𝑈) = (𝑣 + 𝑤) + 𝑈 𝜆(𝑣 +𝑈) = (𝜆𝑣) +𝑈. 以上定义是合理的——对这一点的证明，是对接下来这条结果的证明中的一部分."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉. Then addition and scalar multiplication are defined on 𝑉/𝑈 by (𝑣 + 𝑈) + (𝑤 + 𝑈) = (𝑣 + 𝑤) + 𝑈 𝜆(𝑣 + 𝑈) = (𝜆𝑣) + 𝑈 for all 𝑣, 𝑤 ∈ 𝑉 and all 𝜆 ∈ 𝐅. As part of the",
      "statement_zh": "(𝑣 + 𝑈) + (𝑤 + 𝑈) = (𝑣 + 𝑤) + 𝑈 𝜆(𝑣 +𝑈) = (𝜆𝑣) +𝑈. 以上定义是合理的——对这一点的证明，是对接下来这条结果的证明中的一部分."
    },
    {
      "id": "3.103",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.103",
      "name_en": "quotient space is a vector space",
      "name_zh": "商空间是向量空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a subspace of 𝑉. Then 𝑉/𝑈, with the operations of addition and scalar multiplication as defined above, is a vector space.",
          "zh": "假设 𝑈 是 𝑉 的子空间.那么带有定义如上的加法和标量乘法的 𝑉 /𝑈 就是向量空间. 3E 向量空间的积和商 85"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉. Then 𝑉/𝑈, with the operations of addition and scalar multiplication as defined above, is a vector space.",
      "statement_zh": "假设 𝑈 是 𝑉 的子空间.那么带有定义如上的加法和标量乘法的 𝑉 /𝑈 就是向量空间. 3E 向量空间的积和商 85"
    },
    {
      "id": "3.104",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.104",
      "name_en": "quotient map, 𝜋",
      "name_zh": "商映射(quotient map)、𝜋",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a subspace of 𝑉. The quotient map 𝜋 ∶ 𝑉 → 𝑉/𝑈 is the linear map defined by for each 𝑣 ∈ 𝑉. 𝜋(𝑣) = 𝑣 + 𝑈 The reader should verify that 𝜋 is indeed a linear map. Although 𝜋 depends on 𝑈 as well as 𝑉, these spaces are left out of the notation because they should be clear from the context.",
          "zh": "设 𝑈 是 𝑉 的子空间.商映射 𝜋 : 𝑉 → 𝑉/𝑈 是由下式定义的线性映射:对每个 𝑣 ∈ 𝑉， 𝜋(𝑣) = 𝑣 + 𝑈. 读者应自行验证 𝜋 的确是一个线性映射.尽管 𝜋 既依赖于 𝑈 又依赖于 𝑉，记号中却省略 了这些向量空间，因为根据上下文就能明确它们是什么. 𝑣<sub>1</sub>−𝑣<sub>2</sub> ∈ 𝑈 且 𝑤<sub>1</sub>−𝑤<sub>2</sub> ∈ 𝑈."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉. The quotient map 𝜋 ∶ 𝑉 → 𝑉/𝑈 is the linear map defined by for each 𝑣 ∈ 𝑉. 𝜋(𝑣) = 𝑣 + 𝑈 The reader should verify that 𝜋 is indeed a linear map. Although 𝜋 depends on 𝑈 as well as 𝑉, these spaces are left out of the notation because they should be clear from the context.",
      "statement_zh": "设 𝑈 是 𝑉 的子空间.商映射 𝜋 : 𝑉 → 𝑉/𝑈 是由下式定义的线性映射:对每个 𝑣 ∈ 𝑉， 𝜋(𝑣) = 𝑣 + 𝑈. 读者应自行验证 𝜋 的确是一个线性映射.尽管 𝜋 既依赖于 𝑈 又依赖于 𝑉，记号中却省略 了这些向量空间，因为根据上下文就能明确它们是什么. 𝑣1−𝑣2 ∈ 𝑈 且 𝑤1−𝑤2 ∈ 𝑈."
    },
    {
      "id": "3.105",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.105",
      "name_en": "dimension of quotient space",
      "name_zh": "商空间的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim 𝑉/𝑈 = dim 𝑉 − dim 𝑈.",
          "zh": "设 𝑉 是有限维的，𝑈 是 𝑉 的子空间.那么 dim 𝑉/𝑈 = dim 𝑉 − dim 𝑈."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim 𝑉/𝑈 = dim 𝑉 − dim 𝑈.",
      "statement_zh": "设 𝑉 是有限维的，𝑈 是 𝑉 的子空间.那么 dim 𝑉/𝑈 = dim 𝑉 − dim 𝑈."
    },
    {
      "id": "3.106",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.106",
      "name_en": "𝑇̃",
      "name_zh": "𝑇 e",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Define 𝑇̃ ∶ 𝑉/(null 𝑇) → 𝑊 by 𝑇̃(𝑣 + null 𝑇) = 𝑇𝑣. To show that the definition of 𝑇̃ makes sense, suppose 𝑢, 𝑣 ∈ 𝑉 are such that 𝑢 + null 𝑇 = 𝑣 + null 𝑇. By 3.101, we have 𝑢 − 𝑣 ∈ null 𝑇. Thus 𝑇(𝑢 − 𝑣) = 0. Hence 𝑇𝑢 = 𝑇𝑣. Thus the definition of 𝑇̃ indeed makes sense. The routine verification that 𝑇̃ is a linear map from 𝑉/(null 𝑇) to 𝑊 is left to the reader.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊).𝑇 e:𝑉/(null 𝑇) →𝑊 由下式定义: 𝑇 e(𝑣 + null 𝑇) = 𝑇𝑣."
        }
      ],
      "note": {
        "en": "The next result shows that we can think of 𝑇̃ as a modified version of 𝑇, with a domain that produces a one-to-one map.",
        "zh": ""
      },
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Define 𝑇̃ ∶ 𝑉/(null 𝑇) → 𝑊 by 𝑇̃(𝑣 + null 𝑇) = 𝑇𝑣. To show that the definition of 𝑇̃ makes sense, suppose 𝑢, 𝑣 ∈ 𝑉 are such that 𝑢 + null 𝑇 = 𝑣 + null 𝑇. By 3.101, we have 𝑢 − 𝑣 ∈ null 𝑇. Thus 𝑇(𝑢 − 𝑣) = 0. Hence 𝑇𝑢 = 𝑇𝑣. Thus the definition of 𝑇̃ indeed makes sense. The routine verification that 𝑇̃ is a linear map from 𝑉/(null 𝑇) to 𝑊 is left to the reader. The next result shows that we can think of 𝑇̃ as a modified version of 𝑇, with a domain that produces a one-to-one map.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊).𝑇 e:𝑉/(null 𝑇) →𝑊 由下式定义: 𝑇 e(𝑣 + null 𝑇) = 𝑇𝑣."
    },
    {
      "id": "3.107",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.107",
      "name_en": "null space and range of",
      "name_zh": "𝑇 e 的零空间和值域 设𝑇 ∈ L(𝑉,𝑊).那么",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose T ∈ L(V, W). Then",
          "zh": "假设 T ∈ L(V, W)。那么"
        },
        {
          "t": "bullet",
          "en": "(a) T̃ ∘ π = T, where π is the quotient map of V onto V/(null T);",
          "zh": "(a) T̃ ∘ π = T，其中 π 是 V 到 V/(null T) 的商映射；"
        },
        {
          "t": "bullet",
          "en": "(b) T̃ is injective;",
          "zh": "(b) T̃ 是单射；"
        },
        {
          "t": "bullet",
          "en": "(c) range T̃ = range T;",
          "zh": "(c) range T̃ = range T；"
        },
        {
          "t": "bullet",
          "en": "(d) V/(null T) and range T are isomorphic vector spaces.",
          "zh": "(d) V/(null T) 与 range T 是同构的向量空间。"
        }
      ],
      "note": null,
      "statement_en": "Suppose T ∈ L(V, W). Then (a) T̃ ∘ π = T, where π is the quotient map of V onto V/(null T); (b) T̃ is injective; (c) range T̃ = range T; (d) V/(null T) and range T are isomorphic vector spaces.",
      "statement_zh": "假设 T ∈ L(V, W)。那么 (a) T̃ ∘ π = T，其中 π 是 V 到 V/(null T) 的商映射； (b) T̃ 是单射； (c) range T̃ = range T； (d) V/(null T) 与 range T 是同构的向量空间。"
    },
    {
      "id": "3.108",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.108",
      "name_en": "linear functional",
      "name_zh": "线性泛函",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear functional on 𝑉 is a linear map from 𝑉 to 𝐅. In other words, a linear functional is an element of L(𝑉, 𝐅).",
          "zh": "𝑉 上的线性泛函是从 𝑉 到 F 的线性映射.换言之，线性泛函是 L (𝑉, F) 的元素."
        }
      ],
      "note": null,
      "statement_en": "A linear functional on 𝑉 is a linear map from 𝑉 to 𝐅. In other words, a linear functional is an element of L(𝑉, 𝐅).",
      "statement_zh": "𝑉 上的线性泛函是从 𝑉 到 F 的线性映射.换言之，线性泛函是 L (𝑉, F) 的元素."
    },
    {
      "id": "3.110",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.110",
      "name_en": "dual space, 𝑉′",
      "name_zh": "对偶空间(dual space)、𝑉′",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The dual space of 𝑉, denoted by 𝑉′, is the vector space of all linear functionals on 𝑉. In other words, 𝑉′ = L(𝑉, 𝐅). 3.111 dim 𝑉′ = dim 𝑉 Suppose 𝑉 is finite-dimensional. Then 𝑉′ is also finite-dimensional and 𝜑(𝑝) = 3𝑝′′(5) + 7𝑝(4).",
          "zh": "𝑉 的对偶空间记作 𝑉′，是 𝑉 上全体线性泛函所构成的向量空间.换言之，𝑉′ = L(𝑉, F). 那么 𝜑 是 P(R) 上的线性泛函. 𝜑(𝑝) = 𝑝."
        }
      ],
      "note": null,
      "statement_en": "The dual space of 𝑉, denoted by 𝑉′, is the vector space of all linear functionals on 𝑉. In other words, 𝑉′ = L(𝑉, 𝐅). 3.111 dim 𝑉′ = dim 𝑉 Suppose 𝑉 is finite-dimensional. Then 𝑉′ is also finite-dimensional and 𝜑(𝑝) = 3𝑝′′(5) + 7𝑝(4).",
      "statement_zh": "𝑉 的对偶空间记作 𝑉′，是 𝑉 上全体线性泛函所构成的向量空间.换言之，𝑉′ = L(𝑉, F). 那么 𝜑 是 P(R) 上的线性泛函. 𝜑(𝑝) = 𝑝."
    },
    {
      "id": "3.111",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.111",
      "name_en": "dim 𝑉′ = dim 𝑉",
      "name_zh": "dim 𝑉′ = dim 𝑉",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. Then 𝑉′ is also finite-dimensional and 𝜑(𝑝) = 3𝑝′′(5) + 7𝑝(4).",
          "zh": "假设 𝑉 是有限维的.那么 𝑉 ′ 也是有限维的，且 dim 𝑉′ = dim 𝑉. dim 𝑉′ = dimL(𝑉,F) = (dim 𝑉)(dimF) = dim 𝑉， 3F 对偶 89"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then 𝑉′ is also finite-dimensional and 𝜑(𝑝) = 3𝑝′′(5) + 7𝑝(4).",
      "statement_zh": "假设 𝑉 是有限维的.那么 𝑉 ′ 也是有限维的，且 dim 𝑉′ = dim 𝑉. dim 𝑉′ = dimL(𝑉,F) = (dim 𝑉)(dimF) = dim 𝑉， 3F 对偶 89"
    },
    {
      "id": "3.112",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.112",
      "name_en": "dual basis",
      "name_zh": "对偶基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If v<sub>1</sub>, …, v<sub>n</sub> is a basis of V, then the dual basis of v<sub>1</sub>, …, v<sub>n</sub> is the list φ<sub>1</sub>, …, φ<sub>n</sub> of elements of V′ such that",
          "zh": "如果 v<sub>1</sub>, …, v<sub>n</sub> 是 V 的基，那么 v<sub>1</sub>, …, v<sub>n</sub> 的对偶基是 V′ 中的组 φ<sub>1</sub>, …, φ<sub>n</sub>，使得"
        },
        {
          "t": "formula",
          "en": "φ<sub>j</sub>(v<sub>k</sub>) = 1 if k = j, and φ<sub>j</sub>(v<sub>k</sub>) = 0 if k ≠ j",
          "zh": "φ<sub>j</sub>(v<sub>k</sub>) = 1（若 k = j），φ<sub>j</sub>(v<sub>k</sub>) = 0（若 k ≠ j）"
        }
      ],
      "note": null,
      "statement_en": "If v1, …, vn is a basis of V, then the dual basis of v1, …, vn is the list φ1, …, φn of elements of V′ such that φj(vk) = 1 if k = j, and φj(vk) = 0 if k ≠ j",
      "statement_zh": "如果 v1, …, vn 是 V 的基，那么 v1, …, vn 的对偶基是 V′ 中的组 φ1, …, φn，使得 φj(vk) = 1（若 k = j），φj(vk) = 0（若 k ≠ j）"
    },
    {
      "id": "3.114",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.114",
      "name_en": "dual basis gives coefficients for linear combination",
      "name_zh": "对偶基给出了线性组合的系数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a basis of 𝑉 and 𝜑1,...,𝜑𝑛 is the dual basis. Then 𝑣 = 𝜑1(𝑣)𝑣<sub>1</sub> + ⋯ + 𝜑𝑛(𝑣)𝑣<sub>𝑛</sub> for each 𝑣 ∈ 𝑉.",
          "zh": "假设𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉 的基，且𝜑1,…,𝜑𝑛 是其对偶基.那么对每个𝑣 ∈ 𝑉，有 𝑣 = 𝜑1(𝑣)𝑣<sub>1</sub> +···+𝜑𝑛(𝑣)𝑣<sub>𝑛</sub>."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣1,...,𝑣𝑛 is a basis of 𝑉 and 𝜑1,...,𝜑𝑛 is the dual basis. Then 𝑣 = 𝜑1(𝑣)𝑣1 + ⋯ + 𝜑𝑛(𝑣)𝑣𝑛 for each 𝑣 ∈ 𝑉.",
      "statement_zh": "假设𝑣1,…,𝑣𝑛 是𝑉 的基，且𝜑1,…,𝜑𝑛 是其对偶基.那么对每个𝑣 ∈ 𝑉，有 𝑣 = 𝜑1(𝑣)𝑣1 +···+𝜑𝑛(𝑣)𝑣𝑛."
    },
    {
      "id": "3.116",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.116",
      "name_en": "dual basis is a basis of the dual space",
      "name_zh": "对偶基是对偶空间的基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. Then the dual basis of a basis of 𝑉 is a basis of 𝑉′.",
          "zh": "假设 𝑉 是有限维的.那么 𝑉 的基的对偶基是 𝑉 ′ 的基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then the dual basis of a basis of 𝑉 is a basis of 𝑉′.",
      "statement_zh": "假设 𝑉 是有限维的.那么 𝑉 的基的对偶基是 𝑉 ′ 的基."
    },
    {
      "id": "3.117",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.117",
      "name_en": "shows that",
      "name_zh": "shows that",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑎<sub>1</sub> = ⋯ = 𝑎<sub>𝑛</sub> = 0. Hence 𝜑1,…,𝜑𝑛 is linearly independent. Because 𝜑1, …, 𝜑𝑛 is a linearly independent list in 𝑉′ whose length equals dim 𝑉′ (by 3.111), we can conclude that 𝜑1, …, 𝜑𝑛 is a basis of 𝑉′ (see 2.38). In the definition below, note that if 𝑇 is a linear map from 𝑉 to 𝑊 then 𝑇′ is a linear map from 𝑊′ to 𝑉′.",
          "zh": "shows that"
        }
      ],
      "note": null,
      "statement_en": "𝑎1 = ⋯ = 𝑎𝑛 = 0. Hence 𝜑1,…,𝜑𝑛 is linearly independent. Because 𝜑1, …, 𝜑𝑛 is a linearly independent list in 𝑉′ whose length equals dim 𝑉′ (by 3.111), we can conclude that 𝜑1, …, 𝜑𝑛 is a basis of 𝑉′ (see 2.38). In the definition below, note that if 𝑇 is a linear map from 𝑉 to 𝑊 then 𝑇′ is a linear map from 𝑊′ to 𝑉′.",
      "statement_zh": "shows that"
    },
    {
      "id": "3.118",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.118",
      "name_en": "dual map, 𝑇′",
      "name_zh": "对偶映射(dual map)、𝑇′",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). The dual map of 𝑇 is the linear map 𝑇′ ∈ L(𝑊′, 𝑉′) defined for each 𝜑 ∈ 𝑊′ by 𝑇′(𝜑) = 𝜑 ∘ 𝑇. If 𝑇 ∈ L(𝑉, 𝑊) and 𝜑 ∈ 𝑊′, then 𝑇′(𝜑) is defined above to be the composition of the linear maps 𝜑 and 𝑇. Thus 𝑇′(𝜑) is indeed a linear map from 𝑉 to 𝐅; in other words, 𝑇′(𝜑) ∈ 𝑉′. The following two bullet points show that 𝑇′ is a linear map from 𝑊′ to 𝑉′. • If𝜑,𝜓∈𝑊′,then 𝑇′(𝜑 + 𝜓) = (𝜑 + 𝜓) ∘ 𝑇 = 𝜑 ∘ 𝑇 + 𝜓 ∘ 𝑇 = 𝑇′(𝜑) + 𝑇′(𝜓). • If𝜆∈𝐅and𝜑∈𝑊′,then 𝑇′(𝜆𝜑) = (𝜆𝜑) ∘ 𝑇 = 𝜆(𝜑 ∘ 𝑇) = 𝜆𝑇′(𝜑). The prime notation appears with two unrelated meanings",
          "zh": "设𝑇 ∈ L(𝑉,𝑊).𝑇 的对偶映射是由下式定义的线性映射𝑇′ ∈ L(𝑊′,𝑉′):对每个 𝜑 ∈ 𝑊′， 𝑇′(𝜑) = 𝜑◦𝑇. 如果 𝑇 ∈ L(𝑉,𝑊) 且 𝜑 ∈ 𝑊′，那么按上 述定义，𝑇′(𝜑)就是𝜑和𝑇这两个线性映射的 复合.于是 𝑇′(𝜑) 的确是从 𝑉 到 F 的线性映 射;换言之，𝑇′(𝜑) ∈ 𝑉′. 有些书籍中用于表示对偶的记号是 𝑉∗ 和 𝑇∗ 而不是𝑉′ 和𝑇′.但我们将𝑇∗ 这个记号预留 给伴随——到了 下面两点结论表明 𝑇′ 是从 𝑊′ 到 𝑉′ 的线性映射: 若 𝜑,𝜓 ∈ 𝑊′，那么 𝑇′ (𝜑 + 𝜓) = (𝜑 + 𝜓) ◦ 𝑇 = 𝜑 ◦ 𝑇 + 𝜓 ◦ 𝑇 = 𝑇′ (𝜑) + 𝑇′ (𝜓). 若 𝜆 ∈ F 且 𝜑 ∈ 𝑊′，那么 𝑇′(𝜆𝜑) = (𝜆𝜑)◦𝑇 = 𝜆(𝜑◦𝑇) = 𝜆𝑇′(𝜑). 下例中撇号(′)有两种不相关的含义:在 𝐷′ 中用于表示线性映射 𝐷 的对偶，在 𝑝′ 中则 用于表示多项式 𝑝 的导数."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). The dual map of 𝑇 is the linear map 𝑇′ ∈ L(𝑊′, 𝑉′) defined for each 𝜑 ∈ 𝑊′ by 𝑇′(𝜑) = 𝜑 ∘ 𝑇. If 𝑇 ∈ L(𝑉, 𝑊) and 𝜑 ∈ 𝑊′, then 𝑇′(𝜑) is defined above to be the composition of the linear maps 𝜑 and 𝑇. Thus 𝑇′(𝜑) is indeed a linear map from 𝑉 to 𝐅; in other words, 𝑇′(𝜑) ∈ 𝑉′. The following two bullet points show that 𝑇′ is a linear map from 𝑊′ to 𝑉′. • If𝜑,𝜓∈𝑊′,then 𝑇′(𝜑 + 𝜓) = (𝜑 + 𝜓) ∘ 𝑇 = 𝜑 ∘ 𝑇 + 𝜓 ∘ 𝑇 = 𝑇′(𝜑) + 𝑇′(𝜓). • If𝜆∈𝐅and𝜑∈𝑊′,then 𝑇′(𝜆𝜑) = (𝜆𝜑) ∘ 𝑇 = 𝜆(𝜑 ∘ 𝑇) = 𝜆𝑇′(𝜑). The prime notation appears with two unrelated meanings",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊).𝑇 的对偶映射是由下式定义的线性映射𝑇′ ∈ L(𝑊′,𝑉′):对每个 𝜑 ∈ 𝑊′， 𝑇′(𝜑) = 𝜑◦𝑇. 如果 𝑇 ∈ L(𝑉,𝑊) 且 𝜑 ∈ 𝑊′，那么按上 述定义，𝑇′(𝜑)就是𝜑和𝑇这两个线性映射的 复合.于是 𝑇′(𝜑) 的确是从 𝑉 到 F 的线性映 射;换言之，𝑇′(𝜑) ∈ 𝑉′. 有些书籍中用于表示对偶的记号是 𝑉∗ 和 𝑇∗ 而不是𝑉′ 和𝑇′.但我们将𝑇∗ 这个记号预留 给伴随——到了 下面两点结论表明 𝑇′ 是从 𝑊′ 到 𝑉′ 的线性映射: 若 𝜑,𝜓 ∈ 𝑊′，那么 𝑇′ (𝜑 + 𝜓) = (𝜑 + 𝜓) ◦ 𝑇 = 𝜑 ◦ 𝑇 + 𝜓 ◦ 𝑇 = 𝑇′ (𝜑) + 𝑇′ (𝜓). 若 𝜆 ∈ F 且 𝜑 ∈ 𝑊′，那么 𝑇′(𝜆𝜑) = (𝜆𝜑)◦𝑇 = 𝜆(𝜑◦𝑇) = 𝜆𝑇′(𝜑). 下例中撇号(′)有两种不相关的含义:在 𝐷′ 中用于表示线性映射 𝐷 的对偶，在 𝑝′ 中则 用于表示多项式 𝑝 的导数."
    },
    {
      "id": "3.120",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.120",
      "name_en": "algebraic properties of dual maps",
      "name_zh": "对偶映射的代数性质 设𝑇 ∈ L(𝑉,𝑊).那么",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Then (a) (𝑆+𝑇)′=𝑆′+𝑇′forall𝑆∈L(𝑉,𝑊); (b) (𝜆𝑇)′ = 𝜆𝑇′ for all 𝜆 ∈ 𝐅; (c) (𝑆𝑇)′ = 𝑇′𝑆′ for all 𝑆 ∈ L(𝑊, 𝑈).",
          "zh": "(a) 对所有𝑆 ∈ L(𝑉,𝑊)，均有(𝑆+𝑇)′ = 𝑆′ +𝑇′; (b) 对所有 𝜆 ∈ F，均有 (𝜆𝑇)′ = 𝜆𝑇′; (c) 对所有 𝑆 ∈ L(𝑊,𝑈)，均有 (𝑆𝑇)′ = 𝑇′𝑆′."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Then (a) (𝑆+𝑇)′=𝑆′+𝑇′forall𝑆∈L(𝑉,𝑊); (b) (𝜆𝑇)′ = 𝜆𝑇′ for all 𝜆 ∈ 𝐅; (c) (𝑆𝑇)′ = 𝑇′𝑆′ for all 𝑆 ∈ L(𝑊, 𝑈).",
      "statement_zh": "(a) 对所有𝑆 ∈ L(𝑉,𝑊)，均有(𝑆+𝑇)′ = 𝑆′ +𝑇′; (b) 对所有 𝜆 ∈ F，均有 (𝜆𝑇)′ = 𝜆𝑇′; (c) 对所有 𝑆 ∈ L(𝑊,𝑈)，均有 (𝑆𝑇)′ = 𝑇′𝑆′."
    },
    {
      "id": "3.121",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.121",
      "name_en": "annihilator, 𝑈0",
      "name_zh": "零化子(annihilator)、𝑈 0 对 𝑈 ⊆ 𝑉，𝑈 的零化子，记作 𝑈0，定义为",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑈 ⊆ 𝑉, the annihilator of 𝑈, denoted by 𝑈0, is defined by 𝑈0 = {𝜑 ∈ 𝑉′ ∶𝜑(𝑢) = 0for all 𝑢 ∈ 𝑈}.",
          "zh": "𝑈0 = {𝜑 ∈ 𝑉′ :对所有𝑢 ∈ 𝑈,𝜑(𝑢) = 0}."
        }
      ],
      "note": null,
      "statement_en": "For 𝑈 ⊆ 𝑉, the annihilator of 𝑈, denoted by 𝑈0, is defined by 𝑈0 = {𝜑 ∈ 𝑉′ ∶𝜑(𝑢) = 0for all 𝑢 ∈ 𝑈}.",
      "statement_zh": "𝑈0 = {𝜑 ∈ 𝑉′ :对所有𝑢 ∈ 𝑈,𝜑(𝑢) = 0}."
    },
    {
      "id": "3.124",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.124",
      "name_en": "the annihilator is a subspace",
      "name_zh": "零化子是子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 ⊆ 𝑉. Then 𝑈0 is a subspace of 𝑉′.",
          "zh": "设 𝑈 ⊆ 𝑉.那么 𝑈0 是 𝑉′ 的子空间."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 ⊆ 𝑉. Then 𝑈0 is a subspace of 𝑉′.",
      "statement_zh": "设 𝑈 ⊆ 𝑉.那么 𝑈0 是 𝑉′ 的子空间."
    },
    {
      "id": "3.125",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.125",
      "name_en": "dimension of the annihilator",
      "name_zh": "的证明会用到本题的结果.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim𝑈0 =dim𝑉−dim𝑈.",
          "zh": "14 设 𝑉 是有限维的(dim 𝑉 &gt; 0)，又设 𝑊 是无限维的."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim𝑈0 =dim𝑉−dim𝑈.",
      "statement_zh": "14 设 𝑉 是有限维的(dim 𝑉 &gt; 0)，又设 𝑊 是无限维的."
    },
    {
      "id": "3.126",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.126",
      "name_en": "dim range",
      "name_zh": "dim range",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) —or to show that a subspace is as small as possible—see",
          "zh": "(a)"
        },
        {
          "t": "bullet",
          "en": "(b) .",
          "zh": "(b)"
        }
      ],
      "note": null,
      "statement_en": "(a) —or to show that a subspace is as small as possible—see (b) .",
      "statement_zh": "(a) (b)"
    },
    {
      "id": "3.127",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.127",
      "name_en": "condition for the annihilator to equal",
      "name_zh": "零化子等于 {0} 或整个空间的条件",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) 𝑈0 = {0} ⟺ 𝑈 = 𝑉;",
          "zh": "(a) 𝑈0 = {0} ⇐⇒ 𝑈 = 𝑉;"
        },
        {
          "t": "bullet",
          "en": "(b) 𝑈0 = 𝑉′ ⟺𝑈 = {0}.",
          "zh": "(b) 𝑈0 = 𝑉′ ⇐⇒𝑈 = {0}."
        }
      ],
      "note": null,
      "statement_en": "(a) 𝑈0 = {0} ⟺ 𝑈 = 𝑉; (b) 𝑈0 = 𝑉′ ⟺𝑈 = {0}.",
      "statement_zh": "(a) 𝑈0 = {0} ⇐⇒ 𝑈 = 𝑉; (b) 𝑈0 = 𝑉′ ⇐⇒𝑈 = {0}."
    },
    {
      "id": "3.128",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.128",
      "name_en": "the null space of",
      "name_zh": "𝑇′ 的零空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇′ Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then (a) null 𝑇′ = (range 𝑇)0; (b) dimnull 𝑇′ = dimnull 𝑇+dim 𝑊−dim 𝑉.",
          "zh": "设𝑉 和𝑊 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么 (a) null 𝑇′ = (range 𝑇)0; (b) dimnull 𝑇′ = dimnull 𝑇 + dim 𝑊 − dim 𝑉. 12对比一下恒等映射 𝐼 : 𝑈 → 𝑈, 𝐼 (𝑢) = 𝑢，不难看出两者的联系与区别:都将定义空间中的元素映到同一元素，但是目标空间不同."
        }
      ],
      "note": null,
      "statement_en": "𝑇′ Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then (a) null 𝑇′ = (range 𝑇)0; (b) dimnull 𝑇′ = dimnull 𝑇+dim 𝑊−dim 𝑉.",
      "statement_zh": "设𝑉 和𝑊 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么 (a) null 𝑇′ = (range 𝑇)0; (b) dimnull 𝑇′ = dimnull 𝑇 + dim 𝑊 − dim 𝑉. 12对比一下恒等映射 𝐼 : 𝑈 → 𝑈, 𝐼 (𝑢) = 𝑢，不难看出两者的联系与区别:都将定义空间中的元素映到同一元素，但是目标空间不同."
    },
    {
      "id": "3.129",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.129",
      "name_en": "𝑇 surjective is equivalent to 𝑇′ injective",
      "name_zh": "𝑇是满射等价于𝑇′是单射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then",
          "zh": "设𝑉 和𝑊 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then",
      "statement_zh": "设𝑉 和𝑊 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么"
    },
    {
      "id": "3.130",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.130",
      "name_en": "the range of",
      "name_zh": "𝑇′ 的值域",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇′ Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then (a) dimrange 𝑇′ = dimrange 𝑇; (b) range 𝑇′ = (null 𝑇)0.",
          "zh": "设𝑉 和𝑊 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么 (a) dimrange 𝑇′ = dimrange 𝑇; (b) range 𝑇′ = (null 𝑇)0."
        }
      ],
      "note": null,
      "statement_en": "𝑇′ Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then (a) dimrange 𝑇′ = dimrange 𝑇; (b) range 𝑇′ = (null 𝑇)0.",
      "statement_zh": "设𝑉 和𝑊 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么 (a) dimrange 𝑇′ = dimrange 𝑇; (b) range 𝑇′ = (null 𝑇)0."
    },
    {
      "id": "3.132",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.132",
      "name_en": "matrix of",
      "name_zh": "𝑇′的矩阵是𝑇的矩阵的转置",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇′ is transpose of matrix of 𝑇 Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then M(𝑇′) = (M(𝑇))t.",
          "zh": "设𝑉 和𝑊 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么 M(𝑇′) = \u0000M(𝑇)\u0001t."
        }
      ],
      "note": null,
      "statement_en": "𝑇′ is transpose of matrix of 𝑇 Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then M(𝑇′) = (M(𝑇))t.",
      "statement_zh": "设𝑉 和𝑊 是有限维的且𝑇 ∈ L(𝑉,𝑊).那么 M(𝑇′) = \u0000M(𝑇)\u0001t."
    },
    {
      "id": "4.1",
      "kind": "definition",
      "chapter": "ch4",
      "number": "4.1",
      "name_en": "real part, Re 𝑧, imaginary part, Im 𝑧",
      "name_zh": "实部(real part)、Re 𝑧，虚部(imaginary part)、Im 𝑧",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The real part of 𝑧, denoted by Re 𝑧, is defined by Re 𝑧 = 𝑎. • The imaginary part of 𝑧, denoted by Im 𝑧, is defined by Im 𝑧 = 𝑏. Thus for every complex number 𝑧, we have 𝑧 = Re 𝑧 + (Im 𝑧)𝑖.",
          "zh": "𝑧 的实部，记作 Re 𝑧，定义为 Re 𝑧 = 𝑎; 𝑧 的虚部，记作 Im 𝑧，定义为 Im 𝑧 = 𝑏. 于是，对于每个复数 𝑧，我们有 𝑧 = Re 𝑧 + (Im 𝑧)i."
        }
      ],
      "note": null,
      "statement_en": "The real part of 𝑧, denoted by Re 𝑧, is defined by Re 𝑧 = 𝑎. • The imaginary part of 𝑧, denoted by Im 𝑧, is defined by Im 𝑧 = 𝑏. Thus for every complex number 𝑧, we have 𝑧 = Re 𝑧 + (Im 𝑧)𝑖.",
      "statement_zh": "𝑧 的实部，记作 Re 𝑧，定义为 Re 𝑧 = 𝑎; 𝑧 的虚部，记作 Im 𝑧，定义为 Im 𝑧 = 𝑏. 于是，对于每个复数 𝑧，我们有 𝑧 = Re 𝑧 + (Im 𝑧)i."
    },
    {
      "id": "4.2",
      "kind": "definition",
      "chapter": "ch4",
      "number": "4.2",
      "name_en": "complex conjugate, 𝑧, absolute value, |𝑧|",
      "name_zh": "复共轭(complex conjugate)、𝑧，绝对值(absolute value)、|𝑧|",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The complex conjugate of 𝑧 ∈ 𝐂, denoted by 𝑧, is defined by 𝑧 = Re 𝑧 − (Im 𝑧)𝑖. • The absolute value of a complex number 𝑧, denoted by |𝑧|, is defined by |𝑧| = √(Re 𝑧)2 + (Im 𝑧)2.",
          "zh": "𝑧 ∈ C 的复共轭，记作 𝑧，定义为 复数 𝑧 的绝对值，记作 |𝑧|，定义为 𝑧 = Re 𝑧 − (Im 𝑧)i. p |𝑧| = (Re 𝑧)2+(Im 𝑧)2."
        }
      ],
      "note": null,
      "statement_en": "The complex conjugate of 𝑧 ∈ 𝐂, denoted by 𝑧, is defined by 𝑧 = Re 𝑧 − (Im 𝑧)𝑖. • The absolute value of a complex number 𝑧, denoted by |𝑧|, is defined by |𝑧| = √(Re 𝑧)2 + (Im 𝑧)2.",
      "statement_zh": "𝑧 ∈ C 的复共轭，记作 𝑧，定义为 复数 𝑧 的绝对值，记作 |𝑧|，定义为 𝑧 = Re 𝑧 − (Im 𝑧)i. p |𝑧| = (Re 𝑧)2+(Im 𝑧)2."
    },
    {
      "id": "4.4",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.4",
      "name_en": "properties of complex numbers sum of 𝑧 and 𝑧",
      "name_zh": "复数的性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑧 + 𝑧 = 2 Re 𝑧. difference of 𝑧 and 𝑧 𝑧 − 𝑧 = 2(Im 𝑧)𝑖. product of 𝑧 and 𝑧 𝑧𝑧 = |𝑧|<sup>2</sup>. additivity and multiplicativity of complex conjugate 𝑤 + 𝑧 = 𝑤 + 𝑧 and 𝑤𝑧 = 𝑤 𝑧. double complex conjugate 𝑧 = 𝑧. real and imaginary parts are bounded by |𝑧| |Re 𝑧| ≤ |𝑧| and |Im 𝑧| ≤ |𝑧|. absolute value of the complex conjugate ∣𝑧∣ = |𝑧|. multiplicativity of absolute value |𝑤𝑧| = |𝑤| |𝑧|. triangle inequality |𝑤 + 𝑧| ≤ |𝑤| + |𝑧|.",
          "zh": "设 𝑤, 𝑧 ∈ C.那么有下面等式和不等式成立. 𝑧 与 𝑧 之和(sum of 𝑧 and 𝑧) 𝑧 + 𝑧 = 2 Re 𝑧. 𝑧 与 𝑧 之差(difference of 𝑧 and 𝑧) 𝑧 − 𝑧 = 2(Im 𝑧)i. 𝑧 与 𝑧 之积(product of 𝑧 and 𝑧) 𝑧𝑧 = |𝑧|<sup>2</sup>. Sheldon Axler [著] 吴俊达、何阳 [译] 复共轭的可加性和可乘性(additivity and multiplicativity of complex conjugate) 𝑤 + 𝑧 = 𝑤 + 𝑧 且 𝑤𝑧 = 𝑤 𝑧. 复共轭的复共轭(double complex conjugate) 𝑧 = 𝑧. 实部和虚部以 |𝑧| 为界(real and imaginary parts are bounded by |𝑧|) | Re 𝑧| ≤ |𝑧| 且 | Im 𝑧| ≤ |𝑧|. 复共轭的绝对值(absolute value of the complex conjugate) |𝑧| = |𝑧|. 绝对值的可乘性(multiplicativity of absolute value) |𝑤𝑧| = |𝑤||𝑧|. 三角不等式(triangle inequality) |𝑤+𝑧| ≤ |𝑤|+|𝑧|."
        }
      ],
      "note": null,
      "statement_en": "𝑧 + 𝑧 = 2 Re 𝑧. difference of 𝑧 and 𝑧 𝑧 − 𝑧 = 2(Im 𝑧)𝑖. product of 𝑧 and 𝑧 𝑧𝑧 = |𝑧|2. additivity and multiplicativity of complex conjugate 𝑤 + 𝑧 = 𝑤 + 𝑧 and 𝑤𝑧 = 𝑤 𝑧. double complex conjugate 𝑧 = 𝑧. real and imaginary parts are bounded by |𝑧| |Re 𝑧| ≤ |𝑧| and |Im 𝑧| ≤ |𝑧|. absolute value of the complex conjugate ∣𝑧∣ = |𝑧|. multiplicativity of absolute value |𝑤𝑧| = |𝑤| |𝑧|. triangle inequality |𝑤 + 𝑧| ≤ |𝑤| + |𝑧|.",
      "statement_zh": "设 𝑤, 𝑧 ∈ C.那么有下面等式和不等式成立. 𝑧 与 𝑧 之和(sum of 𝑧 and 𝑧) 𝑧 + 𝑧 = 2 Re 𝑧. 𝑧 与 𝑧 之差(difference of 𝑧 and 𝑧) 𝑧 − 𝑧 = 2(Im 𝑧)i. 𝑧 与 𝑧 之积(product of 𝑧 and 𝑧) 𝑧𝑧 = |𝑧|2. Sheldon Axler [著] 吴俊达、何阳 [译] 复共轭的可加性和可乘性(additivity and multiplicativity of complex conjugate) 𝑤 + 𝑧 = 𝑤 + 𝑧 且 𝑤𝑧 = 𝑤 𝑧. 复共轭的复共轭(double complex conjugate) 𝑧 = 𝑧. 实部和虚部以 |𝑧| 为界(real and imaginary parts are bounded by |𝑧|) | Re 𝑧| ≤ |𝑧| 且 | Im 𝑧| ≤ |𝑧|. 复共轭的绝对值(absolute value of the complex conjugate) |𝑧| = |𝑧|. 绝对值的可乘性(multiplicativity of absolute value) |𝑤𝑧| = |𝑤||𝑧|. 三角不等式(triangle inequality) |𝑤+𝑧| ≤ |𝑤|+|𝑧|."
    },
    {
      "id": "4.5",
      "kind": "definition",
      "chapter": "ch4",
      "number": "4.5",
      "name_en": "zero of a polynomial",
      "name_zh": "zero of a polynomial",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A number 𝜆 ∈ 𝐅 is called a zero (or root) of a polynomial 𝑝 ∈ 𝒫(𝐅) if 𝑝(𝜆) = 0.",
          "zh": "zero of a polynomial"
        }
      ],
      "note": {
        "en": "The next result is the key tool that we will use to show that the degree of a polynomial is unique.",
        "zh": ""
      },
      "statement_en": "A number 𝜆 ∈ 𝐅 is called a zero (or root) of a polynomial 𝑝 ∈ 𝒫(𝐅) if 𝑝(𝜆) = 0. The next result is the key tool that we will use to show that the degree of a polynomial is unique.",
      "statement_zh": "zero of a polynomial"
    },
    {
      "id": "4.6",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.6",
      "name_en": "each zero of a polynomial corresponds to a degree-one factor",
      "name_zh": "多项式的每个零点都对应",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Suppose 𝜆 ∈ 𝐅. Then 𝑝(𝜆) = 0 if and only if there exists a polynomial 𝑞 ∈ 𝒫(𝐅) of degree 𝑚 − 1 such that 𝑝(𝑧) = (𝑧 − 𝜆)𝑞(𝑧) for every 𝑧 ∈ 𝐅.",
          "zh": "设 𝑚 是正整数且 𝑝 ∈ P(F) 是次数为 𝑚 的多项式.设 𝜆 ∈ F.那么 𝑝(𝜆) = 0 当且仅当存 在一个次数为 𝑚 − 1 的多项式 𝑞 ∈ P(F) 使得对每个 𝑧 ∈ F 都有 𝑝(𝑧) = (𝑧 − 𝜆)𝑞(𝑧)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Suppose 𝜆 ∈ 𝐅. Then 𝑝(𝜆) = 0 if and only if there exists a polynomial 𝑞 ∈ 𝒫(𝐅) of degree 𝑚 − 1 such that 𝑝(𝑧) = (𝑧 − 𝜆)𝑞(𝑧) for every 𝑧 ∈ 𝐅.",
      "statement_zh": "设 𝑚 是正整数且 𝑝 ∈ P(F) 是次数为 𝑚 的多项式.设 𝜆 ∈ F.那么 𝑝(𝜆) = 0 当且仅当存 在一个次数为 𝑚 − 1 的多项式 𝑞 ∈ P(F) 使得对每个 𝑧 ∈ F 都有 𝑝(𝑧) = (𝑧 − 𝜆)𝑞(𝑧)."
    },
    {
      "id": "4.7",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.7",
      "name_en": "shows that",
      "name_zh": "shows that",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑝 equals 𝑧 − 𝜆 times some polynomial of degree 𝑚 − 1, as desired. To prove the implication in the other direction, now suppose that there is a polynomial 𝑞 ∈ 𝒫(𝐅) such that 𝑝(𝑧) = (𝑧 − 𝜆)𝑞(𝑧) for every 𝑧 ∈ 𝐅. Then 𝑝(𝜆) = (𝜆 − 𝜆)𝑞(𝜆) = 0, as desired. Now we can prove that polynomials do not have too many zeros. 4.8 degree 𝑚 implies at most 𝑚 zeros Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Then 𝑝 has at most 𝑚 zeros in 𝐅.",
          "zh": "shows that"
        }
      ],
      "note": null,
      "statement_en": "𝑝 equals 𝑧 − 𝜆 times some polynomial of degree 𝑚 − 1, as desired. To prove the implication in the other direction, now suppose that there is a polynomial 𝑞 ∈ 𝒫(𝐅) such that 𝑝(𝑧) = (𝑧 − 𝜆)𝑞(𝑧) for every 𝑧 ∈ 𝐅. Then 𝑝(𝜆) = (𝜆 − 𝜆)𝑞(𝜆) = 0, as desired. Now we can prove that polynomials do not have too many zeros. 4.8 degree 𝑚 implies at most 𝑚 zeros Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Then 𝑝 has at most 𝑚 zeros in 𝐅.",
      "statement_zh": "shows that"
    },
    {
      "id": "4.8",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.8",
      "name_en": "degree 𝑚 implies at most 𝑚 zeros",
      "name_zh": "次数为 𝑚 表明最多有 𝑚 个零点 假定𝑚是正整数且𝑝 ∈ P(F)是次数为𝑚的多项式.那么𝑝在 F 中最多有𝑚个零点.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Then 𝑝 has at most 𝑚 zeros in 𝐅.",
          "zh": "次数为 𝑚 表明最多有 𝑚 个零点 假定𝑚是正整数且𝑝 ∈ P(F)是次数为𝑚的多项式.那么𝑝在 F 中最多有𝑚个零点."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Then 𝑝 has at most 𝑚 zeros in 𝐅.",
      "statement_zh": "次数为 𝑚 表明最多有 𝑚 个零点 假定𝑚是正整数且𝑝 ∈ P(F)是次数为𝑚的多项式.那么𝑝在 F 中最多有𝑚个零点."
    },
    {
      "id": "4.9",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.9",
      "name_en": "division algorithm for polynomials",
      "name_zh": "多项式的带余除法",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑝, 𝑠 ∈ 𝒫(𝐅), with 𝑠 ≠ 0. Then there exist unique polynomials 𝑞, 𝑟 ∈ 𝒫(𝐅) such that 𝑝 = 𝑠𝑞 + 𝑟 and deg𝑟 < deg𝑠.",
          "zh": "设 𝑝, 𝑠 ∈ P (F)，其中 𝑠 = ̸ 0.那么存在唯一的多项式 𝑞, 𝑟 ∈ P (F) 满足 𝑝 = 𝑠𝑞 + 𝑟 且 deg 𝑟 &lt; deg 𝑠."
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑝, 𝑠 ∈ 𝒫(𝐅), with 𝑠 ≠ 0. Then there exist unique polynomials 𝑞, 𝑟 ∈ 𝒫(𝐅) such that 𝑝 = 𝑠𝑞 + 𝑟 and deg𝑟 < deg𝑠.",
      "statement_zh": "设 𝑝, 𝑠 ∈ P (F)，其中 𝑠 = ̸ 0.那么存在唯一的多项式 𝑞, 𝑟 ∈ P (F) 满足 𝑝 = 𝑠𝑞 + 𝑟 且 deg 𝑟 &lt; deg 𝑠."
    },
    {
      "id": "4.10",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.10",
      "name_en": "has length",
      "name_zh": "has length",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑛 + 1, which equals dim 𝒫<sub>𝑛</sub>(𝐅). Hence 4.10 is a basis of 𝒫<sub>𝑛</sub>(𝐅) [by 2.38]. Because 𝑝 ∈ 𝒫<sub>𝑛</sub>(𝐅) and 4.10 is a basis of 𝒫<sub>𝑛</sub>(𝐅), there exist unique constants 𝑎<sub>0</sub>,𝑎<sub>1</sub>,…,𝑎<sub>𝑚</sub>−1 ∈ 𝐅 and 𝑏<sub>0</sub>,𝑏<sub>1</sub>,…,𝑏<sub>𝑛</sub>−𝑚 ∈ 𝐅 such that 4.11 𝑝 = 𝑎<sub>0</sub> +𝑎<sub>1</sub>𝑧+⋯+𝑎<sub>𝑚</sub>−1𝑧<sub>𝑚</sub>−1 +𝑏<sub>0</sub>𝑠+𝑏<sub>1</sub>𝑧<sub>𝑠</sub>+⋯+𝑏<sub>𝑛</sub>−𝑚𝑧<sub>𝑛</sub>−𝑚𝑠 = 𝑎 +𝑎 𝑧+⋯+𝑎 𝑧<sub>𝑚</sub>−1 +𝑠(𝑏 +𝑏 𝑧+⋯+𝑏 𝑧<sub>𝑛</sub>−𝑚). ⏟0 ⏟⏟1 ⏟⏟⏟𝑚⏟−1⏟⏟ ⏟0 ⏟⏟1 ⏟⏟⏟𝑛⏟−𝑚⏟⏟ 𝑟𝑞 With 𝑟 and 𝑞 as defined above, we see that 𝑝 can be written as 𝑝 = 𝑠𝑞 + 𝑟 with deg 𝑟 &lt; deg 𝑠, as desired. The uniqueness of 𝑞, 𝑟 ∈ 𝒫(𝐅) satisfying these conditions follows from the uniqueness of the constants 𝑎<sub>0</sub>, 𝑎<sub>1</sub>, …, 𝑎<sub>𝑚</sub>−1 ∈ 𝐅 and 𝑏<sub>0</sub>, 𝑏<sub>1</sub>, …, 𝑏<sub>𝑛</sub>−𝑚 ∈ 𝐅 satisfy- ing 4.11. Factorization of Polynomials over 𝐂 We have been handling polynomials with complex coefficients and polynomials with real coefficients simultaneously, let- ting 𝐅 denote 𝐑 or 𝐂. Now we will see differences between these two cases. First we treat polynomials with complex coefficients. Then we will use those re- sults to prove corresponding results for polynomials with real coefficients. The fundamental theorem of algebra is an existence theorem. Its",
          "zh": "has length"
        }
      ],
      "note": null,
      "statement_en": "𝑛 + 1, which equals dim 𝒫𝑛(𝐅). Hence 4.10 is a basis of 𝒫𝑛(𝐅) [by 2.38]. Because 𝑝 ∈ 𝒫𝑛(𝐅) and 4.10 is a basis of 𝒫𝑛(𝐅), there exist unique constants 𝑎0,𝑎1,…,𝑎𝑚−1 ∈ 𝐅 and 𝑏0,𝑏1,…,𝑏𝑛−𝑚 ∈ 𝐅 such that 4.11 𝑝 = 𝑎0 +𝑎1𝑧+⋯+𝑎𝑚−1𝑧𝑚−1 +𝑏0𝑠+𝑏1𝑧𝑠+⋯+𝑏𝑛−𝑚𝑧𝑛−𝑚𝑠 = 𝑎 +𝑎 𝑧+⋯+𝑎 𝑧𝑚−1 +𝑠(𝑏 +𝑏 𝑧+⋯+𝑏 𝑧𝑛−𝑚). ⏟0 ⏟⏟1 ⏟⏟⏟𝑚⏟−1⏟⏟ ⏟0 ⏟⏟1 ⏟⏟⏟𝑛⏟−𝑚⏟⏟ 𝑟𝑞 With 𝑟 and 𝑞 as defined above, we see that 𝑝 can be written as 𝑝 = 𝑠𝑞 + 𝑟 with deg 𝑟 &lt; deg 𝑠, as desired. The uniqueness of 𝑞, 𝑟 ∈ 𝒫(𝐅) satisfying these conditions follows from the uniqueness of the constants 𝑎0, 𝑎1, …, 𝑎𝑚−1 ∈ 𝐅 and 𝑏0, 𝑏1, …, 𝑏𝑛−𝑚 ∈ 𝐅 satisfy- ing 4.11. Factorization of Polynomials over 𝐂 We have been handling polynomials with complex coefficients and polynomials with real coefficients simultaneously, let- ting 𝐅 denote 𝐑 or 𝐂. Now we will see differences between these two cases. First we treat polynomials with complex coefficients. Then we will use those re- sults to prove corresponding results for polynomials with real coefficients. The fundamental theorem of algebra is an existence theorem. Its",
      "statement_zh": "has length"
    },
    {
      "id": "4.12",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.12",
      "name_en": "fundamental theorem of algebra, first version",
      "name_zh": "代数基本定理，版本一(fundamental theorem of algebra, first version) 每个不是常值的复系数多项式都在 C 中有零点.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every nonconstant polynomial with complex coefficients has a zero in 𝐂.",
          "zh": "代数基本定理，版本一(fundamental theorem of algebra, first version) 每个不是常值的复系数多项式都在 C 中有零点."
        }
      ],
      "note": null,
      "statement_en": "Every nonconstant polynomial with complex coefficients has a zero in 𝐂.",
      "statement_zh": "代数基本定理，版本一(fundamental theorem of algebra, first version) 每个不是常值的复系数多项式都在 C 中有零点."
    },
    {
      "id": "4.13",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.13",
      "name_en": "fundamental theorem of algebra, second version",
      "name_zh": "代数基本定理，版本二",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑝 ∈ 𝒫(𝐂) is a nonconstant polynomial, then 𝑝 has a unique factorization (except for the order of the factors) of the form 𝑝(𝑧) = 𝑐(𝑧 − 𝜆<sub>1</sub>) ⋯ (𝑧 − 𝜆<sub>𝑚</sub>), where 𝑐,𝜆<sub>1</sub>,…,𝜆<sub>𝑚</sub> ∈ 𝐂.",
          "zh": "如果 𝑝 ∈ P(C) 是不恒为常数的多项式，那么 𝑝 可被唯一分解为(不计因式的顺序) 𝑝(𝑧) = 𝑐(𝑧 − 𝜆<sub>1</sub>) ⋯ (𝑧 − 𝜆<sub>𝑚</sub>)， 其中𝑐,𝜆<sub>1</sub>,…,𝜆<sub>𝑚</sub> ∈ C."
        }
      ],
      "note": null,
      "statement_en": "If 𝑝 ∈ 𝒫(𝐂) is a nonconstant polynomial, then 𝑝 has a unique factorization (except for the order of the factors) of the form 𝑝(𝑧) = 𝑐(𝑧 − 𝜆1) ⋯ (𝑧 − 𝜆𝑚), where 𝑐,𝜆1,…,𝜆𝑚 ∈ 𝐂.",
      "statement_zh": "如果 𝑝 ∈ P(C) 是不恒为常数的多项式，那么 𝑝 可被唯一分解为(不计因式的顺序) 𝑝(𝑧) = 𝑐(𝑧 − 𝜆1) ⋯ (𝑧 − 𝜆𝑚)， 其中𝑐,𝜆1,…,𝜆𝑚 ∈ C."
    },
    {
      "id": "4.14",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.14",
      "name_en": "polynomials with real coefficients have nonreal zeros in pairs Suppose",
      "name_zh": "实系数多项式的非实数零点成对出现",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑝 ∈ 𝒫(𝐂) is a polynomial with real coefficients. If 𝜆 ∈ 𝐂 is a zero of 𝑝, then so is 𝜆.",
          "zh": "设 𝑝 ∈ P(C) 为实系数多项式.若 𝜆 ∈ C 是 𝑝 的零点，那么 𝜆 也是 𝑝 的零点. 等式两边同取复共轭得 其中我们用到了复共轭的基本性质(见 4.4).上式就表明 𝜆 是 𝑝 的零点."
        }
      ],
      "note": null,
      "statement_en": "𝑝 ∈ 𝒫(𝐂) is a polynomial with real coefficients. If 𝜆 ∈ 𝐂 is a zero of 𝑝, then so is 𝜆.",
      "statement_zh": "设 𝑝 ∈ P(C) 为实系数多项式.若 𝜆 ∈ C 是 𝑝 的零点，那么 𝜆 也是 𝑝 的零点. 等式两边同取复共轭得 其中我们用到了复共轭的基本性质(见 4.4).上式就表明 𝜆 是 𝑝 的零点."
    },
    {
      "id": "4.15",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.15",
      "name_en": "factorization of a quadratic polynomial",
      "name_zh": "二次多项式的分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose b, c ∈ ℝ. Then there is a polynomial factorization of the form",
          "zh": "假设 b, c ∈ ℝ。那么存在形如下式的多项式分解"
        },
        {
          "t": "formula",
          "en": "x<sup>2</sup> + bx + c = (x − λ<sub>1</sub>)(x − λ<sub>2</sub>) with λ<sub>1</sub>, λ<sub>2</sub> ∈ ℝ",
          "zh": "x<sup>2</sup> + bx + c = (x − λ<sub>1</sub>)(x − λ<sub>2</sub>)，其中 λ<sub>1</sub>, λ<sub>2</sub> ∈ ℝ"
        },
        {
          "t": "p",
          "en": "if and only if b<sup>2</sup> ≥ 4c.",
          "zh": "当且仅当 b<sup>2</sup> ≥ 4c。"
        }
      ],
      "note": null,
      "statement_en": "Suppose b, c ∈ ℝ. Then there is a polynomial factorization of the form x2 + bx + c = (x − λ1)(x − λ2) with λ1, λ2 ∈ ℝ if and only if b2 ≥ 4c.",
      "statement_zh": "假设 b, c ∈ ℝ。那么存在形如下式的多项式分解 x2 + bx + c = (x − λ1)(x − λ2)，其中 λ1, λ2 ∈ ℝ 当且仅当 b2 ≥ 4c。"
    },
    {
      "id": "4.16",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.16",
      "name_en": "factorization of a polynomial over",
      "name_zh": "多项式在 R 上的分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐑 Suppose 𝑝 ∈ 𝒫(𝐑) is a nonconstant polynomial. Then 𝑝 has a unique factor- ization (except for the order of the factors) of the form 𝑝(𝑥) = 𝑐(𝑥−𝜆<sub>1</sub>)⋯(𝑥−𝜆<sub>𝑚</sub>)(𝑥<sub>2</sub> +𝑏<sub>1</sub>𝑥+𝑐<sub>1</sub>)⋯(𝑥<sub>2</sub> +𝑏𝑀𝑥+𝑐𝑀), where 𝑐,𝜆,…,𝜆,𝑏,…,𝑏,𝑐,…,𝑐 ∈ 𝐑,with 𝑏<sub>2</sub> &lt;4𝑐 foreach 𝑘. 1𝑚1𝑀1𝑀 𝑘𝑘",
          "zh": "设 𝑝 ∈ P(R) 是一个不恒为常数的多项式.那么 𝑝 可被唯一分解为(不计因式的顺序) 𝑝(𝑥) = 𝑐(𝑥−𝜆<sub>1</sub>)···(𝑥−𝜆<sub>𝑚</sub>)(𝑥<sub>2</sub> +𝑏<sub>1</sub>𝑥+𝑐<sub>1</sub>)···(𝑥<sub>2</sub> +𝑏𝑀𝑥+𝑐𝑀)， 其中𝑐,𝜆<sub>1</sub>,…,𝜆<sub>𝑚</sub>,𝑏<sub>1</sub>,…,𝑏𝑀,𝑐<sub>1</sub>,…,𝑐𝑀 ∈ R 且对各𝑘 = 1,…,𝑀均有𝑏<sub>2</sub>𝑘 &lt;4𝑐<sub>𝑘</sub>."
        }
      ],
      "note": null,
      "statement_en": "𝐑 Suppose 𝑝 ∈ 𝒫(𝐑) is a nonconstant polynomial. Then 𝑝 has a unique factor- ization (except for the order of the factors) of the form 𝑝(𝑥) = 𝑐(𝑥−𝜆1)⋯(𝑥−𝜆𝑚)(𝑥2 +𝑏1𝑥+𝑐1)⋯(𝑥2 +𝑏𝑀𝑥+𝑐𝑀), where 𝑐,𝜆,…,𝜆,𝑏,…,𝑏,𝑐,…,𝑐 ∈ 𝐑,with 𝑏2 &lt;4𝑐 foreach 𝑘. 1𝑚1𝑀1𝑀 𝑘𝑘",
      "statement_zh": "设 𝑝 ∈ P(R) 是一个不恒为常数的多项式.那么 𝑝 可被唯一分解为(不计因式的顺序) 𝑝(𝑥) = 𝑐(𝑥−𝜆1)···(𝑥−𝜆𝑚)(𝑥2 +𝑏1𝑥+𝑐1)···(𝑥2 +𝑏𝑀𝑥+𝑐𝑀)， 其中𝑐,𝜆1,…,𝜆𝑚,𝑏1,…,𝑏𝑀,𝑐1,…,𝑐𝑀 ∈ R 且对各𝑘 = 1,…,𝑀均有𝑏2𝑘 &lt;4𝑐𝑘."
    },
    {
      "id": "5.1",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.1",
      "name_en": "operator",
      "name_zh": "算子(operator) 称从",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear map from a vector space to itself is called an operator.",
          "zh": "从向量空间到自身的线性映射称为算子。"
        }
      ],
      "note": {
        "en": "L(V) means L(V, V).",
        "zh": "记号 L(V) 表示 L(V, V)。"
      },
      "statement_en": "A linear map from a vector space to itself is called an operator. L(V) means L(V, V).",
      "statement_zh": "从向量空间到自身的线性映射称为算子。 记号 L(V) 表示 L(V, V)。"
    },
    {
      "id": "5.2",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.2",
      "name_en": "invariant subspace",
      "name_zh": "不变子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). A subspace 𝑈 of 𝑉 is called invariant under 𝑇 if 𝑇𝑢 ∈ 𝑈 for every 𝑢 ∈ 𝑈. Thus 𝑈 is invariant under 𝑇 if 𝑇|𝑈 is an operator on 𝑈.",
          "zh": "设 𝑇 ∈ L(𝑉).称 𝑉 的子空间 𝑈 在 𝑇 下是不变的，若对每个 𝑢 ∈ 𝑈 均有 𝑇𝑢 ∈ 𝑈. 于是，如果 𝑇|𝑈是 𝑈 上的算子，则 𝑈 在 𝑇 下是不变的."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). A subspace 𝑈 of 𝑉 is called invariant under 𝑇 if 𝑇𝑢 ∈ 𝑈 for every 𝑢 ∈ 𝑈. Thus 𝑈 is invariant under 𝑇 if 𝑇|𝑈 is an operator on 𝑈.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).称 𝑉 的子空间 𝑈 在 𝑇 下是不变的，若对每个 𝑢 ∈ 𝑈 均有 𝑇𝑢 ∈ 𝑈. 于是，如果 𝑇|𝑈是 𝑈 上的算子，则 𝑈 在 𝑇 下是不变的."
    },
    {
      "id": "5.5",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.5",
      "name_en": "eigenvalue",
      "name_zh": "特征值",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). A number 𝜆 ∈ 𝐅 is called an eigenvalue of 𝑇 if there exists 𝑣 ∈ 𝑉 such that 𝑣 ≠ 0 and 𝑇𝑣 = 𝜆𝑣. In the definition above, we require that 𝑣 ≠ 0 because every scalar 𝜆 ∈ 𝐅 satisfies 𝑇0 = 𝜆<sub>0</sub>. The comments above show that 𝑉 has a one-dimensional subspace invariant under 𝑇 if and only if 𝑇 has an eigenvalue.",
          "zh": "设 𝑇 ∈ L(𝑉).称数 𝜆 ∈ F 为 𝑇 的特征值，若存在 𝑣 ∈ 𝑉 使得 𝑣 = ̸ 0 且 𝑇𝑣 = 𝜆𝑣. 在上面定义中，我们要求 𝑣 = ̸ 0，因为每 个标量 𝜆 ∈ F 都满足 𝑇<sup>0</sup> = 𝜆<sub>0</sub>. 上面的讨论表明，𝑉 有在 𝑇 下不变的一 维子空间，当且仅当 𝑇 有特征值."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). A number 𝜆 ∈ 𝐅 is called an eigenvalue of 𝑇 if there exists 𝑣 ∈ 𝑉 such that 𝑣 ≠ 0 and 𝑇𝑣 = 𝜆𝑣. In the definition above, we require that 𝑣 ≠ 0 because every scalar 𝜆 ∈ 𝐅 satisfies 𝑇0 = 𝜆0. The comments above show that 𝑉 has a one-dimensional subspace invariant under 𝑇 if and only if 𝑇 has an eigenvalue.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).称数 𝜆 ∈ F 为 𝑇 的特征值，若存在 𝑣 ∈ 𝑉 使得 𝑣 = ̸ 0 且 𝑇𝑣 = 𝜆𝑣. 在上面定义中，我们要求 𝑣 = ̸ 0，因为每 个标量 𝜆 ∈ F 都满足 𝑇0 = 𝜆0. 上面的讨论表明，𝑉 有在 𝑇 下不变的一 维子空间，当且仅当 𝑇 有特征值."
    },
    {
      "id": "5.7",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.7",
      "name_en": "equivalent conditions to be an eigenvalue",
      "name_zh": "成为特征值的等价条件",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose V is finite-dimensional, T ∈ L(V), and λ ∈ F. Then the following are equivalent.",
          "zh": "假设 V 是有限维的，T ∈ L(V)，且 λ ∈ F。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) λ is an eigenvalue of T.",
          "zh": "(a) λ 是 T 的特征值。"
        },
        {
          "t": "bullet",
          "en": "(b) T − λI is not injective.",
          "zh": "(b) T − λI 不是单射。"
        },
        {
          "t": "bullet",
          "en": "(c) T − λI is not surjective.",
          "zh": "(c) T − λI 不是满射。"
        },
        {
          "t": "bullet",
          "en": "(d) T − λI is not invertible.",
          "zh": "(d) T − λI 不可逆。"
        }
      ],
      "note": null,
      "statement_en": "Suppose V is finite-dimensional, T ∈ L(V), and λ ∈ F. Then the following are equivalent. (a) λ is an eigenvalue of T. (b) T − λI is not injective. (c) T − λI is not surjective. (d) T − λI is not invertible.",
      "statement_zh": "假设 V 是有限维的，T ∈ L(V)，且 λ ∈ F。那么下列条件等价。 (a) λ 是 T 的特征值。 (b) T − λI 不是单射。 (c) T − λI 不是满射。 (d) T − λI 不可逆。"
    },
    {
      "id": "5.8",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.8",
      "name_en": "eigenvector",
      "name_zh": "特征向量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose T ∈ L(V) and λ ∈ F is an eigenvalue of T. A vector v ∈ V is called an eigenvector of T corresponding to λ if v ≠ 0 and Tv = λv.",
          "zh": "假设 T ∈ L(V) 且 λ ∈ F 是 T 的特征值。称 v ∈ V 是 T 对应于 λ 的特征向量，如果 v ≠ 0 且 Tv = λv。"
        }
      ],
      "note": {
        "en": "In other words, a nonzero vector v ∈ V is an eigenvector of T if and only if Tv is a scalar multiple of v.",
        "zh": "换言之，非零向量 v ∈ V 是算子 T 的特征向量，当且仅当 Tv 是 v 的标量倍。"
      },
      "statement_en": "Suppose T ∈ L(V) and λ ∈ F is an eigenvalue of T. A vector v ∈ V is called an eigenvector of T corresponding to λ if v ≠ 0 and Tv = λv. In other words, a nonzero vector v ∈ V is an eigenvector of T if and only if Tv is a scalar multiple of v.",
      "statement_zh": "假设 T ∈ L(V) 且 λ ∈ F 是 T 的特征值。称 v ∈ V 是 T 对应于 λ 的特征向量，如果 v ≠ 0 且 Tv = λv。 换言之，非零向量 v ∈ V 是算子 T 的特征向量，当且仅当 Tv 是 v 的标量倍。"
    },
    {
      "id": "5.11",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.11",
      "name_en": "linearly independent eigenvectors",
      "name_zh": "线性无关的特征向量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). Then every list of eigenvectors of 𝑇 corresponding to distinct eigenvalues of 𝑇 is linearly independent.",
          "zh": "设 𝑇 ∈ L(𝑉).那么分别对应于 𝑇 的不同特征值的特征向量构成的每个组都线性无关."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). Then every list of eigenvectors of 𝑇 corresponding to distinct eigenvalues of 𝑇 is linearly independent.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).那么分别对应于 𝑇 的不同特征值的特征向量构成的每个组都线性无关."
    },
    {
      "id": "5.12",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.12",
      "name_en": "operator cannot have more eigenvalues than dimension of vector space Suppose",
      "name_zh": "算子的特征值个数不多于向量空间的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉 is finite-dimensional. Then each operator on 𝑉 has at most dim 𝑉 distinct eigenvalues.",
          "zh": "设 𝑉 是有限维的.那么 𝑉 上的每个算子最多有 dim 𝑉 个互异特征值."
        }
      ],
      "note": null,
      "statement_en": "𝑉 is finite-dimensional. Then each operator on 𝑉 has at most dim 𝑉 distinct eigenvalues.",
      "statement_zh": "设 𝑉 是有限维的.那么 𝑉 上的每个算子最多有 dim 𝑉 个互异特征值."
    },
    {
      "id": "5.13",
      "kind": "notation",
      "chapter": "ch5",
      "number": "5.13",
      "name_en": "𝑇<sup>𝑚</sup>",
      "name_zh": "𝑇 𝑚",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑚 is a positive integer. • 𝑇𝑚 ∈L(𝑉)isdefinedby𝑇𝑚 =𝑇⏟⋯𝑇. 𝑚 times • 𝑇0 is defined to be the identity operator 𝐼 on 𝑉. • If 𝑇 is invertible with inverse 𝑇−1, then 𝑇−𝑚 ∈ L(𝑉) is defined by 𝑇−𝑚 = (𝑇−1)𝑚.",
          "zh": "设 𝑇 ∈ L(𝑉)，𝑚 是正整数. 定义𝑇<sup>𝑚</sup> ∈ L(𝑉)为𝑇<sup>𝑚</sup> = 𝑇···𝑇. |{z} 𝑚个𝑇 定义 𝑇<sup>0</sup> 为 𝑉 上的恒等算子 𝐼. 若 𝑇 是可逆的，且其逆为 𝑇<sup>−1</sup>，那么 𝑇−𝑚 ∈ L(𝑉) 的定义是 𝑇−𝑚 = (𝑇<sup>−1</sup>)𝑚. 你应自行验证，若 𝑇 为算子，那么 𝑇<sup>𝑚</sup>𝑇<sup>𝑛</sup> = 𝑇<sup>𝑚</sup>+𝑛 且 (𝑇<sup>𝑚</sup>)𝑛 = 𝑇<sup>𝑚𝑛</sup>， 其中，若 𝑇 是可逆的，则 𝑚 和 𝑛 是任意整数;若 𝑇 不可逆，则 𝑚 和 𝑛 为非负整数. 定义了算子的幂，我们就可以定义什么是“将多项式作用于算子”了. 1 原文:because of the minimality of 𝑚，直译为“因为 𝑚 的最小性”，意即 𝑚 是满足“𝑇 对应于其互异特征值 𝜆<sub>1</sub>, …, 𝜆<sub>𝑚</sub> 的特征向量 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub> 线性相关”的最小值.后文通过得出更小的 𝑚 − 1 也满足此条件来推出矛盾. 设𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F) 是由下式给出的多项式:对所有 𝑧 ∈ F， 𝑝(𝑧) = 𝑎<sub>0</sub> + 𝑎<sub>1</sub>𝑧 + 𝑎<sub>2</sub>𝑧<sub>2</sub> + ⋯ + 𝑎<sub>𝑚</sub>𝑧<sub>𝑚</sub>. 那么 𝑝(𝑇) 是 𝑉 上的算子，由下式定义: 𝑝(𝑇) = 𝑎<sub>0</sub>𝐼+𝑎<sub>1</sub>𝑇+𝑎<sub>2</sub>𝑇<sup>2</sup> +···+𝑎<sub>𝑚</sub>𝑇<sup>𝑚</sup>. 我们把 𝑝 应用在算子上而不仅是 F 中的数上，给符号 𝑝 增添了一种新用法.我们的想法 是，要得到 𝑝(𝑇)，将 𝑝 的定义式中的 𝑧 替换成 𝑇 即可.注意，𝑝(𝑧) 中的常数项 𝑎<sub>0</sub> 变成了算子 𝑎<sub>0</sub>𝐼(这写法很合理:因为 𝑎<sub>0</sub> = 𝑎<sub>0</sub>𝑧<sub>0</sub>，所以我们应将 𝑎<sub>0</sub> 替换成 𝑎<sub>0</sub>𝑇<sup>0</sup>，也就是 𝑎<sub>0</sub>𝐼)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑚 is a positive integer. • 𝑇𝑚 ∈L(𝑉)isdefinedby𝑇𝑚 =𝑇⏟⋯𝑇. 𝑚 times • 𝑇0 is defined to be the identity operator 𝐼 on 𝑉. • If 𝑇 is invertible with inverse 𝑇−1, then 𝑇−𝑚 ∈ L(𝑉) is defined by 𝑇−𝑚 = (𝑇−1)𝑚.",
      "statement_zh": "设 𝑇 ∈ L(𝑉)，𝑚 是正整数. 定义𝑇𝑚 ∈ L(𝑉)为𝑇𝑚 = 𝑇···𝑇. |{z} 𝑚个𝑇 定义 𝑇0 为 𝑉 上的恒等算子 𝐼. 若 𝑇 是可逆的，且其逆为 𝑇−1，那么 𝑇−𝑚 ∈ L(𝑉) 的定义是 𝑇−𝑚 = (𝑇−1)𝑚. 你应自行验证，若 𝑇 为算子，那么 𝑇𝑚𝑇𝑛 = 𝑇𝑚+𝑛 且 (𝑇𝑚)𝑛 = 𝑇𝑚𝑛， 其中，若 𝑇 是可逆的，则 𝑚 和 𝑛 是任意整数;若 𝑇 不可逆，则 𝑚 和 𝑛 为非负整数. 定义了算子的幂，我们就可以定义什么是“将多项式作用于算子”了. 1 原文:because of the minimality of 𝑚，直译为“因为 𝑚 的最小性”，意即 𝑚 是满足“𝑇 对应于其互异特征值 𝜆1, …, 𝜆𝑚 的特征向量 𝑣1, …, 𝑣𝑚 线性相关”的最小值.后文通过得出更小的 𝑚 − 1 也满足此条件来推出矛盾. 设𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F) 是由下式给出的多项式:对所有 𝑧 ∈ F， 𝑝(𝑧) = 𝑎0 + 𝑎1𝑧 + 𝑎2𝑧2 + ⋯ + 𝑎𝑚𝑧𝑚. 那么 𝑝(𝑇) 是 𝑉 上的算子，由下式定义: 𝑝(𝑇) = 𝑎0𝐼+𝑎1𝑇+𝑎2𝑇2 +···+𝑎𝑚𝑇𝑚. 我们把 𝑝 应用在算子上而不仅是 F 中的数上，给符号 𝑝 增添了一种新用法.我们的想法 是，要得到 𝑝(𝑇)，将 𝑝 的定义式中的 𝑧 替换成 𝑇 即可.注意，𝑝(𝑧) 中的常数项 𝑎0 变成了算子 𝑎0𝐼(这写法很合理:因为 𝑎0 = 𝑎0𝑧0，所以我们应将 𝑎0 替换成 𝑎0𝑇0，也就是 𝑎0𝐼)."
    },
    {
      "id": "5.14",
      "kind": "notation",
      "chapter": "ch5",
      "number": "5.14",
      "name_en": "𝑝(𝑇)",
      "name_zh": "𝑝(𝑇)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑝 ∈ 𝒫(𝐅) is a polynomial given by 𝑝(𝑧) = 𝑎0 +𝑎1𝑧+𝑎2𝑧<sub>2</sub> +⋯+𝑎𝑚𝑧<sub>𝑚</sub> for all 𝑧 ∈ 𝐅. Then 𝑝(𝑇) is the operator on 𝑉 defined by 𝑝(𝑇)=𝑎0𝐼+𝑎1𝑇+𝑎2𝑇2 +⋯+𝑎𝑚𝑇𝑚. This is a new use of the symbol 𝑝 because we are applying 𝑝 to operators, not just elements of 𝐅. The idea here is that to evaluate 𝑝(𝑇), we simply replace 𝑧 with 𝑇 in the expression defining 𝑝. Note that the constant term 𝑎0 in 𝑝(𝑧) becomes the operator 𝑎0𝐼 (which is a reasonable choice because 𝑎0 = 𝑎0𝑧<sub>0</sub> and thus we should replace 𝑎0 with 𝑎0𝑇0, which equals 𝑎0𝐼).",
          "zh": "设𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F) 是由下式给出的多项式:对所有 𝑧 ∈ F， 𝑝(𝑧) = 𝑎0 + 𝑎1𝑧 + 𝑎2𝑧<sub>2</sub> + · · · + 𝑎𝑚𝑧<sub>𝑚</sub>. 那么 𝑝(𝑇) 是 𝑉 上的算子，由下式定义: 𝑝(𝑇)=𝑎0𝐼+𝑎1𝑇+𝑎2𝑇2 +···+𝑎𝑚𝑇𝑚. ♣ 我们把 𝑝 应用在算子上而不仅是 F 中的数上，给符号 𝑝 增添了一种新用法.我们的想法 是，要得到 𝑝(𝑇)，将 𝑝 的定义式中的 𝑧 替换成 𝑇 即可.注意，𝑝(𝑧) 中的常数项 𝑎0 变成了算子 𝑎0𝐼(这写法很合理:因为 𝑎0 = 𝑎0𝑧<sub>0</sub>，所以我们应将 𝑎0 替换成 𝑎0𝑇0，也就是 𝑎0𝐼)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑝 ∈ 𝒫(𝐅) is a polynomial given by 𝑝(𝑧) = 𝑎0 +𝑎1𝑧+𝑎2𝑧2 +⋯+𝑎𝑚𝑧𝑚 for all 𝑧 ∈ 𝐅. Then 𝑝(𝑇) is the operator on 𝑉 defined by 𝑝(𝑇)=𝑎0𝐼+𝑎1𝑇+𝑎2𝑇2 +⋯+𝑎𝑚𝑇𝑚. This is a new use of the symbol 𝑝 because we are applying 𝑝 to operators, not just elements of 𝐅. The idea here is that to evaluate 𝑝(𝑇), we simply replace 𝑧 with 𝑇 in the expression defining 𝑝. Note that the constant term 𝑎0 in 𝑝(𝑧) becomes the operator 𝑎0𝐼 (which is a reasonable choice because 𝑎0 = 𝑎0𝑧0 and thus we should replace 𝑎0 with 𝑎0𝑇0, which equals 𝑎0𝐼).",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F) 是由下式给出的多项式:对所有 𝑧 ∈ F， 𝑝(𝑧) = 𝑎0 + 𝑎1𝑧 + 𝑎2𝑧2 + · · · + 𝑎𝑚𝑧𝑚. 那么 𝑝(𝑇) 是 𝑉 上的算子，由下式定义: 𝑝(𝑇)=𝑎0𝐼+𝑎1𝑇+𝑎2𝑇2 +···+𝑎𝑚𝑇𝑚. ♣ 我们把 𝑝 应用在算子上而不仅是 F 中的数上，给符号 𝑝 增添了一种新用法.我们的想法 是，要得到 𝑝(𝑇)，将 𝑝 的定义式中的 𝑧 替换成 𝑇 即可.注意，𝑝(𝑧) 中的常数项 𝑎0 变成了算子 𝑎0𝐼(这写法很合理:因为 𝑎0 = 𝑎0𝑧0，所以我们应将 𝑎0 替换成 𝑎0𝑇0，也就是 𝑎0𝐼)."
    },
    {
      "id": "5.16",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.16",
      "name_en": "product of polynomials",
      "name_zh": "多项式的乘积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑝, 𝑞 ∈ 𝒫(𝐅), then 𝑝𝑞 ∈ 𝒫(𝐅) is the polynomial defined by (𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧) for all 𝑧 ∈ 𝐅. The order does not matter in taking products of polynomials of a single operator, as shown by (b)",
          "zh": "若 𝑝, 𝑞 ∈ P(F)，那么 𝑝𝑞 ∈ P(F) 是按下式定义的多项式:对所有 𝑧 ∈ F， (𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧). 如下面结论 (b) 所示，对单个算子的多项式取乘积时，顺序无关紧要."
        }
      ],
      "note": null,
      "statement_en": "If 𝑝, 𝑞 ∈ 𝒫(𝐅), then 𝑝𝑞 ∈ 𝒫(𝐅) is the polynomial defined by (𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧) for all 𝑧 ∈ 𝐅. The order does not matter in taking products of polynomials of a single operator, as shown by (b)",
      "statement_zh": "若 𝑝, 𝑞 ∈ P(F)，那么 𝑝𝑞 ∈ P(F) 是按下式定义的多项式:对所有 𝑧 ∈ F， (𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧). 如下面结论 (b) 所示，对单个算子的多项式取乘积时，顺序无关紧要."
    },
    {
      "id": "5.17",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.17",
      "name_en": "multiplicative properties Suppose",
      "name_zh": "乘积性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑝, 𝑞 ∈ 𝒫(𝐅) and 𝑇 ∈ L(𝑉). Then (a) (𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇); (b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇).",
          "zh": "设 𝑝, 𝑞 ∈ P(F) 且 𝑇 ∈ L(𝑉).那么: (a) (𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇); (b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇). 不太正式的证明:利用分配性质展开多 项式之乘积时，跟符号用 𝑧 还是 𝑇 没有 关系."
        }
      ],
      "note": null,
      "statement_en": "𝑝, 𝑞 ∈ 𝒫(𝐅) and 𝑇 ∈ L(𝑉). Then (a) (𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇); (b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇).",
      "statement_zh": "设 𝑝, 𝑞 ∈ P(F) 且 𝑇 ∈ L(𝑉).那么: (a) (𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇); (b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇). 不太正式的证明:利用分配性质展开多 项式之乘积时，跟符号用 𝑧 还是 𝑇 没有 关系."
    },
    {
      "id": "5.18",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.18",
      "name_en": "null space and range of",
      "name_zh": "𝑝(𝑇) 的零空间和值域在 𝑇 下是不变的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑝(𝑇) are invariant under 𝑇 Suppose 𝑇 ∈ L(𝑉) and 𝑝 ∈ 𝒫(𝐅). Then null 𝑝(𝑇) and range 𝑝(𝑇) are invariant under 𝑇.",
          "zh": "设 𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F).那么 null 𝑝(𝑇) 和 range 𝑝(𝑇) 在 𝑇 下不变."
        }
      ],
      "note": null,
      "statement_en": "𝑝(𝑇) are invariant under 𝑇 Suppose 𝑇 ∈ L(𝑉) and 𝑝 ∈ 𝒫(𝐅). Then null 𝑝(𝑇) and range 𝑝(𝑇) are invariant under 𝑇.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F).那么 null 𝑝(𝑇) 和 range 𝑝(𝑇) 在 𝑇 下不变."
    },
    {
      "id": "5.19",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.19",
      "name_en": "and Exercise 29 in Section 5B",
      "name_zh": "与 5B 节的习题 29.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": ". The previous example noted that null 𝑇 and range 𝑇 are invariant under 𝑇. However, these subspaces do not necessarily provide easy answers to the question above about the existence of invariant subspaces other than {0} and 𝑉, because null 𝑇 may equal {0} and range 𝑇 may equal 𝑉 (this happens when 𝑇 is invertible). We will return later to a deeper study of invariant subspaces. Now we turn to an investigation of the simplest possible nontrivial invariant subspaces—invariant subspaces of dimension one. Take any 𝑣 ∈ 𝑉 with 𝑣 = ̸ 0 and let 𝑈 equal the set of all scalar multiples of 𝑣: 𝑈 = {𝜆𝑣 ∶ 𝜆 ∈ 𝐅} = span(𝑣). Then 𝑈 is a one-dimensional subspace of 𝑉 (and every one-dimensional subspace of 𝑉 is of this form for an appropriate choice of 𝑣). If 𝑈 is invariant under an operator 𝑇 ∈ L(𝑉), then 𝑇𝑣 ∈ 𝑈, and hence there is a scalar 𝜆 ∈ 𝐅 such that 𝑇𝑣 = 𝜆𝑣. Conversely, if 𝑇𝑣 = 𝜆𝑣 for some 𝜆 ∈ 𝐅, then span(𝑣) is a one-dimensional subspace of 𝑉 invariant under 𝑇. The equation 𝑇𝑣 = 𝜆𝑣, which we have just seen is intimately connected with one-dimensional invariant subspaces, is important enough that the scalars 𝜆 and vectors 𝑣 satisfying it are given special names.",
          "zh": "上例中提到，null 𝑇 和 range 𝑇 在 𝑇 下是不变的.然而，不能仅凭这两个不变子空间存在， 就轻率地回答上述有关除了 {0} 和 𝑉 以外的不变子空间存在性的问题，因为有可能 null 𝑇 等于 {0} 而 range 𝑇 等于 𝑉 (𝑇 可逆时就会出现这种情况). 5A 不变子空间 113 我们稍后再回过头来更深入地研究不变子空间.现在我们转而研究最简单的非平凡不变 子空间——维数为 1 的不变子空间. 任取 𝑣 ∈ 𝑉 且 𝑣 = ̸ 0，并令 𝑈 等于 𝑣 的所有标量倍构成的集合: 𝑈 = {𝜆𝑣 : 𝜆 ∈ F} = span(𝑣). 那么，𝑈 是 𝑉 的一维子空间(且只要适当选取 𝑣，𝑉 的每个一维子空间都可写成这种形式).若 𝑈 在算子 𝑇 ∈ L(𝑉) 下是不变的，那么 𝑇𝑣 ∈ 𝑈，因此存在标量 𝜆 ∈ F 使得 𝑇𝑣 = 𝜆𝑣. 反之，若对某 𝜆 ∈ F 有 𝑇𝑣 = 𝜆𝑣，那么 span(𝑣) 是 𝑉 的在 𝑇 下不变的一维子空间. 我们刚才看到，等式 𝑇 𝑣 = 𝜆𝑣 与一维不变子空间紧密联系在一起.这个等式很重要，因此 满足该式的标量 𝜆 和向量 𝑣 都有特别的名称."
        }
      ],
      "note": null,
      "statement_en": ". The previous example noted that null 𝑇 and range 𝑇 are invariant under 𝑇. However, these subspaces do not necessarily provide easy answers to the question above about the existence of invariant subspaces other than {0} and 𝑉, because null 𝑇 may equal {0} and range 𝑇 may equal 𝑉 (this happens when 𝑇 is invertible). We will return later to a deeper study of invariant subspaces. Now we turn to an investigation of the simplest possible nontrivial invariant subspaces—invariant subspaces of dimension one. Take any 𝑣 ∈ 𝑉 with 𝑣 = ̸ 0 and let 𝑈 equal the set of all scalar multiples of 𝑣: 𝑈 = {𝜆𝑣 ∶ 𝜆 ∈ 𝐅} = span(𝑣). Then 𝑈 is a one-dimensional subspace of 𝑉 (and every one-dimensional subspace of 𝑉 is of this form for an appropriate choice of 𝑣). If 𝑈 is invariant under an operator 𝑇 ∈ L(𝑉), then 𝑇𝑣 ∈ 𝑈, and hence there is a scalar 𝜆 ∈ 𝐅 such that 𝑇𝑣 = 𝜆𝑣. Conversely, if 𝑇𝑣 = 𝜆𝑣 for some 𝜆 ∈ 𝐅, then span(𝑣) is a one-dimensional subspace of 𝑉 invariant under 𝑇. The equation 𝑇𝑣 = 𝜆𝑣, which we have just seen is intimately connected with one-dimensional invariant subspaces, is important enough that the scalars 𝜆 and vectors 𝑣 satisfying it are given special names.",
      "statement_zh": "上例中提到，null 𝑇 和 range 𝑇 在 𝑇 下是不变的.然而，不能仅凭这两个不变子空间存在， 就轻率地回答上述有关除了 {0} 和 𝑉 以外的不变子空间存在性的问题，因为有可能 null 𝑇 等于 {0} 而 range 𝑇 等于 𝑉 (𝑇 可逆时就会出现这种情况). 5A 不变子空间 113 我们稍后再回过头来更深入地研究不变子空间.现在我们转而研究最简单的非平凡不变 子空间——维数为 1 的不变子空间. 任取 𝑣 ∈ 𝑉 且 𝑣 = ̸ 0，并令 𝑈 等于 𝑣 的所有标量倍构成的集合: 𝑈 = {𝜆𝑣 : 𝜆 ∈ F} = span(𝑣). 那么，𝑈 是 𝑉 的一维子空间(且只要适当选取 𝑣，𝑉 的每个一维子空间都可写成这种形式).若 𝑈 在算子 𝑇 ∈ L(𝑉) 下是不变的，那么 𝑇𝑣 ∈ 𝑈，因此存在标量 𝜆 ∈ F 使得 𝑇𝑣 = 𝜆𝑣. 反之，若对某 𝜆 ∈ F 有 𝑇𝑣 = 𝜆𝑣，那么 span(𝑣) 是 𝑉 的在 𝑇 下不变的一维子空间. 我们刚才看到，等式 𝑇 𝑣 = 𝜆𝑣 与一维不变子空间紧密联系在一起.这个等式很重要，因此 满足该式的标量 𝜆 和向量 𝑣 都有特别的名称."
    },
    {
      "id": "5.21",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.21",
      "name_en": "monic polynomial",
      "name_zh": "首一多项式(monic polynomial) 首一多项式是最高次项系数等于 1 的多项式.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A monic polynomial is a polynomial whose highest-degree coefficient equals 1. For example, the polynomial 2 + 9𝑧<sub>2</sub> + 𝑧<sub>7</sub> is a monic polynomial of degree 7.",
          "zh": "例如，多项式 2 + 9𝑧<sub>2</sub> + 𝑧<sub>7</sub> 是次数为 7 的首一多项式. 的线性组合.于是存在标量𝑐<sub>0</sub>,𝑐<sub>1</sub>,𝑐<sub>2</sub>,…,𝑐<sub>𝑚</sub>−1 ∈ F 使得 𝑐<sub>0</sub>𝑢 + 𝑐<sub>1</sub>𝑇𝑢 + ⋯ + 𝑐<sub>𝑚</sub>−1𝑇<sup>𝑚</sup>−1𝑢 + 𝑇<sup>𝑚</sup>𝑢 = 0. 定义首一多项式 𝑞 ∈ P<sub>𝑚</sub>(F) 为 𝑞(𝑧) = 𝑐<sub>0</sub> +𝑐<sub>1</sub>𝑧+···+𝑐<sub>𝑚</sub>−1𝑧<sub>𝑚</sub>−1 +𝑧<sub>𝑚</sub>. 那么式 (5.23) 就表明 𝑞(𝑇)𝑢 = 0. 若 𝑘 为非负整数，那么 (5.23) 5B 最小多项式 121"
        }
      ],
      "note": null,
      "statement_en": "A monic polynomial is a polynomial whose highest-degree coefficient equals 1. For example, the polynomial 2 + 9𝑧2 + 𝑧7 is a monic polynomial of degree 7.",
      "statement_zh": "例如，多项式 2 + 9𝑧2 + 𝑧7 是次数为 7 的首一多项式. 的线性组合.于是存在标量𝑐0,𝑐1,𝑐2,…,𝑐𝑚−1 ∈ F 使得 𝑐0𝑢 + 𝑐1𝑇𝑢 + ⋯ + 𝑐𝑚−1𝑇𝑚−1𝑢 + 𝑇𝑚𝑢 = 0. 定义首一多项式 𝑞 ∈ P𝑚(F) 为 𝑞(𝑧) = 𝑐0 +𝑐1𝑧+···+𝑐𝑚−1𝑧𝑚−1 +𝑧𝑚. 那么式 (5.23) 就表明 𝑞(𝑇)𝑢 = 0. 若 𝑘 为非负整数，那么 (5.23) 5B 最小多项式 121"
    },
    {
      "id": "5.22",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.22",
      "name_en": "existence, uniqueness, and degree of minimal polynomial",
      "name_zh": "最小多项式的存在性、唯一性和次数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉). Then there is a unique monic polynomial 𝑝 ∈ 𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0. Furthermore, deg𝑝 ≤ dim𝑉.",
          "zh": "设 𝑉 是有限维的，𝑇 ∈ L(𝑉).那么存在唯一的次数最小的首一多项式 𝑝 ∈ P(F)，使得 𝑝(𝑇) = 0.此外，deg 𝑝 ≤ dim 𝑉."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉). Then there is a unique monic polynomial 𝑝 ∈ 𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0. Furthermore, deg𝑝 ≤ dim𝑉.",
      "statement_zh": "设 𝑉 是有限维的，𝑇 ∈ L(𝑉).那么存在唯一的次数最小的首一多项式 𝑝 ∈ P(F)，使得 𝑝(𝑇) = 0.此外，deg 𝑝 ≤ dim 𝑉."
    },
    {
      "id": "5.24",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.24",
      "name_en": "minimal polynomial",
      "name_zh": "最小多项式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉). Then the minimal polynomial of 𝑇 is the unique monic polynomial 𝑝 ∈ 𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0. To compute the minimal polynomial of an operator 𝑇 ∈ L(𝑉), we need to find the smallest positive integer 𝑚 such that the equation 𝑐0𝐼+𝑐1𝑇+⋯+𝑐𝑚−1𝑇𝑚−1 =−𝑇𝑚 has a solution 𝑐0,𝑐1,...,𝑐𝑚−1 ∈ 𝐅. If we pick a basis of 𝑉 and replace 𝑇 in the equation above with the matrix of 𝑇, then the equation above can be thought of as a system of (dim 𝑉)2 linear equations in the 𝑚 unknowns 𝑐0, 𝑐1,..., 𝑐𝑚−1 ∈ 𝐅. Gaussian elimination or another fast method of solving systems of linear equations can tell us whether a solution exists, testing successive values 𝑚 = 1, 2,... until a solution exists. By 5.22, a solution exists for some smallest positive integer 𝑚 ≤ dim 𝑉. The minimal polynomial of 𝑇 is then 𝑐0 + 𝑐1𝑧 + ⋯ + 𝑐𝑚−1𝑧<sub>𝑚</sub>−1 + 𝑧<sub>𝑚</sub>. Even faster (usually), pick 𝑣 ∈ 𝑉 with 𝑣 ≠ 0 and consider the equation 5.25 𝑐0𝑣 + 𝑐1𝑇𝑣 + ⋯ + 𝑐dim𝑉−1𝑇dim𝑉−1𝑣 = −𝑇dim𝑉𝑣. Use a basis of 𝑉 to convert the equation above to a system of dim𝑉 linear equations in dim 𝑉 unknowns 𝑐0, 𝑐1,..., 𝑐dim 𝑉−1. If this system of equations has a unique solution 𝑐0, 𝑐1",
          "zh": "设 𝑉 是有限维的，且 𝑇 ∈ L(𝑉).那么 𝑇 的最小多项式是唯一使得 𝑝(𝑇) = 0 成立的次数 最小的首一多项式 𝑝 ∈ P(F). dimrange 𝑞(𝑇) = dim 𝑉 −dimnull 𝑞(𝑇) ≤ dim 𝑉 −𝑚. 为计算一个算子 𝑇 ∈ L(𝑉) 的最小多项式，我们需要求出使得 𝑐<sub>0</sub>𝐼+𝑐<sub>1</sub>𝑇+···+𝑐<sub>𝑚</sub>−1𝑇<sup>𝑚</sup>−1 = −𝑇<sup>𝑚</sup> 有解 𝑐<sub>0</sub>, 𝑐<sub>1</sub>, …, 𝑐<sub>𝑚</sub>−1 ∈ F 的最小正整数 𝑚.如果我们选取 𝑉 的一个基，再将上述方程中的 𝑇 换成 𝑇 的矩阵，那么可以将上述方程看成有 (dim 𝑉)2 个方程、𝑚 个未知数 𝑐<sub>0</sub>, 𝑐<sub>1</sub>, …, 𝑐<sub>𝑚</sub>−1 ∈ F 的线性方程组.要知道解是否存在，我们用高斯消元法或者线性方程组的其他快速解法，对 𝑚 = 1, 2, … 诸值依次作检验，直到发现有解即可.由 5.22，对于某个最小的正整数 𝑚 ≤ dim 𝑉 ， 上述方程组有解.那么 𝑇 的最小多项式就是 𝑐<sub>0</sub> + 𝑐<sub>1</sub>𝑧 + ⋯ + 𝑐<sub>𝑚</sub>−1𝑧<sub>𝑚</sub>−1 + 𝑧<sub>𝑚</sub>. (通常)更快的做法是，选取 𝑣 ∈ 𝑉(𝑣 = ̸ 0)并考虑方程 𝑐<sub>0</sub>𝑣+𝑐<sub>1</sub>𝑇𝑣+···+𝑐 dim 𝑉−1𝑇 dim 𝑉−1𝑣 = −𝑇 dim 𝑉𝑣. (5.25) 利用 𝑉 的一个基，将上述方程转化为有 dim 𝑉 个方程、dim 𝑉 个未知数 𝑐<sub>0</sub>, 𝑐<sub>1</sub>, …, 𝑐 dim 𝑉 −1 的线 性方程组.若该方程组有唯一解 𝑐<sub>0</sub>, 𝑐<sub>1</sub>, …, 𝑐 dim 𝑉 −1(这是最常出现的情况)，那么标量 𝑐<sub>0</sub>, 𝑐<sub>1</sub>, …, 𝑐 dim 𝑉−1,1就是𝑇 的最小多项式的各系数(因为.22指出最小多项式的次数最多是 dim 𝑉). 考虑 R<sup>4</sup> 上的算子(可看成关于标准基的 此处的百分比估计值基于对几百万个随机 4×4 矩阵)，运用上段方法并取 𝑣 = (1, 0, 0, 0). 的矩阵的实测. 对于由区间 [−10, 10] 上的整数构成的 4 × 4 矩阵，此法适用于其中超过 99.8% 的矩阵;而对于 由区间 [−100, 100] 上的整数构成的 4 × 4 矩阵，此法适用于其中超过 99.999% 的矩阵. 下例展示了上面讨论的快速方法."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉). Then the minimal polynomial of 𝑇 is the unique monic polynomial 𝑝 ∈ 𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0. To compute the minimal polynomial of an operator 𝑇 ∈ L(𝑉), we need to find the smallest positive integer 𝑚 such that the equation 𝑐0𝐼+𝑐1𝑇+⋯+𝑐𝑚−1𝑇𝑚−1 =−𝑇𝑚 has a solution 𝑐0,𝑐1,...,𝑐𝑚−1 ∈ 𝐅. If we pick a basis of 𝑉 and replace 𝑇 in the equation above with the matrix of 𝑇, then the equation above can be thought of as a system of (dim 𝑉)2 linear equations in the 𝑚 unknowns 𝑐0, 𝑐1,..., 𝑐𝑚−1 ∈ 𝐅. Gaussian elimination or another fast method of solving systems of linear equations can tell us whether a solution exists, testing successive values 𝑚 = 1, 2,... until a solution exists. By 5.22, a solution exists for some smallest positive integer 𝑚 ≤ dim 𝑉. The minimal polynomial of 𝑇 is then 𝑐0 + 𝑐1𝑧 + ⋯ + 𝑐𝑚−1𝑧𝑚−1 + 𝑧𝑚. Even faster (usually), pick 𝑣 ∈ 𝑉 with 𝑣 ≠ 0 and consider the equation 5.25 𝑐0𝑣 + 𝑐1𝑇𝑣 + ⋯ + 𝑐dim𝑉−1𝑇dim𝑉−1𝑣 = −𝑇dim𝑉𝑣. Use a basis of 𝑉 to convert the equation above to a system of dim𝑉 linear equations in dim 𝑉 unknowns 𝑐0, 𝑐1,..., 𝑐dim 𝑉−1. If this system of equations has a unique solution 𝑐0, 𝑐1",
      "statement_zh": "设 𝑉 是有限维的，且 𝑇 ∈ L(𝑉).那么 𝑇 的最小多项式是唯一使得 𝑝(𝑇) = 0 成立的次数 最小的首一多项式 𝑝 ∈ P(F). dimrange 𝑞(𝑇) = dim 𝑉 −dimnull 𝑞(𝑇) ≤ dim 𝑉 −𝑚. 为计算一个算子 𝑇 ∈ L(𝑉) 的最小多项式，我们需要求出使得 𝑐0𝐼+𝑐1𝑇+···+𝑐𝑚−1𝑇𝑚−1 = −𝑇𝑚 有解 𝑐0, 𝑐1, …, 𝑐𝑚−1 ∈ F 的最小正整数 𝑚.如果我们选取 𝑉 的一个基，再将上述方程中的 𝑇 换成 𝑇 的矩阵，那么可以将上述方程看成有 (dim 𝑉)2 个方程、𝑚 个未知数 𝑐0, 𝑐1, …, 𝑐𝑚−1 ∈ F 的线性方程组.要知道解是否存在，我们用高斯消元法或者线性方程组的其他快速解法，对 𝑚 = 1, 2, … 诸值依次作检验，直到发现有解即可.由 5.22，对于某个最小的正整数 𝑚 ≤ dim 𝑉 ， 上述方程组有解.那么 𝑇 的最小多项式就是 𝑐0 + 𝑐1𝑧 + ⋯ + 𝑐𝑚−1𝑧𝑚−1 + 𝑧𝑚. (通常)更快的做法是，选取 𝑣 ∈ 𝑉(𝑣 = ̸ 0)并考虑方程 𝑐0𝑣+𝑐1𝑇𝑣+···+𝑐 dim 𝑉−1𝑇 dim 𝑉−1𝑣 = −𝑇 dim 𝑉𝑣. (5.25) 利用 𝑉 的一个基，将上述方程转化为有 dim 𝑉 个方程、dim 𝑉 个未知数 𝑐0, 𝑐1, …, 𝑐 dim 𝑉 −1 的线 性方程组.若该方程组有唯一解 𝑐0, 𝑐1, …, 𝑐 dim 𝑉 −1(这是最常出现的情况)，那么标量 𝑐0, 𝑐1, …, 𝑐 dim 𝑉−1,1就是𝑇 的最小多项式的各系数(因为.22指出最小多项式的次数最多是 dim 𝑉). 考虑 R4 上的算子(可看成关于标准基的 此处的百分比估计值基于对几百万个随机 4×4 矩阵)，运用上段方法并取 𝑣 = (1, 0, 0, 0). 的矩阵的实测. 对于由区间 [−10, 10] 上的整数构成的 4 × 4 矩阵，此法适用于其中超过 99.8% 的矩阵;而对于 由区间 [−100, 100] 上的整数构成的 4 × 4 矩阵，此法适用于其中超过 99.999% 的矩阵. 下例展示了上面讨论的快速方法."
    },
    {
      "id": "5.27",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.27",
      "name_en": "eigenvalues are the zeros of the minimal polynomial Suppose",
      "name_zh": "特征值即最小多项式的零点",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose V is finite-dimensional and T ∈ L(V).",
          "zh": "假设 V 是有限维的且 T ∈ L(V)。"
        },
        {
          "t": "bullet",
          "en": "(a) The zeros of the minimal polynomial of T are the eigenvalues of T.",
          "zh": "(a) T 的最小多项式的零点就是 T 的特征值。"
        },
        {
          "t": "bullet",
          "en": "(b) If V is a complex vector space, then the minimal polynomial of T has degree at most dim V.",
          "zh": "(b) 如果 V 是复向量空间，那么 T 的最小多项式的次数不超过 dim V。"
        }
      ],
      "note": null,
      "statement_en": "Suppose V is finite-dimensional and T ∈ L(V). (a) The zeros of the minimal polynomial of T are the eigenvalues of T. (b) If V is a complex vector space, then the minimal polynomial of T has degree at most dim V.",
      "statement_zh": "假设 V 是有限维的且 T ∈ L(V)。 (a) T 的最小多项式的零点就是 T 的特征值。 (b) 如果 V 是复向量空间，那么 T 的最小多项式的次数不超过 dim V。"
    },
    {
      "id": "5.30",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.30",
      "name_en": "becomes the equation",
      "name_zh": "becomes the equation",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑞 = 𝑝<sub>𝑠</sub>. Hence 𝑞 is a polynomial multiple of 𝑝, as desired. To prove the other direction, now suppose 𝑞 is a polynomial multiple of 𝑝. Thus there exists a polynomial 𝑠 ∈ 𝒫(𝐅) such that 𝑞 = 𝑝<sub>𝑠</sub>. We have 𝑞(𝑇) = 𝑝(𝑇)𝑠(𝑇) = 0 𝑠(𝑇) = 0, as desired.",
          "zh": "becomes the equation"
        }
      ],
      "note": {
        "en": "The next result is a nice consequence of the result above.",
        "zh": ""
      },
      "statement_en": "𝑞 = 𝑝𝑠. Hence 𝑞 is a polynomial multiple of 𝑝, as desired. To prove the other direction, now suppose 𝑞 is a polynomial multiple of 𝑝. Thus there exists a polynomial 𝑠 ∈ 𝒫(𝐅) such that 𝑞 = 𝑝𝑠. We have 𝑞(𝑇) = 𝑝(𝑇)𝑠(𝑇) = 0 𝑠(𝑇) = 0, as desired. The next result is a nice consequence of the result above.",
      "statement_zh": "becomes the equation"
    },
    {
      "id": "5.31",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.31",
      "name_en": "minimal polynomial of a restriction operator",
      "name_zh": "受限算子的最小多项式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ L(𝑉), and 𝑈 is a subspace of 𝑉 that is invariant under 𝑇. Then the minimal polynomial of 𝑇 is a polynomial multiple of the minimal polynomial of 𝑇|𝑈.",
          "zh": "设 𝑉 是有限维的，𝑇 ∈ L(𝑉)，且 𝑈 是 𝑉 的在 𝑇 下不变的子空间.那么 𝑇 的最小多项式 是𝑇|𝑈 的最小多项式的多项式倍."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ L(𝑉), and 𝑈 is a subspace of 𝑉 that is invariant under 𝑇. Then the minimal polynomial of 𝑇 is a polynomial multiple of the minimal polynomial of 𝑇|𝑈.",
      "statement_zh": "设 𝑉 是有限维的，𝑇 ∈ L(𝑉)，且 𝑈 是 𝑉 的在 𝑇 下不变的子空间.那么 𝑇 的最小多项式 是𝑇|𝑈 的最小多项式的多项式倍."
    },
    {
      "id": "5.32",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.32",
      "name_en": "𝑇 not invertible ⟺ constant term of minimal polynomial of 𝑇 is 0",
      "name_zh": "𝑇 不可逆 ⇐⇒ 𝑇 的最小多项式的常数项为 0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉). Then 𝑇 is not invertible if and only if the constant term of the minimal polynomial of 𝑇 is 0.",
          "zh": "设 𝑉 是有限维的且 𝑇 ∈ L(𝑉).那么 𝑇 不可逆，当且仅当 𝑇 的最小多项式的常数项为 0."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉). Then 𝑇 is not invertible if and only if the constant term of the minimal polynomial of 𝑇 is 0.",
      "statement_zh": "设 𝑉 是有限维的且 𝑇 ∈ L(𝑉).那么 𝑇 不可逆，当且仅当 𝑇 的最小多项式的常数项为 0."
    },
    {
      "id": "5.33",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.33",
      "name_en": "even-dimensional null space",
      "name_zh": "偶数维的零空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐑 and 𝑉 is finite-dimensional. Suppose also that 𝑇 ∈ L(𝑉) and 𝑏,𝑐 ∈ 𝐑 with 𝑏2 < 4𝑐. Then dimnull(𝑇2 + 𝑏𝑇 + 𝑐𝐼) is an even number.",
          "zh": "设 F = R 且𝑉 是有限维的，并设𝑇 ∈ L(𝑉)，𝑏,𝑐 ∈ R 使得𝑏<sub>2</sub> &lt; 4𝑐.那么 dimnull(𝑇<sup>2</sup>+𝑏𝑇+𝑐𝐼) 是偶数."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐑 and 𝑉 is finite-dimensional. Suppose also that 𝑇 ∈ L(𝑉) and 𝑏,𝑐 ∈ 𝐑 with 𝑏2 < 4𝑐. Then dimnull(𝑇2 + 𝑏𝑇 + 𝑐𝐼) is an even number.",
      "statement_zh": "设 F = R 且𝑉 是有限维的，并设𝑇 ∈ L(𝑉)，𝑏,𝑐 ∈ R 使得𝑏2 &lt; 4𝑐.那么 dimnull(𝑇2+𝑏𝑇+𝑐𝐼) 是偶数."
    },
    {
      "id": "5.34",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.34",
      "name_en": "operators on odd-dimensional vector spaces have eigenvalues",
      "name_zh": "奇数维向量空间上的算子总有特征值",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "or space has an eigenvalue.",
          "zh": "奇数维向量空间上的每个算子都有特征值."
        }
      ],
      "note": null,
      "statement_en": "or space has an eigenvalue.",
      "statement_zh": "奇数维向量空间上的每个算子都有特征值."
    },
    {
      "id": "5.35",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.35",
      "name_en": "matrix of an operator, M(𝑇)",
      "name_zh": "算子的矩阵(matrix of an operator)、M",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). The matrix of 𝑇 with respect to a basis 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> of 𝑉 is the 𝑛-by-𝑛 matrix ⎛⎜ 𝐴 1, 1 ⋯ 𝐴 1, 𝑛 ⎞⎟ M(𝑇)=⎜ ⋮ ⋮ ⎟ ⎝ 𝐴𝑛,1 ⋯ 𝐴𝑛,𝑛 ⎠ whose entries 𝐴𝑗,𝑘 are defined by 𝑇𝑣<sub>𝑘</sub> = 𝐴1,𝑘𝑣<sub>1</sub> + ⋯ + 𝐴𝑛,𝑘𝑣<sub>𝑛</sub>. The notation M(𝑇, (𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>)) is used if the basis is not clear from the context. Operators have square matrices (meaning that the number of rows equals the number of columns), rather than the more general rectangular matrices that we considered earlier for linear maps. If 𝑇 is an operator on 𝐅<sup>𝑛</sup> and no ba- sis is specified, assume that the basis in question is the standard one (where the 𝑘th basis vector is 1 in the 𝑘th slot and 0 in all other slots). You can then think of the 𝑘th column of M(𝑇) as 𝑇 applied to the 𝑘th basis vector, where we identify 𝑛-by-1 column vectors with elements of 𝐅<sup>𝑛</sup>.",
          "zh": "5C 上三角矩阵 129 在 阵依赖于这两个向量空间的基的选取.我们现在研究将一向量空间映射至自身的算 子，需要着重考虑的就是仅用一个基来描述它. ©𝐴1,1 ···𝐴1,𝑛 a M(𝑇) = ­.. ®， ­® «𝐴𝑛,1 ···𝐴𝑛,𝑛¬ 其中的元素 𝐴𝑗,𝑘 定义为 若根据上下文无法明确看出选取哪个基，就用 M\u0000𝑇,(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001 这个记号. 𝑇𝑣<sub>𝑘</sub> = 𝐴1,𝑘𝑣<sub>1</sub>+···+𝐴𝑛,𝑘𝑣<sub>𝑛</sub>. 算子的矩阵是方阵(其行数等于列数)，与前面我们讨论的一般线性映射的长方形矩阵不 同. 若𝑇 是 F<sup>𝑛</sup> 上的算子，且未明确基的选取， 矩阵 M(𝑇) 的第 𝑘 列，是由将 𝑇𝑣<sub>𝑘</sub> 写成基 那么就假定所取的基是标准基(其中第 𝑘 个 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 的线性组合时所用的系数构成的. 基向量除第 𝑘 个坐标为 1 外，其余坐标均为 0).此时你可以认为 M (𝑇) 的第 𝑘 列是将 𝑇 作用 于第 𝑘 个基向量所得的结果(这里把 F<sup>𝑛</sup> 中的元素与 𝑛 × 1 列向量等同起来看)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). The matrix of 𝑇 with respect to a basis 𝑣1,..., 𝑣𝑛 of 𝑉 is the 𝑛-by-𝑛 matrix ⎛⎜ 𝐴 1, 1 ⋯ 𝐴 1, 𝑛 ⎞⎟ M(𝑇)=⎜ ⋮ ⋮ ⎟ ⎝ 𝐴𝑛,1 ⋯ 𝐴𝑛,𝑛 ⎠ whose entries 𝐴𝑗,𝑘 are defined by 𝑇𝑣𝑘 = 𝐴1,𝑘𝑣1 + ⋯ + 𝐴𝑛,𝑘𝑣𝑛. The notation M(𝑇, (𝑣1,..., 𝑣𝑛)) is used if the basis is not clear from the context. Operators have square matrices (meaning that the number of rows equals the number of columns), rather than the more general rectangular matrices that we considered earlier for linear maps. If 𝑇 is an operator on 𝐅𝑛 and no ba- sis is specified, assume that the basis in question is the standard one (where the 𝑘th basis vector is 1 in the 𝑘th slot and 0 in all other slots). You can then think of the 𝑘th column of M(𝑇) as 𝑇 applied to the 𝑘th basis vector, where we identify 𝑛-by-1 column vectors with elements of 𝐅𝑛.",
      "statement_zh": "5C 上三角矩阵 129 在 阵依赖于这两个向量空间的基的选取.我们现在研究将一向量空间映射至自身的算 子，需要着重考虑的就是仅用一个基来描述它. ©𝐴1,1 ···𝐴1,𝑛 a M(𝑇) = ­.. ®， ­® «𝐴𝑛,1 ···𝐴𝑛,𝑛¬ 其中的元素 𝐴𝑗,𝑘 定义为 若根据上下文无法明确看出选取哪个基，就用 M\u0000𝑇,(𝑣1,…,𝑣𝑛)\u0001 这个记号. 𝑇𝑣𝑘 = 𝐴1,𝑘𝑣1+···+𝐴𝑛,𝑘𝑣𝑛. 算子的矩阵是方阵(其行数等于列数)，与前面我们讨论的一般线性映射的长方形矩阵不 同. 若𝑇 是 F𝑛 上的算子，且未明确基的选取， 矩阵 M(𝑇) 的第 𝑘 列，是由将 𝑇𝑣𝑘 写成基 那么就假定所取的基是标准基(其中第 𝑘 个 𝑣1, …, 𝑣𝑛 的线性组合时所用的系数构成的. 基向量除第 𝑘 个坐标为 1 外，其余坐标均为 0).此时你可以认为 M (𝑇) 的第 𝑘 列是将 𝑇 作用 于第 𝑘 个基向量所得的结果(这里把 F𝑛 中的元素与 𝑛 × 1 列向量等同起来看)."
    },
    {
      "id": "5.37",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.37",
      "name_en": "diagonal of a matrix",
      "name_zh": "矩阵的对角线(diagonal of a matrix) 方阵的对角线由从它的左上角到右下角的直线上的元素所构成.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The diagonal of a square matrix consists of the entries on the line from the upper left corner to the bottom right corner. For example, the diagonal of the matrix ⎛⎜ 2 1 0 ⎞⎟ M(𝑇) = ⎜0 5 3⎟ ⎝008⎠ from Example 5.36 consists of the entries 2, 5, 8, which are shown in red in the matrix above.",
          "zh": "例如，例 5.36 中的矩阵 ©­2 1 0a® M(𝑇) = ­0 5 3® «008¬ 的对角线是由 2、5 和 8 所构成，在上式中以红色标出."
        }
      ],
      "note": null,
      "statement_en": "The diagonal of a square matrix consists of the entries on the line from the upper left corner to the bottom right corner. For example, the diagonal of the matrix ⎛⎜ 2 1 0 ⎞⎟ M(𝑇) = ⎜0 5 3⎟ ⎝008⎠ from Example 5.36 consists of the entries 2, 5, 8, which are shown in red in the matrix above.",
      "statement_zh": "例如，例 5.36 中的矩阵 ©­2 1 0a® M(𝑇) = ­0 5 3® «008¬ 的对角线是由 2、5 和 8 所构成，在上式中以红色标出."
    },
    {
      "id": "5.38",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.38",
      "name_en": "upper-triangular matrix",
      "name_zh": "上三角矩阵(upper-triangular matrix) 称",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A square matrix is called upper triangular if all entries below the diagonal are 0. For example, the 3-by-3 matrix above is upper triangular. Typically we represent an upper-triangular matrix in the form ⎛⎜ 𝜆 1 ∗ ⎞⎟ ⎜ ⋱ ⎟; ⎝0 𝜆<sub>𝑛</sub>⎠ ⎜ ⋮ ⎝0⎠ ⎟ the 0 in the matrix above indicates that all entries below the diagonal in this 𝑛-by-𝑛 matrix equal 0. Upper-triangular matrices can be considered reasonably simple—if 𝑛 is large, then at least almost half the entries in an 𝑛-by-𝑛 upper- triangular matrix are 0. We often use ∗ to denote matrix entries that we do not know or that are irrele- vant to the questions being discussed.",
          "zh": "例如，上面所示的 3 × 3 矩阵就是上三角矩阵. 我们一般将上三角矩阵表示成下面的形式 上述矩阵中的 0 表示在这个 𝑛 × 𝑛 矩阵中，在 我们常用 ∗ 来表示矩阵中那些我们未知的， 对角线之下的元素都等于 0.可以认为上三角 或与正在讨论的问题无关的元素. 矩阵是相当简单的——若 𝑛 很大，那么在 𝑛 × 𝑛 上三角矩阵中至少有将近一半的元素都是 0. © 𝜆<sub>1</sub> ∗ a ­ … ®， ­® «0 𝜆<sub>𝑛</sub>¬ 下面结论在上三角矩阵和不变子空间之间建立了有用的联系."
        }
      ],
      "note": {
        "en": "The next result provides a useful connection between upper-triangular matrices and invariant subspaces.",
        "zh": ""
      },
      "statement_en": "A square matrix is called upper triangular if all entries below the diagonal are 0. For example, the 3-by-3 matrix above is upper triangular. Typically we represent an upper-triangular matrix in the form ⎛⎜ 𝜆 1 ∗ ⎞⎟ ⎜ ⋱ ⎟; ⎝0 𝜆𝑛⎠ ⎜ ⋮ ⎝0⎠ ⎟ the 0 in the matrix above indicates that all entries below the diagonal in this 𝑛-by-𝑛 matrix equal 0. Upper-triangular matrices can be considered reasonably simple—if 𝑛 is large, then at least almost half the entries in an 𝑛-by-𝑛 upper- triangular matrix are 0. We often use ∗ to denote matrix entries that we do not know or that are irrele- vant to the questions being discussed. The next result provides a useful connection between upper-triangular matrices and invariant subspaces.",
      "statement_zh": "例如，上面所示的 3 × 3 矩阵就是上三角矩阵. 我们一般将上三角矩阵表示成下面的形式 上述矩阵中的 0 表示在这个 𝑛 × 𝑛 矩阵中，在 我们常用 ∗ 来表示矩阵中那些我们未知的， 对角线之下的元素都等于 0.可以认为上三角 或与正在讨论的问题无关的元素. 矩阵是相当简单的——若 𝑛 很大，那么在 𝑛 × 𝑛 上三角矩阵中至少有将近一半的元素都是 0. © 𝜆1 ∗ a ­ … ®， ­® «0 𝜆𝑛¬ 下面结论在上三角矩阵和不变子空间之间建立了有用的联系."
    },
    {
      "id": "5.39",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.39",
      "name_en": "conditions for upper-triangular matrix",
      "name_zh": "上三角矩阵的条件",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> is a basis of 𝑉. Then the following are equivalent. (a) The matrix of 𝑇 with respect to 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> is upper triangular. (b) span(𝑣<sub>1</sub>,...,𝑣<sub>𝑘</sub>) is invariant under 𝑇 for each 𝑘 = 1,...,𝑛. (c) 𝑇𝑣<sub>𝑘</sub> ∈ span(𝑣<sub>1</sub>,...,𝑣<sub>𝑘</sub>) for each 𝑘 = 1,...,𝑛.",
          "zh": "设 𝑇 ∈ L(𝑉) 且 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 是 𝑉 的基.那么下面几条结论等价. (a) 𝑇 关于 𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 的矩阵是上三角矩阵. (b) 对每个𝑘 = 1,…,𝑛，均有 span(𝑣<sub>1</sub>,…,𝑣<sub>𝑘</sub>)在𝑇下不变. (c) 对每个 𝑘 = 1,…,𝑛，均有𝑇𝑣<sub>𝑘</sub> ∈ span(𝑣<sub>1</sub>,…,𝑣<sub>𝑘</sub>)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑣1,..., 𝑣𝑛 is a basis of 𝑉. Then the following are equivalent. (a) The matrix of 𝑇 with respect to 𝑣1,..., 𝑣𝑛 is upper triangular. (b) span(𝑣1,...,𝑣𝑘) is invariant under 𝑇 for each 𝑘 = 1,...,𝑛. (c) 𝑇𝑣𝑘 ∈ span(𝑣1,...,𝑣𝑘) for each 𝑘 = 1,...,𝑛.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 且 𝑣1, …, 𝑣𝑛 是 𝑉 的基.那么下面几条结论等价. (a) 𝑇 关于 𝑣1,…,𝑣𝑛 的矩阵是上三角矩阵. (b) 对每个𝑘 = 1,…,𝑛，均有 span(𝑣1,…,𝑣𝑘)在𝑇下不变. (c) 对每个 𝑘 = 1,…,𝑛，均有𝑇𝑣𝑘 ∈ span(𝑣1,…,𝑣𝑘)."
    },
    {
      "id": "5.40",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.40",
      "name_en": "equation satisfied by operator with upper-triangular matrix",
      "name_zh": "具有上三角矩阵的算子满足的等式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑉 has a basis with respect to which 𝑇 has an upper- triangular matrix with diagonal entries 𝜆<sub>1</sub>,..., 𝜆<sub>𝑛</sub>. Then (𝑇 − 𝜆<sub>1</sub>𝐼) ⋯ (𝑇 − 𝜆<sub>𝑛</sub>𝐼) = 0.",
          "zh": "设 𝑇 ∈ L (𝑉) 且存在 𝑉 的一个基，使得 𝑇 关于该基有上三角矩阵，且该矩阵的对角线元 素是 𝜆<sub>1</sub>, …, 𝜆<sub>𝑛</sub>，那么 (𝑇 − 𝜆<sub>1</sub> 𝐼) ⋯ (𝑇 − 𝜆<sub>𝑛</sub> 𝐼) = 0."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑉 has a basis with respect to which 𝑇 has an upper- triangular matrix with diagonal entries 𝜆1,..., 𝜆𝑛. Then (𝑇 − 𝜆1𝐼) ⋯ (𝑇 − 𝜆𝑛𝐼) = 0.",
      "statement_zh": "设 𝑇 ∈ L (𝑉) 且存在 𝑉 的一个基，使得 𝑇 关于该基有上三角矩阵，且该矩阵的对角线元 素是 𝜆1, …, 𝜆𝑛，那么 (𝑇 − 𝜆1 𝐼) ⋯ (𝑇 − 𝜆𝑛 𝐼) = 0."
    },
    {
      "id": "5.41",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.41",
      "name_en": "determination of eigenvalues from upper-triangular matrix",
      "name_zh": "由上三角矩阵确定特征值",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) has an upper-triangular matrix with respect to some basis of 𝑉. Then the eigenvalues of 𝑇 are precisely the entries on the diagonal of that upper-triangular matrix.",
          "zh": "设 𝑇 ∈ L (𝑉) 关于 𝑉 的某个基有上三角矩阵.那么 𝑇 的特征值恰为该上三角矩阵对角线 上的各元素. 132 角矩阵 © 𝜆<sub>1</sub> ∗ a M(𝑇) = ­ … ®. ­® «0 𝜆<sub>𝑛</sub>¬ 因为 𝑇𝑣<sub>1</sub> = 𝜆<sub>1</sub>𝑣<sub>1</sub>，我们可见 𝜆<sub>1</sub> 是 𝑇 的一个特征值. 设𝑘 ∈ {2,…,𝑛}.那么(𝑇−𝜆<sub>𝑘</sub>𝐼)𝑣<sub>𝑘</sub> ∈ span(𝑣<sub>1</sub>,…,𝑣<sub>𝑘</sub>−1).于是𝑇−𝜆<sub>𝑘</sub>𝐼将 span(𝑣<sub>1</sub>,…,𝑣<sub>𝑘</sub>) 映射至 span(𝑣<sub>1</sub>, …, 𝑣<sub>𝑘</sub>−1).又因为 dimspan(𝑣<sub>1</sub>,…,𝑣<sub>𝑘</sub>) = 𝑘 且 dimspan(𝑣<sub>1</sub>,…,𝑣<sub>𝑘</sub>−1) = 𝑘 −1， 所以限制于 span(𝑣<sub>1</sub>, …, 𝑣<sub>𝑘</sub>) 的算子 𝑇 −𝜆<sub>𝑘</sub> 𝐼 不是单射(由 3.22).于是，存在 𝑣 ∈ span(𝑣<sub>1</sub>, …, 𝑣<sub>𝑘</sub>) 满足𝑣 = ̸0且(𝑇−𝜆<sub>𝑘</sub>𝐼)𝑣 = 0.于是𝜆<sub>𝑘</sub> 是𝑇的特征值.因此我们证明了 M(𝑇)对角线上各元素 均为 𝑇 的特征值. 为"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) has an upper-triangular matrix with respect to some basis of 𝑉. Then the eigenvalues of 𝑇 are precisely the entries on the diagonal of that upper-triangular matrix.",
      "statement_zh": "设 𝑇 ∈ L (𝑉) 关于 𝑉 的某个基有上三角矩阵.那么 𝑇 的特征值恰为该上三角矩阵对角线 上的各元素. 132 角矩阵 © 𝜆1 ∗ a M(𝑇) = ­ … ®. ­® «0 𝜆𝑛¬ 因为 𝑇𝑣1 = 𝜆1𝑣1，我们可见 𝜆1 是 𝑇 的一个特征值. 设𝑘 ∈ {2,…,𝑛}.那么(𝑇−𝜆𝑘𝐼)𝑣𝑘 ∈ span(𝑣1,…,𝑣𝑘−1).于是𝑇−𝜆𝑘𝐼将 span(𝑣1,…,𝑣𝑘) 映射至 span(𝑣1, …, 𝑣𝑘−1).又因为 dimspan(𝑣1,…,𝑣𝑘) = 𝑘 且 dimspan(𝑣1,…,𝑣𝑘−1) = 𝑘 −1， 所以限制于 span(𝑣1, …, 𝑣𝑘) 的算子 𝑇 −𝜆𝑘 𝐼 不是单射(由 3.22).于是，存在 𝑣 ∈ span(𝑣1, …, 𝑣𝑘) 满足𝑣 = ̸0且(𝑇−𝜆𝑘𝐼)𝑣 = 0.于是𝜆𝑘 是𝑇的特征值.因此我们证明了 M(𝑇)对角线上各元素 均为 𝑇 的特征值. 为"
    },
    {
      "id": "5.44",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.44",
      "name_en": "states that there does not exist a basis of",
      "name_zh": "表明，不存在 R<sup>4</sup> 的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator T ∈ L(V) has an upper-triangular matrix with respect to some basis of V if and only if the minimal polynomial of T equals (z − λ<sub>1</sub>) ⋯ (z − λ<sub>m</sub>) for some λ<sub>1</sub>, …, λ<sub>m</sub> ∈ F.",
          "zh": "算子 T ∈ L(V) 关于 V 的某个基有上三角矩阵，当且仅当 T 的最小多项式等于 (z − λ<sub>1</sub>) ⋯ (z − λ<sub>m</sub>)，其中 λ<sub>1</sub>, …, λ<sub>m</sub> ∈ F。"
        }
      ],
      "note": null,
      "statement_en": "An operator T ∈ L(V) has an upper-triangular matrix with respect to some basis of V if and only if the minimal polynomial of T equals (z − λ1) ⋯ (z − λm) for some λ1, …, λm ∈ F.",
      "statement_zh": "算子 T ∈ L(V) 关于 V 的某个基有上三角矩阵，当且仅当 T 的最小多项式等于 (z − λ1) ⋯ (z − λm)，其中 λ1, …, λm ∈ F。"
    },
    {
      "id": "5.47",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.47",
      "name_en": "if F = ℂ, then every operator on V has an upper-triangular matrix",
      "name_zh": "若 F = ℂ，则 V 上每个算子都有上三角矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose V is a finite-dimensional complex vector space and T ∈ L(V). Then T has an upper-triangular matrix with respect to some basis of V.",
          "zh": "假设 V 是有限维复向量空间且 T ∈ L(V)。那么 T 关于 V 的某个基有上三角矩阵。"
        }
      ],
      "note": null,
      "statement_en": "Suppose V is a finite-dimensional complex vector space and T ∈ L(V). Then T has an upper-triangular matrix with respect to some basis of V.",
      "statement_zh": "假设 V 是有限维复向量空间且 T ∈ L(V)。那么 T 关于 V 的某个基有上三角矩阵。"
    },
    {
      "id": "5.48",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.48",
      "name_en": "diagonal matrix",
      "name_zh": "对角矩阵(diagonal matrix) 对角矩阵是对角线之外元素均为 0 的方阵.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A diagonal matrix is a square matrix that is 0 everywhere except possibly on the diagonal.",
          "zh": "对角矩阵(diagonal matrix) 对角矩阵是对角线之外元素均为 0 的方阵."
        }
      ],
      "note": null,
      "statement_en": "A diagonal matrix is a square matrix that is 0 everywhere except possibly on the diagonal.",
      "statement_zh": "对角矩阵(diagonal matrix) 对角矩阵是对角线之外元素均为 0 的方阵."
    },
    {
      "id": "5.50",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.50",
      "name_en": "diagonalizable",
      "name_zh": "可对角化",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator on 𝑉 is called diagonalizable if the operator has a diagonal matrix with respect to some basis of 𝑉.",
          "zh": "若 𝑉 上的算子关于 𝑉 的某个基具有对角矩阵，则称该算子是可对角化的. 5.51 例:对角化可能需要不同的基 定义 𝑇 ∈ L(R<sup>2</sup>) 为 𝑇 关于 R<sup>2</sup> 的标准基的矩阵是 𝑇 (𝑥, 𝑦) = (41𝑥 + 7𝑦, −20𝑥 + 74𝑦). ! ! 41 7 −20 74 ， 这不是对角矩阵.然而，𝑇 是可对角化的.具体而言，𝑇 关于基 (1, 4), (7, 5) 的矩阵是 ， 因为𝑇(1,4) = (69,276) = 69(1,4)，𝑇(7,5) = (322,230) = 46(7,5). 69 0 0 46 下面，我们给被算子 𝑇 映射至其 𝜆(𝜆 ∈ F)倍的向量所构成的集合起个名字，并用个记 号来表示它，这将便于我们进行讨论. 5D 可对角化算子 137"
        }
      ],
      "note": null,
      "statement_en": "An operator on 𝑉 is called diagonalizable if the operator has a diagonal matrix with respect to some basis of 𝑉.",
      "statement_zh": "若 𝑉 上的算子关于 𝑉 的某个基具有对角矩阵，则称该算子是可对角化的. 5.51 例:对角化可能需要不同的基 定义 𝑇 ∈ L(R2) 为 𝑇 关于 R2 的标准基的矩阵是 𝑇 (𝑥, 𝑦) = (41𝑥 + 7𝑦, −20𝑥 + 74𝑦). ! ! 41 7 −20 74 ， 这不是对角矩阵.然而，𝑇 是可对角化的.具体而言，𝑇 关于基 (1, 4), (7, 5) 的矩阵是 ， 因为𝑇(1,4) = (69,276) = 69(1,4)，𝑇(7,5) = (322,230) = 46(7,5). 69 0 0 46 下面，我们给被算子 𝑇 映射至其 𝜆(𝜆 ∈ F)倍的向量所构成的集合起个名字，并用个记 号来表示它，这将便于我们进行讨论. 5D 可对角化算子 137"
    },
    {
      "id": "5.52",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.52",
      "name_en": "eigenspace, 𝐸(𝜆, 𝑇)",
      "name_zh": "特征空间(eigenspace)、𝐸",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅. The eigenspace of 𝑇 corresponding to 𝜆 is the subspace 𝐸(𝜆, 𝑇) of 𝑉 defined by 𝐸(𝜆, 𝑇) = null(𝑇 − 𝜆𝐼) = {𝑣 ∈ 𝑉 ∶ 𝑇𝑣 = 𝜆𝑣}. Hence 𝐸(𝜆, 𝑇) is the set of all eigenvectors of 𝑇 corresponding to 𝜆, along with the 0 vector. For 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅, the set 𝐸(𝜆,𝑇) is a subspace of 𝑉 because the null space of each linear map on 𝑉 is a subspace of 𝑉. The definitions imply that 𝜆 is an eigenvalue of 𝑇 if and only if 𝐸(𝜆, 𝑇) ≠ {0}.",
          "zh": "设 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F.𝑇 对应于 𝜆 的特征空间记作 𝐸(𝜆,𝑇)，是定义如下的 𝑉 的子空间 𝐸(𝜆,𝑇) = null(𝑇 − 𝜆𝐼) = {𝑣 ∈ 𝑉 : 𝑇𝑣 = 𝜆𝑣}. 因此 𝐸(𝜆,𝑇) 是 𝑇 对应于 𝜆 的所有特征向量以及向量 0 所构成的集合. 对𝑇 ∈ L(𝑉)且𝜆 ∈ F，集合𝐸(𝜆,𝑇)是𝑉的子空间，因为𝑉上任何线性映射的零空间都是 𝑉 的子空间.由定义可得，𝜆 是 𝑇 的特征值当且仅当 𝐸 (𝜆, 𝑇) = ̸ {0}."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅. The eigenspace of 𝑇 corresponding to 𝜆 is the subspace 𝐸(𝜆, 𝑇) of 𝑉 defined by 𝐸(𝜆, 𝑇) = null(𝑇 − 𝜆𝐼) = {𝑣 ∈ 𝑉 ∶ 𝑇𝑣 = 𝜆𝑣}. Hence 𝐸(𝜆, 𝑇) is the set of all eigenvectors of 𝑇 corresponding to 𝜆, along with the 0 vector. For 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅, the set 𝐸(𝜆,𝑇) is a subspace of 𝑉 because the null space of each linear map on 𝑉 is a subspace of 𝑉. The definitions imply that 𝜆 is an eigenvalue of 𝑇 if and only if 𝐸(𝜆, 𝑇) ≠ {0}.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F.𝑇 对应于 𝜆 的特征空间记作 𝐸(𝜆,𝑇)，是定义如下的 𝑉 的子空间 𝐸(𝜆,𝑇) = null(𝑇 − 𝜆𝐼) = {𝑣 ∈ 𝑉 : 𝑇𝑣 = 𝜆𝑣}. 因此 𝐸(𝜆,𝑇) 是 𝑇 对应于 𝜆 的所有特征向量以及向量 0 所构成的集合. 对𝑇 ∈ L(𝑉)且𝜆 ∈ F，集合𝐸(𝜆,𝑇)是𝑉的子空间，因为𝑉上任何线性映射的零空间都是 𝑉 的子空间.由定义可得，𝜆 是 𝑇 的特征值当且仅当 𝐸 (𝜆, 𝑇) = ̸ {0}."
    },
    {
      "id": "5.54",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.54",
      "name_en": "sum of eigenspaces is a direct sum",
      "name_zh": "特征空间之和是直和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆<sub>1</sub>,..., 𝜆<sub>𝑚</sub> are distinct eigenvalues of 𝑇. Then 𝐸(𝜆<sub>1</sub>,𝑇)+⋯+𝐸(𝜆<sub>𝑚</sub>,𝑇) is a direct sum. Furthermore, if 𝑉 is finite-dimensional, then dim 𝐸(𝜆<sub>1</sub>, 𝑇) + ⋯ + dim 𝐸(𝜆<sub>𝑚</sub>, 𝑇) ≤ dim 𝑉.",
          "zh": "设 𝑇 ∈ L(𝑉) 且 𝜆<sub>1</sub>, …, 𝜆<sub>𝑚</sub> 是 𝑇 的互异特征值.那么 𝐸(𝜆<sub>1</sub>,𝑇) + ··· + 𝐸(𝜆<sub>𝑚</sub>,𝑇) 是直和.此外，若 𝑉 是有限维的，那么 dim 𝐸(𝜆<sub>1</sub>,𝑇)+···+dim 𝐸(𝜆<sub>𝑚</sub>,𝑇) ≤dim 𝑉."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆1,..., 𝜆𝑚 are distinct eigenvalues of 𝑇. Then 𝐸(𝜆1,𝑇)+⋯+𝐸(𝜆𝑚,𝑇) is a direct sum. Furthermore, if 𝑉 is finite-dimensional, then dim 𝐸(𝜆1, 𝑇) + ⋯ + dim 𝐸(𝜆𝑚, 𝑇) ≤ dim 𝑉.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 且 𝜆1, …, 𝜆𝑚 是 𝑇 的互异特征值.那么 𝐸(𝜆1,𝑇) + ··· + 𝐸(𝜆𝑚,𝑇) 是直和.此外，若 𝑉 是有限维的，那么 dim 𝐸(𝜆1,𝑇)+···+dim 𝐸(𝜆𝑚,𝑇) ≤dim 𝑉."
    },
    {
      "id": "5.55",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.55",
      "name_en": "conditions equivalent to diagonalizability",
      "name_zh": "可对角化的等价条件",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a)",
          "zh": "(a) 𝑇 是可对角化的."
        },
        {
          "t": "bullet",
          "en": "(b)",
          "zh": "(b) 𝑉 有由 𝑇 的特征向量构成的基."
        },
        {
          "t": "bullet",
          "en": "(a)",
          "zh": "(a) 与"
        },
        {
          "t": "bullet",
          "en": "(b)",
          "zh": "(b) 等价. 设"
        },
        {
          "t": "bullet",
          "en": "(c)",
          "zh": "(c) 成立，也就证明了"
        },
        {
          "t": "bullet",
          "en": "(b)",
          "zh": "(b) 蕴涵"
        },
        {
          "t": "bullet",
          "en": "(c)",
          "zh": "(c) . 由 3.94 立得"
        },
        {
          "t": "bullet",
          "en": "(c)",
          "zh": "(c) 蕴涵"
        },
        {
          "t": "bullet",
          "en": "(d)",
          "zh": "(d) . 最后，设"
        },
        {
          "t": "bullet",
          "en": "(d)",
          "zh": "(d) 蕴涵"
        },
        {
          "t": "bullet",
          "en": "(b)",
          "zh": "(b) ，证明完成. 与可对角化等价的其他条件见于 5.62，本节"
        }
      ],
      "note": null,
      "statement_en": "(a) (b) (a) (b) (c) (b) (c) (c) (d) (d) (b)",
      "statement_zh": "(a) 𝑇 是可对角化的. (b) 𝑉 有由 𝑇 的特征向量构成的基. (a) 与 (b) 等价. 设 (c) 成立，也就证明了 (b) 蕴涵 (c) . 由 3.94 立得 (c) 蕴涵 (d) . 最后，设 (d) 蕴涵 (b) ，证明完成. 与可对角化等价的其他条件见于 5.62，本节"
    },
    {
      "id": "5.58",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.58",
      "name_en": "enough eigenvalues implies diagonalizability",
      "name_zh": "特征值足够多意味着可对角化",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉) has dim 𝑉 distinct eigenvalues. Then 𝑇 is diagonalizable.",
          "zh": "设 𝑉 是有限维的且 𝑇 ∈ L (𝑉) 有 dim 𝑉 个互不相同的特征值.那么 𝑇 是可对角化的."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉) has dim 𝑉 distinct eigenvalues. Then 𝑇 is diagonalizable.",
      "statement_zh": "设 𝑉 是有限维的且 𝑇 ∈ L (𝑉) 有 dim 𝑉 个互不相同的特征值.那么 𝑇 是可对角化的."
    },
    {
      "id": "5.62",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.62",
      "name_en": "states that an operator",
      "name_zh": "的内容是，算子 𝑇 ∈ L (𝑉) 关于 𝑉 的某个基有对角矩阵，当且仅当 𝑇 的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇 ∈ L(𝑉) has a diagonal matrix with respect to some basis of 𝑉 if and only if the minimal polynomial of 𝑇 equals (𝑧 − 𝜆<sub>1</sub>) ⋯ (𝑧 − 𝜆<sub>𝑚</sub>) for some distinct 𝜆<sub>1</sub>, …, 𝜆<sub>𝑚</sub> ∈ 𝐅. Before formally stating this result, we give two examples of using it.",
          "zh": "最小多项式等于(𝑧−𝜆<sub>1</sub>)···(𝑧−𝜆<sub>𝑚</sub>)，其中𝜆<sub>1</sub>,…,𝜆<sub>𝑚</sub> ∈ F 且互不相同.在正式地陈述这个结论 之前，我们先给出两个应用它的实例."
        }
      ],
      "note": null,
      "statement_en": "𝑇 ∈ L(𝑉) has a diagonal matrix with respect to some basis of 𝑉 if and only if the minimal polynomial of 𝑇 equals (𝑧 − 𝜆1) ⋯ (𝑧 − 𝜆𝑚) for some distinct 𝜆1, …, 𝜆𝑚 ∈ 𝐅. Before formally stating this result, we give two examples of using it.",
      "statement_zh": "最小多项式等于(𝑧−𝜆1)···(𝑧−𝜆𝑚)，其中𝜆1,…,𝜆𝑚 ∈ F 且互不相同.在正式地陈述这个结论 之前，我们先给出两个应用它的实例."
    },
    {
      "id": "5.65",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.65",
      "name_en": "restriction of diagonalizable operator to invariant subspace",
      "name_zh": "将可对角化算子限制于不变子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is diagonalizable and 𝑈 is a subspace of 𝑉 that is invariant under 𝑇. Then 𝑇|𝑈 is a diagonalizable operator on 𝑈.",
          "zh": "设 𝑇 ∈ L(𝑉) 是可对角化的，𝑈 是 𝑉 的子空间且在 𝑇 下不变.那么 𝑇|𝑈 是 𝑈 上的可对角 化算子."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is diagonalizable and 𝑈 is a subspace of 𝑉 that is invariant under 𝑇. Then 𝑇|𝑈 is a diagonalizable operator on 𝑈.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 是可对角化的，𝑈 是 𝑉 的子空间且在 𝑇 下不变.那么 𝑇|𝑈 是 𝑈 上的可对角 化算子."
    },
    {
      "id": "5.66",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.66",
      "name_en": "Gershgorin disks",
      "name_zh": "格什戈林圆盘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a basis of 𝑉. Let 𝐴 denote the matrix of 𝑇 with respect to this basis. A Gershgorin disk of 𝑇 with respect to the basis 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a set of the form where 𝑗 ∈ {1,...,𝑛}. 𝑛 {𝑧∈𝐅∶|𝑧−𝐴𝑗,𝑗|≤ ∑|𝐴𝑗,𝑘|}, 𝑘=1 𝑘≠𝑗 Because there are 𝑛 choices for 𝑗 in the definition above, 𝑇 has 𝑛 Gershgorin disks. If 𝐅 = 𝐂, then for each 𝑗 ∈ {1,..., 𝑛}, the corresponding Gershgorin disk is a closed disk in 𝐂 centered at 𝐴𝑗,𝑗, which is the 𝑗th entry on the diagonal of 𝐴. The radius of this closed disk is the sum of the absolute values of the entries in row 𝑗 of 𝐴, excluding the diagonal entry. If 𝐅 = 𝐑, then the Gershgorin disks are closed intervals in 𝐑. In the special case that the square matrix 𝐴 above is a diagonal matrix, each Gershgorin disk consists of a single point that is a diagonal entry of 𝐴 (and each eigenvalue of 𝑇 is one of those points, as required by",
          "zh": "设 𝑇 ∈ L(𝑉) 且 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 是 𝑉 的基.令 𝐴 表示 𝑇 关于该基的矩阵.𝑇 关于基 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 的格什戈林圆盘是形如  ∑𝑛  𝑧 ∈ F : |𝑧 − 𝐴𝑗, 𝑗 | ≤ |𝐴𝑗,𝑘 |  𝑘 = 1  𝑘 = ̸𝑗 的集合，其中 𝑗 ∈ {1,…,𝑛}. 因为上面定义中的 𝑗 有 𝑛 种取值，所以 𝑇 有 𝑛 个格什戈林圆盘.若 F = C，那么对每个 𝑗 ∈ {1,…,𝑛}，与之对应的格什戈林圆盘就是 C 中以 𝐴𝑗,𝑗 为圆心的闭圆盘，其中 𝐴𝑗,𝑗 是 𝐴 的 对角线上的第 𝑗 个元素.这个闭圆盘的半径，等于 𝐴 的第 𝑗 行除对角线上的元素外各元素绝 对值之和.若 F = R，那么格什戈林圆盘是 R 中的闭区间. 在上述方阵 𝐴 为对角阵的特殊情况下，每个格什戈林圆盘都仅包含一个点，即 𝐴 的对角 线上的元素(进而 𝑇 的每个特征值都是这样的点，这也是下面结论所保证的).下面的结论有 个推论:如果 𝐴 的非对角线元素很小，那么 𝑇 的每个特征值都与 𝐴 的对角线上的一个元素很 接近."
        }
      ],
      "note": {
        "en": "the next result). One consequence of our next result is that if the nondiagonal entries of 𝐴 are small, then each eigenvalue of 𝑇 is near a diagonal entry of 𝐴. orin disk theorem Suppose 𝑇 ∈ L(𝑉) and 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> is a basis of 𝑉. Then each eigenv",
        "zh": ""
      },
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑣1,...,𝑣𝑛 is a basis of 𝑉. Let 𝐴 denote the matrix of 𝑇 with respect to this basis. A Gershgorin disk of 𝑇 with respect to the basis 𝑣1,...,𝑣𝑛 is a set of the form where 𝑗 ∈ {1,...,𝑛}. 𝑛 {𝑧∈𝐅∶|𝑧−𝐴𝑗,𝑗|≤ ∑|𝐴𝑗,𝑘|}, 𝑘=1 𝑘≠𝑗 Because there are 𝑛 choices for 𝑗 in the definition above, 𝑇 has 𝑛 Gershgorin disks. If 𝐅 = 𝐂, then for each 𝑗 ∈ {1,..., 𝑛}, the corresponding Gershgorin disk is a closed disk in 𝐂 centered at 𝐴𝑗,𝑗, which is the 𝑗th entry on the diagonal of 𝐴. The radius of this closed disk is the sum of the absolute values of the entries in row 𝑗 of 𝐴, excluding the diagonal entry. If 𝐅 = 𝐑, then the Gershgorin disks are closed intervals in 𝐑. In the special case that the square matrix 𝐴 above is a diagonal matrix, each Gershgorin disk consists of a single point that is a diagonal entry of 𝐴 (and each eigenvalue of 𝑇 is one of those points, as required by the next result). One consequence of our next result is that if the nondiagonal entries of 𝐴 are small, then each eigenvalue of 𝑇 is near a diagonal entry of 𝐴. orin disk theorem Suppose 𝑇 ∈ L(𝑉) and 𝑣1,..., 𝑣𝑛 is a basis of 𝑉. Then each eigenv",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 且 𝑣1, …, 𝑣𝑛 是 𝑉 的基.令 𝐴 表示 𝑇 关于该基的矩阵.𝑇 关于基 𝑣1, …, 𝑣𝑛 的格什戈林圆盘是形如  ∑𝑛  𝑧 ∈ F : |𝑧 − 𝐴𝑗, 𝑗 | ≤ |𝐴𝑗,𝑘 |  𝑘 = 1  𝑘 = ̸𝑗 的集合，其中 𝑗 ∈ {1,…,𝑛}. 因为上面定义中的 𝑗 有 𝑛 种取值，所以 𝑇 有 𝑛 个格什戈林圆盘.若 F = C，那么对每个 𝑗 ∈ {1,…,𝑛}，与之对应的格什戈林圆盘就是 C 中以 𝐴𝑗,𝑗 为圆心的闭圆盘，其中 𝐴𝑗,𝑗 是 𝐴 的 对角线上的第 𝑗 个元素.这个闭圆盘的半径，等于 𝐴 的第 𝑗 行除对角线上的元素外各元素绝 对值之和.若 F = R，那么格什戈林圆盘是 R 中的闭区间. 在上述方阵 𝐴 为对角阵的特殊情况下，每个格什戈林圆盘都仅包含一个点，即 𝐴 的对角 线上的元素(进而 𝑇 的每个特征值都是这样的点，这也是下面结论所保证的).下面的结论有 个推论:如果 𝐴 的非对角线元素很小，那么 𝑇 的每个特征值都与 𝐴 的对角线上的一个元素很 接近."
    },
    {
      "id": "5.67",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.67",
      "name_en": "Gershgorin disk theorem",
      "name_zh": "格什戈林圆盘定理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> is a basis of 𝑉. Then each eigenvalue of 𝑇 is contained in some Gershgorin disk of 𝑇 with respect to the basis 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>.",
          "zh": "设𝑇 ∈ L(𝑉)且𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉的基.那么𝑇的每个特征值都被包含在𝑇关于基𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 的某个格什戈林圆盘中. 5D 可对角化算子 143"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑣1,..., 𝑣𝑛 is a basis of 𝑉. Then each eigenvalue of 𝑇 is contained in some Gershgorin disk of 𝑇 with respect to the basis 𝑣1,..., 𝑣𝑛.",
      "statement_zh": "设𝑇 ∈ L(𝑉)且𝑣1,…,𝑣𝑛 是𝑉的基.那么𝑇的每个特征值都被包含在𝑇关于基𝑣1,…,𝑣𝑛 的某个格什戈林圆盘中. 5D 可对角化算子 143"
    },
    {
      "id": "5.71",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.71",
      "name_en": "commute",
      "name_zh": "可交换",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Two operators 𝑆 and 𝑇 on the same vector space commute if 𝑆𝑇 = 𝑇𝑆. • Two square matrices 𝐴 and 𝐵 of the same size commute if 𝐴𝐵 = 𝐵𝐴. For example, if 𝐼 is the identity operator on 𝑉 and 𝜆 ∈ 𝐅, then 𝜆𝐼 commutes with every operator on 𝑉. As another example, if 𝑇 is an operator then 𝑇<sup>2</sup> and 𝑇<sup>3</sup> commute. More generally, if 𝑝, 𝑞 ∈ 𝒫(𝐅), then 𝑝(𝑇) and 𝑞(𝑇) commute [see 5.17(b)].",
          "zh": "对于同一向量空间上的两个算子 𝑆 和 𝑇 ，若 𝑆𝑇 = 𝑇 𝑆，则它们可交换. 对于两个大小相同的方阵 𝐴 和 𝐵，若 𝐴𝐵 = 𝐵𝐴，则它们可交换. 例如，若 𝐼 是 𝑉 上的恒等算子且 𝜆 ∈ F，那么 𝜆𝐼 与 𝑉 上每个算子都可交换. 又例如，若 𝑇 是算子，那么 𝑇<sup>2</sup> 和 𝑇<sup>3</sup> 可交换.更一般地，若 𝑝, 𝑞 ∈ P(F)，那么 𝑝(𝑇) 和 𝑞(𝑇) 可交换【见 5.17 (b)】."
        }
      ],
      "note": null,
      "statement_en": "Two operators 𝑆 and 𝑇 on the same vector space commute if 𝑆𝑇 = 𝑇𝑆. • Two square matrices 𝐴 and 𝐵 of the same size commute if 𝐴𝐵 = 𝐵𝐴. For example, if 𝐼 is the identity operator on 𝑉 and 𝜆 ∈ 𝐅, then 𝜆𝐼 commutes with every operator on 𝑉. As another example, if 𝑇 is an operator then 𝑇2 and 𝑇3 commute. More generally, if 𝑝, 𝑞 ∈ 𝒫(𝐅), then 𝑝(𝑇) and 𝑞(𝑇) commute [see 5.17(b)].",
      "statement_zh": "对于同一向量空间上的两个算子 𝑆 和 𝑇 ，若 𝑆𝑇 = 𝑇 𝑆，则它们可交换. 对于两个大小相同的方阵 𝐴 和 𝐵，若 𝐴𝐵 = 𝐵𝐴，则它们可交换. 例如，若 𝐼 是 𝑉 上的恒等算子且 𝜆 ∈ F，那么 𝜆𝐼 与 𝑉 上每个算子都可交换. 又例如，若 𝑇 是算子，那么 𝑇2 和 𝑇3 可交换.更一般地，若 𝑝, 𝑞 ∈ P(F)，那么 𝑝(𝑇) 和 𝑞(𝑇) 可交换【见 5.17 (b)】."
    },
    {
      "id": "5.74",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.74",
      "name_en": "commuting operators correspond to commuting matrices",
      "name_zh": "可交换算子对应可交换矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑆,𝑇 ∈ L(𝑉) and 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a basis of 𝑉. Then 𝑆 and 𝑇 commute if and only if M(𝑆, (𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>)) and M(𝑇, (𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>)) commute.",
          "zh": "设𝑆,𝑇 ∈ L(𝑉)且𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉的基.那么𝑆和𝑇可交换，当且仅当 M\u0000𝑆,(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001 和 M\u0000𝑇,(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001 可交换. 命题得证. 5E 可交换算子 147"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑆,𝑇 ∈ L(𝑉) and 𝑣1,...,𝑣𝑛 is a basis of 𝑉. Then 𝑆 and 𝑇 commute if and only if M(𝑆, (𝑣1,..., 𝑣𝑛)) and M(𝑇, (𝑣1,..., 𝑣𝑛)) commute.",
      "statement_zh": "设𝑆,𝑇 ∈ L(𝑉)且𝑣1,…,𝑣𝑛 是𝑉的基.那么𝑆和𝑇可交换，当且仅当 M\u0000𝑆,(𝑣1,…,𝑣𝑛)\u0001 和 M\u0000𝑇,(𝑣1,…,𝑣𝑛)\u0001 可交换. 命题得证. 5E 可交换算子 147"
    },
    {
      "id": "5.75",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.75",
      "name_en": "eigenspace is invariant under commuting operator",
      "name_zh": "特征空间在可交换算子下不变",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑆, 𝑇 ∈ L(𝑉) commute and 𝜆 ∈ 𝐅. Then 𝐸(𝜆, 𝑆) is invariant under 𝑇.",
          "zh": "设 𝑆, 𝑇 ∈ L (𝑉) 可交换且 𝜆 ∈ F.那么 𝐸 (𝜆, 𝑆) 在 𝑇 下不变."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑆, 𝑇 ∈ L(𝑉) commute and 𝜆 ∈ 𝐅. Then 𝐸(𝜆, 𝑆) is invariant under 𝑇.",
      "statement_zh": "设 𝑆, 𝑇 ∈ L (𝑉) 可交换且 𝜆 ∈ F.那么 𝐸 (𝜆, 𝑆) 在 𝑇 下不变."
    },
    {
      "id": "5.76",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.76",
      "name_en": "simultaneous diagonalizability",
      "name_zh": "可同时对角化 ⇐⇒ 可交换性 同一向量空间上的两个可对角化算子关于相同的基都有对角矩阵，当且仅当这两个算子 可交换.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "⟺ commutativity Two diagonalizable operators on the same vector space have diagonal matrices with respect to the same basis if and only if the two operators commute.",
          "zh": "可同时对角化 ⇐⇒ 可交换性 同一向量空间上的两个可对角化算子关于相同的基都有对角矩阵，当且仅当这两个算子 可交换."
        }
      ],
      "note": null,
      "statement_en": "⟺ commutativity Two diagonalizable operators on the same vector space have diagonal matrices with respect to the same basis if and only if the two operators commute.",
      "statement_zh": "可同时对角化 ⇐⇒ 可交换性 同一向量空间上的两个可对角化算子关于相同的基都有对角矩阵，当且仅当这两个算子 可交换."
    },
    {
      "id": "5.78",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.78",
      "name_en": "common eigenvector for commuting operators",
      "name_zh": "可交换算子的公共特征向量 非零有限维复向量空间上的每对可交换算子都有公共的特征向量.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every pair of commuting operators on a finite-dimensional nonzero complex vector space has a common eigenvector.",
          "zh": "可交换算子的公共特征向量 非零有限维复向量空间上的每对可交换算子都有公共的特征向量."
        }
      ],
      "note": null,
      "statement_en": "Every pair of commuting operators on a finite-dimensional nonzero complex vector space has a common eigenvector.",
      "statement_zh": "可交换算子的公共特征向量 非零有限维复向量空间上的每对可交换算子都有公共的特征向量."
    },
    {
      "id": "5.80",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.80",
      "name_en": "commuting operators are simultaneously upper triangularizable",
      "name_zh": "可交换算子可同时上三角化",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is a finite-dimensional complex vector space and 𝑆,𝑇 are commuting operators on 𝑉. Then there is a basis of 𝑉 with respect to which both 𝑆 and 𝑇 have upper-triangular matrices.",
          "zh": "设 𝑉 是有限维复向量空间，𝑆, 𝑇 是 𝑉 上的可交换算子.那么存在 𝑉 的一个基，使得 𝑆 和 𝑇 关于该基均有上三角矩阵."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a finite-dimensional complex vector space and 𝑆,𝑇 are commuting operators on 𝑉. Then there is a basis of 𝑉 with respect to which both 𝑆 and 𝑇 have upper-triangular matrices.",
      "statement_zh": "设 𝑉 是有限维复向量空间，𝑆, 𝑇 是 𝑉 上的可交换算子.那么存在 𝑉 的一个基，使得 𝑆 和 𝑇 关于该基均有上三角矩阵."
    },
    {
      "id": "5.81",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.81",
      "name_en": "eigenvalues of sum and product of commuting operators",
      "name_zh": "的证明中用到.",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a)",
          "zh": "(a) 证明:如果 F = R，那么 𝑉 中不存在能使 𝑇 有上三角矩阵的基."
        },
        {
          "t": "bullet",
          "en": "(a)",
          "zh": "(a) 𝑇 关于 𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 的矩阵是下三角的."
        },
        {
          "t": "bullet",
          "en": "(a)",
          "zh": "(a) 证明:𝑇 |𝑈 关于 𝑈 的某个基有上三角矩阵."
        },
        {
          "t": "bullet",
          "en": "(b)",
          "zh": "(b) 证明:商算子 𝑇/𝑈 关于 𝑉/𝑈 的某个基有上三角矩阵. 注 商算子 𝑇/𝑈 已在 5A 节"
        }
      ],
      "note": null,
      "statement_en": "(a) (a) (a) (b)",
      "statement_zh": "(a) 证明:如果 F = R，那么 𝑉 中不存在能使 𝑇 有上三角矩阵的基. (a) 𝑇 关于 𝑣1,…,𝑣𝑛 的矩阵是下三角的. (a) 证明:𝑇 |𝑈 关于 𝑈 的某个基有上三角矩阵. (b) 证明:商算子 𝑇/𝑈 关于 𝑉/𝑈 的某个基有上三角矩阵. 注 商算子 𝑇/𝑈 已在 5A 节"
    },
    {
      "id": "6.1",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.1",
      "name_en": "dot product",
      "name_zh": "点积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For x, y ∈ ℝ<sup>n</sup>, the dot product of x and y, denoted by x · y, is defined by",
          "zh": "对 x, y ∈ ℝ<sup>n</sup>，x 和 y 的点积记作 x · y，由下式定义："
        },
        {
          "t": "formula",
          "en": "x · y = x<sub>1</sub> y<sub>1</sub> + ⋯ + x<sub>n</sub> y<sub>n</sub>",
          "zh": "x · y = x<sub>1</sub> y<sub>1</sub> + ⋯ + x<sub>n</sub> y<sub>n</sub>"
        },
        {
          "t": "p",
          "en": "where x = (x<sub>1</sub>, …, x<sub>n</sub>) and y = (y<sub>1</sub>, …, y<sub>n</sub>). The dot product of two vectors in ℝ<sup>n</sup> is a number, not a vector.",
          "zh": "其中 x = (x<sub>1</sub>, …, x<sub>n</sub>)，y = (y<sub>1</sub>, …, y<sub>n</sub>)。ℝ<sup>n</sup> 中两个向量的点积是数而不是向量。"
        },
        {
          "t": "bullet",
          "en": "x · x ≥ 0 for all x ∈ ℝ<sup>n</sup>.",
          "zh": "对所有 x ∈ ℝ<sup>n</sup>，均有 x · x ≥ 0。"
        },
        {
          "t": "bullet",
          "en": "x · x = 0 if and only if x = 0.",
          "zh": "x · x = 0 当且仅当 x = 0。"
        },
        {
          "t": "bullet",
          "en": "For y ∈ ℝ<sup>n</sup> fixed, the map from ℝ<sup>n</sup> to ℝ that sends x to x · y is linear.",
          "zh": "对于固定的 y ∈ ℝ<sup>n</sup>，把 x 对应到 x · y 的映射是线性的。"
        },
        {
          "t": "bullet",
          "en": "x · y = y · x for all x, y ∈ ℝ<sup>n</sup>.",
          "zh": "对所有 x, y ∈ ℝ<sup>n</sup>，均有 x · y = y · x。"
        }
      ],
      "note": null,
      "statement_en": "For x, y ∈ ℝ n , the dot product of x and y, denoted by x · y, is defined by x · y = x 1  y 1  + ⋯ + x n  y n  where x = (x 1 , …, x n ) and y = (y 1 , …, y n ). The dot product of two vectors in ℝ n  is a number, not a vector. x · x ≥ 0 for all x ∈ ℝ n . x · x = 0 if and only if x = 0. For y ∈ ℝ n  fixed, the map from ℝ n  to ℝ that sends x to x · y is linear. x · y = y · x for all x, y ∈ ℝ n .",
      "statement_zh": "对 x, y ∈ ℝ n ，x 和 y 的点积记作 x · y，由下式定义： x · y = x 1  y 1  + ⋯ + x n  y n  其中 x = (x 1 , …, x n )，y = (y 1 , …, y n )。ℝ n  中两个向量的点积是数而不是向量。 对所有 x ∈ ℝ n ，均有 x · x ≥ 0。 x · x = 0 当且仅当 x = 0。 对于固定的 y ∈ ℝ n ，把 x 对应到 x · y 的映射是线性的。 对所有 x, y ∈ ℝ n ，均有 x · y = y · x。"
    },
    {
      "id": "6.2",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.2",
      "name_en": "inner product",
      "name_zh": "内积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An inner product on 𝑉 is a function that takes each ordered pair (𝑢, 𝑣) of elements of 𝑉 to a number ⟨𝑢, 𝑣⟩ ∈ 𝐅 and has the following properties. positivity ⟨𝑣, 𝑣⟩ ≥ 0 for all 𝑣 ∈ 𝑉. definiteness ⟨𝑣, 𝑣⟩ = 0 if and only if 𝑣 = 0. additivity in first slot ⟨𝑢 + 𝑣, 𝑤⟩ = ⟨𝑢, 𝑤⟩ + ⟨𝑣, 𝑤⟩ for all 𝑢, 𝑣, 𝑤 ∈ 𝑉. homogeneity in first slot ⟨𝜆𝑢, 𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩ for all 𝜆 ∈ 𝐅 and all 𝑢, 𝑣 ∈ 𝑉. conjugate symmetry ⟨𝑢,𝑣⟩ = ⟨𝑣,𝑢⟩ for all 𝑢,𝑣 ∈ 𝑉. Every real number equals its complex conjugate. Thus if we are dealing with a real vector space, then in the last con- dition above we can dispense with the complex conjugate and simply state that ⟨𝑢,𝑣⟩ = ⟨𝑣,𝑢⟩ for all 𝑢,𝑣 ∈ 𝑉. Most mathematicians define inner products as above, but many physicists use a definition that requires homo- geneity in the second slot instead of the first slot.",
          "zh": "𝑉 上的内积是一个函数，它将由 𝑉 中元素构成的每个有序对 (𝑢, 𝑣) 对应至一个数 ⟨𝑢, 𝑣⟩ ∈ F，并满足如下性质. 正性(positivity) 对于所有 𝑣 ∈ 𝑉，均有 ⟨𝑣, 𝑣⟩ ≥ 0. 定性(definiteness) ⟨𝑣, 𝑣⟩ = 0 当且仅当 𝑣 = 0. 第一个位置上的可加性(additivity in first slot) 对于所有 𝑢, 𝑣, 𝑤 ∈ 𝑉，均有 ⟨𝑢 + 𝑣, 𝑤⟩ = ⟨𝑢, 𝑤⟩ + ⟨𝑣, 𝑤⟩. 第一个位置上的齐次性(homogeneity in first slot) 对于所有 𝜆 ∈ F 和所有 𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝜆𝑢, 𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩. 共轭对称性(conjugate symmetry) 对于所有 𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩. 每个实数都等于其复共轭.因此如果我 们讨论的是实向量空间，那么我们可以从上 面最后一个条件中省去复共轭，并直接把它 表述为:对于所有 𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩."
        }
      ],
      "note": null,
      "statement_en": "An inner product on 𝑉 is a function that takes each ordered pair (𝑢, 𝑣) of elements of 𝑉 to a number ⟨𝑢, 𝑣⟩ ∈ 𝐅 and has the following properties. positivity ⟨𝑣, 𝑣⟩ ≥ 0 for all 𝑣 ∈ 𝑉. definiteness ⟨𝑣, 𝑣⟩ = 0 if and only if 𝑣 = 0. additivity in first slot ⟨𝑢 + 𝑣, 𝑤⟩ = ⟨𝑢, 𝑤⟩ + ⟨𝑣, 𝑤⟩ for all 𝑢, 𝑣, 𝑤 ∈ 𝑉. homogeneity in first slot ⟨𝜆𝑢, 𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩ for all 𝜆 ∈ 𝐅 and all 𝑢, 𝑣 ∈ 𝑉. conjugate symmetry ⟨𝑢,𝑣⟩ = ⟨𝑣,𝑢⟩ for all 𝑢,𝑣 ∈ 𝑉. Every real number equals its complex conjugate. Thus if we are dealing with a real vector space, then in the last con- dition above we can dispense with the complex conjugate and simply state that ⟨𝑢,𝑣⟩ = ⟨𝑣,𝑢⟩ for all 𝑢,𝑣 ∈ 𝑉. Most mathematicians define inner products as above, but many physicists use a definition that requires homo- geneity in the second slot instead of the first slot.",
      "statement_zh": "𝑉 上的内积是一个函数，它将由 𝑉 中元素构成的每个有序对 (𝑢, 𝑣) 对应至一个数 ⟨𝑢, 𝑣⟩ ∈ F，并满足如下性质. 正性(positivity) 对于所有 𝑣 ∈ 𝑉，均有 ⟨𝑣, 𝑣⟩ ≥ 0. 定性(definiteness) ⟨𝑣, 𝑣⟩ = 0 当且仅当 𝑣 = 0. 第一个位置上的可加性(additivity in first slot) 对于所有 𝑢, 𝑣, 𝑤 ∈ 𝑉，均有 ⟨𝑢 + 𝑣, 𝑤⟩ = ⟨𝑢, 𝑤⟩ + ⟨𝑣, 𝑤⟩. 第一个位置上的齐次性(homogeneity in first slot) 对于所有 𝜆 ∈ F 和所有 𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝜆𝑢, 𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩. 共轭对称性(conjugate symmetry) 对于所有 𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩. 每个实数都等于其复共轭.因此如果我 们讨论的是实向量空间，那么我们可以从上 面最后一个条件中省去复共轭，并直接把它 表述为:对于所有 𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩."
    },
    {
      "id": "6.4",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.4",
      "name_en": "inner product space",
      "name_zh": "内积空间(inner product space) 带有内积的向量空间称为内积空间.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "repeating the hypothesis that 𝑉 and 𝑊 are inner product spaces, we make the following assumption.",
          "zh": "−1 ˆ∞ −1 𝑓 𝑔. ˆ1 𝑝′𝑞′. 𝑝(𝑥)𝑞(𝑥)e−𝑥 d 𝑥. 内积空间的最重要的例子，就是带有如上例 (a) 所示欧几里得内积的 F<sup>𝑛</sup>.当称 F<sup>𝑛</sup> 是内积 空间时，除非另有说明，你都应假设其上定义的内积是欧几里得内积. 为了让我们不用反复重申 𝑉 和 𝑊 是内积空间这个前提条件，我们作出如下假设."
        }
      ],
      "note": null,
      "statement_en": "repeating the hypothesis that 𝑉 and 𝑊 are inner product spaces, we make the following assumption.",
      "statement_zh": "−1 ˆ∞ −1 𝑓 𝑔. ˆ1 𝑝′𝑞′. 𝑝(𝑥)𝑞(𝑥)e−𝑥 d 𝑥. 内积空间的最重要的例子，就是带有如上例 (a) 所示欧几里得内积的 F𝑛.当称 F𝑛 是内积 空间时，除非另有说明，你都应假设其上定义的内积是欧几里得内积. 为了让我们不用反复重申 𝑉 和 𝑊 是内积空间这个前提条件，我们作出如下假设."
    },
    {
      "id": "6.5",
      "kind": "notation",
      "chapter": "ch6",
      "number": "6.5",
      "name_en": "𝑉, 𝑊",
      "name_zh": "𝑉 、𝑊",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For the rest of this chapter and the next chapter, 𝑉 and 𝑊 denote inner product spaces over 𝐅. Note the slight abuse of language here. An inner product space is a vector space along with an inner product on that vector space. When we say that a vector space 𝑉 is an inner product space, we are also thinking that an inner product on 𝑉 is lurking nearby or is clear from the context (or is the Euclidean inner product if the vector space is 𝐅<sup>𝑛</sup>).",
          "zh": "在本章的剩余部分和下章中，𝑉 和 𝑊 都指代 F 上的内积空间. 注意，这里稍微有些滥用术语.内积空间是带有内积的向量空间.当我们称一向量空间 𝑉 为内积空间时，我们或是将 𝑉 上的内积隐含于其中，或是由上下文可明确 𝑉 上的内积如何定 义(又或者，如果这个向量空间是 F<sup>𝑛</sup>，那么所用内积就是欧几里得内积)."
        }
      ],
      "note": null,
      "statement_en": "For the rest of this chapter and the next chapter, 𝑉 and 𝑊 denote inner product spaces over 𝐅. Note the slight abuse of language here. An inner product space is a vector space along with an inner product on that vector space. When we say that a vector space 𝑉 is an inner product space, we are also thinking that an inner product on 𝑉 is lurking nearby or is clear from the context (or is the Euclidean inner product if the vector space is 𝐅𝑛).",
      "statement_zh": "在本章的剩余部分和下章中，𝑉 和 𝑊 都指代 F 上的内积空间. 注意，这里稍微有些滥用术语.内积空间是带有内积的向量空间.当我们称一向量空间 𝑉 为内积空间时，我们或是将 𝑉 上的内积隐含于其中，或是由上下文可明确 𝑉 上的内积如何定 义(又或者，如果这个向量空间是 F𝑛，那么所用内积就是欧几里得内积)."
    },
    {
      "id": "6.6",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.6",
      "name_en": "basic properties of an inner product",
      "name_zh": "内积的基本性质",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) For each fixed 𝑣 ∈ 𝑉, the function that takes 𝑢 ∈ 𝑉 to ⟨𝑢,𝑣⟩ is a linear map from 𝑉 to 𝐅.",
          "zh": "(a) 对每个固定的𝑣 ∈ 𝑉，将𝑢 ∈ 𝑉对应到⟨𝑢,𝑣⟩的函数都是𝑉到 F 的线性映射."
        },
        {
          "t": "bullet",
          "en": "(b) ⟨0,𝑣⟩ = 0forevery 𝑣 ∈ 𝑉.",
          "zh": "(b) 对每个𝑣 ∈ 𝑉，均有⟨0,𝑣⟩ = 0."
        },
        {
          "t": "bullet",
          "en": "(c) ⟨𝑣,0⟩ = 0forevery 𝑣 ∈ 𝑉.",
          "zh": "(c) 对每个𝑣 ∈ 𝑉，均有⟨𝑣,0⟩ = 0."
        }
      ],
      "note": null,
      "statement_en": "(a) For each fixed 𝑣 ∈ 𝑉, the function that takes 𝑢 ∈ 𝑉 to ⟨𝑢,𝑣⟩ is a linear map from 𝑉 to 𝐅. (b) ⟨0,𝑣⟩ = 0forevery 𝑣 ∈ 𝑉. (c) ⟨𝑣,0⟩ = 0forevery 𝑣 ∈ 𝑉.",
      "statement_zh": "(a) 对每个固定的𝑣 ∈ 𝑉，将𝑢 ∈ 𝑉对应到⟨𝑢,𝑣⟩的函数都是𝑉到 F 的线性映射. (b) 对每个𝑣 ∈ 𝑉，均有⟨0,𝑣⟩ = 0. (c) 对每个𝑣 ∈ 𝑉，均有⟨𝑣,0⟩ = 0."
    },
    {
      "id": "6.7",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.7",
      "name_en": "norm, ‖𝑣‖",
      "name_zh": "范数(norm)、 ∥ 𝑣 ∥",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑣 ∈ 𝑉, the norm of 𝑣, denoted by ‖𝑣‖, is defined by ‖𝑣‖ = √⟨𝑣, 𝑣⟩.",
          "zh": "对 𝑣 ∈ 𝑉，𝑣 的范数记作 ∥𝑣∥，定义为 ∥𝑣∥ = p⟨𝑣,𝑣⟩."
        }
      ],
      "note": null,
      "statement_en": "For 𝑣 ∈ 𝑉, the norm of 𝑣, denoted by ‖𝑣‖, is defined by ‖𝑣‖ = √⟨𝑣, 𝑣⟩.",
      "statement_zh": "对 𝑣 ∈ 𝑉，𝑣 的范数记作 ∥𝑣∥，定义为 ∥𝑣∥ = p⟨𝑣,𝑣⟩."
    },
    {
      "id": "6.9",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.9",
      "name_en": "basic properties of the norm Suppose",
      "name_zh": "范数的基本性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose v ∈ V.",
          "zh": "假设 v ∈ V。"
        },
        {
          "t": "bullet",
          "en": "(a) ‖v‖ = 0 if and only if v = 0.",
          "zh": "(a) ‖v‖ = 0 当且仅当 v = 0。"
        },
        {
          "t": "bullet",
          "en": "(b) ‖λv‖ = |λ| ‖v‖ for all λ ∈ F.",
          "zh": "(b) 对所有 λ ∈ F，有 ‖λv‖ = |λ| ‖v‖。"
        }
      ],
      "note": null,
      "statement_en": "Suppose v ∈ V. (a) ‖v‖ = 0 if and only if v = 0. (b) ‖λv‖ = |λ| ‖v‖ for all λ ∈ F.",
      "statement_zh": "假设 v ∈ V。 (a) ‖v‖ = 0 当且仅当 v = 0。 (b) 对所有 λ ∈ F，有 ‖λv‖ = |λ| ‖v‖。"
    },
    {
      "id": "6.10",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.10",
      "name_en": "orthogonal",
      "name_zh": "正交(orthogonal) 称两个向量 𝑢,𝑣 ∈ 𝑉 是正交的，若 ⟨𝑢,𝑣⟩ = 0.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Two vectors u, v ∈ V are called orthogonal if ⟨u, v⟩ = 0.",
          "zh": "如果 ⟨u, v⟩ = 0，就称 u, v ∈ V 正交。"
        }
      ],
      "note": null,
      "statement_en": "Two vectors u, v ∈ V are called orthogonal if ⟨u, v⟩ = 0.",
      "statement_zh": "如果 ⟨u, v⟩ = 0，就称 u, v ∈ V 正交。"
    },
    {
      "id": "6.11",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.11",
      "name_en": "orthogonality and 0",
      "name_zh": "正交性和 0",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) 0 is orthogonal to every vector in V.",
          "zh": "(a) 0 与 V 中每个向量都正交。"
        },
        {
          "t": "bullet",
          "en": "(b) 0 is the only vector in V that is orthogonal to itself.",
          "zh": "(b) 0 是 V 中唯一与自身正交的向量。"
        }
      ],
      "note": null,
      "statement_en": "(a) 0 is orthogonal to every vector in V. (b) 0 is the only vector in V that is orthogonal to itself.",
      "statement_zh": "(a) 0 与 V 中每个向量都正交。 (b) 0 是 V 中唯一与自身正交的向量。"
    },
    {
      "id": "6.12",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.12",
      "name_en": "Pythagorean theorem",
      "name_zh": "毕达哥拉斯定理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑢, 𝑣 ∈ 𝑉. If 𝑢 and 𝑣 are orthogonal, then",
          "zh": "∥𝑢 + 𝑣∥<sup>2</sup> = ∥𝑢∥<sup>2</sup> + ∥𝑣∥<sup>2</sup>. 1 该定理又称勾股定理."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑢, 𝑣 ∈ 𝑉. If 𝑢 and 𝑣 are orthogonal, then",
      "statement_zh": "∥𝑢 + 𝑣∥2 = ∥𝑢∥2 + ∥𝑣∥2. 1 该定理又称勾股定理."
    },
    {
      "id": "6.13",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.13",
      "name_en": "an orthogonal decomposition",
      "name_zh": "来证明下面的柯西-施瓦茨不等式，它是数学中最重要的不等式 之一.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑢, 𝑣 ∈ 𝑉, with 𝑣 ≠ 0. Set 𝑐 = ⟨𝑢, 𝑣⟩ and 𝑤 = 𝑢 − ⟨𝑢, 𝑣⟩ 𝑣. Then ‖𝑣‖<sup>2</sup> ‖𝑣‖<sup>2</sup> 𝑢=𝑐𝑣+𝑤 and ⟨𝑤,𝑣⟩=0. The orthogonal decomposition",
          "zh": "6.13 一种正交分解 设 𝑢, 𝑣 ∈ 𝑉，且 𝑣 = ̸ 0.取 𝑐 = ⟨𝑢, 𝑣⟩ 及 𝑤 = 𝑢 − ⟨𝑢, 𝑣⟩ 𝑣.那么 ∥𝑣∥<sup>2</sup> ∥𝑣∥<sup>2</sup> 𝑢 = 𝑐𝑣+𝑤 且 ⟨𝑤,𝑣⟩ = 0."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑢, 𝑣 ∈ 𝑉, with 𝑣 ≠ 0. Set 𝑐 = ⟨𝑢, 𝑣⟩ and 𝑤 = 𝑢 − ⟨𝑢, 𝑣⟩ 𝑣. Then ‖𝑣‖2 ‖𝑣‖2 𝑢=𝑐𝑣+𝑤 and ⟨𝑤,𝑣⟩=0. The orthogonal decomposition",
      "statement_zh": "6.13 一种正交分解 设 𝑢, 𝑣 ∈ 𝑉，且 𝑣 = ̸ 0.取 𝑐 = ⟨𝑢, 𝑣⟩ 及 𝑤 = 𝑢 − ⟨𝑢, 𝑣⟩ 𝑣.那么 ∥𝑣∥2 ∥𝑣∥2 𝑢 = 𝑐𝑣+𝑤 且 ⟨𝑤,𝑣⟩ = 0."
    },
    {
      "id": "6.14",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.14",
      "name_en": "Cauchy-Schwarz inequality",
      "name_zh": "柯西-施瓦茨不等式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑢, 𝑣 ∈ 𝑉. Then This inequality is an equality if and only if one of 𝑢, 𝑣 is a scalar multiple of the other.",
          "zh": "设 𝑢, 𝑣 ∈ 𝑉.那么 当且仅当 𝑢, 𝑣 成标量倍数关系时，上述不等式取得等号. |⟨𝑢, 𝑣⟩| ≤ ∥𝑢∥∥𝑣∥."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑢, 𝑣 ∈ 𝑉. Then This inequality is an equality if and only if one of 𝑢, 𝑣 is a scalar multiple of the other.",
      "statement_zh": "设 𝑢, 𝑣 ∈ 𝑉.那么 当且仅当 𝑢, 𝑣 成标量倍数关系时，上述不等式取得等号. |⟨𝑢, 𝑣⟩| ≤ ∥𝑢∥∥𝑣∥."
    },
    {
      "id": "6.15",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.15",
      "name_en": "equality in Cauchy–Schwarz",
      "name_zh": "柯西-施瓦茨不等式中的等号",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The Cauchy–Schwarz inequality is an equality if and only if one of u, v is a scalar multiple of the other.",
          "zh": "柯西-施瓦茨不等式取等号，当且仅当 u, v 中的一个是另一个的标量倍。"
        }
      ],
      "note": null,
      "statement_en": "The Cauchy–Schwarz inequality is an equality if and only if one of u, v is a scalar multiple of the other.",
      "statement_zh": "柯西-施瓦茨不等式取等号，当且仅当 u, v 中的一个是另一个的标量倍。"
    },
    {
      "id": "6.17",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.17",
      "name_en": "triangle inequality Suppose",
      "name_zh": "三角不等式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑢, 𝑣 ∈ 𝑉. Then In this triangle, the length of 𝑢 + 𝑣 is less than the length of 𝑢 plus the length of 𝑣. ‖𝑢+𝑣‖ ≤ ‖𝑢‖+‖𝑣‖. This inequality is an equality if and only if one of 𝑢, 𝑣 is a nonnegative real multiple of the other.",
          "zh": "设 𝑢, 𝑣 ∈ 𝑉.那么 该不等式取得等号，当且仅当 𝑢, 𝑣 中任意一者是另一者的非负实数倍."
        }
      ],
      "note": null,
      "statement_en": "𝑢, 𝑣 ∈ 𝑉. Then In this triangle, the length of 𝑢 + 𝑣 is less than the length of 𝑢 plus the length of 𝑣. ‖𝑢+𝑣‖ ≤ ‖𝑢‖+‖𝑣‖. This inequality is an equality if and only if one of 𝑢, 𝑣 is a nonnegative real multiple of the other.",
      "statement_zh": "设 𝑢, 𝑣 ∈ 𝑉.那么 该不等式取得等号，当且仅当 𝑢, 𝑣 中任意一者是另一者的非负实数倍."
    },
    {
      "id": "6.19",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.19",
      "name_en": "follows from the Cauchy",
      "name_zh": "follows from the Cauchy",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "–Schwarz inequality (6.14). Taking square roots of both sides of the inequality above gives the desired inequality. The",
          "zh": "follows from the Cauchy"
        }
      ],
      "note": null,
      "statement_en": "–Schwarz inequality (6.14). Taking square roots of both sides of the inequality above gives the desired inequality. The",
      "statement_zh": "follows from the Cauchy"
    },
    {
      "id": "6.21",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.21",
      "name_en": "parallelogram equality Suppose",
      "name_zh": "平行四边形等式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑢, 𝑣 ∈ 𝑉. Then Inner Products and Norms 191",
          "zh": "平行四边形等式"
        }
      ],
      "note": null,
      "statement_en": "𝑢, 𝑣 ∈ 𝑉. Then Inner Products and Norms 191",
      "statement_zh": "平行四边形等式"
    },
    {
      "id": "6.22",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.22",
      "name_en": "orthonormal",
      "name_zh": "规范正交",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A list of vectors is called orthonormal if each vector in the list has norm 1 and is orthogonal to all the other vectors in the list. • In other words, a list 𝑒<sub>1</sub>, …, 𝑒<sub>𝑚</sub> of vectors in 𝑉 is orthonormal if ⎧{1 if 𝑗 = 𝑘, ⟨𝑒<sub>𝑗</sub>,𝑒<sub>𝑘</sub>⟩ = ⎨{⎩0 if 𝑗 = ̸𝑘 for all 𝑗, 𝑘 ∈ {1, …, 𝑚}.",
          "zh": "如果一个向量组中所有向量的范数都是 1，且每个向量与其他向量都正交，则称该向 量组是规范正交的. 换言之，𝑉 中向量组 𝑒<sub>1</sub>, …, 𝑒<sub>𝑚</sub> 是规范正交的，若对所有 𝑗, 𝑘 ∈ {1, …, 𝑚}， 1, 若𝑗 = 𝑘, ⟨𝑒<sub>𝑗</sub>,𝑒<sub>𝑘</sub>⟩ = 0, 若𝑗 = ̸𝑘."
        }
      ],
      "note": null,
      "statement_en": "A list of vectors is called orthonormal if each vector in the list has norm 1 and is orthogonal to all the other vectors in the list. • In other words, a list 𝑒1, …, 𝑒𝑚 of vectors in 𝑉 is orthonormal if ⎧{1 if 𝑗 = 𝑘, ⟨𝑒𝑗,𝑒𝑘⟩ = ⎨{⎩0 if 𝑗 = ̸𝑘 for all 𝑗, 𝑘 ∈ {1, …, 𝑚}.",
      "statement_zh": "如果一个向量组中所有向量的范数都是 1，且每个向量与其他向量都正交，则称该向 量组是规范正交的. 换言之，𝑉 中向量组 𝑒1, …, 𝑒𝑚 是规范正交的，若对所有 𝑗, 𝑘 ∈ {1, …, 𝑚}， 1, 若𝑗 = 𝑘, ⟨𝑒𝑗,𝑒𝑘⟩ = 0, 若𝑗 = ̸𝑘."
    },
    {
      "id": "6.24",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.24",
      "name_en": "norm of an orthonormal linear combination",
      "name_zh": "规范正交组线性组合的范数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑒<sub>1</sub>,..., 𝑒<sub>𝑚</sub> is an orthonormal list of vectors in 𝑉. Then ‖𝑎1𝑒<sub>1</sub> +⋯+𝑎𝑚𝑒<sub>𝑚</sub>‖<sup>2</sup> = |𝑎1|<sup>2</sup> +⋯+|𝑎𝑚|<sup>2</sup> forall𝑎1,...,𝑎𝑚 ∈𝐅.",
          "zh": "设𝑒<sub>1</sub>,…,𝑒<sub>𝑚</sub> 是𝑉中的规范正交向量组.那么对所有𝑎<sub>1</sub>,…,𝑎<sub>𝑚</sub> ∈ F，有 ∥𝑎<sub>1</sub>𝑒<sub>1</sub> +···+𝑎<sub>𝑚</sub>𝑒<sub>𝑚</sub>∥2 = |𝑎<sub>1</sub>|<sup>2</sup> +···+|𝑎<sub>𝑚</sub>|<sup>2</sup>."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑒1,..., 𝑒𝑚 is an orthonormal list of vectors in 𝑉. Then ‖𝑎1𝑒1 +⋯+𝑎𝑚𝑒𝑚‖2 = |𝑎1|2 +⋯+|𝑎𝑚|2 forall𝑎1,...,𝑎𝑚 ∈𝐅.",
      "statement_zh": "设𝑒1,…,𝑒𝑚 是𝑉中的规范正交向量组.那么对所有𝑎1,…,𝑎𝑚 ∈ F，有 ∥𝑎1𝑒1 +···+𝑎𝑚𝑒𝑚∥2 = |𝑎1|2 +···+|𝑎𝑚|2."
    },
    {
      "id": "6.25",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.25",
      "name_en": "orthonormal lists are linearly independent",
      "name_zh": "规范正交组是线性无关的 每个规范正交向量组都是线性无关的.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every orthonormal list of vectors is linearly independent.",
          "zh": "规范正交组是线性无关的 每个规范正交向量组都是线性无关的."
        }
      ],
      "note": null,
      "statement_en": "Every orthonormal list of vectors is linearly independent.",
      "statement_zh": "规范正交组是线性无关的 每个规范正交向量组都是线性无关的."
    },
    {
      "id": "6.26",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.26",
      "name_en": "Bessel’s inequality",
      "name_zh": "贝塞尔不等式(Bessel’s inequality) 设𝑒<sub>1</sub>,…,𝑒<sub>𝑚</sub> 是𝑉 中的规范正交向量组.若𝑣 ∈ 𝑉，那么",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑒<sub>1</sub>,..., 𝑒<sub>𝑚</sub> is an orthonormal list of vectors in 𝑉. If 𝑣 ∈ 𝑉 then ∣⟨𝑣, 𝑒<sub>1</sub>⟩∣2 + ⋯ + ∣⟨𝑣, 𝑒<sub>𝑚</sub>⟩∣2 ≤ ‖𝑣‖<sup>2</sup>.",
          "zh": "|⟨𝑣,𝑒<sub>1</sub>⟩|<sup>2</sup> +···+|⟨𝑣,𝑒<sub>𝑚</sub>⟩|<sup>2</sup> ≤ ∥𝑣∥<sup>2</sup>."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑒1,..., 𝑒𝑚 is an orthonormal list of vectors in 𝑉. If 𝑣 ∈ 𝑉 then ∣⟨𝑣, 𝑒1⟩∣2 + ⋯ + ∣⟨𝑣, 𝑒𝑚⟩∣2 ≤ ‖𝑣‖2.",
      "statement_zh": "|⟨𝑣,𝑒1⟩|2 +···+|⟨𝑣,𝑒𝑚⟩|2 ≤ ∥𝑣∥2."
    },
    {
      "id": "6.27",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.27",
      "name_en": "orthonormal basis",
      "name_zh": "规范正交基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An orthonormal basis of 𝑉 is an orthonormal list of vectors in 𝑉 that is also a basis of 𝑉. For example, the standard basis is an orthonormal basis of 𝐅<sup>𝑛</sup>.",
          "zh": "𝑉 的规范正交基，就是 𝑉 中既是规范正交组又是基的向量组. 例如，标准基是 F<sup>𝑛</sup> 的一个规范正交基."
        }
      ],
      "note": null,
      "statement_en": "An orthonormal basis of 𝑉 is an orthonormal list of vectors in 𝑉 that is also a basis of 𝑉. For example, the standard basis is an orthonormal basis of 𝐅𝑛.",
      "statement_zh": "𝑉 的规范正交基，就是 𝑉 中既是规范正交组又是基的向量组. 例如，标准基是 F𝑛 的一个规范正交基."
    },
    {
      "id": "6.28",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.28",
      "name_en": "orthonormal lists of the right length are orthonormal bases",
      "name_zh": "长度恰好的规范正交组是规范正交基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. Then every orthonormal list of vectors in 𝑉 of length dim 𝑉 is an orthonormal basis of 𝑉.",
          "zh": "设 𝑉 是有限维的.那么 𝑉 中每个长度为 dim 𝑉 的规范正交向量组都是 𝑉 的规范正交基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then every orthonormal list of vectors in 𝑉 of length dim 𝑉 is an orthonormal basis of 𝑉.",
      "statement_zh": "设 𝑉 是有限维的.那么 𝑉 中每个长度为 dim 𝑉 的规范正交向量组都是 𝑉 的规范正交基."
    },
    {
      "id": "6.30",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.30",
      "name_en": "writing a vector as a linear combination of an orthonormal basis Suppose",
      "name_zh": "将向量写成规范正交基的线性组合 设𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 是𝑉 的规范正交基且𝑢,𝑣 ∈ 𝑉.那么",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) 𝑣 = ⟨𝑣,𝑒<sub>1</sub>⟩𝑒<sub>1</sub> +⋯+⟨𝑣,𝑒<sub>𝑛</sub>⟩𝑒<sub>𝑛</sub>;",
          "zh": "(a) 𝑣 = ⟨𝑣, 𝑒<sub>1</sub>⟩𝑒<sub>1</sub> + ⋯ + ⟨𝑣, 𝑒<sub>𝑛</sub>⟩𝑒<sub>𝑛</sub>，"
        },
        {
          "t": "bullet",
          "en": "(b) ‖𝑣‖<sup>2</sup> = ∣⟨𝑣, 𝑒<sub>1</sub>⟩∣2 + ⋯ + ∣⟨𝑣, 𝑒<sub>𝑛</sub>⟩∣2;",
          "zh": "(b) ∥𝑣∥<sup>2</sup> = |⟨𝑣,𝑒<sub>1</sub>⟩|<sup>2</sup> +···+|⟨𝑣,𝑒<sub>𝑛</sub>⟩|<sup>2</sup>，"
        },
        {
          "t": "bullet",
          "en": "(c) ⟨𝑢,𝑣⟩ = ⟨𝑢,𝑒<sub>1</sub>⟩⟨𝑣,𝑒<sub>1</sub>⟩+⋯+⟨𝑢,𝑒<sub>𝑛</sub>⟩⟨𝑣,𝑒<sub>𝑛</sub>⟩.",
          "zh": "(c) ⟨𝑢,𝑣⟩ = ⟨𝑢,𝑒<sub>1</sub>⟩⟨𝑣,𝑒<sub>1</sub>⟩+···+⟨𝑢,𝑒<sub>𝑛</sub>⟩⟨𝑣,𝑒<sub>𝑛</sub>⟩."
        }
      ],
      "note": null,
      "statement_en": "(a) 𝑣 = ⟨𝑣,𝑒1⟩𝑒1 +⋯+⟨𝑣,𝑒𝑛⟩𝑒𝑛; (b) ‖𝑣‖2 = ∣⟨𝑣, 𝑒1⟩∣2 + ⋯ + ∣⟨𝑣, 𝑒𝑛⟩∣2; (c) ⟨𝑢,𝑣⟩ = ⟨𝑢,𝑒1⟩⟨𝑣,𝑒1⟩+⋯+⟨𝑢,𝑒𝑛⟩⟨𝑣,𝑒𝑛⟩.",
      "statement_zh": "(a) 𝑣 = ⟨𝑣, 𝑒1⟩𝑒1 + ⋯ + ⟨𝑣, 𝑒𝑛⟩𝑒𝑛， (b) ∥𝑣∥2 = |⟨𝑣,𝑒1⟩|2 +···+|⟨𝑣,𝑒𝑛⟩|2， (c) ⟨𝑢,𝑣⟩ = ⟨𝑢,𝑒1⟩⟨𝑣,𝑒1⟩+···+⟨𝑢,𝑒𝑛⟩⟨𝑣,𝑒𝑛⟩."
    },
    {
      "id": "6.32",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.32",
      "name_en": "is an orthonormal list such that",
      "name_zh": "格拉姆-施密特过程",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "6.33 span(𝑣<sub>1</sub>, …, 𝑣<sub>𝑘</sub>−1) = span(𝑒<sub>1</sub>, …, 𝑒<sub>𝑘</sub>−1). Because 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub> is linearly independent, we have 𝑣<sub>𝑘</sub> ∈ ̸ span(𝑣<sub>1</sub>, …, 𝑣<sub>𝑘</sub>−1). Thus 𝑣<sub>𝑘</sub> ∈ ̸ span(𝑒<sub>1</sub>, …, 𝑒<sub>𝑘</sub>−1) = span(𝑓<sub>1</sub>, …, 𝑓<sub>𝑘</sub>−1), which implies that 𝑓<sub>𝑘</sub> = ̸ 0. Hence we are not dividing by 0 in the definition of 𝑒<sub>𝑘</sub> given in 6.32. Dividing a vector by its norm produces a new vector with norm 1; thus ‖𝑒<sub>𝑘</sub>‖ = 1. Let 𝑗 ∈ {1,…,𝑘 − 1}. Then ⟨𝑒<sub>𝑘</sub>,𝑒<sub>𝑗</sub>⟩ = = = 1 ‖𝑓<sub>𝑘</sub>‖‖𝑓<sub>𝑗</sub>‖ ‖ 𝑓<sub>𝑘</sub>‖ ‖ 𝑓<sub>𝑗</sub>‖ 1 ‖𝑓<sub>𝑘</sub>‖‖𝑓<sub>𝑗</sub>‖ ⟨𝑓<sub>𝑘</sub>, 𝑓<sub>𝑗</sub>⟩ ⟨𝑣<sub>𝑘</sub> − ⟨𝑣<sub>𝑘</sub>, 𝑓<sub>1</sub>⟩ 𝑓<sub>1</sub> − ⋯ − ⟨𝑣<sub>𝑘</sub>, 𝑓<sub>𝑘</sub>−1⟩ 𝑓<sub>𝑘</sub>−1, 𝑓<sub>𝑗</sub>⟩ ‖ 𝑓<sub>1</sub>‖<sup>2</sup> ‖ 𝑓<sub>𝑘</sub>−1‖<sup>2</sup> (⟨𝑣<sub>𝑘</sub>, 𝑓<sub>𝑗</sub>⟩ − ⟨𝑣<sub>𝑘</sub>, 𝑓<sub>𝑗</sub>⟩) = 0. Thus 𝑒<sub>1</sub>, …, 𝑒<sub>𝑘</sub> is an orthonormal list. From the definition of 𝑒<sub>𝑘</sub> given in 6.32, we see that 𝑣<sub>𝑘</sub> ∈ span(𝑒<sub>1</sub>, …, 𝑒<sub>𝑘</sub>). Combining this information with",
          "zh": "设 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub> 是 𝑉 中的线性无关向量组.令 𝑓<sub>1</sub> = 𝑣<sub>1</sub>.对 𝑘 = 2, …, 𝑚，依次定义 𝑓<sub>𝑘</sub> 为 𝑓<sub>𝑘</sub> = 𝑣<sub>𝑘</sub>−⟨𝑣<sub>𝑘</sub>,𝑓<sub>1</sub>⟩𝑓<sub>1</sub>−···−⟨𝑣<sub>𝑘</sub>,𝑓<sub>𝑘</sub>−1⟩𝑓<sub>𝑘</sub>−1. ∥ 𝑓<sub>1</sub>∥<sup>2</sup> ∥ 𝑓<sub>𝑘</sub>−1∥<sup>2</sup> 对每个 𝑘 = 1,…,𝑚，令 𝑒<sub>𝑘</sub> = 𝑓<sub>𝑘</sub>.那么 𝑒<sub>1</sub>,…,𝑒<sub>𝑚</sub> 是𝑉 中的规范正交向量组，且对每 个 𝑘 = 1, …, 𝑚 满足 ∥ 𝑓<sub>𝑘</sub> ∥ span(𝑣<sub>1</sub>,…,𝑣<sub>𝑘</sub>) = span(𝑒<sub>1</sub>,…,𝑒<sub>𝑘</sub>)."
        }
      ],
      "note": null,
      "statement_en": "6.33 span(𝑣1, …, 𝑣𝑘−1) = span(𝑒1, …, 𝑒𝑘−1). Because 𝑣1, …, 𝑣𝑚 is linearly independent, we have 𝑣𝑘 ∈ ̸ span(𝑣1, …, 𝑣𝑘−1). Thus 𝑣𝑘 ∈ ̸ span(𝑒1, …, 𝑒𝑘−1) = span(𝑓1, …, 𝑓𝑘−1), which implies that 𝑓𝑘 = ̸ 0. Hence we are not dividing by 0 in the definition of 𝑒𝑘 given in 6.32. Dividing a vector by its norm produces a new vector with norm 1; thus ‖𝑒𝑘‖ = 1. Let 𝑗 ∈ {1,…,𝑘 − 1}. Then ⟨𝑒𝑘,𝑒𝑗⟩ = = = 1 ‖𝑓𝑘‖‖𝑓𝑗‖ ‖ 𝑓𝑘‖ ‖ 𝑓𝑗‖ 1 ‖𝑓𝑘‖‖𝑓𝑗‖ ⟨𝑓𝑘, 𝑓𝑗⟩ ⟨𝑣𝑘 − ⟨𝑣𝑘, 𝑓1⟩ 𝑓1 − ⋯ − ⟨𝑣𝑘, 𝑓𝑘−1⟩ 𝑓𝑘−1, 𝑓𝑗⟩ ‖ 𝑓1‖2 ‖ 𝑓𝑘−1‖2 (⟨𝑣𝑘, 𝑓𝑗⟩ − ⟨𝑣𝑘, 𝑓𝑗⟩) = 0. Thus 𝑒1, …, 𝑒𝑘 is an orthonormal list. From the definition of 𝑒𝑘 given in 6.32, we see that 𝑣𝑘 ∈ span(𝑒1, …, 𝑒𝑘). Combining this information with",
      "statement_zh": "设 𝑣1, …, 𝑣𝑚 是 𝑉 中的线性无关向量组.令 𝑓1 = 𝑣1.对 𝑘 = 2, …, 𝑚，依次定义 𝑓𝑘 为 𝑓𝑘 = 𝑣𝑘−⟨𝑣𝑘,𝑓1⟩𝑓1−···−⟨𝑣𝑘,𝑓𝑘−1⟩𝑓𝑘−1. ∥ 𝑓1∥2 ∥ 𝑓𝑘−1∥2 对每个 𝑘 = 1,…,𝑚，令 𝑒𝑘 = 𝑓𝑘.那么 𝑒1,…,𝑒𝑚 是𝑉 中的规范正交向量组，且对每 个 𝑘 = 1, …, 𝑚 满足 ∥ 𝑓𝑘 ∥ span(𝑣1,…,𝑣𝑘) = span(𝑒1,…,𝑒𝑘)."
    },
    {
      "id": "6.33",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.33",
      "name_en": "shows that span",
      "name_zh": "shows that span",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(𝑣<sub>1</sub>, …, 𝑣<sub>𝑘</sub>) ⊆ span(𝑒<sub>1</sub>, …, 𝑒<sub>𝑘</sub>). Both lists above are linearly independent (the 𝑣’s by hypothesis, and the 𝑒’s by orthonormality and 6.25). Thus both subspaces above have dimension 𝑘, and hence they are equal, completing the induction step and thus completing the",
          "zh": "shows that span"
        }
      ],
      "note": null,
      "statement_en": "(𝑣1, …, 𝑣𝑘) ⊆ span(𝑒1, …, 𝑒𝑘). Both lists above are linearly independent (the 𝑣’s by hypothesis, and the 𝑒’s by orthonormality and 6.25). Thus both subspaces above have dimension 𝑘, and hence they are equal, completing the induction step and thus completing the",
      "statement_zh": "shows that span"
    },
    {
      "id": "6.35",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.35",
      "name_en": "existence of orthonormal basis",
      "name_zh": "规范正交基的存在性 每个有限维内积空间都有规范正交基.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every finite-dimensional inner product space has an orthonormal basis.",
          "zh": "规范正交基的存在性 每个有限维内积空间都有规范正交基."
        }
      ],
      "note": null,
      "statement_en": "Every finite-dimensional inner product space has an orthonormal basis.",
      "statement_zh": "规范正交基的存在性 每个有限维内积空间都有规范正交基."
    },
    {
      "id": "6.36",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.36",
      "name_en": "every orthonormal list extends to an orthonormal basis",
      "name_zh": "每个规范正交组都可被扩充为规范正交基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. Then every orthonormal list of vectors in 𝑉 can be extended to an orthonormal basis of 𝑉.",
          "zh": "设 𝑉 是有限维的.那么 𝑉 中每个规范正交向量组都能被扩充为 𝑉 的一个规范正交基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then every orthonormal list of vectors in 𝑉 can be extended to an orthonormal basis of 𝑉.",
      "statement_zh": "设 𝑉 是有限维的.那么 𝑉 中每个规范正交向量组都能被扩充为 𝑉 的一个规范正交基."
    },
    {
      "id": "6.37",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.37",
      "name_en": "upper-triangular matrix with respect to some orthonormal basis",
      "name_zh": "关于某个规范正交基有上三角矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose V is finite-dimensional and T ∈ L(V). Then T has an upper-triangular matrix with respect to some orthonormal basis of V if and only if the minimal polynomial of T equals (z − λ<sub>1</sub>) ⋯ (z − λ<sub>m</sub>) for some λ<sub>1</sub>, …, λ<sub>m</sub> ∈ F.",
          "zh": "假设 V 是有限维的且 T ∈ L(V)。那么 T 关于 V 的某个规范正交基有上三角矩阵，当且仅当 T 的最小多项式等于 (z − λ<sub>1</sub>) ⋯ (z − λ<sub>m</sub>)，其中 λ<sub>1</sub>, …, λ<sub>m</sub> ∈ F。"
        }
      ],
      "note": null,
      "statement_en": "Suppose V is finite-dimensional and T ∈ L(V). Then T has an upper-triangular matrix with respect to some orthonormal basis of V if and only if the minimal polynomial of T equals (z − λ1) ⋯ (z − λm) for some λ1, …, λm ∈ F.",
      "statement_zh": "假设 V 是有限维的且 T ∈ L(V)。那么 T 关于 V 的某个规范正交基有上三角矩阵，当且仅当 T 的最小多项式等于 (z − λ1) ⋯ (z − λm)，其中 λ1, …, λm ∈ F。"
    },
    {
      "id": "6.38",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.38",
      "name_en": "Schur’s theorem",
      "name_zh": "舒尔定理(Schur’s theorem) 有限维复内积空间上的每个算子都关于某个规范正交基有上三角矩阵.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every operator on a finite-dimensional complex inner product space has an upper-triangular matrix with respect to some orthonormal basis.",
          "zh": "舒尔定理(Schur’s theorem) 有限维复内积空间上的每个算子都关于某个规范正交基有上三角矩阵."
        }
      ],
      "note": null,
      "statement_en": "Every operator on a finite-dimensional complex inner product space has an upper-triangular matrix with respect to some orthonormal basis.",
      "statement_zh": "舒尔定理(Schur’s theorem) 有限维复内积空间上的每个算子都关于某个规范正交基有上三角矩阵."
    },
    {
      "id": "6.39",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.39",
      "name_en": "linear functional, dual space, 𝑉′",
      "name_zh": "线性泛函(linear functional)，对偶空间(dual space)、𝑉′",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear functional on 𝑉 is a linear map from 𝑉 to 𝐅. • The dual space of 𝑉, denoted by 𝑉′, is the vector space of all linear functionals on 𝑉. In other words, 𝑉′ = L(𝑉, 𝐅).",
          "zh": "线性泛函(linear functional)，对偶空间(dual space)、𝑉′"
        }
      ],
      "note": null,
      "statement_en": "A linear functional on 𝑉 is a linear map from 𝑉 to 𝐅. • The dual space of 𝑉, denoted by 𝑉′, is the vector space of all linear functionals on 𝑉. In other words, 𝑉′ = L(𝑉, 𝐅).",
      "statement_zh": "线性泛函(linear functional)，对偶空间(dual space)、𝑉′"
    },
    {
      "id": "6.42",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.42",
      "name_en": "Riesz representation theorem",
      "name_zh": "里斯表示定理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝜑 is a linear functional on 𝑉. Then there is a unique vector 𝑣 ∈ 𝑉 such that 𝜑(𝑢) = ⟨𝑢, 𝑣⟩ for every 𝑢 ∈ 𝑉.",
          "zh": "设 𝑉 是有限维的，𝜑 是 𝑉 上的线性泛函.那么存在唯一的向量 𝑣 ∈ 𝑉 ，使得对每个 𝑢 ∈ 𝑉 都有 𝜑(𝑢) = ⟨𝑢, 𝑣⟩."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝜑 is a linear functional on 𝑉. Then there is a unique vector 𝑣 ∈ 𝑉 such that 𝜑(𝑢) = ⟨𝑢, 𝑣⟩ for every 𝑢 ∈ 𝑉.",
      "statement_zh": "设 𝑉 是有限维的，𝜑 是 𝑉 上的线性泛函.那么存在唯一的向量 𝑣 ∈ 𝑉 ，使得对每个 𝑢 ∈ 𝑉 都有 𝜑(𝑢) = ⟨𝑢, 𝑣⟩."
    },
    {
      "id": "6.43",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.43",
      "name_en": "gives a formula for the vector",
      "name_zh": "gives a formula for the vector",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑣 that satisfies 𝜑(𝑢) = ⟨𝑢, 𝑣⟩ for all 𝑢 ∈ 𝑉. Specifically, we have 𝑣 = 𝜑(𝑒<sub>1</sub>)𝑒<sub>1</sub> + ⋯ + 𝜑(𝑒<sub>𝑛</sub>)𝑒<sub>𝑛</sub>. The right side of the equation above seems to depend on the orthonormal basis 𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub> as well as on 𝜑. However, 6.42 tells us that 𝑣 is uniquely determined by 𝜑. Thus the right side of the equation above is the same regardless of which orthonormal basis 𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub> of 𝑉 is chosen. For two additional different proofs of the Riesz representation theorem, see",
          "zh": "gives a formula for the vector"
        }
      ],
      "note": null,
      "statement_en": "𝑣 that satisfies 𝜑(𝑢) = ⟨𝑢, 𝑣⟩ for all 𝑢 ∈ 𝑉. Specifically, we have 𝑣 = 𝜑(𝑒1)𝑒1 + ⋯ + 𝜑(𝑒𝑛)𝑒𝑛. The right side of the equation above seems to depend on the orthonormal basis 𝑒1, …, 𝑒𝑛 as well as on 𝜑. However, 6.42 tells us that 𝑣 is uniquely determined by 𝜑. Thus the right side of the equation above is the same regardless of which orthonormal basis 𝑒1, …, 𝑒𝑛 of 𝑉 is chosen. For two additional different proofs of the Riesz representation theorem, see",
      "statement_zh": "gives a formula for the vector"
    },
    {
      "id": "6.45",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.45",
      "name_en": "holds for all",
      "name_zh": "holds for all",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑝 ∈ 𝒫5(𝐑), then we should take 𝑞(𝑥) = 105 ((27 − 2𝜋2) + (24𝜋2 − 270)𝑥<sub>2</sub> + (315 − 30𝜋2)𝑥<sub>4</sub>). 8𝜋4 Suppose 𝑉 is finite-dimensional and 𝜑 a linear functional on 𝑉. Then",
          "zh": "holds for all"
        }
      ],
      "note": null,
      "statement_en": "𝑝 ∈ 𝒫5(𝐑), then we should take 𝑞(𝑥) = 105 ((27 − 2𝜋2) + (24𝜋2 − 270)𝑥2 + (315 − 30𝜋2)𝑥4). 8𝜋4 Suppose 𝑉 is finite-dimensional and 𝜑 a linear functional on 𝑉. Then",
      "statement_zh": "holds for all"
    },
    {
      "id": "6.46",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.46",
      "name_en": "orthogonal complement, 𝑈⟂",
      "name_zh": "正交补(orthogonal complement)、𝑈⊥",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑈 is a subset of 𝑉, then the orthogonal complement of 𝑈, denoted by 𝑈⟂, is the set of all vectors in 𝑉 that are orthogonal to every vector in 𝑈: 𝑈⟂ = {𝑣 ∈ 𝑉∶⟨𝑢,𝑣⟩ = 0forevery 𝑢 ∈ 𝑈}. The orthogonal complement 𝑈⟂ depends on 𝑉 as well as on 𝑈. However, the inner product space 𝑉 should always be clear from the context and thus it can be omitted from the notation.",
          "zh": "若 𝑈 是 𝑉 的子集，那么 𝑈 的正交补，记作 𝑈⊥，是与 𝑈 中的每个向量都正交的所有 𝑉 中向量所构成的集合: 𝑈⊥ = {𝑣 ∈ 𝑉:对于每个𝑢 ∈ 𝑈,⟨𝑢,𝑣⟩ = 0}. 正交补 𝑈⊥ 同时依赖于 𝑉 和 𝑈.然而，我们总会由上下文明确得知内积空间 𝑉 的选取，于 是我们可从记号中省去它."
        }
      ],
      "note": null,
      "statement_en": "If 𝑈 is a subset of 𝑉, then the orthogonal complement of 𝑈, denoted by 𝑈⟂, is the set of all vectors in 𝑉 that are orthogonal to every vector in 𝑈: 𝑈⟂ = {𝑣 ∈ 𝑉∶⟨𝑢,𝑣⟩ = 0forevery 𝑢 ∈ 𝑈}. The orthogonal complement 𝑈⟂ depends on 𝑉 as well as on 𝑈. However, the inner product space 𝑉 should always be clear from the context and thus it can be omitted from the notation.",
      "statement_zh": "若 𝑈 是 𝑉 的子集，那么 𝑈 的正交补，记作 𝑈⊥，是与 𝑈 中的每个向量都正交的所有 𝑉 中向量所构成的集合: 𝑈⊥ = {𝑣 ∈ 𝑉:对于每个𝑢 ∈ 𝑈,⟨𝑢,𝑣⟩ = 0}. 正交补 𝑈⊥ 同时依赖于 𝑉 和 𝑈.然而，我们总会由上下文明确得知内积空间 𝑉 的选取，于 是我们可从记号中省去它."
    },
    {
      "id": "6.48",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.48",
      "name_en": "properties of orthogonal complement",
      "name_zh": "正交补的性质",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) If 𝑈 isasubsetof 𝑉,then 𝑈⟂ isasubspaceof 𝑉.",
          "zh": "(a) 若𝑈 是𝑉 的子集，那么𝑈⊥ 是𝑉 的子空间."
        },
        {
          "t": "bullet",
          "en": "(b) {0}⟂ = 𝑉.",
          "zh": "(b) {0}⊥ = 𝑉."
        },
        {
          "t": "bullet",
          "en": "(c) 𝑉⟂ = {0}.",
          "zh": "(c) 𝑉⊥ = {0}."
        }
      ],
      "note": null,
      "statement_en": "(a) If 𝑈 isasubsetof 𝑉,then 𝑈⟂ isasubspaceof 𝑉. (b) {0}⟂ = 𝑉. (c) 𝑉⟂ = {0}.",
      "statement_zh": "(a) 若𝑈 是𝑉 的子集，那么𝑈⊥ 是𝑉 的子空间. (b) {0}⊥ = 𝑉. (c) 𝑉⊥ = {0}."
    },
    {
      "id": "6.49",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.49",
      "name_en": "direct sum of a subspace and its orthogonal complement Suppose",
      "name_zh": "子空间及其正交补的直和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑈 is a finite-dimensional subspace of 𝑉. Then want to write 𝑣 as the sum of a vector in 𝑈 and a vector orthogonal to 𝑈. 𝑉 = 𝑈 ⊕ 𝑈⟂. 𝑉 = 𝑈 + 𝑈⟂.",
          "zh": "𝑉 = 𝑈 ⊕ 𝑈⊥."
        }
      ],
      "note": null,
      "statement_en": "𝑈 is a finite-dimensional subspace of 𝑉. Then want to write 𝑣 as the sum of a vector in 𝑈 and a vector orthogonal to 𝑈. 𝑉 = 𝑈 ⊕ 𝑈⟂. 𝑉 = 𝑈 + 𝑈⟂.",
      "statement_zh": "𝑉 = 𝑈 ⊕ 𝑈⊥."
    },
    {
      "id": "6.50",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.50",
      "name_en": "in the proof of 6",
      "name_zh": "in the proof of 6",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": ".49. In the previous section we proved the Riesz representation theorem (6.42), whose key part states that every linear functional on a finite-dimensional inner product space is given by taking the inner product with some fixed vector. Seeing a different",
          "zh": "in the"
        }
      ],
      "note": null,
      "statement_en": ".49. In the previous section we proved the Riesz representation theorem (6.42), whose key part states that every linear functional on a finite-dimensional inner product space is given by taking the inner product with some fixed vector. Seeing a different",
      "statement_zh": "in the"
    },
    {
      "id": "6.51",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.51",
      "name_en": "dimension of orthogonal complement",
      "name_zh": "正交补的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim𝑈⟂ = dim𝑉 − dim𝑈.",
          "zh": "设 𝑉 是有限维的，𝑈 是 𝑉 的子空间.那么 dim 𝑈⊥ = dim 𝑉−dim 𝑈. 6C 正交补和最小化问题 179"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim𝑈⟂ = dim𝑉 − dim𝑈.",
      "statement_zh": "设 𝑉 是有限维的，𝑈 是 𝑉 的子空间.那么 dim 𝑈⊥ = dim 𝑉−dim 𝑈. 6C 正交补和最小化问题 179"
    },
    {
      "id": "6.52",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.52",
      "name_en": "orthogonal complement of the orthogonal complement Suppose",
      "name_zh": "orthogonal complement of the orthogonal complement Suppose",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑈 is a finite-dimensional subspace of 𝑉. Then 𝑈 = (𝑈⟂)⟂. 𝑈 ⊆ (𝑈⟂)⟂.",
          "zh": "orthogonal complement of the orthogonal complement Suppose"
        }
      ],
      "note": null,
      "statement_en": "𝑈 is a finite-dimensional subspace of 𝑉. Then 𝑈 = (𝑈⟂)⟂. 𝑈 ⊆ (𝑈⟂)⟂.",
      "statement_zh": "orthogonal complement of the orthogonal complement Suppose"
    },
    {
      "id": "6.53",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.53",
      "name_en": "To do this, suppose",
      "name_zh": "To do this, suppose",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑢 ∈ 𝑈. Then ⟨𝑢, 𝑤⟩ = 0 for every 𝑤 ∈ 𝑈⟂ (by the definition of 𝑈⟂). Because 𝑢 is orthogonal to every vector in 𝑈⟂, we have 𝑢 ∈ (𝑈⟂)⟂, completing the",
          "zh": "To do this, suppose"
        }
      ],
      "note": null,
      "statement_en": "𝑢 ∈ 𝑈. Then ⟨𝑢, 𝑤⟩ = 0 for every 𝑤 ∈ 𝑈⟂ (by the definition of 𝑈⟂). Because 𝑢 is orthogonal to every vector in 𝑈⟂, we have 𝑢 ∈ (𝑈⟂)⟂, completing the",
      "statement_zh": "To do this, suppose"
    },
    {
      "id": "6.55",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.55",
      "name_en": "orthogonal projection, 𝑃𝑈",
      "name_zh": "正交投影(orthogonal projection)、𝑃𝑈",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. The orthogonal projection of 𝑉 onto 𝑈 is the operator 𝑃𝑈 ∈ L(𝑉) defined as follows: For each 𝑣 ∈ 𝑉, write 𝑣 = 𝑢 + 𝑤, where 𝑢 ∈ 𝑈 and 𝑤 ∈ 𝑈⟂. Then let 𝑃𝑈𝑣 = 𝑢. The direct sum decomposition 𝑉 = 𝑈 ⊕ 𝑈⟂ given by",
          "zh": "设 𝑈 是 𝑉 的一个有限维子空间.将 𝑉 映成 𝑈 的正交投影是定义如下的算子 𝑃𝑈 ∈ L(𝑉): 对每个 𝑣 ∈ 𝑉，将其写成 𝑣 = 𝑢 + 𝑤，其中 𝑢 ∈ 𝑈 且 𝑤 ∈ 𝑈⊥，然后令 𝑃𝑈𝑣 = 𝑢. 6.49 给出的直和分解式 𝑉 = 𝑈 ⊕ 𝑈⊥ 表明，𝑣 ∈ 𝑉 可以被唯一表示为 𝑣 = 𝑢 + 𝑤(其中 𝑢 ∈ 𝑈 且 𝑤 ∈ 𝑈⊥)的形式.由此可见 𝑃𝑈𝑣 的定义是完善的.请看 6.61 的证明中所附的示意图——你 应该将这张描述 𝑃𝑈 𝑣 的图像牢记于心."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. The orthogonal projection of 𝑉 onto 𝑈 is the operator 𝑃𝑈 ∈ L(𝑉) defined as follows: For each 𝑣 ∈ 𝑉, write 𝑣 = 𝑢 + 𝑤, where 𝑢 ∈ 𝑈 and 𝑤 ∈ 𝑈⟂. Then let 𝑃𝑈𝑣 = 𝑢. The direct sum decomposition 𝑉 = 𝑈 ⊕ 𝑈⟂ given by",
      "statement_zh": "设 𝑈 是 𝑉 的一个有限维子空间.将 𝑉 映成 𝑈 的正交投影是定义如下的算子 𝑃𝑈 ∈ L(𝑉): 对每个 𝑣 ∈ 𝑉，将其写成 𝑣 = 𝑢 + 𝑤，其中 𝑢 ∈ 𝑈 且 𝑤 ∈ 𝑈⊥，然后令 𝑃𝑈𝑣 = 𝑢. 6.49 给出的直和分解式 𝑉 = 𝑈 ⊕ 𝑈⊥ 表明，𝑣 ∈ 𝑉 可以被唯一表示为 𝑣 = 𝑢 + 𝑤(其中 𝑢 ∈ 𝑈 且 𝑤 ∈ 𝑈⊥)的形式.由此可见 𝑃𝑈𝑣 的定义是完善的.请看 6.61 的证明中所附的示意图——你 应该将这张描述 𝑃𝑈 𝑣 的图像牢记于心."
    },
    {
      "id": "6.57",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.57",
      "name_en": "properties of orthogonal projection P<sub>U</sub>",
      "name_zh": "正交投影 P<sub>U</sub> 的性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose U is a finite-dimensional subspace of V. Then",
          "zh": "设 U 是 V 的有限维子空间。那么"
        },
        {
          "t": "bullet",
          "en": "(a) P<sub>U</sub> ∈ L(V);",
          "zh": "(a) P<sub>U</sub> ∈ L(V);"
        },
        {
          "t": "bullet",
          "en": "(b) P<sub>U</sub>u = u for every u ∈ U;",
          "zh": "(b) 对每个 u ∈ U，都有 P<sub>U</sub>u = u;"
        },
        {
          "t": "bullet",
          "en": "(c) P<sub>U</sub>w = 0 for every w ∈ U<sup>⊥</sup>;",
          "zh": "(c) 对每个 w ∈ U<sup>⊥</sup>，都有 P<sub>U</sub>w = 0;"
        },
        {
          "t": "bullet",
          "en": "(d) range P<sub>U</sub> = U;",
          "zh": "(d) range P<sub>U</sub> = U;"
        },
        {
          "t": "bullet",
          "en": "(e) null P<sub>U</sub> = U<sup>⊥</sup>;",
          "zh": "(e) null P<sub>U</sub> = U<sup>⊥</sup>;"
        },
        {
          "t": "bullet",
          "en": "(f) v − P<sub>U</sub>v ∈ U<sup>⊥</sup> for every v ∈ V;",
          "zh": "(f) 对每个 v ∈ V，都有 v − P<sub>U</sub>v ∈ U<sup>⊥</sup>;"
        },
        {
          "t": "bullet",
          "en": "(g) P<sub>U</sub><sup>2</sup> = P<sub>U</sub>;",
          "zh": "(g) P<sub>U</sub><sup>2</sup> = P<sub>U</sub>;"
        },
        {
          "t": "bullet",
          "en": "(h) ‖P<sub>U</sub>v‖ ≤ ‖v‖ for every v ∈ V;",
          "zh": "(h) 对每个 v ∈ V，都有 ‖P<sub>U</sub>v‖ ≤ ‖v‖;"
        },
        {
          "t": "bullet",
          "en": "(i) if e<sub>1</sub>, …, e<sub>m</sub> is an orthonormal basis of U and v ∈ V, then P<sub>U</sub>v = ⟨v, e<sub>1</sub>⟩e<sub>1</sub> + ⋯ + ⟨v, e<sub>m</sub>⟩e<sub>m</sub>.",
          "zh": "(i) 若 e<sub>1</sub>, …, e<sub>m</sub> 是 U 的一个规范正交基且 v ∈ V，那么 P<sub>U</sub>v = ⟨v, e<sub>1</sub>⟩e<sub>1</sub> + ⋯ + ⟨v, e<sub>m</sub>⟩e<sub>m</sub>。"
        }
      ],
      "note": null,
      "statement_en": "Suppose U is a finite-dimensional subspace of V. Then (a) PU ∈ L(V); (b) PUu = u for every u ∈ U; (c) PUw = 0 for every w ∈ U⊥; (d) range PU = U; (e) null PU = U⊥; (f) v − PUv ∈ U⊥ for every v ∈ V; (g) PU2 = PU; (h) ‖PUv‖ ≤ ‖v‖ for every v ∈ V; (i) if e1, …, em is an orthonormal basis of U and v ∈ V, then PUv = ⟨v, e1⟩e1 + ⋯ + ⟨v, em⟩em.",
      "statement_zh": "设 U 是 V 的有限维子空间。那么 (a) PU ∈ L(V); (b) 对每个 u ∈ U，都有 PUu = u; (c) 对每个 w ∈ U⊥，都有 PUw = 0; (d) range PU = U; (e) null PU = U⊥; (f) 对每个 v ∈ V，都有 v − PUv ∈ U⊥; (g) PU2 = PU; (h) 对每个 v ∈ V，都有 ‖PUv‖ ≤ ‖v‖; (i) 若 e1, …, em 是 U 的一个规范正交基且 v ∈ V，那么 PUv = ⟨v, e1⟩e1 + ⋯ + ⟨v, em⟩em。"
    },
    {
      "id": "6.59",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.59",
      "name_en": "and then using 6",
      "name_zh": "and then using 6",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": ".60, we have |𝜑(𝑤)|<sup>2</sup> 𝜑(𝑣) = ‖𝑤‖<sup>2</sup> = ‖𝑣‖<sup>2</sup>. Now suppose 𝑢 ∈ 𝑉. Using the equation above, we have 𝑢 = (𝑢 − 𝜑(𝑢) 𝑣) + 𝜑(𝑢) 𝑣. 𝜑(𝑣) ‖𝑣‖<sup>2</sup> The first term in parentheses above is in null 𝜑 and hence is orthogonal to 𝑣. Thus taking the inner product of both sides of the equation above with 𝑣 shows that ⟨𝑢,𝑣⟩ = 𝜑(𝑢)⟨𝑣,𝑣⟩ = 𝜑(𝑢). ‖𝑣‖<sup>2</sup> Thus 𝜑 = 𝜑𝑣, showing that 𝑣 ↦ 𝜑𝑣 is surjective, as desired. See",
          "zh": "and then using 6"
        }
      ],
      "note": null,
      "statement_en": ".60, we have |𝜑(𝑤)|2 𝜑(𝑣) = ‖𝑤‖2 = ‖𝑣‖2. Now suppose 𝑢 ∈ 𝑉. Using the equation above, we have 𝑢 = (𝑢 − 𝜑(𝑢) 𝑣) + 𝜑(𝑢) 𝑣. 𝜑(𝑣) ‖𝑣‖2 The first term in parentheses above is in null 𝜑 and hence is orthogonal to 𝑣. Thus taking the inner product of both sides of the equation above with 𝑣 shows that ⟨𝑢,𝑣⟩ = 𝜑(𝑢)⟨𝑣,𝑣⟩ = 𝜑(𝑢). ‖𝑣‖2 Thus 𝜑 = 𝜑𝑣, showing that 𝑣 ↦ 𝜑𝑣 is surjective, as desired. See",
      "statement_zh": "and then using 6"
    },
    {
      "id": "6.61",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.61",
      "name_en": "for the picture describing",
      "name_zh": "到子空间的最短距离",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑃𝑈𝑣 that you should keep in mind.",
          "zh": "设 𝑈 是 𝑉 的有限维子空间，𝑣 ∈ 𝑉 且 𝑢 ∈ 𝑈.那么 ∥𝑣−𝑃𝑈𝑣∥ ≤ ∥𝑣−𝑢∥. 进一步，上述不等式取得等号当且仅当 𝑢 = 𝑃𝑈 𝑣."
        }
      ],
      "note": null,
      "statement_en": "𝑃𝑈𝑣 that you should keep in mind.",
      "statement_zh": "设 𝑈 是 𝑉 的有限维子空间，𝑣 ∈ 𝑉 且 𝑢 ∈ 𝑈.那么 ∥𝑣−𝑃𝑈𝑣∥ ≤ ∥𝑣−𝑢∥. 进一步，上述不等式取得等号当且仅当 𝑢 = 𝑃𝑈 𝑣."
    },
    {
      "id": "6.62",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.62",
      "name_en": "is an equality, which happens if and only if",
      "name_zh": "is an equality, which happens if and only if",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "‖𝑃𝑈𝑣 − 𝑢‖ = 0, which happens if and only if 𝑢 = 𝑃𝑈𝑣. The last result is often combined with the formula 6.57(i) to compute explicit solutions to minimization problems, as in the following example. 𝑃𝑈𝑣 is the closest point in 𝑈 to 𝑣.",
          "zh": "is an equality, which happens if and only if"
        }
      ],
      "note": null,
      "statement_en": "‖𝑃𝑈𝑣 − 𝑢‖ = 0, which happens if and only if 𝑢 = 𝑃𝑈𝑣. The last result is often combined with the formula 6.57(i) to compute explicit solutions to minimization problems, as in the following example. 𝑃𝑈𝑣 is the closest point in 𝑈 to 𝑣.",
      "statement_zh": "is an equality, which happens if and only if"
    },
    {
      "id": "6.65",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.65",
      "name_en": "over the interval",
      "name_zh": "over the interval",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "[−𝜋, 𝜋]. Graphs on [−𝜋, 𝜋] of the sine function (red) and its best fifth degree polynomial approximation 𝑢 (blue) from 6.65. Our approximation 6.65 is so accurate that the two graphs are almost identical— our eyes may see only one graph! Here the red graph is placed almost exactly over the blue graph. If you are viewing this on an electronic device, enlarge the picture above by 400% near 𝜋 or −𝜋 to see a small gap between the two graphs. Another well-known approximation to the sine function by a polynomial of degree 5 is given by the Taylor polynomial 𝑝 defined by 𝑥<sub>3</sub> 𝑥<sub>5</sub> 6.66 𝑝(𝑥) = 𝑥− 3! + 5!. To see how good this approximation is, the next picture shows the graphs of both the sine function and the Taylor polynomial 𝑝 over the interval [−𝜋, 𝜋]. Graphs on [−𝜋, 𝜋] of the sine function (red) and the Taylor polynomial (blue) from 6.66. The Taylor polynomial of degree 5 is an excellent approximation to sin 𝑥 for 𝑥 near 0. But the picture above shows that for |𝑥| &gt; 2, the Taylor polynomial is not so accurate, especially compared to 6.65. For example, taking 𝑥 = 3, our approximation 6.65 estimates sin 3 with an error of approximately 0.001, but the Taylor polynomial",
          "zh": "over the interval"
        }
      ],
      "note": null,
      "statement_en": "[−𝜋, 𝜋]. Graphs on [−𝜋, 𝜋] of the sine function (red) and its best fifth degree polynomial approximation 𝑢 (blue) from 6.65. Our approximation 6.65 is so accurate that the two graphs are almost identical— our eyes may see only one graph! Here the red graph is placed almost exactly over the blue graph. If you are viewing this on an electronic device, enlarge the picture above by 400% near 𝜋 or −𝜋 to see a small gap between the two graphs. Another well-known approximation to the sine function by a polynomial of degree 5 is given by the Taylor polynomial 𝑝 defined by 𝑥3 𝑥5 6.66 𝑝(𝑥) = 𝑥− 3! + 5!. To see how good this approximation is, the next picture shows the graphs of both the sine function and the Taylor polynomial 𝑝 over the interval [−𝜋, 𝜋]. Graphs on [−𝜋, 𝜋] of the sine function (red) and the Taylor polynomial (blue) from 6.66. The Taylor polynomial of degree 5 is an excellent approximation to sin 𝑥 for 𝑥 near 0. But the picture above shows that for |𝑥| &gt; 2, the Taylor polynomial is not so accurate, especially compared to 6.65. For example, taking 𝑥 = 3, our approximation 6.65 estimates sin 3 with an error of approximately 0.001, but the Taylor polynomial",
      "statement_zh": "over the interval"
    },
    {
      "id": "6.66",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.66",
      "name_en": "estimates sin 3 with an error of approximately 0",
      "name_zh": "estimates sin 3 with an error of approximately 0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": ".4. Thus at 𝑥 = 3, the error in the Taylor polynomial is hundreds of times larger than the error given by 6.65. Linear algebra has helped us discover an approximation to the sine function that improves upon what we learned in calculus! Suppose 𝑇 ∈ L(𝑉, 𝑊) and 𝑤 ∈ 𝑊. Consider the problem of finding 𝑣 ∈ 𝑉 such that 𝑇𝑣 = 𝑤. For example, if 𝑉 = 𝐅<sup>𝑛</sup> and 𝑊 = 𝐅<sup>𝑚</sup>, then the equation above could represent a system of 𝑚 linear equations in 𝑛 unknowns 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub>, where 𝑣 = (𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub>). If 𝑇 is invertible, then the unique solution to the equation above is 𝑣 = 𝑇−1𝑤. However, if 𝑇 is not invertible, then for some 𝑤 ∈ 𝑊 there may not exist any solutions of the equation above, and for some 𝑤 ∈ 𝑊 there may exist infinitely many solutions of the equation above. If 𝑇 is not invertible, then we can still try to do as well as possible with the equation above. For example, if the equation above has no solutions, then instead of solving the equation 𝑇𝑣 − 𝑤 = 0, we can try to find 𝑣 ∈ 𝑉 such that ‖𝑇𝑣 − 𝑤‖ is as small as possible. As another example, if the equation above has infinitely many solutions 𝑣 ∈ 𝑉, then among all those solutions we can try to find one such that ‖𝑣‖ is as small as possible. The pseudoinverse will provide the tool to solve the equation above as well as possible, even when 𝑇 is not invertible. We need",
          "zh": "estimates sin 3 with an error of approximately 0"
        }
      ],
      "note": {
        "en": "the next result to define the pseudoinverse. In the next two proofs, we…",
        "zh": ""
      },
      "statement_en": ".4. Thus at 𝑥 = 3, the error in the Taylor polynomial is hundreds of times larger than the error given by 6.65. Linear algebra has helped us discover an approximation to the sine function that improves upon what we learned in calculus! Suppose 𝑇 ∈ L(𝑉, 𝑊) and 𝑤 ∈ 𝑊. Consider the problem of finding 𝑣 ∈ 𝑉 such that 𝑇𝑣 = 𝑤. For example, if 𝑉 = 𝐅𝑛 and 𝑊 = 𝐅𝑚, then the equation above could represent a system of 𝑚 linear equations in 𝑛 unknowns 𝑣1, …, 𝑣𝑛, where 𝑣 = (𝑣1, …, 𝑣𝑛). If 𝑇 is invertible, then the unique solution to the equation above is 𝑣 = 𝑇−1𝑤. However, if 𝑇 is not invertible, then for some 𝑤 ∈ 𝑊 there may not exist any solutions of the equation above, and for some 𝑤 ∈ 𝑊 there may exist infinitely many solutions of the equation above. If 𝑇 is not invertible, then we can still try to do as well as possible with the equation above. For example, if the equation above has no solutions, then instead of solving the equation 𝑇𝑣 − 𝑤 = 0, we can try to find 𝑣 ∈ 𝑉 such that ‖𝑇𝑣 − 𝑤‖ is as small as possible. As another example, if the equation above has infinitely many solutions 𝑣 ∈ 𝑉, then among all those solutions we can try to find one such that ‖𝑣‖ is as small as possible. The pseudoinverse will provide the tool to solve the equation above as well as possible, even when 𝑇 is not invertible. We need the next result to define the pseudoinverse. In the next two proofs, we…",
      "statement_zh": "estimates sin 3 with an error of approximately 0"
    },
    {
      "id": "6.67",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.67",
      "name_en": "restriction of a linear map to obtain a one-to-one and onto map Suppose",
      "name_zh": "限制线性映射以获得既单又满的映射 设𝑉是有限维的，且𝑇 ∈ L(𝑉,𝑊).那么𝑇|(null 𝑇)⊥ 是将(null 𝑇)⊥映成 range 𝑇的单射.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then 𝑇|(null 𝑇)⟂ is an injective map of (null 𝑇)⟂ onto range 𝑇.",
          "zh": "限制线性映射以获得既单又满的映射 设𝑉是有限维的，且𝑇 ∈ L(𝑉,𝑊).那么𝑇|(null 𝑇)⊥ 是将(null 𝑇)⊥映成 range 𝑇的单射."
        }
      ],
      "note": null,
      "statement_en": "𝑉 is finite-dimensional and 𝑇 ∈ L(𝑉, 𝑊). Then 𝑇|(null 𝑇)⟂ is an injective map of (null 𝑇)⟂ onto range 𝑇.",
      "statement_zh": "限制线性映射以获得既单又满的映射 设𝑉是有限维的，且𝑇 ∈ L(𝑉,𝑊).那么𝑇|(null 𝑇)⊥ 是将(null 𝑇)⊥映成 range 𝑇的单射."
    },
    {
      "id": "6.68",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.68",
      "name_en": "pseudoinverse, 𝑇†",
      "name_zh": "伪逆(pseudoinverse)、𝑇 †",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that V is finite-dimensional and T ∈ L(V, W). The pseudoinverse T<sup>†</sup> ∈ L(W, V) of T is the linear map from W to V defined by",
          "zh": "假设 V 是有限维的且 T ∈ L(V, W)。T 的伪逆 T<sup>†</sup> ∈ L(W, V) 是从 W 到 V 的线性映射，定义为"
        },
        {
          "t": "formula",
          "en": "T<sup>†</sup> w = (T|(null T)<sup>⊥</sup>)<sup>−1</sup> P<sub>range T</sub> w",
          "zh": "T<sup>†</sup> w = (T|(null T)<sup>⊥</sup>)<sup>−1</sup> P<sub>range T</sub> w"
        }
      ],
      "note": null,
      "statement_en": "Suppose that V is finite-dimensional and T ∈ L(V, W). The pseudoinverse T† ∈ L(W, V) of T is the linear map from W to V defined by T† w = (T|(null T)⊥)−1 Prange T w",
      "statement_zh": "假设 V 是有限维的且 T ∈ L(V, W)。T 的伪逆 T† ∈ L(W, V) 是从 W 到 V 的线性映射，定义为 T† w = (T|(null T)⊥)−1 Prange T w"
    },
    {
      "id": "6.69",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.69",
      "name_en": "algebraic properties of the pseudoinverse Suppose",
      "name_zh": "伪逆的代数性质",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) If 𝑇 is invertible, then 𝑇† = 𝑇<sup>−1</sup>.",
          "zh": "(a) 若𝑇可逆，则𝑇† = 𝑇<sup>−1</sup>."
        },
        {
          "t": "bullet",
          "en": "(b) 𝑇𝑇† = 𝑃 range 𝑇 = the orthogonal projection of 𝑊 onto range 𝑇.",
          "zh": "(b) 𝑇𝑇† = 𝑃 range 𝑇 = 将𝑊映成 range 𝑇的正交投影."
        }
      ],
      "note": null,
      "statement_en": "(a) If 𝑇 is invertible, then 𝑇† = 𝑇−1. (b) 𝑇𝑇† = 𝑃 range 𝑇 = the orthogonal projection of 𝑊 onto range 𝑇.",
      "statement_zh": "(a) 若𝑇可逆，则𝑇† = 𝑇−1. (b) 𝑇𝑇† = 𝑃 range 𝑇 = 将𝑊映成 range 𝑇的正交投影."
    },
    {
      "id": "6.70",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.70",
      "name_en": "pseudoinverse provides best approximate solution or best solution Suppose",
      "name_zh": "伪逆可给出最佳近似解或最优解 设𝑉 是有限维的，𝑇 ∈ L(𝑉,𝑊)，𝑤 ∈ 𝑊.",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(b) If 𝑣 ∈ 𝑇†𝑤+null 𝑇,then ∥𝑇†𝑤∥ ≤ ‖𝑣‖, with equality if and only if 𝑣 = 𝑇†𝑤.",
          "zh": "(b) 若 𝑣 ∈ 𝑉，则 当且仅当 𝑣 ∈ 𝑇†𝑤 + null 𝑇 时，上式取得等号."
        },
        {
          "t": "bullet",
          "en": "(b)",
          "zh": "(b) 若𝑣 ∈ 𝑇†𝑤+null 𝑇，则 当且仅当 𝑣 = 𝑇†𝑤 时，上式取得等号."
        }
      ],
      "note": null,
      "statement_en": "(b) If 𝑣 ∈ 𝑇†𝑤+null 𝑇,then ∥𝑇†𝑤∥ ≤ ‖𝑣‖, with equality if and only if 𝑣 = 𝑇†𝑤. (b)",
      "statement_zh": "(b) 若 𝑣 ∈ 𝑉，则 当且仅当 𝑣 ∈ 𝑇†𝑤 + null 𝑇 时，上式取得等号. (b) 若𝑣 ∈ 𝑇†𝑤+null 𝑇，则 当且仅当 𝑣 = 𝑇†𝑤 时，上式取得等号."
    },
    {
      "id": "6.72",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.72",
      "name_en": "formula for a pseudoinverse",
      "name_zh": "一个伪逆的公式",
      "include": true,
      "body": [
        {
          "t": "formula",
          "en": "T<sup>†</sup>(x, y, z) = (1/5)(5x − 2y, 5x − 2y, x + 4y, −2x + 3y)",
          "zh": "T<sup>†</sup>(x, y, z) = (1/5)(5x − 2y, 5x − 2y, x + 4y, −2x + 3y)"
        }
      ],
      "note": {
        "en": "This illustrates TT<sup>†</sup> = P<sub>range T</sub>.",
        "zh": "这说明 TT<sup>†</sup> = P<sub>range T</sub>。"
      },
      "statement_en": "T † (x, y, z) = (1/5)(5x − 2y, 5x − 2y, x + 4y, −2x + 3y) This illustrates TT †  = P range T .",
      "statement_zh": "T † (x, y, z) = (1/5)(5x − 2y, 5x − 2y, x + 4y, −2x + 3y) 这说明 TT †  = P range T 。"
    },
    {
      "id": "7.1",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.1",
      "name_en": "adjoint, 𝑇∗",
      "name_zh": "伴随(adjoint)、𝑇 ∗",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). The adjoint of 𝑇 is the function 𝑇∗ ∶ 𝑊 → 𝑉 such that ⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣, 𝑇∗𝑤⟩ for every 𝑣 ∈ 𝑉 and every 𝑤 ∈ 𝑊. To see why the definition above makes sense, suppose 𝑇 ∈ L(𝑉, 𝑊). Fix 𝑤 ∈ 𝑊. Consider the linear functional 𝑣 ↦ ⟨𝑇𝑣,𝑤⟩ The word adjoint has another meaning in linear algebra. In case you en- counter the second meaning elsewhere, be warned that the two meanings for adjoint are unrelated to each other. on 𝑉 that maps 𝑣 ∈ 𝑉 to ⟨𝑇𝑣,𝑤⟩; this linear functional depends on 𝑇 and 𝑤. By the Riesz representation theorem (6.42), there exists a unique vector in 𝑉 such that this linear functional is given by taking the inner product with it. We call this unique vector 𝑇∗𝑤. In other words, 𝑇∗𝑤 is the unique vector in 𝑉 such that ⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣, 𝑇∗𝑤⟩ for every 𝑣 ∈ 𝑉. In the equation above, the inner product on the left takes place in 𝑊 and the inner product on the right takes place in 𝑉. However, we use the same notation ⟨⋅, ⋅⟩ for both inner products.",
          "zh": "设 𝑇 ∈ L(𝑉,𝑊).𝑇 的伴随是使得对任一 𝑣 ∈ 𝑉 和任一 𝑤 ∈ 𝑊 都有 ⟨𝑇𝑣,𝑤⟩ = ⟨𝑣,𝑇∗𝑤⟩ 的函数𝑇∗ :𝑊→𝑉. 下面看看以上定义为什么是有意义的: “伴随”这个词在线性代数里还有另一种含 设 𝑇 ∈ L(𝑉,𝑊)，取定 𝑤 ∈ 𝑊，考虑 𝑉 上 义，你要是在别的地方遇到了，要注意它和 它将 𝑣 ∈ 𝑉 映射到 ⟨𝑇𝑣, 𝑤⟩.该线性泛函依赖于 𝑇 和 𝑤.根据里斯表示定理(6.42)，𝑉 中存在唯 一的向量，使得该线性泛函由与它的内积给出.我们称这唯一的向量为 𝑇∗𝑤.换句话说，𝑇∗𝑤 是𝑉 中使得对任一𝑣 ∈ 𝑉 都有 ⟨𝑇𝑣,𝑤⟩ = ⟨𝑣,𝑇∗𝑤⟩ 上式中，左侧的内积是在 𝑊 上的，右侧的内积是在 𝑉 上的.不过，我们对这两种内积用 的唯一向量. 相同的记号 ⟨·, ·⟩. 的线性泛函 此处的“伴随”没有联系. 𝑣 ↦→ ⟨𝑇𝑣,𝑤⟩，"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). The adjoint of 𝑇 is the function 𝑇∗ ∶ 𝑊 → 𝑉 such that ⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣, 𝑇∗𝑤⟩ for every 𝑣 ∈ 𝑉 and every 𝑤 ∈ 𝑊. To see why the definition above makes sense, suppose 𝑇 ∈ L(𝑉, 𝑊). Fix 𝑤 ∈ 𝑊. Consider the linear functional 𝑣 ↦ ⟨𝑇𝑣,𝑤⟩ The word adjoint has another meaning in linear algebra. In case you en- counter the second meaning elsewhere, be warned that the two meanings for adjoint are unrelated to each other. on 𝑉 that maps 𝑣 ∈ 𝑉 to ⟨𝑇𝑣,𝑤⟩; this linear functional depends on 𝑇 and 𝑤. By the Riesz representation theorem (6.42), there exists a unique vector in 𝑉 such that this linear functional is given by taking the inner product with it. We call this unique vector 𝑇∗𝑤. In other words, 𝑇∗𝑤 is the unique vector in 𝑉 such that ⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣, 𝑇∗𝑤⟩ for every 𝑣 ∈ 𝑉. In the equation above, the inner product on the left takes place in 𝑊 and the inner product on the right takes place in 𝑉. However, we use the same notation ⟨⋅, ⋅⟩ for both inner products.",
      "statement_zh": "设 𝑇 ∈ L(𝑉,𝑊).𝑇 的伴随是使得对任一 𝑣 ∈ 𝑉 和任一 𝑤 ∈ 𝑊 都有 ⟨𝑇𝑣,𝑤⟩ = ⟨𝑣,𝑇∗𝑤⟩ 的函数𝑇∗ :𝑊→𝑉. 下面看看以上定义为什么是有意义的: “伴随”这个词在线性代数里还有另一种含 设 𝑇 ∈ L(𝑉,𝑊)，取定 𝑤 ∈ 𝑊，考虑 𝑉 上 义，你要是在别的地方遇到了，要注意它和 它将 𝑣 ∈ 𝑉 映射到 ⟨𝑇𝑣, 𝑤⟩.该线性泛函依赖于 𝑇 和 𝑤.根据里斯表示定理(6.42)，𝑉 中存在唯 一的向量，使得该线性泛函由与它的内积给出.我们称这唯一的向量为 𝑇∗𝑤.换句话说，𝑇∗𝑤 是𝑉 中使得对任一𝑣 ∈ 𝑉 都有 ⟨𝑇𝑣,𝑤⟩ = ⟨𝑣,𝑇∗𝑤⟩ 上式中，左侧的内积是在 𝑊 上的，右侧的内积是在 𝑉 上的.不过，我们对这两种内积用 的唯一向量. 相同的记号 ⟨·, ·⟩. 的线性泛函 此处的“伴随”没有联系. 𝑣 ↦→ ⟨𝑇𝑣,𝑤⟩，"
    },
    {
      "id": "7.4",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.4",
      "name_en": "adjoint of a linear map is a linear map",
      "name_zh": "线性映射的伴随是线性映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑇 ∈ L(𝑉, 𝑊), then 𝑇∗ ∈ L(𝑊, 𝑉).",
          "zh": "线性映射的伴随是线性映射"
        }
      ],
      "note": null,
      "statement_en": "If 𝑇 ∈ L(𝑉, 𝑊), then 𝑇∗ ∈ L(𝑊, 𝑉).",
      "statement_zh": "线性映射的伴随是线性映射"
    },
    {
      "id": "7.5",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.5",
      "name_en": "properties of the adjoint",
      "name_zh": "伴随的性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose T ∈ L(V, W). Then",
          "zh": "设 T ∈ L(V, W)，那么有："
        },
        {
          "t": "bullet",
          "en": "(a) (S + T)* = S* + T* for all S ∈ L(V, W);",
          "zh": "(a) (S + T)* = S* + T* 对所有 S ∈ L(V, W) 成立;"
        },
        {
          "t": "bullet",
          "en": "(b) (λT)* = λ̅ T* for all λ ∈ F;",
          "zh": "(b) (λT)* = λ̅ T* 对所有 λ ∈ F 成立;"
        },
        {
          "t": "bullet",
          "en": "(c) (T*)* = T;",
          "zh": "(c) (T*)* = T;"
        },
        {
          "t": "bullet",
          "en": "(d) (ST)* = T* S* for all S ∈ L(W, U) (here U is a finite-dimensional inner product space over F);",
          "zh": "(d) (ST)* = T* S* 对所有 S ∈ L(W, U) 成立（这里 U 是 F 上的有限维内积空间）;"
        },
        {
          "t": "bullet",
          "en": "(e) I* = I, where I is the identity operator on V;",
          "zh": "(e) I* = I，其中 I 是 V 上的恒等算子;"
        },
        {
          "t": "bullet",
          "en": "(f) if T is invertible, then T* is invertible and (T*)<sup>−1</sup> = (T<sup>−1</sup>)*.",
          "zh": "(f) 如果 T 可逆，那么 T* 可逆且 (T*)<sup>−1</sup> = (T<sup>−1</sup>)*。"
        }
      ],
      "note": null,
      "statement_en": "Suppose T ∈ L(V, W). Then (a) (S + T)* = S* + T* for all S ∈ L(V, W); (b) (λT)* = λ̅ T* for all λ ∈ F; (c) (T*)* = T; (d) (ST)* = T* S* for all S ∈ L(W, U) (here U is a finite-dimensional inner product space over F); (e) I* = I, where I is the identity operator on V; (f) if T is invertible, then T* is invertible and (T*)−1 = (T−1)*.",
      "statement_zh": "设 T ∈ L(V, W)，那么有： (a) (S + T)* = S* + T* 对所有 S ∈ L(V, W) 成立; (b) (λT)* = λ̅ T* 对所有 λ ∈ F 成立; (c) (T*)* = T; (d) (ST)* = T* S* 对所有 S ∈ L(W, U) 成立（这里 U 是 F 上的有限维内积空间）; (e) I* = I，其中 I 是 V 上的恒等算子; (f) 如果 T 可逆，那么 T* 可逆且 (T*)−1 = (T−1)*。"
    },
    {
      "id": "7.6",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.6",
      "name_en": "null space and range of",
      "name_zh": "𝑇 ∗ 的零空间和值域 设𝑇 ∈ L(𝑉,𝑊)，那么有: (a) null 𝑇∗ = (range 𝑇)⊥; (b) range 𝑇∗ = (null 𝑇)⊥; (c) null 𝑇 = (range 𝑇∗)⊥",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇∗ Suppose 𝑇 ∈ L(𝑉, 𝑊). Then (a) null 𝑇∗ = (range 𝑇)⟂; (b) range 𝑇∗ = (null 𝑇)⟂; (c) null 𝑇 = (range 𝑇∗)⟂; (d) range 𝑇 = (null 𝑇∗)⟂.",
          "zh": "(d) range 𝑇 = (null 𝑇∗)⊥."
        }
      ],
      "note": null,
      "statement_en": "𝑇∗ Suppose 𝑇 ∈ L(𝑉, 𝑊). Then (a) null 𝑇∗ = (range 𝑇)⟂; (b) range 𝑇∗ = (null 𝑇)⟂; (c) null 𝑇 = (range 𝑇∗)⟂; (d) range 𝑇 = (null 𝑇∗)⟂.",
      "statement_zh": "(d) range 𝑇 = (null 𝑇∗)⊥."
    },
    {
      "id": "7.7",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.7",
      "name_en": "conjugate transpose, 𝐴∗",
      "name_zh": "共轭转置(conjugate transpose)、𝐴∗",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The conjugate transpose of an 𝑚-by-𝑛 matrix 𝐴 is the 𝑛-by-𝑚 matrix 𝐴∗ obtained by interchanging the rows and columns and then taking the complex conjugate of each entry. In other words, if 𝑗 ∈ {1,…,𝑛} and 𝑘 ∈ {1,…,𝑚}, then (𝐴∗)𝑗,𝑘 = 𝐴𝑘,𝑗.",
          "zh": "𝑚 × 𝑛 矩阵 𝐴 的共轭转置是将其行列互换再对每个元素取复共轭得到的 𝑛 × 𝑚 矩阵 𝐴∗. 换句话说，如果 𝑗 ∈ {1,…,𝑛} 且 𝑘 ∈ {1,…,𝑚}，那么有 (𝐴∗)𝑗,𝑘 = 𝐴𝑘,𝑗. ! 例:一个 2 × 3 矩阵的共轭转置 2×3矩阵 2 3+4i 7 的共轭转置 若矩阵𝐴只含有实元素，则𝐴∗ = 𝐴 t，其中"
        }
      ],
      "note": null,
      "statement_en": "The conjugate transpose of an 𝑚-by-𝑛 matrix 𝐴 is the 𝑛-by-𝑚 matrix 𝐴∗ obtained by interchanging the rows and columns and then taking the complex conjugate of each entry. In other words, if 𝑗 ∈ {1,…,𝑛} and 𝑘 ∈ {1,…,𝑚}, then (𝐴∗)𝑗,𝑘 = 𝐴𝑘,𝑗.",
      "statement_zh": "𝑚 × 𝑛 矩阵 𝐴 的共轭转置是将其行列互换再对每个元素取复共轭得到的 𝑛 × 𝑚 矩阵 𝐴∗. 换句话说，如果 𝑗 ∈ {1,…,𝑛} 且 𝑘 ∈ {1,…,𝑚}，那么有 (𝐴∗)𝑗,𝑘 = 𝐴𝑘,𝑗. ! 例:一个 2 × 3 矩阵的共轭转置 2×3矩阵 2 3+4i 7 的共轭转置 若矩阵𝐴只含有实元素，则𝐴∗ = 𝐴 t，其中"
    },
    {
      "id": "7.9",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.9",
      "name_en": "matrix of",
      "name_zh": "𝑇∗的矩阵等于𝑇的矩阵的共轭转置",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Let T ∈ L(V, W). Suppose e<sub>1</sub>, …, e<sub>n</sub> is an orthonormal basis of V and f<sub>1</sub>, …, f<sub>m</sub> is an orthonormal basis of W. Then the matrix of T* with respect to these bases is the conjugate transpose of the matrix of T.",
          "zh": "令 T ∈ L(V, W)。假设 e<sub>1</sub>, …, e<sub>n</sub> 是 V 的规范正交基，f<sub>1</sub>, …, f<sub>m</sub> 是 W 的规范正交基。那么 T* 关于这些基的矩阵是 T 的矩阵的共轭转置。"
        }
      ],
      "note": null,
      "statement_en": "Let T ∈ L(V, W). Suppose e1, …, en is an orthonormal basis of V and f1, …, fm is an orthonormal basis of W. Then the matrix of T* with respect to these bases is the conjugate transpose of the matrix of T.",
      "statement_zh": "令 T ∈ L(V, W)。假设 e1, …, en 是 V 的规范正交基，f1, …, fm 是 W 的规范正交基。那么 T* 关于这些基的矩阵是 T 的矩阵的共轭转置。"
    },
    {
      "id": "7.10",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.10",
      "name_en": "self-adjoint",
      "name_zh": "自伴",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑇 ∈ L(𝑉) is called self-adjoint if 𝑇 = 𝑇∗. If 𝑇 ∈ L(𝑉) and 𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub> is an orthonormal basis of 𝑉, then 𝑇 is self-adjoint if and only if M(𝑇, (𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub>)) = M(𝑇, (𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub>))∗, as follows from 7.9.",
          "zh": "算子 𝑇 ∈ L(𝑉) 称为自伴的，如果 𝑇 = 𝑇∗. 若𝑇 ∈ L(𝑉)且𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 是𝑉 的规范正交基，则𝑇 是自伴的当且仅当 M\u0000𝑇,(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>)\u0001 = M \u0000𝑇, (𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub>)\u0001∗.这是由 7.9 推得的."
        }
      ],
      "note": null,
      "statement_en": "An operator 𝑇 ∈ L(𝑉) is called self-adjoint if 𝑇 = 𝑇∗. If 𝑇 ∈ L(𝑉) and 𝑒1, …, 𝑒𝑛 is an orthonormal basis of 𝑉, then 𝑇 is self-adjoint if and only if M(𝑇, (𝑒1, …, 𝑒𝑛)) = M(𝑇, (𝑒1, …, 𝑒𝑛))∗, as follows from 7.9.",
      "statement_zh": "算子 𝑇 ∈ L(𝑉) 称为自伴的，如果 𝑇 = 𝑇∗. 若𝑇 ∈ L(𝑉)且𝑒1,…,𝑒𝑛 是𝑉 的规范正交基，则𝑇 是自伴的当且仅当 M\u0000𝑇,(𝑒1,…,𝑒𝑛)\u0001 = M \u0000𝑇, (𝑒1, …, 𝑒𝑛)\u0001∗.这是由 7.9 推得的."
    },
    {
      "id": "7.12",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.12",
      "name_en": "eigenvalues of self-adjoint operators",
      "name_zh": "自伴算子的特征值",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every eigenvalue of a self-adjoint operator is real.",
          "zh": "自伴算子的每个特征值都是实的."
        }
      ],
      "note": null,
      "statement_en": "Every eigenvalue of a self-adjoint operator is real.",
      "statement_zh": "自伴算子的每个特征值都是实的."
    },
    {
      "id": "7.13",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.13",
      "name_en": "as applied to",
      "name_zh": "对所有𝑣都有𝑇𝑣正交于𝑣 ⇐⇒ 𝑇 = 0(",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇 − 𝑇∗ and the third equivalence follows from 7.15. On a real inner product space 𝑉, a nonzero operator 𝑇 might satisfy ⟨𝑇𝑣, 𝑣⟩ = 0 for all 𝑣 ∈ 𝑉. However,",
          "zh": "⟨𝑇𝑣,𝑣⟩ = 0对任一𝑣 ∈ 𝑉都成立 ⇐⇒ 𝑇 = 0."
        }
      ],
      "note": {
        "en": "the next result shows that this cannot happen for a self- adjoint operator. 7.16 𝑇 self-adjoint and ⟨𝑇𝑣,𝑣⟩ = 0 for all 𝑣 ⟺ 𝑇 = 0 Suppose 𝑇 is a self-adjoint operator on 𝑉. Then ⟨𝑇𝑣,𝑣⟩ = 0forevery 𝑣 ∈ 𝑉 ⟺ 𝑇 = 0.",
        "zh": ""
      },
      "statement_en": "𝑇 − 𝑇∗ and the third equivalence follows from 7.15. On a real inner product space 𝑉, a nonzero operator 𝑇 might satisfy ⟨𝑇𝑣, 𝑣⟩ = 0 for all 𝑣 ∈ 𝑉. However, the next result shows that this cannot happen for a self- adjoint operator. 7.16 𝑇 self-adjoint and ⟨𝑇𝑣,𝑣⟩ = 0 for all 𝑣 ⟺ 𝑇 = 0 Suppose 𝑇 is a self-adjoint operator on 𝑉. Then ⟨𝑇𝑣,𝑣⟩ = 0forevery 𝑣 ∈ 𝑉 ⟺ 𝑇 = 0.",
      "statement_zh": "⟨𝑇𝑣,𝑣⟩ = 0对任一𝑣 ∈ 𝑉都成立 ⇐⇒ 𝑇 = 0."
    },
    {
      "id": "7.14",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.14",
      "name_en": "⟨𝑇𝑣, 𝑣⟩ is real for all 𝑣 ⟺ 𝑇 is self-adjoint (assuming 𝐅 = 𝐂)",
      "name_zh": "⟨𝑇𝑣,𝑣⟩对所有𝑣都是实的⇐⇒𝑇是自伴的(",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is a complex inner product space and 𝑇 ∈ L(𝑉). Then",
          "zh": "𝑇是自伴的 ⇐⇒ ⟨𝑇𝑣,𝑣⟩ ∈ R 对任一𝑣 ∈ 𝑉都成立."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a complex inner product space and 𝑇 ∈ L(𝑉). Then",
      "statement_zh": "𝑇是自伴的 ⇐⇒ ⟨𝑇𝑣,𝑣⟩ ∈ R 对任一𝑣 ∈ 𝑉都成立."
    },
    {
      "id": "7.16",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.16",
      "name_en": "to establish the second equivalence",
      "name_zh": "𝑇自伴且⟨𝑇𝑣,𝑣⟩ = 0对所有𝑣成立⇐⇒𝑇 = 0",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) null 𝑇 = null 𝑇∗;",
          "zh": "(a)"
        },
        {
          "t": "bullet",
          "en": "(b) range 𝑇 = range 𝑇∗;",
          "zh": "(b)"
        },
        {
          "t": "bullet",
          "en": "(c) 𝑉 = null 𝑇⊕range 𝑇;",
          "zh": "(c)"
        }
      ],
      "note": null,
      "statement_en": "(a) null 𝑇 = null 𝑇∗; (b) range 𝑇 = range 𝑇∗; (c) 𝑉 = null 𝑇⊕range 𝑇;",
      "statement_zh": "(a) (b) (c)"
    },
    {
      "id": "7.17",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.17",
      "name_en": "is of the form",
      "name_zh": "is of the form",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "⟨𝑇𝑣, 𝑣⟩ for appropriate 𝑣, this implies that ⟨𝑇𝑢, 𝑤⟩ = 0 for all 𝑢, 𝑤 ∈ 𝑉. This implies that 𝑇𝑢 = 0 for every 𝑢 ∈ 𝑉 (take 𝑤 = 𝑇𝑢). Hence 𝑇 = 0, as desired. Normal Operators",
          "zh": "is of the form"
        }
      ],
      "note": null,
      "statement_en": "⟨𝑇𝑣, 𝑣⟩ for appropriate 𝑣, this implies that ⟨𝑇𝑢, 𝑤⟩ = 0 for all 𝑢, 𝑤 ∈ 𝑉. This implies that 𝑇𝑢 = 0 for every 𝑢 ∈ 𝑉 (take 𝑤 = 𝑇𝑢). Hence 𝑇 = 0, as desired. Normal Operators",
      "statement_zh": "is of the form"
    },
    {
      "id": "7.18",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.18",
      "name_en": "normal",
      "name_zh": "正规(normal) 内积空间上的算子被称为正规的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator on an inner product space is called normal if it commutes with its adjoint. • In other words, 𝑇 ∈ L(𝑉) is normal if 𝑇𝑇∗ = 𝑇∗𝑇. Every self-adjoint operator is normal, because if 𝑇 is self-adjoint then 𝑇∗ = 𝑇 and hence 𝑇 commutes with 𝑇∗.",
          "zh": "每个自伴算子都是正规的，这是因为，如果 𝑇 自伴，那么 𝑇 ∗ = 𝑇 ，于是 𝑇 和 𝑇 ∗ 可交换."
        }
      ],
      "note": null,
      "statement_en": "An operator on an inner product space is called normal if it commutes with its adjoint. • In other words, 𝑇 ∈ L(𝑉) is normal if 𝑇𝑇∗ = 𝑇∗𝑇. Every self-adjoint operator is normal, because if 𝑇 is self-adjoint then 𝑇∗ = 𝑇 and hence 𝑇 commutes with 𝑇∗.",
      "statement_zh": "每个自伴算子都是正规的，这是因为，如果 𝑇 自伴，那么 𝑇 ∗ = 𝑇 ，于是 𝑇 和 𝑇 ∗ 可交换."
    },
    {
      "id": "7.20",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.20",
      "name_en": "imply that",
      "name_zh": "𝑇 是正规的当且仅当 𝑇𝑣 和 𝑇∗𝑣 的范数相同",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "‖(𝑇 − 𝜆𝐼)𝑣‖ = ∥(𝑇 − 𝜆𝐼)∗𝑣∥ = ∥(𝑇∗ − 𝜆𝐼)𝑣∥. Thus ‖(𝑇 − 𝜆𝐼)𝑣‖ = 0 if and only if ∥(𝑇∗ − 𝜆𝐼)𝑣∥ = 0. Hence 𝑇𝑣 = 𝜆𝑣 if and only if 𝑇∗𝑣 = 𝜆𝑣. Because every self-adjoint operator is normal,",
          "zh": "𝑇 是正规的当且仅当 𝑇𝑣 和 𝑇∗𝑣 的范数相同"
        }
      ],
      "note": {
        "en": "the next result applies in partic- ular to self-adjoint operators.",
        "zh": ""
      },
      "statement_en": "‖(𝑇 − 𝜆𝐼)𝑣‖ = ∥(𝑇 − 𝜆𝐼)∗𝑣∥ = ∥(𝑇∗ − 𝜆𝐼)𝑣∥. Thus ‖(𝑇 − 𝜆𝐼)𝑣‖ = 0 if and only if ∥(𝑇∗ − 𝜆𝐼)𝑣∥ = 0. Hence 𝑇𝑣 = 𝜆𝑣 if and only if 𝑇∗𝑣 = 𝜆𝑣. Because every self-adjoint operator is normal, the next result applies in partic- ular to self-adjoint operators.",
      "statement_zh": "𝑇 是正规的当且仅当 𝑇𝑣 和 𝑇∗𝑣 的范数相同"
    },
    {
      "id": "7.21",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.21",
      "name_en": "range, null space, and eigenvectors of a normal operator",
      "name_zh": "正规算子的值域、零空间和特征向量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose T ∈ L(V) is normal. Then",
          "zh": "假设 T ∈ L(V) 是正规的。那么"
        },
        {
          "t": "bullet",
          "en": "(a) null T = null T*;",
          "zh": "(a) null T = null T*;"
        },
        {
          "t": "bullet",
          "en": "(b) range T = range T*;",
          "zh": "(b) range T = range T*;"
        },
        {
          "t": "bullet",
          "en": "(c) V = null T ⊕ range T;",
          "zh": "(c) V = null T ⊕ range T;"
        },
        {
          "t": "bullet",
          "en": "(d) T − λI is normal for every λ ∈ F;",
          "zh": "(d) 对每个 λ ∈ F，T − λI 都是正规的；"
        }
      ],
      "note": null,
      "statement_en": "Suppose T ∈ L(V) is normal. Then (a) null T = null T*; (b) range T = range T*; (c) V = null T ⊕ range T; (d) T − λI is normal for every λ ∈ F;",
      "statement_zh": "假设 T ∈ L(V) 是正规的。那么 (a) null T = null T*; (b) range T = range T*; (c) V = null T ⊕ range T; (d) 对每个 λ ∈ F，T − λI 都是正规的；"
    },
    {
      "id": "7.22",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.22",
      "name_en": "orthogonal eigenvectors for normal operators",
      "name_zh": "正规算子的正交特征向量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is normal. Then eigenvectors of 𝑇 corresponding to distinct eigenvalues are orthogonal.",
          "zh": "设 𝑇 ∈ L(𝑉) 是正规的.那么 𝑇 的对应于不同特征值的特征向量正交."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is normal. Then eigenvectors of 𝑇 corresponding to distinct eigenvalues are orthogonal.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 是正规的.那么 𝑇 的对应于不同特征值的特征向量正交."
    },
    {
      "id": "7.23",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.23",
      "name_en": "𝑇 is normal ⟺ the real and imaginary parts of 𝑇 commute",
      "name_zh": "𝑇 是正规的 ⇐⇒ 𝑇 的实部和虚部可交换",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then 𝑇 is normal if and only if there exist commuting self-adjoint operators 𝐴 and 𝐵 such that 𝑇 = 𝐴 + 𝑖𝐵.",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉).那么，𝑇 是正规的当且仅当存在可交换的自伴算子 𝐴 和 𝐵 使得 𝑇 = 𝐴 + i 𝐵."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then 𝑇 is normal if and only if there exist commuting self-adjoint operators 𝐴 and 𝐵 such that 𝑇 = 𝐴 + 𝑖𝐵.",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉).那么，𝑇 是正规的当且仅当存在可交换的自伴算子 𝐴 和 𝐵 使得 𝑇 = 𝐴 + i 𝐵."
    },
    {
      "id": "7.24",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.24",
      "name_en": "correspond to the real and imaginary parts of",
      "name_zh": "correspond to the real and imaginary parts of",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇. Thus the informal title of the result below should make sense. 7.23 𝑇 is normal ⟺ the real and imaginary parts of 𝑇 commute Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then 𝑇 is normal if and only if there exist commuting self-adjoint operators 𝐴 and 𝐵 such that 𝑇 = 𝐴 + 𝑖𝐵.",
          "zh": "correspond to the real and imaginary parts of"
        }
      ],
      "note": null,
      "statement_en": "𝑇. Thus the informal title of the result below should make sense. 7.23 𝑇 is normal ⟺ the real and imaginary parts of 𝑇 commute Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then 𝑇 is normal if and only if there exist commuting self-adjoint operators 𝐴 and 𝐵 such that 𝑇 = 𝐴 + 𝑖𝐵.",
      "statement_zh": "correspond to the real and imaginary parts of"
    },
    {
      "id": "7.26",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.26",
      "name_en": "invertible quadratic expressions",
      "name_zh": "可逆二次表达式 设𝑇 ∈ L(𝑉)是自伴的，且𝑏,𝑐 ∈ R 使得𝑏<sub>2</sub> &lt;4𝑐.那么",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is self-adjoint and 𝑏, 𝑐 ∈ 𝐑 are such that 𝑏2 < 4𝑐. Then 𝑇2 + 𝑏𝑇 + 𝑐𝐼 is an invertible operator. This completing-the-square technique can be used to derive the quadratic formula. 244",
          "zh": "𝑇<sup>2</sup> + 𝑏𝑇 + 𝑐𝐼 是可逆算子."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is self-adjoint and 𝑏, 𝑐 ∈ 𝐑 are such that 𝑏2 < 4𝑐. Then 𝑇2 + 𝑏𝑇 + 𝑐𝐼 is an invertible operator. This completing-the-square technique can be used to derive the quadratic formula. 244",
      "statement_zh": "𝑇2 + 𝑏𝑇 + 𝑐𝐼 是可逆算子."
    },
    {
      "id": "7.27",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.27",
      "name_en": "minimal polynomial of self-adjoint operator",
      "name_zh": "自伴算子的最小多项式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is self-adjoint. Then the minimal polynomial of 𝑇 equals (𝑧−𝜆<sub>1</sub>)⋯(𝑧−𝜆<sub>𝑚</sub>)forsome𝜆<sub>1</sub>,...,𝜆<sub>𝑚</sub> ∈𝐑.",
          "zh": "设𝑇 ∈ L(𝑉)是自伴的.那么𝑇的最小多项式等于(𝑧−𝜆<sub>1</sub>)···(𝑧−𝜆<sub>𝑚</sub>)，其中𝜆<sub>1</sub>,…,𝜆<sub>𝑚</sub> ∈ R."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is self-adjoint. Then the minimal polynomial of 𝑇 equals (𝑧−𝜆1)⋯(𝑧−𝜆𝑚)forsome𝜆1,...,𝜆𝑚 ∈𝐑.",
      "statement_zh": "设𝑇 ∈ L(𝑉)是自伴的.那么𝑇的最小多项式等于(𝑧−𝜆1)···(𝑧−𝜆𝑚)，其中𝜆1,…,𝜆𝑚 ∈ R."
    },
    {
      "id": "7.28",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.28",
      "name_en": "has the form",
      "name_zh": "has the form",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(𝑧 − 𝜆<sub>1</sub>) ⋯ (𝑧 − 𝜆<sub>𝑚</sub>), as desired. The result above along with 5.27(a) implies that every self-adjoint operator has an eigenvalue. In fact, as we will see",
          "zh": "has the form"
        }
      ],
      "note": null,
      "statement_en": "(𝑧 − 𝜆1) ⋯ (𝑧 − 𝜆𝑚), as desired. The result above along with 5.27(a) implies that every self-adjoint operator has an eigenvalue. In fact, as we will see",
      "statement_zh": "has the form"
    },
    {
      "id": "7.29",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.29",
      "name_en": "real spectral theorem",
      "name_zh": "实谱定理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose F = ℝ and T ∈ L(V). Then the following are equivalent.",
          "zh": "假设 F = ℝ 且 T ∈ L(V)。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) T is self-adjoint.",
          "zh": "(a) T 是自伴的。"
        },
        {
          "t": "bullet",
          "en": "(b) T has a diagonal matrix with respect to some orthonormal basis of V.",
          "zh": "(b) T 关于 V 的某个规范正交基有对角矩阵。"
        },
        {
          "t": "bullet",
          "en": "(c) V has an orthonormal basis consisting of eigenvectors of T.",
          "zh": "(c) V 有由 T 的特征向量组成的规范正交基。"
        }
      ],
      "note": null,
      "statement_en": "Suppose F = ℝ and T ∈ L(V). Then the following are equivalent. (a) T is self-adjoint. (b) T has a diagonal matrix with respect to some orthonormal basis of V. (c) V has an orthonormal basis consisting of eigenvectors of T.",
      "statement_zh": "假设 F = ℝ 且 T ∈ L(V)。那么下列条件等价。 (a) T 是自伴的。 (b) T 关于 V 的某个规范正交基有对角矩阵。 (c) V 有由 T 的特征向量组成的规范正交基。"
    },
    {
      "id": "7.31",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.31",
      "name_en": "complex spectral theorem",
      "name_zh": "复谱定理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose F = ℂ and T ∈ L(V). Then the following are equivalent.",
          "zh": "假设 F = ℂ 且 T ∈ L(V)。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) T is normal.",
          "zh": "(a) T 是正规的。"
        },
        {
          "t": "bullet",
          "en": "(b) T has a diagonal matrix with respect to some orthonormal basis of V.",
          "zh": "(b) T 关于 V 的某个规范正交基有对角矩阵。"
        },
        {
          "t": "bullet",
          "en": "(c) V has an orthonormal basis consisting of eigenvectors of T.",
          "zh": "(c) V 有由 T 的特征向量组成的规范正交基。"
        }
      ],
      "note": null,
      "statement_en": "Suppose F = ℂ and T ∈ L(V). Then the following are equivalent. (a) T is normal. (b) T has a diagonal matrix with respect to some orthonormal basis of V. (c) V has an orthonormal basis consisting of eigenvectors of T.",
      "statement_zh": "假设 F = ℂ 且 T ∈ L(V)。那么下列条件等价。 (a) T 是正规的。 (b) T 关于 V 的某个规范正交基有对角矩阵。 (c) V 有由 T 的特征向量组成的规范正交基。"
    },
    {
      "id": "7.34",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.34",
      "name_en": "positive operator",
      "name_zh": "正算子",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑇 ∈ L(𝑉) is called positive if 𝑇 is self-adjoint and ⟨𝑇𝑣,𝑣⟩ ≥ 0 If 𝑉 is a complex vector space, then the requirement that 𝑇 be self-adjoint can for all 𝑣 ∈ 𝑉. be dropped from the definition above (by 7.14).",
          "zh": "算子 𝑇 ∈ L(𝑉) 称为正的，如果 𝑇 是自伴的且对所有 𝑣 ∈ 𝑉 有 ⟨𝑇𝑣,𝑣⟩ ≥ 0. 7C 正算子 209 如果 𝑉 是复向量空间，那么以上定义中“𝑇 是自伴的”这一条件可以去掉(根据 7.14)."
        }
      ],
      "note": null,
      "statement_en": "An operator 𝑇 ∈ L(𝑉) is called positive if 𝑇 is self-adjoint and ⟨𝑇𝑣,𝑣⟩ ≥ 0 If 𝑉 is a complex vector space, then the requirement that 𝑇 be self-adjoint can for all 𝑣 ∈ 𝑉. be dropped from the definition above (by 7.14).",
      "statement_zh": "算子 𝑇 ∈ L(𝑉) 称为正的，如果 𝑇 是自伴的且对所有 𝑣 ∈ 𝑉 有 ⟨𝑇𝑣,𝑣⟩ ≥ 0. 7C 正算子 209 如果 𝑉 是复向量空间，那么以上定义中“𝑇 是自伴的”这一条件可以去掉(根据 7.14)."
    },
    {
      "id": "7.36",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.36",
      "name_en": "square root",
      "name_zh": "平方根(square root) 算子𝑅称为算子𝑇的平方根",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑅 is called a square root of an operator 𝑇 if 𝑅2 = 𝑇.",
          "zh": "!"
        }
      ],
      "note": null,
      "statement_en": "An operator 𝑅 is called a square root of an operator 𝑇 if 𝑅2 = 𝑇.",
      "statement_zh": "!"
    },
    {
      "id": "7.38",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.38",
      "name_en": "characterizations of positive operators",
      "name_zh": "正算子的刻画",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Let T ∈ L(V). Then the following are equivalent.",
          "zh": "令 T ∈ L(V)。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) T is a positive operator.",
          "zh": "(a) T 是正算子。"
        },
        {
          "t": "bullet",
          "en": "(b) T is self-adjoint and all eigenvalues of T are nonnegative.",
          "zh": "(b) T 是自伴的且 T 的所有特征值都非负。"
        },
        {
          "t": "bullet",
          "en": "(c) T has a positive square root.",
          "zh": "(c) T 有正平方根。"
        },
        {
          "t": "bullet",
          "en": "(d) T has a self-adjoint square root.",
          "zh": "(d) T 有自伴平方根。"
        },
        {
          "t": "bullet",
          "en": "(e) There exists an operator R ∈ L(V) such that T = R* R.",
          "zh": "(e) 存在算子 R ∈ L(V) 使得 T = R* R。"
        }
      ],
      "note": null,
      "statement_en": "Let T ∈ L(V). Then the following are equivalent. (a) T is a positive operator. (b) T is self-adjoint and all eigenvalues of T are nonnegative. (c) T has a positive square root. (d) T has a self-adjoint square root. (e) There exists an operator R ∈ L(V) such that T = R* R.",
      "statement_zh": "令 T ∈ L(V)。那么下列条件等价。 (a) T 是正算子。 (b) T 是自伴的且 T 的所有特征值都非负。 (c) T 有正平方根。 (d) T 有自伴平方根。 (e) 存在算子 R ∈ L(V) 使得 T = R* R。"
    },
    {
      "id": "7.39",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.39",
      "name_en": "each positive operator has only one positive square root",
      "name_zh": "每个正算子都只有",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉 has a unique positive square root.",
          "zh": "每个正算子都只有"
        }
      ],
      "note": null,
      "statement_en": "𝑉 has a unique positive square root.",
      "statement_zh": "每个正算子都只有"
    },
    {
      "id": "7.40",
      "kind": "notation",
      "chapter": "ch7",
      "number": "7.40",
      "name_en": "√𝑇",
      "name_zh": "√𝑇",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑇 a positive operator, √𝑇 denotes the unique positive square root of 𝑇.",
          "zh": "对于正算子 𝑇，√𝑇 表示 𝑇 的唯一正平方根."
        }
      ],
      "note": null,
      "statement_en": "For 𝑇 a positive operator, √𝑇 denotes the unique positive square root of 𝑇.",
      "statement_zh": "对于正算子 𝑇，√𝑇 表示 𝑇 的唯一正平方根."
    },
    {
      "id": "7.42",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.42",
      "name_en": "and that each matrix above is the matrix of a positive operator",
      "name_zh": "and that each matrix above is the matrix of a positive operator",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": ". The statement of",
          "zh": "and that each matrix above is the matrix of a positive operator"
        }
      ],
      "note": {
        "en": "the next result does not involve a square root, but the clean",
        "zh": ""
      },
      "statement_en": ". The statement of the next result does not involve a square root, but the clean",
      "statement_zh": "and that each matrix above is the matrix of a positive operator"
    },
    {
      "id": "7.44",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.44",
      "name_en": "isometry",
      "name_zh": "等距映射(isometry) 线性映射 𝑆 ∈ L(𝑉, 𝑊) 被称为等距映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear map 𝑆 ∈ L(𝑉, 𝑊) is called an isometry if ‖𝑆𝑣‖ = ‖𝑣‖ for every 𝑣 ∈ 𝑉. In other words, a linear map is an isometry if it preserves norms. If 𝑆 ∈ L(𝑉, 𝑊) is an isometry and 𝑣 ∈ 𝑉 is such that 𝑆𝑣 = 0, then ‖𝑣‖ = ‖𝑆𝑣‖ = ‖0‖ = 0, which implies that 𝑣 = 0. Thus every isometry is injective. The Greek word isos means equal; the Greek word metron means measure. Thus isometry literally means equal measure.",
          "zh": "∥𝑆𝑣∥ = ∥𝑣∥ 对任一 𝑣 ∈ 𝑉 都成立.换句话说，保持范数的线性映射就是等距映射. 如果 𝑆 ∈ L(𝑉,𝑊) 是等距映射且 𝑣 ∈ 𝑉 使得 𝑆𝑣 = 0，那么 ∥𝑣∥ = ∥𝑆𝑣∥ = ∥0∥ = 0，这 意味着 𝑣 = 0.因此每个等距映射都是单射. 希腊语单词 isos 意为相等、metron 意为度 量，所以 isometry 的字面意思就是度量相 等."
        }
      ],
      "note": null,
      "statement_en": "A linear map 𝑆 ∈ L(𝑉, 𝑊) is called an isometry if ‖𝑆𝑣‖ = ‖𝑣‖ for every 𝑣 ∈ 𝑉. In other words, a linear map is an isometry if it preserves norms. If 𝑆 ∈ L(𝑉, 𝑊) is an isometry and 𝑣 ∈ 𝑉 is such that 𝑆𝑣 = 0, then ‖𝑣‖ = ‖𝑆𝑣‖ = ‖0‖ = 0, which implies that 𝑣 = 0. Thus every isometry is injective. The Greek word isos means equal; the Greek word metron means measure. Thus isometry literally means equal measure.",
      "statement_zh": "∥𝑆𝑣∥ = ∥𝑣∥ 对任一 𝑣 ∈ 𝑉 都成立.换句话说，保持范数的线性映射就是等距映射. 如果 𝑆 ∈ L(𝑉,𝑊) 是等距映射且 𝑣 ∈ 𝑉 使得 𝑆𝑣 = 0，那么 ∥𝑣∥ = ∥𝑆𝑣∥ = ∥0∥ = 0，这 意味着 𝑣 = 0.因此每个等距映射都是单射. 希腊语单词 isos 意为相等、metron 意为度 量，所以 isometry 的字面意思就是度量相 等."
    },
    {
      "id": "7.49",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.49",
      "name_en": "characterizations of isometries",
      "name_zh": "等距映射的刻画",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose S ∈ L(V, W). Suppose e<sub>1</sub>, …, e<sub>n</sub> is an orthonormal basis of V and f<sub>1</sub>, …, f<sub>m</sub> is an orthonormal basis of W. Then the following are equivalent.",
          "zh": "假设 S ∈ L(V, W)。假设 e<sub>1</sub>, …, e<sub>n</sub> 是 V 的规范正交基，f<sub>1</sub>, …, f<sub>m</sub> 是 W 的规范正交基。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) S is an isometry.",
          "zh": "(a) S 是等距映射。"
        },
        {
          "t": "bullet",
          "en": "(b) S* S = I.",
          "zh": "(b) S* S = I。"
        },
        {
          "t": "bullet",
          "en": "(c) ⟨Su, Sv⟩ = ⟨u, v⟩ for all u, v ∈ V.",
          "zh": "(c) 对所有 u, v ∈ V，有 ⟨Su, Sv⟩ = ⟨u, v⟩。"
        },
        {
          "t": "bullet",
          "en": "(d) Se<sub>1</sub>, …, Se<sub>n</sub> form an orthonormal list in W.",
          "zh": "(d) Se<sub>1</sub>, …, Se<sub>n</sub> 在 W 中构成规范正交组。"
        }
      ],
      "note": null,
      "statement_en": "Suppose S ∈ L(V, W). Suppose e1, …, en is an orthonormal basis of V and f1, …, fm is an orthonormal basis of W. Then the following are equivalent. (a) S is an isometry. (b) S* S = I. (c) ⟨Su, Sv⟩ = ⟨u, v⟩ for all u, v ∈ V. (d) Se1, …, Sen form an orthonormal list in W.",
      "statement_zh": "假设 S ∈ L(V, W)。假设 e1, …, en 是 V 的规范正交基，f1, …, fm 是 W 的规范正交基。那么下列条件等价。 (a) S 是等距映射。 (b) S* S = I。 (c) 对所有 u, v ∈ V，有 ⟨Su, Sv⟩ = ⟨u, v⟩。 (d) Se1, …, Sen 在 W 中构成规范正交组。"
    },
    {
      "id": "7.50",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.50",
      "name_en": "is the inner product in",
      "name_zh": "is the inner product in",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐅<sup>𝑚</sup> of columns 𝑘 and 𝑟 of 𝐴. Thus the columns of 𝐴 form an orthonormal list in 𝐅<sup>𝑚</sup>, proving that (d) implies (e). Now suppose (e) holds, so the columns of the matrix 𝐴 defined in the paragraph above form an orthonormal list in 𝐅<sup>𝑚</sup>. Then 7.50 shows that 𝑆𝑒<sub>1</sub>, …, 𝑆𝑒<sub>𝑛</sub> is an orthonormal list in 𝑊. Thus Example 7.45, with 𝑆𝑒<sub>1</sub>, …, 𝑆𝑒<sub>𝑛</sub> playing the role of 𝑔<sub>1</sub>, …, 𝑔<sub>𝑛</sub>, shows that 𝑆 is an isometry, proving that (e) implies (a). See",
          "zh": "is the inner product in"
        }
      ],
      "note": null,
      "statement_en": "𝐅𝑚 of columns 𝑘 and 𝑟 of 𝐴. Thus the columns of 𝐴 form an orthonormal list in 𝐅𝑚, proving that (d) implies (e). Now suppose (e) holds, so the columns of the matrix 𝐴 defined in the paragraph above form an orthonormal list in 𝐅𝑚. Then 7.50 shows that 𝑆𝑒1, …, 𝑆𝑒𝑛 is an orthonormal list in 𝑊. Thus Example 7.45, with 𝑆𝑒1, …, 𝑆𝑒𝑛 playing the role of 𝑔1, …, 𝑔𝑛, shows that 𝑆 is an isometry, proving that (e) implies (a). See",
      "statement_zh": "is the inner product in"
    },
    {
      "id": "7.51",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.51",
      "name_en": "unitary operator",
      "name_zh": "幺正算子",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑆 ∈ L(𝑉) is called unitary if 𝑆 is an invertible isometry. As previously noted, every isometry is injective. Every injective operator on a finite-dimensional vector space is in- vertible (see 3.65). A standing assump- tion for this chapter is that 𝑉 is a finite- dimensional inner product space. Thus we could delete the word “invertible” from the definition above without chang- ing the meaning. The unnecessary word Although the words “unitary” and “isometry” mean the same thing for operators on finite-dimensional inner product spaces, remember that a uni- tary operator maps a vector space to itself, while an isometry maps a vector space to another (possibly different) vector space. “invertible” has been retained in the definition above for consistency with the definition readers may encounter when learning about inner product spaces that are not necessarily finite-dimensional.",
          "zh": "算子 𝑆 ∈ L(𝑉) 被称为幺正的，如果 𝑆 是可逆等距映射. 前面提到过，每个等距映射都是单射.而 有限维向量空间上的每个单射算子都是可逆 的(见 3.65)，“𝑉 是有限维内积空间”又是 本章总成立的一个假设，因此我们可以从上 面的定义中移去“可逆”一词，而不改变其含 义.但这里保留“可逆”这个不必要的词，是为了定义的一致性，毕竟读者在学习不一定有限 维的内积空间时，遇到的应该还是上面这个定义. 虽然对于有限维内积空间上的算子而言，幺 正(unitary)和等距(isometry)是同一个意 思;但是要记得，幺正算子将向量空间映射 到自身，而等距映射将向量空间映射到另一 (可能不同的)向量空间."
        }
      ],
      "note": null,
      "statement_en": "An operator 𝑆 ∈ L(𝑉) is called unitary if 𝑆 is an invertible isometry. As previously noted, every isometry is injective. Every injective operator on a finite-dimensional vector space is in- vertible (see 3.65). A standing assump- tion for this chapter is that 𝑉 is a finite- dimensional inner product space. Thus we could delete the word “invertible” from the definition above without chang- ing the meaning. The unnecessary word Although the words “unitary” and “isometry” mean the same thing for operators on finite-dimensional inner product spaces, remember that a uni- tary operator maps a vector space to itself, while an isometry maps a vector space to another (possibly different) vector space. “invertible” has been retained in the definition above for consistency with the definition readers may encounter when learning about inner product spaces that are not necessarily finite-dimensional.",
      "statement_zh": "算子 𝑆 ∈ L(𝑉) 被称为幺正的，如果 𝑆 是可逆等距映射. 前面提到过，每个等距映射都是单射.而 有限维向量空间上的每个单射算子都是可逆 的(见 3.65)，“𝑉 是有限维内积空间”又是 本章总成立的一个假设，因此我们可以从上 面的定义中移去“可逆”一词，而不改变其含 义.但这里保留“可逆”这个不必要的词，是为了定义的一致性，毕竟读者在学习不一定有限 维的内积空间时，遇到的应该还是上面这个定义. 虽然对于有限维内积空间上的算子而言，幺 正(unitary)和等距(isometry)是同一个意 思;但是要记得，幺正算子将向量空间映射 到自身，而等距映射将向量空间映射到另一 (可能不同的)向量空间."
    },
    {
      "id": "7.53",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.53",
      "name_en": "characterizations of unitary operators",
      "name_zh": "幺正算子的刻画",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose S ∈ L(V). Suppose e<sub>1</sub>, …, e<sub>n</sub> is an orthonormal basis of V. Then the following are equivalent.",
          "zh": "假设 S ∈ L(V)。假设 e<sub>1</sub>, …, e<sub>n</sub> 是 V 的规范正交基。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) S is a unitary operator.",
          "zh": "(a) S 是幺正算子。"
        },
        {
          "t": "bullet",
          "en": "(b) S* S = S S* = I.",
          "zh": "(b) S* S = S S* = I。"
        },
        {
          "t": "bullet",
          "en": "(c) S is invertible and S<sup>−1</sup> = S*.",
          "zh": "(c) S 可逆且 S<sup>−1</sup> = S*。"
        },
        {
          "t": "bullet",
          "en": "(d) Se<sub>1</sub>, …, Se<sub>n</sub> is an orthonormal basis of V.",
          "zh": "(d) Se<sub>1</sub>, …, Se<sub>n</sub> 是 V 的规范正交基。"
        },
        {
          "t": "bullet",
          "en": "(e) The rows of M(S, (e<sub>1</sub>, …, e<sub>n</sub>)) form an orthonormal basis of F<sup>n</sup> with respect to the Euclidean inner product.",
          "zh": "(e) M(S, (e<sub>1</sub>, …, e<sub>n</sub>)) 的各行关于欧几里得内积构成 F<sup>n</sup> 的规范正交基。"
        },
        {
          "t": "bullet",
          "en": "(f) S* is a unitary operator.",
          "zh": "(f) S* 是幺正算子。"
        }
      ],
      "note": null,
      "statement_en": "Suppose S ∈ L(V). Suppose e1, …, en is an orthonormal basis of V. Then the following are equivalent. (a) S is a unitary operator. (b) S* S = S S* = I. (c) S is invertible and S−1 = S*. (d) Se1, …, Sen is an orthonormal basis of V. (e) The rows of M(S, (e1, …, en)) form an orthonormal basis of Fn with respect to the Euclidean inner product. (f) S* is a unitary operator.",
      "statement_zh": "假设 S ∈ L(V)。假设 e1, …, en 是 V 的规范正交基。那么下列条件等价。 (a) S 是幺正算子。 (b) S* S = S S* = I。 (c) S 可逆且 S−1 = S*。 (d) Se1, …, Sen 是 V 的规范正交基。 (e) M(S, (e1, …, en)) 的各行关于欧几里得内积构成 Fn 的规范正交基。 (f) S* 是幺正算子。"
    },
    {
      "id": "7.54",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.54",
      "name_en": "eigenvalues of unitary operators have absolute value 1 Suppose",
      "name_zh": "幺正算子的特征值绝对值是 1",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝜆 is an eigenvalue of a unitary operator. Then |𝜆| = 1.",
          "zh": "设 𝜆 是幺正算子的特征值，那么 |𝜆| = 1. 因此，|𝜆| = 1，命题得证. 接下来这条结果，以复谱定理为主要工具，刻画了有限维复内积空间上的幺正算子."
        }
      ],
      "note": null,
      "statement_en": "𝜆 is an eigenvalue of a unitary operator. Then |𝜆| = 1.",
      "statement_zh": "设 𝜆 是幺正算子的特征值，那么 |𝜆| = 1. 因此，|𝜆| = 1，命题得证. 接下来这条结果，以复谱定理为主要工具，刻画了有限维复内积空间上的幺正算子."
    },
    {
      "id": "7.55",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.55",
      "name_en": "description of unitary operators on complex inner product spaces Suppose",
      "name_zh": "对复内积空间上的幺正算子的描述",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose F = ℂ and S ∈ L(V). Then the following are equivalent.",
          "zh": "假设 F = ℂ 且 S ∈ L(V)。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) S is a unitary operator.",
          "zh": "(a) S 是幺正算子。"
        },
        {
          "t": "bullet",
          "en": "(b) There is an orthonormal basis of V consisting of eigenvectors of S whose corresponding eigenvalues all have absolute value 1.",
          "zh": "(b) V 有由 S 的特征向量组成的规范正交基，且这些特征向量对应的特征值的绝对值都是 1。"
        }
      ],
      "note": null,
      "statement_en": "Suppose F = ℂ and S ∈ L(V). Then the following are equivalent. (a) S is a unitary operator. (b) There is an orthonormal basis of V consisting of eigenvectors of S whose corresponding eigenvalues all have absolute value 1.",
      "statement_zh": "假设 F = ℂ 且 S ∈ L(V)。那么下列条件等价。 (a) S 是幺正算子。 (b) V 有由 S 的特征向量组成的规范正交基，且这些特征向量对应的特征值的绝对值都是 1。"
    },
    {
      "id": "7.56",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.56",
      "name_en": "unitary matrix",
      "name_zh": "幺正矩阵",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(c) below is the usual Euclidean norm on 𝐅<sup>𝑛</sup> that comes from the Euclidean inner product. In",
          "zh": "(c)"
        },
        {
          "t": "bullet",
          "en": "(d) , 𝑄∗ denotes the conjugate transpose of the matrix 𝑄, which corresponds to the adjoint of the associated operator.",
          "zh": "(d)"
        }
      ],
      "note": null,
      "statement_en": "(c) below is the usual Euclidean norm on 𝐅𝑛 that comes from the Euclidean inner product. In (d) , 𝑄∗ denotes the conjugate transpose of the matrix 𝑄, which corresponds to the adjoint of the associated operator.",
      "statement_zh": "(c) (d)"
    },
    {
      "id": "7.57",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.57",
      "name_en": "characterizations of unitary matrices",
      "name_zh": "幺正矩阵的刻画",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose Q is an n-by-n matrix. Then the following are equivalent.",
          "zh": "假设 Q 是 n×n 矩阵。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) Q is a unitary matrix.",
          "zh": "(a) Q 是幺正矩阵。"
        },
        {
          "t": "bullet",
          "en": "(b) The rows of Q form an orthonormal list in F<sup>n</sup>.",
          "zh": "(b) Q 的各行在 F<sup>n</sup> 中构成规范正交组。"
        },
        {
          "t": "bullet",
          "en": "(c) ‖Qv‖ = ‖v‖ for every v ∈ F<sup>n</sup>.",
          "zh": "(c) 对每个 v ∈ F<sup>n</sup>，有 ‖Qv‖ = ‖v‖。"
        },
        {
          "t": "bullet",
          "en": "(d) Q* Q = Q Q* = I.",
          "zh": "(d) Q* Q = Q Q* = I。"
        }
      ],
      "note": null,
      "statement_en": "Suppose Q is an n-by-n matrix. Then the following are equivalent. (a) Q is a unitary matrix. (b) The rows of Q form an orthonormal list in Fn. (c) ‖Qv‖ = ‖v‖ for every v ∈ Fn. (d) Q* Q = Q Q* = I.",
      "statement_zh": "假设 Q 是 n×n 矩阵。那么下列条件等价。 (a) Q 是幺正矩阵。 (b) Q 的各行在 Fn 中构成规范正交组。 (c) 对每个 v ∈ Fn，有 ‖Qv‖ = ‖v‖。 (d) Q* Q = Q Q* = I。"
    },
    {
      "id": "7.58",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.58",
      "name_en": "QR factorization",
      "name_zh": "的证明.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is a square matrix with linearly independent columns. Then there exist unique matrices 𝑄 and 𝑅 such that 𝑄 is unitary, 𝑅 is upper triangular with only positive numbers on its diagonal, and 𝐴 = 𝑄𝑅.",
          "zh": "11 求一多项式𝑞 ∈ P2(R)，使得𝑝(1) = ́1 𝑝𝑞对任一𝑝 ∈ P2(R)都成立. 20 12 求一多项式𝑞 ∈ P2(R)，使得 ˆ1 ˆ1 𝑝(𝑥) cos(𝜋𝑥)d 𝑥 = 𝑝𝑞 对任一 𝑝 ∈ P2(R) 都成立. 13 证明:𝑉 中一组向量 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub> 线性相关，当且仅当 6.32 中的格拉姆-施密特公式对某个 𝑘 ∈ {1,…,𝑚}得到𝑓<sub>𝑘</sub> = 0. 注 关于确定内积空间中一组向量是否线性相关，本题提供了高斯消元法的一种替代方法. 14 设 𝑉 是实内积空间，且 𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub> 是 𝑉 中的一个线性无关向量组.证明:𝑉 中存在恰好 2𝑚 个规范正交向量组 𝑒<sub>1</sub>,…,𝑒<sub>𝑚</sub> 使得 span(𝑣<sub>1</sub>,…,𝑣<sub>𝑘</sub>) = span(𝑒<sub>1</sub>,…,𝑒<sub>𝑘</sub>) 对所有 𝑘 ∈ {1, …, 𝑚} 成立. 6B 规范正交基 175 15 设⟨·,·⟩1 和⟨·,·⟩2 是𝑉上的内积，使得⟨𝑢,𝑣⟩1 = 0当且仅当⟨𝑢,𝑣⟩2 = 0.证明:存在正数𝑐使 得⟨𝑢,𝑣⟩1 = 𝑐⟨𝑢,𝑣⟩2 对任意𝑢,𝑣 ∈ 𝑉成立. 注 本题表明，如果两个内积下的正交向量对相同，那么其中一个内积是另一个的标量倍. 16 设 𝑉 是有限维的.设 ⟨·, ·⟩1 和 ⟨·, ·⟩2 是 𝑉 上的内积，与之关联的范数是 ∥·∥1 和 ∥·∥<sup>2</sup>.证明存 在正数𝑐使得∥𝑣∥1 ≤𝑐∥𝑣∥<sup>2</sup> 对任一𝑣 ∈ 𝑉成立. 17 设 F = C 且 𝑉 是有限维的.证明:如果 𝑇 是 𝑉 上一算子，使得其唯一特征值是 1 且对所有 𝑣 ∈ 𝑉 有 ∥𝑇𝑣∥ ≤ ∥𝑣∥，那么 𝑇 是恒等算子. 18 设𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub>是𝑉中一线性无关组.证明:存在𝑣 ∈ 𝑉使得⟨𝑢<sub>𝑘</sub>,𝑣⟩ = 1对所有𝑘 ∈ {1,…,𝑚} 成立. 19 设𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉 的基.证明:存在𝑉 的一个基𝑢<sub>1</sub>,…,𝑢<sub>𝑛</sub> 使得 0 若𝑗 = ̸𝑘, ⟨𝑣<sub>𝑗</sub>,𝑢<sub>𝑘</sub>⟩ = 1 若𝑗 = 𝑘. 20 设 F = C，𝑉是有限维的，且 E⊆L(𝑉)使得 𝑆𝑇 = 𝑇𝑆 对所有 𝑆, 𝑇 ∈ E 成立.证明:存在 𝑉 的一规范正交基使得 E 的每个元素关于它都有上三角 矩阵. 注 本题证明了 5E 节的"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is a square matrix with linearly independent columns. Then there exist unique matrices 𝑄 and 𝑅 such that 𝑄 is unitary, 𝑅 is upper triangular with only positive numbers on its diagonal, and 𝐴 = 𝑄𝑅.",
      "statement_zh": "11 求一多项式𝑞 ∈ P2(R)，使得𝑝(1) = ́1 𝑝𝑞对任一𝑝 ∈ P2(R)都成立. 20 12 求一多项式𝑞 ∈ P2(R)，使得 ˆ1 ˆ1 𝑝(𝑥) cos(𝜋𝑥)d 𝑥 = 𝑝𝑞 对任一 𝑝 ∈ P2(R) 都成立. 13 证明:𝑉 中一组向量 𝑣1, …, 𝑣𝑚 线性相关，当且仅当 6.32 中的格拉姆-施密特公式对某个 𝑘 ∈ {1,…,𝑚}得到𝑓𝑘 = 0. 注 关于确定内积空间中一组向量是否线性相关，本题提供了高斯消元法的一种替代方法. 14 设 𝑉 是实内积空间，且 𝑣1, …, 𝑣𝑚 是 𝑉 中的一个线性无关向量组.证明:𝑉 中存在恰好 2𝑚 个规范正交向量组 𝑒1,…,𝑒𝑚 使得 span(𝑣1,…,𝑣𝑘) = span(𝑒1,…,𝑒𝑘) 对所有 𝑘 ∈ {1, …, 𝑚} 成立. 6B 规范正交基 175 15 设⟨·,·⟩1 和⟨·,·⟩2 是𝑉上的内积，使得⟨𝑢,𝑣⟩1 = 0当且仅当⟨𝑢,𝑣⟩2 = 0.证明:存在正数𝑐使 得⟨𝑢,𝑣⟩1 = 𝑐⟨𝑢,𝑣⟩2 对任意𝑢,𝑣 ∈ 𝑉成立. 注 本题表明，如果两个内积下的正交向量对相同，那么其中一个内积是另一个的标量倍. 16 设 𝑉 是有限维的.设 ⟨·, ·⟩1 和 ⟨·, ·⟩2 是 𝑉 上的内积，与之关联的范数是 ∥·∥1 和 ∥·∥2.证明存 在正数𝑐使得∥𝑣∥1 ≤𝑐∥𝑣∥2 对任一𝑣 ∈ 𝑉成立. 17 设 F = C 且 𝑉 是有限维的.证明:如果 𝑇 是 𝑉 上一算子，使得其唯一特征值是 1 且对所有 𝑣 ∈ 𝑉 有 ∥𝑇𝑣∥ ≤ ∥𝑣∥，那么 𝑇 是恒等算子. 18 设𝑢1,…,𝑢𝑚是𝑉中一线性无关组.证明:存在𝑣 ∈ 𝑉使得⟨𝑢𝑘,𝑣⟩ = 1对所有𝑘 ∈ {1,…,𝑚} 成立. 19 设𝑣1,…,𝑣𝑛 是𝑉 的基.证明:存在𝑉 的一个基𝑢1,…,𝑢𝑛 使得 0 若𝑗 = ̸𝑘, ⟨𝑣𝑗,𝑢𝑘⟩ = 1 若𝑗 = 𝑘. 20 设 F = C，𝑉是有限维的，且 E⊆L(𝑉)使得 𝑆𝑇 = 𝑇𝑆 对所有 𝑆, 𝑇 ∈ E 成立.证明:存在 𝑉 的一规范正交基使得 E 的每个元素关于它都有上三角 矩阵. 注 本题证明了 5E 节的"
    },
    {
      "id": "7.61",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.61",
      "name_en": "positive invertible operator",
      "name_zh": "可逆正算子",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A self-adjoint operator 𝑇 ∈ L(𝑉) is a positive invertible operator if and only if ⟨𝑇𝑣,𝑣⟩ &gt; 0 for every nonzero 𝑣 ∈ 𝑉.",
          "zh": "自伴算子 𝑇 ∈ L(𝑉) 是可逆正算子，当且仅当 ⟨𝑇𝑣, 𝑣⟩ &gt; 0 对任意非零 𝑣 ∈ 𝑉 都成立. 7D 等距映射、幺正算子和矩阵分解 221"
        }
      ],
      "note": null,
      "statement_en": "A self-adjoint operator 𝑇 ∈ L(𝑉) is a positive invertible operator if and only if ⟨𝑇𝑣,𝑣⟩ &gt; 0 for every nonzero 𝑣 ∈ 𝑉.",
      "statement_zh": "自伴算子 𝑇 ∈ L(𝑉) 是可逆正算子，当且仅当 ⟨𝑇𝑣, 𝑣⟩ &gt; 0 对任意非零 𝑣 ∈ 𝑉 都成立. 7D 等距映射、幺正算子和矩阵分解 221"
    },
    {
      "id": "7.62",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.62",
      "name_en": "positive definite",
      "name_zh": "正定",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A matrix 𝐵 ∈ 𝐅<sup>𝑛,𝑛</sup> is called positive definite if 𝐵∗ = 𝐵 and ⟨𝐵𝑥, 𝑥⟩ &gt; 0 for every nonzero 𝑥 ∈ 𝐅<sup>𝑛</sup>. A matrix is upper triangular if and only if its conjugate transpose is lower triangular (meaning that all entries above the diagonal are 0). The factorization below, which has important consequences in computational linear algebra, writes a positive definite matrix as the product of a lower triangular matrix and its conjugate transpose. Our next result is solely about matrices, although the",
          "zh": "矩阵𝐵 ∈ F<sup>𝑛</sup>,𝑛 称为正定的，如果𝐵∗ = 𝐵且 ⟨𝐵𝑥, 𝑥⟩ &gt; 0 对任意非零 𝑥 ∈ F<sup>𝑛</sup> 都成立. 矩阵是上三角的当且仅当它的共轭转置是下三角的(意即对角线上方所有元素为 0).下 面的这个分解，将正定矩阵写成下三角矩阵和它的共轭转置的乘积，它在数值线性代数 中具 有重要意义. 接下来这条结果完全是关于矩阵的，不过它的证明也利用了算子和矩阵两者结论之间的 等同关系.在下面这条结果中，如果矩阵 𝐵 属于 F<sup>𝑛</sup>,𝑛，那么矩阵 𝑅 也属于 F<sup>𝑛</sup>,𝑛."
        }
      ],
      "note": null,
      "statement_en": "A matrix 𝐵 ∈ 𝐅𝑛,𝑛 is called positive definite if 𝐵∗ = 𝐵 and ⟨𝐵𝑥, 𝑥⟩ &gt; 0 for every nonzero 𝑥 ∈ 𝐅𝑛. A matrix is upper triangular if and only if its conjugate transpose is lower triangular (meaning that all entries above the diagonal are 0). The factorization below, which has important consequences in computational linear algebra, writes a positive definite matrix as the product of a lower triangular matrix and its conjugate transpose. Our next result is solely about matrices, although the",
      "statement_zh": "矩阵𝐵 ∈ F𝑛,𝑛 称为正定的，如果𝐵∗ = 𝐵且 ⟨𝐵𝑥, 𝑥⟩ &gt; 0 对任意非零 𝑥 ∈ F𝑛 都成立. 矩阵是上三角的当且仅当它的共轭转置是下三角的(意即对角线上方所有元素为 0).下 面的这个分解，将正定矩阵写成下三角矩阵和它的共轭转置的乘积，它在数值线性代数 中具 有重要意义. 接下来这条结果完全是关于矩阵的，不过它的证明也利用了算子和矩阵两者结论之间的 等同关系.在下面这条结果中，如果矩阵 𝐵 属于 F𝑛,𝑛，那么矩阵 𝑅 也属于 F𝑛,𝑛."
    },
    {
      "id": "7.63",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.63",
      "name_en": "Cholesky factorization",
      "name_zh": "楚列斯基分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐵 is a positive definite matrix. Then there exists a unique upper- triangular matrix 𝑅 with only positive numbers on its diagonal such that 𝐵 = 𝑅∗𝑅.",
          "zh": "设 𝐵 是正定矩阵.那么存在唯一一个对角线上仅含正数的上三角矩阵 𝑅 使得 𝐵 = 𝑅∗𝑅."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐵 is a positive definite matrix. Then there exists a unique upper- triangular matrix 𝑅 with only positive numbers on its diagonal such that 𝐵 = 𝑅∗𝑅.",
      "statement_zh": "设 𝐵 是正定矩阵.那么存在唯一一个对角线上仅含正数的上三角矩阵 𝑅 使得 𝐵 = 𝑅∗𝑅."
    },
    {
      "id": "7.64",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.64",
      "name_en": "properties of 𝑇∗𝑇",
      "name_zh": "𝑇∗𝑇 的性质 设𝑇 ∈ L(𝑉,𝑊)，那么",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose T ∈ L(V, W). Then",
          "zh": "假设 T ∈ L(V, W)。那么"
        },
        {
          "t": "bullet",
          "en": "(a) T* T is a positive operator on V;",
          "zh": "(a) T* T 是 V 上的正算子；"
        },
        {
          "t": "bullet",
          "en": "(b) null T* T = null T;",
          "zh": "(b) null T* T = null T；"
        },
        {
          "t": "bullet",
          "en": "(c) range T* T = range T*;",
          "zh": "(c) range T* T = range T*；"
        },
        {
          "t": "bullet",
          "en": "(d) dim range T = dim range T* = dim range T* T.",
          "zh": "(d) dim range T = dim range T* = dim range T* T。"
        }
      ],
      "note": null,
      "statement_en": "Suppose T ∈ L(V, W). Then (a) T* T is a positive operator on V; (b) null T* T = null T; (c) range T* T = range T*; (d) dim range T = dim range T* = dim range T* T.",
      "statement_zh": "假设 T ∈ L(V, W)。那么 (a) T* T 是 V 上的正算子； (b) null T* T = null T； (c) range T* T = range T*； (d) dim range T = dim range T* = dim range T* T。"
    },
    {
      "id": "7.65",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.65",
      "name_en": "singular values",
      "name_zh": "奇异值",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). The singular values of 𝑇 are the nonnegative square roots of the eigenvalues of 𝑇∗𝑇, listed in decreasing order, each included as many times as the dimension of the corresponding eigenspace of 𝑇∗𝑇.",
          "zh": "设 𝑇 ∈ L(𝑉,𝑊).𝑇 的奇异值是 𝑇∗𝑇 的特征值的非负平方根，按降序排列，而且每个奇 异值的出现次数，等于 𝑇∗𝑇 对应特征空间的维数."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). The singular values of 𝑇 are the nonnegative square roots of the eigenvalues of 𝑇∗𝑇, listed in decreasing order, each included as many times as the dimension of the corresponding eigenspace of 𝑇∗𝑇.",
      "statement_zh": "设 𝑇 ∈ L(𝑉,𝑊).𝑇 的奇异值是 𝑇∗𝑇 的特征值的非负平方根，按降序排列，而且每个奇 异值的出现次数，等于 𝑇∗𝑇 对应特征空间的维数."
    },
    {
      "id": "7.68",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.68",
      "name_en": "role of positive singular values",
      "name_zh": "正奇异值的作用 设𝑇 ∈ L(𝑉,𝑊)，那么",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that T ∈ L(V, W). Then",
          "zh": "假设 T ∈ L(V, W)。那么"
        },
        {
          "t": "bullet",
          "en": "(a) T is injective  ⇔  0 is not a singular value of T;",
          "zh": "(a) T 是单射  ⇔  0 不是 T 的奇异值；"
        },
        {
          "t": "bullet",
          "en": "(b) the number of positive singular values of T equals dim range T;",
          "zh": "(b) T 的正奇异值的个数等于 dim range T；"
        },
        {
          "t": "bullet",
          "en": "(c) T is surjective  ⇔  the number of positive singular values of T equals dim W.",
          "zh": "(c) T 是满射  ⇔  T 的正奇异值的个数等于 dim W。"
        }
      ],
      "note": null,
      "statement_en": "Suppose that T ∈ L(V, W). Then (a) T is injective  ⇔  0 is not a singular value of T; (b) the number of positive singular values of T equals dim range T; (c) T is surjective  ⇔  the number of positive singular values of T equals dim W.",
      "statement_zh": "假设 T ∈ L(V, W)。那么 (a) T 是单射  ⇔  0 不是 T 的奇异值； (b) T 的正奇异值的个数等于 dim range T； (c) T 是满射  ⇔  T 的正奇异值的个数等于 dim W。"
    },
    {
      "id": "7.69",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.69",
      "name_en": "isometries characterized by having all singular values equal 1",
      "name_zh": "等距映射可由所有奇异值都等于 1 来刻画",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑆 ∈ L(𝑉, 𝑊). Then 𝑆 is an isometry ⟺ all singular values of 𝑆 equal 1.",
          "zh": "等距映射可由所有奇异值都等于 1 来刻画"
        }
      ],
      "note": null,
      "statement_en": "𝑆 ∈ L(𝑉, 𝑊). Then 𝑆 is an isometry ⟺ all singular values of 𝑆 equal 1.",
      "statement_zh": "等距映射可由所有奇异值都等于 1 来刻画"
    },
    {
      "id": "7.70",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.70",
      "name_en": "singular value decomposition",
      "name_zh": "奇异值分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊) and the positive singular values of 𝑇 are 𝑠1,..., 𝑠𝑚. Then there exist orthonormal lists 𝑒<sub>1</sub>,..., 𝑒<sub>𝑚</sub> in 𝑉 and 𝑓<sub>1</sub>,..., 𝑓<sub>𝑚</sub> in 𝑊 such that 7.71 𝑇𝑣=𝑠1⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+𝑠𝑚⟨𝑣,𝑒<sub>𝑚</sub>⟩𝑓<sub>𝑚</sub> for every 𝑣 ∈ 𝑉.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)且𝑇的正奇异值是𝑠<sub>1</sub>,…,𝑠<sub>𝑚</sub>.那么存在𝑉中的规范正交组𝑒<sub>1</sub>,…,𝑒<sub>𝑚</sub> 和 𝑊 中的规范正交组 𝑓<sub>1</sub>,…, 𝑓<sub>𝑚</sub> 使得 对任一𝑣 ∈ 𝑉 都成立. 𝑇𝑣 = 𝑠<sub>1</sub> ⟨𝑣, 𝑒<sub>1</sub>⟩ 𝑓<sub>1</sub> + ⋯ + 𝑠<sub>𝑚</sub> ⟨𝑣, 𝑒<sub>𝑚</sub>⟩ 𝑓<sub>𝑚</sub> (7.71) 7E 奇异值分解 227"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊) and the positive singular values of 𝑇 are 𝑠1,..., 𝑠𝑚. Then there exist orthonormal lists 𝑒1,..., 𝑒𝑚 in 𝑉 and 𝑓1,..., 𝑓𝑚 in 𝑊 such that 7.71 𝑇𝑣=𝑠1⟨𝑣,𝑒1⟩𝑓1 +⋯+𝑠𝑚⟨𝑣,𝑒𝑚⟩𝑓𝑚 for every 𝑣 ∈ 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)且𝑇的正奇异值是𝑠1,…,𝑠𝑚.那么存在𝑉中的规范正交组𝑒1,…,𝑒𝑚 和 𝑊 中的规范正交组 𝑓1,…, 𝑓𝑚 使得 对任一𝑣 ∈ 𝑉 都成立. 𝑇𝑣 = 𝑠1 ⟨𝑣, 𝑒1⟩ 𝑓1 + ⋯ + 𝑠𝑚 ⟨𝑣, 𝑒𝑚⟩ 𝑓𝑚 (7.71) 7E 奇异值分解 227"
    },
    {
      "id": "7.71",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.71",
      "name_en": "shows that",
      "name_zh": "shows that",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "⎧{𝑠<sub>𝑘</sub> 𝑓<sub>𝑘</sub> if 1 ≤ 𝑘 ≤ 𝑚, 𝑇𝑒<sub>𝑘</sub> = ⎨{⎩0 if 𝑚&lt;𝑘≤dim 𝑉. Thus the matrix of 𝑇 with respect to the orthonormal bases (𝑒<sub>1</sub>,…,𝑒 dim 𝑉) and (𝑓<sub>1</sub>,…, 𝑓 dim 𝑊) has the simple form ⎧{𝑠<sub>𝑘</sub> if 1 ≤ 𝑗 = 𝑘 ≤ 𝑚, M(𝑇,(𝑒<sub>1</sub>,…,𝑒 dim 𝑉),(𝑓<sub>1</sub>,…, 𝑓 dim 𝑊))𝑗,𝑘 = ⎨{⎩0 otherwise. If dim 𝑉 = dim 𝑊 (as happens, for example, if 𝑊 = 𝑉), then the matrix described in the paragraph above is a diagonal matrix. If we extend the definition of diagonal matrix as follows to apply to matrices that are not necessarily square, then we have proved the wonderful result that every linear map from 𝑉 to 𝑊 has a diagonal matrix with respect to appropriate orthonormal bases.",
          "zh": "shows that"
        }
      ],
      "note": null,
      "statement_en": "⎧{𝑠𝑘 𝑓𝑘 if 1 ≤ 𝑘 ≤ 𝑚, 𝑇𝑒𝑘 = ⎨{⎩0 if 𝑚&lt;𝑘≤dim 𝑉. Thus the matrix of 𝑇 with respect to the orthonormal bases (𝑒1,…,𝑒 dim 𝑉) and (𝑓1,…, 𝑓 dim 𝑊) has the simple form ⎧{𝑠𝑘 if 1 ≤ 𝑗 = 𝑘 ≤ 𝑚, M(𝑇,(𝑒1,…,𝑒 dim 𝑉),(𝑓1,…, 𝑓 dim 𝑊))𝑗,𝑘 = ⎨{⎩0 otherwise. If dim 𝑉 = dim 𝑊 (as happens, for example, if 𝑊 = 𝑉), then the matrix described in the paragraph above is a diagonal matrix. If we extend the definition of diagonal matrix as follows to apply to matrices that are not necessarily square, then we have proved the wonderful result that every linear map from 𝑉 to 𝑊 has a diagonal matrix with respect to appropriate orthonormal bases.",
      "statement_zh": "shows that"
    },
    {
      "id": "7.72",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.72",
      "name_en": "for each",
      "name_zh": "for each",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑘 = 1, …, 𝑛. For each 𝑘 = 1,…,𝑚, let 7.73 𝑇∗𝑇𝑒<sub>𝑘</sub> = 𝑠<sub>𝑘</sub>2𝑒<sub>𝑘</sub> 𝑓<sub>𝑘</sub> = 𝑇𝑒<sub>𝑘</sub>. 𝑠<sub>𝑘</sub> 1 1∗𝑠<sub>𝑘</sub> ⎧{0if 𝑗 = ̸𝑘, If 𝑗,𝑘 ∈ {1,…,𝑚}, then ⟨𝑓<sub>𝑗</sub>,𝑓<sub>𝑘</sub>⟩ = 𝑠<sub>𝑠</sub> ⟨𝑇𝑒<sub>𝑗</sub>,𝑇𝑒<sub>𝑘</sub>⟩ = 𝑠<sub>𝑠</sub> ⟨𝑒<sub>𝑗</sub>,𝑇 𝑇𝑒<sub>𝑘</sub>⟩ = 𝑠 ⟨𝑒<sub>𝑗</sub>,𝑒<sub>𝑘</sub>⟩ = ⎨{⎩1 if 𝑗 = 𝑘. 𝑗<sub>𝑘</sub>𝑗<sub>𝑘</sub>𝑗 Thus 𝑓<sub>1</sub>, …, 𝑓<sub>𝑚</sub> is an orthonormal list in 𝑊. If 𝑘 ∈ {1,…,𝑛}and 𝑘 &gt; 𝑚,then 𝑠<sub>𝑘</sub> = 0andhence 𝑇∗𝑇𝑒<sub>𝑘</sub> = 0(by7.72), which implies that 𝑇𝑒<sub>𝑘</sub> = 0 [by 7.64(b)]. Suppose 𝑣 ∈ 𝑉. Then 𝑇𝑣 = 𝑇(⟨𝑣, 𝑒<sub>1</sub>⟩𝑒<sub>1</sub> + ⋯ + ⟨𝑣, 𝑒<sub>𝑛</sub>⟩𝑒<sub>𝑛</sub>) = ⟨𝑣, 𝑒<sub>1</sub>⟩𝑇𝑒<sub>1</sub> + ⋯ + ⟨𝑣, 𝑒<sub>𝑚</sub>⟩𝑇𝑒<sub>𝑚</sub> = 𝑠<sub>1</sub>⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+𝑠<sub>𝑚</sub>⟨𝑣,𝑒<sub>𝑚</sub>⟩𝑓<sub>𝑚</sub>, where the last index in the first line switched from 𝑛 to 𝑚 in the second line because 𝑇𝑒<sub>𝑘</sub> = 0 if 𝑘 &gt; 𝑚 (as noted in the paragraph above) and the third line follows from 7.73. The equation above is our desired result. Suppose 𝑇 ∈ L(𝑉, 𝑊), the positive singular values of 𝑇 are 𝑠<sub>1</sub>, …, 𝑠<sub>𝑚</sub>, and 𝑒<sub>1</sub>, …, 𝑒<sub>𝑚</sub> and 𝑓<sub>1</sub>, …, 𝑓<sub>𝑚</sub> are as in the singular value decomposition 7.70. The orthonormal list 𝑒<sub>1</sub>, …, 𝑒<sub>𝑚</sub> can be extended to an orthonormal basis 𝑒<sub>1</sub>, …, 𝑒 dim 𝑉 of 𝑉 and the orthonormal list 𝑓<sub>1</sub>, …, 𝑓<sub>𝑚</sub> can be extended to an orthonormal basis 𝑓<sub>1</sub>, …, 𝑓 dim 𝑊 of 𝑊. The formula",
          "zh": "for each"
        }
      ],
      "note": null,
      "statement_en": "𝑘 = 1, …, 𝑛. For each 𝑘 = 1,…,𝑚, let 7.73 𝑇∗𝑇𝑒𝑘 = 𝑠𝑘2𝑒𝑘 𝑓𝑘 = 𝑇𝑒𝑘. 𝑠𝑘 1 1∗𝑠𝑘 ⎧{0if 𝑗 = ̸𝑘, If 𝑗,𝑘 ∈ {1,…,𝑚}, then ⟨𝑓𝑗,𝑓𝑘⟩ = 𝑠𝑠 ⟨𝑇𝑒𝑗,𝑇𝑒𝑘⟩ = 𝑠𝑠 ⟨𝑒𝑗,𝑇 𝑇𝑒𝑘⟩ = 𝑠 ⟨𝑒𝑗,𝑒𝑘⟩ = ⎨{⎩1 if 𝑗 = 𝑘. 𝑗𝑘𝑗𝑘𝑗 Thus 𝑓1, …, 𝑓𝑚 is an orthonormal list in 𝑊. If 𝑘 ∈ {1,…,𝑛}and 𝑘 &gt; 𝑚,then 𝑠𝑘 = 0andhence 𝑇∗𝑇𝑒𝑘 = 0(by7.72), which implies that 𝑇𝑒𝑘 = 0 [by 7.64(b)]. Suppose 𝑣 ∈ 𝑉. Then 𝑇𝑣 = 𝑇(⟨𝑣, 𝑒1⟩𝑒1 + ⋯ + ⟨𝑣, 𝑒𝑛⟩𝑒𝑛) = ⟨𝑣, 𝑒1⟩𝑇𝑒1 + ⋯ + ⟨𝑣, 𝑒𝑚⟩𝑇𝑒𝑚 = 𝑠1⟨𝑣,𝑒1⟩𝑓1 +⋯+𝑠𝑚⟨𝑣,𝑒𝑚⟩𝑓𝑚, where the last index in the first line switched from 𝑛 to 𝑚 in the second line because 𝑇𝑒𝑘 = 0 if 𝑘 &gt; 𝑚 (as noted in the paragraph above) and the third line follows from 7.73. The equation above is our desired result. Suppose 𝑇 ∈ L(𝑉, 𝑊), the positive singular values of 𝑇 are 𝑠1, …, 𝑠𝑚, and 𝑒1, …, 𝑒𝑚 and 𝑓1, …, 𝑓𝑚 are as in the singular value decomposition 7.70. The orthonormal list 𝑒1, …, 𝑒𝑚 can be extended to an orthonormal basis 𝑒1, …, 𝑒 dim 𝑉 of 𝑉 and the orthonormal list 𝑓1, …, 𝑓𝑚 can be extended to an orthonormal basis 𝑓1, …, 𝑓 dim 𝑊 of 𝑊. The formula",
      "statement_zh": "for each"
    },
    {
      "id": "7.74",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.74",
      "name_en": "diagonal matrix",
      "name_zh": "对角矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An 𝑀-by-𝑁 matrix 𝐴 is called a diagonal matrix if all entries of the matrix are 0 except possibly 𝐴𝑘,𝑘 for 𝑘 = 1, …, min{𝑀, 𝑁}. The table below compares the spectral theorem (7.29 and 7.31) with the singular value decomposition (7.70). spectral theorem singular value decomposition describes only self-adjoint operators (when 𝐅 = 𝐑) or normal operators (when 𝐅 = 𝐂) describes arbitrary linear maps from an inner product space to a possibly different inner product space produces a single orthonormal basis produces two orthonormal lists, one for domain space and one for range space, that are not necessarily the same even when range space equals domain space different proofs depending on whether 𝐅 = 𝐑 or 𝐅 = 𝐂 same",
          "zh": "𝑀 × 𝑁 矩阵 𝐴 被称为对角矩阵，如果除了 𝐴𝑘,𝑘(𝑘 = 1,…,min{𝑀,𝑁})可能不为 0 以 外，所有元素都为 0. 228 7.70). 谱定理 只描述自伴算子(F = R 的情形下)或正规算子 (F = C 的情形下) 得到一个规范正交基 取决于是 F = R 还是 F = C 而有不同的"
        }
      ],
      "note": null,
      "statement_en": "An 𝑀-by-𝑁 matrix 𝐴 is called a diagonal matrix if all entries of the matrix are 0 except possibly 𝐴𝑘,𝑘 for 𝑘 = 1, …, min{𝑀, 𝑁}. The table below compares the spectral theorem (7.29 and 7.31) with the singular value decomposition (7.70). spectral theorem singular value decomposition describes only self-adjoint operators (when 𝐅 = 𝐑) or normal operators (when 𝐅 = 𝐂) describes arbitrary linear maps from an inner product space to a possibly different inner product space produces a single orthonormal basis produces two orthonormal lists, one for domain space and one for range space, that are not necessarily the same even when range space equals domain space different proofs depending on whether 𝐅 = 𝐑 or 𝐅 = 𝐂 same",
      "statement_zh": "𝑀 × 𝑁 矩阵 𝐴 被称为对角矩阵，如果除了 𝐴𝑘,𝑘(𝑘 = 1,…,min{𝑀,𝑁})可能不为 0 以 外，所有元素都为 0. 228 7.70). 谱定理 只描述自伴算子(F = R 的情形下)或正规算子 (F = C 的情形下) 得到一个规范正交基 取决于是 F = R 还是 F = C 而有不同的"
    },
    {
      "id": "7.75",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.75",
      "name_en": "singular value decomposition of adjoint and pseudoinverse",
      "name_zh": "伴随和伪逆的奇异值分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊) and the positive singular values of 𝑇 are 𝑠1,..., 𝑠𝑚. Suppose 𝑒<sub>1</sub>,..., 𝑒<sub>𝑚</sub> and 𝑓<sub>1</sub>,..., 𝑓<sub>𝑚</sub> are orthonormal lists in 𝑉 and 𝑊 such that 7.76 𝑇𝑣=𝑠1⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+𝑠𝑚⟨𝑣,𝑒<sub>𝑚</sub>⟩𝑓<sub>𝑚</sub> for every 𝑣 ∈ 𝑉. Then 7.77 𝑇∗𝑤 = 𝑠1⟨𝑤, 𝑓<sub>1</sub>⟩𝑒<sub>1</sub> + ⋯ + 𝑠𝑚⟨𝑤, 𝑓<sub>𝑚</sub>⟩𝑒<sub>𝑚</sub> and 7.78 𝑇†𝑤 = ⟨𝑤, 𝑓<sub>1</sub>⟩𝑒<sub>1</sub> + ⋯ + ⟨𝑤, 𝑓<sub>𝑚</sub>⟩𝑒<sub>𝑚</sub> 𝑠1 𝑠𝑚 for every 𝑤 ∈ 𝑊.",
          "zh": "设 𝑇 ∈ L(𝑉, 𝑊) 且 𝑇 的正奇异值是 𝑠<sub>1</sub>, …, 𝑠<sub>𝑚</sub>.设 𝑒<sub>1</sub>, …, 𝑒<sub>𝑚</sub> 和 𝑓<sub>1</sub>, …, 𝑓<sub>𝑚</sub> 是 𝑉 和 𝑊 中的 规范正交组，使得对任一 𝑣 ∈ 𝑉 都有 𝑇𝑣 = 𝑠<sub>1</sub> ⟨𝑣, 𝑒<sub>1</sub>⟩ 𝑓<sub>1</sub> + ⋯ + 𝑠<sub>𝑚</sub> ⟨𝑣, 𝑒<sub>𝑚</sub>⟩ 𝑓<sub>𝑚</sub>. 那么，对任一 𝑤 ∈ 𝑊 都有 (7.76) (7.77) (7.78) 和 𝑇∗𝑤 = 𝑠<sub>1</sub> ⟨𝑤, 𝑓<sub>1</sub>⟩ 𝑒<sub>1</sub> + ⋯ + 𝑠<sub>𝑚</sub> ⟨𝑤, 𝑓<sub>𝑚</sub>⟩ 𝑒<sub>𝑚</sub> 𝑇†𝑤 = ⟨𝑤, 𝑓<sub>1</sub>⟩𝑒<sub>1</sub> +···+ ⟨𝑤, 𝑓<sub>𝑚</sub>⟩𝑒<sub>𝑚</sub>."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊) and the positive singular values of 𝑇 are 𝑠1,..., 𝑠𝑚. Suppose 𝑒1,..., 𝑒𝑚 and 𝑓1,..., 𝑓𝑚 are orthonormal lists in 𝑉 and 𝑊 such that 7.76 𝑇𝑣=𝑠1⟨𝑣,𝑒1⟩𝑓1 +⋯+𝑠𝑚⟨𝑣,𝑒𝑚⟩𝑓𝑚 for every 𝑣 ∈ 𝑉. Then 7.77 𝑇∗𝑤 = 𝑠1⟨𝑤, 𝑓1⟩𝑒1 + ⋯ + 𝑠𝑚⟨𝑤, 𝑓𝑚⟩𝑒𝑚 and 7.78 𝑇†𝑤 = ⟨𝑤, 𝑓1⟩𝑒1 + ⋯ + ⟨𝑤, 𝑓𝑚⟩𝑒𝑚 𝑠1 𝑠𝑚 for every 𝑤 ∈ 𝑊.",
      "statement_zh": "设 𝑇 ∈ L(𝑉, 𝑊) 且 𝑇 的正奇异值是 𝑠1, …, 𝑠𝑚.设 𝑒1, …, 𝑒𝑚 和 𝑓1, …, 𝑓𝑚 是 𝑉 和 𝑊 中的 规范正交组，使得对任一 𝑣 ∈ 𝑉 都有 𝑇𝑣 = 𝑠1 ⟨𝑣, 𝑒1⟩ 𝑓1 + ⋯ + 𝑠𝑚 ⟨𝑣, 𝑒𝑚⟩ 𝑓𝑚. 那么，对任一 𝑤 ∈ 𝑊 都有 (7.76) (7.77) (7.78) 和 𝑇∗𝑤 = 𝑠1 ⟨𝑤, 𝑓1⟩ 𝑒1 + ⋯ + 𝑠𝑚 ⟨𝑤, 𝑓𝑚⟩ 𝑒𝑚 𝑇†𝑤 = ⟨𝑤, 𝑓1⟩𝑒1 +···+ ⟨𝑤, 𝑓𝑚⟩𝑒𝑚."
    },
    {
      "id": "7.77",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.77",
      "name_en": "shows that",
      "name_zh": "shows that",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇∗𝑇𝑣 = 𝑠<sub>12</sub>⟨𝑣, 𝑒<sub>1</sub>⟩𝑒<sub>1</sub> + ⋯ + 𝑠<sub>𝑚</sub>2⟨𝑣, 𝑒<sub>𝑚</sub>⟩𝑒<sub>𝑚</sub> for every 𝑣 ∈ 𝑉. Thus if 𝑣 ∈ 𝑉, then √𝑇∗𝑇𝑣 = 𝑠<sub>1</sub>⟨𝑣, 𝑒<sub>1</sub>⟩𝑒<sub>1</sub> + ⋯ + 𝑠<sub>𝑚</sub>⟨𝑣, 𝑒<sub>𝑚</sub>⟩𝑒<sub>𝑚</sub> because the operator that sends 𝑣 to the right side of the equation above is a positive operator whose square equals 𝑇∗𝑇. Now 𝑆√𝑇∗𝑇𝑣 = 𝑆(𝑠<sub>1</sub>⟨𝑣, 𝑒<sub>1</sub>⟩𝑒<sub>1</sub> + ⋯ + 𝑠<sub>𝑚</sub>⟨𝑣, 𝑒<sub>𝑚</sub>⟩𝑒<sub>𝑚</sub>) = 𝑠<sub>1</sub>⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+𝑠<sub>𝑚</sub>⟨𝑣,𝑒<sub>𝑚</sub>⟩𝑓<sub>𝑚</sub> = 𝑇𝑣, where the last equation follows from 7.94.",
          "zh": "shows that"
        }
      ],
      "note": null,
      "statement_en": "𝑇∗𝑇𝑣 = 𝑠12⟨𝑣, 𝑒1⟩𝑒1 + ⋯ + 𝑠𝑚2⟨𝑣, 𝑒𝑚⟩𝑒𝑚 for every 𝑣 ∈ 𝑉. Thus if 𝑣 ∈ 𝑉, then √𝑇∗𝑇𝑣 = 𝑠1⟨𝑣, 𝑒1⟩𝑒1 + ⋯ + 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑒𝑚 because the operator that sends 𝑣 to the right side of the equation above is a positive operator whose square equals 𝑇∗𝑇. Now 𝑆√𝑇∗𝑇𝑣 = 𝑆(𝑠1⟨𝑣, 𝑒1⟩𝑒1 + ⋯ + 𝑠𝑚⟨𝑣, 𝑒𝑚⟩𝑒𝑚) = 𝑠1⟨𝑣,𝑒1⟩𝑓1 +⋯+𝑠𝑚⟨𝑣,𝑒𝑚⟩𝑓𝑚 = 𝑇𝑣, where the last equation follows from 7.94.",
      "statement_zh": "shows that"
    },
    {
      "id": "7.78",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.78",
      "name_en": "below equals the inverse",
      "name_zh": "below equals the inverse",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇<sup>−1</sup> if 𝑇 is invertible [see 6.69(a)].",
          "zh": "below equals the inverse"
        }
      ],
      "note": null,
      "statement_en": "𝑇−1 if 𝑇 is invertible [see 6.69(a)].",
      "statement_zh": "below equals the inverse"
    },
    {
      "id": "7.80",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.80",
      "name_en": "matrix version of SVD",
      "name_zh": "奇异值分解(SVD)的矩阵版本",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is a 𝑝-by-𝑛 matrix of rank 𝑚 ≥ 1. Then there exist a 𝑝-by-𝑚 matrix 𝐵 with orthonormal columns, an 𝑚-by-𝑚 diagonal matrix 𝐷 with positive numbers on the diagonal, and an 𝑛-by-𝑚 matrix 𝐶 with orthonormal columns such that 𝐴 = 𝐵𝐷𝐶∗.",
          "zh": "设 𝐴 是 𝑝 × 𝑛 矩阵(秩 𝑚 ≥ 1).那么，存在列规范正交的 𝑝 × 𝑚 矩阵 𝐵，对角线上为正 数的 𝑚 × 𝑚 对角矩阵 𝐷 以及列规范正交的 𝑛 × 𝑚 矩阵 𝐶 使得 𝐴 = 𝐵𝐷𝐶∗."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is a 𝑝-by-𝑛 matrix of rank 𝑚 ≥ 1. Then there exist a 𝑝-by-𝑚 matrix 𝐵 with orthonormal columns, an 𝑚-by-𝑚 diagonal matrix 𝐷 with positive numbers on the diagonal, and an 𝑛-by-𝑚 matrix 𝐶 with orthonormal columns such that 𝐴 = 𝐵𝐷𝐶∗.",
      "statement_zh": "设 𝐴 是 𝑝 × 𝑛 矩阵(秩 𝑚 ≥ 1).那么，存在列规范正交的 𝑝 × 𝑚 矩阵 𝐵，对角线上为正 数的 𝑚 × 𝑚 对角矩阵 𝐷 以及列规范正交的 𝑛 × 𝑚 矩阵 𝐶 使得 𝐴 = 𝐵𝐷𝐶∗."
    },
    {
      "id": "7.82",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.82",
      "name_en": "upper bound for",
      "name_zh": "∥𝑇𝑣∥ 的上界",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "‖𝑇𝑣‖ Suppose 𝑇 ∈ L(𝑉, 𝑊). Let 𝑠<sub>1</sub> be the largest singular value of 𝑇. Then ‖𝑇𝑣‖ ≤ 𝑠<sub>1</sub>‖𝑣‖ for all 𝑣 ∈ 𝑉.",
          "zh": "设 𝑇 ∈ L(𝑉,𝑊).令 𝑠<sub>1</sub> 是 𝑇 的最大奇异值.那么 ∥𝑇𝑣∥ ≤ 𝑠<sub>1</sub> ∥𝑣∥ 对所有𝑣 ∈ 𝑉 成立."
        }
      ],
      "note": null,
      "statement_en": "‖𝑇𝑣‖ Suppose 𝑇 ∈ L(𝑉, 𝑊). Let 𝑠1 be the largest singular value of 𝑇. Then ‖𝑇𝑣‖ ≤ 𝑠1‖𝑣‖ for all 𝑣 ∈ 𝑉.",
      "statement_zh": "设 𝑇 ∈ L(𝑉,𝑊).令 𝑠1 是 𝑇 的最大奇异值.那么 ∥𝑇𝑣∥ ≤ 𝑠1 ∥𝑣∥ 对所有𝑣 ∈ 𝑉 成立."
    },
    {
      "id": "7.83",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.83",
      "name_en": "shows that",
      "name_zh": "shows that",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇𝑒<sub>1</sub> = 𝑠<sub>1</sub> 𝑓<sub>1</sub>. Because ‖ 𝑓<sub>1</sub>‖ = 1, this implies that ‖𝑇𝑒<sub>1</sub>‖ = 𝑠<sub>1</sub>. Thus because ‖𝑒<sub>1</sub>‖ = 1, the inequality in",
          "zh": "shows that"
        }
      ],
      "note": null,
      "statement_en": "𝑇𝑒1 = 𝑠1 𝑓1. Because ‖ 𝑓1‖ = 1, this implies that ‖𝑇𝑒1‖ = 𝑠1. Thus because ‖𝑒1‖ = 1, the inequality in",
      "statement_zh": "shows that"
    },
    {
      "id": "7.84",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.84",
      "name_en": "leads to the equation 7",
      "name_zh": "中的不等式可以引出等式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": ".85 max{‖𝑇𝑣‖ ∶ 𝑣 ∈ 𝑉 and ‖𝑣‖ ≤ 1} = 𝑠<sub>1</sub>. The equation above is the motivation for the following definition, which defines the norm of 𝑇 to be the left side of the equation above without needing to refer to singular values or the singular value decomposition.",
          "zh": "max\b∥𝑇𝑣∥:𝑣 ∈ 𝑉且 ∥𝑣∥≤1 = 𝑠<sub>1</sub>. (7.85) 上式促使我们直接将 𝑇 的范数定义为上式的左侧，而不需要提到(右侧的)奇异值或者 奇异值分解，如下所示."
        }
      ],
      "note": null,
      "statement_en": ".85 max{‖𝑇𝑣‖ ∶ 𝑣 ∈ 𝑉 and ‖𝑣‖ ≤ 1} = 𝑠1. The equation above is the motivation for the following definition, which defines the norm of 𝑇 to be the left side of the equation above without needing to refer to singular values or the singular value decomposition.",
      "statement_zh": "max\b∥𝑇𝑣∥:𝑣 ∈ 𝑉且 ∥𝑣∥≤1 = 𝑠1. (7.85) 上式促使我们直接将 𝑇 的范数定义为上式的左侧，而不需要提到(右侧的)奇异值或者 奇异值分解，如下所示."
    },
    {
      "id": "7.86",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.86",
      "name_en": "norm of a linear map, ‖ ⋅ ‖",
      "name_zh": "线性映射的范数(norm of a linear map)、∥·∥ 设𝑇 ∈ L(𝑉,𝑊).那么，𝑇 的范数，记为 ∥𝑇∥，定义为",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Then the norm of 𝑇, denoted by ‖𝑇‖, is defined by ‖𝑇‖ = max{‖𝑇𝑣‖ ∶ 𝑣 ∈ 𝑉 and ‖𝑣‖ ≤ 1}. For a lower bound on ‖𝑇𝑣‖, look at tion 281 In general, the maximum of an infinite set of nonnegative numbers need not exist. However, the discussion before",
          "zh": "∥𝑇∥ = max\b∥𝑇𝑣∥:𝑣 ∈ 𝑉且∥𝑣∥≤1. 一般地，由非负数构成的无限集不一定存在最大值.然而，7.86 前的讨论表明，从 𝑉 到 𝑊 的线性映射 𝑇 的范数定义中的最大值确实存在(且等于 𝑇 的最大奇异值). 关于“范数”一词和 ∥·∥ 这一记号，我们现在有两种不同用法:第一种用法跟 𝑉 上的内 积相关，我们定义的是 ∥𝑣∥ = p⟨𝑣, 𝑣⟩ 对任一 𝑣 ∈ 𝑉 都成立;第二种用法，则是用我们刚刚为 𝑇 ∈ L(𝑉,𝑊) 所作的 ∥𝑇∥ 的定义.𝑇 ∈ L(𝑉,𝑊) 的范数 ∥𝑇∥ 通常不是通过对 𝑇 和其本身取内积 得到的(见"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Then the norm of 𝑇, denoted by ‖𝑇‖, is defined by ‖𝑇‖ = max{‖𝑇𝑣‖ ∶ 𝑣 ∈ 𝑉 and ‖𝑣‖ ≤ 1}. For a lower bound on ‖𝑇𝑣‖, look at tion 281 In general, the maximum of an infinite set of nonnegative numbers need not exist. However, the discussion before",
      "statement_zh": "∥𝑇∥ = max\b∥𝑇𝑣∥:𝑣 ∈ 𝑉且∥𝑣∥≤1. 一般地，由非负数构成的无限集不一定存在最大值.然而，7.86 前的讨论表明，从 𝑉 到 𝑊 的线性映射 𝑇 的范数定义中的最大值确实存在(且等于 𝑇 的最大奇异值). 关于“范数”一词和 ∥·∥ 这一记号，我们现在有两种不同用法:第一种用法跟 𝑉 上的内 积相关，我们定义的是 ∥𝑣∥ = p⟨𝑣, 𝑣⟩ 对任一 𝑣 ∈ 𝑉 都成立;第二种用法，则是用我们刚刚为 𝑇 ∈ L(𝑉,𝑊) 所作的 ∥𝑇∥ 的定义.𝑇 ∈ L(𝑉,𝑊) 的范数 ∥𝑇∥ 通常不是通过对 𝑇 和其本身取内积 得到的(见"
    },
    {
      "id": "7.87",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.87",
      "name_en": "basic properties of norms of linear maps Suppose",
      "name_zh": "线性映射范数的基本性质 设𝑇 ∈ L(𝑉,𝑊)，那么",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) ‖𝑇‖≥0;",
          "zh": "(a) ∥𝑇∥≥0;"
        },
        {
          "t": "bullet",
          "en": "(b) ‖𝑇‖ = 0 ⟺ 𝑇 = 0;",
          "zh": "(b) ∥𝑇∥ = 0 ⇐⇒ 𝑇 = 0;"
        },
        {
          "t": "bullet",
          "en": "(c) ‖𝜆𝑇‖ = |𝜆|‖𝑇‖for all 𝜆 ∈ 𝐅;",
          "zh": "(c) ∥𝜆𝑇∥ = |𝜆|∥𝑇∥对所有𝜆 ∈ F 成立;"
        }
      ],
      "note": null,
      "statement_en": "(a) ‖𝑇‖≥0; (b) ‖𝑇‖ = 0 ⟺ 𝑇 = 0; (c) ‖𝜆𝑇‖ = |𝜆|‖𝑇‖for all 𝜆 ∈ 𝐅;",
      "statement_zh": "(a) ∥𝑇∥≥0; (b) ∥𝑇∥ = 0 ⇐⇒ 𝑇 = 0; (c) ∥𝜆𝑇∥ = |𝜆|∥𝑇∥对所有𝜆 ∈ F 成立;"
    },
    {
      "id": "7.88",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.88",
      "name_en": "alternative formulas for ‖T‖",
      "name_zh": "‖T‖ 的等价公式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose T ∈ L(V, W). Then",
          "zh": "假设 T ∈ L(V, W)。那么"
        },
        {
          "t": "bullet",
          "en": "(a) ‖T‖ = the largest singular value of T;",
          "zh": "(a) ‖T‖ 等于 T 的最大奇异值；"
        },
        {
          "t": "bullet",
          "en": "(b) ‖T‖ = max{ ‖Tv‖ : v ∈ V and ‖v‖ = 1 };",
          "zh": "(b) ‖T‖ = max{ ‖Tv‖ : v ∈ V 且 ‖v‖ = 1 }；"
        },
        {
          "t": "bullet",
          "en": "(c) ‖T‖ = the smallest number c such that ‖Tv‖ ≤ c ‖v‖ for all v ∈ V.",
          "zh": "(c) ‖T‖ 是使得对所有 v ∈ V 都有 ‖Tv‖ ≤ c ‖v‖ 的最小的数 c。"
        }
      ],
      "note": null,
      "statement_en": "Suppose T ∈ L(V, W). Then (a) ‖T‖ = the largest singular value of T; (b) ‖T‖ = max{ ‖Tv‖ : v ∈ V and ‖v‖ = 1 }; (c) ‖T‖ = the smallest number c such that ‖Tv‖ ≤ c ‖v‖ for all v ∈ V.",
      "statement_zh": "假设 T ∈ L(V, W)。那么 (a) ‖T‖ 等于 T 的最大奇异值； (b) ‖T‖ = max{ ‖Tv‖ : v ∈ V 且 ‖v‖ = 1 }； (c) ‖T‖ 是使得对所有 v ∈ V 都有 ‖Tv‖ ≤ c ‖v‖ 的最小的数 c。"
    },
    {
      "id": "7.91",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.91",
      "name_en": "norm of the adjoint",
      "name_zh": "伴随的范数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Then ∥𝑇∗∥ = ‖𝑇‖.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 ∥𝑇∗∥ = ∥𝑇∥."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉, 𝑊). Then ∥𝑇∗∥ = ‖𝑇‖.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 ∥𝑇∗∥ = ∥𝑇∥."
    },
    {
      "id": "7.92",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.92",
      "name_en": "best approximation by linear map whose range has dimension",
      "name_zh": "用值域维数至多为 𝑘 的线性映射得到的最佳逼近 设𝑇 ∈ L(𝑉,𝑊)且𝑠<sub>1</sub> ≥···≥𝑠<sub>𝑚</sub>是𝑇的正奇异值.设≤𝑘&lt;𝑚，那么有",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "≤ 𝑘 Suppose 𝑇 ∈ L(𝑉, 𝑊) and 𝑠<sub>1</sub> ≥ ⋯ ≥ 𝑠<sub>𝑚</sub> are the positive singular values of 𝑇. Suppose 1 ≤ 𝑘 &lt; 𝑚. Then min{‖𝑇 − 𝑆‖ ∶ 𝑆 ∈ L(𝑉,𝑊) and dimrange 𝑆 ≤ 𝑘} = 𝑠<sub>𝑘</sub>+1. Furthermore, if 𝑇𝑣 = 𝑠<sub>1</sub>⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+𝑠<sub>𝑚</sub>⟨𝑣,𝑒<sub>𝑚</sub>⟩𝑓<sub>𝑚</sub> is a singular value decomposition of 𝑇 and 𝑇𝑘 ∈ L(𝑉, 𝑊) is defined by 𝑇𝑘𝑣 = 𝑠<sub>1</sub>⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+𝑠<sub>𝑘</sub>⟨𝑣,𝑒<sub>𝑘</sub>⟩𝑓<sub>𝑘</sub> foreach 𝑣 ∈ 𝑉,thendimrange 𝑇𝑘 = 𝑘 and‖𝑇−𝑇𝑘‖ = 𝑠<sub>𝑘</sub>+1.",
          "zh": "进一步，如果 min\b∥𝑇−𝑆∥:𝑆 ∈ L(𝑉,𝑊)且 dimrange 𝑆≤𝑘 = 𝑠<sub>𝑘</sub>+1. 𝑇𝑣 = 𝑠<sub>1</sub> ⟨𝑣, 𝑒<sub>1</sub>⟩ 𝑓<sub>1</sub> + ⋯ + 𝑠<sub>𝑚</sub> ⟨𝑣, 𝑒<sub>𝑚</sub>⟩ 𝑓<sub>𝑚</sub> 是 𝑇 的奇异值分解，而 𝑇𝑘 ∈ L(𝑉,𝑊) 定义为 𝑇𝑘𝑣 = 𝑠<sub>1</sub> ⟨𝑣,𝑒<sub>1</sub>⟩ 𝑓<sub>1</sub> +···+𝑠<sub>𝑘</sub> ⟨𝑣,𝑒<sub>𝑘</sub>⟩ 𝑓<sub>𝑘</sub> 对任一𝑣 ∈ 𝑉都成立，那么 dimrange 𝑇𝑘 = 𝑘且∥𝑇−𝑇𝑘∥ = 𝑠<sub>𝑘</sub>+1."
        }
      ],
      "note": null,
      "statement_en": "≤ 𝑘 Suppose 𝑇 ∈ L(𝑉, 𝑊) and 𝑠1 ≥ ⋯ ≥ 𝑠𝑚 are the positive singular values of 𝑇. Suppose 1 ≤ 𝑘 &lt; 𝑚. Then min{‖𝑇 − 𝑆‖ ∶ 𝑆 ∈ L(𝑉,𝑊) and dimrange 𝑆 ≤ 𝑘} = 𝑠𝑘+1. Furthermore, if 𝑇𝑣 = 𝑠1⟨𝑣,𝑒1⟩𝑓1 +⋯+𝑠𝑚⟨𝑣,𝑒𝑚⟩𝑓𝑚 is a singular value decomposition of 𝑇 and 𝑇𝑘 ∈ L(𝑉, 𝑊) is defined by 𝑇𝑘𝑣 = 𝑠1⟨𝑣,𝑒1⟩𝑓1 +⋯+𝑠𝑘⟨𝑣,𝑒𝑘⟩𝑓𝑘 foreach 𝑣 ∈ 𝑉,thendimrange 𝑇𝑘 = 𝑘 and‖𝑇−𝑇𝑘‖ = 𝑠𝑘+1.",
      "statement_zh": "进一步，如果 min\b∥𝑇−𝑆∥:𝑆 ∈ L(𝑉,𝑊)且 dimrange 𝑆≤𝑘 = 𝑠𝑘+1. 𝑇𝑣 = 𝑠1 ⟨𝑣, 𝑒1⟩ 𝑓1 + ⋯ + 𝑠𝑚 ⟨𝑣, 𝑒𝑚⟩ 𝑓𝑚 是 𝑇 的奇异值分解，而 𝑇𝑘 ∈ L(𝑉,𝑊) 定义为 𝑇𝑘𝑣 = 𝑠1 ⟨𝑣,𝑒1⟩ 𝑓1 +···+𝑠𝑘 ⟨𝑣,𝑒𝑘⟩ 𝑓𝑘 对任一𝑣 ∈ 𝑉都成立，那么 dimrange 𝑇𝑘 = 𝑘且∥𝑇−𝑇𝑘∥ = 𝑠𝑘+1."
    },
    {
      "id": "7.93",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.93",
      "name_en": "polar decomposition",
      "name_zh": "极分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). Then there exists a unitary operator 𝑆 ∈ L(𝑉) such that 𝑇 = 𝑆√𝑇∗𝑇.",
          "zh": "设 𝑇 ∈ L(𝑉)，那么存在幺正算子 𝑆 ∈ L(𝑉) 使得 𝑇 = 𝑆√𝑇∗𝑇."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). Then there exists a unitary operator 𝑆 ∈ L(𝑉) such that 𝑇 = 𝑆√𝑇∗𝑇.",
      "statement_zh": "设 𝑇 ∈ L(𝑉)，那么存在幺正算子 𝑆 ∈ L(𝑉) 使得 𝑇 = 𝑆√𝑇∗𝑇."
    },
    {
      "id": "7.94",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.94",
      "name_en": "and then using the formula for",
      "name_zh": "and then using the formula for",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "for every 𝑣 ∈ 𝑉. Extend 𝑒<sub>1</sub>,...,𝑒<sub>𝑚</sub> and 𝑓<sub>1</sub>,..., 𝑓<sub>𝑚</sub> to orthonormal bases 𝑒<sub>1</sub>,...,𝑒<sub>𝑛</sub> and 𝑓<sub>1</sub>,..., 𝑓<sub>𝑛</sub> of 𝑉. Define 𝑆 ∈ L(𝑉) by for each 𝑣 ∈ 𝑉. Then 𝑆𝑣=⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+⟨𝑣,𝑒<sub>𝑛</sub>⟩𝑓<sub>𝑛</sub> ‖𝑆𝑣‖<sup>2</sup> =∥⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+⟨𝑣,𝑒<sub>𝑛</sub>⟩𝑓<sub>𝑛</sub>∥<sup>2</sup> = ∣⟨𝑣, 𝑒<sub>1</sub>⟩∣2 + ⋯ + ∣⟨𝑣, 𝑒<sub>𝑛</sub>⟩∣2 = ‖𝑣‖<sup>2</sup>. Thus 𝑆 is a unitary operator. Applying 𝑇∗ to both sides of",
          "zh": "and then using the formula for"
        }
      ],
      "note": null,
      "statement_en": "for every 𝑣 ∈ 𝑉. Extend 𝑒1,...,𝑒𝑚 and 𝑓1,..., 𝑓𝑚 to orthonormal bases 𝑒1,...,𝑒𝑛 and 𝑓1,..., 𝑓𝑛 of 𝑉. Define 𝑆 ∈ L(𝑉) by for each 𝑣 ∈ 𝑉. Then 𝑆𝑣=⟨𝑣,𝑒1⟩𝑓1 +⋯+⟨𝑣,𝑒𝑛⟩𝑓𝑛 ‖𝑆𝑣‖2 =∥⟨𝑣,𝑒1⟩𝑓1 +⋯+⟨𝑣,𝑒𝑛⟩𝑓𝑛∥2 = ∣⟨𝑣, 𝑒1⟩∣2 + ⋯ + ∣⟨𝑣, 𝑒𝑛⟩∣2 = ‖𝑣‖2. Thus 𝑆 is a unitary operator. Applying 𝑇∗ to both sides of",
      "statement_zh": "and then using the formula for"
    },
    {
      "id": "7.95",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.95",
      "name_en": "ball, 𝐵",
      "name_zh": "球(ball)、𝐵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The ball in 𝑉 of radius 1 centered at 0, denoted by 𝐵, is defined by 𝐵 = {𝑣 ∈ 𝑉 ∶ ‖𝑣‖ &lt; 1}. If dim 𝑉 = 2, the word disk is sometimes used instead of ball. However, using ball in all dimensions is less confusing. Similarly, if dim 𝑉 = 2, then the word ellipse is sometimes used instead of the word ellipsoid that we are about to define. Again, using ellipsoid in all dimensions is less confusing. You can think of the ellipsoid defined below as obtained by starting with the ball 𝐵 and then stretching by a factor of 𝑠<sub>𝑘</sub> along each 𝑓<sub>𝑘</sub>-axis.",
          "zh": "𝑉 中半径为 1、以 0 为心的球(ball)，记为 𝐵，定义为 𝐵 = {𝑣 ∈ 𝑉 : ∥𝑣∥ &lt; 1}. 如果 dim 𝑉 = 2，那么我们有时候用的词是“圆盘”(disk)而不是“球”. 然而，在所有维度中都用“球”这个词可以避免混乱.类似地，如果 dim 𝑉 = 2， 那么我们有时候用的词是“椭圆”(ellipse)而不是我们将要定义的“椭球”. 同样，在所有维度中都用“椭球”这个词可以避免混乱. 以下定义的椭球可以视为将球 𝐵 沿每个 𝑓<sub>𝑘</sub> 轴伸缩至 𝑠<sub>𝑘</sub> 倍得到的."
        }
      ],
      "note": null,
      "statement_en": "The ball in 𝑉 of radius 1 centered at 0, denoted by 𝐵, is defined by 𝐵 = {𝑣 ∈ 𝑉 ∶ ‖𝑣‖ &lt; 1}. If dim 𝑉 = 2, the word disk is sometimes used instead of ball. However, using ball in all dimensions is less confusing. Similarly, if dim 𝑉 = 2, then the word ellipse is sometimes used instead of the word ellipsoid that we are about to define. Again, using ellipsoid in all dimensions is less confusing. You can think of the ellipsoid defined below as obtained by starting with the ball 𝐵 and then stretching by a factor of 𝑠𝑘 along each 𝑓𝑘-axis.",
      "statement_zh": "𝑉 中半径为 1、以 0 为心的球(ball)，记为 𝐵，定义为 𝐵 = {𝑣 ∈ 𝑉 : ∥𝑣∥ &lt; 1}. 如果 dim 𝑉 = 2，那么我们有时候用的词是“圆盘”(disk)而不是“球”. 然而，在所有维度中都用“球”这个词可以避免混乱.类似地，如果 dim 𝑉 = 2， 那么我们有时候用的词是“椭圆”(ellipse)而不是我们将要定义的“椭球”. 同样，在所有维度中都用“椭球”这个词可以避免混乱. 以下定义的椭球可以视为将球 𝐵 沿每个 𝑓𝑘 轴伸缩至 𝑠𝑘 倍得到的."
    },
    {
      "id": "7.96",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.96",
      "name_en": "ellipsoid, 𝐸(𝑠<sub>1</sub> 𝑓<sub>1</sub>,..",
      "name_zh": "椭球(ellipsoid)、𝐸(𝑠<sub>1</sub> 𝑓<sub>1</sub>,…,𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub>)，主轴",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The ball 𝐵 in 𝐑<sup>2</sup>. Suppose that 𝑓<sub>1</sub>, …, 𝑓<sub>𝑛</sub> is an orthonormal basis of 𝑉 and 𝑠<sub>1</sub>, …, 𝑠<sub>𝑛</sub> are positive numbers. The ellipsoid 𝐸(𝑠<sub>1</sub> 𝑓<sub>1</sub>, …, 𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub>) with principal axes 𝑠<sub>1</sub> 𝑓<sub>1</sub>, …, 𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub> is defined by |⟨𝑣, 𝑓<sub>1</sub>⟩|<sup>2</sup> |⟨𝑣, 𝑓<sub>𝑛</sub>⟩|<sup>2</sup> 𝐸(𝑠<sub>1</sub> 𝑓<sub>1</sub>, …, 𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub>) = {𝑣 ∈ 𝑉 ∶ 𝑠<sub>12</sub> + ⋯ + 𝑠<sub>𝑛</sub>2 &lt; 1}. The ellipsoid notation 𝐸(𝑠<sub>1</sub> 𝑓<sub>1</sub>, …, 𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub>) does not explicitly include the inner product space 𝑉, even though the definition above depends on 𝑉. However, the inner product space 𝑉 should be clear from the context and also from the requirement that 𝑓<sub>1</sub>, …, 𝑓<sub>𝑛</sub> be an orthonormal basis of 𝑉.",
          "zh": "R<sup>2</sup> 中的球 𝐵. 设 𝑓<sub>1</sub>,…, 𝑓<sub>𝑛</sub> 是 𝑉 的规范正交基，𝑠<sub>1</sub>,…,𝑠<sub>𝑛</sub> 是正数.主轴为 𝑠<sub>1</sub> 𝑓<sub>1</sub>,…,𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub> 的椭球 𝐸(𝑠<sub>1</sub> 𝑓<sub>1</sub>,…,𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub>) 定义为 \u001a |⟨𝑣, 𝑓<sub>1</sub>⟩|<sup>2</sup> |⟨𝑣, 𝑓<sub>𝑛</sub>⟩|<sup>2</sup> \u001b 𝐸(𝑠<sub>1</sub>𝑓<sub>1</sub>,…,𝑠<sub>𝑛</sub>𝑓<sub>𝑛</sub>) = 𝑣 ∈ 𝑉: 𝑠<sub>2</sub> +···+ 𝑠<sub>2</sub> &lt;1. 1𝑛 椭球的记号𝐸(𝑠<sub>1</sub> 𝑓<sub>1</sub>,…,𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub>)并没有显式地包含内积空间𝑉，尽管以上的定义依赖于𝑉.然 而，从上下文以及“ 𝑓<sub>1</sub>, …, 𝑓<sub>𝑛</sub> 是 𝑉 的规范正交基”这一要求来看，内积空间 𝑉 应该是明确的."
        }
      ],
      "note": null,
      "statement_en": "The ball 𝐵 in 𝐑2. Suppose that 𝑓1, …, 𝑓𝑛 is an orthonormal basis of 𝑉 and 𝑠1, …, 𝑠𝑛 are positive numbers. The ellipsoid 𝐸(𝑠1 𝑓1, …, 𝑠𝑛 𝑓𝑛) with principal axes 𝑠1 𝑓1, …, 𝑠𝑛 𝑓𝑛 is defined by |⟨𝑣, 𝑓1⟩|2 |⟨𝑣, 𝑓𝑛⟩|2 𝐸(𝑠1 𝑓1, …, 𝑠𝑛 𝑓𝑛) = {𝑣 ∈ 𝑉 ∶ 𝑠12 + ⋯ + 𝑠𝑛2 &lt; 1}. The ellipsoid notation 𝐸(𝑠1 𝑓1, …, 𝑠𝑛 𝑓𝑛) does not explicitly include the inner product space 𝑉, even though the definition above depends on 𝑉. However, the inner product space 𝑉 should be clear from the context and also from the requirement that 𝑓1, …, 𝑓𝑛 be an orthonormal basis of 𝑉.",
      "statement_zh": "R2 中的球 𝐵. 设 𝑓1,…, 𝑓𝑛 是 𝑉 的规范正交基，𝑠1,…,𝑠𝑛 是正数.主轴为 𝑠1 𝑓1,…,𝑠𝑛 𝑓𝑛 的椭球 𝐸(𝑠1 𝑓1,…,𝑠𝑛 𝑓𝑛) 定义为 \u001a |⟨𝑣, 𝑓1⟩|2 |⟨𝑣, 𝑓𝑛⟩|2 \u001b 𝐸(𝑠1𝑓1,…,𝑠𝑛𝑓𝑛) = 𝑣 ∈ 𝑉: 𝑠2 +···+ 𝑠2 &lt;1. 1𝑛 椭球的记号𝐸(𝑠1 𝑓1,…,𝑠𝑛 𝑓𝑛)并没有显式地包含内积空间𝑉，尽管以上的定义依赖于𝑉.然 而，从上下文以及“ 𝑓1, …, 𝑓𝑛 是 𝑉 的规范正交基”这一要求来看，内积空间 𝑉 应该是明确的."
    },
    {
      "id": "7.98",
      "kind": "notation",
      "chapter": "ch7",
      "number": "7.98",
      "name_en": "𝑇(Ω)",
      "name_zh": "𝑇",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑇 a function defined on 𝑉 and Ω ⊆ 𝑉, define 𝑇(Ω) by 𝑇(Ω) = {𝑇𝑣 ∶ 𝑣 ∈ Ω}. Thus if 𝑇 is a function defined on 𝑉, then 𝑇(𝑉) = range 𝑇.",
          "zh": "对于定义在 𝑉 上的函数 𝑇，以及 Ω ⊆ 𝑉，定义 𝑇(Ω) 为 𝑇(Ω) = {𝑇𝑣 : 𝑣 ∈ Ω}. 那么，如果 𝑇 是定义在 𝑉 上的函数，就有 𝑇(𝑉) = range 𝑇. 接下来这条结果指出，每个可逆算子 𝑇 ∈ L (𝑉) 都将 𝑉 中的球 𝐵 映成 𝑉 中的椭球.其"
        }
      ],
      "note": {
        "en": "The next result states that every invertible operator 𝑇 ∈ L(𝑉) maps the ball 𝐵 in 𝑉 onto an ellipsoid in 𝑉. The",
        "zh": ""
      },
      "statement_en": "For 𝑇 a function defined on 𝑉 and Ω ⊆ 𝑉, define 𝑇(Ω) by 𝑇(Ω) = {𝑇𝑣 ∶ 𝑣 ∈ Ω}. Thus if 𝑇 is a function defined on 𝑉, then 𝑇(𝑉) = range 𝑇. The next result states that every invertible operator 𝑇 ∈ L(𝑉) maps the ball 𝐵 in 𝑉 onto an ellipsoid in 𝑉. The",
      "statement_zh": "对于定义在 𝑉 上的函数 𝑇，以及 Ω ⊆ 𝑉，定义 𝑇(Ω) 为 𝑇(Ω) = {𝑇𝑣 : 𝑣 ∈ Ω}. 那么，如果 𝑇 是定义在 𝑉 上的函数，就有 𝑇(𝑉) = range 𝑇. 接下来这条结果指出，每个可逆算子 𝑇 ∈ L (𝑉) 都将 𝑉 中的球 𝐵 映成 𝑉 中的椭球.其"
    },
    {
      "id": "7.99",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.99",
      "name_en": "invertible operator takes ball to ellipsoid",
      "name_zh": "可逆算子化球为椭球",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is invertible. Then 𝑇 maps the ball 𝐵 in 𝑉 onto an ellipsoid in 𝑉.",
          "zh": "设 𝑇 ∈ L(𝑉) 可逆，那么 𝑇 将 𝑉 中的球 𝐵 映成 𝑉 中的椭球."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is invertible. Then 𝑇 maps the ball 𝐵 in 𝑉 onto an ellipsoid in 𝑉.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 可逆，那么 𝑇 将 𝑉 中的球 𝐵 映成 𝑉 中的椭球."
    },
    {
      "id": "7.101",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.101",
      "name_en": "invertible operator takes ellipsoids to ellipsoids",
      "name_zh": "可逆算子化椭球为椭球",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is invertible and 𝐸 is an ellipsoid in 𝑉. Then 𝑇(𝐸) is an ellipsoid in 𝑉.",
          "zh": "设𝑇 ∈ L(𝑉) 可逆，且 𝐸 是𝑉 中的椭球.那么𝑇(𝐸) 是𝑉 中的椭球."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is invertible and 𝐸 is an ellipsoid in 𝑉. Then 𝑇(𝐸) is an ellipsoid in 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 可逆，且 𝐸 是𝑉 中的椭球.那么𝑇(𝐸) 是𝑉 中的椭球."
    },
    {
      "id": "7.102",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.102",
      "name_en": "𝑃(𝑣<sub>1</sub>,..",
      "name_zh": "𝑃(𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub>)、平行体",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑃(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>) = {𝑎<sub>1</sub>𝑣<sub>1</sub> +⋯+𝑎<sub>𝑛</sub>𝑣<sub>𝑛</sub> ∶𝑎<sub>1</sub>,…,𝑎<sub>𝑛</sub> ∈ (0,1)}. A parallelepiped is a set of the form 𝑢 + 𝑃(𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub>) for some 𝑢 ∈ 𝑉. The vectors 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> are called the edges of this parallelepiped.",
          "zh": "设𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉的基，令 𝑃(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>) = {𝑎<sub>1</sub>𝑣<sub>1</sub> +···+𝑎<sub>𝑛</sub>𝑣<sub>𝑛</sub> : 𝑎<sub>1</sub>,…,𝑎<sub>𝑛</sub> ∈ (0,1)}. 平行体是形如 𝑢 + 𝑃(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>) 的集合，其中 𝑢 ∈ 𝑉.向量 𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 称为该平行体的边 (edges)."
        }
      ],
      "note": null,
      "statement_en": "𝑃(𝑣1,…,𝑣𝑛) = {𝑎1𝑣1 +⋯+𝑎𝑛𝑣𝑛 ∶𝑎1,…,𝑎𝑛 ∈ (0,1)}. A parallelepiped is a set of the form 𝑢 + 𝑃(𝑣1, …, 𝑣𝑛) for some 𝑢 ∈ 𝑉. The vectors 𝑣1, …, 𝑣𝑛 are called the edges of this parallelepiped.",
      "statement_zh": "设𝑣1,…,𝑣𝑛 是𝑉的基，令 𝑃(𝑣1,…,𝑣𝑛) = {𝑎1𝑣1 +···+𝑎𝑛𝑣𝑛 : 𝑎1,…,𝑎𝑛 ∈ (0,1)}. 平行体是形如 𝑢 + 𝑃(𝑣1,…,𝑣𝑛) 的集合，其中 𝑢 ∈ 𝑉.向量 𝑣1,…,𝑣𝑛 称为该平行体的边 (edges)."
    },
    {
      "id": "7.104",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.104",
      "name_en": "invertible operator takes parallelepipeds to parallelepipeds Suppose",
      "name_zh": "可逆算子化平行体为平行体",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑢 ∈ 𝑉, 𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> is a basis of 𝑉, and 𝑇 ∈ L(𝑉) is invertible. Then 𝑇(𝑢+𝑃(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)) = 𝑇𝑢+𝑃(𝑇𝑣<sub>1</sub>,…,𝑇𝑣<sub>𝑛</sub>).",
          "zh": "设 𝑢 ∈ 𝑉 且 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 是 𝑉 的基.设 𝑇 ∈ L(𝑉) 可逆，那么 𝑇\u0000𝑢+𝑃(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001 = 𝑇𝑢+𝑃(𝑇𝑣<sub>1</sub>,…,𝑇𝑣<sub>𝑛</sub>)."
        }
      ],
      "note": null,
      "statement_en": "𝑢 ∈ 𝑉, 𝑣1,…,𝑣𝑛 is a basis of 𝑉, and 𝑇 ∈ L(𝑉) is invertible. Then 𝑇(𝑢+𝑃(𝑣1,…,𝑣𝑛)) = 𝑇𝑢+𝑃(𝑇𝑣1,…,𝑇𝑣𝑛).",
      "statement_zh": "设 𝑢 ∈ 𝑉 且 𝑣1, …, 𝑣𝑛 是 𝑉 的基.设 𝑇 ∈ L(𝑉) 可逆，那么 𝑇\u0000𝑢+𝑃(𝑣1,…,𝑣𝑛)\u0001 = 𝑇𝑢+𝑃(𝑇𝑣1,…,𝑇𝑣𝑛)."
    },
    {
      "id": "7.105",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.105",
      "name_en": "box",
      "name_zh": "长方体",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A box in 𝑉 is a set of the form 𝑢 + 𝑃(𝑟<sub>1</sub>𝑒<sub>1</sub>, …, 𝑟<sub>𝑛</sub>𝑒<sub>𝑛</sub>), where 𝑢 ∈ 𝑉 and 𝑟<sub>1</sub>,…,𝑟<sub>𝑛</sub> are positive numbers and 𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> is an ortho- normal basis of 𝑉. Note that in the special case of 𝐑<sup>2</sup> each box is a rectangle, but the terminology box can be used in all dimensions.",
          "zh": "𝑉 中的长方体7是形如 𝑢 + 𝑃(𝑟<sub>1</sub>𝑒<sub>1</sub>, …, 𝑟<sub>𝑛</sub>𝑒<sub>𝑛</sub>) 的集合，其中𝑢 ∈ 𝑉，𝑟<sub>1</sub>,…,𝑟<sub>𝑛</sub> 是正数，𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 是𝑉 的规范正交基. 6即 7.102 中所说的“边”. 7 译者更喜欢它的另一个名字——超矩形(hyperrectangle). 注意到，在 R<sup>2</sup> 这一特殊情形中，长方体就是矩形，但是“长方体”这一术语适用于所有 维度."
        }
      ],
      "note": null,
      "statement_en": "A box in 𝑉 is a set of the form 𝑢 + 𝑃(𝑟1𝑒1, …, 𝑟𝑛𝑒𝑛), where 𝑢 ∈ 𝑉 and 𝑟1,…,𝑟𝑛 are positive numbers and 𝑒1,…,𝑒𝑛 is an ortho- normal basis of 𝑉. Note that in the special case of 𝐑2 each box is a rectangle, but the terminology box can be used in all dimensions.",
      "statement_zh": "𝑉 中的长方体7是形如 𝑢 + 𝑃(𝑟1𝑒1, …, 𝑟𝑛𝑒𝑛) 的集合，其中𝑢 ∈ 𝑉，𝑟1,…,𝑟𝑛 是正数，𝑒1,…,𝑒𝑛 是𝑉 的规范正交基. 6即 7.102 中所说的“边”. 7 译者更喜欢它的另一个名字——超矩形(hyperrectangle). 注意到，在 R2 这一特殊情形中，长方体就是矩形，但是“长方体”这一术语适用于所有 维度."
    },
    {
      "id": "7.107",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.107",
      "name_en": "every invertible operator takes some boxes to boxes",
      "name_zh": "每个可逆算子都将某些长方体化成长方体",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is invertible. Suppose 𝑇 has singular value decomposition 𝑇𝑣=𝑠1⟨𝑣,𝑒<sub>1</sub>⟩𝑓<sub>1</sub> +⋯+𝑠𝑛⟨𝑣,𝑒<sub>𝑛</sub>⟩𝑓<sub>𝑛</sub>, where 𝑠1,...,𝑠𝑛 are the singular values of 𝑇 and 𝑒<sub>1</sub>,...,𝑒<sub>𝑛</sub> and 𝑓<sub>1</sub>,..., 𝑓<sub>𝑛</sub> are orthonormal bases of 𝑉 and the equation above holds for all 𝑣 ∈ 𝑉. Then 𝑇 mapsthebox𝑢+𝑃(𝑟1𝑒<sub>1</sub>,...,𝑟𝑛𝑒<sub>𝑛</sub>)ontothebox𝑇𝑢+𝑃(𝑟1𝑠1 𝑓<sub>1</sub>,...,𝑟𝑛𝑠𝑛 𝑓<sub>𝑛</sub>)for all positive numbers 𝑟1,..., 𝑟𝑛 and all 𝑢 ∈ 𝑉.",
          "zh": "𝑇𝑣 = 𝑠<sub>1</sub> ⟨𝑣, 𝑒<sub>1</sub>⟩ 𝑓<sub>1</sub> + ⋯ + 𝑠<sub>𝑛</sub> ⟨𝑣, 𝑒<sub>𝑛</sub>⟩ 𝑓<sub>𝑛</sub>， 其中，𝑠<sub>1</sub>,…,𝑠<sub>𝑛</sub> 是𝑇 的奇异值，𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 和 𝑓<sub>1</sub>,…, 𝑓<sub>𝑛</sub> 是𝑉 的规范正交基，上式对所有 𝑣 ∈ 𝑉 成立.那么，对于所有正数𝑟<sub>1</sub>,…,𝑟<sub>𝑛</sub> 和所有𝑢 ∈ 𝑉，𝑇 将长方体𝑢+𝑃(𝑟<sub>1</sub>𝑒<sub>1</sub>,…,𝑟<sub>𝑛</sub>𝑒<sub>𝑛</sub>) 映成长方体𝑇𝑢+𝑃(𝑟<sub>1</sub>𝑠<sub>1</sub> 𝑓<sub>1</sub>,…,𝑟<sub>𝑛</sub>𝑠<sub>𝑛</sub> 𝑓<sub>𝑛</sub>)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is invertible. Suppose 𝑇 has singular value decomposition 𝑇𝑣=𝑠1⟨𝑣,𝑒1⟩𝑓1 +⋯+𝑠𝑛⟨𝑣,𝑒𝑛⟩𝑓𝑛, where 𝑠1,...,𝑠𝑛 are the singular values of 𝑇 and 𝑒1,...,𝑒𝑛 and 𝑓1,..., 𝑓𝑛 are orthonormal bases of 𝑉 and the equation above holds for all 𝑣 ∈ 𝑉. Then 𝑇 mapsthebox𝑢+𝑃(𝑟1𝑒1,...,𝑟𝑛𝑒𝑛)ontothebox𝑇𝑢+𝑃(𝑟1𝑠1 𝑓1,...,𝑟𝑛𝑠𝑛 𝑓𝑛)for all positive numbers 𝑟1,..., 𝑟𝑛 and all 𝑢 ∈ 𝑉.",
      "statement_zh": "𝑇𝑣 = 𝑠1 ⟨𝑣, 𝑒1⟩ 𝑓1 + ⋯ + 𝑠𝑛 ⟨𝑣, 𝑒𝑛⟩ 𝑓𝑛， 其中，𝑠1,…,𝑠𝑛 是𝑇 的奇异值，𝑒1,…,𝑒𝑛 和 𝑓1,…, 𝑓𝑛 是𝑉 的规范正交基，上式对所有 𝑣 ∈ 𝑉 成立.那么，对于所有正数𝑟1,…,𝑟𝑛 和所有𝑢 ∈ 𝑉，𝑇 将长方体𝑢+𝑃(𝑟1𝑒1,…,𝑟𝑛𝑒𝑛) 映成长方体𝑇𝑢+𝑃(𝑟1𝑠1 𝑓1,…,𝑟𝑛𝑠𝑛 𝑓𝑛)."
    },
    {
      "id": "7.108",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.108",
      "name_en": "volume of a box",
      "name_zh": "长方体的体积(volume of a box) 设 F = R.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐑. If 𝑢 ∈ 𝑉 and 𝑟1,...,𝑟𝑛 are positive numbers and 𝑒<sub>1</sub>,...,𝑒<sub>𝑛</sub> is an orthonormal basis of 𝑉, then volume(𝑢 + 𝑃(𝑟1𝑒<sub>1</sub>,..., 𝑟𝑛𝑒<sub>𝑛</sub>)) = 𝑟1 × ⋯ × 𝑟𝑛. The definition above agrees with the familiar formulas for the area (which we are calling the volume) of a rectangle in 𝐑<sup>2</sup> and for the volume of a box in 𝐑<sup>3</sup>. For example, the first box in Example",
          "zh": "volume\u0000𝑢+𝑃(𝑟<sub>1</sub>𝑒<sub>1</sub>,…,𝑟<sub>𝑛</sub>𝑒<sub>𝑛</sub>)\u0001 = 𝑟<sub>1</sub> ×···×𝑟<sub>𝑛</sub>. 以上定义跟常见的 R<sup>2</sup> 中矩形面积(这里我们称为体积)公式和 R<sup>3</sup> 中长方体的体积公式 是一致的.例如，例 7.106 中第一个长方体具有二维体积(或面积)，其值为 2，因为其定义边 的长度为 √2 和 √2;第二个长方体具有三维体积，其值为 2，因为其定义边的长度为 1、2、1. 为了定义 𝑉 的子集的体积，我们用有限个互不相交的长方体来逼 近这一子集，并且将用于逼近的这些长方体的体积加起来.我们对越多 的不相交长方体取并集，就能越准确地逼近 𝑉 的一子集，对其体积的逼 近也越好. 这些想法应该让你想起了黎曼积分(Riemann integral)是怎样定义 的——用若干互不相交的矩形来逼近曲线下的面积.上面的讨论引出了 以下不严谨但合乎直觉的定义. 该球的体积 ≈ 五个 长方体的体积之和."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐑. If 𝑢 ∈ 𝑉 and 𝑟1,...,𝑟𝑛 are positive numbers and 𝑒1,...,𝑒𝑛 is an orthonormal basis of 𝑉, then volume(𝑢 + 𝑃(𝑟1𝑒1,..., 𝑟𝑛𝑒𝑛)) = 𝑟1 × ⋯ × 𝑟𝑛. The definition above agrees with the familiar formulas for the area (which we are calling the volume) of a rectangle in 𝐑2 and for the volume of a box in 𝐑3. For example, the first box in Example",
      "statement_zh": "volume\u0000𝑢+𝑃(𝑟1𝑒1,…,𝑟𝑛𝑒𝑛)\u0001 = 𝑟1 ×···×𝑟𝑛. 以上定义跟常见的 R2 中矩形面积(这里我们称为体积)公式和 R3 中长方体的体积公式 是一致的.例如，例 7.106 中第一个长方体具有二维体积(或面积)，其值为 2，因为其定义边 的长度为 √2 和 √2;第二个长方体具有三维体积，其值为 2，因为其定义边的长度为 1、2、1. 为了定义 𝑉 的子集的体积，我们用有限个互不相交的长方体来逼 近这一子集，并且将用于逼近的这些长方体的体积加起来.我们对越多 的不相交长方体取并集，就能越准确地逼近 𝑉 的一子集，对其体积的逼 近也越好. 这些想法应该让你想起了黎曼积分(Riemann integral)是怎样定义 的——用若干互不相交的矩形来逼近曲线下的面积.上面的讨论引出了 以下不严谨但合乎直觉的定义. 该球的体积 ≈ 五个 长方体的体积之和."
    },
    {
      "id": "7.109",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.109",
      "name_en": "volume",
      "name_zh": "体积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Volume of this ball ≈ sum of the volumes of the five boxes. Suppose 𝐅 = 𝐑 and Ω ⊆ 𝑉. Then the volume of Ω, denoted by volume Ω, is approximately the sum of the volumes of a collection of disjoint boxes that approximate Ω. We are ignoring many reasonable questions by taking an intuitive approach to volume. For example, if we approximate Ω by boxes with respect to one basis, do we get the same volume if we approximate Ω by boxes with respect to a different basis? If Ω1 and Ω2 are disjoint subsets of 𝑉, is volume(Ω1 ∪ Ω2) = volume Ω1 + volume Ω2? Provided that we consider only reasonably nice subsets of 𝑉, techniques of analysis show that both these questions have affirmative answers that agree with our intuition about volume.",
          "zh": "设 F = R，Ω ⊆ 𝑉.那么 Ω 的体积，记为 volume Ω，约等于逼近 Ω 的若干个不相交长方 体的体积之和. 我们用一种直观的方法处理体积，如此就忽略了许多值得推敲的问题.例如，如果我们用 关于一个基的长方体逼近 Ω，那么我们再用关于另一个基的长方体逼近 Ω 又能否得到相同的 体积?如果 Ω1 和 Ω2 是 𝑉 的不相交子集，那么是否有 volume(Ω1 ∪Ω2) = volume Ω1 +volume Ω2? 假如我们仅考虑 𝑉 的性质相当好的子集，那么借助分析学的手段可以说明，这两个问题都有 肯定的回答，和我们对体积的直觉一致."
        }
      ],
      "note": null,
      "statement_en": "Volume of this ball ≈ sum of the volumes of the five boxes. Suppose 𝐅 = 𝐑 and Ω ⊆ 𝑉. Then the volume of Ω, denoted by volume Ω, is approximately the sum of the volumes of a collection of disjoint boxes that approximate Ω. We are ignoring many reasonable questions by taking an intuitive approach to volume. For example, if we approximate Ω by boxes with respect to one basis, do we get the same volume if we approximate Ω by boxes with respect to a different basis? If Ω1 and Ω2 are disjoint subsets of 𝑉, is volume(Ω1 ∪ Ω2) = volume Ω1 + volume Ω2? Provided that we consider only reasonably nice subsets of 𝑉, techniques of analysis show that both these questions have affirmative answers that agree with our intuition about volume.",
      "statement_zh": "设 F = R，Ω ⊆ 𝑉.那么 Ω 的体积，记为 volume Ω，约等于逼近 Ω 的若干个不相交长方 体的体积之和. 我们用一种直观的方法处理体积，如此就忽略了许多值得推敲的问题.例如，如果我们用 关于一个基的长方体逼近 Ω，那么我们再用关于另一个基的长方体逼近 Ω 又能否得到相同的 体积?如果 Ω1 和 Ω2 是 𝑉 的不相交子集，那么是否有 volume(Ω1 ∪Ω2) = volume Ω1 +volume Ω2? 假如我们仅考虑 𝑉 的性质相当好的子集，那么借助分析学的手段可以说明，这两个问题都有 肯定的回答，和我们对体积的直觉一致."
    },
    {
      "id": "8.1",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.1",
      "name_en": "sequence of increasing null spaces Suppose",
      "name_zh": "递增的零空间序列",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇 ∈ L(𝑉). Then {0} = null 𝑇<sup>0</sup> ⊆null 𝑇<sup>1</sup> ⊆⋯⊆null 𝑇𝑘 ⊆null 𝑇𝑘+1 ⊆⋯.",
          "zh": "{0} = null 𝑇<sup>0</sup> ⊆ null 𝑇<sup>1</sup> ⊆ ··· ⊆ null 𝑇𝑘 ⊆ null 𝑇𝑘+1 ⊆ ···."
        }
      ],
      "note": null,
      "statement_en": "𝑇 ∈ L(𝑉). Then {0} = null 𝑇0 ⊆null 𝑇1 ⊆⋯⊆null 𝑇𝑘 ⊆null 𝑇𝑘+1 ⊆⋯.",
      "statement_zh": "{0} = null 𝑇0 ⊆ null 𝑇1 ⊆ ··· ⊆ null 𝑇𝑘 ⊆ null 𝑇𝑘+1 ⊆ ···."
    },
    {
      "id": "8.2",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.2",
      "name_en": "equality in the sequence of null spaces",
      "name_zh": "零空间序列中的等式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑚 is a nonnegative integer such that null𝑇𝑚 =null𝑇𝑚+1. Then null𝑇𝑚 = null𝑇𝑚+1 = null𝑇𝑚+2 = null𝑇𝑚+3 = ⋯.",
          "zh": "设 𝑇 ∈ L(𝑉)，𝑚 是非负整数，满足 那么 null 𝑇<sup>𝑚</sup> = null 𝑇<sup>𝑚</sup>+1. null 𝑇<sup>𝑚</sup> = null 𝑇<sup>𝑚</sup>+1 = null 𝑇<sup>𝑚</sup>+2 = null 𝑇<sup>𝑚</sup>+3 = ···."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑚 is a nonnegative integer such that null𝑇𝑚 =null𝑇𝑚+1. Then null𝑇𝑚 = null𝑇𝑚+1 = null𝑇𝑚+2 = null𝑇𝑚+3 = ⋯.",
      "statement_zh": "设 𝑇 ∈ L(𝑉)，𝑚 是非负整数，满足 那么 null 𝑇𝑚 = null 𝑇𝑚+1. null 𝑇𝑚 = null 𝑇𝑚+1 = null 𝑇𝑚+2 = null 𝑇𝑚+3 = ···."
    },
    {
      "id": "8.3",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.3",
      "name_en": "null spaces stop growing Suppose",
      "name_zh": "零空间停止增长",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇 ∈ L(𝑉). Then null 𝑇 dim 𝑉 = null 𝑇 dim 𝑉+1 = null 𝑇 dim 𝑉+2 = ⋯.",
          "zh": "设 𝑇 ∈ L(𝑉).那么 null 𝑇 dim 𝑉 = null 𝑇 dim 𝑉+1 = null 𝑇 dim 𝑉+2 = ···."
        }
      ],
      "note": null,
      "statement_en": "𝑇 ∈ L(𝑉). Then null 𝑇 dim 𝑉 = null 𝑇 dim 𝑉+1 = null 𝑇 dim 𝑉+2 = ⋯.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).那么 null 𝑇 dim 𝑉 = null 𝑇 dim 𝑉+1 = null 𝑇 dim 𝑉+2 = ···."
    },
    {
      "id": "8.4",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.4",
      "name_en": "𝑉 is the direct sum of null 𝑇dim 𝑉 and range 𝑇dim 𝑉",
      "name_zh": "𝑉 是 null 𝑇 dim 𝑉 与 range 𝑇 dim 𝑉 的直和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). Then 𝑉 = null 𝑇dim 𝑉 ⊕ range 𝑇dim 𝑉.",
          "zh": "设 𝑇 ∈ L(𝑉).那么"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). Then 𝑉 = null 𝑇dim 𝑉 ⊕ range 𝑇dim 𝑉.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).那么"
    },
    {
      "id": "8.7",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.7",
      "name_en": "holds for every self-adjoint operator if",
      "name_zh": "holds for every self-adjoint operator if",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐅 = 𝐑 and for every normal operator if 𝐅 = 𝐂 because operators of those types have enough eigenvectors to form a basis of 𝑉 (see 7.29 and 7.31). However, a decomposition of the form 8.7 may not hold for more general operators, even on a complex vector space. An example was given by the operator in 5.57, which does not have enough eigenvectors for 8.7 to hold. Generalized eigenvectors and generalized eigenspaces, which we now introduce, will remedy this situation.",
          "zh": "holds for every self-adjoint operator if"
        }
      ],
      "note": null,
      "statement_en": "𝐅 = 𝐑 and for every normal operator if 𝐅 = 𝐂 because operators of those types have enough eigenvectors to form a basis of 𝑉 (see 7.29 and 7.31). However, a decomposition of the form 8.7 may not hold for more general operators, even on a complex vector space. An example was given by the operator in 5.57, which does not have enough eigenvectors for 8.7 to hold. Generalized eigenvectors and generalized eigenspaces, which we now introduce, will remedy this situation.",
      "statement_zh": "holds for every self-adjoint operator if"
    },
    {
      "id": "8.8",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.8",
      "name_en": "generalized eigenvector",
      "name_zh": "广义特征向量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 is an eigenvalue of 𝑇. A vector 𝑣 ∈ 𝑉 is called a generalized eigenvector of 𝑇 corresponding to 𝜆 if 𝑣 ≠ 0 and (𝑇 − 𝜆𝐼)𝑘𝑣 = 0 for some positive integer 𝑘. perators 301 A nonzero vector 𝑣 ∈ 𝑉 is a general- ized eigenvector of 𝑇 corresponding to 𝜆 if and only if (𝑇 − 𝜆𝐼)dim𝑉𝑣 = 0, as follows from applying",
          "zh": "设 𝑇 ∈ L(𝑉)，𝜆 是 𝑇 的特征值.称向量 𝑣 ∈ 𝑉 是 𝑇 对应于 𝜆 的广义特征向量，若 𝑣 = ̸ 0 且对某个正整数 𝑘 有 (𝑇 − 𝜆𝐼)𝑘𝑣 = 0. 非零向量 𝑣 ∈ 𝑉 是 𝑇 对应于 𝜆 的广义特 征向量，当且仅当 (𝑇 − 𝜆𝐼)dim 𝑉 𝑣 = 0. 我们并未定义广义特征值，因为这样不会得 到任何新东西.原因是:若 (𝑇 −𝜆𝐼)𝑘 对于某 个正整数 𝑘 不是单射，那么 𝑇 − 𝜆𝐼 也不是单 将 8.1 和 8.3 应用于算子 𝑇 − 𝜆𝐼 即可得出这点. 射，因此 𝜆 就是 𝑇 的特征值. 我们知道，复向量空间上的算子的特征向量可能不足以形成定义空间的基.下面结论说 明，这些算子的广义特征向量总能形成定义空间的基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 is an eigenvalue of 𝑇. A vector 𝑣 ∈ 𝑉 is called a generalized eigenvector of 𝑇 corresponding to 𝜆 if 𝑣 ≠ 0 and (𝑇 − 𝜆𝐼)𝑘𝑣 = 0 for some positive integer 𝑘. perators 301 A nonzero vector 𝑣 ∈ 𝑉 is a general- ized eigenvector of 𝑇 corresponding to 𝜆 if and only if (𝑇 − 𝜆𝐼)dim𝑉𝑣 = 0, as follows from applying",
      "statement_zh": "设 𝑇 ∈ L(𝑉)，𝜆 是 𝑇 的特征值.称向量 𝑣 ∈ 𝑉 是 𝑇 对应于 𝜆 的广义特征向量，若 𝑣 = ̸ 0 且对某个正整数 𝑘 有 (𝑇 − 𝜆𝐼)𝑘𝑣 = 0. 非零向量 𝑣 ∈ 𝑉 是 𝑇 对应于 𝜆 的广义特 征向量，当且仅当 (𝑇 − 𝜆𝐼)dim 𝑉 𝑣 = 0. 我们并未定义广义特征值，因为这样不会得 到任何新东西.原因是:若 (𝑇 −𝜆𝐼)𝑘 对于某 个正整数 𝑘 不是单射，那么 𝑇 − 𝜆𝐼 也不是单 将 8.1 和 8.3 应用于算子 𝑇 − 𝜆𝐼 即可得出这点. 射，因此 𝜆 就是 𝑇 的特征值. 我们知道，复向量空间上的算子的特征向量可能不足以形成定义空间的基.下面结论说 明，这些算子的广义特征向量总能形成定义空间的基."
    },
    {
      "id": "8.9",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.9",
      "name_en": "a basis of generalized eigenvectors",
      "name_zh": "由广义特征向量构成的基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then there is a basis of 𝑉 consisting of generalized eigenvectors of 𝑇.",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉).那么存在由 𝑇 的广义特征向量构成的 𝑉 的基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then there is a basis of 𝑉 consisting of generalized eigenvectors of 𝑇.",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉).那么存在由 𝑇 的广义特征向量构成的 𝑉 的基."
    },
    {
      "id": "8.11",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.11",
      "name_en": "generalized eigenvector corresponds to a unique eigenvalue",
      "name_zh": "广义特征向量对应于唯一的特征值",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). Then each generalized eigenvector of 𝑇 corresponds to only one eigenvalue of 𝑇.",
          "zh": "设 𝑇 ∈ L(𝑉).那么 𝑇 的每个广义特征向量都仅对应于 𝑇 的一个特征值."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). Then each generalized eigenvector of 𝑇 corresponds to only one eigenvalue of 𝑇.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).那么 𝑇 的每个广义特征向量都仅对应于 𝑇 的一个特征值."
    },
    {
      "id": "8.12",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.12",
      "name_en": "linearly independent generalized eigenvectors",
      "name_zh": "线性无关的广义特征向量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑇 ∈ L(𝑉). Then every list of generalized eigenvectors of 𝑇 corresponding to distinct eigenvalues of 𝑇 is linearly independent.",
          "zh": "设 𝑇 ∈ L(𝑉).那么由对应于 𝑇 的互异特征值的广义特征向量构成的每个向量组都是线 性无关的."
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑇 ∈ L(𝑉). Then every list of generalized eigenvectors of 𝑇 corresponding to distinct eigenvalues of 𝑇 is linearly independent.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).那么由对应于 𝑇 的互异特征值的广义特征向量构成的每个向量组都是线 性无关的."
    },
    {
      "id": "8.14",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.14",
      "name_en": "nilpotent",
      "name_zh": "幂零(nilpotent) 称",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator is called nilpotent if some power of it equals 0. Thus an operator 𝑇 ∈ L(𝑉) is nilpotent if and only if every nonzero vector in 𝑉 is a generalized eigenvector of 𝑇 corresponding to the eigenvalue 0.",
          "zh": "于是，算子 𝑇 ∈ L (𝑉) 是幂零的，若 𝑉 中每个非零向量都是 𝑇 对应于特征值 0 的广义特征 向量."
        }
      ],
      "note": null,
      "statement_en": "An operator is called nilpotent if some power of it equals 0. Thus an operator 𝑇 ∈ L(𝑉) is nilpotent if and only if every nonzero vector in 𝑉 is a generalized eigenvector of 𝑇 corresponding to the eigenvalue 0.",
      "statement_zh": "于是，算子 𝑇 ∈ L (𝑉) 是幂零的，若 𝑉 中每个非零向量都是 𝑇 对应于特征值 0 的广义特征 向量."
    },
    {
      "id": "8.16",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.16",
      "name_en": "nilpotent operator raised to dimension of domain is 0",
      "name_zh": "𝑛 维空间上幂零算子的 𝑛 次幂等于 0 设𝑇 ∈ L(𝑉) 是幂零的.那么𝑇 dim 𝑉 = 0.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is nilpotent. Then 𝑇dim 𝑉 = 0.",
          "zh": "拉丁文词语 “nil” 意为“无”或“零”，“potens” 意为“幂”.于是 “nilpotent” 的字面意思就 是“幂零”."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is nilpotent. Then 𝑇dim 𝑉 = 0.",
      "statement_zh": "拉丁文词语 “nil” 意为“无”或“零”，“potens” 意为“幂”.于是 “nilpotent” 的字面意思就 是“幂零”."
    },
    {
      "id": "8.17",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.17",
      "name_en": "eigenvalues of nilpotent operator",
      "name_zh": "幂零算子的特征值",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a)",
          "zh": "(a) 如果 𝑇 是幂零的，那么 0 是 𝑇 的特征值，并且 𝑇 没有其他的特征值."
        },
        {
          "t": "bullet",
          "en": "(b)",
          "zh": "(b) 若 F = C，且0是𝑇 的唯一特征值，那么𝑇 是幂零的."
        }
      ],
      "note": null,
      "statement_en": "(a) (b)",
      "statement_zh": "(a) 如果 𝑇 是幂零的，那么 0 是 𝑇 的特征值，并且 𝑇 没有其他的特征值. (b) 若 F = C，且0是𝑇 的唯一特征值，那么𝑇 是幂零的."
    },
    {
      "id": "8.18",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.18",
      "name_en": "minimal polynomial and upper-triangular matrix of nilpotent operator Suppose",
      "name_zh": "幂零算子的最小多项式和上三角矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose T ∈ L(V). Then the following are equivalent.",
          "zh": "假设 T ∈ L(V)。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) T is nilpotent.",
          "zh": "(a) T 是幂零的。"
        },
        {
          "t": "bullet",
          "en": "(b) The minimal polynomial of T is z<sup>m</sup> for some positive integer m.",
          "zh": "(b) T 的最小多项式是 z<sup>m</sup>，其中 m 是某个正整数。"
        },
        {
          "t": "bullet",
          "en": "(c) There is a basis of V with respect to which the matrix of T has 0 on and below the diagonal.",
          "zh": "(c) 存在 V 的一个基，使得 T 关于该基的矩阵在对角线及其下方全为 0。"
        }
      ],
      "note": null,
      "statement_en": "Suppose T ∈ L(V). Then the following are equivalent. (a) T is nilpotent. (b) The minimal polynomial of T is zm for some positive integer m. (c) There is a basis of V with respect to which the matrix of T has 0 on and below the diagonal.",
      "statement_zh": "假设 T ∈ L(V)。那么下列条件等价。 (a) T 是幂零的。 (b) T 的最小多项式是 zm，其中 m 是某个正整数。 (c) 存在 V 的一个基，使得 T 关于该基的矩阵在对角线及其下方全为 0。"
    },
    {
      "id": "8.19",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.19",
      "name_en": "generalized eigenspace, 𝐺(𝜆, 𝑇)",
      "name_zh": "广义特征空间(generalized eigenspace)、𝐺",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅. The generalized eigenspace of 𝑇 correspond- ing to 𝜆, denoted by 𝐺(𝜆, 𝑇), is defined by 𝐺(𝜆,𝑇) = {𝑣 ∈ 𝑉 ∶ (𝑇 − 𝜆𝐼)𝑘𝑣 = 0 for some positive integer 𝑘}. Thus 𝐺(𝜆, 𝑇) is the set of generalized eigenvectors of 𝑇 corresponding to 𝜆, along with the 0 vector. Because every eigenvector of 𝑇 is a generalized eigenvector of 𝑇 (take 𝑘 = 1 in the definition of generalized eigenvector), each eigenspace is contained in the corresponding generalized eigenspace. In other words, if 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅, then 𝐸(𝜆, 𝑇) ⊆ 𝐺(𝜆, 𝑇).",
          "zh": "设 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F.𝑇 对应于 𝜆 的广义特征空间，记作 𝐺(𝜆,𝑇)，定义为 𝐺(𝜆,𝑇) = {𝑣 ∈ 𝑉 : (𝑇 − 𝜆𝐼)𝑘𝑣 = 0, 𝑘 为某正整数}. 于是，𝐺 (𝜆, 𝑇) 是由 𝑇 对应于 𝜆 的广义特征向量以及向量 0 所构成的集合. 因为 𝑇 的每个特征向量都是 𝑇 的广义特征向量(在广义特征向量的定义中取 𝑘 = 1 即可)， 所以每个特征空间都包含于相对应的广义特征空间.换言之，若 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F，那么 𝐸(𝜆,𝑇) ⊆ 𝐺(𝜆,𝑇). 下面结论表明，如果 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F，那么广义特征空间 𝐺(𝜆,𝑇) 是 𝑉 的一个子空间 (因为 𝑉 上每个线性映射的零空间都是 𝑉 的子空间)."
        }
      ],
      "note": {
        "en": "The next result implies that if 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅, then the generalized eigenspace 𝐺(𝜆, 𝑇) is a subspace of 𝑉 (because the null space of each linear map on 𝑉 is a subspace of 𝑉).",
        "zh": ""
      },
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅. The generalized eigenspace of 𝑇 correspond- ing to 𝜆, denoted by 𝐺(𝜆, 𝑇), is defined by 𝐺(𝜆,𝑇) = {𝑣 ∈ 𝑉 ∶ (𝑇 − 𝜆𝐼)𝑘𝑣 = 0 for some positive integer 𝑘}. Thus 𝐺(𝜆, 𝑇) is the set of generalized eigenvectors of 𝑇 corresponding to 𝜆, along with the 0 vector. Because every eigenvector of 𝑇 is a generalized eigenvector of 𝑇 (take 𝑘 = 1 in the definition of generalized eigenvector), each eigenspace is contained in the corresponding generalized eigenspace. In other words, if 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅, then 𝐸(𝜆, 𝑇) ⊆ 𝐺(𝜆, 𝑇). The next result implies that if 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅, then the generalized eigenspace 𝐺(𝜆, 𝑇) is a subspace of 𝑉 (because the null space of each linear map on 𝑉 is a subspace of 𝑉).",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F.𝑇 对应于 𝜆 的广义特征空间，记作 𝐺(𝜆,𝑇)，定义为 𝐺(𝜆,𝑇) = {𝑣 ∈ 𝑉 : (𝑇 − 𝜆𝐼)𝑘𝑣 = 0, 𝑘 为某正整数}. 于是，𝐺 (𝜆, 𝑇) 是由 𝑇 对应于 𝜆 的广义特征向量以及向量 0 所构成的集合. 因为 𝑇 的每个特征向量都是 𝑇 的广义特征向量(在广义特征向量的定义中取 𝑘 = 1 即可)， 所以每个特征空间都包含于相对应的广义特征空间.换言之，若 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F，那么 𝐸(𝜆,𝑇) ⊆ 𝐺(𝜆,𝑇). 下面结论表明，如果 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F，那么广义特征空间 𝐺(𝜆,𝑇) 是 𝑉 的一个子空间 (因为 𝑉 上每个线性映射的零空间都是 𝑉 的子空间)."
    },
    {
      "id": "8.20",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.20",
      "name_en": "description of generalized eigenspaces",
      "name_zh": "广义特征空间的描述",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅. Then 𝐺(𝜆, 𝑇) = null(𝑇 − 𝜆𝐼)dim 𝑉.",
          "zh": "设𝑇 ∈ L(𝑉)且𝜆 ∈ F.那么𝐺(𝜆,𝑇) = null(𝑇−𝜆𝐼)dim 𝑉. 8B 广义特征空间分解 257 8B 广义特征空间分解 广义特征空间"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅. Then 𝐺(𝜆, 𝑇) = null(𝑇 − 𝜆𝐼)dim 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉)且𝜆 ∈ F.那么𝐺(𝜆,𝑇) = null(𝑇−𝜆𝐼)dim 𝑉. 8B 广义特征空间分解 257 8B 广义特征空间分解 广义特征空间"
    },
    {
      "id": "8.22",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.22",
      "name_en": "generalized eigenspace decomposition",
      "name_zh": "广义特征空间分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Let 𝜆<sub>1</sub>,..., 𝜆<sub>𝑚</sub> be the distinct eigenvalues of 𝑇. Then (a) 𝐺(𝜆<sub>𝑘</sub>,𝑇) is invariant under 𝑇 for each 𝑘 = 1,...,𝑚; (b) (𝑇 − 𝜆<sub>𝑘</sub>𝐼)|𝐺(𝜆<sub>𝑘</sub>,𝑇) is nilpotent for each 𝑘 = 1,...,𝑚; (c) 𝑉=𝐺(𝜆<sub>1</sub>,𝑇)⊕⋯⊕𝐺(𝜆<sub>𝑚</sub>,𝑇).",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉).令 𝜆<sub>1</sub>, …, 𝜆<sub>𝑚</sub> 是 𝑇 的所有互异特征值.那么 (a) 对每个𝑘 = 1,…,𝑚，𝐺(𝜆<sub>𝑘</sub>,𝑇)在𝑇下是不变的; (b) 对每个𝑘 = 1,…,𝑚，(𝑇−𝜆<sub>𝑘</sub>𝐼)|𝐺(𝜆<sub>𝑘</sub>,𝑇) 是幂零的; (c) 𝑉 = 𝐺(𝜆<sub>1</sub>,𝑇)⊕···⊕𝐺(𝜆<sub>𝑚</sub>,𝑇)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Let 𝜆1,..., 𝜆𝑚 be the distinct eigenvalues of 𝑇. Then (a) 𝐺(𝜆𝑘,𝑇) is invariant under 𝑇 for each 𝑘 = 1,...,𝑚; (b) (𝑇 − 𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇) is nilpotent for each 𝑘 = 1,...,𝑚; (c) 𝑉=𝐺(𝜆1,𝑇)⊕⋯⊕𝐺(𝜆𝑚,𝑇).",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉).令 𝜆1, …, 𝜆𝑚 是 𝑇 的所有互异特征值.那么 (a) 对每个𝑘 = 1,…,𝑚，𝐺(𝜆𝑘,𝑇)在𝑇下是不变的; (b) 对每个𝑘 = 1,…,𝑚，(𝑇−𝜆𝑘𝐼)|𝐺(𝜆𝑘,𝑇) 是幂零的; (c) 𝑉 = 𝐺(𝜆1,𝑇)⊕···⊕𝐺(𝜆𝑚,𝑇)."
    },
    {
      "id": "8.23",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.23",
      "name_en": "multiplicity",
      "name_zh": "重数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). The multiplicity of an eigenvalue 𝜆 of 𝑇 is defined to be the dimension of the corresponding generalized eigenspace 𝐺(𝜆, 𝑇). • In other words, the multiplicity of an eigenvalue 𝜆 of 𝑇 equals dim null(𝑇 − 𝜆𝐼)dim 𝑉. The second bullet point above holds because 𝐺(𝜆,𝑇) = null(𝑇 − 𝜆𝐼)dim𝑉 (see 8.20).",
          "zh": "设 𝑇 ∈ L(𝑉).定义 𝑇 的特征值 𝜆 的重数为其对应的广义特征空间 𝐺(𝜆,𝑇) 的维数. 换言之，𝑇 的特征值 𝜆 的重数等于 dim null(𝑇 − 𝜆𝐼)dim 𝑉. 上述第二点成立是因为 𝐺(𝜆,𝑇) = null(𝑇 − 𝜆𝐼)dim 𝑉(见 8.20)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). The multiplicity of an eigenvalue 𝜆 of 𝑇 is defined to be the dimension of the corresponding generalized eigenspace 𝐺(𝜆, 𝑇). • In other words, the multiplicity of an eigenvalue 𝜆 of 𝑇 equals dim null(𝑇 − 𝜆𝐼)dim 𝑉. The second bullet point above holds because 𝐺(𝜆,𝑇) = null(𝑇 − 𝜆𝐼)dim𝑉 (see 8.20).",
      "statement_zh": "设 𝑇 ∈ L(𝑉).定义 𝑇 的特征值 𝜆 的重数为其对应的广义特征空间 𝐺(𝜆,𝑇) 的维数. 换言之，𝑇 的特征值 𝜆 的重数等于 dim null(𝑇 − 𝜆𝐼)dim 𝑉. 上述第二点成立是因为 𝐺(𝜆,𝑇) = null(𝑇 − 𝜆𝐼)dim 𝑉(见 8.20)."
    },
    {
      "id": "8.25",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.25",
      "name_en": "sum of the multiplicities equals dim 𝑉",
      "name_zh": "重数之和等于 dim 𝑉",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then the sum of the multiplicities of all eigenvalues of 𝑇 equals dim 𝑉.",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉).那么 𝑇 的所有特征值的重数之和等于 dim 𝑉."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then the sum of the multiplicities of all eigenvalues of 𝑇 equals dim 𝑉.",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉).那么 𝑇 的所有特征值的重数之和等于 dim 𝑉."
    },
    {
      "id": "8.26",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.26",
      "name_en": "characteristic polynomial",
      "name_zh": "特征多项式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Let 𝜆<sub>1</sub>,..., 𝜆<sub>𝑚</sub> denote the distinct eigenvalues of 𝑇, with multiplicities 𝑑1,..., 𝑑𝑚. The polynomial (𝑧−𝜆<sub>1</sub>)𝑑1 ⋯(𝑧−𝜆<sub>𝑚</sub>)𝑑𝑚 is called the characteristic polynomial of 𝑇.",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉).令 𝜆<sub>1</sub>,…,𝜆<sub>𝑚</sub> 表示 𝑇 的所有互异特征值，且其重数分别为 𝑑1,…,𝑑𝑚.称多项式 为 𝑇 的特征多项式. (𝑧−𝜆<sub>1</sub>)𝑑1 ···(𝑧−𝜆<sub>𝑚</sub>)𝑑𝑚"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Let 𝜆1,..., 𝜆𝑚 denote the distinct eigenvalues of 𝑇, with multiplicities 𝑑1,..., 𝑑𝑚. The polynomial (𝑧−𝜆1)𝑑1 ⋯(𝑧−𝜆𝑚)𝑑𝑚 is called the characteristic polynomial of 𝑇.",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉).令 𝜆1,…,𝜆𝑚 表示 𝑇 的所有互异特征值，且其重数分别为 𝑑1,…,𝑑𝑚.称多项式 为 𝑇 的特征多项式. (𝑧−𝜆1)𝑑1 ···(𝑧−𝜆𝑚)𝑑𝑚"
    },
    {
      "id": "8.28",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.28",
      "name_en": "degree and zeros of characteristic polynomial",
      "name_zh": "特征多项式的次数和零点",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose F = ℂ and T ∈ L(V). Then",
          "zh": "假设 F = ℂ 且 T ∈ L(V)。那么"
        },
        {
          "t": "bullet",
          "en": "(a) the characteristic polynomial of T has degree dim V;",
          "zh": "(a) T 的特征多项式的次数是 dim V；"
        },
        {
          "t": "bullet",
          "en": "(b) the zeros of the characteristic polynomial of T are the eigenvalues of T.",
          "zh": "(b) T 的特征多项式的零点就是 T 的特征值。"
        }
      ],
      "note": null,
      "statement_en": "Suppose F = ℂ and T ∈ L(V). Then (a) the characteristic polynomial of T has degree dim V; (b) the zeros of the characteristic polynomial of T are the eigenvalues of T.",
      "statement_zh": "假设 F = ℂ 且 T ∈ L(V)。那么 (a) T 的特征多项式的次数是 dim V； (b) T 的特征多项式的零点就是 T 的特征值。"
    },
    {
      "id": "8.29",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.29",
      "name_en": "Cayley-Hamilton theorem",
      "name_zh": "凯莱-哈密顿定理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂, 𝑇 ∈ L(𝑉), and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
          "zh": "设 F = C，𝑇 ∈ L(𝑉)，且 𝑞 是 𝑇 的特征多项式.那么 𝑞(𝑇) = 0."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂, 𝑇 ∈ L(𝑉), and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
      "statement_zh": "设 F = C，𝑇 ∈ L(𝑉)，且 𝑞 是 𝑇 的特征多项式.那么 𝑞(𝑇) = 0."
    },
    {
      "id": "8.30",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.30",
      "name_en": "characteristic polynomial is a multiple of minimal polynomial Suppose",
      "name_zh": "characteristic polynomial is a multiple of minimal polynomial Suppose",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then the characteristic polynomial of 𝑇 is a polynomial multiple of the minimal polynomial of 𝑇.",
          "zh": "characteristic polynomial is a multiple of minimal polynomial Suppose"
        }
      ],
      "note": null,
      "statement_en": "𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then the characteristic polynomial of 𝑇 is a polynomial multiple of the minimal polynomial of 𝑇.",
      "statement_zh": "characteristic polynomial is a multiple of minimal polynomial Suppose"
    },
    {
      "id": "8.31",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.31",
      "name_en": "multiplicity of an eigenvalue equals number of times on diagonal",
      "name_zh": "中看到，这个性质总 是成立的.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Suppose 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is a basis of 𝑉 such that M(𝑇, (𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>)) is upper triangular. Then the number of times that each eigenvalue 𝜆 of 𝑇 appears on the diagonal of M(𝑇, (𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub>)) equals the multiplicity of 𝜆 as an eigenvalue of 𝑇.",
          "zh": "中看到，这个性质总 是成立的."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Suppose 𝑣1,...,𝑣𝑛 is a basis of 𝑉 such that M(𝑇, (𝑣1,..., 𝑣𝑛)) is upper triangular. Then the number of times that each eigenvalue 𝜆 of 𝑇 appears on the diagonal of M(𝑇, (𝑣1,..., 𝑣𝑛)) equals the multiplicity of 𝜆 as an eigenvalue of 𝑇.",
      "statement_zh": "中看到，这个性质总 是成立的."
    },
    {
      "id": "8.32",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.32",
      "name_en": "dim null",
      "name_zh": "dim null",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇 ≤ 𝑑. The matrix of the operator 𝑇<sup>𝑛</sup> with respect to the basis 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> is the upper- triangular matrix 𝐴𝑛, which has diagonal entries 𝜆 𝑛, …, 𝜆 𝑛 [see",
          "zh": "dim null"
        }
      ],
      "note": null,
      "statement_en": "𝑇 ≤ 𝑑. The matrix of the operator 𝑇𝑛 with respect to the basis 𝑣1, …, 𝑣𝑛 is the upper- triangular matrix 𝐴𝑛, which has diagonal entries 𝜆 𝑛, …, 𝜆 𝑛 [see",
      "statement_zh": "dim null"
    },
    {
      "id": "8.34",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.34",
      "name_en": "over all eigenvalues",
      "name_zh": "over all eigenvalues",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝜆 of 𝑇 produces an equality. Hence 8.34 must actually be an equality for each eigenvalue 𝜆 of 𝑇. Thus the multiplicity of 𝜆 as an eigenvalue of 𝑇 equals the number of times that 𝜆 appears on the diagonal of 𝐴, as desired. ≈ 100𝜋 To interpret our results in matrix form, we make the following definition, gener- alizing the notion of a diagonal matrix. If each matrix 𝐴𝑘 in the definition below is a 1-by-1 matrix, then we actually have a diagonal matrix. The 5-by-5 matrix 𝐴 = ⎜ 0 ⎝0 2 ⎠ 0 0 ⎟ ⎛⎜(4)00 00⎞⎟ ⎜ 0 ⎛⎜ 2 −3 ⎞⎟ 0 0 ⎟ ⎜0 00 ⎛17⎞⎟ ⎜⎟ ⎝000⎝01⎠⎠ is a block diagonal matrix with ⎛⎜ 𝐴 1 0 ⎞⎟ 𝐴 = ⎜ 𝐴2 ⎟, ⎝0 𝐴3⎠ where Here the inner matrices in the 5-by-5 matrix above are blocked off to show how we can think of it as a block diagonal matrix. Note that in the example above, each of 𝐴1, 𝐴2, 𝐴3 is an upper-triangular matrix whose diagonal entries are all equal.",
          "zh": "over all eigenvalues"
        }
      ],
      "note": {
        "en": "The next result shows that with respect to an appropriate basis, every operator on a finite-dimensional complex vector space has a matrix of this form. Note that this result gives us many more zeros in the matrix than are needed to make it upper triangular. 𝐴1 = (4), 𝐴2 = ⎛⎜2 −3⎞⎟, 𝐴3 = ⎛⎜1 7⎞⎟. ⎝02⎠ ⎝01⎠ Often we can understand a matrix better by thinking of it as composed of smaller matrices.",
        "zh": ""
      },
      "statement_en": "𝜆 of 𝑇 produces an equality. Hence 8.34 must actually be an equality for each eigenvalue 𝜆 of 𝑇. Thus the multiplicity of 𝜆 as an eigenvalue of 𝑇 equals the number of times that 𝜆 appears on the diagonal of 𝐴, as desired. ≈ 100𝜋 To interpret our results in matrix form, we make the following definition, gener- alizing the notion of a diagonal matrix. If each matrix 𝐴𝑘 in the definition below is a 1-by-1 matrix, then we actually have a diagonal matrix. The 5-by-5 matrix 𝐴 = ⎜ 0 ⎝0 2 ⎠ 0 0 ⎟ ⎛⎜(4)00 00⎞⎟ ⎜ 0 ⎛⎜ 2 −3 ⎞⎟ 0 0 ⎟ ⎜0 00 ⎛17⎞⎟ ⎜⎟ ⎝000⎝01⎠⎠ is a block diagonal matrix with ⎛⎜ 𝐴 1 0 ⎞⎟ 𝐴 = ⎜ 𝐴2 ⎟, ⎝0 𝐴3⎠ where Here the inner matrices in the 5-by-5 matrix above are blocked off to show how we can think of it as a block diagonal matrix. Note that in the example above, each of 𝐴1, 𝐴2, 𝐴3 is an upper-triangular matrix whose diagonal entries are all equal. The next result shows that with respect to an appropriate basis, every operator on a finite-dimensional complex vector space has a matrix of this form. Note that this result gives us many more zeros in the matrix than are needed to make it upper triangular. 𝐴1 = (4), 𝐴2 = ⎛⎜2 −3⎞⎟, 𝐴3 = ⎛⎜1 7⎞⎟. ⎝02⎠ ⎝01⎠ Often we can understand a matrix better by thinking of it as composed of smaller matrices.",
      "statement_zh": "over all eigenvalues"
    },
    {
      "id": "8.35",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.35",
      "name_en": "block diagonal matrix",
      "name_zh": "分块对角矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A block diagonal matrix is a square matrix of the form ⎛⎜ 𝐴 1 0 ⎞⎟ ⎜ ⋱ ⎟, ⎝0 𝐴𝑚⎠ where 𝐴1, …, 𝐴𝑚 are square matrices lying along the diagonal and all other entries of the matrix equal 0.",
          "zh": "通常，将一矩阵看成由多个小矩阵组合而成， 可使我们更好地理解该矩阵. © 𝐴1 0 a ­ … ®， ­® «0 𝐴𝑚¬ 的方阵，其中 𝐴1, …, 𝐴𝑚 是排列在对角线上的方阵，且矩阵其他各元素都等于 0. 5 × 5 矩阵 是形如 的分块对角矩阵，其中 \u0010\u0011 ©400!00a ­0 2−3 00® 𝐴 = ­0 02 00® ­ ! ® ­0 00 17® «0 00 01¬ ©­ 𝐴1 0 a® 𝐴 = ­ 𝐴2 ® ， «0 𝐴3¬ ! !. \u0010\u0011 2−3 17 𝐴1 = 4, 𝐴2 =, 𝐴3 = 02 01 这里，我们将 5 × 5 矩阵分解出一块一块的内部矩阵，以便说明我们是怎么将其看成分块对角 矩阵的. 注意到，在上例中，𝐴1, 𝐴2, 𝐴3 都是上三角矩阵，且各自对角线上元素都相等.下面结论表 明，有限维复向量空间中每个算子关于适当的基都具有该形式的矩阵.注意，这个结论给出的 矩阵比一般的上三角矩阵具有更多的零. 8.37 由上三角块构成的分块对角矩阵 设 F = C 且 𝑇 ∈ L(𝑉).令 𝜆<sub>1</sub>,…,𝜆<sub>𝑚</sub> 是 𝑇 的所有互异特征值，它们的重数分别为 𝑑1, …, 𝑑𝑚.那么存在 𝑉 的一个基，使得 𝑇 关于该基具有形如 © 𝐴1 0 a ­ … ® ­® «0 𝐴𝑚¬ 的分块对角矩阵，其中各 𝐴𝑘 是形如 © 𝜆<sub>𝑘</sub> ∗ a 的 𝑑𝑘 × 𝑑𝑘 上三角矩阵. 𝐴𝑘 = ­ … ® ­® «0 𝜆<sub>𝑘</sub>¬"
        }
      ],
      "note": null,
      "statement_en": "A block diagonal matrix is a square matrix of the form ⎛⎜ 𝐴 1 0 ⎞⎟ ⎜ ⋱ ⎟, ⎝0 𝐴𝑚⎠ where 𝐴1, …, 𝐴𝑚 are square matrices lying along the diagonal and all other entries of the matrix equal 0.",
      "statement_zh": "通常，将一矩阵看成由多个小矩阵组合而成， 可使我们更好地理解该矩阵. © 𝐴1 0 a ­ … ®， ­® «0 𝐴𝑚¬ 的方阵，其中 𝐴1, …, 𝐴𝑚 是排列在对角线上的方阵，且矩阵其他各元素都等于 0. 5 × 5 矩阵 是形如 的分块对角矩阵，其中 \u0010\u0011 ©400!00a ­0 2−3 00® 𝐴 = ­0 02 00® ­ ! ® ­0 00 17® «0 00 01¬ ©­ 𝐴1 0 a® 𝐴 = ­ 𝐴2 ® ， «0 𝐴3¬ ! !. \u0010\u0011 2−3 17 𝐴1 = 4, 𝐴2 =, 𝐴3 = 02 01 这里，我们将 5 × 5 矩阵分解出一块一块的内部矩阵，以便说明我们是怎么将其看成分块对角 矩阵的. 注意到，在上例中，𝐴1, 𝐴2, 𝐴3 都是上三角矩阵，且各自对角线上元素都相等.下面结论表 明，有限维复向量空间中每个算子关于适当的基都具有该形式的矩阵.注意，这个结论给出的 矩阵比一般的上三角矩阵具有更多的零. 8.37 由上三角块构成的分块对角矩阵 设 F = C 且 𝑇 ∈ L(𝑉).令 𝜆1,…,𝜆𝑚 是 𝑇 的所有互异特征值，它们的重数分别为 𝑑1, …, 𝑑𝑚.那么存在 𝑉 的一个基，使得 𝑇 关于该基具有形如 © 𝐴1 0 a ­ … ® ­® «0 𝐴𝑚¬ 的分块对角矩阵，其中各 𝐴𝑘 是形如 © 𝜆𝑘 ∗ a 的 𝑑𝑘 × 𝑑𝑘 上三角矩阵. 𝐴𝑘 = ­ … ® ­® «0 𝜆𝑘¬"
    },
    {
      "id": "8.39",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.39",
      "name_en": "identity plus nilpotent has a square root",
      "name_zh": "恒等算子加上幂零算子有平方根",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is nilpotent. Then 𝐼 + 𝑇 has a square root.",
          "zh": "设𝑇 ∈ L(𝑉) 是幂零的.那么 𝐼 +𝑇 有平方根."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is nilpotent. Then 𝐼 + 𝑇 has a square root.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 是幂零的.那么 𝐼 +𝑇 有平方根."
    },
    {
      "id": "8.41",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.41",
      "name_en": "over 𝐂, invertible operators have square roots",
      "name_zh": "C 上，可逆算子具有平方根",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is a complex vector space and 𝑇 ∈ L(𝑉) is invertible. Then 𝑇 has a square root.",
          "zh": "设 𝑉 是复向量空间，𝑇 ∈ L (𝑉) 是可逆的.那么 𝑇 有平方根. 个 𝑘 写出 \u0012𝑇\u0013 𝑇|𝐺(𝜆<sub>𝑘</sub>,𝑇) = 𝜆<sub>𝑘</sub> 𝐼+ 𝑘. √\u0012𝜃𝜃\u0013 𝑟 cos2+isin2"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a complex vector space and 𝑇 ∈ L(𝑉) is invertible. Then 𝑇 has a square root.",
      "statement_zh": "设 𝑉 是复向量空间，𝑇 ∈ L (𝑉) 是可逆的.那么 𝑇 有平方根. 个 𝑘 写出 \u0012𝑇\u0013 𝑇|𝐺(𝜆𝑘,𝑇) = 𝜆𝑘 𝐼+ 𝑘. √\u0012𝜃𝜃\u0013 𝑟 cos2+isin2"
    },
    {
      "id": "8.44",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.44",
      "name_en": "Jordan basis",
      "name_zh": "若尔当基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). A basis of 𝑉 is called a Jordan basis for 𝑇 if with respect to this basis 𝑇 has a block diagonal matrix ⎛⎜ 𝐴 1 0 ⎞⎟ in which each 𝐴𝑘 is an upper-triangular matrix of the form ⎛⎜𝜆<sub>𝑘</sub>1 0⎞⎟ ⎜ ⋱ ⎟ ⎝0 𝐴𝑝⎠ 𝐴𝑘=⎜ ⋱⋱ ⎟. ⎜ ⋱1⎟ ⎝ 0 𝜆<sub>𝑘</sub> ⎠ Most of the work in proving that every operator on a finite-dimensional com- plex vector space has a Jordan basis occurs in proving the special case below of nilpotent operators. This special case holds on real vector spaces as well as complex vector spaces.",
          "zh": "设 𝑇 ∈ L(𝑉).称 𝑉 的一个基是若尔当基，如果 𝑇 关于该基具有分块对角矩阵 © 𝐴1 0 a ­ … ®， ­® «0 𝐴𝑝¬ 其中各 𝐴𝑘 是形如 的上三角矩阵. 8C 广义特征空间分解的推论 269 ©𝜆<sub>𝑘</sub>1 0a ­ … … ® 𝐴𝑘 = ­. ­ « 0 ®.. 1 ® 𝜆<sub>𝑘</sub> ¬ 证明“有限维复向量空间上每个算子都有若尔当基”的大多数过程，都包含在下面对于幂 零算子这个特殊情形的证明中.这个特殊情形在实向量空间和复向量空间上都成立. 8.45 每个幂零算子都有若尔当基 设 𝑇 ∈ L(𝑉) 是幂零的.那么 𝑉 中有一个基是 𝑇 的若尔当基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). A basis of 𝑉 is called a Jordan basis for 𝑇 if with respect to this basis 𝑇 has a block diagonal matrix ⎛⎜ 𝐴 1 0 ⎞⎟ in which each 𝐴𝑘 is an upper-triangular matrix of the form ⎛⎜𝜆𝑘1 0⎞⎟ ⎜ ⋱ ⎟ ⎝0 𝐴𝑝⎠ 𝐴𝑘=⎜ ⋱⋱ ⎟. ⎜ ⋱1⎟ ⎝ 0 𝜆𝑘 ⎠ Most of the work in proving that every operator on a finite-dimensional com- plex vector space has a Jordan basis occurs in proving the special case below of nilpotent operators. This special case holds on real vector spaces as well as complex vector spaces.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).称 𝑉 的一个基是若尔当基，如果 𝑇 关于该基具有分块对角矩阵 © 𝐴1 0 a ­ … ®， ­® «0 𝐴𝑝¬ 其中各 𝐴𝑘 是形如 的上三角矩阵. 8C 广义特征空间分解的推论 269 ©𝜆𝑘1 0a ­ … … ® 𝐴𝑘 = ­. ­ « 0 ®.. 1 ® 𝜆𝑘 ¬ 证明“有限维复向量空间上每个算子都有若尔当基”的大多数过程，都包含在下面对于幂 零算子这个特殊情形的证明中.这个特殊情形在实向量空间和复向量空间上都成立. 8.45 每个幂零算子都有若尔当基 设 𝑇 ∈ L(𝑉) 是幂零的.那么 𝑉 中有一个基是 𝑇 的若尔当基."
    },
    {
      "id": "8.45",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.45",
      "name_en": "every nilpotent operator has a Jordan basis",
      "name_zh": "的证明中.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) is nilpotent. Then there is a basis of 𝑉 that is a Jordan basis for 𝑇.",
          "zh": "3 设 𝑇 ∈ L(𝑉).证明: 𝑉 = null 𝑇 ⊕ range 𝑇 ⇐⇒ null 𝑇<sup>2</sup> = null 𝑇. 4 设 𝑇 ∈ L(𝑉)，𝜆 ∈ F，𝑚 为正整数，使得 𝑇 的最小多项式是 (𝑧 − 𝜆)𝑚 的多项式倍.证明: dim null(𝑇 − 𝜆𝐼)𝑚 ≥ 𝑚. 5 设 𝑇 ∈ L(𝑉)，𝑚 是正整数.证明: dimnull 𝑇<sup>𝑚</sup> ≤ 𝑚 dimnull 𝑇. 提示 3B 节"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) is nilpotent. Then there is a basis of 𝑉 that is a Jordan basis for 𝑇.",
      "statement_zh": "3 设 𝑇 ∈ L(𝑉).证明: 𝑉 = null 𝑇 ⊕ range 𝑇 ⇐⇒ null 𝑇2 = null 𝑇. 4 设 𝑇 ∈ L(𝑉)，𝜆 ∈ F，𝑚 为正整数，使得 𝑇 的最小多项式是 (𝑧 − 𝜆)𝑚 的多项式倍.证明: dim null(𝑇 − 𝜆𝐼)𝑚 ≥ 𝑚. 5 设 𝑇 ∈ L(𝑉)，𝑚 是正整数.证明: dimnull 𝑇𝑚 ≤ 𝑚 dimnull 𝑇. 提示 3B 节"
    },
    {
      "id": "8.46",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.46",
      "name_en": "Jordan form",
      "name_zh": "若尔当型",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then there is a basis of 𝑉 that is a Jordan basis for 𝑇.",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉).那么 𝑉 有一个基是 𝑇 的若尔当基."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then there is a basis of 𝑉 that is a Jordan basis for 𝑇.",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉).那么 𝑉 有一个基是 𝑇 的若尔当基."
    },
    {
      "id": "8.47",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.47",
      "name_en": "trace of a matrix",
      "name_zh": "矩阵的迹",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is a square matrix with entries in 𝐅. The trace of 𝐴, denoted tr 𝐴, is defined to be the sum of the diagonal entries of 𝐴.",
          "zh": "设 𝐴 是各元素均属于 F 的方阵.𝐴 的迹，记为 tr 𝐴，定义为 𝐴 对角线上各元素之和."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is a square matrix with entries in 𝐅. The trace of 𝐴, denoted tr 𝐴, is defined to be the sum of the diagonal entries of 𝐴.",
      "statement_zh": "设 𝐴 是各元素均属于 F 的方阵.𝐴 的迹，记为 tr 𝐴，定义为 𝐴 对角线上各元素之和."
    },
    {
      "id": "8.49",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.49",
      "name_en": "trace of",
      "name_zh": "𝐴𝐵 的迹等于 𝐵𝐴 的迹",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐴𝐵 equals trace of 𝐵𝐴 Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑚 matrix. Then tr(𝐴𝐵) = tr(𝐵𝐴). ⎛⎜ 𝐴 1, 1 ⋯ 𝐴 1, 𝑛 ⎞⎟ ⎛⎜ 𝐵 1, 1 ⋯ 𝐵 1, 𝑚 ⎞⎟ 𝐴 = ⎜ ⋮ ⋮ ⎟, 𝐵 = ⎜ ⋮ ⋮ ⎟. ⎝𝐴𝑚,1 ⋯ 𝐴𝑚,𝑛 ⎠ ⎝𝐵𝑛,1 ⋯ 𝐵𝑛,𝑚 ⎠ The 𝑗 th term on the diagonal of the 𝑚-by-𝑚 matrix 𝐴𝐵 equals ∑𝑛𝑘 = 1 𝐴𝑗,𝑘𝐵𝑘,𝑗. Thus 𝑚𝑛 tr(𝐴𝐵) = ∑ ∑ 𝐴𝑗,𝑘𝐵𝑘,𝑗 𝑗 = 1 𝑘 = 1 𝑛𝑚 = ∑ ∑ 𝐵𝑘,𝑗𝐴𝑗,𝑘 𝑘 = 1 𝑗 = 1 ⎛⎜ 3 −1 −2 ⎞⎟ 𝐴 = ⎜5 2 −3⎟. ⎝160⎠",
          "zh": "设 𝐴 是 𝑚 × 𝑛 矩阵且 𝐵 是 𝑛 × 𝑚 矩阵.那么 tr(𝐴𝐵) = tr(𝐵𝐴). © 𝐴1,1 ··· 𝐴1,𝑛 a © 𝐵1,1 𝐴 = ­.. ®, 𝐵 = ­."
        }
      ],
      "note": null,
      "statement_en": "𝐴𝐵 equals trace of 𝐵𝐴 Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑚 matrix. Then tr(𝐴𝐵) = tr(𝐵𝐴). ⎛⎜ 𝐴 1, 1 ⋯ 𝐴 1, 𝑛 ⎞⎟ ⎛⎜ 𝐵 1, 1 ⋯ 𝐵 1, 𝑚 ⎞⎟ 𝐴 = ⎜ ⋮ ⋮ ⎟, 𝐵 = ⎜ ⋮ ⋮ ⎟. ⎝𝐴𝑚,1 ⋯ 𝐴𝑚,𝑛 ⎠ ⎝𝐵𝑛,1 ⋯ 𝐵𝑛,𝑚 ⎠ The 𝑗 th term on the diagonal of the 𝑚-by-𝑚 matrix 𝐴𝐵 equals ∑𝑛𝑘 = 1 𝐴𝑗,𝑘𝐵𝑘,𝑗. Thus 𝑚𝑛 tr(𝐴𝐵) = ∑ ∑ 𝐴𝑗,𝑘𝐵𝑘,𝑗 𝑗 = 1 𝑘 = 1 𝑛𝑚 = ∑ ∑ 𝐵𝑘,𝑗𝐴𝑗,𝑘 𝑘 = 1 𝑗 = 1 ⎛⎜ 3 −1 −2 ⎞⎟ 𝐴 = ⎜5 2 −3⎟. ⎝160⎠",
      "statement_zh": "设 𝐴 是 𝑚 × 𝑛 矩阵且 𝐵 是 𝑛 × 𝑚 矩阵.那么 tr(𝐴𝐵) = tr(𝐵𝐴). © 𝐴1,1 ··· 𝐴1,𝑛 a © 𝐵1,1 𝐴 = ­.. ®, 𝐵 = ­."
    },
    {
      "id": "8.50",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.50",
      "name_en": "trace of matrix of operator does not depend on basis",
      "name_zh": "算子的矩阵的迹不依赖于基的选取",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). Suppose 𝑢<sub>1</sub>,...,𝑢<sub>𝑛</sub> and 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> are bases of 𝑉. Then trM(𝑇,(𝑢<sub>1</sub>,...,𝑢<sub>𝑛</sub>)) = trM(𝑇,(𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub>)).",
          "zh": "设 𝑇 ∈ L(𝑉).设 𝑢<sub>1</sub>, …, 𝑢<sub>𝑛</sub> 和 𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub> 是 𝑉 的基.那么 trM\u0000𝑇,(𝑢<sub>1</sub>,…,𝑢<sub>𝑛</sub>)\u0001 = trM\u0000𝑇,(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). Suppose 𝑢1,...,𝑢𝑛 and 𝑣1,...,𝑣𝑛 are bases of 𝑉. Then trM(𝑇,(𝑢1,...,𝑢𝑛)) = trM(𝑇,(𝑣1,...,𝑣𝑛)).",
      "statement_zh": "设 𝑇 ∈ L(𝑉).设 𝑢1, …, 𝑢𝑛 和 𝑣1, …, 𝑣𝑛 是 𝑉 的基.那么 trM\u0000𝑇,(𝑢1,…,𝑢𝑛)\u0001 = trM\u0000𝑇,(𝑣1,…,𝑣𝑛)\u0001."
    },
    {
      "id": "8.51",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.51",
      "name_en": "trace of an operator",
      "name_zh": "算子的迹",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). The trace of 𝑇, denoted tr 𝑇, is defined by tr𝑇 = trM(𝑇,(𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub>)), where 𝑣<sub>1</sub>,...,𝑣<sub>𝑛</sub> is any basis of 𝑉. Suppose 𝑇 ∈ L(𝑉) and 𝜆 is an eigenvalue of 𝑇. Recall that we defined the multiplicity of 𝜆 to be the dimension of the generalized eigenspace 𝐺(𝜆, 𝑇) (see 8.23); we proved that this multiplicity equals dim null(𝑇 − 𝜆𝐼)dim 𝑉 (see 8.20). Recall also that if 𝑉 is a complex vector space, then the sum of the multiplicities of all eigenvalues of 𝑇 equals dim 𝑉 (see 8.25). In the following result, the sum of the eigenvalues “with each eigenvalue included as many times as its multiplicity” means that if 𝜆<sub>1</sub>,..., 𝜆<sub>𝑚</sub> are the distinct eigenvalues of 𝑇 with multiplicities 𝑑1,..., 𝑑𝑚, then the sum is 𝑑1𝜆<sub>1</sub> +⋯+𝑑𝑚𝜆<sub>𝑚</sub>. Or if you prefer to work with a list of not-necessarily-distinct eigenvalues, with each eigenvalue included as many times as its multiplicity, then the eigenvalues could be denoted by 𝜆<sub>1</sub>,..., 𝜆<sub>𝑛</sub> (where 𝑛 equals dim 𝑉) and the sum is 𝜆<sub>1</sub> + ⋯ + 𝜆<sub>𝑛</sub>.",
          "zh": "设 𝑇 ∈ L(𝑉).𝑇 的迹，记作 tr 𝑇，定义为 tr 𝑇 = trM\u0000𝑇,(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>)\u0001， 其中𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 是𝑉 的任意一个基. 设𝑇 ∈ L(𝑉)且𝜆是𝑇的一个特征值.回忆一下，我们定义𝜆的重数为广义特征空间𝐺(𝜆,𝑇) 的维数(见 8.23);我们证明了该重数等于 dim null(𝑇 − 𝜆𝐼)dim 𝑉 (见 8.20);此外，若 𝑉 是复向 量空间，那么 𝑇 的所有特征值的重数之和等于 dim 𝑉 (见 8.25). 在下面结论中，“各特征值出现次数等于其重数”的特征值之和，意为如果𝜆<sub>1</sub>,…,𝜆<sub>𝑚</sub> 是 𝑇 的所有互异特征值，且重数分别为 𝑑1, …, 𝑑𝑚，那么求和式为 𝑑1𝜆<sub>1</sub> +···+𝑑𝑚𝜆<sub>𝑚</sub>. 如果你更喜欢将所有特征值按一组未必互异的数(其中各特征值出现的次数等于其重数)来 处理，那么可将所有特征值记为 𝜆<sub>1</sub>, …, 𝜆<sub>𝑛</sub>(其中 𝑛 等于 dim 𝑉)，这样求和式可写为 𝜆<sub>1</sub> +···+𝜆<sub>𝑛</sub>."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). The trace of 𝑇, denoted tr 𝑇, is defined by tr𝑇 = trM(𝑇,(𝑣1,...,𝑣𝑛)), where 𝑣1,...,𝑣𝑛 is any basis of 𝑉. Suppose 𝑇 ∈ L(𝑉) and 𝜆 is an eigenvalue of 𝑇. Recall that we defined the multiplicity of 𝜆 to be the dimension of the generalized eigenspace 𝐺(𝜆, 𝑇) (see 8.23); we proved that this multiplicity equals dim null(𝑇 − 𝜆𝐼)dim 𝑉 (see 8.20). Recall also that if 𝑉 is a complex vector space, then the sum of the multiplicities of all eigenvalues of 𝑇 equals dim 𝑉 (see 8.25). In the following result, the sum of the eigenvalues “with each eigenvalue included as many times as its multiplicity” means that if 𝜆1,..., 𝜆𝑚 are the distinct eigenvalues of 𝑇 with multiplicities 𝑑1,..., 𝑑𝑚, then the sum is 𝑑1𝜆1 +⋯+𝑑𝑚𝜆𝑚. Or if you prefer to work with a list of not-necessarily-distinct eigenvalues, with each eigenvalue included as many times as its multiplicity, then the eigenvalues could be denoted by 𝜆1,..., 𝜆𝑛 (where 𝑛 equals dim 𝑉) and the sum is 𝜆1 + ⋯ + 𝜆𝑛.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).𝑇 的迹，记作 tr 𝑇，定义为 tr 𝑇 = trM\u0000𝑇,(𝑣1,…,𝑣𝑛)\u0001， 其中𝑣1,…,𝑣𝑛 是𝑉 的任意一个基. 设𝑇 ∈ L(𝑉)且𝜆是𝑇的一个特征值.回忆一下，我们定义𝜆的重数为广义特征空间𝐺(𝜆,𝑇) 的维数(见 8.23);我们证明了该重数等于 dim null(𝑇 − 𝜆𝐼)dim 𝑉 (见 8.20);此外，若 𝑉 是复向 量空间，那么 𝑇 的所有特征值的重数之和等于 dim 𝑉 (见 8.25). 在下面结论中，“各特征值出现次数等于其重数”的特征值之和，意为如果𝜆1,…,𝜆𝑚 是 𝑇 的所有互异特征值，且重数分别为 𝑑1, …, 𝑑𝑚，那么求和式为 𝑑1𝜆1 +···+𝑑𝑚𝜆𝑚. 如果你更喜欢将所有特征值按一组未必互异的数(其中各特征值出现的次数等于其重数)来 处理，那么可将所有特征值记为 𝜆1, …, 𝜆𝑛(其中 𝑛 等于 dim 𝑉)，这样求和式可写为 𝜆1 +···+𝜆𝑛."
    },
    {
      "id": "8.52",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.52",
      "name_en": "on complex vector spaces, trace equals sum of eigenvalues",
      "name_zh": "在复向量空间上，迹等于特征值之和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then tr 𝑇 equals the sum of the eigenvalues of 𝑇, with each eigenvalue included as many times as its multiplicity.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉).那么 tr 𝑇等于𝑇的特征值之和，其中各特征值出现次数等于其重 数."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Then tr 𝑇 equals the sum of the eigenvalues of 𝑇, with each eigenvalue included as many times as its multiplicity.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉).那么 tr 𝑇等于𝑇的特征值之和，其中各特征值出现次数等于其重 数."
    },
    {
      "id": "8.54",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.54",
      "name_en": "trace and characteristic polynomial",
      "name_zh": "迹与特征多项式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Let 𝑛 = dim 𝑉. Then tr 𝑇 equals the negative of the coefficient of 𝑧<sub>𝑛</sub>−1 in the characteristic polynomial of 𝑇. Operators 329",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉).令 𝑛 = dim 𝑉.那么 tr 𝑇 等于 𝑇 的特征多项式中 𝑧<sub>𝑛</sub>−1 项的系数的 相反数. 下面结论给出了内积空间上算子的迹的一个很漂亮的公式."
        }
      ],
      "note": {
        "en": "The next result gives a nice formula for the trace of an operator on an inner product space.",
        "zh": ""
      },
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ L(𝑉). Let 𝑛 = dim 𝑉. Then tr 𝑇 equals the negative of the coefficient of 𝑧𝑛−1 in the characteristic polynomial of 𝑇. Operators 329 The next result gives a nice formula for the trace of an operator on an inner product space.",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉).令 𝑛 = dim 𝑉.那么 tr 𝑇 等于 𝑇 的特征多项式中 𝑧𝑛−1 项的系数的 相反数. 下面结论给出了内积空间上算子的迹的一个很漂亮的公式."
    },
    {
      "id": "8.55",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.55",
      "name_en": "trace on an inner product space",
      "name_zh": "内积空间上的迹",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is an inner product space, 𝑇 ∈ L(𝑉), and 𝑒<sub>1</sub>,..., 𝑒<sub>𝑛</sub> is an orthonor- mal basis of 𝑉. Then",
          "zh": "设𝑉 是内积空间，𝑇 ∈ L(𝑉)，𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 是𝑉 的规范正交基.则 tr 𝑇 = ⟨𝑇𝑒<sub>1</sub>,𝑒<sub>1</sub>⟩+···+⟨𝑇𝑒<sub>𝑛</sub>,𝑒<sub>𝑛</sub>⟩."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is an inner product space, 𝑇 ∈ L(𝑉), and 𝑒1,..., 𝑒𝑛 is an orthonor- mal basis of 𝑉. Then",
      "statement_zh": "设𝑉 是内积空间，𝑇 ∈ L(𝑉)，𝑒1,…,𝑒𝑛 是𝑉 的规范正交基.则 tr 𝑇 = ⟨𝑇𝑒1,𝑒1⟩+···+⟨𝑇𝑒𝑛,𝑒𝑛⟩."
    },
    {
      "id": "8.56",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.56",
      "name_en": "trace is linear",
      "name_zh": "迹是线性的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The function tr∶ L(𝑉) → 𝐅 is a linear functional on L(𝑉) such that tr(𝑆𝑇) = tr(𝑇𝑆) for all 𝑆, 𝑇 ∈ L(𝑉).",
          "zh": "函数 tr : L(𝑉) → F 是 L(𝑉) 上的线性泛函，且使 tr(𝑆𝑇) = tr(𝑇𝑆) 对所有 𝑆,𝑇 ∈ L(𝑉) 都成立."
        }
      ],
      "note": null,
      "statement_en": "The function tr∶ L(𝑉) → 𝐅 is a linear functional on L(𝑉) such that tr(𝑆𝑇) = tr(𝑇𝑆) for all 𝑆, 𝑇 ∈ L(𝑉).",
      "statement_zh": "函数 tr : L(𝑉) → F 是 L(𝑉) 上的线性泛函，且使 tr(𝑆𝑇) = tr(𝑇𝑆) 对所有 𝑆,𝑇 ∈ L(𝑉) 都成立."
    },
    {
      "id": "8.57",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.57",
      "name_en": "identity operator is not the difference of",
      "name_zh": "恒等算子不等于 𝑆𝑇 与 𝑇 𝑆 之差",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑆𝑇 and 𝑇𝑆 There do not exist operators 𝑆, 𝑇 ∈ L(𝑉) such that 𝑆𝑇 − 𝑇𝑆 = 𝐼.",
          "zh": "不存在使得 𝑆𝑇 −𝑇𝑆 = 𝐼 成立的算子 𝑆,𝑇 ∈ L(𝑉)."
        }
      ],
      "note": null,
      "statement_en": "𝑆𝑇 and 𝑇𝑆 There do not exist operators 𝑆, 𝑇 ∈ L(𝑉) such that 𝑆𝑇 − 𝑇𝑆 = 𝐼.",
      "statement_zh": "不存在使得 𝑆𝑇 −𝑇𝑆 = 𝐼 成立的算子 𝑆,𝑇 ∈ L(𝑉)."
    },
    {
      "id": "9.1",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.1",
      "name_en": "bilinear form",
      "name_zh": "双线性型",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear form on 𝑉 is a function 𝛽 ∶ 𝑉 × 𝑉 → 𝐅 such that 𝑣 ↦ 𝛽(𝑣,𝑢) and 𝑣 ↦ 𝛽(𝑢,𝑣) are both linear functionals on 𝑉 for every 𝑢 ∈ 𝑉. For example, if 𝑉 is a real inner prod- uct space, then the function that takes an ordered pair (𝑢, 𝑣) ∈ 𝑉 × 𝑉 to ⟨𝑢, 𝑣⟩ is a bilinear form on 𝑉. If 𝑉 is a nonzero complex inner product space, then this function is not a bilinear form because terminology than bilinear form, which the inner product is not linear in the sec- unfortunately has become standard. ond slot (complex scalars come out of the second slot as their complex conjugates). If 𝐅 = 𝐑, then a bilinear form differs from an inner product in that an inner product requires symmetry [meaning that 𝛽(𝑣, 𝑤) = 𝛽(𝑤, 𝑣) for all 𝑣, 𝑤 ∈ 𝑉] and positive definiteness [meaning that 𝛽(𝑣, 𝑣) &gt; 0 for all 𝑣 ∈ 𝑉\\{0}], but these properties are not required for a bilinear form.",
          "zh": "𝑉 上的一个双线性型是一个函数 𝛽 : 𝑉 × 𝑉 → F，该函数满足，对于所有 𝑢 ∈ 𝑉 ， 都是 𝑉 上的线性泛函. 𝑣 ↦→ 𝛽(𝑣,𝑢) 与 𝑣 ↦→ 𝛽(𝑢,𝑣) 例如，若 𝑉 是实内积空间，那么将有序 对 (𝑢,𝑣) ∈ 𝑉 ×𝑉 对应到 ⟨𝑢,𝑣⟩ 的函数就是𝑉 上的双线性型.若 𝑉 是非零复内积空间，那 么这个函数就不是双线性型，因为内积在第 二个位置上不是线性的(第二个位置上的复 数被提出时会变为其复共轭). 回忆一下，上述定义中使用的术语“线性泛 函”，意为映射至标量域 F 的线性函数.因 而，术语“双线性泛函”比“双线性型”与 之更具有一致性.不幸的是，后者已经成为 标准用法了. 若 F = R，那么双线性型与内积的不同之处在于，内积需要具备对称性【意即对所有 𝑣, 𝑤 ∈ 𝑉，𝛽(𝑣, 𝑤) = 𝛽(𝑤, 𝑣)】和正定性【意即对所有 𝑣 ∈ 𝑉\\{0}，𝛽(𝑣, 𝑣) &gt; 0】，但是双线性型 不需要具备这些性质."
        }
      ],
      "note": null,
      "statement_en": "A bilinear form on 𝑉 is a function 𝛽 ∶ 𝑉 × 𝑉 → 𝐅 such that 𝑣 ↦ 𝛽(𝑣,𝑢) and 𝑣 ↦ 𝛽(𝑢,𝑣) are both linear functionals on 𝑉 for every 𝑢 ∈ 𝑉. For example, if 𝑉 is a real inner prod- uct space, then the function that takes an ordered pair (𝑢, 𝑣) ∈ 𝑉 × 𝑉 to ⟨𝑢, 𝑣⟩ is a bilinear form on 𝑉. If 𝑉 is a nonzero complex inner product space, then this function is not a bilinear form because terminology than bilinear form, which the inner product is not linear in the sec- unfortunately has become standard. ond slot (complex scalars come out of the second slot as their complex conjugates). If 𝐅 = 𝐑, then a bilinear form differs from an inner product in that an inner product requires symmetry [meaning that 𝛽(𝑣, 𝑤) = 𝛽(𝑤, 𝑣) for all 𝑣, 𝑤 ∈ 𝑉] and positive definiteness [meaning that 𝛽(𝑣, 𝑣) &gt; 0 for all 𝑣 ∈ 𝑉\\{0}], but these properties are not required for a bilinear form.",
      "statement_zh": "𝑉 上的一个双线性型是一个函数 𝛽 : 𝑉 × 𝑉 → F，该函数满足，对于所有 𝑢 ∈ 𝑉 ， 都是 𝑉 上的线性泛函. 𝑣 ↦→ 𝛽(𝑣,𝑢) 与 𝑣 ↦→ 𝛽(𝑢,𝑣) 例如，若 𝑉 是实内积空间，那么将有序 对 (𝑢,𝑣) ∈ 𝑉 ×𝑉 对应到 ⟨𝑢,𝑣⟩ 的函数就是𝑉 上的双线性型.若 𝑉 是非零复内积空间，那 么这个函数就不是双线性型，因为内积在第 二个位置上不是线性的(第二个位置上的复 数被提出时会变为其复共轭). 回忆一下，上述定义中使用的术语“线性泛 函”，意为映射至标量域 F 的线性函数.因 而，术语“双线性泛函”比“双线性型”与 之更具有一致性.不幸的是，后者已经成为 标准用法了. 若 F = R，那么双线性型与内积的不同之处在于，内积需要具备对称性【意即对所有 𝑣, 𝑤 ∈ 𝑉，𝛽(𝑣, 𝑤) = 𝛽(𝑤, 𝑣)】和正定性【意即对所有 𝑣 ∈ 𝑉\\{0}，𝛽(𝑣, 𝑣) &gt; 0】，但是双线性型 不需要具备这些性质."
    },
    {
      "id": "9.3",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.3",
      "name_en": "𝑉(2)",
      "name_zh": "𝑉",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The set of bilinear forms on 𝑉 is denoted by 𝑉(2). With the usual operations of addition and scalar multiplication of functions, 𝑉(2) is a vector space. For 𝑇 an operator on an 𝑛-dimensional vector space 𝑉 and a basis 𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub> of 𝑉, we used an 𝑛-by-𝑛 matrix to provide information about 𝑇. We now do the same thing for bilinear forms on 𝑉.",
          "zh": "𝑉 上的双线性型构成的集合记为 𝑉 (2). 在通常的函数加法与标量乘法运算下，𝑉(2) 是向量空间. 对于𝑛维向量空间𝑉 上的算子𝑇 和𝑉 的基𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>，我们用一个𝑛×𝑛矩阵来给出𝑇 的 信息.现在我们对 𝑉 上的双线性型也采取同样做法."
        }
      ],
      "note": null,
      "statement_en": "The set of bilinear forms on 𝑉 is denoted by 𝑉(2). With the usual operations of addition and scalar multiplication of functions, 𝑉(2) is a vector space. For 𝑇 an operator on an 𝑛-dimensional vector space 𝑉 and a basis 𝑒1, …, 𝑒𝑛 of 𝑉, we used an 𝑛-by-𝑛 matrix to provide information about 𝑇. We now do the same thing for bilinear forms on 𝑉.",
      "statement_zh": "𝑉 上的双线性型构成的集合记为 𝑉 (2). 在通常的函数加法与标量乘法运算下，𝑉(2) 是向量空间. 对于𝑛维向量空间𝑉 上的算子𝑇 和𝑉 的基𝑒1,…,𝑒𝑛，我们用一个𝑛×𝑛矩阵来给出𝑇 的 信息.现在我们对 𝑉 上的双线性型也采取同样做法."
    },
    {
      "id": "9.4",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.4",
      "name_en": "matrix of a bilinear form, M(𝛽)",
      "name_zh": "双线性型的矩阵(matrix of a bilinear form)、M(𝛽) 设𝛽是𝑉上的双线性型，𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 是𝑉的基.𝛽关于该基的矩阵是𝑛×𝑛矩阵 M(𝛽)， 其中第 𝑗 行第 𝑘 列中的元素 M(𝛽)𝑗,𝑘 由下式给出",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝛽 is a bilinear form on 𝑉 and 𝑒<sub>1</sub>,...,𝑒<sub>𝑛</sub> is a basis of 𝑉. The matrix of 𝛽 with respect to this basis is the 𝑛-by-𝑛 matrix M(𝛽) whose entry M(𝛽)𝑗,𝑘 in row 𝑗, column 𝑘 is given by If the basis 𝑒<sub>1</sub>,..., 𝑒<sub>𝑛</sub> is M(𝛽, (𝑒<sub>1</sub>,..., 𝑒<sub>𝑛</sub>)) is used. M(𝛽)𝑗,𝑘 = 𝛽(𝑒<sub>𝑗</sub>,𝑒<sub>𝑘</sub>). not clear from the context, then the notation ecall that 𝐅<sup>𝑛</sup>,𝑛 denotes the vector space of 𝑛-by-𝑛 matrices with entries in 𝐅 and that dim 𝐅<sup>𝑛</sup>,𝑛 = 𝑛2 (see",
          "zh": "M(𝛽)𝑗,𝑘 = 𝛽(𝑒<sub>𝑗</sub>,𝑒<sub>𝑘</sub>). 如果从上下文不能明确基𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 的选取，就用 M\u0000𝛽,(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>)\u0001 这个记号. 回忆一下，F<sup>𝑛</sup>,𝑛 代表由元素属于 F 的 𝑛 × 𝑛 矩阵构成的向量空间，且有 dim F<sup>𝑛</sup>,𝑛 = 𝑛2(见 3.39 和 3.40)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝛽 is a bilinear form on 𝑉 and 𝑒1,...,𝑒𝑛 is a basis of 𝑉. The matrix of 𝛽 with respect to this basis is the 𝑛-by-𝑛 matrix M(𝛽) whose entry M(𝛽)𝑗,𝑘 in row 𝑗, column 𝑘 is given by If the basis 𝑒1,..., 𝑒𝑛 is M(𝛽, (𝑒1,..., 𝑒𝑛)) is used. M(𝛽)𝑗,𝑘 = 𝛽(𝑒𝑗,𝑒𝑘). not clear from the context, then the notation ecall that 𝐅𝑛,𝑛 denotes the vector space of 𝑛-by-𝑛 matrices with entries in 𝐅 and that dim 𝐅𝑛,𝑛 = 𝑛2 (see",
      "statement_zh": "M(𝛽)𝑗,𝑘 = 𝛽(𝑒𝑗,𝑒𝑘). 如果从上下文不能明确基𝑒1,…,𝑒𝑛 的选取，就用 M\u0000𝛽,(𝑒1,…,𝑒𝑛)\u0001 这个记号. 回忆一下，F𝑛,𝑛 代表由元素属于 F 的 𝑛 × 𝑛 矩阵构成的向量空间，且有 dim F𝑛,𝑛 = 𝑛2(见 3.39 和 3.40)."
    },
    {
      "id": "9.5",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.5",
      "name_en": "dim 𝑉(2) = (dim 𝑉)2",
      "name_zh": "dim 𝑉(2) = (dim 𝑉)2",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑒<sub>1</sub>,..., 𝑒<sub>𝑛</sub> is a basis of 𝑉. Then the map 𝛽 ↦ M(𝛽) is an isomorphism of 𝑉(2) onto 𝐅<sup>𝑛</sup>,𝑛. Furthermore, dim 𝑉(2) = (dim 𝑉)2.",
          "zh": "设𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 是𝑉的基.那么映射𝛽↦→M(𝛽)是将𝑉(2) 映成 F<sup>𝑛</sup>,𝑛 的同构.此外，dim 𝑉(2) = (dim 𝑉)2."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑒1,..., 𝑒𝑛 is a basis of 𝑉. Then the map 𝛽 ↦ M(𝛽) is an isomorphism of 𝑉(2) onto 𝐅𝑛,𝑛. Furthermore, dim 𝑉(2) = (dim 𝑉)2.",
      "statement_zh": "设𝑒1,…,𝑒𝑛 是𝑉的基.那么映射𝛽↦→M(𝛽)是将𝑉(2) 映成 F𝑛,𝑛 的同构.此外，dim 𝑉(2) = (dim 𝑉)2."
    },
    {
      "id": "9.6",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.6",
      "name_en": "composition of a bilinear form and an operator",
      "name_zh": "双线性型与算子的复合",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝛽 is a bilinear form on 𝑉 and 𝑇 ∈ L(𝑉). Define bilinear forms 𝛼 and 𝜌 on 𝑉 by Let 𝑒<sub>1</sub>,...,𝑒<sub>𝑛</sub> be a basis of 𝑉. Then",
          "zh": "设 𝛽 是 𝑉 上的双线性型，𝑇 ∈ L(𝑉).定义 𝑉 上的双线性型 𝛼 和 𝜌 为 𝛼(𝑢,𝑣) = 𝛽(𝑢,𝑇𝑣) 与 𝜌(𝑢,𝑣) = 𝛽(𝑇𝑢,𝑣). 令𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> 是𝑉的基.那么 M(𝛼) = M(𝛽)M(𝑇) 且 M(𝜌) = M(𝑇)tM(𝛽)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝛽 is a bilinear form on 𝑉 and 𝑇 ∈ L(𝑉). Define bilinear forms 𝛼 and 𝜌 on 𝑉 by Let 𝑒1,...,𝑒𝑛 be a basis of 𝑉. Then",
      "statement_zh": "设 𝛽 是 𝑉 上的双线性型，𝑇 ∈ L(𝑉).定义 𝑉 上的双线性型 𝛼 和 𝜌 为 𝛼(𝑢,𝑣) = 𝛽(𝑢,𝑇𝑣) 与 𝜌(𝑢,𝑣) = 𝛽(𝑇𝑢,𝑣). 令𝑒1,…,𝑒𝑛 是𝑉的基.那么 M(𝛼) = M(𝛽)M(𝑇) 且 M(𝜌) = M(𝑇)tM(𝛽)."
    },
    {
      "id": "9.7",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.7",
      "name_en": "change-of-basis formula",
      "name_zh": "换基公式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝛽 ∈ 𝑉(2). Suppose 𝑒<sub>1</sub>,...,𝑒<sub>𝑛</sub> and 𝑓<sub>1</sub>,..., 𝑓<sub>𝑛</sub> are bases of 𝑉. Let 𝐴 = M(𝛽,(𝑒<sub>1</sub>,...,𝑒<sub>𝑛</sub>)) and 𝐵 = M(𝛽,(𝑓<sub>1</sub>,..., 𝑓<sub>𝑛</sub>)) and 𝐶 = M(𝐼,(𝑒<sub>1</sub>,...,𝑒<sub>𝑛</sub>),(𝑓<sub>1</sub>,..., 𝑓<sub>𝑛</sub>)). Then 𝐴 = 𝐶t𝐵𝐶.",
          "zh": "设 𝛽 ∈ 𝑉 (2).设 𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub> 和 𝑓<sub>1</sub>, …, 𝑓<sub>𝑛</sub> 是 𝑉 的基.令 𝐴 = M\u0000𝛽,(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>)\u0001 且 𝐵 = M\u0000𝛽,(𝑓<sub>1</sub>,…,𝑓<sub>𝑛</sub>)\u0001 以及𝐶 = M\u0000𝐼,(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>),(𝑓<sub>1</sub>,…, 𝑓<sub>𝑛</sub>)\u0001.那么 = 𝛽 𝑒<sub>𝑗</sub>, 𝑚 = 1 ∑𝑛 𝑚 = 1 = \u0000M(𝛽)M(𝑇)\u0001. 于是 M(𝛼) = M(𝛽)M(𝑇).类似可证 M(𝜌) = M(𝑇)tM(𝛽). 𝑗,𝑘 𝐴 = 𝐶 t 𝐵𝐶."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝛽 ∈ 𝑉(2). Suppose 𝑒1,...,𝑒𝑛 and 𝑓1,..., 𝑓𝑛 are bases of 𝑉. Let 𝐴 = M(𝛽,(𝑒1,...,𝑒𝑛)) and 𝐵 = M(𝛽,(𝑓1,..., 𝑓𝑛)) and 𝐶 = M(𝐼,(𝑒1,...,𝑒𝑛),(𝑓1,..., 𝑓𝑛)). Then 𝐴 = 𝐶t𝐵𝐶.",
      "statement_zh": "设 𝛽 ∈ 𝑉 (2).设 𝑒1, …, 𝑒𝑛 和 𝑓1, …, 𝑓𝑛 是 𝑉 的基.令 𝐴 = M\u0000𝛽,(𝑒1,…,𝑒𝑛)\u0001 且 𝐵 = M\u0000𝛽,(𝑓1,…,𝑓𝑛)\u0001 以及𝐶 = M\u0000𝐼,(𝑒1,…,𝑒𝑛),(𝑓1,…, 𝑓𝑛)\u0001.那么 = 𝛽 𝑒𝑗, 𝑚 = 1 ∑𝑛 𝑚 = 1 = \u0000M(𝛽)M(𝑇)\u0001. 于是 M(𝛼) = M(𝛽)M(𝑇).类似可证 M(𝜌) = M(𝑇)tM(𝛽). 𝑗,𝑘 𝐴 = 𝐶 t 𝐵𝐶."
    },
    {
      "id": "9.9",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.9",
      "name_en": "symmetric bilinear form, 𝑉(2) sym",
      "name_zh": "对称双线性型(symmetric bilinear form)、𝑉 (2) sym",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear form 𝜌 ∈ 𝑉(2) is called symmetric if 𝜌(𝑢, 𝑤) = 𝜌(𝑤, 𝑢) for all 𝑢, 𝑤 ∈ 𝑉. The set of symmetric bilinear forms on 𝑉 is denoted by 𝑉(2). sym",
          "zh": "称双线性型 𝜌 ∈ 𝑉 (2) 是对称的，若 对所有 𝑢, 𝑤 ∈ 𝑉 都成立. 𝑉 上对称双线性型构成的集合记作 𝑉 (2)."
        }
      ],
      "note": null,
      "statement_en": "A bilinear form 𝜌 ∈ 𝑉(2) is called symmetric if 𝜌(𝑢, 𝑤) = 𝜌(𝑤, 𝑢) for all 𝑢, 𝑤 ∈ 𝑉. The set of symmetric bilinear forms on 𝑉 is denoted by 𝑉(2). sym",
      "statement_zh": "称双线性型 𝜌 ∈ 𝑉 (2) 是对称的，若 对所有 𝑢, 𝑤 ∈ 𝑉 都成立. 𝑉 上对称双线性型构成的集合记作 𝑉 (2)."
    },
    {
      "id": "9.11",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.11",
      "name_en": "symmetric matrix",
      "name_zh": "对称矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A square matrix 𝐴 is called symmetric if it equals its transpose. An operator on 𝑉 may have a symmetric matrix with respect to some but not all bases of 𝑉. In contrast,",
          "zh": "若方阵 𝐴 与其转置相等，则称 𝐴 是对称的. 𝑉 上的算子可能关于 𝑉 的某些基(但不是所有基)具有对称矩阵.相比之下，下面结论表 明，𝑉 上的双线性型要么关于 𝑉 的所有基都具有对称矩阵，要么关于 𝑉 的所有基都不具有对 称矩阵."
        }
      ],
      "note": {
        "en": "the next result shows that a bilinear form on 𝑉 has a sym- metric matrix with respect to either all bases of 𝑉 or with respect to no bases of 𝑉.",
        "zh": ""
      },
      "statement_en": "A square matrix 𝐴 is called symmetric if it equals its transpose. An operator on 𝑉 may have a symmetric matrix with respect to some but not all bases of 𝑉. In contrast, the next result shows that a bilinear form on 𝑉 has a sym- metric matrix with respect to either all bases of 𝑉 or with respect to no bases of 𝑉.",
      "statement_zh": "若方阵 𝐴 与其转置相等，则称 𝐴 是对称的. 𝑉 上的算子可能关于 𝑉 的某些基(但不是所有基)具有对称矩阵.相比之下，下面结论表 明，𝑉 上的双线性型要么关于 𝑉 的所有基都具有对称矩阵，要么关于 𝑉 的所有基都不具有对 称矩阵."
    },
    {
      "id": "9.12",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.12",
      "name_en": "symmetric bilinear forms are diagonalizable Suppose",
      "name_zh": "对称双线性型是可对角化的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose ρ ∈ V<sup>(2)</sup>. Then the following are equivalent.",
          "zh": "假设 ρ ∈ V<sup>(2)</sup>。那么下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) ρ is a symmetric bilinear form on V.",
          "zh": "(a) ρ 是 V 上的对称双线性型。"
        },
        {
          "t": "bullet",
          "en": "(b) M(ρ, (e<sub>1</sub>, …, e<sub>n</sub>)) is a symmetric matrix for every basis e<sub>1</sub>, …, e<sub>n</sub> of V.",
          "zh": "(b) 对 V 的每个基 e<sub>1</sub>, …, e<sub>n</sub>，M(ρ, (e<sub>1</sub>, …, e<sub>n</sub>)) 都是对称矩阵。"
        },
        {
          "t": "bullet",
          "en": "(c) M(ρ, (e<sub>1</sub>, …, e<sub>n</sub>)) is a diagonal matrix for some basis e<sub>1</sub>, …, e<sub>n</sub> of V.",
          "zh": "(c) 对 V 的某个基 e<sub>1</sub>, …, e<sub>n</sub>，M(ρ, (e<sub>1</sub>, …, e<sub>n</sub>)) 是对角矩阵。"
        }
      ],
      "note": null,
      "statement_en": "Suppose ρ ∈ V(2). Then the following are equivalent. (a) ρ is a symmetric bilinear form on V. (b) M(ρ, (e1, …, en)) is a symmetric matrix for every basis e1, …, en of V. (c) M(ρ, (e1, …, en)) is a diagonal matrix for some basis e1, …, en of V.",
      "statement_zh": "假设 ρ ∈ V(2)。那么下列条件等价。 (a) ρ 是 V 上的对称双线性型。 (b) 对 V 的每个基 e1, …, en，M(ρ, (e1, …, en)) 都是对称矩阵。 (c) 对 V 的某个基 e1, …, en，M(ρ, (e1, …, en)) 是对角矩阵。"
    },
    {
      "id": "9.13",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.13",
      "name_en": "diagonalization of a symmetric bilinear form by an orthonormal basis Suppose",
      "name_zh": "用规范正交基将对称双线性型对角化",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉 is a real inner product space and 𝜌 is a symmetric bilinear form on 𝑉. Then 𝜌 has a diagonal matrix with respect to some orthonormal basis of 𝑉.",
          "zh": "设 𝑉 是实内积空间且 𝜌 是 𝑉 上的对称双线性型.那么 𝜌 关于 𝑉 的某个规范正交基有对 角矩阵."
        }
      ],
      "note": null,
      "statement_en": "𝑉 is a real inner product space and 𝜌 is a symmetric bilinear form on 𝑉. Then 𝜌 has a diagonal matrix with respect to some orthonormal basis of 𝑉.",
      "statement_zh": "设 𝑉 是实内积空间且 𝜌 是 𝑉 上的对称双线性型.那么 𝜌 关于 𝑉 的某个规范正交基有对 角矩阵."
    },
    {
      "id": "9.14",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.14",
      "name_en": "alternating bilinear form, 𝑉(2) alt",
      "name_zh": "交错双线性型(alternating bilinear form)、𝑉 (2) alt",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear form 𝛼 ∈ 𝑉(2) is called alternating if 𝛼(𝑣, 𝑣) = 0 for all 𝑣 ∈ 𝑉. The set of alternating bilinear forms on 𝑉 is denoted by 𝑉(2). alt",
          "zh": "称双线性型 𝛼 ∈ 𝑉(2) 是交错的，若对于所有 𝑣 ∈ 𝑉 有 𝛼(𝑣, 𝑣) = 0. 𝑉 上交错双线性型所构成的集合记为 𝑉 (2). alt"
        }
      ],
      "note": null,
      "statement_en": "A bilinear form 𝛼 ∈ 𝑉(2) is called alternating if 𝛼(𝑣, 𝑣) = 0 for all 𝑣 ∈ 𝑉. The set of alternating bilinear forms on 𝑉 is denoted by 𝑉(2). alt",
      "statement_zh": "称双线性型 𝛼 ∈ 𝑉(2) 是交错的，若对于所有 𝑣 ∈ 𝑉 有 𝛼(𝑣, 𝑣) = 0. 𝑉 上交错双线性型所构成的集合记为 𝑉 (2). alt"
    },
    {
      "id": "9.16",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.16",
      "name_en": "characterization of alternating bilinear forms",
      "name_zh": "交错双线性型的刻画",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝛼 on 𝑉 is alternating if and only if 𝛼(𝑢, 𝑤) = −𝛼(𝑤, 𝑢) for all 𝑢, 𝑤 ∈ 𝑉.",
          "zh": "𝑉 上的双线性型 𝛼 是交错的，当且仅当 𝛼(𝑢, 𝑤) = −𝛼(𝑤, 𝑢) 对所有 𝑢, 𝑤 ∈ 𝑉 都成立."
        }
      ],
      "note": null,
      "statement_en": "𝛼 on 𝑉 is alternating if and only if 𝛼(𝑢, 𝑤) = −𝛼(𝑤, 𝑢) for all 𝑢, 𝑤 ∈ 𝑉.",
      "statement_zh": "𝑉 上的双线性型 𝛼 是交错的，当且仅当 𝛼(𝑢, 𝑤) = −𝛼(𝑤, 𝑢) 对所有 𝑢, 𝑤 ∈ 𝑉 都成立."
    },
    {
      "id": "9.18",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.18",
      "name_en": "quadratic form associated with a bilinear form, 𝑞𝛽",
      "name_zh": "关联于双线性型的二次型(quadratic form associated with a bilinear form)、𝑞𝛽",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝛽 a bilinear form on 𝑉, define a function 𝑞𝛽 ∶ 𝑉 → 𝐅 by 𝑞𝛽(𝑣) = 𝛽(𝑣,𝑣). A function 𝑞 ∶ 𝑉 → 𝐅 is called a quadratic form on 𝑉 if there exists a bilinear form 𝛽 on 𝑉 such that 𝑞 = 𝑞𝛽. Note that if 𝛽 is a bilinear form, then 𝑞𝛽 = 0 if and only if 𝛽 is alternating.",
          "zh": "对于𝑉上的双线性型𝛽，定义函数𝑞𝛽 :𝑉→F 为𝑞𝛽(𝑣) = 𝛽(𝑣,𝑣).称函数𝑞:𝑉→F 是 𝑉 上的二次型，如果存在 𝑉 上的双线性型 𝛽 使得 𝑞 = 𝑞𝛽. 注意，如果 𝛽 是双线性型，那么 𝑞𝛽 = 0 当且仅当 𝛽 是交错的."
        }
      ],
      "note": null,
      "statement_en": "For 𝛽 a bilinear form on 𝑉, define a function 𝑞𝛽 ∶ 𝑉 → 𝐅 by 𝑞𝛽(𝑣) = 𝛽(𝑣,𝑣). A function 𝑞 ∶ 𝑉 → 𝐅 is called a quadratic form on 𝑉 if there exists a bilinear form 𝛽 on 𝑉 such that 𝑞 = 𝑞𝛽. Note that if 𝛽 is a bilinear form, then 𝑞𝛽 = 0 if and only if 𝛽 is alternating.",
      "statement_zh": "对于𝑉上的双线性型𝛽，定义函数𝑞𝛽 :𝑉→F 为𝑞𝛽(𝑣) = 𝛽(𝑣,𝑣).称函数𝑞:𝑉→F 是 𝑉 上的二次型，如果存在 𝑉 上的双线性型 𝛽 使得 𝑞 = 𝑞𝛽. 注意，如果 𝛽 是双线性型，那么 𝑞𝛽 = 0 当且仅当 𝛽 是交错的."
    },
    {
      "id": "9.20",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.20",
      "name_en": "quadratic forms on",
      "name_zh": "F<sup>𝑛</sup> 上的二次型",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐅<sup>𝑛</sup> Suppose 𝑛 is a positive integer and 𝑞 is a function from 𝐅<sup>𝑛</sup> to 𝐅. Then 𝑞 is a quadratic form on 𝐅<sup>𝑛</sup> if and only if there exist numbers 𝐴𝑗,𝑘 ∈ 𝐅 for 𝑗,𝑘 ∈ {1,…,𝑛} such that 𝑛𝑛 𝑞(𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) = ∑ ∑ 𝐴𝑗,𝑘𝑥<sub>𝑗</sub>𝑥<sub>𝑘</sub> 𝑘 = 1 𝑗 = 1 for all (𝑥<sub>1</sub>, …, 𝑥<sub>𝑛</sub>) ∈ 𝐅<sup>𝑛</sup>.",
          "zh": "设𝑛是正整数，𝑞是 F<sup>𝑛</sup> 到 F 的函数.那么𝑞是 F<sup>𝑛</sup> 上的二次型，当且仅当存在数𝐴𝑗,𝑘 ∈ F (𝑗,𝑘 ∈ {1,…,𝑛})使得 𝑞(𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) = 对所有 (𝑥<sub>1</sub>,…,𝑥<sub>𝑛</sub>) ∈ F<sup>𝑛</sup> 成立. ∑𝑛 ∑𝑛 𝑘 = 1 𝑗 = 1 𝐴𝑗,𝑘𝑥<sub>𝑗</sub>𝑥<sub>𝑘</sub>"
        }
      ],
      "note": null,
      "statement_en": "𝐅𝑛 Suppose 𝑛 is a positive integer and 𝑞 is a function from 𝐅𝑛 to 𝐅. Then 𝑞 is a quadratic form on 𝐅𝑛 if and only if there exist numbers 𝐴𝑗,𝑘 ∈ 𝐅 for 𝑗,𝑘 ∈ {1,…,𝑛} such that 𝑛𝑛 𝑞(𝑥1,…,𝑥𝑛) = ∑ ∑ 𝐴𝑗,𝑘𝑥𝑗𝑥𝑘 𝑘 = 1 𝑗 = 1 for all (𝑥1, …, 𝑥𝑛) ∈ 𝐅𝑛.",
      "statement_zh": "设𝑛是正整数，𝑞是 F𝑛 到 F 的函数.那么𝑞是 F𝑛 上的二次型，当且仅当存在数𝐴𝑗,𝑘 ∈ F (𝑗,𝑘 ∈ {1,…,𝑛})使得 𝑞(𝑥1,…,𝑥𝑛) = 对所有 (𝑥1,…,𝑥𝑛) ∈ F𝑛 成立. ∑𝑛 ∑𝑛 𝑘 = 1 𝑗 = 1 𝐴𝑗,𝑘𝑥𝑗𝑥𝑘"
    },
    {
      "id": "9.21",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.21",
      "name_en": "characterizations of quadratic forms",
      "name_zh": "二次型的刻画",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose q : V → F is a function. The following are equivalent.",
          "zh": "假设 q : V → F 是一个函数。下列条件等价。"
        },
        {
          "t": "bullet",
          "en": "(a) q is a quadratic form.",
          "zh": "(a) q 是二次型。"
        },
        {
          "t": "bullet",
          "en": "(b) There exists a unique symmetric bilinear form ρ on V such that q = q<sub>ρ</sub>.",
          "zh": "(b) 存在 V 上唯一的对称双线性型 ρ 使得 q = q<sub>ρ</sub>。"
        }
      ],
      "note": null,
      "statement_en": "Suppose q : V → F is a function. The following are equivalent. (a) q is a quadratic form. (b) There exists a unique symmetric bilinear form ρ on V such that q = qρ.",
      "statement_zh": "假设 q : V → F 是一个函数。下列条件等价。 (a) q 是二次型。 (b) 存在 V 上唯一的对称双线性型 ρ 使得 q = qρ。"
    },
    {
      "id": "9.23",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.23",
      "name_en": "diagonalization of quadratic form",
      "name_zh": "二次型的对角化",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(b)",
          "zh": "(b) 若 F = R 且 𝑉 是内积空间，那么"
        },
        {
          "t": "bullet",
          "en": "(a)",
          "zh": "(a) 中的基可取为 𝑉 的规范正交基."
        }
      ],
      "note": null,
      "statement_en": "(b) (a)",
      "statement_zh": "(b) 若 F = R 且 𝑉 是内积空间，那么 (a) 中的基可取为 𝑉 的规范正交基."
    },
    {
      "id": "9.24",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.24",
      "name_en": "𝑉<sub>𝑚</sub>",
      "name_zh": "𝑉 𝑚",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑚 a positive integer, define 𝑉<sub>𝑚</sub> by 𝑉 𝑚 = 𝑉 ⏟× ⋯ × 𝑉. 𝑚 times Now we can define 𝑚-linear forms as a generalization of the bilinear forms that we discussed in the previous section.",
          "zh": "𝑉<sub>𝑚</sub> = 𝑉×···×𝑉. | {z } 𝑚个𝑉 (当其他位置的值固定时).这意味着，对每个 𝑘 ∈ {1,…,𝑚} 和所有 𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub> ∈ 𝑉， 函数 在上述定义中，表达式 𝛽(𝑢<sub>1</sub>, …, 𝑢<sub>𝑘</sub>−1, 𝑣, 𝑢<sub>𝑘</sub>+1, …, 𝑢<sub>𝑚</sub>) 在 𝑘 = 1 时表示 𝛽(𝑣, 𝑢<sub>2</sub>, …, 𝑢<sub>𝑚</sub>)，在 𝑘 = 𝑚 时表示 𝛽(𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub>−1,𝑣). 𝑉 上的 1 重线性型是 𝑉 上的线性泛函.𝑉 上的 2 重线性型是 𝑉 上的双线性型.你可验证， 带有通常的函数加法和标量乘法运算的𝑉(𝑚) 是向量空间."
        }
      ],
      "note": null,
      "statement_en": "For 𝑚 a positive integer, define 𝑉𝑚 by 𝑉 𝑚 = 𝑉 ⏟× ⋯ × 𝑉. 𝑚 times Now we can define 𝑚-linear forms as a generalization of the bilinear forms that we discussed in the previous section.",
      "statement_zh": "𝑉𝑚 = 𝑉×···×𝑉. | {z } 𝑚个𝑉 (当其他位置的值固定时).这意味着，对每个 𝑘 ∈ {1,…,𝑚} 和所有 𝑢1,…,𝑢𝑚 ∈ 𝑉， 函数 在上述定义中，表达式 𝛽(𝑢1, …, 𝑢𝑘−1, 𝑣, 𝑢𝑘+1, …, 𝑢𝑚) 在 𝑘 = 1 时表示 𝛽(𝑣, 𝑢2, …, 𝑢𝑚)，在 𝑘 = 𝑚 时表示 𝛽(𝑢1,…,𝑢𝑚−1,𝑣). 𝑉 上的 1 重线性型是 𝑉 上的线性泛函.𝑉 上的 2 重线性型是 𝑉 上的双线性型.你可验证， 带有通常的函数加法和标量乘法运算的𝑉(𝑚) 是向量空间."
    },
    {
      "id": "9.25",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.25",
      "name_en": "𝑚-linear form, 𝑉(𝑚), multilinear form",
      "name_zh": "𝑚 重线性型(𝑚-linear form)、𝑉 (𝑚) 、多重线性型",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "For 𝑚 a positive integer, an 𝑚-linear form on 𝑉 is a function 𝛽∶ 𝑉<sub>𝑚</sub> → 𝐅 that is linear in each slot when the other slots are held fixed. This means that for each 𝑘 ∈ {1,…,𝑚} and all 𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub> ∈ 𝑉, the function 𝑣 ↦ 𝛽(𝑢<sub>1</sub>,…,𝑢<sub>𝑘</sub>−1,𝑣,𝑢<sub>𝑘</sub>+1,…,𝑢<sub>𝑚</sub>) is a linear map from 𝑉 to 𝐅.",
          "zh": "𝑣 ↦→ 𝛽(𝑢<sub>1</sub>,…,𝑢<sub>𝑘</sub>−1,𝑣,𝑢<sub>𝑘</sub>+1,…,𝑢<sub>𝑚</sub>) 𝑉 上 𝑚 重线性型所构成的集合记作 𝑉 (𝑚). 是𝑉 到 F 的线性映射. 若函数 𝛽 是 𝑉 上的 𝑚 重线性型(𝑚 为正整数)，则称该函数为一个多重线性型. 𝛽(𝑣<sub>1</sub>, 𝑣<sub>2</sub>, 𝑣<sub>3</sub>, 𝑣<sub>4</sub>) = 𝛼(𝑣<sub>1</sub>, 𝑣<sub>2</sub>)𝜌(𝑣<sub>3</sub>, 𝑣<sub>4</sub>). 定义函数 𝛽 : \u0000L(𝑉)\u0001𝑚 → F 为 𝛽(𝑇<sup>1</sup>,…,𝑇<sup>𝑚</sup>) = tr(𝑇<sup>1</sup> ···𝑇<sup>𝑚</sup>). 那么 𝛽 是 L(𝑉) 上的 𝑚 重线性型. 现在，我们定义交错多重线性型.在我们向行列式定义进发之路上，它将发挥重要作用. 那么 𝛽 ∈ 𝑉(4). 290 s)、𝑉 (𝑚) alt 设 𝑚 是正整数. 对于𝑉上的𝑚重线性型𝛼，如果只要𝑉中向量组𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub> 满足对于某两个不同的 𝑗,𝑘 ∈ {1,…,𝑚}有𝑣<sub>𝑗</sub> = 𝑣<sub>𝑘</sub>，就有𝛼(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>) = 0，则称𝛼是交错的. 𝑉(𝑚) = {𝛼 ∈ 𝑉(𝑚) :𝛼是𝑉上的交错𝑚重线性型}. alt 你应自行验证𝑉(𝑚) 是𝑉(𝑚) 的子空间.交错2重线性型的例子见例.15.交错3重线性型 alt 的例子见"
        },
        {
          "t": "bullet",
          "en": "The set of 𝑚-linear forms on 𝑉 is denoted by 𝑉(𝑚).",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "A function 𝛽 is called a multilinear form on 𝑉 if it is an 𝑚-linear form on 𝑉 for some positive integer 𝑚. In the definition above, the expression 𝛽(𝑢<sub>1</sub>, …, 𝑢<sub>𝑘</sub>−1, 𝑣, 𝑢<sub>𝑘</sub>+1, …, 𝑢<sub>𝑚</sub>) means 𝛽(𝑣,𝑢<sub>2</sub>,…,𝑢<sub>𝑚</sub>) if 𝑘 = 1 and means 𝛽(𝑢<sub>1</sub>,…,𝑢<sub>𝑚</sub>−1,𝑣) if 𝑘 = 𝑚. A 1-linear form on 𝑉 is a linear functional on 𝑉. A 2-linear form on 𝑉 is a bilinear form on 𝑉. You can verify that with the usual addition and scalar multiplication of functions, 𝑉(𝑚) is a vector space.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "For 𝑚 a positive integer, an 𝑚-linear form on 𝑉 is a function 𝛽∶ 𝑉𝑚 → 𝐅 that is linear in each slot when the other slots are held fixed. This means that for each 𝑘 ∈ {1,…,𝑚} and all 𝑢1,…,𝑢𝑚 ∈ 𝑉, the function 𝑣 ↦ 𝛽(𝑢1,…,𝑢𝑘−1,𝑣,𝑢𝑘+1,…,𝑢𝑚) is a linear map from 𝑉 to 𝐅. The set of 𝑚-linear forms on 𝑉 is denoted by 𝑉(𝑚). A function 𝛽 is called a multilinear form on 𝑉 if it is an 𝑚-linear form on 𝑉 for some positive integer 𝑚. In the definition above, the expression 𝛽(𝑢1, …, 𝑢𝑘−1, 𝑣, 𝑢𝑘+1, …, 𝑢𝑚) means 𝛽(𝑣,𝑢2,…,𝑢𝑚) if 𝑘 = 1 and means 𝛽(𝑢1,…,𝑢𝑚−1,𝑣) if 𝑘 = 𝑚. A 1-linear form on 𝑉 is a linear functional on 𝑉. A 2-linear form on 𝑉 is a bilinear form on 𝑉. You can verify that with the usual addition and scalar multiplication of functions, 𝑉(𝑚) is a vector space.",
      "statement_zh": "𝑣 ↦→ 𝛽(𝑢1,…,𝑢𝑘−1,𝑣,𝑢𝑘+1,…,𝑢𝑚) 𝑉 上 𝑚 重线性型所构成的集合记作 𝑉 (𝑚). 是𝑉 到 F 的线性映射. 若函数 𝛽 是 𝑉 上的 𝑚 重线性型(𝑚 为正整数)，则称该函数为一个多重线性型. 𝛽(𝑣1, 𝑣2, 𝑣3, 𝑣4) = 𝛼(𝑣1, 𝑣2)𝜌(𝑣3, 𝑣4). 定义函数 𝛽 : \u0000L(𝑉)\u0001𝑚 → F 为 𝛽(𝑇1,…,𝑇𝑚) = tr(𝑇1 ···𝑇𝑚). 那么 𝛽 是 L(𝑉) 上的 𝑚 重线性型. 现在，我们定义交错多重线性型.在我们向行列式定义进发之路上，它将发挥重要作用. 那么 𝛽 ∈ 𝑉(4). 290 s)、𝑉 (𝑚) alt 设 𝑚 是正整数. 对于𝑉上的𝑚重线性型𝛼，如果只要𝑉中向量组𝑣1,…,𝑣𝑚 满足对于某两个不同的 𝑗,𝑘 ∈ {1,…,𝑚}有𝑣𝑗 = 𝑣𝑘，就有𝛼(𝑣1,…,𝑣𝑚) = 0，则称𝛼是交错的. 𝑉(𝑚) = {𝛼 ∈ 𝑉(𝑚) :𝛼是𝑉上的交错𝑚重线性型}. alt 你应自行验证𝑉(𝑚) 是𝑉(𝑚) 的子空间.交错2重线性型的例子见例.15.交错3重线性型 alt 的例子见  "
    },
    {
      "id": "9.27",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.27",
      "name_en": "alternating forms, 𝑉(𝑚) alt",
      "name_zh": "交错型(alternating forms)、𝑉",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer. • An 𝑚-linear form 𝛼 on 𝑉 is called alternating if 𝛼(𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub>) = 0 whenever 𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub> is a list of vectors in 𝑉 with 𝑣<sub>𝑗</sub> = 𝑣<sub>𝑘</sub> for some two distinct values of 𝑗 and 𝑘 in {1,...,𝑚}. • 𝑉(𝑚) = {𝛼 ∈ 𝑉(𝑚) ∶ 𝛼 is an alternating 𝑚-linear form on 𝑉}. alt",
          "zh": "alt 设 𝑚 是正整数. 对于𝑉上的𝑚重线性型𝛼，如果只要𝑉中向量组𝑣<sub>1</sub>,...,𝑣<sub>𝑚</sub> 满足对于某两个不同的 𝑗,𝑘∈{1,...,𝑚}有𝑣<sub>𝑗</sub> =𝑣<sub>𝑘</sub>，就有𝛼(𝑣<sub>1</sub>,...,𝑣<sub>𝑚</sub>)=0，则称𝛼是交错的. 𝑉(𝑚) ={𝛼∈𝑉(𝑚) :𝛼是𝑉上的交错𝑚重线性型}. alt ♣ 你应自行验证𝑉(𝑚) 是𝑉(𝑚) 的子空间.交错2重线性型的例子见例9.15.交错3重线性型 alt 的例子见习题 2. 下面结论告诉我们，如果将一个线性相关组作为交错多重线性型的输入，那么所得输出等 于 0. 9.28 交错多重线性型和线性相关性 设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型.若𝑣<sub>1</sub>,...,𝑣<sub>𝑚</sub> 是𝑉中的线性相关组，那么 𝛼(𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub>) = 0. ♡"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer. • An 𝑚-linear form 𝛼 on 𝑉 is called alternating if 𝛼(𝑣1,..., 𝑣𝑚) = 0 whenever 𝑣1,..., 𝑣𝑚 is a list of vectors in 𝑉 with 𝑣𝑗 = 𝑣𝑘 for some two distinct values of 𝑗 and 𝑘 in {1,...,𝑚}. • 𝑉(𝑚) = {𝛼 ∈ 𝑉(𝑚) ∶ 𝛼 is an alternating 𝑚-linear form on 𝑉}. alt",
      "statement_zh": "alt 设 𝑚 是正整数. 对于𝑉上的𝑚重线性型𝛼，如果只要𝑉中向量组𝑣1,...,𝑣𝑚 满足对于某两个不同的 𝑗,𝑘∈{1,...,𝑚}有𝑣𝑗 =𝑣𝑘，就有𝛼(𝑣1,...,𝑣𝑚)=0，则称𝛼是交错的. 𝑉(𝑚) ={𝛼∈𝑉(𝑚) :𝛼是𝑉上的交错𝑚重线性型}. alt ♣ 你应自行验证𝑉(𝑚) 是𝑉(𝑚) 的子空间.交错2重线性型的例子见例9.15.交错3重线性型 alt 的例子见习题 2. 下面结论告诉我们，如果将一个线性相关组作为交错多重线性型的输入，那么所得输出等 于 0. 9.28 交错多重线性型和线性相关性 设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型.若𝑣1,...,𝑣𝑚 是𝑉中的线性相关组，那么 𝛼(𝑣1,..., 𝑣𝑚) = 0. ♡"
    },
    {
      "id": "9.28",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.28",
      "name_en": "alternating multilinear forms and linear dependence",
      "name_zh": "交错多重线性型和线性相关性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer and 𝛼 is an alternating 𝑚-linear form on 𝑉. If 𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub> is a linearly dependent list in 𝑉, then 𝛼(𝑣<sub>1</sub>,...,𝑣<sub>𝑚</sub>) = 0.",
          "zh": "设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型.若𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub> 是𝑉中的线性相关组，那么 𝛼(𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub>) = 0."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer and 𝛼 is an alternating 𝑚-linear form on 𝑉. If 𝑣1,..., 𝑣𝑚 is a linearly dependent list in 𝑉, then 𝛼(𝑣1,...,𝑣𝑚) = 0.",
      "statement_zh": "设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型.若𝑣1,…,𝑣𝑚 是𝑉中的线性相关组，那么 𝛼(𝑣1, …, 𝑣𝑚) = 0."
    },
    {
      "id": "9.29",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.29",
      "name_en": "no nonzero alternating",
      "name_zh": "对 𝑚 &gt; dim 𝑉，不存在非零交错 𝑚 重线性型",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑚-linear forms for 𝑚 &gt; dim 𝑉 Suppose 𝑚 &gt; dim 𝑉. Then 0 is the only alternating 𝑚-linear form on 𝑉.",
          "zh": "设 𝑚 &gt; dim 𝑉.那么 0 是 𝑉 上唯一的交错 𝑚 重线性型."
        }
      ],
      "note": null,
      "statement_en": "𝑚-linear forms for 𝑚 &gt; dim 𝑉 Suppose 𝑚 &gt; dim 𝑉. Then 0 is the only alternating 𝑚-linear form on 𝑉.",
      "statement_zh": "设 𝑚 &gt; dim 𝑉.那么 0 是 𝑉 上唯一的交错 𝑚 重线性型."
    },
    {
      "id": "9.30",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.30",
      "name_en": "swapping input vectors in an alternating multilinear form",
      "name_zh": "交换交错多重线性型的输入向量 设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型，且𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub> 是𝑉中的向量组.那么交换 𝛼(𝑣<sub>1</sub>, …, 𝑣<sub>𝑚</sub>) 中任意两个位置上的向量会使 𝛼 的值变为原来的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer, 𝛼 is an alternating 𝑚-linear form on 𝑉, and 𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub> is a list of vectors in 𝑉. Then swapping the vectors in any two slots of 𝛼(𝑣<sub>1</sub>,..., 𝑣<sub>𝑚</sub>) changes the value of 𝛼 by a factor of −1.",
          "zh": "−1 倍. 9B 交错多重线性型 291"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer, 𝛼 is an alternating 𝑚-linear form on 𝑉, and 𝑣1,..., 𝑣𝑚 is a list of vectors in 𝑉. Then swapping the vectors in any two slots of 𝛼(𝑣1,..., 𝑣𝑚) changes the value of 𝛼 by a factor of −1.",
      "statement_zh": "−1 倍. 9B 交错多重线性型 291"
    },
    {
      "id": "9.31",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.31",
      "name_en": "permutation, perm 𝑚",
      "name_zh": "排列(permutation)、perm 𝑚",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer. • A permutation of (1,..., 𝑚) is a list (𝑗1,..., 𝑗𝑚) that contains each of the numbers 1,..., 𝑚 exactly once. • The set of all permutations of (1,..., 𝑚) is denoted by perm 𝑚. For example, (2, 3, 4, 5, 1) ∈ perm 5. You should think of an element of perm 𝑚 as a rearrangement of the first 𝑚 positive integers. The number of swaps used to change a permutation (𝑗1,..., 𝑗𝑚) to the stan- dard order (1,..., 𝑚) can depend on the specific swaps selected. The following definition has the advantage of assigning a well-defined sign to every permutation.",
          "zh": "(1, …, 𝑚) 的一个排列是不重不漏地包含 1, …, 𝑚 的组 (𝑗<sub>1</sub>, …, 𝑗<sub>𝑚</sub>). (1, …, 𝑚) 的所有排列所构成的集合记为 perm 𝑚. 例如，(2, 3, 4, 5, 1) ∈ perm 5.你应将 perm 𝑚 的一个元素看成对于头 𝑚 个正整数的重排. 将一个排列 (𝑗<sub>1</sub>, …, 𝑗<sub>𝑚</sub>) 变回标准排列 (1, …, 𝑚) 所用交换的次数与交换的方法是有关的. 下面定义的好处在于，给所有排列都赋予了一个定义完善的符号."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer. • A permutation of (1,..., 𝑚) is a list (𝑗1,..., 𝑗𝑚) that contains each of the numbers 1,..., 𝑚 exactly once. • The set of all permutations of (1,..., 𝑚) is denoted by perm 𝑚. For example, (2, 3, 4, 5, 1) ∈ perm 5. You should think of an element of perm 𝑚 as a rearrangement of the first 𝑚 positive integers. The number of swaps used to change a permutation (𝑗1,..., 𝑗𝑚) to the stan- dard order (1,..., 𝑚) can depend on the specific swaps selected. The following definition has the advantage of assigning a well-defined sign to every permutation.",
      "statement_zh": "(1, …, 𝑚) 的一个排列是不重不漏地包含 1, …, 𝑚 的组 (𝑗1, …, 𝑗𝑚). (1, …, 𝑚) 的所有排列所构成的集合记为 perm 𝑚. 例如，(2, 3, 4, 5, 1) ∈ perm 5.你应将 perm 𝑚 的一个元素看成对于头 𝑚 个正整数的重排. 将一个排列 (𝑗1, …, 𝑗𝑚) 变回标准排列 (1, …, 𝑚) 所用交换的次数与交换的方法是有关的. 下面定义的好处在于，给所有排列都赋予了一个定义完善的符号."
    },
    {
      "id": "9.32",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.32",
      "name_en": "sign of a permutation",
      "name_zh": "排列的符号(sign of a permutation) 排列 (𝑗<sub>1</sub>,…, 𝑗<sub>𝑚</sub>) 的符号定义为",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The sign of a permutation (𝑗<sub>1</sub>, …, 𝑗<sub>𝑚</sub>) is defined by sign(𝑗<sub>1</sub>, …, 𝑗<sub>𝑚</sub>) = (−1)𝑁, where 𝑁 is the number of pairs of integers (𝑘, l) with 1 ≤ 𝑘 &lt; l ≤ 𝑚 such that 𝑘 appears after l in the list (𝑗<sub>1</sub>, …, 𝑗<sub>𝑚</sub>). Hence the sign of a permutation equals 1 if the natural order has been changed an even number of times and equals −1 if the natural order has been changed an odd number of times.",
          "zh": "sign(𝑗<sub>1</sub>,…, 𝑗<sub>𝑚</sub>) = (−1)𝑁， 其中 𝑁 是所有整数对 (𝑘, l)(1 ≤ 𝑘 &lt; l ≤ 𝑚)中，满足 𝑘 在组 (𝑗<sub>1</sub>, …, 𝑗<sub>𝑚</sub>) 中排在 l 之后 的数目.1 因此，若一排列中有偶数个不合自然顺序之处，则其符号等于 1;而若一排列中有奇数个 不合自然顺序之处，则其符号等于 −1."
        }
      ],
      "note": null,
      "statement_en": "The sign of a permutation (𝑗1, …, 𝑗𝑚) is defined by sign(𝑗1, …, 𝑗𝑚) = (−1)𝑁, where 𝑁 is the number of pairs of integers (𝑘, l) with 1 ≤ 𝑘 &lt; l ≤ 𝑚 such that 𝑘 appears after l in the list (𝑗1, …, 𝑗𝑚). Hence the sign of a permutation equals 1 if the natural order has been changed an even number of times and equals −1 if the natural order has been changed an odd number of times.",
      "statement_zh": "sign(𝑗1,…, 𝑗𝑚) = (−1)𝑁， 其中 𝑁 是所有整数对 (𝑘, l)(1 ≤ 𝑘 &lt; l ≤ 𝑚)中，满足 𝑘 在组 (𝑗1, …, 𝑗𝑚) 中排在 l 之后 的数目.1 因此，若一排列中有偶数个不合自然顺序之处，则其符号等于 1;而若一排列中有奇数个 不合自然顺序之处，则其符号等于 −1."
    },
    {
      "id": "9.34",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.34",
      "name_en": "swapping two entries in a permutation",
      "name_zh": "交换排列中的两项 交换排列中的两项会将排列的符号乘以 −1.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Swapping two entries in a permutation multiplies the sign of the permutation by −1.",
          "zh": "交换排列中的两项 交换排列中的两项会将排列的符号乘以 −1."
        }
      ],
      "note": null,
      "statement_en": "Swapping two entries in a permutation multiplies the sign of the permutation by −1.",
      "statement_zh": "交换排列中的两项 交换排列中的两项会将排列的符号乘以 −1."
    },
    {
      "id": "9.35",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.35",
      "name_en": "permutations and alternating multilinear forms",
      "name_zh": "排列和交错多重线性型",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer and 𝛼 ∈ 𝑉 𝛼(𝑣<sub>𝑗</sub>1,...,𝑣<sub>𝑗</sub>𝑚) = (sign(𝑗1,...,𝑗𝑚))𝛼(𝑣<sub>1</sub>,...,𝑣<sub>𝑚</sub>). Then for every list 𝑣<sub>1</sub>,...,𝑣<sub>𝑚</sub> of vectors in 𝑉 and all (𝑗1,...,𝑗𝑚) ∈ perm𝑚.",
          "zh": "设 𝑚 是正整数，且 𝛼 ∈ 𝑉(𝑚).那么 alt 𝛼(𝑣<sub>𝑗</sub>1,…,𝑣<sub>𝑗</sub>𝑚) = \u0000sign(𝑗<sub>1</sub>,…, 𝑗<sub>𝑚</sub>)\u0001𝛼(𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub>) 对𝑉中每个向量组𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub> 以及所有(𝑗<sub>1</sub>,…,𝑗<sub>𝑚</sub>) ∈ perm 𝑚成立."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer and 𝛼 ∈ 𝑉 𝛼(𝑣𝑗1,...,𝑣𝑗𝑚) = (sign(𝑗1,...,𝑗𝑚))𝛼(𝑣1,...,𝑣𝑚). Then for every list 𝑣1,...,𝑣𝑚 of vectors in 𝑉 and all (𝑗1,...,𝑗𝑚) ∈ perm𝑚.",
      "statement_zh": "设 𝑚 是正整数，且 𝛼 ∈ 𝑉(𝑚).那么 alt 𝛼(𝑣𝑗1,…,𝑣𝑗𝑚) = \u0000sign(𝑗1,…, 𝑗𝑚)\u0001𝛼(𝑣1,…,𝑣𝑚) 对𝑉中每个向量组𝑣1,…,𝑣𝑚 以及所有(𝑗1,…,𝑗𝑚) ∈ perm 𝑚成立."
    },
    {
      "id": "9.36",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.36",
      "name_en": "formula for",
      "name_zh": "𝑉 上交错 (dim 𝑉) 重线性型的公式 令𝑛 = dim 𝑉.设𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>是𝑉的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(dim 𝑉)-linear alternating forms on 𝑉 Let 𝑛 = dim 𝑉.Suppose 𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> isabasisof 𝑉 and 𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> ∈ 𝑉.Foreach 𝑘 ∈ {1,…,𝑛}, let 𝑏<sub>1</sub>,𝑘,…,𝑏<sub>𝑛</sub>,𝑘 ∈ 𝐅 be such that 𝑛 𝑣<sub>𝑘</sub> = ∑𝑏<sub>𝑗</sub>,𝑘𝑒<sub>𝑗</sub>. 𝑗 = 1 Then 𝛼(𝑣<sub>1</sub>, …, 𝑣<sub>𝑛</sub>) = 𝛼(𝑒<sub>1</sub>, …, 𝑒<sub>𝑛</sub>) ∑ (sign(𝑗<sub>1</sub>, …, 𝑗<sub>𝑛</sub>))𝑏<sub>𝑗</sub>1,1 ⋯ 𝑏<sub>𝑗</sub>𝑛,𝑛 (𝑗<sub>1</sub>,…,𝑗<sub>𝑛</sub>) ∈ perm 𝑛 for every alternating 𝑛-linear form 𝛼 on 𝑉.",
          "zh": "𝑏<sub>1</sub>,𝑘,…,𝑏<sub>𝑛</sub>,𝑘 ∈ F 满足 那么 ∑𝑛 𝑗 = 1 (𝑗<sub>1</sub>,…,𝑗<sub>𝑛</sub>) ∈ perm 𝑛 𝛼(𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub>) = 𝛼(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>) 对于 𝑉 上每个交错 𝑛 重线性型都成立. 𝑣<sub>𝑘</sub> = 𝑏<sub>𝑗</sub>,𝑘𝑒<sub>𝑗</sub>. ∑ \u0000sign(𝑗<sub>1</sub>,…, 𝑗<sub>𝑛</sub>)\u0001𝑏<sub>𝑗</sub>1,1···𝑏<sub>𝑗</sub>𝑛,𝑛 2如 9.33 的最后一例中，若交换排列中的 2 和 𝑚，则仅包含一个中间项 3 的数对为 (1, 3), (2, 3), (3, 𝑚)，原先其中不符合自然顺序的 是 (1, 3)，交换后不符合自然顺序的数对是 (1, 3), (2, 3), (3, 𝑚)，净增加量为 2.对于其他中间项 4, …, 𝑚 − 1，也是同样道理. 9B 交错多重线性型 293"
        }
      ],
      "note": null,
      "statement_en": "(dim 𝑉)-linear alternating forms on 𝑉 Let 𝑛 = dim 𝑉.Suppose 𝑒1,…,𝑒𝑛 isabasisof 𝑉 and 𝑣1,…,𝑣𝑛 ∈ 𝑉.Foreach 𝑘 ∈ {1,…,𝑛}, let 𝑏1,𝑘,…,𝑏𝑛,𝑘 ∈ 𝐅 be such that 𝑛 𝑣𝑘 = ∑𝑏𝑗,𝑘𝑒𝑗. 𝑗 = 1 Then 𝛼(𝑣1, …, 𝑣𝑛) = 𝛼(𝑒1, …, 𝑒𝑛) ∑ (sign(𝑗1, …, 𝑗𝑛))𝑏𝑗1,1 ⋯ 𝑏𝑗𝑛,𝑛 (𝑗1,…,𝑗𝑛) ∈ perm 𝑛 for every alternating 𝑛-linear form 𝛼 on 𝑉.",
      "statement_zh": "𝑏1,𝑘,…,𝑏𝑛,𝑘 ∈ F 满足 那么 ∑𝑛 𝑗 = 1 (𝑗1,…,𝑗𝑛) ∈ perm 𝑛 𝛼(𝑣1,…,𝑣𝑛) = 𝛼(𝑒1,…,𝑒𝑛) 对于 𝑉 上每个交错 𝑛 重线性型都成立. 𝑣𝑘 = 𝑏𝑗,𝑘𝑒𝑗. ∑ \u0000sign(𝑗1,…, 𝑗𝑛)\u0001𝑏𝑗1,1···𝑏𝑗𝑛,𝑛 2如 9.33 的最后一例中，若交换排列中的 2 和 𝑚，则仅包含一个中间项 3 的数对为 (1, 3), (2, 3), (3, 𝑚)，原先其中不符合自然顺序的 是 (1, 3)，交换后不符合自然顺序的数对是 (1, 3), (2, 3), (3, 𝑚)，净增加量为 2.对于其他中间项 4, …, 𝑚 − 1，也是同样道理. 9B 交错多重线性型 293"
    },
    {
      "id": "9.37",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.37",
      "name_en": "dim 𝑉(dim 𝑉) = 1 alt",
      "name_zh": "dim 𝑉(dim 𝑉) = 1 alt",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The vector space 𝑉(dim 𝑉) has dimension one. alt",
          "zh": "dim 𝑉(dim 𝑉) = 1 alt"
        }
      ],
      "note": null,
      "statement_en": "The vector space 𝑉(dim 𝑉) has dimension one. alt",
      "statement_zh": "dim 𝑉(dim 𝑉) = 1 alt"
    },
    {
      "id": "9.40",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.40",
      "name_en": "𝛼𝑇",
      "name_zh": "𝛼𝑇",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that m is a positive integer and T ∈ L(V). For α ∈ V<sup>(m)</sup><sub>alt</sub>, define α_T ∈ V<sup>(m)</sup><sub>alt</sub> by",
          "zh": "假设 m 是正整数且 T ∈ L(V)。对于 α ∈ V<sup>(m)</sup><sub>alt</sub>，定义 α_T ∈ V<sup>(m)</sup><sub>alt</sub> 为"
        },
        {
          "t": "formula",
          "en": "α_T(v<sub>1</sub>, …, v<sub>m</sub>) = α(T v<sub>1</sub>, …, T v<sub>m</sub>)",
          "zh": "α_T(v<sub>1</sub>, …, v<sub>m</sub>) = α(T v<sub>1</sub>, …, T v<sub>m</sub>)"
        }
      ],
      "note": null,
      "statement_en": "Suppose that m is a positive integer and T ∈ L(V). For α ∈ V(m)alt, define α_T ∈ V(m)alt by α_T(v1, …, vm) = α(T v1, …, T vm)",
      "statement_zh": "假设 m 是正整数且 T ∈ L(V)。对于 α ∈ V(m)alt，定义 α_T ∈ V(m)alt 为 α_T(v1, …, vm) = α(T v1, …, T vm)"
    },
    {
      "id": "9.41",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.41",
      "name_en": "determinant of an operator, det 𝑇",
      "name_zh": "算子的行列式(determinant of an operator)、det 𝑇",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). The determinant of 𝑇, denoted by det 𝑇, is defined to be the unique number in 𝐅 such that 𝛼𝑇 =(det𝑇)𝛼 for all 𝛼 ∈ 𝑉(dim 𝑉). alt",
          "zh": "对所有 𝛼 ∈ 𝑉(dim 𝑉) 都成立的数. alt"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). The determinant of 𝑇, denoted by det 𝑇, is defined to be the unique number in 𝐅 such that 𝛼𝑇 =(det𝑇)𝛼 for all 𝛼 ∈ 𝑉(dim 𝑉). alt",
      "statement_zh": "对所有 𝛼 ∈ 𝑉(dim 𝑉) 都成立的数. alt"
    },
    {
      "id": "9.43",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.43",
      "name_en": "determinant of a matrix, det 𝐴",
      "name_zh": "矩阵的行列式(determinant of a matrix)、det 𝐴 设𝑛是正整数，且𝐴是各元素均属于 F 的𝑛×𝑛方阵.令𝑇 ∈ L(F<sup>𝑛</sup>)关于 F<sup>𝑛</sup> 的标准基 的矩阵等于 𝐴.𝐴 的行列式，记为 det 𝐴，定义为 det 𝐴 = det",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑛 is a positive integer and 𝐴 is an 𝑛-by-𝑛 square matrix with entries in 𝐅. Let 𝑇 ∈ L(𝐅<sup>𝑛</sup>) be the operator whose matrix with respect to the standard basis of 𝐅<sup>𝑛</sup> equals 𝐴. The determinant of 𝐴, denoted by det 𝐴, is defined by det 𝐴 = det 𝑇.",
          "zh": "矩阵的行列式(determinant of a matrix)、det 𝐴 设𝑛是正整数，且𝐴是各元素均属于 F 的𝑛×𝑛方阵.令𝑇 ∈ L(F<sup>𝑛</sup>)关于 F<sup>𝑛</sup> 的标准基 的矩阵等于 𝐴.𝐴 的行列式，记为 det 𝐴，定义为 det 𝐴 = det"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑛 is a positive integer and 𝐴 is an 𝑛-by-𝑛 square matrix with entries in 𝐅. Let 𝑇 ∈ L(𝐅𝑛) be the operator whose matrix with respect to the standard basis of 𝐅𝑛 equals 𝐴. The determinant of 𝐴, denoted by det 𝐴, is defined by det 𝐴 = det 𝑇.",
      "statement_zh": "矩阵的行列式(determinant of a matrix)、det 𝐴 设𝑛是正整数，且𝐴是各元素均属于 F 的𝑛×𝑛方阵.令𝑇 ∈ L(F𝑛)关于 F𝑛 的标准基 的矩阵等于 𝐴.𝐴 的行列式，记为 det 𝐴，定义为 det 𝐴 = det"
    },
    {
      "id": "9.45",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.45",
      "name_en": "determinant is an alternating multilinear form",
      "name_zh": "行列式是交错多重线性型",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑛 is a positive integer. The map that takes a list 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> of vectors in 𝐅<sup>𝑛</sup> to det ( 𝑣<sub>1</sub> ⋯ 𝑣<sub>𝑛</sub> ) is an alternating 𝑛-linear form on 𝐅<sup>𝑛</sup>.",
          "zh": "设𝑛是正整数.将 F<sup>𝑛</sup> 中向量组𝑣,…,𝑣 对应到 det\u0000 𝑣 ··· 𝑣 \u0001 的映射是 F<sup>𝑛</sup> 上的交 1𝑛1𝑛 错 𝑛 重线性型."
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑛 is a positive integer. The map that takes a list 𝑣1,..., 𝑣𝑛 of vectors in 𝐅𝑛 to det ( 𝑣1 ⋯ 𝑣𝑛 ) is an alternating 𝑛-linear form on 𝐅𝑛.",
      "statement_zh": "设𝑛是正整数.将 F𝑛 中向量组𝑣,…,𝑣 对应到 det\u0000 𝑣 ··· 𝑣 \u0001 的映射是 F𝑛 上的交 1𝑛1𝑛 错 𝑛 重线性型."
    },
    {
      "id": "9.46",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.46",
      "name_en": "formula for determinant of a matrix",
      "name_zh": "矩阵的行列式的公式 设𝑛是正整数且 𝐴是𝑛×𝑛方阵.那么",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑛 is a positive integer and 𝐴 is an 𝑛-by-𝑛 square matrix. Then det 𝐴 = ∑ (sign(𝑗1,..., 𝑗𝑛))𝐴𝑗1,1 ⋯ 𝐴𝑗𝑛,𝑛. (𝑗1,...,𝑗𝑛)∈perm 𝑛",
          "zh": "♡ det𝐴= ∑\u0000\u0001 sign(𝑗1,...,𝑗𝑛) 𝐴𝑗1,1···𝐴𝑗𝑛,𝑛. (𝑗1,...,𝑗𝑛)∈perm𝑛 ♡ 298 第 9 章 多重线性代数和行列式"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑛 is a positive integer and 𝐴 is an 𝑛-by-𝑛 square matrix. Then det 𝐴 = ∑ (sign(𝑗1,..., 𝑗𝑛))𝐴𝑗1,1 ⋯ 𝐴𝑗𝑛,𝑛. (𝑗1,...,𝑗𝑛)∈perm 𝑛",
      "statement_zh": "♡ det𝐴= ∑\u0000\u0001 sign(𝑗1,...,𝑗𝑛) 𝐴𝑗1,1···𝐴𝑗𝑛,𝑛. (𝑗1,...,𝑗𝑛)∈perm𝑛 ♡ 298 第 9 章 多重线性代数和行列式"
    },
    {
      "id": "9.48",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.48",
      "name_en": "determinant of upper-triangular matrix",
      "name_zh": "上三角矩阵的行列式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝐴 is an upper-triangular matrix with 𝜆<sub>1</sub>,..., 𝜆<sub>𝑛</sub> on the diagonal. Then det 𝐴 = 𝜆<sub>1</sub> ⋯ 𝜆<sub>𝑛</sub>.",
          "zh": "设 𝐴 是上三角矩阵，其对角线上各元素是 𝜆<sub>1</sub>, …, 𝜆<sub>𝑛</sub>.那么 det 𝐴 = 𝜆<sub>1</sub> ⋯ 𝜆<sub>𝑛</sub>."
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝐴 is an upper-triangular matrix with 𝜆1,..., 𝜆𝑛 on the diagonal. Then det 𝐴 = 𝜆1 ⋯ 𝜆𝑛.",
      "statement_zh": "设 𝐴 是上三角矩阵，其对角线上各元素是 𝜆1, …, 𝜆𝑛.那么 det 𝐴 = 𝜆1 ⋯ 𝜆𝑛."
    },
    {
      "id": "9.49",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.49",
      "name_en": "determinant is multiplicative",
      "name_zh": "行列式是可乘的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(a) Suppose 𝑆,𝑇 ∈ L(𝑉).Thendet(𝑆𝑇) = (det 𝑆)(det 𝑇). (b) Suppose 𝐴 and 𝐵 are square matrices of the same size. Then Properties of Determinants det(𝐴𝐵) = (det 𝐴)(det 𝐵). (a) Let 𝑛 = dim 𝑉.Suppose 𝛼 ∈ 𝑉(𝑛) and 𝑣,…,𝑣 ∈ 𝑉.Then",
          "zh": "(a) 设𝑆,𝑇 ∈ L(𝑉).那么 det(𝑆𝑇) = (det 𝑆)(det 𝑇). (b) 设 𝐴 和 𝐵 是大小相同的方阵.那么 det(𝐴𝐵) = (det 𝐴)(det 𝐵)."
        }
      ],
      "note": null,
      "statement_en": "(a) Suppose 𝑆,𝑇 ∈ L(𝑉).Thendet(𝑆𝑇) = (det 𝑆)(det 𝑇). (b) Suppose 𝐴 and 𝐵 are square matrices of the same size. Then Properties of Determinants det(𝐴𝐵) = (det 𝐴)(det 𝐵). (a) Let 𝑛 = dim 𝑉.Suppose 𝛼 ∈ 𝑉(𝑛) and 𝑣,…,𝑣 ∈ 𝑉.Then",
      "statement_zh": "(a) 设𝑆,𝑇 ∈ L(𝑉).那么 det(𝑆𝑇) = (det 𝑆)(det 𝑇). (b) 设 𝐴 和 𝐵 是大小相同的方阵.那么 det(𝐴𝐵) = (det 𝐴)(det 𝐵)."
    },
    {
      "id": "9.50",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.50",
      "name_en": "invertible ⟺ nonzero determinant",
      "name_zh": "可逆 ⇐⇒ 行列式非零 算子𝑇 ∈ L(𝑉)是可逆的，当且仅当 det 𝑇 = ̸0.此外，若𝑇是可逆的，那么 det(𝑇<sup>−1</sup>) = 1.",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑇 ∈ L(𝑉) is invertible if and only if det 𝑇 ≠ 0. Furthermore, if 𝑇 is invertible, then det(𝑇−1) = 1. det 𝑇",
          "zh": "det 𝑇"
        }
      ],
      "note": null,
      "statement_en": "An operator 𝑇 ∈ L(𝑉) is invertible if and only if det 𝑇 ≠ 0. Furthermore, if 𝑇 is invertible, then det(𝑇−1) = 1. det 𝑇",
      "statement_zh": "det 𝑇"
    },
    {
      "id": "9.51",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.51",
      "name_en": "eigenvalues and determinants",
      "name_zh": "特征值和行列式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅. Then 𝜆 is an eigenvalue of 𝑇 if and only if det(𝜆𝐼 − 𝑇) = 0.",
          "zh": "设 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F.那么 𝜆 是 𝑇 的特征值，当且仅当 det(𝜆𝐼 − 𝑇) = 0."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝜆 ∈ 𝐅. Then 𝜆 is an eigenvalue of 𝑇 if and only if det(𝜆𝐼 − 𝑇) = 0.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F.那么 𝜆 是 𝑇 的特征值，当且仅当 det(𝜆𝐼 − 𝑇) = 0."
    },
    {
      "id": "9.52",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.52",
      "name_en": "determinant is a similarity invariant",
      "name_zh": "行列式是相似不变量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑆∶ 𝑊 → 𝑉 is an invertible linear map. Then det(𝑆−1𝑇𝑆) = det 𝑇.",
          "zh": "设 𝑇 ∈ L(𝑉) 且 𝑆 : 𝑊 → 𝑉 是可逆线性映射.那么 det(𝑆−1𝑇𝑆) = det 𝑇."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑆∶ 𝑊 → 𝑉 is an invertible linear map. Then det(𝑆−1𝑇𝑆) = det 𝑇.",
      "statement_zh": "设 𝑇 ∈ L(𝑉) 且 𝑆 : 𝑊 → 𝑉 是可逆线性映射.那么 det(𝑆−1𝑇𝑆) = det 𝑇."
    },
    {
      "id": "9.53",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.53",
      "name_en": "determinant of operator equals determinant of its matrix Suppose",
      "name_zh": "算子的行列式等于其矩阵的行列式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑇 ∈ L(𝑉) and 𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub> is a basis of 𝑉. Then det 𝑇 = detM(𝑇,(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>)).",
          "zh": "det 𝑇 = detM\u0000𝑇,(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>)\u0001."
        }
      ],
      "note": null,
      "statement_en": "𝑇 ∈ L(𝑉) and 𝑒1,…,𝑒𝑛 is a basis of 𝑉. Then det 𝑇 = detM(𝑇,(𝑒1,…,𝑒𝑛)).",
      "statement_zh": "det 𝑇 = detM\u0000𝑇,(𝑒1,…,𝑒𝑛)\u0001."
    },
    {
      "id": "9.56",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.56",
      "name_en": "determinant of transpose, dual, or adjoint",
      "name_zh": "转置、对偶或伴随的行列式",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) Suppose A is a square matrix. Then det A<sup>t</sup> = det A.",
          "zh": "(a) 假设 A 是方阵。那么 det A<sup>t</sup> = det A。"
        },
        {
          "t": "bullet",
          "en": "(b) Suppose T ∈ L(V). Then det T′ = det T.",
          "zh": "(b) 假设 T ∈ L(V)。那么 det T′ = det T。"
        },
        {
          "t": "bullet",
          "en": "(c) Suppose V is an inner product space and T ∈ L(V). Then det(T*) = det T.",
          "zh": "(c) 假设 V 是内积空间且 T ∈ L(V)。那么 det(T*) = det T。"
        }
      ],
      "note": null,
      "statement_en": "(a) Suppose A is a square matrix. Then det At = det A. (b) Suppose T ∈ L(V). Then det T′ = det T. (c) Suppose V is an inner product space and T ∈ L(V). Then det(T*) = det T.",
      "statement_zh": "(a) 假设 A 是方阵。那么 det At = det A。 (b) 假设 T ∈ L(V)。那么 det T′ = det T。 (c) 假设 V 是内积空间且 T ∈ L(V)。那么 det(T*) = det T。"
    },
    {
      "id": "9.57",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.57",
      "name_en": "helpful results in evaluating determinants",
      "name_zh": "有助于计算行列式的若干结论",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) If either two columns or two rows of a square matrix are equal, then the determinant of the matrix equals 0.",
          "zh": "(a) 如果方阵的两列或两行相等，那么该矩阵的行列式等于 0。"
        },
        {
          "t": "bullet",
          "en": "(b) Suppose A is a square matrix and B is obtained from A by swapping either two columns or two rows. Then det A = − det B.",
          "zh": "(b) 假设 A 是方阵，B 由交换 A 的两列或两行得到。那么 det A = − det B。"
        },
        {
          "t": "bullet",
          "en": "(c) If one column or one row of a square matrix is multiplied by a scalar, then the value of the determinant is multiplied by the same scalar.",
          "zh": "(c) 如果方阵的一列或一行乘以一个标量，那么行列式也乘以同一标量。"
        },
        {
          "t": "bullet",
          "en": "(d) If a scalar multiple of one column of a square matrix is added to another column, then the value of the determinant is unchanged (and the same for rows).",
          "zh": "(d) 如果把方阵一列的标量倍加到另一列上，行列式不变（对行同样成立）。"
        }
      ],
      "note": null,
      "statement_en": "(a) If either two columns or two rows of a square matrix are equal, then the determinant of the matrix equals 0. (b) Suppose A is a square matrix and B is obtained from A by swapping either two columns or two rows. Then det A = − det B. (c) If one column or one row of a square matrix is multiplied by a scalar, then the value of the determinant is multiplied by the same scalar. (d) If a scalar multiple of one column of a square matrix is added to another column, then the value of the determinant is unchanged (and the same for rows).",
      "statement_zh": "(a) 如果方阵的两列或两行相等，那么该矩阵的行列式等于 0。 (b) 假设 A 是方阵，B 由交换 A 的两列或两行得到。那么 det A = − det B。 (c) 如果方阵的一列或一行乘以一个标量，那么行列式也乘以同一标量。 (d) 如果把方阵一列的标量倍加到另一列上，行列式不变（对行同样成立）。"
    },
    {
      "id": "9.58",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.58",
      "name_en": "every unitary operator has determinant with absolute value 1",
      "name_zh": "每个幺正算子的行列式绝对值都为 1",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is an inner product space and 𝑆 ∈ L(𝑉) is a unitary operator. Then |det 𝑆| = 1.",
          "zh": "设 𝑉 是内积空间，𝑆 ∈ L(𝑉) 是幺正算子.那么 |det 𝑆| = 1."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is an inner product space and 𝑆 ∈ L(𝑉) is a unitary operator. Then |det 𝑆| = 1.",
      "statement_zh": "设 𝑉 是内积空间，𝑆 ∈ L(𝑉) 是幺正算子.那么 |det 𝑆| = 1."
    },
    {
      "id": "9.59",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.59",
      "name_en": "every positive operator has nonnegative determinant",
      "name_zh": "每个正算子都具有非负行列式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is an inner product space and 𝑇 ∈ L(𝑉) is a positive operator. Then det 𝑇 ≥ 0.",
          "zh": "设 𝑉 是内积空间且 𝑇 ∈ L(𝑉) 是正算子.那么 det 𝑇 ≥ 0."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is an inner product space and 𝑇 ∈ L(𝑉) is a positive operator. Then det 𝑇 ≥ 0.",
      "statement_zh": "设 𝑉 是内积空间且 𝑇 ∈ L(𝑉) 是正算子.那么 det 𝑇 ≥ 0."
    },
    {
      "id": "9.61",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.61",
      "name_en": "𝑇 changes volume by factor of |det 𝑇|",
      "name_zh": "𝑇 将体积变为其 |det 𝑇 | 倍",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝐑<sup>𝑛</sup>) and Ω ⊆ 𝐑<sup>𝑛</sup>. Then volume 𝑇(Ω) = |det 𝑇|(volume Ω). For operators on finite-dimensional complex vector spaces, we now connect the determinant to a polynomial that we have previously seen.",
          "zh": "volume 𝑇 (Ω) = |det 𝑇 | (volume Ω). 对于有限维复向量空间上的算子，我们现将其行列式与前面见过的一个多项式联系起来. 9.62 若 F = C，那么 𝑇 的特征多项式等于 det(𝑧𝐼 − 𝑇) 设 F = C 且 𝑇 ∈ L(𝑉).令 𝜆<sub>1</sub>, …, 𝜆<sub>𝑚</sub> 表示 𝑇 的所有互异特征值，并令 𝑑1, …, 𝑑𝑚 表示它 们的重数.那么 det(𝑧𝐼−𝑇) = (𝑧−𝜆<sub>1</sub>)𝑑1 ···(𝑧−𝜆<sub>𝑚</sub>)𝑑𝑚."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝐑𝑛) and Ω ⊆ 𝐑𝑛. Then volume 𝑇(Ω) = |det 𝑇|(volume Ω). For operators on finite-dimensional complex vector spaces, we now connect the determinant to a polynomial that we have previously seen.",
      "statement_zh": "volume 𝑇 (Ω) = |det 𝑇 | (volume Ω). 对于有限维复向量空间上的算子，我们现将其行列式与前面见过的一个多项式联系起来. 9.62 若 F = C，那么 𝑇 的特征多项式等于 det(𝑧𝐼 − 𝑇) 设 F = C 且 𝑇 ∈ L(𝑉).令 𝜆1, …, 𝜆𝑚 表示 𝑇 的所有互异特征值，并令 𝑑1, …, 𝑑𝑚 表示它 们的重数.那么 det(𝑧𝐼−𝑇) = (𝑧−𝜆1)𝑑1 ···(𝑧−𝜆𝑚)𝑑𝑚."
    },
    {
      "id": "9.63",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.63",
      "name_en": "characteristic polynomial",
      "name_zh": "特征多项式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑧 ↦ det(𝑧𝐼 − 𝑇) is called the characteristic polynomial of 𝑇. The formula in 9.46 shows that the characteristic polynomial of an opera- tor 𝑇 ∈ L(𝑉) is a monic polynomial of degree dim 𝑉. The zeros in 𝐅 of the characteristic polynomial of 𝑇 are exactly the eigenvalues of 𝑇 (by 9.51). Previously we proved the Cayley–Hamilton theorem (8.29) in the complex case. Now we can extend that result to operators on real vector spaces. 9.64 Cayley–Hamilton theorem Suppose 𝑇 ∈ L(𝑉) and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
          "zh": "设 𝑇 ∈ L(𝑉).定义为 的多项式被称为 𝑇 的特征多项式. 𝑧 ↦→ det(𝑧𝐼 − 𝑇) 9.46 中的公式表明，算子 𝑇 ∈ L(𝑉) 的特征多项式是一个次数为 dim 𝑉 的首一多项式.𝑇 的特征多项式在 F 中的零点恰为 𝑇 的特征值(由 9.51). 之前我们证明了复数情形下的凯莱-哈密顿定理(8.29).现在我们可将这条结果拓展至实 向量空间上的算子了."
        }
      ],
      "note": null,
      "statement_en": "𝑧 ↦ det(𝑧𝐼 − 𝑇) is called the characteristic polynomial of 𝑇. The formula in 9.46 shows that the characteristic polynomial of an opera- tor 𝑇 ∈ L(𝑉) is a monic polynomial of degree dim 𝑉. The zeros in 𝐅 of the characteristic polynomial of 𝑇 are exactly the eigenvalues of 𝑇 (by 9.51). Previously we proved the Cayley–Hamilton theorem (8.29) in the complex case. Now we can extend that result to operators on real vector spaces. 9.64 Cayley–Hamilton theorem Suppose 𝑇 ∈ L(𝑉) and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
      "statement_zh": "设 𝑇 ∈ L(𝑉).定义为 的多项式被称为 𝑇 的特征多项式. 𝑧 ↦→ det(𝑧𝐼 − 𝑇) 9.46 中的公式表明，算子 𝑇 ∈ L(𝑉) 的特征多项式是一个次数为 dim 𝑉 的首一多项式.𝑇 的特征多项式在 F 中的零点恰为 𝑇 的特征值(由 9.51). 之前我们证明了复数情形下的凯莱-哈密顿定理(8.29).现在我们可将这条结果拓展至实 向量空间上的算子了."
    },
    {
      "id": "9.64",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.64",
      "name_en": "Cayley-Hamilton theorem",
      "name_zh": "凯莱-哈密顿定理",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉) and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
          "zh": "凯莱-哈密顿定理"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉) and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
      "statement_zh": "凯莱-哈密顿定理"
    },
    {
      "id": "9.65",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.65",
      "name_en": "characteristic polynomial, trace, and determinant",
      "name_zh": "无需",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ L(𝑉). Let 𝑛 = dim 𝑉. Then the characteristic polynomial of 𝑇 can be written as 𝑧<sub>𝑛</sub> − (tr 𝑇)𝑧<sub>𝑛</sub>−1 + ⋯ + (−1)𝑛(det 𝑇).",
          "zh": "无需"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ L(𝑉). Let 𝑛 = dim 𝑉. Then the characteristic polynomial of 𝑇 can be written as 𝑧𝑛 − (tr 𝑇)𝑧𝑛−1 + ⋯ + (−1)𝑛(det 𝑇).",
      "statement_zh": "无需"
    },
    {
      "id": "9.66",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.66",
      "name_en": "Hadamard’s inequality",
      "name_zh": "阿达马不等式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑛-by-𝑛 matrix. Let 𝑣<sub>1</sub>,..., 𝑣<sub>𝑛</sub> denote the columns of 𝐴. Then 𝑛 |det 𝐴| ≤ ∏ ‖𝑣<sub>𝑘</sub>‖. 𝑘=1",
          "zh": "设 𝐴是𝑛×𝑛矩阵.令𝑣<sub>1</sub>,…,𝑣<sub>𝑛</sub> 表示 𝐴的各列.那么 ∏𝑛 𝑘 = 1"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑛-by-𝑛 matrix. Let 𝑣1,..., 𝑣𝑛 denote the columns of 𝐴. Then 𝑛 |det 𝐴| ≤ ∏ ‖𝑣𝑘‖. 𝑘=1",
      "statement_zh": "设 𝐴是𝑛×𝑛矩阵.令𝑣1,…,𝑣𝑛 表示 𝐴的各列.那么 ∏𝑛 𝑘 = 1"
    },
    {
      "id": "9.67",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.67",
      "name_en": "determinant of Vandermonde matrix Suppose",
      "name_zh": "范德蒙德矩阵的行列式 设𝑛&gt;1及𝛽<sub>1</sub>,…,𝛽<sub>𝑛</sub> ∈ F.那么",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑛 &gt; 1 and 𝛽<sub>1</sub>,…,𝛽<sub>𝑛</sub> ∈ 𝐅. Then 1 𝛽<sub>1</sub> 𝛽<sub>12</sub> ⋯ 𝛽<sub>1</sub>𝑛−1 1 𝛽<sub>2</sub> 𝛽<sub>2</sub> ⋯ 𝛽<sub>2</sub>𝑛−1 ⋱ 1 𝛽<sub>𝑛</sub> 𝛽<sub>𝑛</sub>2 ⋯ 𝛽<sub>𝑛</sub>𝑛−1 the standard basis of 𝐅<sup>𝑛</sup>. Define a linear map 𝑆∶ 𝒫<sub>𝑛</sub>−1(𝐅) → 𝐅<sup>𝑛</sup> by 𝑆𝑝 = (𝑝(𝛽<sub>1</sub>), …, 𝑝(𝛽<sub>𝑛</sub>)). Let 𝐴 denote the Vandermonde matrix shown in the statement of this result. Note that 𝐴 = M(𝑆,(1,𝑧,…,𝑧<sub>𝑛</sub>−1),(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>)). Let 𝑇 ∶ 𝒫<sub>𝑛</sub>−1(𝐅) → 𝒫<sub>𝑛</sub>−1(𝐅) be the operator on 𝒫<sub>𝑛</sub>−1(𝐅) such that 𝑇<sup>1</sup> = 1 and 𝑇𝑧<sub>𝑘</sub> = (𝑧−𝛽<sub>1</sub>)(𝑧−𝛽<sub>2</sub>)⋯(𝑧−𝛽<sub>𝑘</sub>) for 𝑘 = 1, …, 𝑛 − 1. Let 𝐵 = M(𝑇, (1, 𝑧, …, 𝑧<sub>𝑛</sub>−1), (1, 𝑧, …, 𝑧<sub>𝑛</sub>−1)). Then 𝐵 is an upper-triangular matrix all of whose diagonal entries equal 1. Thus det 𝐵 = 1 (by 9.48). Let 𝐶 = M(𝑆𝑇,(1,𝑧,…,𝑧<sub>𝑛</sub>−1),(𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>)). Thus 𝐶 = 𝐴𝐵 (by 3.81), which",
          "zh": "©1𝛽<sub>1</sub> 𝛽<sub>2</sub> ···𝛽<sub>𝑛</sub>−1a 11 ­ det­ ® ∏ ® = (𝛽<sub>𝑘</sub> −𝛽<sub>𝑗</sub>). ­ 1 𝛽<sub>2</sub> 𝛽<sub>2</sub> ··· 𝛽<sub>𝑛</sub>−1 ® ­22® … «1𝛽 𝛽<sub>2</sub> ···𝛽<sub>𝑛</sub>−1¬ ­ ­ ® 1≤𝑗&lt;𝑘≤𝑛 ® 𝑛𝑛𝑛"
        }
      ],
      "note": null,
      "statement_en": "𝑛 &gt; 1 and 𝛽1,…,𝛽𝑛 ∈ 𝐅. Then 1 𝛽1 𝛽12 ⋯ 𝛽1𝑛−1 1 𝛽2 𝛽2 ⋯ 𝛽2𝑛−1 ⋱ 1 𝛽𝑛 𝛽𝑛2 ⋯ 𝛽𝑛𝑛−1 the standard basis of 𝐅𝑛. Define a linear map 𝑆∶ 𝒫𝑛−1(𝐅) → 𝐅𝑛 by 𝑆𝑝 = (𝑝(𝛽1), …, 𝑝(𝛽𝑛)). Let 𝐴 denote the Vandermonde matrix shown in the statement of this result. Note that 𝐴 = M(𝑆,(1,𝑧,…,𝑧𝑛−1),(𝑒1,…,𝑒𝑛)). Let 𝑇 ∶ 𝒫𝑛−1(𝐅) → 𝒫𝑛−1(𝐅) be the operator on 𝒫𝑛−1(𝐅) such that 𝑇1 = 1 and 𝑇𝑧𝑘 = (𝑧−𝛽1)(𝑧−𝛽2)⋯(𝑧−𝛽𝑘) for 𝑘 = 1, …, 𝑛 − 1. Let 𝐵 = M(𝑇, (1, 𝑧, …, 𝑧𝑛−1), (1, 𝑧, …, 𝑧𝑛−1)). Then 𝐵 is an upper-triangular matrix all of whose diagonal entries equal 1. Thus det 𝐵 = 1 (by 9.48). Let 𝐶 = M(𝑆𝑇,(1,𝑧,…,𝑧𝑛−1),(𝑒1,…,𝑒𝑛)). Thus 𝐶 = 𝐴𝐵 (by 3.81), which",
      "statement_zh": "©1𝛽1 𝛽2 ···𝛽𝑛−1a 11 ­ det­ ® ∏ ® = (𝛽𝑘 −𝛽𝑗). ­ 1 𝛽2 𝛽2 ··· 𝛽𝑛−1 ® ­22® … «1𝛽 𝛽2 ···𝛽𝑛−1¬ ­ ­ ® 1≤𝑗&lt;𝑘≤𝑛 ® 𝑛𝑛𝑛"
    },
    {
      "id": "9.68",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.68",
      "name_en": "bilinear functional on 𝑉 × 𝑊, the vector space B(𝑉, 𝑊)",
      "name_zh": "𝑉 × 𝑊 上的双线性泛函(bilinear functional)、向量空间 B",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear functional on 𝑉 × 𝑊 is a function 𝛽∶ 𝑉 × 𝑊 → 𝐅 such that 𝑣 ↦ 𝛽(𝑣, 𝑤) is a linear functional on 𝑉 for each 𝑤 ∈ 𝑊 and 𝑤 ↦ 𝛽(𝑣, 𝑤) is a linear functional on 𝑊 for each 𝑣 ∈ 𝑉. • The vector space of bilinear functionals on 𝑉 × 𝑊 is denoted by B(𝑉, 𝑊). If 𝑊 = 𝑉, then a bilinear functional on 𝑉 × 𝑊 is a bilinear form; see 9.1. The operations of addition and scalar multiplication on B(𝑉, 𝑊) are defined to be the usual operations of addition and scalar multiplication of functions. As you can verify, these operations make B(𝑉, 𝑊) into a vector space whose additive identity is the zero function from 𝑉 × 𝑊 to 𝐅.",
          "zh": "𝑉 ×𝑊 上的双线性泛函是函数 𝛽 : 𝑉 ×𝑊 → F，使得:对于任一 𝑤 ∈ 𝑊，𝑣 ↦→ 𝛽(𝑣,𝑤) 都是 𝑉 上的线性泛函;对于任一 𝑣 ∈ 𝑉，𝑤 ↦→ 𝛽(𝑣, 𝑤) 都是 𝑊 上的线性泛函. 𝑉 ×𝑊 上的双线性泛函构成的向量空间，记为 B(𝑉,𝑊). 如果 𝑊 = 𝑉 ，那么 𝑉 × 𝑊 上的双线性泛函就是双线性型了(见 9.1). B(𝑉,𝑊) 上的加法和数乘运算，定义为函数通常的加法和标量乘法.你可以验证，这些运 算使 B (𝑉, 𝑊) 成为向量空间，其加法恒等元是从 𝑉 × 𝑊 到 F 的零函数."
        }
      ],
      "note": null,
      "statement_en": "A bilinear functional on 𝑉 × 𝑊 is a function 𝛽∶ 𝑉 × 𝑊 → 𝐅 such that 𝑣 ↦ 𝛽(𝑣, 𝑤) is a linear functional on 𝑉 for each 𝑤 ∈ 𝑊 and 𝑤 ↦ 𝛽(𝑣, 𝑤) is a linear functional on 𝑊 for each 𝑣 ∈ 𝑉. • The vector space of bilinear functionals on 𝑉 × 𝑊 is denoted by B(𝑉, 𝑊). If 𝑊 = 𝑉, then a bilinear functional on 𝑉 × 𝑊 is a bilinear form; see 9.1. The operations of addition and scalar multiplication on B(𝑉, 𝑊) are defined to be the usual operations of addition and scalar multiplication of functions. As you can verify, these operations make B(𝑉, 𝑊) into a vector space whose additive identity is the zero function from 𝑉 × 𝑊 to 𝐅.",
      "statement_zh": "𝑉 ×𝑊 上的双线性泛函是函数 𝛽 : 𝑉 ×𝑊 → F，使得:对于任一 𝑤 ∈ 𝑊，𝑣 ↦→ 𝛽(𝑣,𝑤) 都是 𝑉 上的线性泛函;对于任一 𝑣 ∈ 𝑉，𝑤 ↦→ 𝛽(𝑣, 𝑤) 都是 𝑊 上的线性泛函. 𝑉 ×𝑊 上的双线性泛函构成的向量空间，记为 B(𝑉,𝑊). 如果 𝑊 = 𝑉 ，那么 𝑉 × 𝑊 上的双线性泛函就是双线性型了(见 9.1). B(𝑉,𝑊) 上的加法和数乘运算，定义为函数通常的加法和标量乘法.你可以验证，这些运 算使 B (𝑉, 𝑊) 成为向量空间，其加法恒等元是从 𝑉 × 𝑊 到 F 的零函数."
    },
    {
      "id": "9.70",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.70",
      "name_en": "dimension of the vector space of bilinear functionals",
      "name_zh": "双线性泛函构成的向量空间的维数 dimB(𝑉,𝑊) = (dim 𝑉)(dim 𝑊).",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "dim B(𝑉, 𝑊) = (dim 𝑉)(dim 𝑊).",
          "zh": "双线性泛函构成的向量空间的维数 dimB(𝑉,𝑊) = (dim 𝑉)(dim 𝑊)."
        }
      ],
      "note": null,
      "statement_en": "dim B(𝑉, 𝑊) = (dim 𝑉)(dim 𝑊).",
      "statement_zh": "双线性泛函构成的向量空间的维数 dimB(𝑉,𝑊) = (dim 𝑉)(dim 𝑊)."
    },
    {
      "id": "9.71",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.71",
      "name_en": "tensor product, 𝑉 ⊗ 𝑊, 𝑣 ⊗ 𝑤",
      "name_zh": "张量积(tensor product)、𝑉 ⊗ 𝑊、𝑣 ⊗ 𝑤 张量积𝑉 ⊗𝑊 定义为 B(𝑉′,𝑊′).",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "The tensor product V ⊗ W is defined to be B(V′, W′).",
          "zh": "张量积 V ⊗ W 定义为 B(V′, W′)。"
        },
        {
          "t": "bullet",
          "en": "For v ∈ V and w ∈ W, the tensor product v ⊗ w is the element of V ⊗ W defined by (v ⊗ w)(φ, τ) = φ(v) τ(w) for all (φ, τ) ∈ V′ × W′.",
          "zh": "对于 v ∈ V 与 w ∈ W，张量积 v ⊗ w 是 V ⊗ W 中由 (v ⊗ w)(φ, τ) = φ(v) τ(w)（对所有 (φ, τ) ∈ V′ × W′）定义的元素。"
        }
      ],
      "note": null,
      "statement_en": "The tensor product V ⊗ W is defined to be B(V′, W′). For v ∈ V and w ∈ W, the tensor product v ⊗ w is the element of V ⊗ W defined by (v ⊗ w)(φ, τ) = φ(v) τ(w) for all (φ, τ) ∈ V′ × W′.",
      "statement_zh": "张量积 V ⊗ W 定义为 B(V′, W′)。 对于 v ∈ V 与 w ∈ W，张量积 v ⊗ w 是 V ⊗ W 中由 (v ⊗ w)(φ, τ) = φ(v) τ(w)（对所有 (φ, τ) ∈ V′ × W′）定义的元素。"
    },
    {
      "id": "9.72",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.72",
      "name_en": "dimension of the tensor product of two vector spaces",
      "name_zh": "两向量空间的张量积的维数 dim(𝑉 ⊗ 𝑊) = (dim 𝑉)(dim 𝑊).",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "dim(𝑉 ⊗ 𝑊) = (dim 𝑉)(dim 𝑊).",
          "zh": "两向量空间的张量积的维数 dim(𝑉 ⊗ 𝑊) = (dim 𝑉)(dim 𝑊)."
        }
      ],
      "note": null,
      "statement_en": "dim(𝑉 ⊗ 𝑊) = (dim 𝑉)(dim 𝑊).",
      "statement_zh": "两向量空间的张量积的维数 dim(𝑉 ⊗ 𝑊) = (dim 𝑉)(dim 𝑊)."
    },
    {
      "id": "9.73",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.73",
      "name_en": "bilinearity of tensor product",
      "name_zh": "张量积的双线性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣,𝑣<sub>1</sub>,𝑣<sub>2</sub> ∈ 𝑉 and 𝑤,𝑤<sub>1</sub>,𝑤<sub>2</sub> ∈ 𝑊 and 𝜆 ∈ 𝐅. Then (𝑣<sub>1</sub> +𝑣<sub>2</sub>)⊗𝑤 = 𝑣<sub>1</sub> ⊗𝑤+𝑣<sub>2</sub> ⊗𝑤 and 𝑣⊗(𝑤<sub>1</sub> +𝑤<sub>2</sub>) = 𝑣⊗𝑤<sub>1</sub> +𝑣⊗𝑤<sub>2</sub> and",
          "zh": "设 𝑣,𝑣<sub>1</sub>,𝑣<sub>2</sub> ∈ 𝑉，𝑤,𝑤<sub>1</sub>,𝑤<sub>2</sub> ∈ 𝑊，𝜆 ∈ F.那么就有 (𝑣<sub>1</sub> +𝑣<sub>2</sub>)⊗𝑤 = 𝑣<sub>1</sub> ⊗𝑤+𝑣<sub>2</sub> ⊗𝑤 和 𝑣⊗(𝑤<sub>1</sub> +𝑤<sub>2</sub>) = 𝑣⊗𝑤<sub>1</sub> +𝑣⊗𝑤<sub>2</sub> 以及 𝜆(𝑣 ⊗ 𝑤) = (𝜆𝑣) ⊗ 𝑤 = 𝑣 ⊗ (𝜆𝑤)."
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣,𝑣1,𝑣2 ∈ 𝑉 and 𝑤,𝑤1,𝑤2 ∈ 𝑊 and 𝜆 ∈ 𝐅. Then (𝑣1 +𝑣2)⊗𝑤 = 𝑣1 ⊗𝑤+𝑣2 ⊗𝑤 and 𝑣⊗(𝑤1 +𝑤2) = 𝑣⊗𝑤1 +𝑣⊗𝑤2 and",
      "statement_zh": "设 𝑣,𝑣1,𝑣2 ∈ 𝑉，𝑤,𝑤1,𝑤2 ∈ 𝑊，𝜆 ∈ F.那么就有 (𝑣1 +𝑣2)⊗𝑤 = 𝑣1 ⊗𝑤+𝑣2 ⊗𝑤 和 𝑣⊗(𝑤1 +𝑤2) = 𝑣⊗𝑤1 +𝑣⊗𝑤2 以及 𝜆(𝑣 ⊗ 𝑤) = (𝜆𝑣) ⊗ 𝑤 = 𝑣 ⊗ (𝜆𝑤)."
    },
    {
      "id": "9.74",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.74",
      "name_en": "basis of",
      "name_zh": "𝑉⊗𝑊的基",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "(a) If 𝑒<sub>1</sub>, …, 𝑒<sub>𝑚</sub> and 𝑓<sub>1</sub>, …, 𝑓<sub>𝑛</sub> are both linearly independent lists, then {𝑒<sub>𝑗</sub> ⊗ 𝑓<sub>𝑘</sub>}𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 is a linearly independent list in 𝑉 ⊗ 𝑊.",
          "zh": "(a) 如果 𝑒<sub>1</sub>,…,𝑒<sub>𝑚</sub> 和 𝑓<sub>1</sub>,…, 𝑓<sub>𝑛</sub> 都是线性无关组，那么 \b 是 𝑉 ⊗ 𝑊 中的线性无关组. 𝑒 𝑗 ⊗ 𝑓<sub>𝑘</sub> 𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 312 是𝑊的基，那么组\b𝑒<sub>𝑗</sub>⊗𝑓<sub>𝑘</sub> 𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛是 𝑉 ⊗ 𝑊 的基."
        },
        {
          "t": "bullet",
          "en": "(b) If 𝑒<sub>1</sub>,…,𝑒<sub>𝑚</sub> is a basis of 𝑉 and 𝑓<sub>1</sub>,…, 𝑓<sub>𝑛</sub> is a basis of 𝑊, then the list {𝑒<sub>𝑗</sub> ⊗ 𝑓<sub>𝑘</sub> }𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 is a basis of 𝑉 ⊗ 𝑊.",
          "zh": "(b)"
        }
      ],
      "note": null,
      "statement_en": "(a) If 𝑒1, …, 𝑒𝑚 and 𝑓1, …, 𝑓𝑛 are both linearly independent lists, then {𝑒𝑗 ⊗ 𝑓𝑘}𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 is a linearly independent list in 𝑉 ⊗ 𝑊. (b) If 𝑒1,…,𝑒𝑚 is a basis of 𝑉 and 𝑓1,…, 𝑓𝑛 is a basis of 𝑊, then the list {𝑒𝑗 ⊗ 𝑓𝑘 }𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 is a basis of 𝑉 ⊗ 𝑊.",
      "statement_zh": "(a) 如果 𝑒1,…,𝑒𝑚 和 𝑓1,…, 𝑓𝑛 都是线性无关组，那么 \b 是 𝑉 ⊗ 𝑊 中的线性无关组. 𝑒 𝑗 ⊗ 𝑓𝑘 𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 312 是𝑊的基，那么组\b𝑒𝑗⊗𝑓𝑘 𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛是 𝑉 ⊗ 𝑊 的基. (b)"
    },
    {
      "id": "9.77",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.77",
      "name_en": "bilinear map",
      "name_zh": "双线性映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear map from 𝑉 × 𝑊 to a vector space 𝑈 is a function Γ ∶ 𝑉 × 𝑊 → 𝑈 such that 𝑣 ↦ Γ(𝑣,𝑤) is a linear map from 𝑉 to 𝑈 for each 𝑤 ∈ 𝑊 and 𝑤 ↦ Γ(𝑣, 𝑤) is a linear map from 𝑊 to 𝑈 for each 𝑣 ∈ 𝑉.",
          "zh": "从 𝑉 ×𝑊 到向量空间 𝑈 的双线性映射是这样一个函数 Γ : 𝑉 ×𝑊 → 𝑈，其使得 𝑣 ↦→ Γ(𝑣, 𝑤) 对任一 𝑤 ∈ 𝑊 都是从 𝑉 到 𝑈 的线性映射，𝑤 ↦→ Γ(𝑣, 𝑤) 对任一 𝑣 ∈ 𝑉 都是从 𝑊 到 𝑈 的 线性映射."
        }
      ],
      "note": null,
      "statement_en": "A bilinear map from 𝑉 × 𝑊 to a vector space 𝑈 is a function Γ ∶ 𝑉 × 𝑊 → 𝑈 such that 𝑣 ↦ Γ(𝑣,𝑤) is a linear map from 𝑉 to 𝑈 for each 𝑤 ∈ 𝑊 and 𝑤 ↦ Γ(𝑣, 𝑤) is a linear map from 𝑊 to 𝑈 for each 𝑣 ∈ 𝑉.",
      "statement_zh": "从 𝑉 ×𝑊 到向量空间 𝑈 的双线性映射是这样一个函数 Γ : 𝑉 ×𝑊 → 𝑈，其使得 𝑣 ↦→ Γ(𝑣, 𝑤) 对任一 𝑤 ∈ 𝑊 都是从 𝑉 到 𝑈 的线性映射，𝑤 ↦→ Γ(𝑣, 𝑤) 对任一 𝑣 ∈ 𝑉 都是从 𝑊 到 𝑈 的 线性映射."
    },
    {
      "id": "9.79",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.79",
      "name_en": "converting bilinear maps to linear maps Suppose",
      "name_zh": "化双线性映射为线性映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑈 is a vector space. (a) Suppose Γ ∶ 𝑉 × 𝑊 → 𝑈 is a bilinear map. Then there exists a unique linear map Γ̂ ∶ 𝑉 ⊗ 𝑊 → 𝑈 such that Γ̂(𝑣 ⊗ 𝑤) = Γ(𝑣, 𝑤) (b) Conversely, suppose 𝑇 ∶ 𝑉 ⊗ 𝑊 → 𝑈 is a linear map. Then there exists a 𝑇#(𝑣, 𝑤) = 𝑇(𝑣 ⊗ 𝑤) for all (𝑣, 𝑤) ∈ 𝑉 × 𝑊.",
          "zh": "(a) 设Γ:𝑉×𝑊→𝑈是双线性映射，那么存在唯一的线性映射Γˆ:𝑉⊗𝑊→𝑈使得 Γˆ (𝑣 ⊗ 𝑤) = Γ (𝑣, 𝑤) 对所有 (𝑣, 𝑤) ∈ 𝑉 × 𝑊 成立. (b) 反之，设𝑇 :𝑉 ⊗𝑊 →𝑈 是线性映射，那么存在唯一的双线性映射𝑇# :𝑉 ×𝑊 →𝑈 使得 对所有 (𝑣, 𝑤) ∈ 𝑉 × 𝑊 成立. 𝑇#(𝑣,𝑤) = 𝑇(𝑣 ⊗ 𝑤)"
        }
      ],
      "note": null,
      "statement_en": "𝑈 is a vector space. (a) Suppose Γ ∶ 𝑉 × 𝑊 → 𝑈 is a bilinear map. Then there exists a unique linear map Γ̂ ∶ 𝑉 ⊗ 𝑊 → 𝑈 such that Γ̂(𝑣 ⊗ 𝑤) = Γ(𝑣, 𝑤) (b) Conversely, suppose 𝑇 ∶ 𝑉 ⊗ 𝑊 → 𝑈 is a linear map. Then there exists a 𝑇#(𝑣, 𝑤) = 𝑇(𝑣 ⊗ 𝑤) for all (𝑣, 𝑤) ∈ 𝑉 × 𝑊.",
      "statement_zh": "(a) 设Γ:𝑉×𝑊→𝑈是双线性映射，那么存在唯一的线性映射Γˆ:𝑉⊗𝑊→𝑈使得 Γˆ (𝑣 ⊗ 𝑤) = Γ (𝑣, 𝑤) 对所有 (𝑣, 𝑤) ∈ 𝑉 × 𝑊 成立. (b) 反之，设𝑇 :𝑉 ⊗𝑊 →𝑈 是线性映射，那么存在唯一的双线性映射𝑇# :𝑉 ×𝑊 →𝑈 使得 对所有 (𝑣, 𝑤) ∈ 𝑉 × 𝑊 成立. 𝑇#(𝑣,𝑤) = 𝑇(𝑣 ⊗ 𝑤)"
    },
    {
      "id": "9.80",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.80",
      "name_en": "inner product on tensor product of two inner product spaces Suppose",
      "name_zh": "两内积空间所成张量积上的内积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉 and 𝑊 are inner product spaces. Then there is a unique inner product on 𝑉 ⊗ 𝑊 such that ⟨𝑣 ⊗ 𝑤,𝑢 ⊗ 𝑥⟩ = ⟨𝑣,𝑢⟩⟨𝑤,𝑥⟩ for all 𝑣, 𝑢 ∈ 𝑉 and 𝑤, 𝑥 ∈ 𝑊.",
          "zh": "设 𝑉 和 𝑊 是内积空间.那么，𝑉 ⊗ 𝑊 上存在唯一一种内积使得 ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩ ⟨𝑤, 𝑥⟩ 对所有𝑣,𝑢 ∈ 𝑉 和𝑤,𝑥 ∈ 𝑊 成立. ∑𝑛 ∑𝑚 𝑘 = 1 𝑗 = 1 ! = 𝑎<sub>𝑗</sub>𝑏<sub>𝑘</sub>Γˆ(𝑒<sub>𝑗</sub> ⊗ 𝑓<sub>𝑘</sub>) 𝑘 = 1 𝑗 = 1 ∑𝑛 ∑𝑚 = 𝑎<sub>𝑗</sub>𝑏<sub>𝑘</sub>Γ(𝑒<sub>𝑗</sub>, 𝑓<sub>𝑘</sub>) 𝑘 = 1 𝑗 = 1 = Γ(𝑣, 𝑤)， 即待证等式成立，其中第二行成立是因为 Γˆ 是线性的，第三行成立是因为 Γˆ 的定义，第四行 成立是因为 Γ 是双线性的. 根据 9.74 (b)，可得满足 Γˆ (𝑣 ⊗ 𝑤) = Γ(𝑣, 𝑤) 的线性映射 Γˆ 具有唯一性，也就完成了 (a) 的 证明. 为证明(b)，定义函数𝑇# :𝑉×𝑊→𝑈为𝑇#(𝑣,𝑤) = 𝑇(𝑣⊗𝑤)对所有(𝑣,𝑤) ∈ 𝑉×𝑊成立. 由张量积的双线性(见 9.73)和 𝑇 的线性，可得 𝑇# 是双线性的. 显然，满足条件的 𝑇# 是唯一的. 要"
        }
      ],
      "note": null,
      "statement_en": "𝑉 and 𝑊 are inner product spaces. Then there is a unique inner product on 𝑉 ⊗ 𝑊 such that ⟨𝑣 ⊗ 𝑤,𝑢 ⊗ 𝑥⟩ = ⟨𝑣,𝑢⟩⟨𝑤,𝑥⟩ for all 𝑣, 𝑢 ∈ 𝑉 and 𝑤, 𝑥 ∈ 𝑊.",
      "statement_zh": "设 𝑉 和 𝑊 是内积空间.那么，𝑉 ⊗ 𝑊 上存在唯一一种内积使得 ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩ ⟨𝑤, 𝑥⟩ 对所有𝑣,𝑢 ∈ 𝑉 和𝑤,𝑥 ∈ 𝑊 成立. ∑𝑛 ∑𝑚 𝑘 = 1 𝑗 = 1 ! = 𝑎𝑗𝑏𝑘Γˆ(𝑒𝑗 ⊗ 𝑓𝑘) 𝑘 = 1 𝑗 = 1 ∑𝑛 ∑𝑚 = 𝑎𝑗𝑏𝑘Γ(𝑒𝑗, 𝑓𝑘) 𝑘 = 1 𝑗 = 1 = Γ(𝑣, 𝑤)， 即待证等式成立，其中第二行成立是因为 Γˆ 是线性的，第三行成立是因为 Γˆ 的定义，第四行 成立是因为 Γ 是双线性的. 根据 9.74 (b)，可得满足 Γˆ (𝑣 ⊗ 𝑤) = Γ(𝑣, 𝑤) 的线性映射 Γˆ 具有唯一性，也就完成了 (a) 的 证明. 为证明(b)，定义函数𝑇# :𝑉×𝑊→𝑈为𝑇#(𝑣,𝑤) = 𝑇(𝑣⊗𝑤)对所有(𝑣,𝑤) ∈ 𝑉×𝑊成立. 由张量积的双线性(见 9.73)和 𝑇 的线性，可得 𝑇# 是双线性的. 显然，满足条件的 𝑇# 是唯一的. 要"
    },
    {
      "id": "9.81",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.81",
      "name_en": "defines an inner product on",
      "name_zh": "defines an inner product on",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉 ⊗ 𝑊 is left to the reader [use 9.74(b)]. Suppose that 𝑣,𝑢 ∈ 𝑉 and 𝑤,𝑥 ∈ 𝑊. Let 𝑣<sub>1</sub>,…,𝑣<sub>𝑚</sub> ∈ 𝐅 be such that 𝑣 = 𝑣<sub>1</sub>𝑒<sub>1</sub> + ⋯ + 𝑣<sub>𝑚</sub>𝑒<sub>𝑚</sub>, with similar expressions for 𝑢, 𝑤, and 𝑥. Then 𝑚𝑛𝑚𝑛 ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨ ∑ 𝑣<sub>𝑗</sub>𝑒<sub>𝑗</sub> ⊗ ∑ 𝑤<sub>𝑘</sub> 𝑓<sub>𝑘</sub>, ∑ 𝑢<sub>𝑗</sub>𝑒<sub>𝑗</sub> ⊗ ∑ 𝑥<sub>𝑘</sub> 𝑓<sub>𝑘</sub>⟩ 𝑗 = 1 𝑘 = 1 𝑗 = 1 𝑘 = 1 𝑛𝑚 𝑛𝑚 = ⟨∑ ∑ 𝑣<sub>𝑗</sub>𝑤<sub>𝑘</sub>𝑒<sub>𝑗</sub> ⊗ 𝑓<sub>𝑘</sub>,∑ ∑ 𝑢<sub>𝑗</sub>𝑥<sub>𝑘</sub>𝑒<sub>𝑗</sub> ⊗ 𝑓<sub>𝑘</sub>⟩ 𝑘 = 1 𝑗 = 1 𝑘 = 1 𝑗 = 1 𝑛𝑚 = ∑ ∑ 𝑣<sub>𝑗</sub>𝑢<sub>𝑗</sub>𝑤<sub>𝑘</sub>𝑥<sub>𝑘</sub> 𝑘 = 1 𝑗 = 1 𝑚𝑛 = (∑ 𝑣<sub>𝑗</sub>𝑢<sub>𝑗</sub>)(∑ 𝑤<sub>𝑘</sub>𝑥<sub>𝑘</sub>) 𝑗 = 1 𝑘 = 1 = ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩. There is only one inner product on 𝑉⊗𝑊 such that ⟨𝑣⊗𝑤, 𝑢⊗𝑥⟩ = ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩ for all 𝑣,𝑢 ∈ 𝑉 and 𝑤,𝑥 ∈ 𝑊 because every element of 𝑉⊗ 𝑊 can be written as a linear combination of elements of the form 𝑣 ⊗ 𝑤 [by 9.74(b)]. The definition below of a natural inner product on 𝑉 ⊗ 𝑊 is now justified by 9.80. We could not have simply defined ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ to be ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩ (and then used additivity in each slot separately to extend the definition to 𝑉 ⊗ 𝑊) without some",
          "zh": "defines an inner product on"
        }
      ],
      "note": null,
      "statement_en": "𝑉 ⊗ 𝑊 is left to the reader [use 9.74(b)]. Suppose that 𝑣,𝑢 ∈ 𝑉 and 𝑤,𝑥 ∈ 𝑊. Let 𝑣1,…,𝑣𝑚 ∈ 𝐅 be such that 𝑣 = 𝑣1𝑒1 + ⋯ + 𝑣𝑚𝑒𝑚, with similar expressions for 𝑢, 𝑤, and 𝑥. Then 𝑚𝑛𝑚𝑛 ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨ ∑ 𝑣𝑗𝑒𝑗 ⊗ ∑ 𝑤𝑘 𝑓𝑘, ∑ 𝑢𝑗𝑒𝑗 ⊗ ∑ 𝑥𝑘 𝑓𝑘⟩ 𝑗 = 1 𝑘 = 1 𝑗 = 1 𝑘 = 1 𝑛𝑚 𝑛𝑚 = ⟨∑ ∑ 𝑣𝑗𝑤𝑘𝑒𝑗 ⊗ 𝑓𝑘,∑ ∑ 𝑢𝑗𝑥𝑘𝑒𝑗 ⊗ 𝑓𝑘⟩ 𝑘 = 1 𝑗 = 1 𝑘 = 1 𝑗 = 1 𝑛𝑚 = ∑ ∑ 𝑣𝑗𝑢𝑗𝑤𝑘𝑥𝑘 𝑘 = 1 𝑗 = 1 𝑚𝑛 = (∑ 𝑣𝑗𝑢𝑗)(∑ 𝑤𝑘𝑥𝑘) 𝑗 = 1 𝑘 = 1 = ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩. There is only one inner product on 𝑉⊗𝑊 such that ⟨𝑣⊗𝑤, 𝑢⊗𝑥⟩ = ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩ for all 𝑣,𝑢 ∈ 𝑉 and 𝑤,𝑥 ∈ 𝑊 because every element of 𝑉⊗ 𝑊 can be written as a linear combination of elements of the form 𝑣 ⊗ 𝑤 [by 9.74(b)]. The definition below of a natural inner product on 𝑉 ⊗ 𝑊 is now justified by 9.80. We could not have simply defined ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ to be ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩ (and then used additivity in each slot separately to extend the definition to 𝑉 ⊗ 𝑊) without some",
      "statement_zh": "defines an inner product on"
    },
    {
      "id": "9.82",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.82",
      "name_en": "inner product on tensor product of two inner product spaces",
      "name_zh": "两内积空间所成张量积上的内积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "the unique function ⟨⋅, ⋅⟩ from (𝑉 ⊗ 𝑊) × (𝑉 ⊗ 𝑊) to 𝐅 such that ⟨𝑣 ⊗ 𝑤,𝑢 ⊗ 𝑥⟩ = ⟨𝑣,𝑢⟩⟨𝑤,𝑥⟩ for all 𝑣, 𝑢 ∈ 𝑉 and 𝑤, 𝑥 ∈ 𝑊. Take 𝑢 = 𝑣 and 𝑥 = 𝑤 in the equation above and then take square roots to show that ‖𝑣 ⊗ 𝑤‖ = ‖𝑣‖ ‖𝑤‖ for all 𝑣 ∈ 𝑉 and all 𝑤 ∈ 𝑊. The construction of the inner product in the",
          "zh": "设 𝑉 和 𝑊 是内积空间.𝑉 ⊗ 𝑊 上的内积是唯一使得 ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩ ⟨𝑤, 𝑥⟩ 对所有 𝑣, 𝑢 ∈ 𝑉 和 𝑤, 𝑥 ∈ 𝑊 成立的，从 (𝑉 ⊗ 𝑊) × (𝑉 ⊗ 𝑊) 到 F 的函数 ⟨·, ·⟩. 在上式中取 𝑢 = 𝑣 和 𝑥 = 𝑤，再开平方根，可得 ∥𝑣 ⊗ 𝑤∥ = ∥𝑣∥ ∥𝑤∥ 对所有𝑣 ∈ 𝑉 和所有𝑤 ∈ 𝑊 成立. 在 9.80 的证明中，内积的构造依赖于 𝑉 的规范正交基 𝑒<sub>1</sub>, …, 𝑒<sub>𝑚</sub> 和 𝑊 的规范正交基 𝑓<sub>1</sub>,…, 𝑓<sub>𝑛</sub>.式 (9.81) 意味着，\b𝑒<sub>𝑗</sub> ⊗ 𝑓<sub>𝑘</sub> 𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 是 𝑉 ⊗ 𝑊 的双下标规范正交组，从而是 𝑉 ⊗ 𝑊 的规范正交基【根据 9.74 (b)】.接下来这条结果之所以重要，是因为其中所用的规范正 交基，可以不同于 9.80 中定义内积所用的规范正交基.虽然在 9.80 的证明和下面这一结果中 这些基的记号是一样的，但是要将它们视为两组不同的规范正交基.6"
        }
      ],
      "note": null,
      "statement_en": "the unique function ⟨⋅, ⋅⟩ from (𝑉 ⊗ 𝑊) × (𝑉 ⊗ 𝑊) to 𝐅 such that ⟨𝑣 ⊗ 𝑤,𝑢 ⊗ 𝑥⟩ = ⟨𝑣,𝑢⟩⟨𝑤,𝑥⟩ for all 𝑣, 𝑢 ∈ 𝑉 and 𝑤, 𝑥 ∈ 𝑊. Take 𝑢 = 𝑣 and 𝑥 = 𝑤 in the equation above and then take square roots to show that ‖𝑣 ⊗ 𝑤‖ = ‖𝑣‖ ‖𝑤‖ for all 𝑣 ∈ 𝑉 and all 𝑤 ∈ 𝑊. The construction of the inner product in the",
      "statement_zh": "设 𝑉 和 𝑊 是内积空间.𝑉 ⊗ 𝑊 上的内积是唯一使得 ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩ ⟨𝑤, 𝑥⟩ 对所有 𝑣, 𝑢 ∈ 𝑉 和 𝑤, 𝑥 ∈ 𝑊 成立的，从 (𝑉 ⊗ 𝑊) × (𝑉 ⊗ 𝑊) 到 F 的函数 ⟨·, ·⟩. 在上式中取 𝑢 = 𝑣 和 𝑥 = 𝑤，再开平方根，可得 ∥𝑣 ⊗ 𝑤∥ = ∥𝑣∥ ∥𝑤∥ 对所有𝑣 ∈ 𝑉 和所有𝑤 ∈ 𝑊 成立. 在 9.80 的证明中，内积的构造依赖于 𝑉 的规范正交基 𝑒1, …, 𝑒𝑚 和 𝑊 的规范正交基 𝑓1,…, 𝑓𝑛.式 (9.81) 意味着，\b𝑒𝑗 ⊗ 𝑓𝑘 𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 是 𝑉 ⊗ 𝑊 的双下标规范正交组，从而是 𝑉 ⊗ 𝑊 的规范正交基【根据 9.74 (b)】.接下来这条结果之所以重要，是因为其中所用的规范正 交基，可以不同于 9.80 中定义内积所用的规范正交基.虽然在 9.80 的证明和下面这一结果中 这些基的记号是一样的，但是要将它们视为两组不同的规范正交基.6"
    },
    {
      "id": "9.83",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.83",
      "name_en": "orthonormal basis of",
      "name_zh": "𝑉 ⊗ 𝑊 的规范正交基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑉 ⊗ 𝑊 Suppose 𝑉 and 𝑊 are inner product spaces, and 𝑒<sub>1</sub>, …, 𝑒<sub>𝑚</sub> is an orthonormal basis of 𝑉 and 𝑓<sub>1</sub>, …, 𝑓<sub>𝑛</sub> is an orthonormal basis of 𝑊. Then {𝑒<sub>𝑗</sub> ⊗ 𝑓<sub>𝑘</sub>}𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 is an orthonormal basis of 𝑉 ⊗ 𝑊.",
          "zh": "设𝑉 和𝑊 是内积空间，且𝑒<sub>1</sub>,…,𝑒<sub>𝑚</sub> 是𝑉 的一个规范正交基，𝑓<sub>1</sub>,…, 𝑓<sub>𝑚</sub> 是𝑊 的一个规 范正交基.那么 是 𝑉 ⊗ 𝑊 的一个规范正交基. \b 𝑒 𝑗 ⊗ 𝑓<sub>𝑘</sub> 𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 6换句话说，不要误以为 9.83 只适用于 9.80 中定义内积时所用的那一对规范正交基."
        }
      ],
      "note": null,
      "statement_en": "𝑉 ⊗ 𝑊 Suppose 𝑉 and 𝑊 are inner product spaces, and 𝑒1, …, 𝑒𝑚 is an orthonormal basis of 𝑉 and 𝑓1, …, 𝑓𝑛 is an orthonormal basis of 𝑊. Then {𝑒𝑗 ⊗ 𝑓𝑘}𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 is an orthonormal basis of 𝑉 ⊗ 𝑊.",
      "statement_zh": "设𝑉 和𝑊 是内积空间，且𝑒1,…,𝑒𝑚 是𝑉 的一个规范正交基，𝑓1,…, 𝑓𝑚 是𝑊 的一个规 范正交基.那么 是 𝑉 ⊗ 𝑊 的一个规范正交基. \b 𝑒 𝑗 ⊗ 𝑓𝑘 𝑗 = 1,…,𝑚;𝑘 = 1,…,𝑛 6换句话说，不要误以为 9.83 只适用于 9.80 中定义内积时所用的那一对规范正交基."
    },
    {
      "id": "9.84",
      "kind": "notation",
      "chapter": "ch9",
      "number": "9.84",
      "name_en": "𝑉<sub>1</sub>,..",
      "name_zh": "𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub>",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For the rest of this subsection, 𝑚 denotes an integer greater than 1 and 𝑉<sub>1</sub>, …, 𝑉<sub>𝑚</sub> denote finite-dimensional vector spaces. The notion of an 𝑚-linear functional, which we are about to define, generalizes the notion of a bilinear functional (see 9.68). Recall that the use of the word “functional” indicates that we are mapping into the scalar field 𝐅. Recall also that the terminology “𝑚-linear form” is used in the special case 𝑉<sub>1</sub> = ⋯ = 𝑉<sub>𝑚</sub> (see 9.25). The notation B(𝑉<sub>1</sub>, …, 𝑉<sub>𝑚</sub>) generalizes our previous notation B(𝑉, 𝑊).",
          "zh": "本小节剩余部分中，𝑚表示大于1的整数，而𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub> 都表示有限维向量空间. 我们将要定义 𝑚 重线性泛函，这一概念推广了双线性泛函(见 9.68).回顾一下，“泛函” 一词指的是映射到标量域 F，以及，“𝑚 重线性型”这一术语用于特殊情形 𝑉<sub>1</sub> = ⋯ = 𝑉<sub>𝑚</sub>(见 9.25).B(𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub>) 这一记号推广了我们原先的 B(𝑉,𝑊)."
        }
      ],
      "note": null,
      "statement_en": "For the rest of this subsection, 𝑚 denotes an integer greater than 1 and 𝑉1, …, 𝑉𝑚 denote finite-dimensional vector spaces. The notion of an 𝑚-linear functional, which we are about to define, generalizes the notion of a bilinear functional (see 9.68). Recall that the use of the word “functional” indicates that we are mapping into the scalar field 𝐅. Recall also that the terminology “𝑚-linear form” is used in the special case 𝑉1 = ⋯ = 𝑉𝑚 (see 9.25). The notation B(𝑉1, …, 𝑉𝑚) generalizes our previous notation B(𝑉, 𝑊).",
      "statement_zh": "本小节剩余部分中，𝑚表示大于1的整数，而𝑉1,…,𝑉𝑚 都表示有限维向量空间. 我们将要定义 𝑚 重线性泛函，这一概念推广了双线性泛函(见 9.68).回顾一下，“泛函” 一词指的是映射到标量域 F，以及，“𝑚 重线性型”这一术语用于特殊情形 𝑉1 = ⋯ = 𝑉𝑚(见 9.25).B(𝑉1,…,𝑉𝑚) 这一记号推广了我们原先的 B(𝑉,𝑊)."
    },
    {
      "id": "9.85",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.85",
      "name_en": "𝑚-linear functional, the vector space B(𝑉<sub>1</sub>,..",
      "name_zh": "𝑚重线性泛函(𝑚-linearfunctional)、向量空间 B",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "An m-linear functional on V<sub>1</sub> × ⋯ × V<sub>m</sub> is a function β : V<sub>1</sub> × ⋯ × V<sub>m</sub> → F that is a linear functional in each slot when the other slots are held fixed.",
          "zh": "V<sub>1</sub> × ⋯ × V<sub>m</sub> 上的 m 重线性泛函是函数 β : V<sub>1</sub> × ⋯ × V<sub>m</sub> → F，它在其余位置固定时对每个位置都是线性泛函。"
        },
        {
          "t": "bullet",
          "en": "The vector space of m-linear functionals on V<sub>1</sub> × ⋯ × V<sub>m</sub> is denoted by B(V<sub>1</sub>, …, V<sub>m</sub>).",
          "zh": "V<sub>1</sub> × ⋯ × V<sub>m</sub> 上的 m 重线性泛函所成的向量空间记作 B(V<sub>1</sub>, …, V<sub>m</sub>)。"
        }
      ],
      "note": null,
      "statement_en": "An m-linear functional on V1 × ⋯ × Vm is a function β : V1 × ⋯ × Vm → F that is a linear functional in each slot when the other slots are held fixed. The vector space of m-linear functionals on V1 × ⋯ × Vm is denoted by B(V1, …, Vm).",
      "statement_zh": "V1 × ⋯ × Vm 上的 m 重线性泛函是函数 β : V1 × ⋯ × Vm → F，它在其余位置固定时对每个位置都是线性泛函。 V1 × ⋯ × Vm 上的 m 重线性泛函所成的向量空间记作 B(V1, …, Vm)。"
    },
    {
      "id": "9.87",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.87",
      "name_en": "dimension of the vector space of",
      "name_zh": "dimension of the vector space of",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑚-linear functionals dimB(𝑉<sub>1</sub>,…,𝑉<sub>𝑚</sub>) = (dim 𝑉<sub>1</sub>)⋯(dim 𝑉<sub>𝑚</sub>). Now we can define the tensor product of multiple vector spaces and the tensor product of elements of those vector spaces. The following definition is completely analogous to our previous definition (9.71) in the case 𝑚 = 2.",
          "zh": "dimension of the vector space of"
        }
      ],
      "note": null,
      "statement_en": "𝑚-linear functionals dimB(𝑉1,…,𝑉𝑚) = (dim 𝑉1)⋯(dim 𝑉𝑚). Now we can define the tensor product of multiple vector spaces and the tensor product of elements of those vector spaces. The following definition is completely analogous to our previous definition (9.71) in the case 𝑚 = 2.",
      "statement_zh": "dimension of the vector space of"
    },
    {
      "id": "9.88",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.88",
      "name_en": "tensor product, 𝑉<sub>1</sub> ⊗ ⋯ ⊗ 𝑉<sub>𝑚</sub>, 𝑣<sub>1</sub> ⊗ ⋯ ⊗ 𝑣<sub>𝑚</sub>",
      "name_zh": "张量积(tensor product)、𝑉<sub>1</sub> ⊗ ⋯ ⊗ 𝑉<sub>𝑚</sub>、𝑣<sub>1</sub> ⊗ ⋯ ⊗ 𝑣<sub>𝑚</sub>",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The tensor product 𝑉<sub>1</sub> ⊗ ⋯ ⊗ 𝑉<sub>𝑚</sub> is defined to be B(𝑉<sub>1</sub>′, …, 𝑉<sub>𝑚</sub>′). • For 𝑣<sub>1</sub> ∈ 𝑉<sub>1</sub>,…,𝑣<sub>𝑚</sub> ∈ 𝑉<sub>𝑚</sub>, the tensor product 𝑣<sub>1</sub> ⊗ ⋯ ⊗ 𝑣<sub>𝑚</sub> is the element of 𝑉<sub>1</sub> ⊗⋯⊗𝑉<sub>𝑚</sub> defined by (𝑣<sub>1</sub> ⊗ ⋯ ⊗ 𝑣<sub>𝑚</sub>)(𝜑1,…,𝜑𝑚) = 𝜑1(𝑣<sub>1</sub>)⋯𝜑𝑚(𝑣<sub>𝑚</sub>) for all (𝜑1,…,𝜑𝑚) ∈ 𝑉<sub>1</sub>′ × ⋯ × 𝑉<sub>𝑚</sub>′.",
          "zh": "张量积𝑉<sub>1</sub> ⊗···⊗𝑉<sub>𝑚</sub> 定义为 B(𝑉<sub>1</sub>′,…,𝑉<sub>𝑚</sub>′). 对于𝑣<sub>1</sub> ∈ 𝑉<sub>1</sub>,…,𝑣<sub>𝑚</sub> ∈ 𝑉<sub>𝑚</sub>，张量积𝑣<sub>1</sub> ⊗···⊗𝑣<sub>𝑚</sub> 是𝑉<sub>1</sub> ⊗···⊗𝑉<sub>𝑚</sub> 的元素，定义为 (𝑣<sub>1</sub> ⊗···⊗𝑣<sub>𝑚</sub>)(𝜑1,…,𝜑𝑚) = 𝜑1(𝑣<sub>1</sub>)···𝜑𝑚(𝑣<sub>𝑚</sub>) 对所有(𝜑1,…,𝜑𝑚) ∈ 𝑉<sub>1</sub>′×···×𝑉<sub>𝑚</sub>′ 成立. 接下来这条结果的证明，可以参照 𝑚 = 2 情形下的类似结果的证明方式(见 9.72)."
        }
      ],
      "note": {
        "en": "The next result can be proved by following the pattern of the",
        "zh": ""
      },
      "statement_en": "The tensor product 𝑉1 ⊗ ⋯ ⊗ 𝑉𝑚 is defined to be B(𝑉1′, …, 𝑉𝑚′). • For 𝑣1 ∈ 𝑉1,…,𝑣𝑚 ∈ 𝑉𝑚, the tensor product 𝑣1 ⊗ ⋯ ⊗ 𝑣𝑚 is the element of 𝑉1 ⊗⋯⊗𝑉𝑚 defined by (𝑣1 ⊗ ⋯ ⊗ 𝑣𝑚)(𝜑1,…,𝜑𝑚) = 𝜑1(𝑣1)⋯𝜑𝑚(𝑣𝑚) for all (𝜑1,…,𝜑𝑚) ∈ 𝑉1′ × ⋯ × 𝑉𝑚′. The next result can be proved by following the pattern of the",
      "statement_zh": "张量积𝑉1 ⊗···⊗𝑉𝑚 定义为 B(𝑉1′,…,𝑉𝑚′). 对于𝑣1 ∈ 𝑉1,…,𝑣𝑚 ∈ 𝑉𝑚，张量积𝑣1 ⊗···⊗𝑣𝑚 是𝑉1 ⊗···⊗𝑉𝑚 的元素，定义为 (𝑣1 ⊗···⊗𝑣𝑚)(𝜑1,…,𝜑𝑚) = 𝜑1(𝑣1)···𝜑𝑚(𝑣𝑚) 对所有(𝜑1,…,𝜑𝑚) ∈ 𝑉1′×···×𝑉𝑚′ 成立. 接下来这条结果的证明，可以参照 𝑚 = 2 情形下的类似结果的证明方式(见 9.72)."
    },
    {
      "id": "9.89",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.89",
      "name_en": "dimension of the tensor product dim",
      "name_zh": "张量积的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(𝑉<sub>1</sub> ⊗⋯⊗𝑉<sub>𝑚</sub>) = (dim 𝑉<sub>1</sub>)⋯(dim 𝑉<sub>𝑚</sub>). Our next result generalizes 9.74. 9.90 basisof 𝑉<sub>1</sub> ⊗⋯⊗𝑉<sub>𝑚</sub> Suppose dim 𝑉<sub>𝑘</sub> = 𝑛𝑘 and 𝑒<sub>1</sub>𝑘,…,𝑒<sub>𝑛</sub>𝑘 is a basis of 𝑉<sub>𝑘</sub> for 𝑘 = 1,…,𝑚. Then 𝑘 {𝑒<sub>𝑗</sub>1 ⊗ ⋯ ⊗ 𝑒<sub>𝑗</sub>𝑚 }𝑗 = 1,…,𝑛 ;⋯;𝑗 = 1,…,𝑛 1𝑚11𝑚𝑚 isabasisof 𝑉<sub>1</sub> ⊗⋯⊗𝑉<sub>𝑚</sub>. Suppose 𝑚 = 2 and 𝑒<sub>1</sub>,…,𝑒<sub>𝑛</sub>1 is a basis of 𝑉<sub>1</sub> and 𝑒<sub>12</sub>,…,𝑒<sub>𝑛</sub>2 is a basis of 𝑉<sub>2</sub>. Then with respect to the basis {𝑒<sub>𝑗</sub>1 ⊗ 𝑒<sub>𝑗</sub>2 }𝑗 = 1,…,𝑛 ;𝑗 = 1,…,𝑛 in the result above, the 121122 coefficients of an element of 𝑉<sub>1</sub> ⊗ 𝑉<sub>2</sub> can be represented by an 𝑛1-by-𝑛2 matrix that contains the coefficient of 𝑒<sub>𝑗</sub>1 ⊗𝑒<sub>𝑗</sub>2 in row 𝑗<sub>1</sub>, column 𝑗<sub>2</sub>. Thus we need a matrix, which is an array specified by two indices, to represent an element of 𝑉<sub>1</sub> ⊗ 𝑉<sub>2</sub>. If 𝑚 &gt; 2, then the result above shows that we need an array specified by 𝑚 indices to represent an arbitrary element of 𝑉<sub>1</sub> ⊗ ⋯ ⊗ 𝑉<sub>𝑚</sub>. Thus tensor products may appear when we deal with objects specified by arrays with multiple indices. The next definition generalizes the notion of a bilinear map (see 9.77). As with bilinear maps, the target space can be an arbitrary vector space.",
          "zh": "dim(𝑉<sub>1</sub> ⊗···⊗𝑉<sub>𝑚</sub>) = (dim 𝑉<sub>1</sub>)···(dim 𝑉<sub>𝑚</sub>). 接下来这条结果推广了 9.74."
        }
      ],
      "note": null,
      "statement_en": "(𝑉1 ⊗⋯⊗𝑉𝑚) = (dim 𝑉1)⋯(dim 𝑉𝑚). Our next result generalizes 9.74. 9.90 basisof 𝑉1 ⊗⋯⊗𝑉𝑚 Suppose dim 𝑉𝑘 = 𝑛𝑘 and 𝑒1𝑘,…,𝑒𝑛𝑘 is a basis of 𝑉𝑘 for 𝑘 = 1,…,𝑚. Then 𝑘 {𝑒𝑗1 ⊗ ⋯ ⊗ 𝑒𝑗𝑚 }𝑗 = 1,…,𝑛 ;⋯;𝑗 = 1,…,𝑛 1𝑚11𝑚𝑚 isabasisof 𝑉1 ⊗⋯⊗𝑉𝑚. Suppose 𝑚 = 2 and 𝑒1,…,𝑒𝑛1 is a basis of 𝑉1 and 𝑒12,…,𝑒𝑛2 is a basis of 𝑉2. Then with respect to the basis {𝑒𝑗1 ⊗ 𝑒𝑗2 }𝑗 = 1,…,𝑛 ;𝑗 = 1,…,𝑛 in the result above, the 121122 coefficients of an element of 𝑉1 ⊗ 𝑉2 can be represented by an 𝑛1-by-𝑛2 matrix that contains the coefficient of 𝑒𝑗1 ⊗𝑒𝑗2 in row 𝑗1, column 𝑗2. Thus we need a matrix, which is an array specified by two indices, to represent an element of 𝑉1 ⊗ 𝑉2. If 𝑚 &gt; 2, then the result above shows that we need an array specified by 𝑚 indices to represent an arbitrary element of 𝑉1 ⊗ ⋯ ⊗ 𝑉𝑚. Thus tensor products may appear when we deal with objects specified by arrays with multiple indices. The next definition generalizes the notion of a bilinear map (see 9.77). As with bilinear maps, the target space can be an arbitrary vector space.",
      "statement_zh": "dim(𝑉1 ⊗···⊗𝑉𝑚) = (dim 𝑉1)···(dim 𝑉𝑚). 接下来这条结果推广了 9.74."
    },
    {
      "id": "9.90",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.90",
      "name_en": "basis of V<sub>1</sub> ⊗ ⋯ ⊗ V<sub>m</sub>",
      "name_zh": "V<sub>1</sub> ⊗ ⋯ ⊗ V<sub>m</sub> 的基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose dim V<sub>k</sub> = n<sub>k</sub> and e<sub>1</sub><sup>(k)</sup>, …, e<sub>n<sub>k</sub></sub><sup>(k)</sup> is a basis of V<sub>k</sub> for k = 1, …, m. Then { e<sub>j<sub>1</sub></sub><sup>(1)</sup> ⊗ ⋯ ⊗ e<sub>j<sub>m</sub></sub><sup>(m)</sup> : j<sub>1</sub> = 1, …, n<sub>1</sub>; …; j<sub>m</sub> = 1, …, n<sub>m</sub> } is a basis of V<sub>1</sub> ⊗ ⋯ ⊗ V<sub>m</sub>.",
          "zh": "设 dim V<sub>k</sub> = n<sub>k</sub> 且 e<sub>1</sub><sup>(k)</sup>, …, e<sub>n<sub>k</sub></sub><sup>(k)</sup> 是 V<sub>k</sub> 的基（k = 1, …, m）。那么 { e<sub>j<sub>1</sub></sub><sup>(1)</sup> ⊗ ⋯ ⊗ e<sub>j<sub>m</sub></sub><sup>(m)</sup> : j<sub>1</sub> = 1, …, n<sub>1</sub>; …; j<sub>m</sub> = 1, …, n<sub>m</sub> } 是 V<sub>1</sub> ⊗ ⋯ ⊗ V<sub>m</sub> 的基。"
        }
      ],
      "note": null,
      "statement_en": "Suppose dim Vk = nk and e1(k), …, enk(k) is a basis of Vk for k = 1, …, m. Then { ej1(1) ⊗ ⋯ ⊗ ejm(m) : j1 = 1, …, n1; …; jm = 1, …, nm } is a basis of V1 ⊗ ⋯ ⊗ Vm.",
      "statement_zh": "设 dim Vk = nk 且 e1(k), …, enk(k) 是 Vk 的基（k = 1, …, m）。那么 { ej1(1) ⊗ ⋯ ⊗ ejm(m) : j1 = 1, …, n1; …; jm = 1, …, nm } 是 V1 ⊗ ⋯ ⊗ Vm 的基。"
    },
    {
      "id": "9.91",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.91",
      "name_en": "𝑚-linear map",
      "name_zh": "𝑚 重线性映射(𝑚-linear map) 从𝑉<sub>1</sub>×···×𝑉<sub>𝑚</sub>到向量空间𝑈的𝑚重线性映射是满足如下性质的函数Γ:𝑉<sub>1</sub>×···×𝑉<sub>𝑚</sub> →𝑈",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An m-linear map from V<sub>1</sub> × ⋯ × V<sub>m</sub> to a vector space U is a function Γ : V<sub>1</sub> × ⋯ × V<sub>m</sub> → U that is a linear map in each slot when the other slots are held fixed.",
          "zh": "从 V<sub>1</sub> × ⋯ × V<sub>m</sub> 到向量空间 U 的 m 重线性映射是函数 Γ : V<sub>1</sub> × ⋯ × V<sub>m</sub> → U，它在其余位置固定时对每个位置都是线性映射。"
        }
      ],
      "note": null,
      "statement_en": "An m-linear map from V1 × ⋯ × Vm to a vector space U is a function Γ : V1 × ⋯ × Vm → U that is a linear map in each slot when the other slots are held fixed.",
      "statement_zh": "从 V1 × ⋯ × Vm 到向量空间 U 的 m 重线性映射是函数 Γ : V1 × ⋯ × Vm → U，它在其余位置固定时对每个位置都是线性映射。"
    },
    {
      "id": "9.92",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.92",
      "name_en": "converting 𝑚-linear maps to linear maps",
      "name_zh": "化 𝑚 重线性映射为线性映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose U is a vector space.",
          "zh": "假设 U 是向量空间。"
        },
        {
          "t": "bullet",
          "en": "(a) Suppose that Γ : V<sub>1</sub> × ⋯ × V<sub>m</sub> → U is an m-linear map. Then there exists a unique linear map Γ̂ : V<sub>1</sub> ⊗ ⋯ ⊗ V<sub>m</sub> → U such that Γ̂(v<sub>1</sub> ⊗ ⋯ ⊗ v<sub>m</sub>) = Γ(v<sub>1</sub>, …, v<sub>m</sub>) for all (v<sub>1</sub>, …, v<sub>m</sub>) ∈ V<sub>1</sub> × ⋯ × V<sub>m</sub>.",
          "zh": "(a) 假设 Γ : V<sub>1</sub> × ⋯ × V<sub>m</sub> → U 是 m 重线性映射。那么存在唯一的线性映射 Γ̂ : V<sub>1</sub> ⊗ ⋯ ⊗ V<sub>m</sub> → U，使得对所有 (v<sub>1</sub>, …, v<sub>m</sub>) ∈ V<sub>1</sub> × ⋯ × V<sub>m</sub> 有 Γ̂(v<sub>1</sub> ⊗ ⋯ ⊗ v<sub>m</sub>) = Γ(v<sub>1</sub>, …, v<sub>m</sub>)。"
        },
        {
          "t": "bullet",
          "en": "(b) Conversely, suppose T : V<sub>1</sub> ⊗ ⋯ ⊗ V<sub>m</sub> → U is a linear map. Then there exists a unique m-linear map T<sup>#</sup> : V<sub>1</sub> × ⋯ × V<sub>m</sub> → U such that T<sup>#</sup>(v<sub>1</sub>, …, v<sub>m</sub>) = T(v<sub>1</sub> ⊗ ⋯ ⊗ v<sub>m</sub>) for all (v<sub>1</sub>, …, v<sub>m</sub>) ∈ V<sub>1</sub> × ⋯ × V<sub>m</sub>.",
          "zh": "(b) 反之，假设 T : V<sub>1</sub> ⊗ ⋯ ⊗ V<sub>m</sub> → U 是线性映射。那么存在唯一的 m 重线性映射 T<sup>#</sup> : V<sub>1</sub> × ⋯ × V<sub>m</sub> → U，使得对所有 (v<sub>1</sub>, …, v<sub>m</sub>) ∈ V<sub>1</sub> × ⋯ × V<sub>m</sub> 有 T<sup>#</sup>(v<sub>1</sub>, …, v<sub>m</sub>) = T(v<sub>1</sub> ⊗ ⋯ ⊗ v<sub>m</sub>)。"
        }
      ],
      "note": null,
      "statement_en": "Suppose U is a vector space. (a) Suppose that Γ : V1 × ⋯ × Vm → U is an m-linear map. Then there exists a unique linear map Γ̂ : V1 ⊗ ⋯ ⊗ Vm → U such that Γ̂(v1 ⊗ ⋯ ⊗ vm) = Γ(v1, …, vm) for all (v1, …, vm) ∈ V1 × ⋯ × Vm. (b) Conversely, suppose T : V1 ⊗ ⋯ ⊗ Vm → U is a linear map. Then there exists a unique m-linear map T# : V1 × ⋯ × Vm → U such that T#(v1, …, vm) = T(v1 ⊗ ⋯ ⊗ vm) for all (v1, …, vm) ∈ V1 × ⋯ × Vm.",
      "statement_zh": "假设 U 是向量空间。 (a) 假设 Γ : V1 × ⋯ × Vm → U 是 m 重线性映射。那么存在唯一的线性映射 Γ̂ : V1 ⊗ ⋯ ⊗ Vm → U，使得对所有 (v1, …, vm) ∈ V1 × ⋯ × Vm 有 Γ̂(v1 ⊗ ⋯ ⊗ vm) = Γ(v1, …, vm)。 (b) 反之，假设 T : V1 ⊗ ⋯ ⊗ Vm → U 是线性映射。那么存在唯一的 m 重线性映射 T# : V1 × ⋯ × Vm → U，使得对所有 (v1, …, vm) ∈ V1 × ⋯ × Vm 有 T#(v1, …, vm) = T(v1 ⊗ ⋯ ⊗ vm)。"
    }
  ]
};
