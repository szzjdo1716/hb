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
  "eq_ids": [
    "2.29",
    "7.71",
    "7.76",
    "7.77",
    "7.78"
  ],
  "eq_map": {
    "2.29": "2.28",
    "7.71": "7.70",
    "7.76": "7.75",
    "7.77": "7.75",
    "7.78": "7.75"
  },
  "entries": [
    {
      "id": "1.1",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.1",
      "name_en": "complex numbers, 𝐂",
      "name_zh": "复数（complex numbers）、C",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A complex number is an ordered pair(𝑎, 𝑏), where 𝑎, 𝑏 ∈ 𝐑, but we will write this as 𝑎 + 𝑏𝑖.",
          "zh": "一个复数是一个有序对(𝑎, 𝑏)，其中𝑎, 𝑏 ∈ R，不过我们会把这写成𝑎 + 𝑏 i． 全体复数所构成的集合用 C 表示："
        },
        {
          "t": "bullet",
          "en": "The set of all complex numbers is denoted by 𝐂:",
          "zh": "C ={𝑎 + 𝑏 i: 𝑎, 𝑏 ∈ R}．"
        },
        {
          "t": "formula",
          "en": "𝐂 ={𝑎 + 𝑏𝑖 : 𝑎, 𝑏 ∈ 𝐑}.",
          "zh": "C 上的加法（addition）和乘法（multiplication）定义为",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "Addition and multiplication on 𝐂 are defined by",
          "zh": "(𝑎 + 𝑏 i) +(𝑐 + 𝑑 i) =(𝑎 + 𝑐) +(𝑏 + 𝑑)i (𝑎 + 𝑏 i)(𝑐 + 𝑑 i) =(𝑎𝑐−𝑏𝑑) +(𝑎𝑑 + 𝑏𝑐)i"
        },
        {
          "t": "formula",
          "en": "(𝑎 + 𝑏𝑖) +(𝑐 + 𝑑𝑖) =(𝑎 + 𝑐) +(𝑏 + 𝑑)𝑖 (𝑎 + 𝑏𝑖)(𝑐 + 𝑑𝑖) =(𝑎𝑐−𝑏𝑑) +(𝑎𝑑 + 𝑏𝑐)𝑖",
          "zh": "其中𝑎, 𝑏, 𝑐, 𝑑 ∈ R．",
          "eq": null
        },
        {
          "t": "p",
          "en": "here 𝑎, 𝑏, 𝑐, 𝑑 ∈ 𝐑.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "如果𝑎 ∈ R，那么我们将𝑎 + 0i 等同于实数𝑎．由此，我们将 R 视为 C 的子集．我们通常 将0 + 𝑏 i 简写作 𝑏 i，将0 + 1i 简写作 i． 上述复数乘法定义式的来由可以这样说 明：先假设已知 i^2 =−1，并用一般的算术规 则来导出两复数乘积的公式，再用它反过来验证定义式的确满足 i^2 =−1． 不要去背两个复数乘积的公式：只要回忆起 i^2 =−1，再运用一般的算术规则（在1.3中给 出），你总是可以把它重新推导出来．接下来的示例说明了此过程．"
      },
      "statement_en": "A complex number is an ordered pair(𝑎, 𝑏), where 𝑎, 𝑏 ∈ 𝐑, but we will write this as 𝑎 + 𝑏𝑖. The set of all complex numbers is denoted by 𝐂: 𝐂 ={𝑎 + 𝑏𝑖 : 𝑎, 𝑏 ∈ 𝐑}. Addition and multiplication on 𝐂 are defined by (𝑎 + 𝑏𝑖) +(𝑐 + 𝑑𝑖) =(𝑎 + 𝑐) +(𝑏 + 𝑑)𝑖 (𝑎 + 𝑏𝑖)(𝑐 + 𝑑𝑖) =(𝑎𝑐−𝑏𝑑) +(𝑎𝑑 + 𝑏𝑐)𝑖 here 𝑎, 𝑏, 𝑐, 𝑑 ∈ 𝐑.",
      "statement_zh": "一个复数是一个有序对(𝑎, 𝑏)，其中𝑎, 𝑏 ∈ R，不过我们会把这写成𝑎 + 𝑏 i． 全体复数所构成的集合用 C 表示： C ={𝑎 + 𝑏 i: 𝑎, 𝑏 ∈ R}． C 上的加法（addition）和乘法（multiplication）定义为 (𝑎 + 𝑏 i) +(𝑐 + 𝑑 i) =(𝑎 + 𝑐) +(𝑏 + 𝑑)i (𝑎 + 𝑏 i)(𝑐 + 𝑑 i) =(𝑎𝑐−𝑏𝑑) +(𝑎𝑑 + 𝑏𝑐)i 其中𝑎, 𝑏, 𝑐, 𝑑 ∈ R． 如果𝑎 ∈ R，那么我们将𝑎 + 0i 等同于实数𝑎．由此，我们将 R 视为 C 的子集．我们通常 将0 + 𝑏 i 简写作 𝑏 i，将0 + 1i 简写作 i． 上述复数乘法定义式的来由可以这样说 明：先假设已知 i^2 =−1，并用一般的算术规 则来导出两复数乘积的公式，再用它反过来验证定义式的确满足 i^2 =−1． 不要去背两个复数乘积的公式：只要回忆起 i^2 =−1，再运用一般的算术规则（在1.3中给 出），你总是可以把它重新推导出来．接下来的示例说明了此过程．"
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
          "en": "Commutativity. 𝛼 + 𝛽 = 𝛽 + 𝛼 and 𝛼𝛽 = 𝛽𝛼 for all 𝛼, 𝛽 ∈ 𝐂.",
          "zh": "可交换性（commutativity）. 对于所有𝛼, 𝛽 ∈ C，都有𝛼 + 𝛽 = 𝛽 + 𝛼以及𝛼𝛽 = 𝛽𝛼．"
        },
        {
          "t": "bullet",
          "en": "Associativity. (𝛼 + 𝛽) + 𝜆 = 𝛼 +(𝛽 + 𝜆) and(𝛼𝛽)𝜆 = 𝛼(𝛽𝜆) for all 𝛼, 𝛽, 𝜆 ∈ 𝐂.",
          "zh": "可结合性（associativity）. 对于所有𝛼, 𝛽, 𝜆 ∈ C，都有(𝛼 + 𝛽) + 𝜆 = 𝛼 +(𝛽 + 𝜆) 以及(𝛼𝛽)𝜆 = 𝛼(𝛽𝜆)．"
        },
        {
          "t": "bullet",
          "en": "Identities. 𝜆 + 0 = 𝜆 and 𝜆1 = 𝜆 for all 𝜆 ∈ 𝐂.",
          "zh": "恒等元（identities）. 对于所有𝜆 ∈ C，都有𝜆 + 0 = 𝜆以及𝜆1 = 𝜆．"
        },
        {
          "t": "bullet",
          "en": "Additive inverse. For every 𝛼 ∈ 𝐂, there exists a unique 𝛽 ∈ 𝐂 such that 𝛼 + 𝛽 = 0.",
          "zh": "加法逆元（additive inverse）. 对于每个𝛼 ∈ C，都存在唯一的 𝛽 ∈ C 使得𝛼 + 𝛽 = 0．"
        },
        {
          "t": "bullet",
          "en": "Multiplicative inverse. For every 𝛼 ∈ 𝐂 with 𝛼 ≠ 0, there exists a unique 𝛽 ∈ 𝐂 such that 𝛼𝛽 = 1.",
          "zh": "乘法逆元（multiplicative inverse）. 对于每个𝛼 ∈ C 且𝛼 ≠ 0，都存在唯一的 𝛽 ∈ C 使得𝛼𝛽 = 1．"
        },
        {
          "t": "bullet",
          "en": "Distributive property. 𝜆(𝛼 + 𝛽) = 𝜆𝛼 + 𝜆𝛽 for all 𝜆, 𝛼, 𝛽 ∈ 𝐂.",
          "zh": "分配性质（distributive property）. 对于所有𝜆, 𝛼, 𝛽 ∈ C，都有𝜆(𝛼 + 𝛽) = 𝜆𝛼 + 𝜆𝛽．"
        }
      ],
      "note": {
        "en": "The properties above are proved using the familiar properties of real numbers and the definitions of complex addition and multiplication.",
        "zh": "上述性质可用我们熟悉的实数性质和复数加法、复数乘法的定义证明．接下来的例子展示 了如何证明复数乘法的可交换性，而其他性质的证明则留作习题．"
      },
      "statement_en": "Commutativity. 𝛼 + 𝛽 = 𝛽 + 𝛼 and 𝛼𝛽 = 𝛽𝛼 for all 𝛼, 𝛽 ∈ 𝐂. Associativity. (𝛼 + 𝛽) + 𝜆 = 𝛼 +(𝛽 + 𝜆) and(𝛼𝛽)𝜆 = 𝛼(𝛽𝜆) for all 𝛼, 𝛽, 𝜆 ∈ 𝐂. Identities. 𝜆 + 0 = 𝜆 and 𝜆1 = 𝜆 for all 𝜆 ∈ 𝐂. Additive inverse. For every 𝛼 ∈ 𝐂, there exists a unique 𝛽 ∈ 𝐂 such that 𝛼 + 𝛽 = 0. Multiplicative inverse. For every 𝛼 ∈ 𝐂 with 𝛼 ≠ 0, there exists a unique 𝛽 ∈ 𝐂 such that 𝛼𝛽 = 1. Distributive property. 𝜆(𝛼 + 𝛽) = 𝜆𝛼 + 𝜆𝛽 for all 𝜆, 𝛼, 𝛽 ∈ 𝐂. The properties above are proved using the familiar properties of real numbers and the definitions of complex addition and multiplication.",
      "statement_zh": "可交换性（commutativity）. 对于所有𝛼, 𝛽 ∈ C，都有𝛼 + 𝛽 = 𝛽 + 𝛼以及𝛼𝛽 = 𝛽𝛼． 可结合性（associativity）. 对于所有𝛼, 𝛽, 𝜆 ∈ C，都有(𝛼 + 𝛽) + 𝜆 = 𝛼 +(𝛽 + 𝜆) 以及(𝛼𝛽)𝜆 = 𝛼(𝛽𝜆)． 恒等元（identities）. 对于所有𝜆 ∈ C，都有𝜆 + 0 = 𝜆以及𝜆1 = 𝜆． 加法逆元（additive inverse）. 对于每个𝛼 ∈ C，都存在唯一的 𝛽 ∈ C 使得𝛼 + 𝛽 = 0． 乘法逆元（multiplicative inverse）. 对于每个𝛼 ∈ C 且𝛼 ≠ 0，都存在唯一的 𝛽 ∈ C 使得𝛼𝛽 = 1． 分配性质（distributive property）. 对于所有𝜆, 𝛼, 𝛽 ∈ C，都有𝜆(𝛼 + 𝛽) = 𝜆𝛼 + 𝜆𝛽． 上述性质可用我们熟悉的实数性质和复数加法、复数乘法的定义证明．接下来的例子展示 了如何证明复数乘法的可交换性，而其他性质的证明则留作习题．"
    },
    {
      "id": "1.5",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.5",
      "name_en": "−𝛼, subtraction, 1/𝛼, division",
      "name_zh": "−𝛼、减法（subtraction），1/𝛼、除法（division）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝛼, 𝛽 ∈ 𝐂.",
          "zh": "假设𝛼, 𝛽 ∈ C． 令−𝛼表示𝛼的加法逆元．于是−𝛼是唯一使得"
        },
        {
          "t": "bullet",
          "en": "Let−𝛼 denote the additive inverse of 𝛼. Thus−𝛼 is the unique complex number such that",
          "zh": "𝛼 +(−𝛼) = 0"
        },
        {
          "t": "formula",
          "en": "𝛼 +(−𝛼) = 0.",
          "zh": "成立的复数．",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "Subtraction on 𝐂 is defined by",
          "zh": "C 上的减法的定义为"
        },
        {
          "t": "formula",
          "en": "𝛽−𝛼 = 𝛽 +(−𝛼).",
          "zh": "𝛽−𝛼 = 𝛽 +(−𝛼)．",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "For 𝛼 ≠ 0, let 1/𝛼 and^1_𝛼 denote the multiplicative inverse of 𝛼. Thus 1/𝛼 is the unique complex number such that",
          "zh": "对于𝛼 ≠ 0，令1/𝛼和^1_𝛼表示𝛼的乘法逆元．于是1/𝛼是唯一使得"
        },
        {
          "t": "formula",
          "en": "𝛼(1/𝛼) = 1.",
          "zh": "𝛼(1/𝛼) = 1",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "For 𝛼 ≠ 0, division by 𝛼 is defined by",
          "zh": "成立的复数． 对于𝛼 ≠ 0，除以𝛼的定义为"
        },
        {
          "t": "formula",
          "en": "𝛽/𝛼 = 𝛽(1/𝛼).",
          "zh": "𝛽/𝛼 = 𝛽(1/𝛼)．",
          "eq": null
        }
      ],
      "note": {
        "en": "So that we can conveniently make definitions and prove theorems that apply to both real and complex numbers, we adopt the following notation.",
        "zh": ""
      },
      "statement_en": "Suppose 𝛼, 𝛽 ∈ 𝐂. Let−𝛼 denote the additive inverse of 𝛼. Thus−𝛼 is the unique complex number such that 𝛼 +(−𝛼) = 0. Subtraction on 𝐂 is defined by 𝛽−𝛼 = 𝛽 +(−𝛼). For 𝛼 ≠ 0, let 1/𝛼 and^1_𝛼 denote the multiplicative inverse of 𝛼. Thus 1/𝛼 is the unique complex number such that 𝛼(1/𝛼) = 1. For 𝛼 ≠ 0, division by 𝛼 is defined by 𝛽/𝛼 = 𝛽(1/𝛼). So that we can conveniently make definitions and prove theorems that apply to both real and complex numbers, we adopt the following notation.",
      "statement_zh": "假设𝛼, 𝛽 ∈ C． 令−𝛼表示𝛼的加法逆元．于是−𝛼是唯一使得 𝛼 +(−𝛼) = 0 成立的复数． C 上的减法的定义为 𝛽−𝛼 = 𝛽 +(−𝛼)． 对于𝛼 ≠ 0，令1/𝛼和^1_𝛼表示𝛼的乘法逆元．于是1/𝛼是唯一使得 𝛼(1/𝛼) = 1 成立的复数． 对于𝛼 ≠ 0，除以𝛼的定义为 𝛽/𝛼 = 𝛽(1/𝛼)．"
    },
    {
      "id": "1.6",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.6",
      "name_en": "𝐅",
      "name_zh": "F",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Throughout this book, 𝐅 stands for either 𝐑 or 𝐂.",
          "zh": "在全书中，F 代表 R 或 C．"
        }
      ],
      "note": {
        "en": "",
        "zh": "因此，如果我们证明了一个涉及 F 的定理，我们就会知道当把 F 替换为 R 或 C 时，这个 定理也是成立的． 称 F 中的元素为标量（scalar）．通常， 当我们想要强调一个对象是数，而不是向量 （稍后将给出定义）时，就使用“标量”这个词（它只是“数”的一个花哨的表达法）． 对于𝛼 ∈ F 以及正整数𝑚，我们定义𝛼^𝑚表示𝛼自乘𝑚次： 𝛼^𝑚 = 𝛼 · · · 𝛼 ． �_𝑚��_个�_𝛼�� 这个定义蕴涵着，对于所有𝛼, 𝛽 ∈ F 和所有正整数𝑚, 𝑛，有 (𝛼^𝑚)^𝑛 = 𝛼^{𝑚𝑛}及(𝛼𝛽)^𝑚 = 𝛼^𝑚 𝛽^𝑚 ． 组 在定义 R^𝑛和 C^𝑛之前，我们先看两个重要的例子．"
      },
      "statement_en": "Throughout this book, 𝐅 stands for either 𝐑 or 𝐂.",
      "statement_zh": "在全书中，F 代表 R 或 C． 因此，如果我们证明了一个涉及 F 的定理，我们就会知道当把 F 替换为 R 或 C 时，这个 定理也是成立的． 称 F 中的元素为标量（scalar）．通常， 当我们想要强调一个对象是数，而不是向量 （稍后将给出定义）时，就使用“标量”这个词（它只是“数”的一个花哨的表达法）． 对于𝛼 ∈ F 以及正整数𝑚，我们定义𝛼^𝑚表示𝛼自乘𝑚次： 𝛼^𝑚 = 𝛼 · · · 𝛼 ． �_𝑚��_个�_𝛼�� 这个定义蕴涵着，对于所有𝛼, 𝛽 ∈ F 和所有正整数𝑚, 𝑛，有 (𝛼^𝑚)^𝑛 = 𝛼^{𝑚𝑛}及(𝛼𝛽)^𝑚 = 𝛼^𝑚 𝛽^𝑚 ． 组 在定义 R^𝑛和 C^𝑛之前，我们先看两个重要的例子．"
    },
    {
      "id": "1.8",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.8",
      "name_en": "list, length",
      "name_zh": "组（list）、长度（length）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "Suppose 𝑛 is a nonnegative integer. A list of length 𝑛 is an ordered collection of 𝑛 elements(which might be numbers, other lists, or more abstract objects).",
          "zh": "假设𝑛是非负整数．一个长度为𝑛的组是𝑛个有顺序的元素，这些元素可能是数、其 他组或是更抽象的对象． 两个组是相等的，当且仅当它们具有相同的长度和按相同顺序排列的相同元素．"
        },
        {
          "t": "bullet",
          "en": "Two lists are equal if and only if they have the same length and the same elements in the same order.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "组的通常写法，是将其中元素以逗号分 隔并用圆括号括起来．于是，长度为2的组就 是有序对，可以写成(𝑎, 𝑏)．长度为3的组就是有序三元组，可以写成(𝑥, 𝑦, 𝑧)．长度为𝑛的组 可能看起来是这样的： (𝑧_1,..., 𝑧_𝑛)． 有时我们会单用组这个词而不明说其长度．但请记住，根据定义，每个组都具有有限长度， 且这长度是非负整数．从而，对于形如(𝑥_1, 𝑥_2,...) 的对象，我们可以说它“具有无限的长度”， 所以它不是组． 长度是0的组看起来是这样的：()．我们将这样的对象看成组，是为了使一些定理不出现 平凡的例外情形^1 ． 组与有限集有两方面差异：在组中，顺序很重要，并且重复是有含义的；而在集合里，顺 序和重复都无关紧要．"
      },
      "statement_en": "Suppose 𝑛 is a nonnegative integer. A list of length 𝑛 is an ordered collection of 𝑛 elements(which might be numbers, other lists, or more abstract objects). Two lists are equal if and only if they have the same length and the same elements in the same order.",
      "statement_zh": "假设𝑛是非负整数．一个长度为𝑛的组是𝑛个有顺序的元素，这些元素可能是数、其 他组或是更抽象的对象． 两个组是相等的，当且仅当它们具有相同的长度和按相同顺序排列的相同元素． 组的通常写法，是将其中元素以逗号分 隔并用圆括号括起来．于是，长度为2的组就 是有序对，可以写成(𝑎, 𝑏)．长度为3的组就是有序三元组，可以写成(𝑥, 𝑦, 𝑧)．长度为𝑛的组 可能看起来是这样的： (𝑧_1,..., 𝑧_𝑛)． 有时我们会单用组这个词而不明说其长度．但请记住，根据定义，每个组都具有有限长度， 且这长度是非负整数．从而，对于形如(𝑥_1, 𝑥_2,...) 的对象，我们可以说它“具有无限的长度”， 所以它不是组． 长度是0的组看起来是这样的：()．我们将这样的对象看成组，是为了使一些定理不出现 平凡的例外情形^1 ． 组与有限集有两方面差异：在组中，顺序很重要，并且重复是有含义的；而在集合里，顺 序和重复都无关紧要．"
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
          "zh": "在本章剩余内容中，将𝑛取为某一固定的正整数．"
        }
      ],
      "note": null,
      "statement_en": "Fix a positive integer 𝑛 for the rest of this chapter.",
      "statement_zh": "在本章剩余内容中，将𝑛取为某一固定的正整数．"
    },
    {
      "id": "1.11",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.11",
      "name_en": "𝐅^𝑛, coordinate",
      "name_zh": "F^𝑛、坐标（coordinate）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝐅^𝑛 is the set of all lists of length 𝑛 of elements of 𝐅:",
          "zh": "F^𝑛是全体具有𝑛个 F 中元素的组所构成的集合："
        },
        {
          "t": "formula",
          "en": "𝐅^𝑛 ={(𝑥_1, …, 𝑥_𝑛) : 𝑥_𝑘 ∈ 𝐅 for 𝑘 = 1, …, 𝑛}.",
          "zh": "F^𝑛 ={(𝑥_1,..., 𝑥_𝑛): 对于 𝑘 = 1,..., 𝑛有𝑥_𝑘 ∈ F}．",
          "eq": null
        },
        {
          "t": "p",
          "en": "For(𝑥_1, …, 𝑥_𝑛) ∈ 𝐅^𝑛 and 𝑘 ∈{1, …, 𝑛}, we say that 𝑥_𝑘 is the 𝑘^{th} coordinate of(𝑥_1, …, 𝑥_𝑛).",
          "zh": "对于(𝑥_1,..., 𝑥_𝑛) ∈ F^𝑛和 𝑘 ∈{1,..., 𝑛}，我们称𝑥_𝑘是(𝑥_1,..., 𝑥_𝑛) 的第 𝑘个坐标．"
        }
      ],
      "note": {
        "en": "If 𝐅 = 𝐑 and 𝑛 equals 2 or 3, then the definition above of 𝐅^𝑛 agrees with our previous notions of 𝐑^2 and 𝐑^3.",
        "zh": "_{“在平2.凡19}如_{”中直}果_{𝑚译=自} F_{1“} =_{的tr特} R_{iv殊i}，_{al情”，}且_{况形中} 𝑛_{容遇}等_{数到学}于_{，中见最} 2_{作显}或_{者然在} 3_、，_{2易.1证}那_{9证的}么_{明情后形} F^𝑛_{所．作此}的_{的类}上_{说情}述_{明形．固}定_然义_{简单}就_，与_但前_{不能}面_{不考} R^2_虑和_{．比} R^3_{如此}的_{处“}定_长义_度相_{为零}吻_的合_{组”}．_{，就会}"
      },
      "statement_en": "𝐅^𝑛 is the set of all lists of length 𝑛 of elements of 𝐅: 𝐅^𝑛 ={(𝑥_1, …, 𝑥_𝑛) : 𝑥_𝑘 ∈ 𝐅 for 𝑘 = 1, …, 𝑛}. For(𝑥_1, …, 𝑥_𝑛) ∈ 𝐅^𝑛 and 𝑘 ∈{1, …, 𝑛}, we say that 𝑥_𝑘 is the 𝑘^{th} coordinate of(𝑥_1, …, 𝑥_𝑛). If 𝐅 = 𝐑 and 𝑛 equals 2 or 3, then the definition above of 𝐅^𝑛 agrees with our previous notions of 𝐑^2 and 𝐑^3.",
      "statement_zh": "F^𝑛是全体具有𝑛个 F 中元素的组所构成的集合： F^𝑛 ={(𝑥_1,..., 𝑥_𝑛): 对于 𝑘 = 1,..., 𝑛有𝑥_𝑘 ∈ F}． 对于(𝑥_1,..., 𝑥_𝑛) ∈ F^𝑛和 𝑘 ∈{1,..., 𝑛}，我们称𝑥_𝑘是(𝑥_1,..., 𝑥_𝑛) 的第 𝑘个坐标． _{“在平2.凡19}如_{”中直}果_{𝑚译=自} F_{1“} =_{的tr特} R_{iv殊i}，_{al情”，}且_{况形中} 𝑛_{容遇}等_{数到学}于_{，中见最} 2_{作显}或_{者然在} 3_、，_{2易.1证}那_{9证的}么_{明情后形} F^𝑛_{所．作此}的_{的类}上_{说情}述_{明形．固}定_然义_{简单}就_，与_但前_{不能}面_{不考} R^2_虑和_{．比} R^3_{如此}的_{处“}定_长义_度相_{为零}吻_的合_{组”}．_{，就会}"
    },
    {
      "id": "1.13",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.13",
      "name_en": "addition in 𝐅^𝑛",
      "name_zh": "F^𝑛中的加法（addition in F^𝑛 ）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Addition in 𝐅^𝑛 is defined by adding corresponding coordinates:",
          "zh": "F^𝑛中的加法定义为将对应坐标分别相加："
        },
        {
          "t": "formula",
          "en": "(𝑥_1, …, 𝑥_𝑛) +(𝑦_1, …, 𝑦_𝑛) =(𝑥_1 + 𝑦_1, …, 𝑥_𝑛 + 𝑦_𝑛).",
          "zh": "(𝑥_1,..., 𝑥_𝑛) +(𝑦_1,..., 𝑦_𝑛) =(𝑥_1 + 𝑦_1,..., 𝑥_𝑛 + 𝑦_𝑛)．",
          "eq": null
        }
      ],
      "note": {
        "en": "Often the mathematics of 𝐅^𝑛 becomes cleaner if we use a single letter to denote a list of 𝑛 numbers, without explicitly writing the coordinates. For example, the next result is stated with 𝑥 and 𝑦 in 𝐅^𝑛 even though the proof requires the more cumbersome notation of(𝑥_1, …, 𝑥_𝑛) and(𝑦_1, …, 𝑦_𝑛).",
        "zh": "如果我们使用单个字母来表示𝑛个数组成的组，而不是显式地写出坐标的话，往往可以更 简洁地表达有关 F^𝑛的数学内容．例如，在陈述接下来的结果时，我们用的是 F^𝑛中的 𝑥和 𝑦， 即便其证明仍需(𝑥_1,..., 𝑥_𝑛) 和(𝑦_1,..., 𝑦_𝑛) 这些更繁琐的记号．"
      },
      "statement_en": "Addition in 𝐅^𝑛 is defined by adding corresponding coordinates: (𝑥_1, …, 𝑥_𝑛) +(𝑦_1, …, 𝑦_𝑛) =(𝑥_1 + 𝑦_1, …, 𝑥_𝑛 + 𝑦_𝑛). Often the mathematics of 𝐅^𝑛 becomes cleaner if we use a single letter to denote a list of 𝑛 numbers, without explicitly writing the coordinates. For example, the next result is stated with 𝑥 and 𝑦 in 𝐅^𝑛 even though the proof requires the more cumbersome notation of(𝑥_1, …, 𝑥_𝑛) and(𝑦_1, …, 𝑦_𝑛).",
      "statement_zh": "F^𝑛中的加法定义为将对应坐标分别相加： (𝑥_1,..., 𝑥_𝑛) +(𝑦_1,..., 𝑦_𝑛) =(𝑥_1 + 𝑦_1,..., 𝑥_𝑛 + 𝑦_𝑛)． 如果我们使用单个字母来表示𝑛个数组成的组，而不是显式地写出坐标的话，往往可以更 简洁地表达有关 F^𝑛的数学内容．例如，在陈述接下来的结果时，我们用的是 F^𝑛中的 𝑥和 𝑦， 即便其证明仍需(𝑥_1,..., 𝑥_𝑛) 和(𝑦_1,..., 𝑦_𝑛) 这些更繁琐的记号．"
    },
    {
      "id": "1.14",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.14",
      "name_en": "commutativity of addition in 𝐅^𝑛",
      "name_zh": "F^𝑛中加法的可交换性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑥, 𝑦 ∈ 𝐅^𝑛, then 𝑥 + 𝑦 = 𝑦 + 𝑥.",
          "zh": "如果𝑥, 𝑦 ∈ F^𝑛，那么𝑥 + 𝑦 = 𝑦 + 𝑥．"
        }
      ],
      "note": null,
      "statement_en": "If 𝑥, 𝑦 ∈ 𝐅^𝑛, then 𝑥 + 𝑦 = 𝑦 + 𝑥.",
      "statement_zh": "如果𝑥, 𝑦 ∈ F^𝑛，那么𝑥 + 𝑦 = 𝑦 + 𝑥．"
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
          "en": "Let 0 denote the list of length 𝑛 whose coordinates are all 0:",
          "zh": "令0表示长度为𝑛且所有坐标都是0的组："
        },
        {
          "t": "formula",
          "en": "0 =(0, …, 0).",
          "zh": "0 =(0,..., 0)．",
          "eq": null
        }
      ],
      "note": {
        "en": "Here we are using the symbol 0 in two different ways—on the left side of the equation above, the symbol 0 denotes a list of length 𝑛, which is an element of 𝐅^𝑛 whereas on the right side, each 0 denotes a number. This potentially confusing practice actually causes no problems because the context should always make clear which 0 is intended.",
        "zh": ""
      },
      "statement_en": "Let 0 denote the list of length 𝑛 whose coordinates are all 0: 0 =(0, …, 0). Here we are using the symbol 0 in two different ways—on the left side of the equation above, the symbol 0 denotes a list of length 𝑛, which is an element of 𝐅^𝑛 whereas on the right side, each 0 denotes a number. This potentially confusing practice actually causes no problems because the context should always make clear which 0 is intended.",
      "statement_zh": "令0表示长度为𝑛且所有坐标都是0的组： 0 =(0,..., 0)．"
    },
    {
      "id": "1.17",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.17",
      "name_en": "additive inverse in 𝐅^𝑛,−𝑥",
      "name_zh": "F^𝑛中的加法逆元（additive inverse in F^𝑛 ）、−𝑥",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑥 ∈ 𝐅^𝑛, the additive inverse of 𝑥, denoted by−𝑥, is the vector−𝑥 ∈ 𝐅^𝑛 such that",
          "zh": "对于𝑥 ∈ F^𝑛，𝑥的加法逆元，记作−𝑥，是满足下式的向量−𝑥 ∈ F^𝑛："
        },
        {
          "t": "formula",
          "en": "𝑥 +(−𝑥) = 0.",
          "zh": "𝑥 +(−𝑥) = 0．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Thus if 𝑥 =(𝑥_1, …, 𝑥_𝑛), then−𝑥 =(−𝑥_1, …,−𝑥_𝑛).",
          "zh": "由此，如果𝑥 =(𝑥_1,..., 𝑥_𝑛)，那么−𝑥 =(−𝑥_1,...,−𝑥_𝑛)．"
        }
      ],
      "note": {
        "en": "",
        "zh": "R^2中一向量的加法逆元是与之长度相同但指向相反方向的 向量．这里的图说明了这种思考 R^2中加法逆元的方式．正如你 所见，标记为−𝑥的向量与标记为𝑥的向量具有相同的长度，但 是指向相反的方向．_𝑛一向量及其加法逆元． 讨论完 F 中的加法后，我们现在转而研究乘法．我们本可 以用与加法类似的方式定义 F^𝑛中的乘法：取出 F^𝑛的两个元素，将它们对应的坐标相乘，得出 F^𝑛中的另一个元素．经验表明，这种定义无助于实现我们的目的．另一类乘法，称为标量乘 法，将成为我们讨论的核心．具体地说，我们需要定义将 F^𝑛中的一个元素乘以 F 中的一个元 素是什么含义．"
      },
      "statement_en": "For 𝑥 ∈ 𝐅^𝑛, the additive inverse of 𝑥, denoted by−𝑥, is the vector−𝑥 ∈ 𝐅^𝑛 such that 𝑥 +(−𝑥) = 0. Thus if 𝑥 =(𝑥_1, …, 𝑥_𝑛), then−𝑥 =(−𝑥_1, …,−𝑥_𝑛).",
      "statement_zh": "对于𝑥 ∈ F^𝑛，𝑥的加法逆元，记作−𝑥，是满足下式的向量−𝑥 ∈ F^𝑛： 𝑥 +(−𝑥) = 0． 由此，如果𝑥 =(𝑥_1,..., 𝑥_𝑛)，那么−𝑥 =(−𝑥_1,...,−𝑥_𝑛)． R^2中一向量的加法逆元是与之长度相同但指向相反方向的 向量．这里的图说明了这种思考 R^2中加法逆元的方式．正如你 所见，标记为−𝑥的向量与标记为𝑥的向量具有相同的长度，但 是指向相反的方向．_𝑛一向量及其加法逆元． 讨论完 F 中的加法后，我们现在转而研究乘法．我们本可 以用与加法类似的方式定义 F^𝑛中的乘法：取出 F^𝑛的两个元素，将它们对应的坐标相乘，得出 F^𝑛中的另一个元素．经验表明，这种定义无助于实现我们的目的．另一类乘法，称为标量乘 法，将成为我们讨论的核心．具体地说，我们需要定义将 F^𝑛中的一个元素乘以 F 中的一个元 素是什么含义．"
    },
    {
      "id": "1.18",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.18",
      "name_en": "scalar multiplication in 𝐅^𝑛",
      "name_zh": "F^𝑛中的标量乘法（scalar multiplication in F^𝑛 ）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The product of a number 𝜆 and a vector in 𝐅^𝑛 is computed by multiplying each coordinate of the vector by 𝜆:",
          "zh": "数𝜆与 F^𝑛中的向量之乘积（product）是通过将这向量的每一个坐标都乘以𝜆计算得到 的："
        },
        {
          "t": "formula",
          "en": "𝜆(𝑥_1, …, 𝑥_𝑛) =(𝜆𝑥_1, …, 𝜆𝑥_𝑛)",
          "zh": "𝜆(𝑥_1,..., 𝑥_𝑛) =(𝜆𝑥_1,..., 𝜆𝑥_𝑛)",
          "eq": null
        },
        {
          "t": "p",
          "en": "here 𝜆 ∈ 𝐅 and(𝑥_1, …, 𝑥_𝑛) ∈ 𝐅^𝑛.",
          "zh": "此处𝜆 ∈ F 且(𝑥_1,..., 𝑥_𝑛) ∈ F^𝑛 ．"
        }
      ],
      "note": {
        "en": "",
        "zh": "标量乘法在 R^2中具有很漂亮的几何解 释．如果𝜆 > 0 且 𝑥 ∈ R^2，那么𝜆𝑥就是与 𝑥 指向相同且长度是 𝑥的 𝜆倍的向量．换句话 说，为了得到𝜆𝑥，我们把𝑥缩短或者延长到 原来的𝜆倍，至于是缩短还是延长取决于𝜆是小于1还是大于1． 如果𝜆 < 0 且 𝑥 ∈ R^2，那么𝜆𝑥就是与 𝑥 指向相反且长度是𝑥的 |𝜆| 倍的向量，如此处 所示． 标量乘法． 关于域的题外话 一个域是这样一个集合：它包含至少两个不同的元素（称作0和1），且带有满足1.3中列 出的所有性质的加法和乘法运算．因此，R 和 C 都是域，定义了通常的加法和乘法运算的有理 数集合也是域．域的另一个例子是集合{0, 1}，它具有通常的加法和乘法运算，除了1 + 1被定 义为等于0．"
      },
      "statement_en": "The product of a number 𝜆 and a vector in 𝐅^𝑛 is computed by multiplying each coordinate of the vector by 𝜆: 𝜆(𝑥_1, …, 𝑥_𝑛) =(𝜆𝑥_1, …, 𝜆𝑥_𝑛) here 𝜆 ∈ 𝐅 and(𝑥_1, …, 𝑥_𝑛) ∈ 𝐅^𝑛.",
      "statement_zh": "数𝜆与 F^𝑛中的向量之乘积（product）是通过将这向量的每一个坐标都乘以𝜆计算得到 的： 𝜆(𝑥_1,..., 𝑥_𝑛) =(𝜆𝑥_1,..., 𝜆𝑥_𝑛) 此处𝜆 ∈ F 且(𝑥_1,..., 𝑥_𝑛) ∈ F^𝑛 ． 标量乘法在 R^2中具有很漂亮的几何解 释．如果𝜆 > 0 且 𝑥 ∈ R^2，那么𝜆𝑥就是与 𝑥 指向相同且长度是 𝑥的 𝜆倍的向量．换句话 说，为了得到𝜆𝑥，我们把𝑥缩短或者延长到 原来的𝜆倍，至于是缩短还是延长取决于𝜆是小于1还是大于1． 如果𝜆 < 0 且 𝑥 ∈ R^2，那么𝜆𝑥就是与 𝑥 指向相反且长度是𝑥的 |𝜆| 倍的向量，如此处 所示． 标量乘法． 关于域的题外话 一个域是这样一个集合：它包含至少两个不同的元素（称作0和1），且带有满足1.3中列 出的所有性质的加法和乘法运算．因此，R 和 C 都是域，定义了通常的加法和乘法运算的有理 数集合也是域．域的另一个例子是集合{0, 1}，它具有通常的加法和乘法运算，除了1 + 1被定 义为等于0．"
    },
    {
      "id": "1.19",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.19",
      "name_en": "addition, scalar multiplication",
      "name_zh": "加法（addition）、标量乘法（scalar multiplication）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "An addition on a set 𝑉 is a function that assigns an element 𝑢 + 𝑣 ∈ 𝑉 to each pair of elements 𝑢, 𝑣 ∈ 𝑉.",
          "zh": "集合𝑉上的加法是一个函数，它将每一对𝑢, 𝑣 ∈ 𝑉对应到一个元素𝑢 + 𝑣 ∈ 𝑉． 集合 𝑉上的标量乘法是一个函数，它将每个 𝜆 ∈ F 和每个 𝑣 ∈ 𝑉对应到一个元素 𝜆𝑣 ∈ 𝑉．"
        },
        {
          "t": "bullet",
          "en": "A scalar multiplication on a set 𝑉 is a function that assigns an element 𝜆𝑣 ∈ 𝑉 to each 𝜆 ∈ 𝐅 and each 𝑣 ∈ 𝑉.",
          "zh": ""
        }
      ],
      "note": {
        "en": "Now we are ready to give the formal definition of a vector space.",
        "zh": "现在我们做好了充足的准备，可以给出向量空间的正式定义了．"
      },
      "statement_en": "An addition on a set 𝑉 is a function that assigns an element 𝑢 + 𝑣 ∈ 𝑉 to each pair of elements 𝑢, 𝑣 ∈ 𝑉. A scalar multiplication on a set 𝑉 is a function that assigns an element 𝜆𝑣 ∈ 𝑉 to each 𝜆 ∈ 𝐅 and each 𝑣 ∈ 𝑉. Now we are ready to give the formal definition of a vector space.",
      "statement_zh": "集合𝑉上的加法是一个函数，它将每一对𝑢, 𝑣 ∈ 𝑉对应到一个元素𝑢 + 𝑣 ∈ 𝑉． 集合 𝑉上的标量乘法是一个函数，它将每个 𝜆 ∈ F 和每个 𝑣 ∈ 𝑉对应到一个元素 𝜆𝑣 ∈ 𝑉． 现在我们做好了充足的准备，可以给出向量空间的正式定义了．"
    },
    {
      "id": "1.20",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.20",
      "name_en": "vector space",
      "name_zh": "向量空间（vector space）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A vector space is a set 𝑉 along with an addition on 𝑉 and a scalar multiplication on 𝑉 such that the following properties hold.",
          "zh": "一个向量空间是一个集合𝑉，𝑉上的加法和标量乘法满足下列性质："
        },
        {
          "t": "bullet",
          "en": "Commutativity. 𝑢 + 𝑣 = 𝑣 + 𝑢 for all 𝑢, 𝑣 ∈ 𝑉.",
          "zh": "可交换性（commutativity）. 对于所有𝑢, 𝑣 ∈ 𝑉，都有𝑢 + 𝑣 = 𝑣 + 𝑢．"
        },
        {
          "t": "bullet",
          "en": "Associativity. (𝑢 + 𝑣) + 𝑤 = 𝑢 +(𝑣 + 𝑤) and(𝑎𝑏)𝑣 = 𝑎(𝑏𝑣) for all 𝑢, 𝑣, 𝑤 ∈ 𝑉 and for all 𝑎, 𝑏 ∈ 𝐅.",
          "zh": "可结合性（associativity）. 对于所有𝑢, 𝑣, 𝑤 ∈ 𝑉以及所有𝑎, 𝑏 ∈ F，都有(𝑢 + 𝑣) + 𝑤 = 𝑢 +(𝑣 + 𝑤) 以及(𝑎𝑏)𝑣 = 𝑎(𝑏𝑣)．"
        },
        {
          "t": "bullet",
          "en": "Additive identity. There exists an element 0 ∈ 𝑉 such that 𝑣 + 0 = 𝑣 for all 𝑣 ∈ 𝑉.",
          "zh": "加法恒等元（additive identity）. 存在一个元素0 ∈ 𝑉，使得对所有𝑣 ∈ 𝑉都有𝑣 + 0 = 𝑣．"
        },
        {
          "t": "bullet",
          "en": "Additive inverse. For every 𝑣 ∈ 𝑉, there exists 𝑤 ∈ 𝑉 such that 𝑣 + 𝑤 = 0.",
          "zh": "加法逆元（additive inverse）. 对于每个𝑣 ∈ 𝑉，都存在𝑤 ∈ 𝑉使得𝑣 + 𝑤 = 0．"
        },
        {
          "t": "bullet",
          "en": "Multiplicative identity. 1𝑣 = 𝑣 for all 𝑣 ∈ 𝑉.",
          "zh": "乘法恒等元（multiplicative identity）. 对于所有𝑣 ∈ 𝑉，都有1𝑣 = 𝑣．"
        },
        {
          "t": "bullet",
          "en": "Distributive properties. 𝑎(𝑢 + 𝑣) = 𝑎𝑢 + 𝑎𝑣 and(𝑎 + 𝑏)𝑣 = 𝑎𝑣 + 𝑏𝑣 for all 𝑎, 𝑏 ∈ 𝐅 and all 𝑢, 𝑣 ∈ 𝑉.",
          "zh": "分配性质（distributive properties）. 对于所有𝑢, 𝑣 ∈ 𝑉以及所有𝑎, 𝑏 ∈ F，都有𝑎(𝑢 + 𝑣) = 𝑎𝑢 + 𝑎𝑣且(𝑎 + 𝑏)𝑣 = 𝑎𝑣 + 𝑏𝑣．"
        }
      ],
      "note": {
        "en": "The following geometric language sometimes aids our intuition.",
        "zh": "以下的几何语言有时有助于我们直观理解．"
      },
      "statement_en": "A vector space is a set 𝑉 along with an addition on 𝑉 and a scalar multiplication on 𝑉 such that the following properties hold. Commutativity. 𝑢 + 𝑣 = 𝑣 + 𝑢 for all 𝑢, 𝑣 ∈ 𝑉. Associativity. (𝑢 + 𝑣) + 𝑤 = 𝑢 +(𝑣 + 𝑤) and(𝑎𝑏)𝑣 = 𝑎(𝑏𝑣) for all 𝑢, 𝑣, 𝑤 ∈ 𝑉 and for all 𝑎, 𝑏 ∈ 𝐅. Additive identity. There exists an element 0 ∈ 𝑉 such that 𝑣 + 0 = 𝑣 for all 𝑣 ∈ 𝑉. Additive inverse. For every 𝑣 ∈ 𝑉, there exists 𝑤 ∈ 𝑉 such that 𝑣 + 𝑤 = 0. Multiplicative identity. 1𝑣 = 𝑣 for all 𝑣 ∈ 𝑉. Distributive properties. 𝑎(𝑢 + 𝑣) = 𝑎𝑢 + 𝑎𝑣 and(𝑎 + 𝑏)𝑣 = 𝑎𝑣 + 𝑏𝑣 for all 𝑎, 𝑏 ∈ 𝐅 and all 𝑢, 𝑣 ∈ 𝑉. The following geometric language sometimes aids our intuition.",
      "statement_zh": "一个向量空间是一个集合𝑉，𝑉上的加法和标量乘法满足下列性质： 可交换性（commutativity）. 对于所有𝑢, 𝑣 ∈ 𝑉，都有𝑢 + 𝑣 = 𝑣 + 𝑢． 可结合性（associativity）. 对于所有𝑢, 𝑣, 𝑤 ∈ 𝑉以及所有𝑎, 𝑏 ∈ F，都有(𝑢 + 𝑣) + 𝑤 = 𝑢 +(𝑣 + 𝑤) 以及(𝑎𝑏)𝑣 = 𝑎(𝑏𝑣)． 加法恒等元（additive identity）. 存在一个元素0 ∈ 𝑉，使得对所有𝑣 ∈ 𝑉都有𝑣 + 0 = 𝑣． 加法逆元（additive inverse）. 对于每个𝑣 ∈ 𝑉，都存在𝑤 ∈ 𝑉使得𝑣 + 𝑤 = 0． 乘法恒等元（multiplicative identity）. 对于所有𝑣 ∈ 𝑉，都有1𝑣 = 𝑣． 分配性质（distributive properties）. 对于所有𝑢, 𝑣 ∈ 𝑉以及所有𝑎, 𝑏 ∈ F，都有𝑎(𝑢 + 𝑣) = 𝑎𝑢 + 𝑎𝑣且(𝑎 + 𝑏)𝑣 = 𝑎𝑣 + 𝑏𝑣． 以下的几何语言有时有助于我们直观理解．"
    },
    {
      "id": "1.21",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.21",
      "name_en": "vector, point",
      "name_zh": "向量（vector）、点（point）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Elements of a vector space are called vectors or points.",
          "zh": "向量空间的元素被称作向量或点．"
        }
      ],
      "note": {
        "en": "",
        "zh": "向量空间上的标量乘法依赖于 F 的选取．由此，当我们需要描述得更确切时，我们会说𝑉 是 F 上的向量空间（vector space over F），而不是仅仅说𝑉是向量空间．例如，R^𝑛是 R 上的 向量空间，而 C^𝑛是 C 上的向量空间．"
      },
      "statement_en": "Elements of a vector space are called vectors or points.",
      "statement_zh": "向量空间的元素被称作向量或点． 向量空间上的标量乘法依赖于 F 的选取．由此，当我们需要描述得更确切时，我们会说𝑉 是 F 上的向量空间（vector space over F），而不是仅仅说𝑉是向量空间．例如，R^𝑛是 R 上的 向量空间，而 C^𝑛是 C 上的向量空间．"
    },
    {
      "id": "1.22",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.22",
      "name_en": "real vector space, complex vector space",
      "name_zh": "实向量空间（real vector space）、复向量空间（complex vector space）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A vector space over 𝐑 is called a real vector space.",
          "zh": "R 上的向量空间称作实向量空间． C 上的向量空间称作复向量空间．"
        },
        {
          "t": "bullet",
          "en": "A vector space over 𝐂 is called a complex vector space.",
          "zh": ""
        }
      ],
      "note": {
        "en": "Usually the choice of 𝐅 is either clear from the context or irrelevant. Thus we often assume that 𝐅 is lurking in the background without specifically mentioning it With the usual operations of addition and scalar multiplication, 𝐅^𝑛 is a vector space over 𝐅, as you should verify. The example of 𝐅^𝑛 motivated our definition of vector space.",
        "zh": "通常，F 的选取要么可以从上下文明确得知，要么无关紧要．因此我们一般假定 F 暗含于 语境中，而无需专门提及它． 带有通常的加法和标量乘法运算的 F^𝑛 是 F 上的向量空间（你应自行验证这一点）．F^𝑛这个例子为我们定义向量空间提供了动因．"
      },
      "statement_en": "A vector space over 𝐑 is called a real vector space. A vector space over 𝐂 is called a complex vector space. Usually the choice of 𝐅 is either clear from the context or irrelevant. Thus we often assume that 𝐅 is lurking in the background without specifically mentioning it With the usual operations of addition and scalar multiplication, 𝐅^𝑛 is a vector space over 𝐅, as you should verify. The example of 𝐅^𝑛 motivated our definition of vector space.",
      "statement_zh": "R 上的向量空间称作实向量空间． C 上的向量空间称作复向量空间． 通常，F 的选取要么可以从上下文明确得知，要么无关紧要．因此我们一般假定 F 暗含于 语境中，而无需专门提及它． 带有通常的加法和标量乘法运算的 F^𝑛 是 F 上的向量空间（你应自行验证这一点）．F^𝑛这个例子为我们定义向量空间提供了动因．"
    },
    {
      "id": "1.24",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.24",
      "name_en": "𝐅^𝑆",
      "name_zh": "F^𝑆",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "If 𝑆 is a set, then 𝐅^𝑆 denotes the set of functions from 𝑆 to 𝐅.",
          "zh": "如果 𝑆是集合，那么 F^𝑆表示从 𝑆到 F 的所有函数构成的集合． 对于 𝑓, 𝑔 ∈ F^𝑆，和𝑓 + 𝑔 ∈ F^𝑆是由下式定义的函数：对于所有𝑥 ∈ 𝑆，"
        },
        {
          "t": "bullet",
          "en": "For 𝑓, 𝑔 ∈ 𝐅^𝑆, the sum 𝑓 + 𝑔 ∈ 𝐅^𝑆 is the function defined by",
          "zh": "(𝑓 + 𝑔)(𝑥) = 𝑓(𝑥) + 𝑔(𝑥)．"
        },
        {
          "t": "formula",
          "en": "(𝑓 + 𝑔)(𝑥) = 𝑓(𝑥) + 𝑔(𝑥)",
          "zh": "对于𝜆 ∈ F 与 𝑓 ∈ F^𝑆，乘积𝜆 𝑓 ∈ F^𝑆是由下式定义的函数：对于所有𝑥 ∈ 𝑆，",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑥 ∈ 𝑆.",
          "zh": "(𝜆 𝑓)(𝑥) = 𝜆 𝑓(𝑥)．"
        },
        {
          "t": "bullet",
          "en": "For 𝜆 ∈ 𝐅 and 𝑓 ∈ 𝐅^𝑆, the product 𝜆𝑓 ∈ 𝐅^𝑆 is the function defined by",
          "zh": ""
        },
        {
          "t": "formula",
          "en": "(𝜆𝑓)(𝑥) = 𝜆𝑓(𝑥)",
          "zh": "",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑥 ∈ 𝑆.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "举个上述记号的具体例子：如果 𝑆是区间[0, 1] 且 F = R，那么 R^{[0,1]}是全体定义在区间 [0, 1] 上的实值函数所构成的集合． 你应当自行验证下面例子中给出的三点结论．"
      },
      "statement_en": "If 𝑆 is a set, then 𝐅^𝑆 denotes the set of functions from 𝑆 to 𝐅. For 𝑓, 𝑔 ∈ 𝐅^𝑆, the sum 𝑓 + 𝑔 ∈ 𝐅^𝑆 is the function defined by (𝑓 + 𝑔)(𝑥) = 𝑓(𝑥) + 𝑔(𝑥) for all 𝑥 ∈ 𝑆. For 𝜆 ∈ 𝐅 and 𝑓 ∈ 𝐅^𝑆, the product 𝜆𝑓 ∈ 𝐅^𝑆 is the function defined by (𝜆𝑓)(𝑥) = 𝜆𝑓(𝑥) for all 𝑥 ∈ 𝑆.",
      "statement_zh": "如果 𝑆是集合，那么 F^𝑆表示从 𝑆到 F 的所有函数构成的集合． 对于 𝑓, 𝑔 ∈ F^𝑆，和𝑓 + 𝑔 ∈ F^𝑆是由下式定义的函数：对于所有𝑥 ∈ 𝑆， (𝑓 + 𝑔)(𝑥) = 𝑓(𝑥) + 𝑔(𝑥)． 对于𝜆 ∈ F 与 𝑓 ∈ F^𝑆，乘积𝜆 𝑓 ∈ F^𝑆是由下式定义的函数：对于所有𝑥 ∈ 𝑆， (𝜆 𝑓)(𝑥) = 𝜆 𝑓(𝑥)． 举个上述记号的具体例子：如果 𝑆是区间[0, 1] 且 F = R，那么 R^{[0,1]}是全体定义在区间 [0, 1] 上的实值函数所构成的集合． 你应当自行验证下面例子中给出的三点结论．"
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
          "zh": "向量空间有唯一的加法恒等元．"
        }
      ],
      "note": null,
      "statement_en": "A vector space has a unique additive identity.",
      "statement_zh": "向量空间有唯一的加法恒等元．"
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
          "zh": "向量空间里的每个元素都有唯一的加法逆元．"
        }
      ],
      "note": null,
      "statement_en": "Every element in a vector space has a unique additive inverse.",
      "statement_zh": "向量空间里的每个元素都有唯一的加法逆元．"
    },
    {
      "id": "1.28",
      "kind": "notation",
      "chapter": "ch1",
      "number": "1.28",
      "name_en": "−𝑣, 𝑤−𝑣",
      "name_zh": "−𝑣、𝑤−𝑣",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Let 𝑣, 𝑤 ∈ 𝑉. Then",
          "zh": "令𝑣, 𝑤 ∈ 𝑉，那么 −𝑣表示𝑣的加法逆元； 𝑤−𝑣定义为𝑤 +(−𝑣)．"
        },
        {
          "t": "bullet",
          "en": "−𝑣 denotes the additive inverse of 𝑣;",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "𝑤−𝑣 is defined to be 𝑤 +(−𝑣).",
          "zh": ""
        }
      ],
      "note": {
        "en": "Almost all results in this book involve some vector space. To avoid having to restate frequently that 𝑉 is a vector space,",
        "zh": "本书中几乎所有的结果都涉及向量空间．为了避免频繁地重申𝑉是向量空间，我们现在 作出以下声明，便可一劳永逸："
      },
      "statement_en": "Let 𝑣, 𝑤 ∈ 𝑉. Then −𝑣 denotes the additive inverse of 𝑣; 𝑤−𝑣 is defined to be 𝑤 +(−𝑣). Almost all results in this book involve some vector space. To avoid having to restate frequently that 𝑉 is a vector space,",
      "statement_zh": "令𝑣, 𝑤 ∈ 𝑉，那么 −𝑣表示𝑣的加法逆元； 𝑤−𝑣定义为𝑤 +(−𝑣)． 本书中几乎所有的结果都涉及向量空间．为了避免频繁地重申𝑉是向量空间，我们现在 作出以下声明，便可一劳永逸："
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
          "zh": "在本书的剩余部分中，𝑉表示 F 上的向量空间．"
        }
      ],
      "note": {
        "en": "In the next result, 0 denotes a scalar(the number 0 ∈ 𝐅) on the left side of the equation and a vector(the additive identity of 𝑉) on the right side of the equation",
        "zh": ""
      },
      "statement_en": "For the rest of this book, 𝑉 denotes a vector space over 𝐅. In the next result, 0 denotes a scalar(the number 0 ∈ 𝐅) on the left side of the equation and a vector(the additive identity of 𝑉) on the right side of the equation",
      "statement_zh": "在本书的剩余部分中，𝑉表示 F 上的向量空间．"
    },
    {
      "id": "1.30",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.30",
      "name_en": "the number 0 times a vector",
      "name_zh": "数0与向量相乘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "0𝑣 = 0 for every 𝑣 ∈ 𝑉.",
          "zh": "对于每个𝑣 ∈ 𝑉，都有0𝑣 = 0．"
        }
      ],
      "note": null,
      "statement_en": "0𝑣 = 0 for every 𝑣 ∈ 𝑉.",
      "statement_zh": "对于每个𝑣 ∈ 𝑉，都有0𝑣 = 0．"
    },
    {
      "id": "1.31",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.31",
      "name_en": "a number times the vector 0",
      "name_zh": "数与向量0相乘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "𝑎0 = 0 for every 𝑎 ∈ 𝐅.",
          "zh": "对于每个𝑎 ∈ F，都有𝑎0 = 0．"
        }
      ],
      "note": null,
      "statement_en": "𝑎0 = 0 for every 𝑎 ∈ 𝐅.",
      "statement_zh": "对于每个𝑎 ∈ F，都有𝑎0 = 0．"
    },
    {
      "id": "1.32",
      "kind": "result",
      "chapter": "ch1",
      "number": "1.32",
      "name_en": "the number−1 times a vector",
      "name_zh": "数−1与向量相乘",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(−1)𝑣 =−𝑣 for every 𝑣 ∈ 𝑉.",
          "zh": "对于每个𝑣 ∈ 𝑉，都有(−1)𝑣 =−𝑣．"
        }
      ],
      "note": null,
      "statement_en": "(−1)𝑣 =−𝑣 for every 𝑣 ∈ 𝑉.",
      "statement_zh": "对于每个𝑣 ∈ 𝑉，都有(−1)𝑣 =−𝑣．"
    },
    {
      "id": "1.33",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.33",
      "name_en": "subspace",
      "name_zh": "子空间（subspace）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A subset 𝑈 of 𝑉 is called a subspace of 𝑉 if 𝑈 is also a vector space with the same additive identity, addition, and scalar multiplication as on 𝑉.",
          "zh": "如果𝑉的子集𝑈是与𝑉具有相同的加法恒等元、加法和标量乘法运算的向量空间，那 么𝑈就称为𝑉的子空间．"
        }
      ],
      "note": {
        "en": "The next result gives the easiest way to check whether a subset of a vector space is a subspace.",
        "zh": "接下来的结果给出了检验向量空间的子 集是否为子空间的最简单方法．"
      },
      "statement_en": "A subset 𝑈 of 𝑉 is called a subspace of 𝑉 if 𝑈 is also a vector space with the same additive identity, addition, and scalar multiplication as on 𝑉. The next result gives the easiest way to check whether a subset of a vector space is a subspace.",
      "statement_zh": "如果𝑉的子集𝑈是与𝑉具有相同的加法恒等元、加法和标量乘法运算的向量空间，那 么𝑈就称为𝑉的子空间． 接下来的结果给出了检验向量空间的子 集是否为子空间的最简单方法．"
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
          "en": "A subset 𝑈 of 𝑉 is a subspace of 𝑉 if and only if 𝑈 satisfies the following three conditions.",
          "zh": "当且仅当𝑉的子集𝑈满足以下三个条件时，𝑈是𝑉的子空间．"
        },
        {
          "t": "bullet",
          "en": "Additive identity. 0 ∈ 𝑈.",
          "zh": "加法恒等元（additive identity）. 0 ∈ 𝑈."
        },
        {
          "t": "bullet",
          "en": "Closed under addition. 𝑢, 𝑤 ∈ 𝑈 implies 𝑢 + 𝑤 ∈ 𝑈.",
          "zh": "对于加法封闭（closed under addition）. 𝑢, 𝑤 ∈ 𝑈意味着𝑢 + 𝑤 ∈ 𝑈. 对于标量乘法封闭（closed under scalar multiplication） 𝑎 ∈ F 且𝑢 ∈ 𝑈意味着𝑎𝑢 ∈ 𝑈．"
        },
        {
          "t": "bullet",
          "en": "Closed under scalar multiplication. 𝑎 ∈ 𝐅 and 𝑢 ∈ 𝑈 implies 𝑎𝑢 ∈ 𝑈.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "A subset 𝑈 of 𝑉 is a subspace of 𝑉 if and only if 𝑈 satisfies the following three conditions. Additive identity. 0 ∈ 𝑈. Closed under addition. 𝑢, 𝑤 ∈ 𝑈 implies 𝑢 + 𝑤 ∈ 𝑈. Closed under scalar multiplication. 𝑎 ∈ 𝐅 and 𝑢 ∈ 𝑈 implies 𝑎𝑢 ∈ 𝑈.",
      "statement_zh": "当且仅当𝑉的子集𝑈满足以下三个条件时，𝑈是𝑉的子空间． 加法恒等元（additive identity）. 0 ∈ 𝑈. 对于加法封闭（closed under addition）. 𝑢, 𝑤 ∈ 𝑈意味着𝑢 + 𝑤 ∈ 𝑈. 对于标量乘法封闭（closed under scalar multiplication） 𝑎 ∈ F 且𝑢 ∈ 𝑈意味着𝑎𝑢 ∈ 𝑈．"
    },
    {
      "id": "1.36",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.36",
      "name_en": "sum of subspaces",
      "name_zh": "子空间的和（sum of subspaces）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. The sum of 𝑉_1, …, 𝑉_𝑚, denoted by 𝑉_1 + ⋯ + 𝑉_𝑚, is the set of all possible sums of elements of 𝑉_1, …, 𝑉_𝑚. More precisely,",
          "zh": "假设𝑉_1,...,𝑉_𝑚是𝑉的子空间．𝑉_1,...,𝑉_𝑚的和是由𝑉_1,...,𝑉_𝑚中元素所有可能的和所构 成的集合，记作𝑉_1 + · · · + 𝑉_𝑚 ．更确切地说，"
        },
        {
          "t": "formula",
          "en": "𝑉_1 + ⋯ + 𝑉_𝑚 ={𝑣_1 + ⋯ + 𝑣_𝑚 : 𝑣_1 ∈ 𝑉_1, …, 𝑣_𝑚 ∈ 𝑉_𝑚}.",
          "zh": "𝑉_1 + · · · + 𝑉_𝑚 ={𝑣_1 + · · · + 𝑣_𝑚: 𝑣_1 ∈ 𝑉_1,..., 𝑣_𝑚 ∈ 𝑉_𝑚}．",
          "eq": null
        }
      ],
      "note": {
        "en": "",
        "zh": "我们看几个有关子空间之和的例子．"
      },
      "statement_en": "Suppose 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. The sum of 𝑉_1, …, 𝑉_𝑚, denoted by 𝑉_1 + ⋯ + 𝑉_𝑚, is the set of all possible sums of elements of 𝑉_1, …, 𝑉_𝑚. More precisely, 𝑉_1 + ⋯ + 𝑉_𝑚 ={𝑣_1 + ⋯ + 𝑣_𝑚 : 𝑣_1 ∈ 𝑉_1, …, 𝑣_𝑚 ∈ 𝑉_𝑚}.",
      "statement_zh": "假设𝑉_1,...,𝑉_𝑚是𝑉的子空间．𝑉_1,...,𝑉_𝑚的和是由𝑉_1,...,𝑉_𝑚中元素所有可能的和所构 成的集合，记作𝑉_1 + · · · + 𝑉_𝑚 ．更确切地说， 𝑉_1 + · · · + 𝑉_𝑚 ={𝑣_1 + · · · + 𝑣_𝑚: 𝑣_1 ∈ 𝑉_1,..., 𝑣_𝑚 ∈ 𝑉_𝑚}． 我们看几个有关子空间之和的例子．"
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
          "en": "Suppose 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. Then 𝑉_1 + ⋯ + 𝑉_𝑚 is the smallest subspace of 𝑉 containing 𝑉_1, …, 𝑉_𝑚.",
          "zh": "假设𝑉_1,...,𝑉_𝑚是𝑉的子空间，那么𝑉_1 + · · · + 𝑉_𝑚是最小的包含𝑉_1,...,𝑉_𝑚的子空间．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. Then 𝑉_1 + ⋯ + 𝑉_𝑚 is the smallest subspace of 𝑉 containing 𝑉_1, …, 𝑉_𝑚.",
      "statement_zh": "假设𝑉_1,...,𝑉_𝑚是𝑉的子空间，那么𝑉_1 + · · · + 𝑉_𝑚是最小的包含𝑉_1,...,𝑉_𝑚的子空间．"
    },
    {
      "id": "1.41",
      "kind": "definition",
      "chapter": "ch1",
      "number": "1.41",
      "name_en": "direct sum, ⊕",
      "name_zh": "直和（direct sum）、⊕",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉.",
          "zh": "设𝑉_1,...,𝑉_𝑚是𝑉的子空间． 如果𝑉_1 + · · · + 𝑉_𝑚中的每个元素都能用 𝑣_1 + · · · + 𝑣_𝑚 （其中各 𝑣_𝑘 ∈ 𝑉_𝑘 ）这种形式唯一 地表示出来，则称子空间之和𝑉_1 + · · · + 𝑉_𝑚为直和． 如果𝑉1 + · · · +𝑉𝑚是直和，那么用𝑉1 ⊕ · · · ⊕ 𝑉𝑚来表示𝑉1 + · · · +𝑉𝑚，其中记号 ⊕ 表示 此处的和是直和．"
        },
        {
          "t": "bullet",
          "en": "The sum 𝑉_1 +⋯+𝑉_𝑚 is called a direct sum if each element of 𝑉_1 +⋯+𝑉_𝑚 can be written in only one way as a sum 𝑣_1 + ⋯ + 𝑣_𝑚, where each 𝑣_𝑘 ∈ 𝑉_𝑘.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "If 𝑉_1 + ⋯ + 𝑉_𝑚 is a direct sum, then 𝑉_1 ⊕ ⋯ ⊕ 𝑉_𝑚 denotes 𝑉_1 + ⋯ + 𝑉_𝑚, with the ⊕ notation serving as an indication that this is a direct sum.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. The sum 𝑉_1 +⋯+𝑉_𝑚 is called a direct sum if each element of 𝑉_1 +⋯+𝑉_𝑚 can be written in only one way as a sum 𝑣_1 + ⋯ + 𝑣_𝑚, where each 𝑣_𝑘 ∈ 𝑉_𝑘. If 𝑉_1 + ⋯ + 𝑉_𝑚 is a direct sum, then 𝑉_1 ⊕ ⋯ ⊕ 𝑉_𝑚 denotes 𝑉_1 + ⋯ + 𝑉_𝑚, with the ⊕ notation serving as an indication that this is a direct sum.",
      "statement_zh": "设𝑉_1,...,𝑉_𝑚是𝑉的子空间． 如果𝑉_1 + · · · + 𝑉_𝑚中的每个元素都能用 𝑣_1 + · · · + 𝑣_𝑚 （其中各 𝑣_𝑘 ∈ 𝑉_𝑘 ）这种形式唯一 地表示出来，则称子空间之和𝑉_1 + · · · + 𝑉_𝑚为直和． 如果𝑉1 + · · · +𝑉𝑚是直和，那么用𝑉1 ⊕ · · · ⊕ 𝑉𝑚来表示𝑉1 + · · · +𝑉𝑚，其中记号 ⊕ 表示 此处的和是直和．"
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
          "en": "Suppose 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. Then 𝑉_1 + ⋯ + 𝑉_𝑚 is a direct sum if and only if the only way to write 0 as a sum 𝑣_1 + ⋯ + 𝑣_𝑚, where each 𝑣_𝑘 ∈ 𝑉_𝑘, is by taking each 𝑣_𝑘 equal to 0.",
          "zh": "假定𝑉_1,...,𝑉_𝑚是𝑉的子空间．那么𝑉_1 + · · · + 𝑉_𝑚是直和，当且仅当用𝑣_1 + · · · + 𝑣_𝑚 （其 中各𝑣_𝑘 ∈ 𝑉_𝑘 ）表示0的唯一方式是将每个𝑣_𝑘都取0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. Then 𝑉_1 + ⋯ + 𝑉_𝑚 is a direct sum if and only if the only way to write 0 as a sum 𝑣_1 + ⋯ + 𝑣_𝑚, where each 𝑣_𝑘 ∈ 𝑉_𝑘, is by taking each 𝑣_𝑘 equal to 0.",
      "statement_zh": "假定𝑉_1,...,𝑉_𝑚是𝑉的子空间．那么𝑉_1 + · · · + 𝑉_𝑚是直和，当且仅当用𝑣_1 + · · · + 𝑣_𝑚 （其 中各𝑣_𝑘 ∈ 𝑉_𝑘 ）表示0的唯一方式是将每个𝑣_𝑘都取0．"
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
          "en": "Suppose 𝑈 and 𝑊 are subspaces of 𝑉. Then 𝑈 + 𝑊 is a direct sum ⟺ 𝑈 ∩ 𝑊 ={0}.",
          "zh": "假定𝑈和𝑊是𝑉的子空间．那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑈 + 𝑊是直和 ⇐⇒ 𝑈 ∩ 𝑊 ={0}．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 and 𝑊 are subspaces of 𝑉. Then 𝑈 + 𝑊 is a direct sum ⟺ 𝑈 ∩ 𝑊 ={0}.",
      "statement_zh": "假定𝑈和𝑊是𝑉的子空间．那么 𝑈 + 𝑊是直和 ⇐⇒ 𝑈 ∩ 𝑊 ={0}．"
    },
    {
      "id": "2.1",
      "kind": "notation",
      "chapter": "ch2",
      "number": "2.1",
      "name_en": "list of vectors",
      "name_zh": "向量组",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "We will usually write lists of vectors without surrounding parentheses.",
          "zh": "书写向量组时，我们通常不用圆括号括起来．"
        }
      ],
      "note": {
        "en": "Linear Combinations and Span A sum of scalar multiples of the vectors in a list is called a linear combination of the list. Here is the formal definition.",
        "zh": "线性组合和张成空间 将一个向量组中的向量乘以标量再求和的结果，就称为该向量组的线性组合．下面是正式 的定义．"
      },
      "statement_en": "We will usually write lists of vectors without surrounding parentheses. Linear Combinations and Span A sum of scalar multiples of the vectors in a list is called a linear combination of the list. Here is the formal definition.",
      "statement_zh": "书写向量组时，我们通常不用圆括号括起来． 线性组合和张成空间 将一个向量组中的向量乘以标量再求和的结果，就称为该向量组的线性组合．下面是正式 的定义．"
    },
    {
      "id": "2.2",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.2",
      "name_en": "linear combination",
      "name_zh": "线性组合（linear combination）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear combination of a list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉 is a vector of the form",
          "zh": "𝑉中向量组𝑣_1,..., 𝑣_𝑚的线性组合^2是形如"
        },
        {
          "t": "formula",
          "en": "𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑚 𝑣_𝑚",
          "zh": "𝑎1𝑣1 + · · · + 𝑎𝑚𝑣𝑚",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅.",
          "zh": "的向量，其中𝑎_1,..., 𝑎_𝑚 ∈ F．"
        }
      ],
      "note": null,
      "statement_en": "A linear combination of a list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉 is a vector of the form 𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑚 𝑣_𝑚 where 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅.",
      "statement_zh": "𝑉中向量组𝑣_1,..., 𝑣_𝑚的线性组合^2是形如 𝑎1𝑣1 + · · · + 𝑎𝑚𝑣𝑚 的向量，其中𝑎_1,..., 𝑎_𝑚 ∈ F．"
    },
    {
      "id": "2.4",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.4",
      "name_en": "span",
      "name_zh": "张成空间（span）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The set of all linear combinations of a list of vectors 𝑣_1, …, 𝑣_𝑚 in 𝑉 is called the span of 𝑣_1, …, 𝑣_𝑚, denoted by span(𝑣_1, …, 𝑣_𝑚). In other words,",
          "zh": "𝑉中向量组 𝑣_1,..., 𝑣_𝑚的所有线性组合所构成的集合称为 𝑣_1,..., 𝑣_𝑚的张成空间^3，记作 span(𝑣_1,..., 𝑣_𝑚)．换言之，"
        },
        {
          "t": "formula",
          "en": "span(𝑣_1, …, 𝑣_𝑚) ={𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑚 𝑣_𝑚 : 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅}.",
          "zh": "span(𝑣_1,..., 𝑣_𝑚) ={𝑎_1 𝑣_1 + · · · + 𝑎_𝑚 𝑣_𝑚: 𝑎_1,..., 𝑎_𝑚 ∈ F}．",
          "eq": null
        },
        {
          "t": "p",
          "en": "The span of the empty list() is defined to be{0}.",
          "zh": "定义空向量组() 的张成空间为{0}．"
        }
      ],
      "note": null,
      "statement_en": "The set of all linear combinations of a list of vectors 𝑣_1, …, 𝑣_𝑚 in 𝑉 is called the span of 𝑣_1, …, 𝑣_𝑚, denoted by span(𝑣_1, …, 𝑣_𝑚). In other words, span(𝑣_1, …, 𝑣_𝑚) ={𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑚 𝑣_𝑚 : 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅}. The span of the empty list() is defined to be{0}.",
      "statement_zh": "𝑉中向量组 𝑣_1,..., 𝑣_𝑚的所有线性组合所构成的集合称为 𝑣_1,..., 𝑣_𝑚的张成空间^3，记作 span(𝑣_1,..., 𝑣_𝑚)．换言之， span(𝑣_1,..., 𝑣_𝑚) ={𝑎_1 𝑣_1 + · · · + 𝑎_𝑚 𝑣_𝑚: 𝑎_1,..., 𝑎_𝑚 ∈ F}． 定义空向量组() 的张成空间为{0}．"
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
          "zh": "𝑉中向量组的张成空间是最小的包含这向量组中所有向量的𝑉的子空间．"
        }
      ],
      "note": null,
      "statement_en": "The span of a list of vectors in 𝑉 is the smallest subspace of 𝑉 containing all vectors in the list.",
      "statement_zh": "𝑉中向量组的张成空间是最小的包含这向量组中所有向量的𝑉的子空间．"
    },
    {
      "id": "2.7",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.7",
      "name_en": "spans",
      "name_zh": "张成（spans）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If span(𝑣_1, …, 𝑣_𝑚) equals 𝑉, we say that the list 𝑣_1, …, 𝑣_𝑚 spans 𝑉.",
          "zh": "如果 span(𝑣_1,..., 𝑣_𝑚) 等于𝑉，我们就说𝑣_1,..., 𝑣_𝑚张成^4 𝑉．"
        }
      ],
      "note": {
        "en": "",
        "zh": "原文 span，是个名词．在后文中，和“线性组合”一样，“（一组）向量的张成空间”和“向量组的张成空间”的说法都可能出现，它 们所指相同，都是一个向量空间中的有限个向量分别乘以标量再求和的所有结果构成的集合． 原文 spans，动词的第三人称单数形式．"
      },
      "statement_en": "If span(𝑣_1, …, 𝑣_𝑚) equals 𝑉, we say that the list 𝑣_1, …, 𝑣_𝑚 spans 𝑉.",
      "statement_zh": "如果 span(𝑣_1,..., 𝑣_𝑚) 等于𝑉，我们就说𝑣_1,..., 𝑣_𝑚张成^4 𝑉． 原文 span，是个名词．在后文中，和“线性组合”一样，“（一组）向量的张成空间”和“向量组的张成空间”的说法都可能出现，它 们所指相同，都是一个向量空间中的有限个向量分别乘以标量再求和的所有结果构成的集合． 原文 spans，动词的第三人称单数形式．"
    },
    {
      "id": "2.9",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.9",
      "name_en": "finite-dimensional vector space",
      "name_zh": "有限维向量空间（finite-dimensional vector space）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A vector space is called finite-dimensional if some list of vectors in it spans the space.",
          "zh": "如果一个向量空间可由其中某个向量组张成，则称该向量空间是有限维的．"
        }
      ],
      "note": {
        "en": "Example 2.8 above shows that 𝐅^𝑛 is a finite-dimensional vector space for every positive integer 𝑛. The definition of a polynomial is no doubt already familiar to you.",
        "zh": "上面的例2.8表明，对于每个正整数𝑛，F^𝑛都是有限维的向量空间． 多项式的定义对你来说无疑是很熟悉 的．"
      },
      "statement_en": "A vector space is called finite-dimensional if some list of vectors in it spans the space. Example 2.8 above shows that 𝐅^𝑛 is a finite-dimensional vector space for every positive integer 𝑛. The definition of a polynomial is no doubt already familiar to you.",
      "statement_zh": "如果一个向量空间可由其中某个向量组张成，则称该向量空间是有限维的． 上面的例2.8表明，对于每个正整数𝑛，F^𝑛都是有限维的向量空间． 多项式的定义对你来说无疑是很熟悉 的．"
    },
    {
      "id": "2.10",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.10",
      "name_en": "polynomial, 𝒫(𝐅)",
      "name_zh": "多项式（polynomial）、P(F)",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A function 𝑝: 𝐅 → 𝐅 is called a polynomial with coefficients in 𝐅 if there exist 𝑎_0, …, 𝑎_𝑚 ∈ 𝐅 such that",
          "zh": "对于函数 𝑝: F → F，如果存在𝑎_0,..., 𝑎_𝑚 ∈ F 使得对所有 𝑧 ∈ F 都有"
        },
        {
          "t": "formula",
          "en": "𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + 𝑎_2 𝑧^2 + ⋯ + 𝑎_𝑚 𝑧^𝑚",
          "zh": "𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + 𝑎_2 𝑧^2 + · · · + 𝑎_𝑚 𝑧^𝑚",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑧 ∈ 𝐅.",
          "zh": "则称 𝑝为系数在 F 中的多项式． P(F) 是系数在 F 中的全体多项式所构成的集合．"
        },
        {
          "t": "bullet",
          "en": "𝒫(𝐅) is the set of all polynomials with coefficients in 𝐅.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "带有通常的加法和标量乘法运算的 P(F)是 F 上的向量空间（你应自行验证）．因此，P(F) 是 F^F （全体由 F 到 F 的函数所构成的向量空间）的子空间． 如果一个多项式（视为一个由 F 到 F 的函数）可由两组系数表示，那么将其中一种表示 法减去另一种，就能得到这样一个多项式——F 上的恒等于0的函数，因此它的所有系数都为 0（如果你对这个事实不熟悉，暂且相信它是对的，之后我们会证明它——参见4.8）．结论：一 个多项式的系数由该多项式唯一决定．于是，下述定义唯一地规定了多项式的次数．"
      },
      "statement_en": "A function 𝑝: 𝐅 → 𝐅 is called a polynomial with coefficients in 𝐅 if there exist 𝑎_0, …, 𝑎_𝑚 ∈ 𝐅 such that 𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + 𝑎_2 𝑧^2 + ⋯ + 𝑎_𝑚 𝑧^𝑚 for all 𝑧 ∈ 𝐅. 𝒫(𝐅) is the set of all polynomials with coefficients in 𝐅.",
      "statement_zh": "对于函数 𝑝: F → F，如果存在𝑎_0,..., 𝑎_𝑚 ∈ F 使得对所有 𝑧 ∈ F 都有 𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + 𝑎_2 𝑧^2 + · · · + 𝑎_𝑚 𝑧^𝑚 则称 𝑝为系数在 F 中的多项式． P(F) 是系数在 F 中的全体多项式所构成的集合． 带有通常的加法和标量乘法运算的 P(F)是 F 上的向量空间（你应自行验证）．因此，P(F) 是 F^F （全体由 F 到 F 的函数所构成的向量空间）的子空间． 如果一个多项式（视为一个由 F 到 F 的函数）可由两组系数表示，那么将其中一种表示 法减去另一种，就能得到这样一个多项式——F 上的恒等于0的函数，因此它的所有系数都为 0（如果你对这个事实不熟悉，暂且相信它是对的，之后我们会证明它——参见4.8）．结论：一 个多项式的系数由该多项式唯一决定．于是，下述定义唯一地规定了多项式的次数．"
    },
    {
      "id": "2.11",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.11",
      "name_en": "degree of a polynomial, deg 𝑝",
      "name_zh": "多项式的次数（degree of a polynomial）、deg 𝑝",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A polynomial 𝑝 ∈ 𝒫(𝐅) is said to have degree 𝑚 if there exist scalars 𝑎_0, 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅 with 𝑎_𝑚 ≠ 0 such that for every 𝑧 ∈ 𝐅, we have",
          "zh": "对于多项式 𝑝 ∈ P(F)，如果存在𝑎_0, 𝑎_1,..., 𝑎_𝑚 ∈ F 且𝑎_𝑚 ≠ 0使得对每个 𝑧 ∈ F，都有"
        },
        {
          "t": "formula",
          "en": "𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + ⋯ + 𝑎_𝑚 𝑧^𝑚.",
          "zh": "𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + · · · + 𝑎_𝑚 𝑧^𝑚",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "The polynomial that is identically 0 is said to have degree−∞.",
          "zh": "那么就说 𝑝的次数是𝑚． 规定恒等于0的多项式的次数为−∞． 多项式 𝑝的次数记为 deg 𝑝．"
        },
        {
          "t": "bullet",
          "en": "The degree of a polynomial 𝑝 is denoted by deg 𝑝.",
          "zh": ""
        }
      ],
      "note": {
        "en": "In the next definition, we use the convention that−∞ < 𝑚, which means that the polynomial 0 is in 𝒫_𝑚(𝐅).",
        "zh": "在下面的定义中，我们约定−∞ < 𝑚，这意味着多项式0属于 P_𝑚(F)．"
      },
      "statement_en": "A polynomial 𝑝 ∈ 𝒫(𝐅) is said to have degree 𝑚 if there exist scalars 𝑎_0, 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅 with 𝑎_𝑚 ≠ 0 such that for every 𝑧 ∈ 𝐅, we have 𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + ⋯ + 𝑎_𝑚 𝑧^𝑚. The polynomial that is identically 0 is said to have degree−∞. The degree of a polynomial 𝑝 is denoted by deg 𝑝. In the next definition, we use the convention that−∞ < 𝑚, which means that the polynomial 0 is in 𝒫_𝑚(𝐅).",
      "statement_zh": "对于多项式 𝑝 ∈ P(F)，如果存在𝑎_0, 𝑎_1,..., 𝑎_𝑚 ∈ F 且𝑎_𝑚 ≠ 0使得对每个 𝑧 ∈ F，都有 𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + · · · + 𝑎_𝑚 𝑧^𝑚 那么就说 𝑝的次数是𝑚． 规定恒等于0的多项式的次数为−∞． 多项式 𝑝的次数记为 deg 𝑝． 在下面的定义中，我们约定−∞ < 𝑚，这意味着多项式0属于 P_𝑚(F)．"
    },
    {
      "id": "2.12",
      "kind": "notation",
      "chapter": "ch2",
      "number": "2.12",
      "name_en": "𝒫_𝑚(𝐅)",
      "name_zh": "P_𝑚(F)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑚 a nonnegative integer, 𝒫_𝑚(𝐅) denotes the set of all polynomials with coefficients in 𝐅 and degree at most 𝑚.",
          "zh": "对于非负整数𝑚，P_𝑚(F) 表示系数在 F 中且次数不高于𝑚的所有多项式所构成的集合．"
        }
      ],
      "note": {
        "en": "If 𝑚 is a nonnegative integer, then 𝒫_𝑚(𝐅) = span(1, 𝑧, …, 𝑧^𝑚)[here we slightly abuse notation by letting 𝑧^𝑘 denote a function]. Thus 𝒫_𝑚(𝐅) is a finite-dimensional vector space for each nonnegative integer 𝑚.",
        "zh": "如果𝑚是非负整数，那么 P_𝑚(F) = span(1, 𝑧,..., 𝑧^𝑚)（此处我们令𝑧^𝑘表示一个函数，这有 点滥用记号^5 ）．于是，对于每个非负整数𝑚，P_𝑚(F) 都是有限维向量空间．"
      },
      "statement_en": "For 𝑚 a nonnegative integer, 𝒫_𝑚(𝐅) denotes the set of all polynomials with coefficients in 𝐅 and degree at most 𝑚. If 𝑚 is a nonnegative integer, then 𝒫_𝑚(𝐅) = span(1, 𝑧, …, 𝑧^𝑚)[here we slightly abuse notation by letting 𝑧^𝑘 denote a function]. Thus 𝒫_𝑚(𝐅) is a finite-dimensional vector space for each nonnegative integer 𝑚.",
      "statement_zh": "对于非负整数𝑚，P_𝑚(F) 表示系数在 F 中且次数不高于𝑚的所有多项式所构成的集合． 如果𝑚是非负整数，那么 P_𝑚(F) = span(1, 𝑧,..., 𝑧^𝑚)（此处我们令𝑧^𝑘表示一个函数，这有 点滥用记号^5 ）．于是，对于每个非负整数𝑚，P_𝑚(F) 都是有限维向量空间．"
    },
    {
      "id": "2.13",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.13",
      "name_en": "infinite-dimensional vector space",
      "name_zh": "无限维向量空间（infinite-dimensional vector space）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A vector space is called infinite-dimensional if it is not finite-dimensional.",
          "zh": "如果一个向量空间不是有限维的，就称它是无限维的．"
        }
      ],
      "note": null,
      "statement_en": "A vector space is called infinite-dimensional if it is not finite-dimensional.",
      "statement_zh": "如果一个向量空间不是有限维的，就称它是无限维的．"
    },
    {
      "id": "2.15",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.15",
      "name_en": "linearly independent",
      "name_zh": "线性无关（linearly independent）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉 is called linearly independent if the only choice of 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅 that makes",
          "zh": "对于𝑉中的向量组𝑣_1,..., 𝑣_𝑚，如果使得"
        },
        {
          "t": "formula",
          "en": "𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑚 𝑣_𝑚 = 0",
          "zh": "𝑎1𝑣1 + · · · + 𝑎𝑚𝑣𝑚 = 0",
          "eq": null
        },
        {
          "t": "p",
          "en": "is 𝑎_1 = ⋯ = 𝑎_𝑚 = 0.",
          "zh": "成立的𝑎_1,..., 𝑎_𝑚 ∈ F 的唯一选取方式是𝑎_1 = · · · = 𝑎_𝑚 = 0，那么称该向量组为线性无 关的． 规定空向量组() 也是线性无关的．"
        },
        {
          "t": "bullet",
          "en": "The empty list() is also declared to be linearly independent.",
          "zh": ""
        }
      ],
      "note": {
        "en": "The reasoning above shows that 𝑣_1, …, 𝑣_𝑚 is linearly independent if and only if each vector in span(𝑣_1, …, 𝑣_𝑚) has only one representation as a linear combination of 𝑣_1, …, 𝑣_𝑚.",
        "zh": "上面的推导说明，𝑣_1,..., 𝑣_𝑚是线性无关的，当且仅当 span(𝑣_1,..., 𝑣_𝑚) 中的每个向量都只_为能_什唯_么一_{说“}地_这表_{有点}示_滥成_{用记} 𝑣_{1号},_”.._呢.,_？𝑣_{因𝑚为}的_{𝑧𝑘}线_这性_{个记}组_号合_本．_{来是用于表示数𝑧∈F的𝑘次幂，这里却用来指代函数𝑓:𝑧↦→𝑧𝑘,𝑧∈F．这}"
      },
      "statement_en": "A list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉 is called linearly independent if the only choice of 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅 that makes 𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑚 𝑣_𝑚 = 0 is 𝑎_1 = ⋯ = 𝑎_𝑚 = 0. The empty list() is also declared to be linearly independent. The reasoning above shows that 𝑣_1, …, 𝑣_𝑚 is linearly independent if and only if each vector in span(𝑣_1, …, 𝑣_𝑚) has only one representation as a linear combination of 𝑣_1, …, 𝑣_𝑚.",
      "statement_zh": "对于𝑉中的向量组𝑣_1,..., 𝑣_𝑚，如果使得 𝑎1𝑣1 + · · · + 𝑎𝑚𝑣𝑚 = 0 成立的𝑎_1,..., 𝑎_𝑚 ∈ F 的唯一选取方式是𝑎_1 = · · · = 𝑎_𝑚 = 0，那么称该向量组为线性无 关的． 规定空向量组() 也是线性无关的． 上面的推导说明，𝑣_1,..., 𝑣_𝑚是线性无关的，当且仅当 span(𝑣_1,..., 𝑣_𝑚) 中的每个向量都只_为能_什唯_么一_{说“}地_这表_{有点}示_滥成_{用记} 𝑣_{1号},_”.._呢.,_？𝑣_{因𝑚为}的_{𝑧𝑘}线_这性_{个记}组_号合_本．_{来是用于表示数𝑧∈F的𝑘次幂，这里却用来指代函数𝑓:𝑧↦→𝑧𝑘,𝑧∈F．这}"
    },
    {
      "id": "2.17",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.17",
      "name_en": "linearly dependent",
      "name_zh": "线性相关（linearly dependent）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A list of vectors in 𝑉 is called linearly dependent if it is not linearly independent.",
          "zh": "如果𝑉中的一个向量组不是线性无关的，就称它是线性相关的． 换言之，对于 𝑉中的向量组 𝑣_1,..., 𝑣_𝑚，如果存在不全为 0 的 𝑎_1,..., 𝑎_𝑚 ∈ F 使得 𝑎_1 𝑣_1 + · · · + 𝑎_𝑚 𝑣_𝑚 = 0，那么该向量组是线性相关的．"
        },
        {
          "t": "bullet",
          "en": "In other words, a list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉 is linearly dependent if there exist 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅, not all 0, such that 𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑚 𝑣_𝑚 = 0.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "A list of vectors in 𝑉 is called linearly dependent if it is not linearly independent. In other words, a list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉 is linearly dependent if there exist 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅, not all 0, such that 𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑚 𝑣_𝑚 = 0.",
      "statement_zh": "如果𝑉中的一个向量组不是线性无关的，就称它是线性相关的． 换言之，对于 𝑉中的向量组 𝑣_1,..., 𝑣_𝑚，如果存在不全为 0 的 𝑎_1,..., 𝑎_𝑚 ∈ F 使得 𝑎_1 𝑣_1 + · · · + 𝑎_𝑚 𝑣_𝑚 = 0，那么该向量组是线性相关的．"
    },
    {
      "id": "2.19",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.19",
      "name_en": "linear dependence lemma",
      "name_zh": "线性相关性引理（linear dependence lemma）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣_1, …, 𝑣_𝑚 is a linearly dependent list in 𝑉. Then there exists 𝑘 ∈{1, 2, …, 𝑚} such that",
          "zh": "设𝑣_1,..., 𝑣_𝑚是𝑉中的线性相关组．那么存在 𝑘 ∈{1, 2,..., 𝑚} 满足"
        },
        {
          "t": "formula",
          "en": "𝑣_𝑘 ∈ span(𝑣_1, …, 𝑣_{𝑘−1}).",
          "zh": "𝑣_𝑘 ∈ span(𝑣_1,..., 𝑣_{𝑘−1})．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Furthermore, if 𝑘 satisfies the condition above and the 𝑘^{th} term is removed from 𝑣_1, …, 𝑣_𝑚, then the span of the remaining list equals span(𝑣_1, …, 𝑣_𝑚).",
          "zh": "进而，如果 𝑘满足上述条件且从𝑣_1,..., 𝑣_𝑚中移除第 𝑘项，那么剩余向量组成的向量组 的张成空间仍等于 span(𝑣_1,..., 𝑣_𝑚)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣_1, …, 𝑣_𝑚 is a linearly dependent list in 𝑉. Then there exists 𝑘 ∈{1, 2, …, 𝑚} such that 𝑣_𝑘 ∈ span(𝑣_1, …, 𝑣_{𝑘−1}). Furthermore, if 𝑘 satisfies the condition above and the 𝑘^{th} term is removed from 𝑣_1, …, 𝑣_𝑚, then the span of the remaining list equals span(𝑣_1, …, 𝑣_𝑚).",
      "statement_zh": "设𝑣_1,..., 𝑣_𝑚是𝑉中的线性相关组．那么存在 𝑘 ∈{1, 2,..., 𝑚} 满足 𝑣_𝑘 ∈ span(𝑣_1,..., 𝑣_{𝑘−1})． 进而，如果 𝑘满足上述条件且从𝑣_1,..., 𝑣_𝑚中移除第 𝑘项，那么剩余向量组成的向量组 的张成空间仍等于 span(𝑣_1,..., 𝑣_𝑚)．"
    },
    {
      "id": "2.22",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.22",
      "name_en": "length of linearly independent list ≤ length of spanning list",
      "name_zh": "线性无关组的长度 ≤ 张成组的长度",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "In a finite-dimensional vector space, the length of every linearly independent list of vectors is less than or equal to the length of every spanning list of vectors.",
          "zh": "在有限维向量空间中，每个线性无关向量组的长度小于或等于每个张成向量组的长度．"
        }
      ],
      "note": null,
      "statement_en": "In a finite-dimensional vector space, the length of every linearly independent list of vectors is less than or equal to the length of every spanning list of vectors.",
      "statement_zh": "在有限维向量空间中，每个线性无关向量组的长度小于或等于每个张成向量组的长度．"
    },
    {
      "id": "2.25",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.25",
      "name_en": "finite-dimensional subspaces",
      "name_zh": "有限维的子空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every subspace of a finite-dimensional vector space is finite-dimensional.",
          "zh": "有限维向量空间的每个子空间都是有限维的．"
        }
      ],
      "note": null,
      "statement_en": "Every subspace of a finite-dimensional vector space is finite-dimensional.",
      "statement_zh": "有限维向量空间的每个子空间都是有限维的．"
    },
    {
      "id": "2.26",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.26",
      "name_en": "basis",
      "name_zh": "基（basis）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A basis of 𝑉 is a list of vectors in 𝑉 that is linearly independent and spans 𝑉.",
          "zh": "𝑉中线性无关且张成𝑉的向量组称为𝑉的基．"
        }
      ],
      "note": null,
      "statement_en": "A basis of 𝑉 is a list of vectors in 𝑉 that is linearly independent and spans 𝑉.",
      "statement_zh": "𝑉中线性无关且张成𝑉的向量组称为𝑉的基．"
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
          "en": "A list 𝑣_1, …, 𝑣_𝑛 of vectors in 𝑉 is a basis of 𝑉 if and only if every 𝑣 ∈ 𝑉 can be written uniquely in the form",
          "zh": "𝑉中向量组𝑣_1,..., 𝑣_𝑛是𝑉的基，当且仅当每个𝑣 ∈ 𝑉都可以被唯一地写成这样的形式："
        },
        {
          "t": "formula",
          "en": "𝑣 = 𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑛 𝑣_𝑛",
          "zh": "𝑣 = 𝑎_1 𝑣_1 + · · · + 𝑎_𝑛 𝑣_𝑛，(2.29)",
          "eq": "2.29"
        },
        {
          "t": "p",
          "en": "where 𝑎_1, …, 𝑎_𝑛 ∈ 𝐅.",
          "zh": "其中𝑎_1,..., 𝑎_𝑛 ∈ F．"
        }
      ],
      "note": null,
      "statement_en": "A list 𝑣_1, …, 𝑣_𝑛 of vectors in 𝑉 is a basis of 𝑉 if and only if every 𝑣 ∈ 𝑉 can be written uniquely in the form 𝑣 = 𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑛 𝑣_𝑛 where 𝑎_1, …, 𝑎_𝑛 ∈ 𝐅.",
      "statement_zh": "𝑉中向量组𝑣_1,..., 𝑣_𝑛是𝑉的基，当且仅当每个𝑣 ∈ 𝑉都可以被唯一地写成这样的形式： 𝑣 = 𝑎_1 𝑣_1 + · · · + 𝑎_𝑛 𝑣_𝑛，(2.29) 其中𝑎_1,..., 𝑎_𝑛 ∈ F．"
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
          "zh": "向量空间中的每个张成组都能被削减成该向量空间的基．"
        }
      ],
      "note": null,
      "statement_en": "Every spanning list in a vector space can be reduced to a basis of the vector space.",
      "statement_zh": "向量空间中的每个张成组都能被削减成该向量空间的基．"
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
          "zh": "每个有限维向量空间都有基．"
        }
      ],
      "note": null,
      "statement_en": "Every finite-dimensional vector space has a basis.",
      "statement_zh": "每个有限维向量空间都有基．"
    },
    {
      "id": "2.32",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.32",
      "name_en": "every linearly independent list extends to a basis",
      "name_zh": "每个线性无关组都可被扩充成基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every linearly independent list of vectors in a finite-dimensional vector space can be extended to a basis of the vector space.",
          "zh": "有限维向量空间中每个线性无关向量组都可被扩充成该向量空间的基．"
        }
      ],
      "note": null,
      "statement_en": "Every linearly independent list of vectors in a finite-dimensional vector space can be extended to a basis of the vector space.",
      "statement_zh": "有限维向量空间中每个线性无关向量组都可被扩充成该向量空间的基．"
    },
    {
      "id": "2.33",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.33",
      "name_en": "every subspace of 𝑉 is part of a direct sum equal to 𝑉",
      "name_zh": "𝑉的每个子空间都是等于𝑉的直和的组成部分",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then there is a subspace 𝑊 of 𝑉 such that 𝑉 = 𝑈 ⊕ 𝑊.",
          "zh": "假设𝑉是有限维的，𝑈是𝑉的子空间．那么存在𝑉的子空间𝑊，使得𝑉 = 𝑈 ⊕ 𝑊．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then there is a subspace 𝑊 of 𝑉 such that 𝑉 = 𝑈 ⊕ 𝑊.",
      "statement_zh": "假设𝑉是有限维的，𝑈是𝑉的子空间．那么存在𝑉的子空间𝑊，使得𝑉 = 𝑈 ⊕ 𝑊．"
    },
    {
      "id": "2.34",
      "kind": "result",
      "chapter": "ch2",
      "number": "2.34",
      "name_en": "basis length does not depend on basis",
      "name_zh": "基的长度不依赖于基的选取",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Any two bases of a finite-dimensional vector space have the same length.",
          "zh": "有限维向量空间的任意两个基都有相同的长度．"
        }
      ],
      "note": null,
      "statement_en": "Any two bases of a finite-dimensional vector space have the same length.",
      "statement_zh": "有限维向量空间的任意两个基都有相同的长度．"
    },
    {
      "id": "2.35",
      "kind": "definition",
      "chapter": "ch2",
      "number": "2.35",
      "name_en": "dimension, dim 𝑉",
      "name_zh": "维数（dimension）、dim 𝑉",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "The dimension of a finite-dimensional vector space is the length of any basis of the vector space.",
          "zh": "有限维向量空间的维数是这个向量空间中任意一个基的长度． 有限维向量空间𝑉的维数记作 dim 𝑉．"
        },
        {
          "t": "bullet",
          "en": "The dimension of a finite-dimensional vector space 𝑉 is denoted by dim 𝑉.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "The dimension of a finite-dimensional vector space is the length of any basis of the vector space. The dimension of a finite-dimensional vector space 𝑉 is denoted by dim 𝑉.",
      "statement_zh": "有限维向量空间的维数是这个向量空间中任意一个基的长度． 有限维向量空间𝑉的维数记作 dim 𝑉．"
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
          "zh": "如果𝑉是有限维的且𝑈是𝑉的子空间，那么 dim 𝑈 ≤ dim 𝑉．"
        }
      ],
      "note": null,
      "statement_en": "If 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉, then dim 𝑈 ≤ dim 𝑉.",
      "statement_zh": "如果𝑉是有限维的且𝑈是𝑉的子空间，那么 dim 𝑈 ≤ dim 𝑉．"
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
          "zh": "假设𝑉是有限维的．那么𝑉中每个长度为 dim 𝑉的线性无关向量组都是𝑉的基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then every linearly independent list of vectors in 𝑉 of length dim 𝑉 is a basis of 𝑉.",
      "statement_zh": "假设𝑉是有限维的．那么𝑉中每个长度为 dim 𝑉的线性无关向量组都是𝑉的基．"
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
          "zh": "假设𝑉是有限维的，𝑈是𝑉的子空间且满足 dim 𝑈 = dim 𝑉．那么𝑈 = 𝑉．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉 such that dim 𝑈 = dim 𝑉. Then 𝑈 = 𝑉.",
      "statement_zh": "假设𝑉是有限维的，𝑈是𝑉的子空间且满足 dim 𝑈 = dim 𝑉．那么𝑈 = 𝑉．"
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
          "zh": "假设𝑉是有限维的．那么𝑉中每个长度为 dim 𝑉的张成组都是𝑉的基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then every list of vectors in 𝑉 that spans 𝑉 and has length dim 𝑉 is a basis of 𝑉.",
      "statement_zh": "假设𝑉是有限维的．那么𝑉中每个长度为 dim 𝑉的张成组都是𝑉的基．"
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
          "en": "If 𝑉1 and 𝑉2 are subspaces of a finite-dimensional vector space, then",
          "zh": "如果𝑉1 和𝑉2 是一个有限维向量空间的子空间，那么"
        },
        {
          "t": "formula",
          "en": "dim(𝑉_1 + 𝑉_2) = dim 𝑉_1 + dim 𝑉_2 −dim(𝑉_1 ∩ 𝑉_2).",
          "zh": "dim(𝑉_1 + 𝑉_2) = dim 𝑉_1 + dim 𝑉_2 −dim(𝑉_1 ∩ 𝑉_2)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "If 𝑉1 and 𝑉2 are subspaces of a finite-dimensional vector space, then dim(𝑉_1 + 𝑉_2) = dim 𝑉_1 + dim 𝑉_2 −dim(𝑉_1 ∩ 𝑉_2).",
      "statement_zh": "如果𝑉1 和𝑉2 是一个有限维向量空间的子空间，那么 dim(𝑉_1 + 𝑉_2) = dim 𝑉_1 + dim 𝑉_2 −dim(𝑉_1 ∩ 𝑉_2)．"
    },
    {
      "id": "3.1",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.1",
      "name_en": "linear map",
      "name_zh": "线性映射（linear map）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear map from 𝑉 to 𝑊 is a function 𝑇: 𝑉 → 𝑊 with the following properties.",
          "zh": "从𝑉到𝑊的线性映射是满足下列性质的函数𝑇: 𝑉 → 𝑊．"
        },
        {
          "t": "bullet",
          "en": "Additivity. 𝑇(𝑢 + 𝑣) = 𝑇𝑢 + 𝑇𝑣 for all 𝑢, 𝑣 ∈ 𝑉.",
          "zh": "可加性（additivity）. 对于所有𝑢, 𝑣 ∈ 𝑉，均有𝑇(𝑢 + 𝑣) = 𝑇𝑢 + 𝑇𝑣．"
        },
        {
          "t": "bullet",
          "en": "Homogeneity. 𝑇(𝜆𝑣) = 𝜆(𝑇𝑣) for all 𝜆 ∈ 𝐅 and all 𝑣 ∈ 𝑉.",
          "zh": "齐次性（homogeneity）. 对于所有𝜆 ∈ F 和所有𝑣 ∈ 𝑉，均有𝑇(𝜆𝑣) = 𝜆(𝑇𝑣)．"
        }
      ],
      "note": {
        "en": "Note that for linear maps we often use the notation 𝑇𝑣 as well as the usual function notation 𝑇(𝑣).",
        "zh": "注意，对于线性映射，我们常常用记号 𝑇𝑣，也会用一般的函数记号𝑇(𝑣)．"
      },
      "statement_en": "A linear map from 𝑉 to 𝑊 is a function 𝑇: 𝑉 → 𝑊 with the following properties. Additivity. 𝑇(𝑢 + 𝑣) = 𝑇𝑢 + 𝑇𝑣 for all 𝑢, 𝑣 ∈ 𝑉. Homogeneity. 𝑇(𝜆𝑣) = 𝜆(𝑇𝑣) for all 𝜆 ∈ 𝐅 and all 𝑣 ∈ 𝑉. Note that for linear maps we often use the notation 𝑇𝑣 as well as the usual function notation 𝑇(𝑣).",
      "statement_zh": "从𝑉到𝑊的线性映射是满足下列性质的函数𝑇: 𝑉 → 𝑊． 可加性（additivity）. 对于所有𝑢, 𝑣 ∈ 𝑉，均有𝑇(𝑢 + 𝑣) = 𝑇𝑢 + 𝑇𝑣． 齐次性（homogeneity）. 对于所有𝜆 ∈ F 和所有𝑣 ∈ 𝑉，均有𝑇(𝜆𝑣) = 𝜆(𝑇𝑣)． 注意，对于线性映射，我们常常用记号 𝑇𝑣，也会用一般的函数记号𝑇(𝑣)．"
    },
    {
      "id": "3.2",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.2",
      "name_en": "ℒ(𝑉, 𝑊), ℒ(𝑉)",
      "name_zh": "L(𝑉,𝑊)、L(𝑉)",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "The set of linear maps from 𝑉 to 𝑊 is denoted by ℒ(𝑉, 𝑊).",
          "zh": "从𝑉到𝑊的全体线性映射构成的集合记作 L(𝑉,𝑊)． 从𝑉到𝑉的全体线性映射构成的集合记作 L(𝑉)．换言之，L(𝑉) = L(𝑉,𝑉)．"
        },
        {
          "t": "bullet",
          "en": "The set of linear maps from 𝑉 to 𝑉 is denoted by ℒ(𝑉). In other words, ℒ(𝑉) = ℒ(𝑉, 𝑉).",
          "zh": ""
        }
      ],
      "note": {
        "en": "Let’s look at some examples of linear maps. Make sure you verify that each of the functions defined in",
        "zh": "我们看些线性映射的实例．请务必自行验证下面的例子中定义的每个函数都确实是线性 映射．"
      },
      "statement_en": "The set of linear maps from 𝑉 to 𝑊 is denoted by ℒ(𝑉, 𝑊). The set of linear maps from 𝑉 to 𝑉 is denoted by ℒ(𝑉). In other words, ℒ(𝑉) = ℒ(𝑉, 𝑉). Let’s look at some examples of linear maps. Make sure you verify that each of the functions defined in",
      "statement_zh": "从𝑉到𝑊的全体线性映射构成的集合记作 L(𝑉,𝑊)． 从𝑉到𝑉的全体线性映射构成的集合记作 L(𝑉)．换言之，L(𝑉) = L(𝑉,𝑉)． 我们看些线性映射的实例．请务必自行验证下面的例子中定义的每个函数都确实是线性 映射．"
    },
    {
      "id": "3.4",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.4",
      "name_en": "linear map lemma",
      "name_zh": "线性映射引理（linear map lemma）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑛 ∈ 𝑊. Then there exists a unique linear map 𝑇: 𝑉 → 𝑊 such that",
          "zh": "假定 𝑣_1,..., 𝑣_𝑛是𝑉的基且 𝑤_1,..., 𝑤_𝑛 ∈ 𝑊．那么存在唯一的线性映射𝑇: 𝑉 → 𝑊使得 对每个 𝑘 = 1,..., 𝑛都有"
        },
        {
          "t": "formula",
          "en": "𝑇𝑣_𝑘 = 𝑤_𝑘",
          "zh": "𝑇𝑣_𝑘 = 𝑤_𝑘 ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for each 𝑘 = 1, …, 𝑛.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑛 ∈ 𝑊. Then there exists a unique linear map 𝑇: 𝑉 → 𝑊 such that 𝑇𝑣_𝑘 = 𝑤_𝑘 for each 𝑘 = 1, …, 𝑛.",
      "statement_zh": "假定 𝑣_1,..., 𝑣_𝑛是𝑉的基且 𝑤_1,..., 𝑤_𝑛 ∈ 𝑊．那么存在唯一的线性映射𝑇: 𝑉 → 𝑊使得 对每个 𝑘 = 1,..., 𝑛都有 𝑇𝑣_𝑘 = 𝑤_𝑘 ．"
    },
    {
      "id": "3.5",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.5",
      "name_en": "addition and scalar multiplication on ℒ(𝑉, 𝑊)",
      "name_zh": "addition and scalar multiplication on ℒ(𝑉, 𝑊)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑆, 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝜆 ∈ 𝐅. The sum 𝑆 + 𝑇 and the product 𝜆𝑇 are the linear maps from 𝑉 to 𝑊 defined by",
          "zh": ""
        },
        {
          "t": "formula",
          "en": "(𝑆 + 𝑇)(𝑣) = 𝑆𝑣 + 𝑇𝑣 and(𝜆𝑇)(𝑣) = 𝜆(𝑇𝑣)",
          "zh": "",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑣 ∈ 𝑉.",
          "zh": ""
        }
      ],
      "note": {
        "en": "You should verify that 𝑆 + 𝑇 and 𝜆𝑇 as defined above are indeed linear maps. In other words, if 𝑆, 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝜆 ∈ 𝐅, then 𝑆 + 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝜆𝑇 ∈ ℒ(𝑉, 𝑊). Because we took the trouble to defni e addition and scalar multiplication on ℒ(𝑉, 𝑊), the next result should not be a surprise.",
        "zh": ""
      },
      "statement_en": "Suppose 𝑆, 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝜆 ∈ 𝐅. The sum 𝑆 + 𝑇 and the product 𝜆𝑇 are the linear maps from 𝑉 to 𝑊 defined by (𝑆 + 𝑇)(𝑣) = 𝑆𝑣 + 𝑇𝑣 and(𝜆𝑇)(𝑣) = 𝜆(𝑇𝑣) for all 𝑣 ∈ 𝑉. You should verify that 𝑆 + 𝑇 and 𝜆𝑇 as defined above are indeed linear maps. In other words, if 𝑆, 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝜆 ∈ 𝐅, then 𝑆 + 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝜆𝑇 ∈ ℒ(𝑉, 𝑊). Because we took the trouble to defni e addition and scalar multiplication on ℒ(𝑉, 𝑊), the next result should not be a surprise.",
      "statement_zh": ""
    },
    {
      "id": "3.6",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.6",
      "name_en": "ℒ(𝑉, 𝑊) is a vector space",
      "name_zh": "L(𝑉,𝑊) 是向量空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "With the operations of addition and scalar multiplication as defined above, ℒ(𝑉, 𝑊) is a vector space.",
          "zh": "有了上面定义的加法和标量乘法，L(𝑉,𝑊) 就是向量空间．"
        }
      ],
      "note": {
        "en": "The routine proof of the result above is left to the reader. Note that the additive identity of ℒ(𝑉, 𝑊) is the zero linear map defined in Example 3.3. Usually it makes no sense to multiply together two elements of a vector space but for some pairs of linear maps a useful product exists, as in the next definition",
        "zh": ""
      },
      "statement_en": "With the operations of addition and scalar multiplication as defined above, ℒ(𝑉, 𝑊) is a vector space. The routine proof of the result above is left to the reader. Note that the additive identity of ℒ(𝑉, 𝑊) is the zero linear map defined in Example 3.3. Usually it makes no sense to multiply together two elements of a vector space but for some pairs of linear maps a useful product exists, as in the next definition",
      "statement_zh": "有了上面定义的加法和标量乘法，L(𝑉,𝑊) 就是向量空间．"
    },
    {
      "id": "3.7",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.7",
      "name_en": "product of linear maps",
      "name_zh": "线性映射的乘积（product of linear maps）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑇 ∈ ℒ(𝑈, 𝑉) and 𝑆 ∈ ℒ(𝑉, 𝑊), then the product 𝑆𝑇 ∈ ℒ(𝑈, 𝑊) is defined by",
          "zh": "如果𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)，那么乘积 𝑆𝑇 ∈ L(𝑈,𝑊) 就定义为：对于所有𝑢 ∈ 𝑈，"
        },
        {
          "t": "formula",
          "en": "(𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢)",
          "zh": "(𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢)．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑢 ∈ 𝑈.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "由此可见，𝑆𝑇就是一般的两函数复合𝑆 ◦ 𝑇，不过当两个函数都是线性函数时，我们通常 使用 𝑆𝑇这个记号而不用 𝑆 ◦ 𝑇．用 𝑆𝑇这样的乘积表示法，有助于使下个结果中的分配性质看 起来更自然些． 注意只有当𝑇映射到𝑆的定义空间中时，𝑆𝑇才有定义．你应该验证对于任意𝑇 ∈ L(𝑈,𝑉) 和 𝑆 ∈ L(𝑉,𝑊)，𝑆𝑇的确是从𝑈到𝑊的线性映射．"
      },
      "statement_en": "If 𝑇 ∈ ℒ(𝑈, 𝑉) and 𝑆 ∈ ℒ(𝑉, 𝑊), then the product 𝑆𝑇 ∈ ℒ(𝑈, 𝑊) is defined by (𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢) for all 𝑢 ∈ 𝑈.",
      "statement_zh": "如果𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)，那么乘积 𝑆𝑇 ∈ L(𝑈,𝑊) 就定义为：对于所有𝑢 ∈ 𝑈， (𝑆𝑇)(𝑢) = 𝑆(𝑇𝑢)． 由此可见，𝑆𝑇就是一般的两函数复合𝑆 ◦ 𝑇，不过当两个函数都是线性函数时，我们通常 使用 𝑆𝑇这个记号而不用 𝑆 ◦ 𝑇．用 𝑆𝑇这样的乘积表示法，有助于使下个结果中的分配性质看 起来更自然些． 注意只有当𝑇映射到𝑆的定义空间中时，𝑆𝑇才有定义．你应该验证对于任意𝑇 ∈ L(𝑈,𝑉) 和 𝑆 ∈ L(𝑉,𝑊)，𝑆𝑇的确是从𝑈到𝑊的线性映射．"
    },
    {
      "id": "3.8",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.8",
      "name_en": "algebraic properties of products of linear maps",
      "name_zh": "线性映射乘积的代数性质",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "Associativity. (𝑇_1 𝑇_2)𝑇_3 = 𝑇_1(𝑇_2 𝑇_3) whenever 𝑇_1, 𝑇_2, and 𝑇_3 are linear maps such that the products make sense(meaning 𝑇_3 maps into the domain of 𝑇_2, and 𝑇_2 maps into the domain of 𝑇_1).",
          "zh": "可结合性（associativity）. 对于任意使乘积有意义的线性映射𝑇_1,𝑇_2,𝑇_3 （意即𝑇_3映射到𝑇_2的定义空间中，𝑇_2 映射到𝑇_1的定义空间中），有(𝑇_1 𝑇_2)𝑇_3 = 𝑇_1(𝑇_2 𝑇_3)．"
        },
        {
          "t": "bullet",
          "en": "Identity. 𝑇𝐼 = 𝐼𝑇 = 𝑇 whenever 𝑇 ∈ ℒ(𝑉, 𝑊); here the first 𝐼 is the identity operator on 𝑉, and the second 𝐼 is the identity operator on 𝑊.",
          "zh": "恒等元（identity）. 对于任意𝑇 ∈ L(𝑉,𝑊)，有𝑇𝐼 = 𝐼𝑇 = 𝑇．这里第一个 𝐼是𝑉上的恒等算子，而第二 个 𝐼是𝑊上的恒等算子．"
        },
        {
          "t": "bullet",
          "en": "Distributive properties. (𝑆_1 + 𝑆_2)𝑇 = 𝑆_1 𝑇 + 𝑆_2 𝑇 and 𝑆(𝑇_1 + 𝑇_2) = 𝑆𝑇_1 + 𝑆𝑇_2 whenever 𝑇, 𝑇_1, 𝑇_2 ∈ ℒ(𝑈, 𝑉) and 𝑆, 𝑆_1, 𝑆_2 ∈ ℒ(𝑉, 𝑊).",
          "zh": "分配性质（distributive properties）. 对于任意 𝑇,𝑇_1,𝑇_2 ∈ L(𝑈,𝑉) 和 𝑆, 𝑆_1, 𝑆_2 ∈ L(𝑉,𝑊)，有(𝑆_1 + 𝑆_2)𝑇 = 𝑆_1 𝑇 + 𝑆_2 𝑇且 𝑆(𝑇_1 + 𝑇_2) = 𝑆𝑇_1 + 𝑆𝑇_2 ．"
        }
      ],
      "note": {
        "en": "The routine proof of the result above is left to the reader. Multiplication of linear maps is not commutative. In other words, it is not necessarily true that 𝑆𝑇 = 𝑇𝑆, even if both sides of the equation make sense.",
        "zh": "上述结论的证明很常规，留给读者完成． 线性映射的乘法不满足交换律．换言之，𝑆𝑇 = 𝑇𝑆并不一定正确，即便式子两侧的乘积都 是有意义的．"
      },
      "statement_en": "Associativity. (𝑇_1 𝑇_2)𝑇_3 = 𝑇_1(𝑇_2 𝑇_3) whenever 𝑇_1, 𝑇_2, and 𝑇_3 are linear maps such that the products make sense(meaning 𝑇_3 maps into the domain of 𝑇_2, and 𝑇_2 maps into the domain of 𝑇_1). Identity. 𝑇𝐼 = 𝐼𝑇 = 𝑇 whenever 𝑇 ∈ ℒ(𝑉, 𝑊); here the first 𝐼 is the identity operator on 𝑉, and the second 𝐼 is the identity operator on 𝑊. Distributive properties. (𝑆_1 + 𝑆_2)𝑇 = 𝑆_1 𝑇 + 𝑆_2 𝑇 and 𝑆(𝑇_1 + 𝑇_2) = 𝑆𝑇_1 + 𝑆𝑇_2 whenever 𝑇, 𝑇_1, 𝑇_2 ∈ ℒ(𝑈, 𝑉) and 𝑆, 𝑆_1, 𝑆_2 ∈ ℒ(𝑉, 𝑊). The routine proof of the result above is left to the reader. Multiplication of linear maps is not commutative. In other words, it is not necessarily true that 𝑆𝑇 = 𝑇𝑆, even if both sides of the equation make sense.",
      "statement_zh": "可结合性（associativity）. 对于任意使乘积有意义的线性映射𝑇_1,𝑇_2,𝑇_3 （意即𝑇_3映射到𝑇_2的定义空间中，𝑇_2 映射到𝑇_1的定义空间中），有(𝑇_1 𝑇_2)𝑇_3 = 𝑇_1(𝑇_2 𝑇_3)． 恒等元（identity）. 对于任意𝑇 ∈ L(𝑉,𝑊)，有𝑇𝐼 = 𝐼𝑇 = 𝑇．这里第一个 𝐼是𝑉上的恒等算子，而第二 个 𝐼是𝑊上的恒等算子． 分配性质（distributive properties）. 对于任意 𝑇,𝑇_1,𝑇_2 ∈ L(𝑈,𝑉) 和 𝑆, 𝑆_1, 𝑆_2 ∈ L(𝑉,𝑊)，有(𝑆_1 + 𝑆_2)𝑇 = 𝑆_1 𝑇 + 𝑆_2 𝑇且 𝑆(𝑇_1 + 𝑇_2) = 𝑆𝑇_1 + 𝑆𝑇_2 ． 上述结论的证明很常规，留给读者完成． 线性映射的乘法不满足交换律．换言之，𝑆𝑇 = 𝑇𝑆并不一定正确，即便式子两侧的乘积都 是有意义的．"
    },
    {
      "id": "3.10",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.10",
      "name_en": "linear maps take 0 to 0",
      "name_zh": "线性映射将0映射为0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 is a linear map from 𝑉 to 𝑊. Then 𝑇(0) = 0.",
          "zh": "假设𝑇是由𝑉到𝑊的线性映射．那么𝑇(0) = 0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 is a linear map from 𝑉 to 𝑊. Then 𝑇(0) = 0.",
      "statement_zh": "假设𝑇是由𝑉到𝑊的线性映射．那么𝑇(0) = 0．"
    },
    {
      "id": "3.11",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.11",
      "name_en": "null space, null 𝑇",
      "name_zh": "零空间（null space）、null 𝑇",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑇 ∈ ℒ(𝑉, 𝑊), the null space of 𝑇, denoted by null 𝑇, is the subset of 𝑉 consisting of those vectors that 𝑇 maps to 0:",
          "zh": "对于𝑇 ∈ L(𝑉,𝑊)，𝑇的零空间记为 null 𝑇，是𝑉的子集，其由被𝑇映射到0的所有向量 构成："
        },
        {
          "t": "formula",
          "en": "null 𝑇 ={𝑣 ∈ 𝑉 : 𝑇𝑣 = 0}.",
          "zh": "null 𝑇 ={𝑣 ∈ 𝑉: 𝑇𝑣 = 0}．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "For 𝑇 ∈ ℒ(𝑉, 𝑊), the null space of 𝑇, denoted by null 𝑇, is the subset of 𝑉 consisting of those vectors that 𝑇 maps to 0: null 𝑇 ={𝑣 ∈ 𝑉 : 𝑇𝑣 = 0}.",
      "statement_zh": "对于𝑇 ∈ L(𝑉,𝑊)，𝑇的零空间记为 null 𝑇，是𝑉的子集，其由被𝑇映射到0的所有向量 构成： null 𝑇 ={𝑣 ∈ 𝑉: 𝑇𝑣 = 0}．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then null 𝑇 is a subspace of 𝑉.",
          "zh": "假设𝑇 ∈ L(𝑉,𝑊)．那么 null 𝑇是𝑉的子空间．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then null 𝑇 is a subspace of 𝑉.",
      "statement_zh": "假设𝑇 ∈ L(𝑉,𝑊)．那么 null 𝑇是𝑉的子空间．"
    },
    {
      "id": "3.14",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.14",
      "name_en": "injective",
      "name_zh": "单射（injective）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A function 𝑇: 𝑉 → 𝑊 is called injective if 𝑇𝑢 = 𝑇𝑣 implies 𝑢 = 𝑣.",
          "zh": "对于函数𝑇: 𝑉 → 𝑊，若𝑇𝑢 = 𝑇𝑣蕴涵𝑢 = 𝑣，则称该函数是单射^4 ．"
        }
      ],
      "note": {
        "en": "",
        "zh": "我们可以将上述定义重新表述为：如果𝑢 ≠ 𝑣蕴涵𝑇𝑢 ≠ 𝑇𝑣，那么𝑇是单射．于是，当且 仅当𝑇将不同的输入映射到不同的输出时，它才是单射． 接下来的结果是说，我们可以通过检验 0是否为唯一被映射为0的向量，来检验一个 线性映射是否为单射．在例 3.12 中，我们计算了一些线性映射的零空间，应用下面结论即可 看出，这些线性映射中仅有“与𝑥^2相乘”映射是单射（在特殊情况𝑉 ={0}下，零映射也是单 射）．"
      },
      "statement_en": "A function 𝑇: 𝑉 → 𝑊 is called injective if 𝑇𝑢 = 𝑇𝑣 implies 𝑢 = 𝑣.",
      "statement_zh": "对于函数𝑇: 𝑉 → 𝑊，若𝑇𝑢 = 𝑇𝑣蕴涵𝑢 = 𝑣，则称该函数是单射^4 ． 我们可以将上述定义重新表述为：如果𝑢 ≠ 𝑣蕴涵𝑇𝑢 ≠ 𝑇𝑣，那么𝑇是单射．于是，当且 仅当𝑇将不同的输入映射到不同的输出时，它才是单射． 接下来的结果是说，我们可以通过检验 0是否为唯一被映射为0的向量，来检验一个 线性映射是否为单射．在例 3.12 中，我们计算了一些线性映射的零空间，应用下面结论即可 看出，这些线性映射中仅有“与𝑥^2相乘”映射是单射（在特殊情况𝑉 ={0}下，零映射也是单 射）．"
    },
    {
      "id": "3.15",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.15",
      "name_en": "injectivity ⟺ null space equals{0}",
      "name_zh": "单射性 ⇐⇒ 零空间等于{0}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Let 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇 is injective if and only if null 𝑇 ={0}.",
          "zh": "令𝑇 ∈ L(𝑉,𝑊)．那么𝑇是单射当且仅当 null 𝑇 ={0}．"
        }
      ],
      "note": null,
      "statement_en": "Let 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇 is injective if and only if null 𝑇 ={0}.",
      "statement_zh": "令𝑇 ∈ L(𝑉,𝑊)．那么𝑇是单射当且仅当 null 𝑇 ={0}．"
    },
    {
      "id": "3.16",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.16",
      "name_en": "range",
      "name_zh": "值域（range）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑇 ∈ ℒ(𝑉, 𝑊), the range of 𝑇 is the subset of 𝑊 consisting of those vectors that are equal to 𝑇𝑣 for some 𝑣 ∈ 𝑉:",
          "zh": "对于𝑇 ∈ L(𝑉,𝑊)，𝑇的值域是𝑊的子集，由所有等于𝑇𝑣（其中𝑣 ∈ 𝑉）的向量构成："
        },
        {
          "t": "formula",
          "en": "range 𝑇 ={𝑇𝑣 : 𝑣 ∈ 𝑉}.",
          "zh": "range 𝑇 ={𝑇𝑣: 𝑣 ∈ 𝑉}．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "For 𝑇 ∈ ℒ(𝑉, 𝑊), the range of 𝑇 is the subset of 𝑊 consisting of those vectors that are equal to 𝑇𝑣 for some 𝑣 ∈ 𝑉: range 𝑇 ={𝑇𝑣 : 𝑣 ∈ 𝑉}.",
      "statement_zh": "对于𝑇 ∈ L(𝑉,𝑊)，𝑇的值域是𝑊的子集，由所有等于𝑇𝑣（其中𝑣 ∈ 𝑉）的向量构成： range 𝑇 ={𝑇𝑣: 𝑣 ∈ 𝑉}．"
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
          "en": "If 𝑇 ∈ ℒ(𝑉, 𝑊), then range 𝑇 is a subspace of 𝑊.",
          "zh": "如果𝑇 ∈ L(𝑉,𝑊)，那么 range 𝑇是𝑊的子空间．"
        }
      ],
      "note": null,
      "statement_en": "If 𝑇 ∈ ℒ(𝑉, 𝑊), then range 𝑇 is a subspace of 𝑊.",
      "statement_zh": "如果𝑇 ∈ L(𝑉,𝑊)，那么 range 𝑇是𝑊的子空间．"
    },
    {
      "id": "3.19",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.19",
      "name_en": "surjective",
      "name_zh": "满射（surjective）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A function 𝑇: 𝑉 → 𝑊 is called surjective if its range equals 𝑊.",
          "zh": "如果函数𝑇: 𝑉 → 𝑊的值域等于𝑊，则称该函数为满射^6 ．"
        }
      ],
      "note": {
        "en": "To illustrate the definition above, note that of the ranges we computed in 3.17 only the differentiation map is surjective(except that the zero map is surjective in the special case 𝑊 ={0}). Whether a linear map is surjective depends on what we are thinking of as the vector space into which it maps.",
        "zh": "我们举些实例来阐释上述定义：留意在 3.17 中计算过值域的那些映射，其中只有微分映 射是满射（对于特殊情况𝑊 ={0}，零映射也是满射）． 一个线性映射是否为满射，取决于我们 认为它映射到哪个向量空间．"
      },
      "statement_en": "A function 𝑇: 𝑉 → 𝑊 is called surjective if its range equals 𝑊. To illustrate the definition above, note that of the ranges we computed in 3.17 only the differentiation map is surjective(except that the zero map is surjective in the special case 𝑊 ={0}). Whether a linear map is surjective depends on what we are thinking of as the vector space into which it maps.",
      "statement_zh": "如果函数𝑇: 𝑉 → 𝑊的值域等于𝑊，则称该函数为满射^6 ． 我们举些实例来阐释上述定义：留意在 3.17 中计算过值域的那些映射，其中只有微分映 射是满射（对于特殊情况𝑊 ={0}，零映射也是满射）． 一个线性映射是否为满射，取决于我们 认为它映射到哪个向量空间．"
    },
    {
      "id": "3.21",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.21",
      "name_en": "fundamental theorem of linear maps",
      "name_zh": "线性映射基本定理（fundamental theorem of linear maps）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then range 𝑇 is finite-dimensional and",
          "zh": "假设𝑉是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 range 𝑇是有限维的，且"
        },
        {
          "t": "formula",
          "en": "dim 𝑉 = dim null 𝑇 + dim range 𝑇.",
          "zh": "dim 𝑉 = dim null 𝑇 + dim range 𝑇．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then range 𝑇 is finite-dimensional and dim 𝑉 = dim null 𝑇 + dim range 𝑇.",
      "statement_zh": "假设𝑉是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 range 𝑇是有限维的，且 dim 𝑉 = dim null 𝑇 + dim range 𝑇．"
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
          "zh": "假设𝑉和𝑊是有限维向量空间且满足 dim 𝑉 > dim 𝑊．那么从𝑉到𝑊的线性映射一定 不是单射．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional vector spaces such that dim 𝑉 > dim 𝑊. Then no linear map from 𝑉 to 𝑊 is injective.",
      "statement_zh": "假设𝑉和𝑊是有限维向量空间且满足 dim 𝑉 > dim 𝑊．那么从𝑉到𝑊的线性映射一定 不是单射．"
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
          "zh": "假设𝑉和𝑊是有限维向量空间且满足 dim 𝑉 < dim 𝑊．那么从𝑉到𝑊的线性映射一定 不是满射．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional vector spaces such that dim 𝑉 < dim 𝑊. Then no linear map from 𝑉 to 𝑊 is surjective.",
      "statement_zh": "假设𝑉和𝑊是有限维向量空间且满足 dim 𝑉 < dim 𝑊．那么从𝑉到𝑊的线性映射一定 不是满射．"
    },
    {
      "id": "3.26",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.26",
      "name_en": "homogeneous system of linear equations",
      "name_zh": "齐次线性方程组",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A homogeneous system of linear equations with more variables than equations has nonzero solutions.",
          "zh": "未知数个数多于方程个数的齐次线性方程组具有非零解．"
        }
      ],
      "note": null,
      "statement_en": "A homogeneous system of linear equations with more variables than equations has nonzero solutions.",
      "statement_zh": "未知数个数多于方程个数的齐次线性方程组具有非零解．"
    },
    {
      "id": "3.28",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.28",
      "name_en": "system of linear equations with more equations than variables",
      "name_zh": "方程个数多于未知数个数的线性方程组",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A system of linear equations with more equations than variables has no solution for some choice of the constant terms.",
          "zh": "方程个数多于未知数个数的线性方程组当常数项取某些值时无解．"
        }
      ],
      "note": null,
      "statement_en": "A system of linear equations with more equations than variables has no solution for some choice of the constant terms.",
      "statement_zh": "方程个数多于未知数个数的线性方程组当常数项取某些值时无解．"
    },
    {
      "id": "3.29",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.29",
      "name_en": "matrix, 𝐴_{𝑗,𝑘}",
      "name_zh": "矩阵（matrix）、𝐴_{𝑗,𝑘}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 and 𝑛 are nonnegative integers. An 𝑚-by-𝑛 matrix 𝐴 is a rectangular array of elements of 𝐅 with 𝑚 rows and 𝑛 columns:",
          "zh": "假设𝑚和𝑛是非负整数．𝑚 × 𝑛矩阵 𝐴是由 F 中元素构成的𝑚行𝑛列的矩形阵列："
        },
        {
          "t": "formula",
          "en": "𝐴_{1,1} ⋯ 𝐴_{1,𝑛} ⎛⎜ ⎞⎟⎟⎟ 𝐴 = ⎜⎜ ⋮ ⋮. ⎝ 𝐴_{𝑚,1} ⋯ 𝐴_{𝑚,𝑛} ⎠",
          "zh": "𝐴_{1,1} · · · 𝐴_{1,𝑛} ���� ����...... 𝐴 = ． � 𝐴_{𝑚,1} · · · 𝐴_{𝑚,𝑛} �",
          "eq": null
        },
        {
          "t": "p",
          "en": "The notation 𝐴_{𝑗,𝑘} denotes the entry in row 𝑗, column 𝑘 of 𝐴.",
          "zh": "记号 𝐴_{𝑗,𝑘}表示 𝐴的第 𝑗行第 𝑘列中的元素．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 and 𝑛 are nonnegative integers. An 𝑚-by-𝑛 matrix 𝐴 is a rectangular array of elements of 𝐅 with 𝑚 rows and 𝑛 columns: 𝐴_{1,1} ⋯ 𝐴_{1,𝑛} ⎛⎜ ⎞⎟⎟⎟ 𝐴 = ⎜⎜ ⋮ ⋮. ⎝ 𝐴_{𝑚,1} ⋯ 𝐴_{𝑚,𝑛} ⎠ The notation 𝐴_{𝑗,𝑘} denotes the entry in row 𝑗, column 𝑘 of 𝐴.",
      "statement_zh": "假设𝑚和𝑛是非负整数．𝑚 × 𝑛矩阵 𝐴是由 F 中元素构成的𝑚行𝑛列的矩形阵列： 𝐴_{1,1} · · · 𝐴_{1,𝑛} ���� ����...... 𝐴 = ． � 𝐴_{𝑚,1} · · · 𝐴_{𝑚,𝑛} � 记号 𝐴_{𝑗,𝑘}表示 𝐴的第 𝑗行第 𝑘列中的元素．"
    },
    {
      "id": "3.31",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.31",
      "name_en": "matrix of a linear map, ℳ(𝑇)",
      "name_zh": "线性映射的矩阵（matrix of a linear map）、M(𝑇)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑚 is a basis of 𝑊. The matrix of 𝑇 with respect to these bases is the 𝑚-by-𝑛 matrix ℳ(𝑇) whose entries 𝐴_{𝑗,𝑘} are defined by",
          "zh": "假设𝑇 ∈ L(𝑉,𝑊)，𝑣_1,..., 𝑣_𝑛是𝑉的基，𝑤_1,..., 𝑤_𝑚是𝑊的基， 𝑇关于这些基的矩阵 是𝑚 × 𝑛矩阵 M(𝑇)，其中各元素 𝐴_{𝑗,𝑘}由下式定义："
        },
        {
          "t": "formula",
          "en": "𝑇𝑣_𝑘 = 𝐴_{1,𝑘} 𝑤_1 + ⋯ + 𝐴_{𝑚,𝑘} 𝑤_𝑚.",
          "zh": "𝑇𝑣𝑘 = 𝐴1,𝑘𝑤1 + · · · + 𝐴𝑚,𝑘𝑤𝑚．",
          "eq": null
        },
        {
          "t": "p",
          "en": "If the bases 𝑣_1, …, 𝑣_𝑛 and 𝑤_1, …, 𝑤_𝑚 are not clear from the context, then the notation ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛),(𝑤_1, …, 𝑤_𝑚)) is used.",
          "zh": "如果从上下文无法明确得知基 𝑣_1,..., 𝑣_𝑛和 𝑤_1,..., 𝑤_𝑚取什么，那么就用 � � M 𝑇,(𝑣_1,..., 𝑣_𝑛),(𝑤_1,..., 𝑤_𝑚) 这个记号．"
        }
      ],
      "note": {
        "en": "",
        "zh": "线性映射𝑇 ∈ L(𝑉,𝑊) 的矩阵 M(𝑇) 决定于𝑉的基 𝑣_1,..., 𝑣_𝑛，𝑊的基 𝑤_1,..., 𝑤_𝑚，以及 𝑇．不过，从上下文中往往能明确得知这些基，因此常常把它们从记号里省去． 为了记住 M(𝑇) 是如何由𝑇构造出来的，你可以在矩阵的上方横着标上定义空间的基向 量 𝑣_1,..., 𝑣_𝑛，并在矩阵的左侧竖着列出𝑇映射到的向量空间的基向量 𝑤_1,..., 𝑤_𝑚，就像下面 这样： 𝑣_1 · · · 𝑣_𝑘 · · · 𝑣_𝑛 𝑤_1 𝐴_{1,𝑘} M(𝑇) =... ���... ���． 𝑤_𝑚 � 𝐴_{𝑚,𝑘} �"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑚 is a basis of 𝑊. The matrix of 𝑇 with respect to these bases is the 𝑚-by-𝑛 matrix ℳ(𝑇) whose entries 𝐴_{𝑗,𝑘} are defined by 𝑇𝑣_𝑘 = 𝐴_{1,𝑘} 𝑤_1 + ⋯ + 𝐴_{𝑚,𝑘} 𝑤_𝑚. If the bases 𝑣_1, …, 𝑣_𝑛 and 𝑤_1, …, 𝑤_𝑚 are not clear from the context, then the notation ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛),(𝑤_1, …, 𝑤_𝑚)) is used.",
      "statement_zh": "假设𝑇 ∈ L(𝑉,𝑊)，𝑣_1,..., 𝑣_𝑛是𝑉的基，𝑤_1,..., 𝑤_𝑚是𝑊的基， 𝑇关于这些基的矩阵 是𝑚 × 𝑛矩阵 M(𝑇)，其中各元素 𝐴_{𝑗,𝑘}由下式定义： 𝑇𝑣𝑘 = 𝐴1,𝑘𝑤1 + · · · + 𝐴𝑚,𝑘𝑤𝑚． 如果从上下文无法明确得知基 𝑣_1,..., 𝑣_𝑛和 𝑤_1,..., 𝑤_𝑚取什么，那么就用 � � M 𝑇,(𝑣_1,..., 𝑣_𝑛),(𝑤_1,..., 𝑤_𝑚) 这个记号． 线性映射𝑇 ∈ L(𝑉,𝑊) 的矩阵 M(𝑇) 决定于𝑉的基 𝑣_1,..., 𝑣_𝑛，𝑊的基 𝑤_1,..., 𝑤_𝑚，以及 𝑇．不过，从上下文中往往能明确得知这些基，因此常常把它们从记号里省去． 为了记住 M(𝑇) 是如何由𝑇构造出来的，你可以在矩阵的上方横着标上定义空间的基向 量 𝑣_1,..., 𝑣_𝑛，并在矩阵的左侧竖着列出𝑇映射到的向量空间的基向量 𝑤_1,..., 𝑤_𝑚，就像下面 这样： 𝑣_1 · · · 𝑣_𝑘 · · · 𝑣_𝑛 𝑤_1 𝐴_{1,𝑘} M(𝑇) =... ���... ���． 𝑤_𝑚 � 𝐴_{𝑚,𝑘} �"
    },
    {
      "id": "3.34",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.34",
      "name_en": "matrix addition",
      "name_zh": "矩阵加法（matrix addition）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The sum of two matrices of the same size is the matrix obtained by adding corresponding entries in the matrices: 𝐴_{1,1} ⋯ 𝐴_{1,𝑛} 𝐶_{1,1} ⋯ 𝐶_{1,𝑛} ⎛⎜⎜⎜ ⎞⎟⎟⎟ ⎛⎜ ⎞⎟⎟⎟",
          "zh": "两个相同大小的矩阵之和，是将两矩阵对应位置上的元素相加所得的矩阵："
        },
        {
          "t": "formula",
          "en": "⋮ ⋮ + ⎜⎜ ⋮ ⋮",
          "zh": "𝐴_{1,1} · · · 𝐴_{1,𝑛} 𝐶_{1,1} · · · 𝐶_{1,𝑛} ���� ���� ���� ����............",
          "eq": null
        },
        {
          "t": "p",
          "en": "⎝ 𝐴_{𝑚,1} ⋯ 𝐴_{𝑚,𝑛} ⎠ ⎝ 𝐶_{𝑚,1} ⋯ 𝐶_{𝑚,𝑛} ⎠",
          "zh": "+"
        },
        {
          "t": "formula",
          "en": "𝐴_{1,1} + 𝐶_{1,1} ⋯ 𝐴_{1,𝑛} + 𝐶_{1,𝑛} ⎛⎜ ⎞⎟⎟⎟ = ⎜⎜ ⋮ ⋮. ⎝ 𝐴_{𝑚,1} + 𝐶_{𝑚,1} ⋯ 𝐴_{𝑚,𝑛} + 𝐶_{𝑚,𝑛} ⎠",
          "zh": "� 𝐴_{𝑚,1} · · · 𝐴_{𝑚,𝑛} � � 𝐶_{𝑚,1} · · · 𝐶_{𝑚,𝑛} � 𝐴_{1,1} + 𝐶_{1,1} · · · 𝐴_{1,𝑛} + 𝐶_{1,𝑛} ���� ����...... = ． � 𝐴_{𝑚,1} + 𝐶_{𝑚,1} · · · 𝐴_{𝑚,𝑛} + 𝐶_{𝑚,𝑛} �",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "The sum of two matrices of the same size is the matrix obtained by adding corresponding entries in the matrices: 𝐴_{1,1} ⋯ 𝐴_{1,𝑛} 𝐶_{1,1} ⋯ 𝐶_{1,𝑛} ⎛⎜⎜⎜ ⎞⎟⎟⎟ ⎛⎜ ⎞⎟⎟⎟ ⋮ ⋮ + ⎜⎜ ⋮ ⋮ ⎝ 𝐴_{𝑚,1} ⋯ 𝐴_{𝑚,𝑛} ⎠ ⎝ 𝐶_{𝑚,1} ⋯ 𝐶_{𝑚,𝑛} ⎠ 𝐴_{1,1} + 𝐶_{1,1} ⋯ 𝐴_{1,𝑛} + 𝐶_{1,𝑛} ⎛⎜ ⎞⎟⎟⎟ = ⎜⎜ ⋮ ⋮. ⎝ 𝐴_{𝑚,1} + 𝐶_{𝑚,1} ⋯ 𝐴_{𝑚,𝑛} + 𝐶_{𝑚,𝑛} ⎠",
      "statement_zh": "两个相同大小的矩阵之和，是将两矩阵对应位置上的元素相加所得的矩阵： 𝐴_{1,1} · · · 𝐴_{1,𝑛} 𝐶_{1,1} · · · 𝐶_{1,𝑛} ���� ���� ���� ����............ + � 𝐴_{𝑚,1} · · · 𝐴_{𝑚,𝑛} � � 𝐶_{𝑚,1} · · · 𝐶_{𝑚,𝑛} � 𝐴_{1,1} + 𝐶_{1,1} · · · 𝐴_{1,𝑛} + 𝐶_{1,𝑛} ���� ����...... = ． � 𝐴_{𝑚,1} + 𝐶_{𝑚,1} · · · 𝐴_{𝑚,𝑛} + 𝐶_{𝑚,𝑛} �"
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
          "en": "Suppose 𝑆, 𝑇 ∈ ℒ(𝑉, 𝑊). Then ℳ(𝑆 + 𝑇) = ℳ(𝑆) + ℳ(𝑇).",
          "zh": "假设 𝑆,𝑇 ∈ L(𝑉,𝑊)．那么 M(𝑆 + 𝑇) = M(𝑆) + M(𝑇)．"
        }
      ],
      "note": {
        "en": "",
        "zh": "由定义即可验证上面这条结论，验证过程留给读者完成． 仍然假设我们已选取了某些基．一标量与线性映射之积的矩阵，是否等于同一标量与该线 性映射的矩阵之积？同样，这个问题现在也没有意义，因为我们还没有定义矩阵的标量乘法． 幸运的是，再次按自然的方式作出定义，所得定义仍有我们期望的性质．"
      },
      "statement_en": "Suppose 𝑆, 𝑇 ∈ ℒ(𝑉, 𝑊). Then ℳ(𝑆 + 𝑇) = ℳ(𝑆) + ℳ(𝑇).",
      "statement_zh": "假设 𝑆,𝑇 ∈ L(𝑉,𝑊)．那么 M(𝑆 + 𝑇) = M(𝑆) + M(𝑇)． 由定义即可验证上面这条结论，验证过程留给读者完成． 仍然假设我们已选取了某些基．一标量与线性映射之积的矩阵，是否等于同一标量与该线 性映射的矩阵之积？同样，这个问题现在也没有意义，因为我们还没有定义矩阵的标量乘法． 幸运的是，再次按自然的方式作出定义，所得定义仍有我们期望的性质．"
    },
    {
      "id": "3.36",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.36",
      "name_en": "scalar multiplication of a matrix",
      "name_zh": "矩阵的标量乘法（scalar multiplication of a matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The product of a scalar and a matrix is the matrix obtained by multiplying each entry in the matrix by the scalar:",
          "zh": "一个标量和一个矩阵的乘积，是将该矩阵的各元素都乘以该标量所得的矩阵："
        },
        {
          "t": "formula",
          "en": "𝐴_{1,1} ⋯ 𝐴_{1,𝑛} 𝜆𝐴_{1,1} ⋯ 𝜆𝐴_{1,𝑛} ⎛⎜ ⎞⎟⎟⎟ ⎛⎜ ⎞⎟⎟⎟ 𝜆 ⎜⎜ ⋮ ⋮ = ⎜⎜ ⋮ ⋮. ⎝ 𝐴_{𝑚,1} ⋯ 𝐴_{𝑚,𝑛} ⎠ ⎝ 𝜆𝐴_{𝑚,1} ⋯ 𝜆𝐴_{𝑚,𝑛} ⎠",
          "zh": "𝐴_{1,1} · · · 𝐴_{1,𝑛} 𝜆𝐴_{1,1} · · · 𝜆𝐴_{1,𝑛} ���� ���� ���� ����............ 𝜆 = ． � 𝐴_{𝑚,1} · · · 𝐴_{𝑚,𝑛} � � 𝜆𝐴_{𝑚,1} · · · 𝜆𝐴_{𝑚,𝑛} �",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "The product of a scalar and a matrix is the matrix obtained by multiplying each entry in the matrix by the scalar: 𝐴_{1,1} ⋯ 𝐴_{1,𝑛} 𝜆𝐴_{1,1} ⋯ 𝜆𝐴_{1,𝑛} ⎛⎜ ⎞⎟⎟⎟ ⎛⎜ ⎞⎟⎟⎟ 𝜆 ⎜⎜ ⋮ ⋮ = ⎜⎜ ⋮ ⋮. ⎝ 𝐴_{𝑚,1} ⋯ 𝐴_{𝑚,𝑛} ⎠ ⎝ 𝜆𝐴_{𝑚,1} ⋯ 𝜆𝐴_{𝑚,𝑛} ⎠",
      "statement_zh": "一个标量和一个矩阵的乘积，是将该矩阵的各元素都乘以该标量所得的矩阵： 𝐴_{1,1} · · · 𝐴_{1,𝑛} 𝜆𝐴_{1,1} · · · 𝜆𝐴_{1,𝑛} ���� ���� ���� ����............ 𝜆 = ． � 𝐴_{𝑚,1} · · · 𝐴_{𝑚,𝑛} � � 𝜆𝐴_{𝑚,1} · · · 𝜆𝐴_{𝑚,𝑛} �"
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
          "en": "Suppose 𝜆 ∈ 𝐅 and 𝑇 ∈ ℒ(𝑉, 𝑊). Then ℳ(𝜆𝑇) = 𝜆ℳ(𝑇).",
          "zh": "假设𝜆 ∈ F 且𝑇 ∈ L(𝑉,𝑊)．那么 M(𝜆𝑇) = 𝜆 M(𝑇)．"
        }
      ],
      "note": {
        "en": "The verification of the result above is also left to the reader. Because addition and scalar multiplication have now been defined for matrices you should not be surprised that a vector space is about to appear. First we introduce a bit of notation so that this new vector space has a name, and then we find the dimension of this new vector space.",
        "zh": "上述结论的验证同样留给读者完成． 因为现已定义了矩阵的加法和标量乘法，由此产生一个向量空间也就不足为奇了．我们先 引入个记号，给这个新的向量空间取个名字，然后得出这个新的向量空间的维数．"
      },
      "statement_en": "Suppose 𝜆 ∈ 𝐅 and 𝑇 ∈ ℒ(𝑉, 𝑊). Then ℳ(𝜆𝑇) = 𝜆ℳ(𝑇). The verification of the result above is also left to the reader. Because addition and scalar multiplication have now been defined for matrices you should not be surprised that a vector space is about to appear. First we introduce a bit of notation so that this new vector space has a name, and then we find the dimension of this new vector space.",
      "statement_zh": "假设𝜆 ∈ F 且𝑇 ∈ L(𝑉,𝑊)．那么 M(𝜆𝑇) = 𝜆 M(𝑇)． 上述结论的验证同样留给读者完成． 因为现已定义了矩阵的加法和标量乘法，由此产生一个向量空间也就不足为奇了．我们先 引入个记号，给这个新的向量空间取个名字，然后得出这个新的向量空间的维数．"
    },
    {
      "id": "3.39",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.39",
      "name_en": "𝐅^{𝑚,𝑛}",
      "name_zh": "F^{𝑚,𝑛}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑚 and 𝑛 positive integers, the set of all 𝑚-by-𝑛 matrices with entries in 𝐅 is denoted by 𝐅^{𝑚,𝑛}.",
          "zh": "对于正整数𝑚和𝑛，各元素均属于 F 的所有𝑚 × 𝑛矩阵构成的集合记作 F^{𝑚,𝑛} ．"
        }
      ],
      "note": null,
      "statement_en": "For 𝑚 and 𝑛 positive integers, the set of all 𝑚-by-𝑛 matrices with entries in 𝐅 is denoted by 𝐅^{𝑚,𝑛}.",
      "statement_zh": "对于正整数𝑚和𝑛，各元素均属于 F 的所有𝑚 × 𝑛矩阵构成的集合记作 F^{𝑚,𝑛} ．"
    },
    {
      "id": "3.40",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.40",
      "name_en": "dim 𝐅^{𝑚,𝑛} = 𝑚𝑛",
      "name_zh": "dim F^{𝑚,𝑛} = 𝑚𝑛",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 and 𝑛 are positive integers. With addition and scalar multiplication defined as above, 𝐅^{𝑚,𝑛} is a vector space of dimension 𝑚𝑛.",
          "zh": "假设𝑚和𝑛为正整数．按上面定义的加法和标量乘法，F^{𝑚,𝑛}是维数为𝑚𝑛的向量空间．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 and 𝑛 are positive integers. With addition and scalar multiplication defined as above, 𝐅^{𝑚,𝑛} is a vector space of dimension 𝑚𝑛.",
      "statement_zh": "假设𝑚和𝑛为正整数．按上面定义的加法和标量乘法，F^{𝑚,𝑛}是维数为𝑚𝑛的向量空间．"
    },
    {
      "id": "3.41",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.41",
      "name_en": "matrix multiplication",
      "name_zh": "矩阵乘法（matrix multiplication）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then 𝐴𝐵 is defined to be the 𝑚-by-𝑝 matrix whose entry in row 𝑗, column 𝑘, is given by the equation_𝑛",
          "zh": "假设 𝐴是𝑚 × 𝑛矩阵且 𝐵是𝑛 × 𝑝矩阵．那么 𝐴𝐵定义为一个𝑚 × 𝑝矩阵，其中第 𝑗行 第 𝑘列的元素由下式给出："
        },
        {
          "t": "formula",
          "en": "(𝐴𝐵)_{𝑗,𝑘} =_𝑟 ∑_{=1} 𝐴_{𝑗,𝑟} 𝐵_{𝑟,𝑘}.",
          "zh": "∑^𝑛 (𝐴𝐵)𝑗,𝑘 =_{𝑟=1} 𝐴_{𝑗,𝑟} 𝐵_{𝑟,𝑘} ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Thus the entry in row 𝑗, column 𝑘, of 𝐴𝐵 is computed by taking row 𝑗 of 𝐴 and column 𝑘 of 𝐵, multiplying together corresponding entries, and then summing.",
          "zh": "于是，取 𝐴的第 𝑗行和 𝐵的第 𝑘列，将它们对应位置上的元素分别相乘再相加，就得 到了 𝐴𝐵第 𝑗行第 𝑘列的元素．"
        }
      ],
      "note": {
        "en": "Note that we define the product of two matrices only when the number of columns of the first matrix equals the number of rows of the second matrix.",
        "zh": ""
      },
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then 𝐴𝐵 is defined to be the 𝑚-by-𝑝 matrix whose entry in row 𝑗, column 𝑘, is given by the equation_𝑛 (𝐴𝐵)_{𝑗,𝑘} =_𝑟 ∑_{=1} 𝐴_{𝑗,𝑟} 𝐵_{𝑟,𝑘}. Thus the entry in row 𝑗, column 𝑘, of 𝐴𝐵 is computed by taking row 𝑗 of 𝐴 and column 𝑘 of 𝐵, multiplying together corresponding entries, and then summing. Note that we define the product of two matrices only when the number of columns of the first matrix equals the number of rows of the second matrix.",
      "statement_zh": "假设 𝐴是𝑚 × 𝑛矩阵且 𝐵是𝑛 × 𝑝矩阵．那么 𝐴𝐵定义为一个𝑚 × 𝑝矩阵，其中第 𝑗行 第 𝑘列的元素由下式给出： ∑^𝑛 (𝐴𝐵)𝑗,𝑘 =_{𝑟=1} 𝐴_{𝑗,𝑟} 𝐵_{𝑟,𝑘} ． 于是，取 𝐴的第 𝑗行和 𝐵的第 𝑘列，将它们对应位置上的元素分别相乘再相加，就得 到了 𝐴𝐵第 𝑗行第 𝑘列的元素．"
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
          "en": "If 𝑇 ∈ ℒ(𝑈, 𝑉) and 𝑆 ∈ ℒ(𝑉, 𝑊), then ℳ(𝑆𝑇) = ℳ(𝑆)ℳ(𝑇).",
          "zh": "如果𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)，那么 M(𝑆𝑇) = M(𝑆)M(𝑇)．"
        }
      ],
      "note": {
        "en": "The proof of the result above is the calculation that was done as motivation before the definition of matrix multiplication. In the next piece of notation, note that as usual the first index refers to a row and the second index refers to a column, with a vertically centered dot used as a placeholder.",
        "zh": "上述结果的证明，就是在定义矩阵乘法之前，我们说明其动机时所做的计算． 在下面的记号中，注意，如往常一样，第一个下标代表行，第二个下标代表列；垂直居中 的点“·”用于占位．"
      },
      "statement_en": "If 𝑇 ∈ ℒ(𝑈, 𝑉) and 𝑆 ∈ ℒ(𝑉, 𝑊), then ℳ(𝑆𝑇) = ℳ(𝑆)ℳ(𝑇). The proof of the result above is the calculation that was done as motivation before the definition of matrix multiplication. In the next piece of notation, note that as usual the first index refers to a row and the second index refers to a column, with a vertically centered dot used as a placeholder.",
      "statement_zh": "如果𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)，那么 M(𝑆𝑇) = M(𝑆)M(𝑇)． 上述结果的证明，就是在定义矩阵乘法之前，我们说明其动机时所做的计算． 在下面的记号中，注意，如往常一样，第一个下标代表行，第二个下标代表列；垂直居中 的点“·”用于占位．"
    },
    {
      "id": "3.44",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.44",
      "name_en": "𝐴_{𝑗,⋅}, 𝐴_{⋅,𝑘}",
      "name_zh": "𝐴_{𝑗,·}、𝐴_{·,𝑘}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix.",
          "zh": "假设 𝐴是𝑚 × 𝑛矩阵． 如果1 ≤ 𝑗 ≤ 𝑚，那么 𝐴_{𝑗,·}表示由 𝐴的第 𝑗行构成的1×𝑛矩阵． 如果1 ≤ 𝑘 ≤ 𝑛，那么 𝐴_{·,𝑘}表示由 𝐴的第 𝑘列构成的𝑚×1矩阵．"
        },
        {
          "t": "bullet",
          "en": "If 1 ≤ 𝑗 ≤ 𝑚, then 𝐴_{𝑗,⋅} denotes the 1-by-𝑛 matrix consisting of row 𝑗 of 𝐴.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "If 1 ≤ 𝑘 ≤ 𝑛, then 𝐴_{⋅,𝑘} denotes the 𝑚-by-1 matrix consisting of column 𝑘 of 𝐴.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix. If 1 ≤ 𝑗 ≤ 𝑚, then 𝐴_{𝑗,⋅} denotes the 1-by-𝑛 matrix consisting of row 𝑗 of 𝐴. If 1 ≤ 𝑘 ≤ 𝑛, then 𝐴_{⋅,𝑘} denotes the 𝑚-by-1 matrix consisting of column 𝑘 of 𝐴.",
      "statement_zh": "假设 𝐴是𝑚 × 𝑛矩阵． 如果1 ≤ 𝑗 ≤ 𝑚，那么 𝐴_{𝑗,·}表示由 𝐴的第 𝑗行构成的1×𝑛矩阵． 如果1 ≤ 𝑘 ≤ 𝑛，那么 𝐴_{·,𝑘}表示由 𝐴的第 𝑘列构成的𝑚×1矩阵．"
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
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then",
          "zh": "假设 𝐴是𝑚 × 𝑛矩阵且 𝐵是𝑛 × 𝑝矩阵．那么如果1 ≤ 𝑗 ≤ 𝑚且1 ≤ 𝑘 ≤ 𝑝，则"
        },
        {
          "t": "formula",
          "en": "(𝐴𝐵)_{𝑗,𝑘} = 𝐴_{𝑗,⋅} 𝐵_{⋅,𝑘}",
          "zh": "(𝐴𝐵)𝑗,𝑘 = 𝐴_{𝑗,·} 𝐵_{·,𝑘} ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "if 1 ≤ 𝑗 ≤ 𝑚 and 1 ≤ 𝑘 ≤ 𝑝. In other words, the entry in row 𝑗, column 𝑘, of 𝐴𝐵 equals(row 𝑗 of 𝐴) times(column 𝑘 of 𝐵).",
          "zh": "换言之，𝐴𝐵中第 𝑗行第 𝑘列的元素等于：(𝐴的第 𝑗行)乘以(𝐵的第 𝑘列)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then (𝐴𝐵)_{𝑗,𝑘} = 𝐴_{𝑗,⋅} 𝐵_{⋅,𝑘} if 1 ≤ 𝑗 ≤ 𝑚 and 1 ≤ 𝑘 ≤ 𝑝. In other words, the entry in row 𝑗, column 𝑘, of 𝐴𝐵 equals(row 𝑗 of 𝐴) times(column 𝑘 of 𝐵).",
      "statement_zh": "假设 𝐴是𝑚 × 𝑛矩阵且 𝐵是𝑛 × 𝑝矩阵．那么如果1 ≤ 𝑗 ≤ 𝑚且1 ≤ 𝑘 ≤ 𝑝，则 (𝐴𝐵)𝑗,𝑘 = 𝐴_{𝑗,·} 𝐵_{·,𝑘} ． 换言之，𝐴𝐵中第 𝑗行第 𝑘列的元素等于：(𝐴的第 𝑗行)乘以(𝐵的第 𝑘列)．"
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
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then",
          "zh": "假设 𝐴是𝑚 × 𝑛矩阵且 𝐵是𝑛 × 𝑝矩阵．那么如果1 ≤ 𝑘 ≤ 𝑝，则"
        },
        {
          "t": "formula",
          "en": "(𝐴𝐵)_{⋅,𝑘} = 𝐴𝐵_{⋅,𝑘}",
          "zh": "(𝐴𝐵)_{·,𝑘} = 𝐴𝐵_{·,𝑘} ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "if 1 ≤ 𝑘 ≤ 𝑝. In other words, column 𝑘 of 𝐴𝐵 equals 𝐴 times column 𝑘 of 𝐵.",
          "zh": "换言之，𝐴𝐵的第 𝑘列等于 𝐴乘以 𝐵的第 𝑘列．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑝 matrix. Then (𝐴𝐵)_{⋅,𝑘} = 𝐴𝐵_{⋅,𝑘} if 1 ≤ 𝑘 ≤ 𝑝. In other words, column 𝑘 of 𝐴𝐵 equals 𝐴 times column 𝑘 of 𝐵.",
      "statement_zh": "假设 𝐴是𝑚 × 𝑛矩阵且 𝐵是𝑛 × 𝑝矩阵．那么如果1 ≤ 𝑘 ≤ 𝑝，则 (𝐴𝐵)_{·,𝑘} = 𝐴𝐵_{·,𝑘} ． 换言之，𝐴𝐵的第 𝑘列等于 𝐴乘以 𝐵的第 𝑘列．"
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
          "t": "formula",
          "en": "𝑏_1 ⎛⎜ ⎞⎟⎟⎟",
          "zh": "𝑏_1 ���� ����...",
          "eq": null
        },
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝑏 = ⎜⎜ ⋮ is an 𝑛-by-1 matrix. Then",
          "zh": "假设 𝐴是𝑚 × 𝑛矩阵且 𝑏 = 是𝑛 × 1矩阵．那么"
        },
        {
          "t": "formula",
          "en": "⎝ 𝑏𝑛 ⎠ 𝐴𝑏 = 𝑏_1 𝐴_{⋅,1} + ⋯ + 𝑏_𝑛 𝐴_{⋅,𝑛}.",
          "zh": "� 𝑏^𝑛 � 𝐴𝑏 = 𝑏1𝐴·,1 + · · · + 𝑏𝑛𝐴·,𝑛．",
          "eq": null
        },
        {
          "t": "p",
          "en": "In other words, 𝐴𝑏 is a linear combination of the columns of 𝐴, with the scalars that multiply the columns coming from 𝑏.",
          "zh": "换言之，𝐴𝑏是 𝐴中各列的线性组合，而与这些列相乘的标量则来自 𝑏．"
        }
      ],
      "note": null,
      "statement_en": "𝑏_1 ⎛⎜ ⎞⎟⎟⎟ Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝑏 = ⎜⎜ ⋮ is an 𝑛-by-1 matrix. Then ⎝ 𝑏𝑛 ⎠ 𝐴𝑏 = 𝑏_1 𝐴_{⋅,1} + ⋯ + 𝑏_𝑛 𝐴_{⋅,𝑛}. In other words, 𝐴𝑏 is a linear combination of the columns of 𝐴, with the scalars that multiply the columns coming from 𝑏.",
      "statement_zh": "𝑏_1 ���� ����... 假设 𝐴是𝑚 × 𝑛矩阵且 𝑏 = 是𝑛 × 1矩阵．那么 � 𝑏^𝑛 � 𝐴𝑏 = 𝑏1𝐴·,1 + · · · + 𝑏𝑛𝐴·,𝑛． 换言之，𝐴𝑏是 𝐴中各列的线性组合，而与这些列相乘的标量则来自 𝑏．"
    },
    {
      "id": "3.51",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.51",
      "name_en": "matrix multiplication as linear combinations of columns or rows",
      "name_zh": "将矩阵乘法视为列或行的线性组合",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐶 is an 𝑚-by-𝑐 matrix and 𝑅 is a 𝑐-by-𝑛 matrix. (a) If 𝑘 ∈{1, …, 𝑛}, then column 𝑘 of 𝐶𝑅 is a linear combination of the columns of 𝐶, with the coefficients of this linear combination coming from column 𝑘 of 𝑅. (b) If 𝑗 ∈{1, …, 𝑚}, then row 𝑗 of 𝐶𝑅 is a linear combination of the rows of 𝑅, with the coefficients of this linear combination coming from row 𝑗 of 𝐶.",
          "zh": "假设𝐶是𝑚 × 𝑐矩阵且 𝑅是𝑐 × 𝑛矩阵． (a) 如果 𝑘 ∈{1,..., 𝑛}，那么𝐶𝑅的第 𝑘列是𝐶的各列的线性组合，其中各系数来自 𝑅 的第 𝑘列． (b) 如果 𝑗 ∈{1,..., 𝑚}，那么𝐶𝑅的第 𝑗行是 𝑅的各行的线性组合，其中各系数来自 𝐶的第 𝑗行．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐶 is an 𝑚-by-𝑐 matrix and 𝑅 is a 𝑐-by-𝑛 matrix. (a) If 𝑘 ∈{1, …, 𝑛}, then column 𝑘 of 𝐶𝑅 is a linear combination of the columns of 𝐶, with the coefficients of this linear combination coming from column 𝑘 of 𝑅. (b) If 𝑗 ∈{1, …, 𝑚}, then row 𝑗 of 𝐶𝑅 is a linear combination of the rows of 𝑅, with the coefficients of this linear combination coming from row 𝑗 of 𝐶.",
      "statement_zh": "假设𝐶是𝑚 × 𝑐矩阵且 𝑅是𝑐 × 𝑛矩阵． (a) 如果 𝑘 ∈{1,..., 𝑛}，那么𝐶𝑅的第 𝑘列是𝐶的各列的线性组合，其中各系数来自 𝑅 的第 𝑘列． (b) 如果 𝑗 ∈{1,..., 𝑚}，那么𝐶𝑅的第 𝑗行是 𝑅的各行的线性组合，其中各系数来自 𝐶的第 𝑗行．"
    },
    {
      "id": "3.52",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.52",
      "name_en": "column rank, row rank",
      "name_zh": "列秩（column rank）、行秩（row rank）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix with entries in 𝐅.",
          "zh": "假设 𝐴是𝑚 × 𝑛矩阵，其各元素属于 F． 𝐴的列秩是 𝐴的各列在 F^{𝑚,1}中的张成空间的维数． 𝐴的行秩是 𝐴的各行在 F^{1,𝑛}中的张成空间的维数．"
        },
        {
          "t": "bullet",
          "en": "The column rank of 𝐴 is the dimension of the span of the columns of 𝐴 in 𝐅^{𝑚,1}.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "The row rank of 𝐴 is the dimension of the span of the rows of 𝐴 in 𝐅^{1,𝑛}.",
          "zh": ""
        }
      ],
      "note": {
        "en": "If 𝐴 is an 𝑚-by-𝑛 matrix, then the column rank of 𝐴 is at most 𝑛(because 𝐴 has 𝑛 columns) and the column rank of 𝐴 is also at most 𝑚(because dim 𝐅^{𝑚,1} = 𝑚) Similarly, the row rank of 𝐴 is also at most min{𝑚, 𝑛}.",
        "zh": ""
      },
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix with entries in 𝐅. The column rank of 𝐴 is the dimension of the span of the columns of 𝐴 in 𝐅^{𝑚,1}. The row rank of 𝐴 is the dimension of the span of the rows of 𝐴 in 𝐅^{1,𝑛}. If 𝐴 is an 𝑚-by-𝑛 matrix, then the column rank of 𝐴 is at most 𝑛(because 𝐴 has 𝑛 columns) and the column rank of 𝐴 is also at most 𝑚(because dim 𝐅^{𝑚,1} = 𝑚) Similarly, the row rank of 𝐴 is also at most min{𝑚, 𝑛}.",
      "statement_zh": "假设 𝐴是𝑚 × 𝑛矩阵，其各元素属于 F． 𝐴的列秩是 𝐴的各列在 F^{𝑚,1}中的张成空间的维数． 𝐴的行秩是 𝐴的各行在 F^{1,𝑛}中的张成空间的维数．"
    },
    {
      "id": "3.54",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.54",
      "name_en": "transpose, 𝐴^t",
      "name_zh": "转置（transpose）、𝐴^t",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The transpose of a matrix 𝐴, denoted by 𝐴^t, is the matrix obtained from 𝐴 by interchanging rows and columns. Specifically, if 𝐴 is an 𝑚-by-𝑛 matrix, then 𝐴^t is the 𝑛-by-𝑚 matrix whose entries are given by the equation",
          "zh": "矩阵 𝐴的转置记为 𝐴^t，是互换 𝐴的行和列所得的矩阵．具体地说，如果 𝐴是 𝑚 × 𝑛矩 阵，那么 𝐴^t是𝑛 × 𝑚矩阵，其中各元素由下面等式给出："
        },
        {
          "t": "formula",
          "en": "(𝐴^t)_{𝑘,𝑗} = 𝐴_{𝑗,𝑘}.",
          "zh": "(𝐴^t)_{𝑘,𝑗} = 𝐴_{𝑗,𝑘} ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "The transpose of a matrix 𝐴, denoted by 𝐴^t, is the matrix obtained from 𝐴 by interchanging rows and columns. Specifically, if 𝐴 is an 𝑚-by-𝑛 matrix, then 𝐴^t is the 𝑛-by-𝑚 matrix whose entries are given by the equation (𝐴^t)_{𝑘,𝑗} = 𝐴_{𝑗,𝑘}.",
      "statement_zh": "矩阵 𝐴的转置记为 𝐴^t，是互换 𝐴的行和列所得的矩阵．具体地说，如果 𝐴是 𝑚 × 𝑛矩 阵，那么 𝐴^t是𝑛 × 𝑚矩阵，其中各元素由下面等式给出： (𝐴^t)_{𝑘,𝑗} = 𝐴_{𝑗,𝑘} ．"
    },
    {
      "id": "3.56",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.56",
      "name_en": "column–row factorization",
      "name_zh": "行列分解（column-row factorization）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix with entries in 𝐅 and column rank 𝑐 ≥ 1. Then there exist an 𝑚-by-𝑐 matrix 𝐶 and a 𝑐-by-𝑛 matrix 𝑅, both with entries in 𝐅, such that 𝐴 = 𝐶𝑅.",
          "zh": "假设 𝐴是𝑚 × 𝑛矩阵，其中各元素均在 F 中且列秩𝑐 ≥ 1．那么存在各元素均属于 F 的 𝑚 × 𝑐矩阵𝐶和𝑐 × 𝑛矩阵 𝑅，使得 𝐴 = 𝐶𝑅成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix with entries in 𝐅 and column rank 𝑐 ≥ 1. Then there exist an 𝑚-by-𝑐 matrix 𝐶 and a 𝑐-by-𝑛 matrix 𝑅, both with entries in 𝐅, such that 𝐴 = 𝐶𝑅.",
      "statement_zh": "假设 𝐴是𝑚 × 𝑛矩阵，其中各元素均在 F 中且列秩𝑐 ≥ 1．那么存在各元素均属于 F 的 𝑚 × 𝑐矩阵𝐶和𝑐 × 𝑛矩阵 𝑅，使得 𝐴 = 𝐶𝑅成立．"
    },
    {
      "id": "3.57",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.57",
      "name_en": "column rank equals row rank",
      "name_zh": "列秩等于行秩",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 ∈ 𝐅^{𝑚,𝑛}. Then the column rank of 𝐴 equals the row rank of 𝐴.",
          "zh": "假设 𝐴 ∈ F^{𝑚,𝑛} ．那么 𝐴的列秩等于 𝐴的行秩．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 ∈ 𝐅^{𝑚,𝑛}. Then the column rank of 𝐴 equals the row rank of 𝐴.",
      "statement_zh": "假设 𝐴 ∈ F^{𝑚,𝑛} ．那么 𝐴的列秩等于 𝐴的行秩．"
    },
    {
      "id": "3.58",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.58",
      "name_en": "rank",
      "name_zh": "秩（rank）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The rank of a matrix 𝐴 ∈ 𝐅^{𝑚,𝑛} is the column rank of 𝐴.",
          "zh": "矩阵 𝐴 ∈ F^{𝑚,𝑛}的秩是 𝐴的列秩．"
        }
      ],
      "note": {
        "en": "See 3.133 and Exercise 8 in Section 7A for alternative proofs that the column rank equals the row rank.",
        "zh": "列秩等于行秩的其他证明见于3.133和7A 节的习题8． K 习题 3C k 1 设𝑇 ∈ L(𝑉,𝑊)．证明：任取𝑉和𝑊的基，𝑇所对应的矩阵都至少有 dim range 𝑇个非零元 素． 2 设𝑇 ∈ L(𝑉,𝑊)，其中𝑉和𝑊都是有限维且非零的向量空间．证明：dim range 𝑇 = 1，当且 仅当存在𝑉的一个基和𝑊的一个基，使得关于这些基的 M(𝑇) 的所有元素都是1． 3 设𝑣_1,..., 𝑣_𝑛是𝑉的基，𝑤_1,..., 𝑤_𝑚是𝑊的基． (a) 证明：如果 𝑆,𝑇 ∈ L(𝑉,𝑊)，那么 M(𝑆 + 𝑇) = M(𝑆) + M(𝑇)． (b) 证明：如果𝜆 ∈ F，𝑇 ∈ L(𝑉,𝑊)，那么 M(𝜆𝑇) = 𝜆 M(𝑇)． 注 本题是在让你验证3.35和3.38．"
      },
      "statement_en": "The rank of a matrix 𝐴 ∈ 𝐅^{𝑚,𝑛} is the column rank of 𝐴. See 3.133 and Exercise 8 in Section 7A for alternative proofs that the column rank equals the row rank.",
      "statement_zh": "矩阵 𝐴 ∈ F^{𝑚,𝑛}的秩是 𝐴的列秩． 列秩等于行秩的其他证明见于3.133和7A 节的习题8． K 习题 3C k 1 设𝑇 ∈ L(𝑉,𝑊)．证明：任取𝑉和𝑊的基，𝑇所对应的矩阵都至少有 dim range 𝑇个非零元 素． 2 设𝑇 ∈ L(𝑉,𝑊)，其中𝑉和𝑊都是有限维且非零的向量空间．证明：dim range 𝑇 = 1，当且 仅当存在𝑉的一个基和𝑊的一个基，使得关于这些基的 M(𝑇) 的所有元素都是1． 3 设𝑣_1,..., 𝑣_𝑛是𝑉的基，𝑤_1,..., 𝑤_𝑚是𝑊的基． (a) 证明：如果 𝑆,𝑇 ∈ L(𝑉,𝑊)，那么 M(𝑆 + 𝑇) = M(𝑆) + M(𝑇)． (b) 证明：如果𝜆 ∈ F，𝑇 ∈ L(𝑉,𝑊)，那么 M(𝜆𝑇) = 𝜆 M(𝑇)． 注 本题是在让你验证3.35和3.38．"
    },
    {
      "id": "3.59",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.59",
      "name_en": "invertible, inverse",
      "name_zh": "可逆的（invertible）、逆（inverse）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A linear map 𝑇 ∈ ℒ(𝑉, 𝑊) is called invertible if there exists a linear map 𝑆 ∈ ℒ(𝑊, 𝑉) such that 𝑆𝑇 equals the identity operator on 𝑉 and 𝑇𝑆 equals the identity operator on 𝑊.",
          "zh": "对于线性映射𝑇 ∈ L(𝑉,𝑊)，如果存在线性映射𝑆 ∈ L(𝑊,𝑉)，使得𝑆𝑇等于𝑉上的恒 等算子且𝑇𝑆等于𝑊上的恒等算子，则称𝑇是可逆的． 一个满足𝑆𝑇 = 𝐼及𝑇𝑆 = 𝐼的线性映射𝑆 ∈ L(𝑊,𝑉) 被称为𝑇的一个逆．（注意，第一 个 𝐼是𝑉上的恒等算子，第二个 𝐼是𝑊上的恒等算子）"
        },
        {
          "t": "bullet",
          "en": "A linear map 𝑆 ∈ ℒ(𝑊, 𝑉) satisfying 𝑆𝑇 = 𝐼 and 𝑇𝑆 = 𝐼 is called an inverse of 𝑇(note that the first 𝐼 is the identity operator on 𝑉 and the second 𝐼 is the identity operator on 𝑊).",
          "zh": ""
        }
      ],
      "note": {
        "en": "The definition above mentions “an inverse”. However, the next result shows that we can change this terminology to “the inverse”.",
        "zh": "上面的定义中用的说法是线性映射的“一个逆”．然而，接下来的结果表明，我们可以将 这个说法换成线性映射的“逆”．^7"
      },
      "statement_en": "A linear map 𝑇 ∈ ℒ(𝑉, 𝑊) is called invertible if there exists a linear map 𝑆 ∈ ℒ(𝑊, 𝑉) such that 𝑆𝑇 equals the identity operator on 𝑉 and 𝑇𝑆 equals the identity operator on 𝑊. A linear map 𝑆 ∈ ℒ(𝑊, 𝑉) satisfying 𝑆𝑇 = 𝐼 and 𝑇𝑆 = 𝐼 is called an inverse of 𝑇(note that the first 𝐼 is the identity operator on 𝑉 and the second 𝐼 is the identity operator on 𝑊). The definition above mentions “an inverse”. However, the next result shows that we can change this terminology to “the inverse”.",
      "statement_zh": "对于线性映射𝑇 ∈ L(𝑉,𝑊)，如果存在线性映射𝑆 ∈ L(𝑊,𝑉)，使得𝑆𝑇等于𝑉上的恒 等算子且𝑇𝑆等于𝑊上的恒等算子，则称𝑇是可逆的． 一个满足𝑆𝑇 = 𝐼及𝑇𝑆 = 𝐼的线性映射𝑆 ∈ L(𝑊,𝑉) 被称为𝑇的一个逆．（注意，第一 个 𝐼是𝑉上的恒等算子，第二个 𝐼是𝑊上的恒等算子） 上面的定义中用的说法是线性映射的“一个逆”．然而，接下来的结果表明，我们可以将 这个说法换成线性映射的“逆”．^7"
    },
    {
      "id": "3.60",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.60",
      "name_en": "inverse is unique",
      "name_zh": "逆是唯一的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An invertible linear map has a unique inverse.",
          "zh": "可逆的线性映射具有唯一的逆．"
        }
      ],
      "note": null,
      "statement_en": "An invertible linear map has a unique inverse.",
      "statement_zh": "可逆的线性映射具有唯一的逆．"
    },
    {
      "id": "3.61",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.61",
      "name_en": "𝑇^{−1}",
      "name_zh": "𝑇^{−1}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑇 is invertible, then its inverse is denoted by 𝑇^{−1}. In other words, if 𝑇 ∈ ℒ(𝑉, 𝑊) is invertible, then 𝑇^{−1} is the unique element of ℒ(𝑊, 𝑉) such that 𝑇^{−1} 𝑇 = 𝐼 and 𝑇𝑇^{−1} = 𝐼.",
          "zh": "如果𝑇是可逆的，那么它的逆记作𝑇^{−1} ．换言之，如果𝑇 ∈ L(𝑉,𝑊) 是可逆的，那么𝑇^{−1} 是 L(𝑊,𝑉) 中唯一使得𝑇^{−1} 𝑇 = 𝐼和𝑇𝑇^{−1} = 𝐼成立的元素．"
        }
      ],
      "note": null,
      "statement_en": "If 𝑇 is invertible, then its inverse is denoted by 𝑇^{−1}. In other words, if 𝑇 ∈ ℒ(𝑉, 𝑊) is invertible, then 𝑇^{−1} is the unique element of ℒ(𝑊, 𝑉) such that 𝑇^{−1} 𝑇 = 𝐼 and 𝑇𝑇^{−1} = 𝐼.",
      "statement_zh": "如果𝑇是可逆的，那么它的逆记作𝑇^{−1} ．换言之，如果𝑇 ∈ L(𝑉,𝑊) 是可逆的，那么𝑇^{−1} 是 L(𝑊,𝑉) 中唯一使得𝑇^{−1} 𝑇 = 𝐼和𝑇𝑇^{−1} = 𝐼成立的元素．"
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
          "zh": "一个线性映射是可逆的，当且仅当它既是单射又是满射．"
        }
      ],
      "note": {
        "en": "",
        "zh": "_{原就}证_{文是}明_{：，T本h}假_{来ed是}设_{ef说ini} 𝑇_{“tio一n} ∈_{a个b} L_{o逆v}(_{e”}𝑉_{m（},_{ean}𝑊_{ntiion})_{nv}．_{ser“sa}我_{en）i，n}们_{v证er}需_{s明e”了}要_{.H逆}证_{o的we}明_{唯ve一r}，_{,t性he}𝑇_{之ne}是_{后xt，r}可_{e就su}逆_{l可ts以h}的_{o将w}当_{s不th}且_{定at冠w}仅_{e词c}当_{aann}它_{c换ha成}既_{ng定e}是_{t冠his}单_{词tert}射_{hmein}又_{来ol特o}是_{g指y}满_{t这o“唯}射_{th一e}．_{i的nv逆ers了e”．.意思}"
      },
      "statement_en": "A linear map is invertible if and only if it is injective and surjective.",
      "statement_zh": "一个线性映射是可逆的，当且仅当它既是单射又是满射． _{原就}证_{文是}明_{：，T本h}假_{来ed是}设_{ef说ini} 𝑇_{“tio一n} ∈_{a个b} L_{o逆v}(_{e”}𝑉_{m（},_{ean}𝑊_{ntiion})_{nv}．_{ser“sa}我_{en）i，n}们_{v证er}需_{s明e”了}要_{.H逆}证_{o的we}明_{唯ve一r}，_{,t性he}𝑇_{之ne}是_{后xt，r}可_{e就su}逆_{l可ts以h}的_{o将w}当_{s不th}且_{定at冠w}仅_{e词c}当_{aann}它_{c换ha成}既_{ng定e}是_{t冠his}单_{词tert}射_{hmein}又_{来ol特o}是_{g指y}满_{t这o“唯}射_{th一e}．_{i的nv逆ers了e”．.意思}"
    },
    {
      "id": "3.65",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.65",
      "name_en": "injectivity is equivalent to surjectivity(if dim 𝑉 = dim 𝑊 < ∞)",
      "name_zh": "若 dim 𝑉 = dim 𝑊 < ∞，则单射性与满射性等价",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑉 and 𝑊 are finite-dimensional vector spaces, dim 𝑉 = dim 𝑊, and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇 is invertible ⟺ 𝑇 is injective ⟺ 𝑇 is surjective.",
          "zh": "假设𝑉和𝑊都是有限维向量空间，dim 𝑉 = dim 𝑊，且𝑇 ∈ L(𝑉,𝑊)．那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑇可逆 ⇐⇒ 𝑇是单射 ⇐⇒ 𝑇是满射．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑉 and 𝑊 are finite-dimensional vector spaces, dim 𝑉 = dim 𝑊, and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇 is invertible ⟺ 𝑇 is injective ⟺ 𝑇 is surjective.",
      "statement_zh": "假设𝑉和𝑊都是有限维向量空间，dim 𝑉 = dim 𝑊，且𝑇 ∈ L(𝑉,𝑊)．那么 𝑇可逆 ⇐⇒ 𝑇是单射 ⇐⇒ 𝑇是满射．"
    },
    {
      "id": "3.68",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.68",
      "name_en": "𝑆𝑇 = 𝐼 ⟺ 𝑇𝑆 = 𝐼(on vector spaces of the same dimension)",
      "name_zh": "𝑆𝑇 = 𝐼 ⇐⇒ 𝑇𝑆 = 𝐼（𝑆和𝑇作用于维数相同的向量空间）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional vector spaces of the same dimension, 𝑆 ∈ ℒ(𝑊, 𝑉), and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑆𝑇 = 𝐼 if and only if 𝑇𝑆 = 𝐼.",
          "zh": "假设𝑉和𝑊是维数相同的有限维向量空间，𝑆 ∈ L(𝑊,𝑉) 且𝑇 ∈ L(𝑉,𝑊)．那么 𝑆𝑇 = 𝐼 当且仅当𝑇𝑆 = 𝐼．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional vector spaces of the same dimension, 𝑆 ∈ ℒ(𝑊, 𝑉), and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑆𝑇 = 𝐼 if and only if 𝑇𝑆 = 𝐼.",
      "statement_zh": "假设𝑉和𝑊是维数相同的有限维向量空间，𝑆 ∈ L(𝑊,𝑉) 且𝑇 ∈ L(𝑉,𝑊)．那么 𝑆𝑇 = 𝐼 当且仅当𝑇𝑆 = 𝐼．"
    },
    {
      "id": "3.69",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.69",
      "name_en": "isomorphism, isomorphic",
      "name_zh": "同构（isomorphism）、同构的（isomorphic）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "An isomorphism is an invertible linear map.",
          "zh": "同构就是可逆线性映射． 对于两个向量空间，若存在将其中一个向量空间映成另一个向量空间的同构，则称它 们是同构的^8 ．"
        },
        {
          "t": "bullet",
          "en": "Two vector spaces are called isomorphic if there is an isomorphism from one vector space onto the other one.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "可以将同构𝑇: 𝑉 → 𝑊理解为把 𝑣 ∈ 𝑉改写成𝑇𝑣 ∈ 𝑊．这个观点能解释为何两个同构的 向量空间有相同的向量空间性质．“同构”和“可逆线性映射”这两个术语同义，当你想强调 两个空间本质上相同时，就用“同构”这个词． 对于两个数学结构（例如群或拓扑空间），要判定它们（除了基础集合^9中元素的名称不 同外）在本质上相同，可能很困难．然而，接下来的结论说明了，要判定两个向量空间是否同 构，我们只需要关注一个数——维数——即可．"
      },
      "statement_en": "An isomorphism is an invertible linear map. Two vector spaces are called isomorphic if there is an isomorphism from one vector space onto the other one.",
      "statement_zh": "同构就是可逆线性映射． 对于两个向量空间，若存在将其中一个向量空间映成另一个向量空间的同构，则称它 们是同构的^8 ． 可以将同构𝑇: 𝑉 → 𝑊理解为把 𝑣 ∈ 𝑉改写成𝑇𝑣 ∈ 𝑊．这个观点能解释为何两个同构的 向量空间有相同的向量空间性质．“同构”和“可逆线性映射”这两个术语同义，当你想强调 两个空间本质上相同时，就用“同构”这个词． 对于两个数学结构（例如群或拓扑空间），要判定它们（除了基础集合^9中元素的名称不 同外）在本质上相同，可能很困难．然而，接下来的结论说明了，要判定两个向量空间是否同 构，我们只需要关注一个数——维数——即可．"
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
          "zh": "对于 F 上的两个有限维向量空间，当且仅当它们的维数相同时，它们才是同构的．"
        }
      ],
      "note": null,
      "statement_en": "Two finite-dimensional vector spaces over 𝐅 are isomorphic if and only if they have the same dimension.",
      "statement_zh": "对于 F 上的两个有限维向量空间，当且仅当它们的维数相同时，它们才是同构的．"
    },
    {
      "id": "3.71",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.71",
      "name_en": "ℒ(𝑉, 𝑊) and 𝐅^{𝑚,𝑛} are isomorphic",
      "name_zh": "L(𝑉,𝑊) 与 F^{𝑚,𝑛}是同构的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑚 is a basis of 𝑊. Then ℳ is an isomorphism between ℒ(𝑉, 𝑊) and 𝐅^{𝑚,𝑛}.",
          "zh": "设𝑣_1,..., 𝑣_𝑛是𝑉的基且𝑤_1,..., 𝑤_𝑚是𝑊的基．那么 M 是 L(𝑉,𝑊) 与 F^{𝑚,𝑛}间的同构．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑚 is a basis of 𝑊. Then ℳ is an isomorphism between ℒ(𝑉, 𝑊) and 𝐅^{𝑚,𝑛}.",
      "statement_zh": "设𝑣_1,..., 𝑣_𝑛是𝑉的基且𝑤_1,..., 𝑤_𝑚是𝑊的基．那么 M 是 L(𝑉,𝑊) 与 F^{𝑚,𝑛}间的同构．"
    },
    {
      "id": "3.72",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.72",
      "name_en": "dim ℒ(𝑉, 𝑊) =(dim 𝑉)(dim 𝑊)",
      "name_zh": "dim L(𝑉,𝑊) =(dim 𝑉)(dim 𝑊)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional. Then ℒ(𝑉, 𝑊) is finite-dimensional and",
          "zh": "假设𝑉和𝑊是有限维的．那么 L(𝑉,𝑊) 是有限维的，且"
        },
        {
          "t": "formula",
          "en": "dim ℒ(𝑉, 𝑊) =(dim 𝑉)(dim 𝑊).",
          "zh": "dim L(𝑉,𝑊) =(dim 𝑉)(dim 𝑊)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional. Then ℒ(𝑉, 𝑊) is finite-dimensional and dim ℒ(𝑉, 𝑊) =(dim 𝑉)(dim 𝑊).",
      "statement_zh": "假设𝑉和𝑊是有限维的．那么 L(𝑉,𝑊) 是有限维的，且 dim L(𝑉,𝑊) =(dim 𝑉)(dim 𝑊)．"
    },
    {
      "id": "3.73",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.73",
      "name_en": "matrix of a vector, ℳ(𝑣)",
      "name_zh": "向量的矩阵（matrix of a vector）、M(𝑣)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣 ∈ 𝑉 and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. The matrix of 𝑣 with respect to this basis is the 𝑛-by-1 matrix",
          "zh": "假设𝑣 ∈ 𝑉且𝑣_1,..., 𝑣_𝑛是𝑉的基．𝑣关于该基的矩阵是𝑛 × 1矩阵"
        },
        {
          "t": "formula",
          "en": "𝑏_1 ⎛⎜ ⎞⎟⎟⎟ ℳ(𝑣) = ⎜⎜ ⋮ ⎝ 𝑏𝑛 ⎠",
          "zh": "𝑏_1 ���� ����... M(𝑣) = � 𝑏^𝑛 �",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑏_1, …, 𝑏_𝑛 are the scalars such that",
          "zh": "其中 𝑏_1,..., 𝑏_𝑛是使得下式成立的标量："
        },
        {
          "t": "formula",
          "en": "𝑣 = 𝑏_1 𝑣_1 + ⋯ + 𝑏_𝑛 𝑣_𝑛.",
          "zh": "𝑣 = 𝑏1𝑣1 + · · · + 𝑏𝑛𝑣𝑛．",
          "eq": null
        }
      ],
      "note": {
        "en": "The matrix ℳ(𝑣) of a vector 𝑣 ∈ 𝑉 depends on the basis 𝑣_1, …, 𝑣_𝑛 of 𝑉, as well as on 𝑣. However, the basis should be clear from the context and thus it is not included in the notation.",
        "zh": "向量𝑣 ∈ 𝑉的矩阵 M(𝑣) 取决于𝑉的基𝑣_1,..., 𝑣_𝑛，也取决于𝑣．然而，由上下文应该可明 确基取什么，因此它没被包含在记号里．"
      },
      "statement_en": "Suppose 𝑣 ∈ 𝑉 and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. The matrix of 𝑣 with respect to this basis is the 𝑛-by-1 matrix 𝑏_1 ⎛⎜ ⎞⎟⎟⎟ ℳ(𝑣) = ⎜⎜ ⋮ ⎝ 𝑏𝑛 ⎠ where 𝑏_1, …, 𝑏_𝑛 are the scalars such that 𝑣 = 𝑏_1 𝑣_1 + ⋯ + 𝑏_𝑛 𝑣_𝑛. The matrix ℳ(𝑣) of a vector 𝑣 ∈ 𝑉 depends on the basis 𝑣_1, …, 𝑣_𝑛 of 𝑉, as well as on 𝑣. However, the basis should be clear from the context and thus it is not included in the notation.",
      "statement_zh": "假设𝑣 ∈ 𝑉且𝑣_1,..., 𝑣_𝑛是𝑉的基．𝑣关于该基的矩阵是𝑛 × 1矩阵 𝑏_1 ���� ����... M(𝑣) = � 𝑏^𝑛 � 其中 𝑏_1,..., 𝑏_𝑛是使得下式成立的标量： 𝑣 = 𝑏1𝑣1 + · · · + 𝑏𝑛𝑣𝑛． 向量𝑣 ∈ 𝑉的矩阵 M(𝑣) 取决于𝑉的基𝑣_1,..., 𝑣_𝑛，也取决于𝑣．然而，由上下文应该可明 确基取什么，因此它没被包含在记号里．"
    },
    {
      "id": "3.75",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.75",
      "name_en": "ℳ(𝑇)_{⋅,𝑘} = ℳ(𝑇𝑣_𝑘)",
      "name_zh": "M(𝑇)_{·,𝑘} = M(𝑇𝑣_𝑘)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑚 is a basis of 𝑊. Let 1 ≤ 𝑘 ≤ 𝑛. Then the 𝑘^{th} column of ℳ(𝑇), which is denoted by ℳ(𝑇)_{⋅,𝑘}, equals ℳ(𝑇𝑣_𝑘).",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，𝑣_1,..., 𝑣_𝑛是𝑉的基且𝑤_1,..., 𝑤_𝑚是𝑊的基．令1 ≤ 𝑘 ≤ 𝑛．那么 M(𝑇) 的第 𝑘列，记作 M(𝑇)_{·,𝑘}，就等于 M(𝑇𝑣_𝑘)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑚 is a basis of 𝑊. Let 1 ≤ 𝑘 ≤ 𝑛. Then the 𝑘^{th} column of ℳ(𝑇), which is denoted by ℳ(𝑇)_{⋅,𝑘}, equals ℳ(𝑇𝑣_𝑘).",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，𝑣_1,..., 𝑣_𝑛是𝑉的基且𝑤_1,..., 𝑤_𝑚是𝑊的基．令1 ≤ 𝑘 ≤ 𝑛．那么 M(𝑇) 的第 𝑘列，记作 M(𝑇)_{·,𝑘}，就等于 M(𝑇𝑣_𝑘)．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝑣 ∈ 𝑉. Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑚 is a basis of 𝑊. Then",
          "zh": "假设𝑇 ∈ L(𝑉,𝑊) 且𝑣 ∈ 𝑉．假设𝑣_1,..., 𝑣_𝑛是𝑉的基且𝑤_1,..., 𝑤_𝑚是𝑊的基．那么"
        },
        {
          "t": "formula",
          "en": "ℳ(𝑇𝑣) = ℳ(𝑇)ℳ(𝑣).",
          "zh": "M(𝑇𝑣) = M(𝑇)M(𝑣)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝑣 ∈ 𝑉. Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑤_1, …, 𝑤_𝑚 is a basis of 𝑊. Then ℳ(𝑇𝑣) = ℳ(𝑇)ℳ(𝑣).",
      "statement_zh": "假设𝑇 ∈ L(𝑉,𝑊) 且𝑣 ∈ 𝑉．假设𝑣_1,..., 𝑣_𝑛是𝑉的基且𝑤_1,..., 𝑤_𝑚是𝑊的基．那么 M(𝑇𝑣) = M(𝑇)M(𝑣)．"
    },
    {
      "id": "3.78",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.78",
      "name_en": "dimension of range 𝑇 equals column rank of ℳ(𝑇)",
      "name_zh": "range 𝑇的维数等于 M(𝑇) 的列秩",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then dim range 𝑇 equals the column rank of ℳ(𝑇).",
          "zh": "假设𝑉和𝑊是有限维的，𝑇 ∈ L(𝑉,𝑊)．那么 dim range 𝑇等于 M(𝑇) 的列秩．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then dim range 𝑇 equals the column rank of ℳ(𝑇).",
      "statement_zh": "假设𝑉和𝑊是有限维的，𝑇 ∈ L(𝑉,𝑊)．那么 dim range 𝑇等于 M(𝑇) 的列秩．"
    },
    {
      "id": "3.79",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.79",
      "name_en": "identity matrix, I",
      "name_zh": "恒等矩阵（identity matrix）、𝐼",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑛 is a positive integer. The 𝑛-by-𝑛 matrix",
          "zh": "设𝑛为正整数．仅对角线上（即那些行号和列号相等的位置）的元素为1而其他各元素 均为0的𝑛 × 𝑛矩阵"
        },
        {
          "t": "formula",
          "en": "1 0 ⎛⎜⎜⎜ ⎞⎟⎟⎟",
          "zh": "1 0 ���� ����... � 0 1 �",
          "eq": null
        },
        {
          "t": "p",
          "en": "⋱",
          "zh": "就称为恒等矩阵，记作 𝐼．"
        },
        {
          "t": "formula",
          "en": "⎝ 0 1 ⎠",
          "zh": "",
          "eq": null
        },
        {
          "t": "p",
          "en": "with 1’s on the diagonal(the entries where the row number equals the column number) and 0’s elsewhere is called the identity matrix and is denoted by 𝐼.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "在上述定义中，矩阵左下角的0表示对角线下方的所有元素都是0，右上角的0则表示对 角线上方的元素都是0． 恒等算子 𝐼 ∈ L(𝑉) 关于𝑉的每个基的矩阵都是恒等矩阵 𝐼．注意，符号 𝐼既被用于表示恒 等算子，又被用于表示恒等矩阵．根据上下文即可知 𝐼指的是什么意思．例如，等式 M(𝐼) = 𝐼 中，左侧的 𝐼表示恒等算子，右侧的 𝐼则表示恒等矩阵． 如果 𝐴是与 𝐼大小相同的方阵（行数等于列数的矩阵），那么 𝐴𝐼 = 𝐼𝐴 = 𝐴（你应自行验 证）．"
      },
      "statement_en": "Suppose 𝑛 is a positive integer. The 𝑛-by-𝑛 matrix 1 0 ⎛⎜⎜⎜ ⎞⎟⎟⎟ ⋱ ⎝ 0 1 ⎠ with 1’s on the diagonal(the entries where the row number equals the column number) and 0’s elsewhere is called the identity matrix and is denoted by 𝐼.",
      "statement_zh": "设𝑛为正整数．仅对角线上（即那些行号和列号相等的位置）的元素为1而其他各元素 均为0的𝑛 × 𝑛矩阵 1 0 ���� ����... � 0 1 � 就称为恒等矩阵，记作 𝐼． 在上述定义中，矩阵左下角的0表示对角线下方的所有元素都是0，右上角的0则表示对 角线上方的元素都是0． 恒等算子 𝐼 ∈ L(𝑉) 关于𝑉的每个基的矩阵都是恒等矩阵 𝐼．注意，符号 𝐼既被用于表示恒 等算子，又被用于表示恒等矩阵．根据上下文即可知 𝐼指的是什么意思．例如，等式 M(𝐼) = 𝐼 中，左侧的 𝐼表示恒等算子，右侧的 𝐼则表示恒等矩阵． 如果 𝐴是与 𝐼大小相同的方阵（行数等于列数的矩阵），那么 𝐴𝐼 = 𝐼𝐴 = 𝐴（你应自行验 证）．"
    },
    {
      "id": "3.80",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.80",
      "name_en": "invertible, inverse, 𝐴^{−1}",
      "name_zh": "可逆的（invertible），逆（inverse）、𝐴^{−1}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A square matrix 𝐴 is called invertible if there is a square matrix 𝐵 of the same size such that 𝐴𝐵 = 𝐵𝐴 = 𝐼; we call 𝐵 the inverse of 𝐴 and denote it by 𝐴^{−1}.",
          "zh": "称方阵 𝐴是可逆的，如果存在与之大小相等的方阵 𝐵使得 𝐴𝐵 = 𝐵𝐴 = 𝐼．我们称 𝐵是 𝐴 的逆且将其记为 𝐴^{−1} ．"
        }
      ],
      "note": {
        "en": "",
        "zh": "利用与证明 3.60 相同的方法，可以证明 如果 𝐴是可逆的方阵，那么就存在唯一的矩 阵 𝐵使得 𝐴𝐵 = 𝐵𝐴 = 𝐼成立（由此亦得 𝐵 = 𝐴^{−1}这个记号是合理的）．_{−1}−1 = 如果 𝐴是可逆矩阵，那么(𝐴) 𝐴，这是因为 𝐴^{−1} 𝐴 = 𝐴𝐴^{−1} = 𝐼．"
      },
      "statement_en": "A square matrix 𝐴 is called invertible if there is a square matrix 𝐵 of the same size such that 𝐴𝐵 = 𝐵𝐴 = 𝐼; we call 𝐵 the inverse of 𝐴 and denote it by 𝐴^{−1}.",
      "statement_zh": "称方阵 𝐴是可逆的，如果存在与之大小相等的方阵 𝐵使得 𝐴𝐵 = 𝐵𝐴 = 𝐼．我们称 𝐵是 𝐴 的逆且将其记为 𝐴^{−1} ． 利用与证明 3.60 相同的方法，可以证明 如果 𝐴是可逆的方阵，那么就存在唯一的矩 阵 𝐵使得 𝐴𝐵 = 𝐵𝐴 = 𝐼成立（由此亦得 𝐵 = 𝐴^{−1}这个记号是合理的）．_{−1}−1 = 如果 𝐴是可逆矩阵，那么(𝐴) 𝐴，这是因为 𝐴^{−1} 𝐴 = 𝐴𝐴^{−1} = 𝐼．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑈, 𝑉) and 𝑆 ∈ ℒ(𝑉, 𝑊). If 𝑢_1, …, 𝑢_𝑚 is a basis of 𝑈, 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉, and 𝑤_1, …, 𝑤_𝑝 is a basis of 𝑊, then ℳ(𝑆𝑇,(𝑢_1, …, 𝑢_𝑚),(𝑤_1, …, 𝑤_𝑝)) =",
          "zh": "设 𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)．如果 𝑢_1,..., 𝑢_𝑚是 𝑈的基，𝑣_1,..., 𝑣_𝑛是 𝑉的基且 𝑤_1,..., 𝑤_𝑝是𝑊的基，那么"
        },
        {
          "t": "formula",
          "en": "ℳ(𝑆,(𝑣_1, …, 𝑣_𝑛),(𝑤_1, …, 𝑤_𝑝))ℳ(𝑇,(𝑢_1, …, 𝑢_𝑚),(𝑣_1, …, 𝑣_𝑛)).",
          "zh": "� � M 𝑆𝑇,(𝑢_1,..., 𝑢_𝑚),(𝑤_1,..., 𝑤_𝑝) � � � � = M 𝑆,(𝑣_1,..., 𝑣_𝑛),(𝑤_1,..., 𝑤_𝑝) M 𝑇,(𝑢_1,..., 𝑢_𝑚),(𝑣_1,..., 𝑣_𝑛) ．",
          "eq": null
        }
      ],
      "note": {
        "en": "",
        "zh": "接下来的结论讨论的是恒等算子 𝐼关于两个不同的基的矩阵．注意到 � � M 𝐼,(𝑢_1,..., 𝑢_𝑛),(𝑣_1,..., 𝑣_𝑛) 的第 𝑘列是由将𝑢_𝑘写成基𝑣_1,..., 𝑣_𝑛的线性组合所需的标量构成的． 下面结论的表述中，𝐼表示由𝑉到𝑉的恒等算子．在证明中，𝐼也表示𝑛 × 𝑛恒等矩阵．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑈, 𝑉) and 𝑆 ∈ ℒ(𝑉, 𝑊). If 𝑢_1, …, 𝑢_𝑚 is a basis of 𝑈, 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉, and 𝑤_1, …, 𝑤_𝑝 is a basis of 𝑊, then ℳ(𝑆𝑇,(𝑢_1, …, 𝑢_𝑚),(𝑤_1, …, 𝑤_𝑝)) = ℳ(𝑆,(𝑣_1, …, 𝑣_𝑛),(𝑤_1, …, 𝑤_𝑝))ℳ(𝑇,(𝑢_1, …, 𝑢_𝑚),(𝑣_1, …, 𝑣_𝑛)).",
      "statement_zh": "设 𝑇 ∈ L(𝑈,𝑉) 且 𝑆 ∈ L(𝑉,𝑊)．如果 𝑢_1,..., 𝑢_𝑚是 𝑈的基，𝑣_1,..., 𝑣_𝑛是 𝑉的基且 𝑤_1,..., 𝑤_𝑝是𝑊的基，那么 � � M 𝑆𝑇,(𝑢_1,..., 𝑢_𝑚),(𝑤_1,..., 𝑤_𝑝) � � � � = M 𝑆,(𝑣_1,..., 𝑣_𝑛),(𝑤_1,..., 𝑤_𝑝) M 𝑇,(𝑢_1,..., 𝑢_𝑚),(𝑣_1,..., 𝑣_𝑛) ． 接下来的结论讨论的是恒等算子 𝐼关于两个不同的基的矩阵．注意到 � � M 𝐼,(𝑢_1,..., 𝑢_𝑛),(𝑣_1,..., 𝑣_𝑛) 的第 𝑘列是由将𝑢_𝑘写成基𝑣_1,..., 𝑣_𝑛的线性组合所需的标量构成的． 下面结论的表述中，𝐼表示由𝑉到𝑉的恒等算子．在证明中，𝐼也表示𝑛 × 𝑛恒等矩阵．"
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
          "en": "Suppose that 𝑢_1, …, 𝑢_𝑛 and 𝑣_1, …, 𝑣_𝑛 are bases of 𝑉. Then the matrices ℳ(𝐼,(𝑢_1, …, 𝑢_𝑛),(𝑣_1, …, 𝑣_𝑛)) and ℳ(𝐼,(𝑣_1, …, 𝑣_𝑛),(𝑢_1, …, 𝑢_𝑛)) are invertible, and each is the inverse of the other.",
          "zh": "假设𝑢_1,..., 𝑢_𝑛和𝑣_1,..., 𝑣_𝑛是𝑉的两个基．那么矩阵"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� � � � M 𝐼,(𝑢_1,..., 𝑢_𝑛),(𝑣_1,..., 𝑣_𝑛) 和 M 𝐼,(𝑣_1,..., 𝑣_𝑛),(𝑢_1,..., 𝑢_𝑛)",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "都是可逆的，且互为对方的逆．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑢_1, …, 𝑢_𝑛 and 𝑣_1, …, 𝑣_𝑛 are bases of 𝑉. Then the matrices ℳ(𝐼,(𝑢_1, …, 𝑢_𝑛),(𝑣_1, …, 𝑣_𝑛)) and ℳ(𝐼,(𝑣_1, …, 𝑣_𝑛),(𝑢_1, …, 𝑢_𝑛)) are invertible, and each is the inverse of the other.",
      "statement_zh": "假设𝑢_1,..., 𝑢_𝑛和𝑣_1,..., 𝑣_𝑛是𝑉的两个基．那么矩阵 � � � � M 𝐼,(𝑢_1,..., 𝑢_𝑛),(𝑣_1,..., 𝑣_𝑛) 和 M 𝐼,(𝑣_1,..., 𝑣_𝑛),(𝑢_1,..., 𝑢_𝑛) 都是可逆的，且互为对方的逆．"
    },
    {
      "id": "3.84",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.84",
      "name_en": "change-of-basis formula",
      "name_zh": "换基公式（change-of-basis formula）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Suppose 𝑢_1, …, 𝑢_𝑛 and 𝑣_1, …, 𝑣_𝑛 are bases of 𝑉. Let",
          "zh": "设𝑇 ∈ L(𝑉)．假设𝑢_1,..., 𝑢_𝑛和𝑣_1,..., 𝑣_𝑛都是𝑉的基．令"
        },
        {
          "t": "formula",
          "en": "𝐴 = ℳ(𝑇,(𝑢_1, …, 𝑢_𝑛)) and 𝐵 = ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛))",
          "zh": "� � � � 𝐴 = M 𝑇,(𝑢_1,..., 𝑢_𝑛) 且 𝐵 = M 𝑇,(𝑣_1,..., 𝑣_𝑛) � �",
          "eq": null
        },
        {
          "t": "p",
          "en": "and 𝐶 = ℳ(𝐼,(𝑢_1, …, 𝑢_𝑛),(𝑣_1, …, 𝑣_𝑛)). Then",
          "zh": "且𝐶 = M 𝐼,(𝑢_1,..., 𝑢_𝑛),(𝑣_1,..., 𝑣_𝑛) ．那么"
        },
        {
          "t": "formula",
          "en": "𝐴 = 𝐶^{−1} 𝐵𝐶.",
          "zh": "𝐴 = 𝐶^{−1} 𝐵𝐶．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Suppose 𝑢_1, …, 𝑢_𝑛 and 𝑣_1, …, 𝑣_𝑛 are bases of 𝑉. Let 𝐴 = ℳ(𝑇,(𝑢_1, …, 𝑢_𝑛)) and 𝐵 = ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) and 𝐶 = ℳ(𝐼,(𝑢_1, …, 𝑢_𝑛),(𝑣_1, …, 𝑣_𝑛)). Then 𝐴 = 𝐶^{−1} 𝐵𝐶.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．假设𝑢_1,..., 𝑢_𝑛和𝑣_1,..., 𝑣_𝑛都是𝑉的基．令 � � � � 𝐴 = M 𝑇,(𝑢_1,..., 𝑢_𝑛) 且 𝐵 = M 𝑇,(𝑣_1,..., 𝑣_𝑛) � � 且𝐶 = M 𝐼,(𝑢_1,..., 𝑢_𝑛),(𝑣_1,..., 𝑣_𝑛) ．那么 𝐴 = 𝐶^{−1} 𝐵𝐶．"
    },
    {
      "id": "3.86",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.86",
      "name_en": "matrix of inverse equals inverse of matrix",
      "name_zh": "逆的矩阵等于矩阵的逆 � �",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑇 ∈ ℒ(𝑉) is invertible. Then ℳ(𝑇^{−1}) =(ℳ(𝑇))^{−1}, where both matrices are with respect to the basis 𝑣_1, …, 𝑣_𝑛.",
          "zh": "� �_{−1}"
        },
        {
          "t": "p",
          "en": "",
          "zh": "设𝑣_1,..., 𝑣_𝑛是𝑉的基且𝑇 ∈ L(𝑉) 是可逆的．那么 M(𝑇^{−1}) = M(𝑇)，式中两个矩阵 均是关于基𝑣_1,..., 𝑣_𝑛的．"
        }
      ],
      "note": {
        "en": "",
        "zh": "K 习题 3D k_{−1−1}−1 = 1 设𝑇 ∈ L(𝑉,𝑊) 可逆，证明𝑇可逆，且(𝑇) 𝑇． 2 设𝑇 ∈ L(𝑈,𝑉) 和𝑆 ∈ L(𝑉,𝑊) 都是可逆线性映射，证明：𝑆𝑇 ∈ L(𝑈,𝑊) 可逆，且(𝑆𝑇)^{−1} = 𝑇^{−1} 𝑆^{−1} ． 3 设𝑉是有限维的，𝑇 ∈ L(𝑉)．证明下列是等价的．"
      },
      "statement_en": "Suppose that 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝑇 ∈ ℒ(𝑉) is invertible. Then ℳ(𝑇^{−1}) =(ℳ(𝑇))^{−1}, where both matrices are with respect to the basis 𝑣_1, …, 𝑣_𝑛.",
      "statement_zh": "� �_{−1} 设𝑣_1,..., 𝑣_𝑛是𝑉的基且𝑇 ∈ L(𝑉) 是可逆的．那么 M(𝑇^{−1}) = M(𝑇)，式中两个矩阵 均是关于基𝑣_1,..., 𝑣_𝑛的． K 习题 3D k_{−1−1}−1 = 1 设𝑇 ∈ L(𝑉,𝑊) 可逆，证明𝑇可逆，且(𝑇) 𝑇． 2 设𝑇 ∈ L(𝑈,𝑉) 和𝑆 ∈ L(𝑉,𝑊) 都是可逆线性映射，证明：𝑆𝑇 ∈ L(𝑈,𝑊) 可逆，且(𝑆𝑇)^{−1} = 𝑇^{−1} 𝑆^{−1} ． 3 设𝑉是有限维的，𝑇 ∈ L(𝑉)．证明下列是等价的．"
    },
    {
      "id": "3.87",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.87",
      "name_en": "product of vector spaces",
      "name_zh": "向量空间的积（product of vector spaces）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉_1, …, 𝑉_𝑚 are vector spaces over 𝐅.",
          "zh": "设𝑉_1,...,𝑉_𝑚都是 F 上的向量空间． 乘积𝑉1 × · · · × 𝑉𝑚定义为"
        },
        {
          "t": "bullet",
          "en": "The product 𝑉_1 × ⋯ × 𝑉_𝑚 is defined by",
          "zh": "𝑉_1 × · · · × 𝑉_𝑚 ={(𝑣_1,..., 𝑣_𝑚): 𝑣_1 ∈ 𝑉_1,..., 𝑣_𝑚 ∈ 𝑉_𝑚}．"
        },
        {
          "t": "formula",
          "en": "𝑉_1 × ⋯ × 𝑉_𝑚 ={(𝑣_1, …, 𝑣_𝑚) : 𝑣_1 ∈ 𝑉_1, …, 𝑣_𝑚 ∈ 𝑉_𝑚}.",
          "zh": "𝑉1 × · · · × 𝑉𝑚上的加法定义为",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "Addition on 𝑉_1 × ⋯ × 𝑉_𝑚 is defined by",
          "zh": "(𝑢_1,..., 𝑢_𝑚) +(𝑣_1,..., 𝑣_𝑚) =(𝑢_1 + 𝑣_1,..., 𝑢_𝑚 + 𝑣_𝑚)．"
        },
        {
          "t": "formula",
          "en": "(𝑢_1, …, 𝑢_𝑚) +(𝑣_1, …, 𝑣_𝑚) =(𝑢_1 + 𝑣_1, …, 𝑢_𝑚 + 𝑣_𝑚).",
          "zh": "𝑉_1 × · · · × 𝑉_𝑚上的标量乘法定义为",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "Scalar multiplication on 𝑉_1 × ⋯ × 𝑉_𝑚 is defined by",
          "zh": "𝜆(𝑣_1,..., 𝑣_𝑚) =(𝜆𝑣_1,..., 𝜆𝑣_𝑚)．"
        },
        {
          "t": "formula",
          "en": "𝜆(𝑣_1, …, 𝑣_𝑚) =(𝜆𝑣_1, …, 𝜆𝑣_𝑚).",
          "zh": "",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉_1, …, 𝑉_𝑚 are vector spaces over 𝐅. The product 𝑉_1 × ⋯ × 𝑉_𝑚 is defined by 𝑉_1 × ⋯ × 𝑉_𝑚 ={(𝑣_1, …, 𝑣_𝑚) : 𝑣_1 ∈ 𝑉_1, …, 𝑣_𝑚 ∈ 𝑉_𝑚}. Addition on 𝑉_1 × ⋯ × 𝑉_𝑚 is defined by (𝑢_1, …, 𝑢_𝑚) +(𝑣_1, …, 𝑣_𝑚) =(𝑢_1 + 𝑣_1, …, 𝑢_𝑚 + 𝑣_𝑚). Scalar multiplication on 𝑉_1 × ⋯ × 𝑉_𝑚 is defined by 𝜆(𝑣_1, …, 𝑣_𝑚) =(𝜆𝑣_1, …, 𝜆𝑣_𝑚).",
      "statement_zh": "设𝑉_1,...,𝑉_𝑚都是 F 上的向量空间． 乘积𝑉1 × · · · × 𝑉𝑚定义为 𝑉_1 × · · · × 𝑉_𝑚 ={(𝑣_1,..., 𝑣_𝑚): 𝑣_1 ∈ 𝑉_1,..., 𝑣_𝑚 ∈ 𝑉_𝑚}． 𝑉1 × · · · × 𝑉𝑚上的加法定义为 (𝑢_1,..., 𝑢_𝑚) +(𝑣_1,..., 𝑣_𝑚) =(𝑢_1 + 𝑣_1,..., 𝑢_𝑚 + 𝑣_𝑚)． 𝑉_1 × · · · × 𝑉_𝑚上的标量乘法定义为 𝜆(𝑣_1,..., 𝑣_𝑚) =(𝜆𝑣_1,..., 𝜆𝑣_𝑚)．"
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
          "en": "Suppose 𝑉_1, …, 𝑉_𝑚 are vector spaces over 𝐅. Then 𝑉_1 × ⋯ × 𝑉_𝑚 is a vector space over 𝐅.",
          "zh": "设𝑉_1,...,𝑉_𝑚都是 F 上的向量空间．那么𝑉_1 × · · · × 𝑉_𝑚是 F 上的向量空间．"
        }
      ],
      "note": {
        "en": "The proof of the result above is left to the reader. Note that the additive identity of 𝑉_1 × ⋯ × 𝑉_𝑚 is(0, …, 0), where the 0 in the 𝑘^{th} slot is the additive identity of 𝑉_𝑘. The additive inverse of(𝑣_1, …, 𝑣_𝑚) ∈ 𝑉_1 × ⋯ × 𝑉_𝑚 is(−𝑣_1, …,−𝑣_𝑚).",
        "zh": "上述结论的证明留给读者完成．注意，𝑉_1 × · · · × 𝑉_𝑚的加法恒等元是(0,..., 0)，其中第 𝑘 个坐标中的0是𝑉_𝑘的加法恒等元．(𝑣_1,..., 𝑣_𝑚) ∈ 𝑉_1 × · · · ×𝑉_𝑚的加法逆元是(−𝑣_1,...,−𝑣_𝑚)．"
      },
      "statement_en": "Suppose 𝑉_1, …, 𝑉_𝑚 are vector spaces over 𝐅. Then 𝑉_1 × ⋯ × 𝑉_𝑚 is a vector space over 𝐅. The proof of the result above is left to the reader. Note that the additive identity of 𝑉_1 × ⋯ × 𝑉_𝑚 is(0, …, 0), where the 0 in the 𝑘^{th} slot is the additive identity of 𝑉_𝑘. The additive inverse of(𝑣_1, …, 𝑣_𝑚) ∈ 𝑉_1 × ⋯ × 𝑉_𝑚 is(−𝑣_1, …,−𝑣_𝑚).",
      "statement_zh": "设𝑉_1,...,𝑉_𝑚都是 F 上的向量空间．那么𝑉_1 × · · · × 𝑉_𝑚是 F 上的向量空间． 上述结论的证明留给读者完成．注意，𝑉_1 × · · · × 𝑉_𝑚的加法恒等元是(0,..., 0)，其中第 𝑘 个坐标中的0是𝑉_𝑘的加法恒等元．(𝑣_1,..., 𝑣_𝑚) ∈ 𝑉_1 × · · · ×𝑉_𝑚的加法逆元是(−𝑣_1,...,−𝑣_𝑚)．"
    },
    {
      "id": "3.92",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.92",
      "name_en": "dimension of a product is the sum of dimensions",
      "name_zh": "向量空间之积的维数是各向量空间维数之和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉_1, …, 𝑉_𝑚 are finite-dimensional vector spaces. Then 𝑉_1 × ⋯ × 𝑉_𝑚 is finite-dimensional and",
          "zh": "设𝑉_1,...,𝑉_𝑚都是有限维向量空间．那么𝑉_1 × · · · × 𝑉_𝑚是有限维的，且"
        },
        {
          "t": "formula",
          "en": "dim(𝑉_1 × ⋯ × 𝑉_𝑚) = dim 𝑉_1 + ⋯ + dim 𝑉_𝑚.",
          "zh": "dim(𝑉_1 × · · · × 𝑉_𝑚) = dim 𝑉_1 + · · · + dim 𝑉_𝑚 ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉_1, …, 𝑉_𝑚 are finite-dimensional vector spaces. Then 𝑉_1 × ⋯ × 𝑉_𝑚 is finite-dimensional and dim(𝑉_1 × ⋯ × 𝑉_𝑚) = dim 𝑉_1 + ⋯ + dim 𝑉_𝑚.",
      "statement_zh": "设𝑉_1,...,𝑉_𝑚都是有限维向量空间．那么𝑉_1 × · · · × 𝑉_𝑚是有限维的，且 dim(𝑉_1 × · · · × 𝑉_𝑚) = dim 𝑉_1 + · · · + dim 𝑉_𝑚 ．"
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
          "en": "Suppose that 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. Define a linear map Γ : 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝑉_1 + ⋯ + 𝑉_𝑚 by",
          "zh": "设𝑉_1,...,𝑉_𝑚都是𝑉的子空间．由下式定义线性映射 Γ: 𝑉_1 × · · · × 𝑉_𝑚 → 𝑉_1 + · · · + 𝑉_𝑚："
        },
        {
          "t": "formula",
          "en": "Γ(𝑣_1, …, 𝑣_𝑚) = 𝑣_1 + ⋯ + 𝑣_𝑚.",
          "zh": "Γ(𝑣_1,..., 𝑣_𝑚) = 𝑣_1 + · · · + 𝑣_𝑚 ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Then 𝑉_1 + ⋯ + 𝑉_𝑚 is a direct sum if and only if Γ is injective.",
          "zh": "那么𝑉_1 + · · · + 𝑉_𝑚是直和，当且仅当 Γ 是单射．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. Define a linear map Γ : 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝑉_1 + ⋯ + 𝑉_𝑚 by Γ(𝑣_1, …, 𝑣_𝑚) = 𝑣_1 + ⋯ + 𝑣_𝑚. Then 𝑉_1 + ⋯ + 𝑉_𝑚 is a direct sum if and only if Γ is injective.",
      "statement_zh": "设𝑉_1,...,𝑉_𝑚都是𝑉的子空间．由下式定义线性映射 Γ: 𝑉_1 × · · · × 𝑉_𝑚 → 𝑉_1 + · · · + 𝑉_𝑚： Γ(𝑣_1,..., 𝑣_𝑚) = 𝑣_1 + · · · + 𝑣_𝑚 ． 那么𝑉_1 + · · · + 𝑉_𝑚是直和，当且仅当 Γ 是单射．"
    },
    {
      "id": "3.94",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.94",
      "name_en": "a sum is a direct sum if and only if dimensions add up",
      "name_zh": "向量空间的和是直和，当且仅当该和的维数等于各求和项维数之和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. Then 𝑉_1 + ⋯ + 𝑉_𝑚 is a direct sum if and only if",
          "zh": "设𝑉是有限维的，𝑉_1,...,𝑉_𝑚都是𝑉的子空间．那么𝑉_1 + · · · + 𝑉_𝑚是直和，当且仅当"
        },
        {
          "t": "formula",
          "en": "dim(𝑉_1 + ⋯ + 𝑉_𝑚) = dim 𝑉_1 + ⋯ + dim 𝑉_𝑚.",
          "zh": "dim(𝑉_1 + · · · + 𝑉_𝑚) = dim 𝑉_1 + · · · + dim 𝑉_𝑚 ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑉_1, …, 𝑉_𝑚 are subspaces of 𝑉. Then 𝑉_1 + ⋯ + 𝑉_𝑚 is a direct sum if and only if dim(𝑉_1 + ⋯ + 𝑉_𝑚) = dim 𝑉_1 + ⋯ + dim 𝑉_𝑚.",
      "statement_zh": "设𝑉是有限维的，𝑉_1,...,𝑉_𝑚都是𝑉的子空间．那么𝑉_1 + · · · + 𝑉_𝑚是直和，当且仅当 dim(𝑉_1 + · · · + 𝑉_𝑚) = dim 𝑉_1 + · · · + dim 𝑉_𝑚 ．"
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
          "en": "Suppose 𝑣 ∈ 𝑉 and 𝑈 ⊆ 𝑉. Then 𝑣 + 𝑈 is the subset of 𝑉 defined by",
          "zh": "设𝑣 ∈ 𝑉且𝑈 ⊆ 𝑉．那么𝑣 + 𝑈是𝑉的一个由下式定义的子集："
        },
        {
          "t": "formula",
          "en": "𝑣 + 𝑈 ={𝑣 + 𝑢 : 𝑢 ∈ 𝑈}.",
          "zh": "𝑣 + 𝑈 ={𝑣 + 𝑢: 𝑢 ∈ 𝑈}．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣 ∈ 𝑉 and 𝑈 ⊆ 𝑉. Then 𝑣 + 𝑈 is the subset of 𝑉 defined by 𝑣 + 𝑈 ={𝑣 + 𝑢 : 𝑢 ∈ 𝑈}.",
      "statement_zh": "设𝑣 ∈ 𝑉且𝑈 ⊆ 𝑉．那么𝑣 + 𝑈是𝑉的一个由下式定义的子集： 𝑣 + 𝑈 ={𝑣 + 𝑢: 𝑢 ∈ 𝑈}．"
    },
    {
      "id": "3.97",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.97",
      "name_en": "translate",
      "name_zh": "平移（translate）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑣 ∈ 𝑉 and 𝑈 a subset of 𝑉, the set 𝑣 + 𝑈 is said to be a translate of 𝑈.",
          "zh": "对于𝑣 ∈ 𝑉和𝑉的一个子集𝑈，称集合𝑣 + 𝑈是𝑈的一个平移．"
        }
      ],
      "note": null,
      "statement_en": "For 𝑣 ∈ 𝑉 and 𝑈 a subset of 𝑉, the set 𝑣 + 𝑈 is said to be a translate of 𝑈.",
      "statement_zh": "对于𝑣 ∈ 𝑉和𝑉的一个子集𝑈，称集合𝑣 + 𝑈是𝑈的一个平移．"
    },
    {
      "id": "3.99",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.99",
      "name_en": "quotient space, 𝑉/𝑈",
      "name_zh": "商空间（quotient space）、𝑉/𝑈",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a subspace of 𝑉. Then the quotient space 𝑉/𝑈 is the set of all translates of 𝑈. Thus",
          "zh": "设𝑈是𝑉的子空间．那么商空间𝑉/𝑈是由𝑈的所有平移构成的集合．从而"
        },
        {
          "t": "formula",
          "en": "𝑉/𝑈 ={𝑣 + 𝑈 : 𝑣 ∈ 𝑉}.",
          "zh": "𝑉/𝑈 ={𝑣 + 𝑈: 𝑣 ∈ 𝑉}．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉. Then the quotient space 𝑉/𝑈 is the set of all translates of 𝑈. Thus 𝑉/𝑈 ={𝑣 + 𝑈 : 𝑣 ∈ 𝑉}.",
      "statement_zh": "设𝑈是𝑉的子空间．那么商空间𝑉/𝑈是由𝑈的所有平移构成的集合．从而 𝑉/𝑈 ={𝑣 + 𝑈: 𝑣 ∈ 𝑉}．"
    },
    {
      "id": "3.101",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.101",
      "name_en": "two translates of a subspace are equal or disjoint",
      "name_zh": "子空间的两个平移要么相等要么不相交",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a subspace of 𝑉 and 𝑣, 𝑤 ∈ 𝑉. Then 𝑣−𝑤 ∈ 𝑈 ⟺ 𝑣 + 𝑈 = 𝑤 + 𝑈 ⟺(𝑣 + 𝑈) ∩(𝑤 + 𝑈) ≠ ∅.",
          "zh": "设𝑈是𝑉的子空间且𝑣, 𝑤 ∈ 𝑉．那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑣−𝑤 ∈ 𝑈 ⇐⇒ 𝑣 + 𝑈 = 𝑤 + 𝑈 ⇐⇒(𝑣 + 𝑈) ∩(𝑤 + 𝑈) ≠ ∅．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉 and 𝑣, 𝑤 ∈ 𝑉. Then 𝑣−𝑤 ∈ 𝑈 ⟺ 𝑣 + 𝑈 = 𝑤 + 𝑈 ⟺(𝑣 + 𝑈) ∩(𝑤 + 𝑈) ≠ ∅.",
      "statement_zh": "设𝑈是𝑉的子空间且𝑣, 𝑤 ∈ 𝑉．那么 𝑣−𝑤 ∈ 𝑈 ⇐⇒ 𝑣 + 𝑈 = 𝑤 + 𝑈 ⇐⇒(𝑣 + 𝑈) ∩(𝑤 + 𝑈) ≠ ∅．"
    },
    {
      "id": "3.102",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.102",
      "name_en": "addition and scalar multiplication on 𝑉/𝑈",
      "name_zh": "𝑉/𝑈上的加法和标量乘法（addition and scalar multiplication on 𝑉/𝑈）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a subspace of 𝑉. Then addition and scalar multiplication are defined on 𝑉/𝑈 by",
          "zh": "设𝑈是𝑉的子空间．那么𝑉/𝑈上的加法和标量乘法分别由下面两式定义：对所有𝑣, 𝑤 ∈ 𝑉 和所有𝜆 ∈ F，"
        },
        {
          "t": "formula",
          "en": "(𝑣 + 𝑈) +(𝑤 + 𝑈) =(𝑣 + 𝑤) + 𝑈 𝜆(𝑣 + 𝑈) =(𝜆𝑣) + 𝑈",
          "zh": "(𝑣 + 𝑈) +(𝑤 + 𝑈) =(𝑣 + 𝑤) + 𝑈 𝜆(𝑣 + 𝑈) =(𝜆𝑣) + 𝑈．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑣, 𝑤 ∈ 𝑉 and all 𝜆 ∈ 𝐅.",
          "zh": ""
        }
      ],
      "note": {
        "en": "As part of the proof of the next result, we will show that the definitions above make sense.",
        "zh": "以上定义是合理的——对这一点的证明，是对接下来这条结果的证明中的一部分．"
      },
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉. Then addition and scalar multiplication are defined on 𝑉/𝑈 by (𝑣 + 𝑈) +(𝑤 + 𝑈) =(𝑣 + 𝑤) + 𝑈 𝜆(𝑣 + 𝑈) =(𝜆𝑣) + 𝑈 for all 𝑣, 𝑤 ∈ 𝑉 and all 𝜆 ∈ 𝐅. As part of the proof of the next result, we will show that the definitions above make sense.",
      "statement_zh": "设𝑈是𝑉的子空间．那么𝑉/𝑈上的加法和标量乘法分别由下面两式定义：对所有𝑣, 𝑤 ∈ 𝑉 和所有𝜆 ∈ F， (𝑣 + 𝑈) +(𝑤 + 𝑈) =(𝑣 + 𝑤) + 𝑈 𝜆(𝑣 + 𝑈) =(𝜆𝑣) + 𝑈． 以上定义是合理的——对这一点的证明，是对接下来这条结果的证明中的一部分．"
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
          "zh": "假设𝑈是𝑉的子空间．那么带有定义如上的加法和标量乘法的𝑉/𝑈就是向量空间．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉. Then 𝑉/𝑈, with the operations of addition and scalar multiplication as defined above, is a vector space.",
      "statement_zh": "假设𝑈是𝑉的子空间．那么带有定义如上的加法和标量乘法的𝑉/𝑈就是向量空间．"
    },
    {
      "id": "3.104",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.104",
      "name_en": "quotient map, 𝜋",
      "name_zh": "商映射（quotient map）、𝜋",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a subspace of 𝑉. The quotient map 𝜋 : 𝑉 → 𝑉/𝑈 is the linear map defined by",
          "zh": "设𝑈是𝑉的子空间．商映射 𝜋: 𝑉 → 𝑉/𝑈是由下式定义的线性映射：对每个𝑣 ∈ 𝑉，"
        },
        {
          "t": "formula",
          "en": "𝜋(𝑣) = 𝑣 + 𝑈",
          "zh": "𝜋(𝑣) = 𝑣 + 𝑈．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for each 𝑣 ∈ 𝑉.",
          "zh": ""
        }
      ],
      "note": {
        "en": "The reader should verify that 𝜋 is indeed a linear map. Although 𝜋 depends on 𝑈 as well as 𝑉, these spaces are left out of the notation because they should be clear from the context.",
        "zh": "读者应自行验证 𝜋的确是一个线性映射．尽管 𝜋既依赖于𝑈又依赖于𝑉，记号中却省略 了这些向量空间，因为根据上下文就能明确它们是什么．"
      },
      "statement_en": "Suppose 𝑈 is a subspace of 𝑉. The quotient map 𝜋 : 𝑉 → 𝑉/𝑈 is the linear map defined by 𝜋(𝑣) = 𝑣 + 𝑈 for each 𝑣 ∈ 𝑉. The reader should verify that 𝜋 is indeed a linear map. Although 𝜋 depends on 𝑈 as well as 𝑉, these spaces are left out of the notation because they should be clear from the context.",
      "statement_zh": "设𝑈是𝑉的子空间．商映射 𝜋: 𝑉 → 𝑉/𝑈是由下式定义的线性映射：对每个𝑣 ∈ 𝑉， 𝜋(𝑣) = 𝑣 + 𝑈． 读者应自行验证 𝜋的确是一个线性映射．尽管 𝜋既依赖于𝑈又依赖于𝑉，记号中却省略 了这些向量空间，因为根据上下文就能明确它们是什么．"
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
          "en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then",
          "zh": "设𝑉是有限维的，𝑈是𝑉的子空间．那么"
        },
        {
          "t": "formula",
          "en": "dim 𝑉/𝑈 = dim 𝑉−dim 𝑈.",
          "zh": "dim 𝑉/𝑈 = dim 𝑉−dim 𝑈．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim 𝑉/𝑈 = dim 𝑉−dim 𝑈.",
      "statement_zh": "设𝑉是有限维的，𝑈是𝑉的子空间．那么 dim 𝑉/𝑈 = dim 𝑉−dim 𝑈．"
    },
    {
      "id": "3.106",
      "kind": "notation",
      "chapter": "ch3",
      "number": "3.106",
      "name_en": "𝑇̃",
      "name_zh": "𝑇�",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Define 𝑇̃: 𝑉/(null 𝑇) → 𝑊 by",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)．𝑇�: 𝑉/(null 𝑇) → 𝑊由下式定义："
        },
        {
          "t": "formula",
          "en": "𝑇̃(𝑣 + null 𝑇) = 𝑇𝑣.",
          "zh": "𝑇�(𝑣 + null 𝑇) = 𝑇𝑣．",
          "eq": null
        }
      ],
      "note": {
        "en": "",
        "zh": "为了说明上述𝑇�的定义是合理的，假设𝑢, 𝑣 ∈ 𝑉满足𝑢 + null 𝑇 = 𝑣 + null 𝑇．由3.101，我 们有𝑢−𝑣 ∈ null 𝑇．于是𝑇(𝑢−𝑣) = 0．所以𝑇𝑢 = 𝑇𝑣．于是𝑇�的定义确实是合理的．验证𝑇�是 一个从𝑉/null 𝑇到𝑊的线性映射的过程很常规，留给读者完成． 下面的结果说明，我们可以将𝑇�看成𝑇的修改版——换了定义空间，从而变为单射．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Define 𝑇̃: 𝑉/(null 𝑇) → 𝑊 by 𝑇̃(𝑣 + null 𝑇) = 𝑇𝑣.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)．𝑇�: 𝑉/(null 𝑇) → 𝑊由下式定义： 𝑇�(𝑣 + null 𝑇) = 𝑇𝑣． 为了说明上述𝑇�的定义是合理的，假设𝑢, 𝑣 ∈ 𝑉满足𝑢 + null 𝑇 = 𝑣 + null 𝑇．由3.101，我 们有𝑢−𝑣 ∈ null 𝑇．于是𝑇(𝑢−𝑣) = 0．所以𝑇𝑢 = 𝑇𝑣．于是𝑇�的定义确实是合理的．验证𝑇�是 一个从𝑉/null 𝑇到𝑊的线性映射的过程很常规，留给读者完成． 下面的结果说明，我们可以将𝑇�看成𝑇的修改版——换了定义空间，从而变为单射．"
    },
    {
      "id": "3.107",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.107",
      "name_en": "null space and range of 𝑇̃",
      "name_zh": "𝑇�的零空间和值域",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) 𝑇̃ ∘ 𝜋 = 𝑇, where 𝜋 is the quotient map of 𝑉 onto 𝑉/(null 𝑇); (b) 𝑇̃ is injective; (c) range 𝑇̃ = range 𝑇; (d) 𝑉/(null 𝑇) and range 𝑇 are isomorphic vector spaces.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)．那么 (a) 𝑇�◦ 𝜋 = 𝑇，其中 𝜋是将𝑉映成𝑉/(null 𝑇) 的商映射； (b) 𝑇�是单射； (c) range 𝑇� = range 𝑇； (d) 𝑉/(null 𝑇) 和 range 𝑇是同构的向量空间．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) 𝑇̃ ∘ 𝜋 = 𝑇, where 𝜋 is the quotient map of 𝑉 onto 𝑉/(null 𝑇); (b) 𝑇̃ is injective; (c) range 𝑇̃ = range 𝑇; (d) 𝑉/(null 𝑇) and range 𝑇 are isomorphic vector spaces.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)．那么 (a) 𝑇�◦ 𝜋 = 𝑇，其中 𝜋是将𝑉映成𝑉/(null 𝑇) 的商映射； (b) 𝑇�是单射； (c) range 𝑇� = range 𝑇； (d) 𝑉/(null 𝑇) 和 range 𝑇是同构的向量空间．"
    },
    {
      "id": "3.108",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.108",
      "name_en": "linear functional",
      "name_zh": "线性泛函（linear functional）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear functional on 𝑉 is a linear map from 𝑉 to 𝐅. In other words, a linear functional is an element of ℒ(𝑉, 𝐅).",
          "zh": "𝑉上的线性泛函是从𝑉到 F 的线性映射．换言之，线性泛函是 L(𝑉, F) 的元素．"
        }
      ],
      "note": null,
      "statement_en": "A linear functional on 𝑉 is a linear map from 𝑉 to 𝐅. In other words, a linear functional is an element of ℒ(𝑉, 𝐅).",
      "statement_zh": "𝑉上的线性泛函是从𝑉到 F 的线性映射．换言之，线性泛函是 L(𝑉, F) 的元素．"
    },
    {
      "id": "3.110",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.110",
      "name_en": "dual space, 𝑉^′",
      "name_zh": "对偶空间（dual space）、𝑉^′",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The dual space of 𝑉, denoted by 𝑉^′, is the vector space of all linear functionals on 𝑉. In other words, 𝑉^′ = ℒ(𝑉, 𝐅).",
          "zh": "𝑉的对偶空间记作𝑉^′，是𝑉上全体线性泛函所构成的向量空间．换言之，𝑉^′ = L(𝑉, F)．"
        }
      ],
      "note": null,
      "statement_en": "The dual space of 𝑉, denoted by 𝑉^′, is the vector space of all linear functionals on 𝑉. In other words, 𝑉^′ = ℒ(𝑉, 𝐅).",
      "statement_zh": "𝑉的对偶空间记作𝑉^′，是𝑉上全体线性泛函所构成的向量空间．换言之，𝑉^′ = L(𝑉, F)．"
    },
    {
      "id": "3.111",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.111",
      "name_en": "dim 𝑉^′ = dim 𝑉",
      "name_zh": "dim 𝑉^′ = dim 𝑉",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. Then 𝑉^′ is also finite-dimensional and",
          "zh": "假设𝑉是有限维的．那么𝑉^′也是有限维的，且"
        },
        {
          "t": "formula",
          "en": "dim 𝑉^′ = dim 𝑉.",
          "zh": "dim 𝑉^′ = dim 𝑉．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then 𝑉^′ is also finite-dimensional and dim 𝑉^′ = dim 𝑉.",
      "statement_zh": "假设𝑉是有限维的．那么𝑉^′也是有限维的，且 dim 𝑉^′ = dim 𝑉．"
    },
    {
      "id": "3.112",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.112",
      "name_en": "dual basis",
      "name_zh": "对偶基（dual basis）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉, then the dual basis of 𝑣_1, …, 𝑣_𝑛 is the list 𝜑_1, …, 𝜑_𝑛 of elements of 𝑉^′, where each 𝜑_𝑗 is the linear functional on 𝑉 such that",
          "zh": "如果 𝑣_1,..., 𝑣_𝑛是𝑉的基，那么 𝑣_1,..., 𝑣_𝑛的对偶基是𝑉^′中的元素 𝜑_1,..., 𝜑_𝑛所构成的 组，其中各 𝜑_𝑗是𝑉上满足下式的线性泛函："
        },
        {
          "t": "formula",
          "en": "⎧{1 if 𝑘 = 𝑗 𝜑_𝑗(𝑣_𝑘) = ⎨{⎩ 0 if 𝑘 ≠ 𝑗.",
          "zh": " 1 若 𝑘 = 𝑗 𝜑_𝑗(𝑣_𝑘) =  0 若 𝑘 ≠ 𝑗.",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "If 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉, then the dual basis of 𝑣_1, …, 𝑣_𝑛 is the list 𝜑_1, …, 𝜑_𝑛 of elements of 𝑉^′, where each 𝜑_𝑗 is the linear functional on 𝑉 such that ⎧{1 if 𝑘 = 𝑗 𝜑_𝑗(𝑣_𝑘) = ⎨{⎩ 0 if 𝑘 ≠ 𝑗.",
      "statement_zh": "如果 𝑣_1,..., 𝑣_𝑛是𝑉的基，那么 𝑣_1,..., 𝑣_𝑛的对偶基是𝑉^′中的元素 𝜑_1,..., 𝜑_𝑛所构成的 组，其中各 𝜑_𝑗是𝑉上满足下式的线性泛函：  1 若 𝑘 = 𝑗 𝜑_𝑗(𝑣_𝑘) =  0 若 𝑘 ≠ 𝑗."
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
          "en": "Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝜑_1, …, 𝜑_𝑛 is the dual basis. Then",
          "zh": "假设𝑣_1,..., 𝑣_𝑛是𝑉的基，且 𝜑_1,..., 𝜑_𝑛是其对偶基．那么对每个𝑣 ∈ 𝑉，有"
        },
        {
          "t": "formula",
          "en": "𝑣 = 𝜑_1(𝑣)𝑣_1 + ⋯ + 𝜑_𝑛(𝑣)𝑣_𝑛",
          "zh": "𝑣 = 𝜑_1(𝑣)𝑣_1 + · · · + 𝜑_𝑛(𝑣)𝑣_𝑛 ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for each 𝑣 ∈ 𝑉.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 and 𝜑_1, …, 𝜑_𝑛 is the dual basis. Then 𝑣 = 𝜑_1(𝑣)𝑣_1 + ⋯ + 𝜑_𝑛(𝑣)𝑣_𝑛 for each 𝑣 ∈ 𝑉.",
      "statement_zh": "假设𝑣_1,..., 𝑣_𝑛是𝑉的基，且 𝜑_1,..., 𝜑_𝑛是其对偶基．那么对每个𝑣 ∈ 𝑉，有 𝑣 = 𝜑_1(𝑣)𝑣_1 + · · · + 𝜑_𝑛(𝑣)𝑣_𝑛 ．"
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
          "en": "Suppose 𝑉 is finite-dimensional. Then the dual basis of a basis of 𝑉 is a basis of 𝑉^′.",
          "zh": "假设𝑉是有限维的．那么𝑉的基的对偶基是𝑉^′的基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then the dual basis of a basis of 𝑉 is a basis of 𝑉^′.",
      "statement_zh": "假设𝑉是有限维的．那么𝑉的基的对偶基是𝑉^′的基．"
    },
    {
      "id": "3.118",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.118",
      "name_en": "dual map, 𝑇^′",
      "name_zh": "对偶映射（dual map）、𝑇^′",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). The dual map of 𝑇 is the linear map 𝑇^′ ∈ ℒ(𝑊^′, 𝑉^′) defined for each 𝜑 ∈ 𝑊^′ by",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)．𝑇的对偶映射是由下式定义的线性映射𝑇^′ ∈ L(𝑊^′,𝑉^′)：对每个𝜑 ∈ 𝑊^′，"
        },
        {
          "t": "formula",
          "en": "𝑇^′(𝜑) = 𝜑 ∘ 𝑇.",
          "zh": "𝑇^′(𝜑) = 𝜑 ◦ 𝑇．",
          "eq": null
        }
      ],
      "note": {
        "en": "",
        "zh": "如果𝑇 ∈ L(𝑉,𝑊) 且 𝜑 ∈ 𝑊^′，那么按上 述定义，𝑇^′(𝜑)就是𝜑和𝑇这两个线性映射的 复合．于是𝑇^′(𝜑) 的确是从𝑉到 F 的线性映 射；换言之，𝑇^′(𝜑) ∈ 𝑉^′ ． 下面两点结论表明𝑇^′是从𝑊^′到𝑉^′的线性映射： 若 𝜑, 𝜓 ∈ 𝑊^′，那么 𝑇^′(𝜑 + 𝜓) =(𝜑 + 𝜓) ◦ 𝑇 = 𝜑 ◦ 𝑇 + 𝜓 ◦ 𝑇 = 𝑇^′(𝜑) + 𝑇^′(𝜓)． 若𝜆 ∈ F 且 𝜑 ∈ 𝑊^′，那么 𝑇^′(𝜆𝜑) =(𝜆𝜑) ◦ 𝑇 = 𝜆(𝜑 ◦ 𝑇) = 𝜆𝑇^′(𝜑)． 下例中撇号（^′ ）有两种不相关的含义：在 𝐷^′中用于表示线性映射 𝐷的对偶，在 𝑝^′中则 用于表示多项式 𝑝的导数．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). The dual map of 𝑇 is the linear map 𝑇^′ ∈ ℒ(𝑊^′, 𝑉^′) defined for each 𝜑 ∈ 𝑊^′ by 𝑇^′(𝜑) = 𝜑 ∘ 𝑇.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)．𝑇的对偶映射是由下式定义的线性映射𝑇^′ ∈ L(𝑊^′,𝑉^′)：对每个𝜑 ∈ 𝑊^′， 𝑇^′(𝜑) = 𝜑 ◦ 𝑇． 如果𝑇 ∈ L(𝑉,𝑊) 且 𝜑 ∈ 𝑊^′，那么按上 述定义，𝑇^′(𝜑)就是𝜑和𝑇这两个线性映射的 复合．于是𝑇^′(𝜑) 的确是从𝑉到 F 的线性映 射；换言之，𝑇^′(𝜑) ∈ 𝑉^′ ． 下面两点结论表明𝑇^′是从𝑊^′到𝑉^′的线性映射： 若 𝜑, 𝜓 ∈ 𝑊^′，那么 𝑇^′(𝜑 + 𝜓) =(𝜑 + 𝜓) ◦ 𝑇 = 𝜑 ◦ 𝑇 + 𝜓 ◦ 𝑇 = 𝑇^′(𝜑) + 𝑇^′(𝜓)． 若𝜆 ∈ F 且 𝜑 ∈ 𝑊^′，那么 𝑇^′(𝜆𝜑) =(𝜆𝜑) ◦ 𝑇 = 𝜆(𝜑 ◦ 𝑇) = 𝜆𝑇^′(𝜑)． 下例中撇号（^′ ）有两种不相关的含义：在 𝐷^′中用于表示线性映射 𝐷的对偶，在 𝑝^′中则 用于表示多项式 𝑝的导数．"
    },
    {
      "id": "3.120",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.120",
      "name_en": "algebraic properties of dual maps",
      "name_zh": "对偶映射的代数性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a)(𝑆 + 𝑇)^′ = 𝑆^′ + 𝑇^′ for all 𝑆 ∈ ℒ(𝑉, 𝑊); (b)(𝜆𝑇)^′ = 𝜆𝑇^′ for all 𝜆 ∈ 𝐅; (c)(𝑆𝑇)^′ = 𝑇^′ 𝑆^′ for all 𝑆 ∈ ℒ(𝑊, 𝑈).",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)．那么 (a) 对所有 𝑆 ∈ L(𝑉,𝑊)，均有(𝑆 + 𝑇)^′ = 𝑆^′ + 𝑇^′； (b) 对所有𝜆 ∈ F，均有(𝜆𝑇)^′ = 𝜆𝑇^′； (c) 对所有 𝑆 ∈ L(𝑊,𝑈)，均有(𝑆𝑇)^′ = 𝑇^′ 𝑆^′ ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a)(𝑆 + 𝑇)^′ = 𝑆^′ + 𝑇^′ for all 𝑆 ∈ ℒ(𝑉, 𝑊); (b)(𝜆𝑇)^′ = 𝜆𝑇^′ for all 𝜆 ∈ 𝐅; (c)(𝑆𝑇)^′ = 𝑇^′ 𝑆^′ for all 𝑆 ∈ ℒ(𝑊, 𝑈).",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)．那么 (a) 对所有 𝑆 ∈ L(𝑉,𝑊)，均有(𝑆 + 𝑇)^′ = 𝑆^′ + 𝑇^′； (b) 对所有𝜆 ∈ F，均有(𝜆𝑇)^′ = 𝜆𝑇^′； (c) 对所有 𝑆 ∈ L(𝑊,𝑈)，均有(𝑆𝑇)^′ = 𝑇^′ 𝑆^′ ．"
    },
    {
      "id": "3.121",
      "kind": "definition",
      "chapter": "ch3",
      "number": "3.121",
      "name_en": "annihilator, 𝑈^0",
      "name_zh": "零化子（annihilator）、𝑈^0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑈 ⊆ 𝑉, the annihilator of 𝑈, denoted by 𝑈^0, is defined by 𝑈^0 ={𝜑 ∈ 𝑉^′ : 𝜑(𝑢) = 0 for all 𝑢 ∈ 𝑈}.",
          "zh": "对𝑈 ⊆ 𝑉，𝑈的零化子，记作𝑈^0，定义为"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑈^0 ={𝜑 ∈ 𝑉^′: 对所有𝑢 ∈ 𝑈, 𝜑(𝑢) = 0}．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "For 𝑈 ⊆ 𝑉, the annihilator of 𝑈, denoted by 𝑈^0, is defined by 𝑈^0 ={𝜑 ∈ 𝑉^′ : 𝜑(𝑢) = 0 for all 𝑢 ∈ 𝑈}.",
      "statement_zh": "对𝑈 ⊆ 𝑉，𝑈的零化子，记作𝑈^0，定义为 𝑈^0 ={𝜑 ∈ 𝑉^′: 对所有𝑢 ∈ 𝑈, 𝜑(𝑢) = 0}．"
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
          "en": "Suppose 𝑈 ⊆ 𝑉. Then 𝑈^0 is a subspace of 𝑉^′.",
          "zh": "设𝑈 ⊆ 𝑉．那么𝑈^0是𝑉^′的子空间．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 ⊆ 𝑉. Then 𝑈^0 is a subspace of 𝑉^′.",
      "statement_zh": "设𝑈 ⊆ 𝑉．那么𝑈^0是𝑉^′的子空间．"
    },
    {
      "id": "3.125",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.125",
      "name_en": "dimension of the annihilator",
      "name_zh": "零化子的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then",
          "zh": "设𝑉是有限维的且𝑈是𝑉的子空间．那么"
        },
        {
          "t": "formula",
          "en": "dim 𝑈^0 = dim 𝑉−dim 𝑈.",
          "zh": "dim 𝑈^0 = dim 𝑉−dim 𝑈．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim 𝑈^0 = dim 𝑉−dim 𝑈.",
      "statement_zh": "设𝑉是有限维的且𝑈是𝑉的子空间．那么 dim 𝑈^0 = dim 𝑉−dim 𝑈．"
    },
    {
      "id": "3.127",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.127",
      "name_en": "condition for the annihilator to equal{0} or the whole space",
      "name_zh": "零化子等于{0} 或整个空间的条件",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then (a) 𝑈^0 ={0} ⟺ 𝑈 = 𝑉; (b) 𝑈^0 = 𝑉^′ ⟺ 𝑈 ={0}.",
          "zh": "设𝑉是有限维的，且𝑈是𝑉的子空间．那么 (a) 𝑈^0 ={0} ⇐⇒ 𝑈 = 𝑉； (b) 𝑈^0 = 𝑉^′ ⇐⇒ 𝑈 ={0}．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then (a) 𝑈^0 ={0} ⟺ 𝑈 = 𝑉; (b) 𝑈^0 = 𝑉^′ ⟺ 𝑈 ={0}.",
      "statement_zh": "设𝑉是有限维的，且𝑈是𝑉的子空间．那么 (a) 𝑈^0 ={0} ⇐⇒ 𝑈 = 𝑉； (b) 𝑈^0 = 𝑉^′ ⇐⇒ 𝑈 ={0}．"
    },
    {
      "id": "3.128",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.128",
      "name_en": "the null space of 𝑇^′",
      "name_zh": "𝑇^′的零空间",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) null 𝑇^′ =(range 𝑇)^0; (b) dim null 𝑇^′ = dim null 𝑇 + dim 𝑊−dim 𝑉.",
          "zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 (a) null 𝑇^′ =(range 𝑇)^0； (b) dim null 𝑇^′ = dim null 𝑇 + dim 𝑊−dim 𝑉．"
        }
      ],
      "note": {
        "en": "",
        "zh": "对比一下恒等映射𝐼: 𝑈 → 𝑈, 𝐼(𝑢) = 𝑢，不难看出两者的联系与区别：都将定义空间中的元素映到同一元素，但是目标空间不同．"
      },
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) null 𝑇^′ =(range 𝑇)^0; (b) dim null 𝑇^′ = dim null 𝑇 + dim 𝑊−dim 𝑉.",
      "statement_zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 (a) null 𝑇^′ =(range 𝑇)^0； (b) dim null 𝑇^′ = dim null 𝑇 + dim 𝑊−dim 𝑉． 对比一下恒等映射𝐼: 𝑈 → 𝑈, 𝐼(𝑢) = 𝑢，不难看出两者的联系与区别：都将定义空间中的元素映到同一元素，但是目标空间不同．"
    },
    {
      "id": "3.129",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.129",
      "name_en": "𝑇 surjective is equivalent to 𝑇^′ injective",
      "name_zh": "𝑇是满射等价于𝑇^′是单射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇 is surjective ⟺ 𝑇^′ is injective.",
          "zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑇是满射 ⇐⇒ 𝑇^′是单射．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇 is surjective ⟺ 𝑇^′ is injective.",
      "statement_zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 𝑇是满射 ⇐⇒ 𝑇^′是单射．"
    },
    {
      "id": "3.130",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.130",
      "name_en": "the range of 𝑇^′",
      "name_zh": "𝑇^′的值域",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) dim range 𝑇^′ = dim range 𝑇; (b) range 𝑇^′ =(null 𝑇)^0.",
          "zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 (a) dim range 𝑇^′ = dim range 𝑇； (b) range 𝑇^′ =(null 𝑇)^0 ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) dim range 𝑇^′ = dim range 𝑇; (b) range 𝑇^′ =(null 𝑇)^0.",
      "statement_zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 (a) dim range 𝑇^′ = dim range 𝑇； (b) range 𝑇^′ =(null 𝑇)^0 ．"
    },
    {
      "id": "3.131",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.131",
      "name_en": "𝑇 injective is equivalent to 𝑇^′ surjective",
      "name_zh": "𝑇是单射等价于𝑇^′是满射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇 is injective ⟺ 𝑇^′ is surjective.",
          "zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑇是单射 ⇐⇒ 𝑇^′是满射．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇 is injective ⟺ 𝑇^′ is surjective.",
      "statement_zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 𝑇是单射 ⇐⇒ 𝑇^′是满射．"
    },
    {
      "id": "3.132",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.132",
      "name_en": "matrix of 𝑇^′ is transpose of matrix of 𝑇",
      "name_zh": "𝑇^′的矩阵是𝑇的矩阵的转置",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then",
          "zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么"
        },
        {
          "t": "formula",
          "en": "ℳ(𝑇^′) =(ℳ(𝑇))^t.",
          "zh": "_′� �_t M(𝑇) = M(𝑇) ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then ℳ(𝑇^′) =(ℳ(𝑇))^t.",
      "statement_zh": "设𝑉和𝑊是有限维的且𝑇 ∈ L(𝑉,𝑊)．那么 _′� �_t M(𝑇) = M(𝑇) ．"
    },
    {
      "id": "3.133",
      "kind": "result",
      "chapter": "ch3",
      "number": "3.133",
      "name_en": "column rank equals row rank",
      "name_zh": "列秩等于行秩",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 ∈ 𝐅^{𝑚,𝑛}. Then the column rank of 𝐴 equals the row rank of 𝐴.",
          "zh": "设 𝐴 ∈ F^{𝑚,𝑛} ．那么 𝐴的列秩等于 𝐴的行秩．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 ∈ 𝐅^{𝑚,𝑛}. Then the column rank of 𝐴 equals the row rank of 𝐴.",
      "statement_zh": "设 𝐴 ∈ F^{𝑚,𝑛} ．那么 𝐴的列秩等于 𝐴的行秩．"
    },
    {
      "id": "4.1",
      "kind": "definition",
      "chapter": "ch4",
      "number": "4.1",
      "name_en": "real part, Re 𝑧, imaginary part, Im 𝑧",
      "name_zh": "实部（real part）、Re 𝑧，虚部（imaginary part）、Im 𝑧",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑧 = 𝑎 + 𝑏𝑖, where 𝑎 and 𝑏 are real numbers.",
          "zh": "设 𝑧 = 𝑎 + 𝑏 i，其中𝑎和 𝑏为实数． 𝑧的实部，记作 Re 𝑧，定义为 Re 𝑧 = 𝑎； 𝑧的虚部，记作 Im 𝑧，定义为 Im 𝑧 = 𝑏．"
        },
        {
          "t": "bullet",
          "en": "The real part of 𝑧, denoted by Re 𝑧, is defined by Re 𝑧 = 𝑎.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "The imaginary part of 𝑧, denoted by Im 𝑧, is defined by Im 𝑧 = 𝑏.",
          "zh": ""
        }
      ],
      "note": {
        "en": "Thus for every complex number 𝑧, we have 𝑧 = Re 𝑧 +(Im 𝑧)𝑖.",
        "zh": "于是，对于每个复数 𝑧，我们有 𝑧 = Re 𝑧 +(Im 𝑧)i．"
      },
      "statement_en": "Suppose 𝑧 = 𝑎 + 𝑏𝑖, where 𝑎 and 𝑏 are real numbers. The real part of 𝑧, denoted by Re 𝑧, is defined by Re 𝑧 = 𝑎. The imaginary part of 𝑧, denoted by Im 𝑧, is defined by Im 𝑧 = 𝑏. Thus for every complex number 𝑧, we have 𝑧 = Re 𝑧 +(Im 𝑧)𝑖.",
      "statement_zh": "设 𝑧 = 𝑎 + 𝑏 i，其中𝑎和 𝑏为实数． 𝑧的实部，记作 Re 𝑧，定义为 Re 𝑧 = 𝑎； 𝑧的虚部，记作 Im 𝑧，定义为 Im 𝑧 = 𝑏． 于是，对于每个复数 𝑧，我们有 𝑧 = Re 𝑧 +(Im 𝑧)i．"
    },
    {
      "id": "4.2",
      "kind": "definition",
      "chapter": "ch4",
      "number": "4.2",
      "name_en": "complex conjugate, 𝑧, absolute value, |𝑧",
      "name_zh": "复共轭（complex conjugate）、𝑧，绝对值（absolute value）、|𝑧",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑧 ∈ 𝐂.",
          "zh": "设 𝑧 ∈ C． 𝑧 ∈ C 的复共轭，记作 𝑧，定义为"
        },
        {
          "t": "bullet",
          "en": "The complex conjugate of 𝑧 ∈ 𝐂, denoted by 𝑧, is defined by",
          "zh": "𝑧 = Re 𝑧−(Im 𝑧)i．"
        },
        {
          "t": "formula",
          "en": "𝑧 = Re 𝑧−(Im 𝑧)𝑖.",
          "zh": "复数 𝑧的绝对值，记作 |𝑧|，定义为 �",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "The absolute value of a complex number 𝑧, denoted by |𝑧|, is defined by",
          "zh": "𝑧| =(Re 𝑧)^2 +(Im 𝑧)^2 ．"
        },
        {
          "t": "formula",
          "en": "𝑧| = √(Re 𝑧)^2 +(Im 𝑧)^2.",
          "zh": "",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑧 ∈ 𝐂. The complex conjugate of 𝑧 ∈ 𝐂, denoted by 𝑧, is defined by 𝑧 = Re 𝑧−(Im 𝑧)𝑖. The absolute value of a complex number 𝑧, denoted by |𝑧|, is defined by 𝑧| = √(Re 𝑧)^2 +(Im 𝑧)^2.",
      "statement_zh": "设 𝑧 ∈ C． 𝑧 ∈ C 的复共轭，记作 𝑧，定义为 𝑧 = Re 𝑧−(Im 𝑧)i． 复数 𝑧的绝对值，记作 |𝑧|，定义为 � 𝑧| =(Re 𝑧)^2 +(Im 𝑧)^2 ．"
    },
    {
      "id": "4.4",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.4",
      "name_en": "properties of complex numbers",
      "name_zh": "复数的性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑤, 𝑧 ∈ 𝐂. Then the following equalities and inequalities hold.",
          "zh": "设𝑤, 𝑧 ∈ C．那么有下面等式和不等式成立． 𝑧与 𝑧之和（sum of 𝑧 and 𝑧）"
        },
        {
          "t": "bullet",
          "en": "Sum of 𝑧 and 𝑧. 𝑧 + 𝑧 = 2 Re 𝑧.",
          "zh": "𝑧 + 𝑧 = 2 Re 𝑧."
        },
        {
          "t": "bullet",
          "en": "Difference of 𝑧 and 𝑧. 𝑧−𝑧 = 2(Im 𝑧)𝑖.",
          "zh": "𝑧与 𝑧之差（difference of 𝑧 and 𝑧）"
        },
        {
          "t": "bullet",
          "en": "Product of 𝑧 and 𝑧. 𝑧𝑧 = |𝑧|^2. additivity and multiplicativity of complex conjugate 𝑤 + 𝑧 = 𝑤 + 𝑧 and 𝑤𝑧 = 𝑤 𝑧.",
          "zh": "𝑧−𝑧 = 2(Im 𝑧)i."
        },
        {
          "t": "bullet",
          "en": "Double complex conjugate. 𝑧 = 𝑧. real and imaginary parts are bounded by |𝑧| | Re 𝑧| ≤ |𝑧| and | Im 𝑧| ≤ |𝑧|.",
          "zh": "𝑧与 𝑧之积（product of 𝑧 and 𝑧）"
        },
        {
          "t": "bullet",
          "en": "Absolute value of the complex conjugate. ∣𝑧∣ = |𝑧|.",
          "zh": "𝑧𝑧 = |𝑧|^2."
        },
        {
          "t": "bullet",
          "en": "Multiplicativity of absolute value. 𝑤𝑧| = |𝑤| |𝑧|.",
          "zh": "复共轭的可加性和可乘性（additivity and multiplicativity of complex conjugate）"
        },
        {
          "t": "bullet",
          "en": "Triangle inequality. 𝑤 + 𝑧| ≤ |𝑤| + |𝑧|.",
          "zh": "𝑤 + 𝑧 = 𝑤 + 𝑧且𝑤𝑧 = 𝑤 𝑧．"
        },
        {
          "t": "bullet",
          "en": "",
          "zh": "复共轭的复共轭（double complex conjugate）"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑧 = 𝑧.",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "实部和虚部以 |𝑧| 为界（real and imaginary parts are bounded by |𝑧|） | Re 𝑧| ≤ |𝑧| 且 | Im 𝑧| ≤ |𝑧|． 复共轭的绝对值（absolute value of the complex conjugate）"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑧| = |𝑧|.",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "绝对值的可乘性（multiplicativity of absolute value）"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑤𝑧| = |𝑤||𝑧|.",
          "eq": null
        },
        {
          "t": "bullet",
          "en": "",
          "zh": "三角不等式（triangle inequality）"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑤 + 𝑧| ≤ |𝑤| + |𝑧|.",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑤, 𝑧 ∈ 𝐂. Then the following equalities and inequalities hold. Sum of 𝑧 and 𝑧. 𝑧 + 𝑧 = 2 Re 𝑧. Difference of 𝑧 and 𝑧. 𝑧−𝑧 = 2(Im 𝑧)𝑖. Product of 𝑧 and 𝑧. 𝑧𝑧 = |𝑧|^2. additivity and multiplicativity of complex conjugate 𝑤 + 𝑧 = 𝑤 + 𝑧 and 𝑤𝑧 = 𝑤 𝑧. Double complex conjugate. 𝑧 = 𝑧. real and imaginary parts are bounded by |𝑧| | Re 𝑧| ≤ |𝑧| and | Im 𝑧| ≤ |𝑧|. Absolute value of the complex conjugate. ∣𝑧∣ = |𝑧|. Multiplicativity of absolute value. 𝑤𝑧| = |𝑤| |𝑧|. Triangle inequality. 𝑤 + 𝑧| ≤ |𝑤| + |𝑧|.",
      "statement_zh": "设𝑤, 𝑧 ∈ C．那么有下面等式和不等式成立． 𝑧与 𝑧之和（sum of 𝑧 and 𝑧） 𝑧 + 𝑧 = 2 Re 𝑧. 𝑧与 𝑧之差（difference of 𝑧 and 𝑧） 𝑧−𝑧 = 2(Im 𝑧)i. 𝑧与 𝑧之积（product of 𝑧 and 𝑧） 𝑧𝑧 = |𝑧|^2. 复共轭的可加性和可乘性（additivity and multiplicativity of complex conjugate） 𝑤 + 𝑧 = 𝑤 + 𝑧且𝑤𝑧 = 𝑤 𝑧． 复共轭的复共轭（double complex conjugate） 𝑧 = 𝑧. 实部和虚部以 |𝑧| 为界（real and imaginary parts are bounded by |𝑧|） | Re 𝑧| ≤ |𝑧| 且 | Im 𝑧| ≤ |𝑧|． 复共轭的绝对值（absolute value of the complex conjugate） 𝑧| = |𝑧|. 绝对值的可乘性（multiplicativity of absolute value） 𝑤𝑧| = |𝑤||𝑧|. 三角不等式（triangle inequality） 𝑤 + 𝑧| ≤ |𝑤| + |𝑧|."
    },
    {
      "id": "4.5",
      "kind": "definition",
      "chapter": "ch4",
      "number": "4.5",
      "name_en": "zero of a polynomial",
      "name_zh": "多项式的零点（zero of a polynomial）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A number 𝜆 ∈ 𝐅 is called a zero(or root) of a polynomial 𝑝 ∈ 𝒫(𝐅) if",
          "zh": "称一个数𝜆 ∈ F 为多项式 𝑝 ∈ P(F) 的零点【或根（root）】，若"
        },
        {
          "t": "formula",
          "en": "𝑝(𝜆) = 0.",
          "zh": "𝑝(𝜆) = 0．",
          "eq": null
        }
      ],
      "note": {
        "en": "The next result is the key tool that we will use to show that the degree of a polynomial is unique.",
        "zh": "下面结论将成为我们证明多项式的次数唯一性时所用的关键工具．"
      },
      "statement_en": "A number 𝜆 ∈ 𝐅 is called a zero(or root) of a polynomial 𝑝 ∈ 𝒫(𝐅) if 𝑝(𝜆) = 0. The next result is the key tool that we will use to show that the degree of a polynomial is unique.",
      "statement_zh": "称一个数𝜆 ∈ F 为多项式 𝑝 ∈ P(F) 的零点【或根（root）】，若 𝑝(𝜆) = 0． 下面结论将成为我们证明多项式的次数唯一性时所用的关键工具．"
    },
    {
      "id": "4.6",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.6",
      "name_en": "each zero of a polynomial corresponds to a degree-one factor",
      "name_zh": "多项式的每个零点都对应一个一次因式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Suppose 𝜆 ∈ 𝐅. Then 𝑝(𝜆) = 0 if and only if there exists a polynomial 𝑞 ∈ 𝒫(𝐅) of degree 𝑚−1 such that",
          "zh": "设𝑚是正整数且 𝑝 ∈ P(F) 是次数为𝑚的多项式．设𝜆 ∈ F．那么 𝑝(𝜆) = 0当且仅当存 在一个次数为𝑚−1的多项式𝑞 ∈ P(F) 使得对每个 𝑧 ∈ F 都有"
        },
        {
          "t": "formula",
          "en": "𝑝(𝑧) =(𝑧−𝜆)𝑞(𝑧)",
          "zh": "𝑝(𝑧) =(𝑧−𝜆)𝑞(𝑧)．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for every 𝑧 ∈ 𝐅.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Suppose 𝜆 ∈ 𝐅. Then 𝑝(𝜆) = 0 if and only if there exists a polynomial 𝑞 ∈ 𝒫(𝐅) of degree 𝑚−1 such that 𝑝(𝑧) =(𝑧−𝜆)𝑞(𝑧) for every 𝑧 ∈ 𝐅.",
      "statement_zh": "设𝑚是正整数且 𝑝 ∈ P(F) 是次数为𝑚的多项式．设𝜆 ∈ F．那么 𝑝(𝜆) = 0当且仅当存 在一个次数为𝑚−1的多项式𝑞 ∈ P(F) 使得对每个 𝑧 ∈ F 都有 𝑝(𝑧) =(𝑧−𝜆)𝑞(𝑧)．"
    },
    {
      "id": "4.8",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.8",
      "name_en": "degree 𝑚 implies at most 𝑚 zeros",
      "name_zh": "次数为𝑚表明最多有𝑚个零点",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Then 𝑝 has at most 𝑚 zeros in 𝐅.",
          "zh": "假定𝑚是正整数且 𝑝 ∈ P(F) 是次数为𝑚的多项式．那么 𝑝在 F 中最多有𝑚个零点．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer and 𝑝 ∈ 𝒫(𝐅) is a polynomial of degree 𝑚. Then 𝑝 has at most 𝑚 zeros in 𝐅.",
      "statement_zh": "假定𝑚是正整数且 𝑝 ∈ P(F) 是次数为𝑚的多项式．那么 𝑝在 F 中最多有𝑚个零点．"
    },
    {
      "id": "4.9",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.9",
      "name_en": "division algorithm for polynomials",
      "name_zh": "多项式的带余除法（division algorithm for polynomials）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑝, 𝑠 ∈ 𝒫(𝐅), with 𝑠 ≠ 0. Then there exist unique polynomials 𝑞, 𝑟 ∈ 𝒫(𝐅) such that",
          "zh": "设 𝑝, 𝑠 ∈ P(F)，其中 𝑠 ≠ 0．那么存在唯一的多项式𝑞, 𝑟 ∈ P(F) 满足"
        },
        {
          "t": "formula",
          "en": "𝑝 = 𝑠𝑞 + 𝑟",
          "zh": "𝑝 = 𝑠𝑞 + 𝑟",
          "eq": null
        },
        {
          "t": "p",
          "en": "and deg 𝑟 < deg 𝑠.",
          "zh": "且 deg 𝑟 < deg 𝑠．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑝, 𝑠 ∈ 𝒫(𝐅), with 𝑠 ≠ 0. Then there exist unique polynomials 𝑞, 𝑟 ∈ 𝒫(𝐅) such that 𝑝 = 𝑠𝑞 + 𝑟 and deg 𝑟 < deg 𝑠.",
      "statement_zh": "设 𝑝, 𝑠 ∈ P(F)，其中 𝑠 ≠ 0．那么存在唯一的多项式𝑞, 𝑟 ∈ P(F) 满足 𝑝 = 𝑠𝑞 + 𝑟 且 deg 𝑟 < deg 𝑠．"
    },
    {
      "id": "4.12",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.12",
      "name_en": "fundamental theorem of algebra, first version",
      "name_zh": "代数基本定理，版本一（fundamental theorem of algebra, first version）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every nonconstant polynomial with complex coefficients has a zero in 𝐂.",
          "zh": "每个不是常值的复系数多项式都在 C 中有零点．"
        }
      ],
      "note": null,
      "statement_en": "Every nonconstant polynomial with complex coefficients has a zero in 𝐂.",
      "statement_zh": "每个不是常值的复系数多项式都在 C 中有零点．"
    },
    {
      "id": "4.13",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.13",
      "name_en": "fundamental theorem of algebra, second version",
      "name_zh": "代数基本定理，版本二（fundamental theorem of algebra, second version）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑝 ∈ 𝒫(𝐂) is a nonconstant polynomial, then 𝑝 has a unique factorization (except for the order of the factors) of the form",
          "zh": "如果 𝑝 ∈ P(C) 是不恒为常数的多项式，那么 𝑝可被唯一分解为（不计因式的顺序）"
        },
        {
          "t": "formula",
          "en": "𝑝(𝑧) = 𝑐(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚)",
          "zh": "𝑝(𝑧) = 𝑐(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑐, 𝜆_1, …, 𝜆_𝑚 ∈ 𝐂.",
          "zh": "其中𝑐, 𝜆_1,..., 𝜆_𝑚 ∈ C．"
        }
      ],
      "note": null,
      "statement_en": "If 𝑝 ∈ 𝒫(𝐂) is a nonconstant polynomial, then 𝑝 has a unique factorization (except for the order of the factors) of the form 𝑝(𝑧) = 𝑐(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) where 𝑐, 𝜆_1, …, 𝜆_𝑚 ∈ 𝐂.",
      "statement_zh": "如果 𝑝 ∈ P(C) 是不恒为常数的多项式，那么 𝑝可被唯一分解为（不计因式的顺序） 𝑝(𝑧) = 𝑐(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚) 其中𝑐, 𝜆_1,..., 𝜆_𝑚 ∈ C．"
    },
    {
      "id": "4.14",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.14",
      "name_en": "polynomials with real coefficients have nonreal zeros in pairs",
      "name_zh": "实系数多项式的非实数零点成对出现",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑝 ∈ 𝒫(𝐂) is a polynomial with real coefficients. If 𝜆 ∈ 𝐂 is a zero of 𝑝, then so is 𝜆.",
          "zh": "设 𝑝 ∈ P(C) 为实系数多项式．若𝜆 ∈ C 是 𝑝的零点，那么𝜆也是 𝑝的零点．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑝 ∈ 𝒫(𝐂) is a polynomial with real coefficients. If 𝜆 ∈ 𝐂 is a zero of 𝑝, then so is 𝜆.",
      "statement_zh": "设 𝑝 ∈ P(C) 为实系数多项式．若𝜆 ∈ C 是 𝑝的零点，那么𝜆也是 𝑝的零点．"
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
          "en": "Suppose 𝑏, 𝑐 ∈ 𝐑. Then there is a polynomial factorization of the form",
          "zh": "设 𝑏, 𝑐 ∈ R．那么当且仅当 𝑏^2 ≥ 4𝑐时，存在𝜆_1, 𝜆_2 ∈ R 使得形如"
        },
        {
          "t": "formula",
          "en": "𝑥^2 + 𝑏𝑥 + 𝑐 =(𝑥−𝜆_1)(𝑥−𝜆_2)",
          "zh": "𝑥^2 + 𝑏𝑥 + 𝑐 =(𝑥−𝜆_1)(𝑥−𝜆_2)",
          "eq": null
        },
        {
          "t": "p",
          "en": "with 𝜆_1, 𝜆_2 ∈ 𝐑 if and only if 𝑏^2 ≥ 4𝑐.",
          "zh": "的分解式成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑏, 𝑐 ∈ 𝐑. Then there is a polynomial factorization of the form 𝑥^2 + 𝑏𝑥 + 𝑐 =(𝑥−𝜆_1)(𝑥−𝜆_2) with 𝜆_1, 𝜆_2 ∈ 𝐑 if and only if 𝑏^2 ≥ 4𝑐.",
      "statement_zh": "设 𝑏, 𝑐 ∈ R．那么当且仅当 𝑏^2 ≥ 4𝑐时，存在𝜆_1, 𝜆_2 ∈ R 使得形如 𝑥^2 + 𝑏𝑥 + 𝑐 =(𝑥−𝜆_1)(𝑥−𝜆_2) 的分解式成立．"
    },
    {
      "id": "4.16",
      "kind": "result",
      "chapter": "ch4",
      "number": "4.16",
      "name_en": "factorization of a polynomial over 𝐑",
      "name_zh": "多项式在 R 上的分解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑝 ∈ 𝒫(𝐑) is a nonconstant polynomial. Then 𝑝 has a unique factorization(except for the order of the factors) of the form 𝑝(𝑥) = 𝑐(𝑥−𝜆_1) ⋯(𝑥−𝜆_𝑚)(𝑥^2 + 𝑏_1 𝑥 + 𝑐_1) ⋯(𝑥^2 + 𝑏_𝑀 𝑥 + 𝑐_𝑀),",
          "zh": "设 𝑝 ∈ P(R) 是一个不恒为常数的多项式．那么 𝑝可被唯一分解为（不计因式的顺序）"
        },
        {
          "t": "formula",
          "en": "2 < 4𝑐",
          "zh": "𝑝(𝑥) = 𝑐(𝑥−𝜆_1) · · ·(𝑥−𝜆_𝑚)(𝑥^2 + 𝑏_1 𝑥 + 𝑐_1) · · ·(𝑥^2 + 𝑏_𝑀 𝑥 + 𝑐_𝑀)",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑐, 𝜆_1, …, 𝜆_𝑚, 𝑏_1, …, 𝑏_𝑀, 𝑐_1, …, 𝑐_𝑀 ∈ 𝐑, with 𝑏_{𝑘𝑘} for each 𝑘.",
          "zh": "其中𝑐, 𝜆_1,..., 𝜆_𝑚, 𝑏_1,..., 𝑏_𝑀, 𝑐_1,..., 𝑐_𝑀 ∈ R 且对各 𝑘 = 1,..., 𝑀均有 𝑏^2_𝑘 < 4𝑐_𝑘 ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑝 ∈ 𝒫(𝐑) is a nonconstant polynomial. Then 𝑝 has a unique factorization(except for the order of the factors) of the form 𝑝(𝑥) = 𝑐(𝑥−𝜆_1) ⋯(𝑥−𝜆_𝑚)(𝑥^2 + 𝑏_1 𝑥 + 𝑐_1) ⋯(𝑥^2 + 𝑏_𝑀 𝑥 + 𝑐_𝑀), 2 < 4𝑐 where 𝑐, 𝜆_1, …, 𝜆_𝑚, 𝑏_1, …, 𝑏_𝑀, 𝑐_1, …, 𝑐_𝑀 ∈ 𝐑, with 𝑏_{𝑘𝑘} for each 𝑘.",
      "statement_zh": "设 𝑝 ∈ P(R) 是一个不恒为常数的多项式．那么 𝑝可被唯一分解为（不计因式的顺序） 𝑝(𝑥) = 𝑐(𝑥−𝜆_1) · · ·(𝑥−𝜆_𝑚)(𝑥^2 + 𝑏_1 𝑥 + 𝑐_1) · · ·(𝑥^2 + 𝑏_𝑀 𝑥 + 𝑐_𝑀) 其中𝑐, 𝜆_1,..., 𝜆_𝑚, 𝑏_1,..., 𝑏_𝑀, 𝑐_1,..., 𝑐_𝑀 ∈ R 且对各 𝑘 = 1,..., 𝑀均有 𝑏^2_𝑘 < 4𝑐_𝑘 ．"
    },
    {
      "id": "5.1",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.1",
      "name_en": "operator",
      "name_zh": "算子（operator）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear map from a vector space to itself is called an operator.",
          "zh": "称从一个向量空间到其本身的线性映射为算子．"
        }
      ],
      "note": {
        "en": "",
        "zh": "设𝑇 ∈ L(𝑉)．若𝑚 ≥ 2且 𝑉 = 𝑉1 ⊕ · · · ⊕ 𝑉𝑚， 其中各𝑉_𝑘都是𝑉的非零子空间，那么要理解𝑇的作用，我们只需要理解各𝑇|_{𝑉𝑘}的作用即可． 此处𝑇|_{𝑉𝑘}表示将𝑇限于更小的定义空间𝑉_𝑘上．因为𝑉_𝑘是比𝑉小的向量空间，所以讨论𝑇|_{𝑉𝑘} 要比讨论𝑇简单些． 然而，我们如果想应用算子研究中一些有用的工具（例如取算子的幂），那么就会遇到这 个问题：𝑇|_{𝑉𝑘}可能不会将𝑉_𝑘映射至它本身；换句话说，𝑇|_{𝑉𝑘}可能不是𝑉_𝑘上的算子．由此，在 𝑉的形式如上的分解式中，我们仅考虑满足𝑇将各𝑉_𝑘都映射到本身的情形．因此，现在我们 给𝑉的被𝑇映射到本身的子空间取个名称．"
      },
      "statement_en": "A linear map from a vector space to itself is called an operator.",
      "statement_zh": "称从一个向量空间到其本身的线性映射为算子． 设𝑇 ∈ L(𝑉)．若𝑚 ≥ 2且 𝑉 = 𝑉1 ⊕ · · · ⊕ 𝑉𝑚， 其中各𝑉_𝑘都是𝑉的非零子空间，那么要理解𝑇的作用，我们只需要理解各𝑇|_{𝑉𝑘}的作用即可． 此处𝑇|_{𝑉𝑘}表示将𝑇限于更小的定义空间𝑉_𝑘上．因为𝑉_𝑘是比𝑉小的向量空间，所以讨论𝑇|_{𝑉𝑘} 要比讨论𝑇简单些． 然而，我们如果想应用算子研究中一些有用的工具（例如取算子的幂），那么就会遇到这 个问题：𝑇|_{𝑉𝑘}可能不会将𝑉_𝑘映射至它本身；换句话说，𝑇|_{𝑉𝑘}可能不是𝑉_𝑘上的算子．由此，在 𝑉的形式如上的分解式中，我们仅考虑满足𝑇将各𝑉_𝑘都映射到本身的情形．因此，现在我们 给𝑉的被𝑇映射到本身的子空间取个名称．"
    },
    {
      "id": "5.2",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.2",
      "name_en": "invariant subspace",
      "name_zh": "不变子空间（invariant subspace）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). A subspace 𝑈 of 𝑉 is called invariant under 𝑇 if 𝑇𝑢 ∈ 𝑈 for every 𝑢 ∈ 𝑈.",
          "zh": "设𝑇 ∈ L(𝑉)．称𝑉的子空间𝑈在𝑇下是不变的，若对每个𝑢 ∈ 𝑈均有𝑇𝑢 ∈ 𝑈．"
        }
      ],
      "note": {
        "en": "Thus 𝑈 is invariant under 𝑇 if 𝑇|_𝑈 is an operator on 𝑈.",
        "zh": "于是，如果𝑇|_𝑈是𝑈上的算子，则𝑈在𝑇下是不变的．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). A subspace 𝑈 of 𝑉 is called invariant under 𝑇 if 𝑇𝑢 ∈ 𝑈 for every 𝑢 ∈ 𝑈. Thus 𝑈 is invariant under 𝑇 if 𝑇|_𝑈 is an operator on 𝑈.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．称𝑉的子空间𝑈在𝑇下是不变的，若对每个𝑢 ∈ 𝑈均有𝑇𝑢 ∈ 𝑈． 于是，如果𝑇|_𝑈是𝑈上的算子，则𝑈在𝑇下是不变的．"
    },
    {
      "id": "5.5",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.5",
      "name_en": "eigenvalue",
      "name_zh": "特征值（eigenvalue）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). A number 𝜆 ∈ 𝐅 is called an eigenvalue of 𝑇 if there exists 𝑣 ∈ 𝑉 such that 𝑣 ≠ 0 and 𝑇𝑣 = 𝜆𝑣.",
          "zh": "设𝑇 ∈ L(𝑉)．称数𝜆 ∈ F 为𝑇的特征值，若存在𝑣 ∈ 𝑉使得𝑣 ≠ 0且𝑇𝑣 = 𝜆𝑣．"
        }
      ],
      "note": {
        "en": "In the definition above, we require that 𝑣 ≠ 0 because every scalar 𝜆 ∈ 𝐅 satisfies 𝑇0 = 𝜆0. The comments above show that 𝑉 has a one-dimensional subspace invariant under 𝑇 if and only if 𝑇 has an eigenvalue.",
        "zh": "在上面定义中，我们要求𝑣 ≠ 0，因为每 个标量𝜆 ∈ F 都满足𝑇0 = 𝜆0． 上面的讨论表明，𝑉有在 𝑇下不变的一 维子空间，当且仅当𝑇有特征值．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). A number 𝜆 ∈ 𝐅 is called an eigenvalue of 𝑇 if there exists 𝑣 ∈ 𝑉 such that 𝑣 ≠ 0 and 𝑇𝑣 = 𝜆𝑣. In the definition above, we require that 𝑣 ≠ 0 because every scalar 𝜆 ∈ 𝐅 satisfies 𝑇0 = 𝜆0. The comments above show that 𝑉 has a one-dimensional subspace invariant under 𝑇 if and only if 𝑇 has an eigenvalue.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．称数𝜆 ∈ F 为𝑇的特征值，若存在𝑣 ∈ 𝑉使得𝑣 ≠ 0且𝑇𝑣 = 𝜆𝑣． 在上面定义中，我们要求𝑣 ≠ 0，因为每 个标量𝜆 ∈ F 都满足𝑇0 = 𝜆0． 上面的讨论表明，𝑉有在 𝑇下不变的一 维子空间，当且仅当𝑇有特征值．"
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
          "en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ ℒ(𝑉), and 𝜆 ∈ 𝐅. Then the following are equivalent. (a) 𝜆 is an eigenvalue of 𝑇. (b) 𝑇−𝜆𝐼 is not injective. (c) 𝑇−𝜆𝐼 is not surjective. (d) 𝑇−𝜆𝐼 is not invertible.",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉) 且𝜆 ∈ F． 那么下面几个命题等价． (a) 𝜆是𝑇的特征值． (b) 𝑇−𝜆𝐼不是单射． (c) 𝑇−𝜆𝐼不是满射． (d) 𝑇−𝜆𝐼不可逆．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ ℒ(𝑉), and 𝜆 ∈ 𝐅. Then the following are equivalent. (a) 𝜆 is an eigenvalue of 𝑇. (b) 𝑇−𝜆𝐼 is not injective. (c) 𝑇−𝜆𝐼 is not surjective. (d) 𝑇−𝜆𝐼 is not invertible.",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉) 且𝜆 ∈ F． 那么下面几个命题等价． (a) 𝜆是𝑇的特征值． (b) 𝑇−𝜆𝐼不是单射． (c) 𝑇−𝜆𝐼不是满射． (d) 𝑇−𝜆𝐼不可逆．"
    },
    {
      "id": "5.8",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.8",
      "name_en": "eigenvector",
      "name_zh": "特征向量（eigenvector）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅 is an eigenvalue of 𝑇. A vector 𝑣 ∈ 𝑉 is called an eigenvector of 𝑇 corresponding to 𝜆 if 𝑣 ≠ 0 and 𝑇𝑣 = 𝜆𝑣.",
          "zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F 是𝑇的特征值．若向量 𝑣 ∈ 𝑉满足 𝑣 ≠ 0且𝑇𝑣 = 𝜆𝑣，则称该向量 是𝑇对应于𝜆的特征向量．"
        }
      ],
      "note": {
        "en": "In other words, a nonzero vector 𝑣 ∈ 𝑉 is an eigenvector of an operator 𝑇 ∈ ℒ(𝑉) if and only if 𝑇𝑣 is a scalar multiple of 𝑣. Because 𝑇𝑣 = 𝜆𝑣 if and only if(𝑇−𝜆𝐼)𝑣 = 0, a vector 𝑣 ∈ 𝑉 with 𝑣 ≠ 0 is an eigenvector of 𝑇 corresponding to 𝜆 if and only if 𝑣 ∈ null(𝑇−𝜆𝐼).",
        "zh": "换句话说，非零向量𝑣 ∈ 𝑉是算子𝑇 ∈ L(𝑉) 的特征向量，当且仅当𝑇𝑣是𝑣的标量倍．因 为𝑇𝑣 = 𝜆𝑣当且仅当(𝑇−𝜆𝐼)𝑣 = 0，所以，向量𝑣 ∈ 𝑉（𝑣 ≠ 0）是𝑇对应于𝜆的特征向量，当 且仅当𝑣 ∈ null(𝑇−𝜆𝐼)．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅 is an eigenvalue of 𝑇. A vector 𝑣 ∈ 𝑉 is called an eigenvector of 𝑇 corresponding to 𝜆 if 𝑣 ≠ 0 and 𝑇𝑣 = 𝜆𝑣. In other words, a nonzero vector 𝑣 ∈ 𝑉 is an eigenvector of an operator 𝑇 ∈ ℒ(𝑉) if and only if 𝑇𝑣 is a scalar multiple of 𝑣. Because 𝑇𝑣 = 𝜆𝑣 if and only if(𝑇−𝜆𝐼)𝑣 = 0, a vector 𝑣 ∈ 𝑉 with 𝑣 ≠ 0 is an eigenvector of 𝑇 corresponding to 𝜆 if and only if 𝑣 ∈ null(𝑇−𝜆𝐼).",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F 是𝑇的特征值．若向量 𝑣 ∈ 𝑉满足 𝑣 ≠ 0且𝑇𝑣 = 𝜆𝑣，则称该向量 是𝑇对应于𝜆的特征向量． 换句话说，非零向量𝑣 ∈ 𝑉是算子𝑇 ∈ L(𝑉) 的特征向量，当且仅当𝑇𝑣是𝑣的标量倍．因 为𝑇𝑣 = 𝜆𝑣当且仅当(𝑇−𝜆𝐼)𝑣 = 0，所以，向量𝑣 ∈ 𝑉（𝑣 ≠ 0）是𝑇对应于𝜆的特征向量，当 且仅当𝑣 ∈ null(𝑇−𝜆𝐼)．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Then every list of eigenvectors of 𝑇 corresponding to distinct eigenvalues of 𝑇 is linearly independent.",
          "zh": "设𝑇 ∈ L(𝑉)．那么分别对应于𝑇的不同特征值的特征向量构成的每个组都线性无关．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Then every list of eigenvectors of 𝑇 corresponding to distinct eigenvalues of 𝑇 is linearly independent.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．那么分别对应于𝑇的不同特征值的特征向量构成的每个组都线性无关．"
    },
    {
      "id": "5.12",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.12",
      "name_en": "operator cannot have more eigenvalues than dimension of vector space",
      "name_zh": "算子的特征值个数不多于向量空间的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. Then each operator on 𝑉 has at most dim 𝑉 distinct eigenvalues.",
          "zh": "设𝑉是有限维的．那么𝑉上的每个算子最多有 dim 𝑉个互异特征值．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then each operator on 𝑉 has at most dim 𝑉 distinct eigenvalues.",
      "statement_zh": "设𝑉是有限维的．那么𝑉上的每个算子最多有 dim 𝑉个互异特征值．"
    },
    {
      "id": "5.13",
      "kind": "notation",
      "chapter": "ch5",
      "number": "5.13",
      "name_en": "𝑇^𝑚",
      "name_zh": "𝑇^𝑚",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑚 is a positive integer.",
          "zh": "设𝑇 ∈ L(𝑉)，𝑚是正整数． 定义𝑇^𝑚 ∈ L(𝑉) 为𝑇^𝑚 = 𝑇 · · ·𝑇．"
        },
        {
          "t": "bullet",
          "en": "𝑇^𝑚 ∈ ℒ(𝑉) is defined by 𝑇^𝑚 = 𝑇_𝑚⏟⋯_{time}𝑇_s.",
          "zh": "������"
        },
        {
          "t": "bullet",
          "en": "𝑇^0 is defined to be the identity operator 𝐼 on 𝑉.",
          "zh": "定义𝑇^0为𝑉上的恒等算子^{𝑚个} 𝐼．^𝑇 若𝑇是可逆的，且其逆为𝑇^{−1}，那么𝑇^{−𝑚} ∈ L(𝑉) 的定义是"
        },
        {
          "t": "bullet",
          "en": "If 𝑇 is invertible with inverse 𝑇^{−1}, then 𝑇^{−𝑚} ∈ ℒ(𝑉) is defined by",
          "zh": "𝑇^{−𝑚} =(𝑇^{−1})^𝑚 ．"
        },
        {
          "t": "formula",
          "en": "𝑇^{−𝑚} =(𝑇^{−1})^𝑚.",
          "zh": "",
          "eq": null
        }
      ],
      "note": {
        "en": "You should verify that if 𝑇 is an operator, then 𝑇^𝑚 𝑇^𝑛 = 𝑇^{𝑚+𝑛} and(𝑇^𝑚)^𝑛 = 𝑇^{𝑚𝑛}, where 𝑚 and 𝑛 are arbitrary integers if 𝑇 is invertible and are nonnegative integers if 𝑇 is not invertible. Having defined powers of an operator, we can now define what it means to apply a polynomial to an operator.",
        "zh": "你应自行验证，若𝑇为算子，那么 𝑇^𝑚 𝑇^𝑛 = 𝑇^{𝑚+𝑛}且(𝑇^𝑚)^𝑛 = 𝑇^{𝑚𝑛}， 其中，若𝑇是可逆的，则𝑚和𝑛是任意整数；若𝑇不可逆，则𝑚和𝑛为非负整数．_{原𝑣1,文..：.}定_{,b𝑣e𝑚c}义_{au线s}了_{e性o相f}算_{th关e}子_{”mi}的_{的nim最}幂_{a小lit}，_{值yo．}我_{f𝑚后}们_{，文直}就_{通译过}可_{为得“}以_{出因更}定_{为小}义_{𝑚的}什_{的𝑚最−}么_{小1}是_{也性满”}“_{，足意}将_{此即}多_{条𝑚件}项_{是来}式_{满推足出}作_{“矛}用_{𝑇盾对}于_{．应}算_于子_{其互}”_异了_{特征}．_{值𝜆1,...,𝜆𝑚的特征向量}"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑚 is a positive integer. 𝑇^𝑚 ∈ ℒ(𝑉) is defined by 𝑇^𝑚 = 𝑇_𝑚⏟⋯_{time}𝑇_s. 𝑇^0 is defined to be the identity operator 𝐼 on 𝑉. If 𝑇 is invertible with inverse 𝑇^{−1}, then 𝑇^{−𝑚} ∈ ℒ(𝑉) is defined by 𝑇^{−𝑚} =(𝑇^{−1})^𝑚. You should verify that if 𝑇 is an operator, then 𝑇^𝑚 𝑇^𝑛 = 𝑇^{𝑚+𝑛} and(𝑇^𝑚)^𝑛 = 𝑇^{𝑚𝑛}, where 𝑚 and 𝑛 are arbitrary integers if 𝑇 is invertible and are nonnegative integers if 𝑇 is not invertible. Having defined powers of an operator, we can now define what it means to apply a polynomial to an operator.",
      "statement_zh": "设𝑇 ∈ L(𝑉)，𝑚是正整数． 定义𝑇^𝑚 ∈ L(𝑉) 为𝑇^𝑚 = 𝑇 · · ·𝑇． ������ 定义𝑇^0为𝑉上的恒等算子^{𝑚个} 𝐼．^𝑇 若𝑇是可逆的，且其逆为𝑇^{−1}，那么𝑇^{−𝑚} ∈ L(𝑉) 的定义是 𝑇^{−𝑚} =(𝑇^{−1})^𝑚 ． 你应自行验证，若𝑇为算子，那么 𝑇^𝑚 𝑇^𝑛 = 𝑇^{𝑚+𝑛}且(𝑇^𝑚)^𝑛 = 𝑇^{𝑚𝑛}， 其中，若𝑇是可逆的，则𝑚和𝑛是任意整数；若𝑇不可逆，则𝑚和𝑛为非负整数．_{原𝑣1,文..：.}定_{,b𝑣e𝑚c}义_{au线s}了_{e性o相f}算_{th关e}子_{”mi}的_{的nim最}幂_{a小lit}，_{值yo．}我_{f𝑚后}们_{，文直}就_{通译过}可_{为得“}以_{出因更}定_{为小}义_{𝑚的}什_{的𝑚最−}么_{小1}是_{也性满”}“_{，足意}将_{此即}多_{条𝑚件}项_{是来}式_{满推足出}作_{“矛}用_{𝑇盾对}于_{．应}算_于子_{其互}”_异了_{特征}．_{值𝜆1,...,𝜆𝑚的特征向量}"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑝 ∈ 𝒫(𝐅) is a polynomial given by",
          "zh": "设𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F) 是由下式给出的多项式：对所有 𝑧 ∈ F，"
        },
        {
          "t": "formula",
          "en": "𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + 𝑎_2 𝑧^2 + ⋯ + 𝑎_𝑚 𝑧^𝑚",
          "zh": "𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + 𝑎_2 𝑧^2 + · · · + 𝑎_𝑚 𝑧^𝑚 ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑧 ∈ 𝐅. Then 𝑝(𝑇) is the operator on 𝑉 defined by",
          "zh": "那么 𝑝(𝑇) 是𝑉上的算子，由下式定义："
        },
        {
          "t": "formula",
          "en": "𝑝(𝑇) = 𝑎_0 𝐼 + 𝑎_1 𝑇 + 𝑎_2 𝑇^2 + ⋯ + 𝑎_𝑚 𝑇^𝑚.",
          "zh": "𝑝(𝑇) = 𝑎_0 𝐼 + 𝑎_1 𝑇 + 𝑎_2 𝑇^2 + · · · + 𝑎_𝑚 𝑇^𝑚 ．",
          "eq": null
        }
      ],
      "note": {
        "en": "This is a new use of the symbol 𝑝 because we are applying 𝑝 to operators, not just elements of 𝐅. The idea here is that to evaluate 𝑝(𝑇), we simply replace 𝑧 with 𝑇 in the expression defining 𝑝. Note that the constant term 𝑎_0 in 𝑝(𝑧) becomes the operator 𝑎_0 𝐼(which is a reasonable choice because 𝑎_0 = 𝑎_0 𝑧^0 and thus we should replace 𝑎_0 with 𝑎_0 𝑇^0, which equals 𝑎_0 𝐼).",
        "zh": "我们把 𝑝应用在算子上而不仅是 F 中的数上，给符号 𝑝增添了一种新用法．我们的想法 是，要得到 𝑝(𝑇)，将 𝑝的定义式中的𝑧替换成𝑇即可．注意，𝑝(𝑧) 中的常数项𝑎_0变成了算子 𝑎_0 𝐼（这写法很合理：因为𝑎_0 = 𝑎_0 𝑧^0，所以我们应将𝑎_0替换成𝑎_0 𝑇^0，也就是𝑎_0 𝐼）．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑝 ∈ 𝒫(𝐅) is a polynomial given by 𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + 𝑎_2 𝑧^2 + ⋯ + 𝑎_𝑚 𝑧^𝑚 for all 𝑧 ∈ 𝐅. Then 𝑝(𝑇) is the operator on 𝑉 defined by 𝑝(𝑇) = 𝑎_0 𝐼 + 𝑎_1 𝑇 + 𝑎_2 𝑇^2 + ⋯ + 𝑎_𝑚 𝑇^𝑚. This is a new use of the symbol 𝑝 because we are applying 𝑝 to operators, not just elements of 𝐅. The idea here is that to evaluate 𝑝(𝑇), we simply replace 𝑧 with 𝑇 in the expression defining 𝑝. Note that the constant term 𝑎_0 in 𝑝(𝑧) becomes the operator 𝑎_0 𝐼(which is a reasonable choice because 𝑎_0 = 𝑎_0 𝑧^0 and thus we should replace 𝑎_0 with 𝑎_0 𝑇^0, which equals 𝑎_0 𝐼).",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F) 是由下式给出的多项式：对所有 𝑧 ∈ F， 𝑝(𝑧) = 𝑎_0 + 𝑎_1 𝑧 + 𝑎_2 𝑧^2 + · · · + 𝑎_𝑚 𝑧^𝑚 ． 那么 𝑝(𝑇) 是𝑉上的算子，由下式定义： 𝑝(𝑇) = 𝑎_0 𝐼 + 𝑎_1 𝑇 + 𝑎_2 𝑇^2 + · · · + 𝑎_𝑚 𝑇^𝑚 ． 我们把 𝑝应用在算子上而不仅是 F 中的数上，给符号 𝑝增添了一种新用法．我们的想法 是，要得到 𝑝(𝑇)，将 𝑝的定义式中的𝑧替换成𝑇即可．注意，𝑝(𝑧) 中的常数项𝑎_0变成了算子 𝑎_0 𝐼（这写法很合理：因为𝑎_0 = 𝑎_0 𝑧^0，所以我们应将𝑎_0替换成𝑎_0 𝑇^0，也就是𝑎_0 𝐼）．"
    },
    {
      "id": "5.16",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.16",
      "name_en": "product of polynomials",
      "name_zh": "多项式的乘积（product of polynomials）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑝, 𝑞 ∈ 𝒫(𝐅), then 𝑝𝑞 ∈ 𝒫(𝐅) is the polynomial defined by",
          "zh": "若 𝑝, 𝑞 ∈ P(F)，那么 𝑝𝑞 ∈ P(F) 是按下式定义的多项式：对所有 𝑧 ∈ F，"
        },
        {
          "t": "formula",
          "en": "(𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧)",
          "zh": "(𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧)．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑧 ∈ 𝐅.",
          "zh": ""
        }
      ],
      "note": {
        "en": "The order does not matter in taking products of polynomials of a single operator, as shown by(b) in the next result.",
        "zh": "如下面结论(b)所示，对单个算子的多项式取乘积时，顺序无关紧要．"
      },
      "statement_en": "If 𝑝, 𝑞 ∈ 𝒫(𝐅), then 𝑝𝑞 ∈ 𝒫(𝐅) is the polynomial defined by (𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧) for all 𝑧 ∈ 𝐅. The order does not matter in taking products of polynomials of a single operator, as shown by(b) in the next result.",
      "statement_zh": "若 𝑝, 𝑞 ∈ P(F)，那么 𝑝𝑞 ∈ P(F) 是按下式定义的多项式：对所有 𝑧 ∈ F， (𝑝𝑞)(𝑧) = 𝑝(𝑧)𝑞(𝑧)． 如下面结论(b)所示，对单个算子的多项式取乘积时，顺序无关紧要．"
    },
    {
      "id": "5.17",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.17",
      "name_en": "multiplicative properties",
      "name_zh": "乘积性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑝, 𝑞 ∈ 𝒫(𝐅) and 𝑇 ∈ ℒ(𝑉). Then (a)(𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇); (b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇).",
          "zh": "设 𝑝, 𝑞 ∈ P(F) 且𝑇 ∈ L(𝑉)．那么： (a)(𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇)； (b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑝, 𝑞 ∈ 𝒫(𝐅) and 𝑇 ∈ ℒ(𝑉). Then (a)(𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇); (b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇).",
      "statement_zh": "设 𝑝, 𝑞 ∈ P(F) 且𝑇 ∈ L(𝑉)．那么： (a)(𝑝𝑞)(𝑇) = 𝑝(𝑇)𝑞(𝑇)； (b) 𝑝(𝑇)𝑞(𝑇) = 𝑞(𝑇)𝑝(𝑇)．"
    },
    {
      "id": "5.18",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.18",
      "name_en": "null space and range of 𝑝(𝑇) are invariant under 𝑇",
      "name_zh": "𝑝(𝑇) 的零空间和值域在𝑇下是不变的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑝 ∈ 𝒫(𝐅). Then null 𝑝(𝑇) and range 𝑝(𝑇) are invariant under 𝑇.",
          "zh": "设𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F)．那么 null 𝑝(𝑇) 和 range 𝑝(𝑇) 在𝑇下不变．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑝 ∈ 𝒫(𝐅). Then null 𝑝(𝑇) and range 𝑝(𝑇) are invariant under 𝑇.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且 𝑝 ∈ P(F)．那么 null 𝑝(𝑇) 和 range 𝑝(𝑇) 在𝑇下不变．"
    },
    {
      "id": "5.19",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.19",
      "name_en": "existence of eigenvalues",
      "name_zh": "特征值的存在性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every operator on a finite-dimensional nonzero complex vector space has an eigenvalue.",
          "zh": "非零有限维复向量空间上的每个算子都有特征值．"
        }
      ],
      "note": null,
      "statement_en": "Every operator on a finite-dimensional nonzero complex vector space has an eigenvalue.",
      "statement_zh": "非零有限维复向量空间上的每个算子都有特征值．"
    },
    {
      "id": "5.21",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.21",
      "name_en": "monic polynomial",
      "name_zh": "首一多项式（monic polynomial）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A monic polynomial is a polynomial whose highest-degree coefficient equals 1.",
          "zh": "首一多项式是最高次项系数等于1的多项式．"
        }
      ],
      "note": null,
      "statement_en": "A monic polynomial is a polynomial whose highest-degree coefficient equals 1.",
      "statement_zh": "首一多项式是最高次项系数等于1的多项式．"
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
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then there is a unique monic polynomial 𝑝 ∈ 𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0. Furthermore, deg 𝑝 ≤ dim 𝑉.",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)．那么存在唯一的次数最小的首一多项式 𝑝 ∈ P(F)，使得 𝑝(𝑇) = 0．此外，deg 𝑝 ≤ dim 𝑉．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then there is a unique monic polynomial 𝑝 ∈ 𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0. Furthermore, deg 𝑝 ≤ dim 𝑉.",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)．那么存在唯一的次数最小的首一多项式 𝑝 ∈ P(F)，使得 𝑝(𝑇) = 0．此外，deg 𝑝 ≤ dim 𝑉．"
    },
    {
      "id": "5.24",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.24",
      "name_en": "minimal polynomial",
      "name_zh": "最小多项式（minimal polynomial）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then the minimal polynomial of 𝑇 is the unique monic polynomial 𝑝 ∈ 𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0.",
          "zh": "设𝑉是有限维的，且𝑇 ∈ L(𝑉)．那么𝑇的最小多项式是唯一使得 𝑝(𝑇) = 0成立的次数 最小的首一多项式 𝑝 ∈ P(F)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then the minimal polynomial of 𝑇 is the unique monic polynomial 𝑝 ∈ 𝒫(𝐅) of smallest degree such that 𝑝(𝑇) = 0.",
      "statement_zh": "设𝑉是有限维的，且𝑇 ∈ L(𝑉)．那么𝑇的最小多项式是唯一使得 𝑝(𝑇) = 0成立的次数 最小的首一多项式 𝑝 ∈ P(F)．"
    },
    {
      "id": "5.27",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.27",
      "name_en": "eigenvalues are the zeros of the minimal polynomial",
      "name_zh": "特征值即最小多项式的零点",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). (a) The zeros of the minimal polynomial of 𝑇 are the eigenvalues of 𝑇. (b) If 𝑉 is a complex vector space, then the minimal polynomial of 𝑇 has the form",
          "zh": "设𝑉是有限维的且𝑇 ∈ L(𝑉)． (a) 𝑇的最小多项式的零点即𝑇的特征值． (b) 若𝑉是复向量空间，那么𝑇的最小多项式具有下述形式"
        },
        {
          "t": "formula",
          "en": "(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚)",
          "zh": "(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝜆_1, …, 𝜆_𝑚 is a list of all eigenvalues of 𝑇, possibly with repetitions.",
          "zh": "其中𝜆_1,..., 𝜆_𝑚是𝑇的所有特征值（可能有重复）．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). (a) The zeros of the minimal polynomial of 𝑇 are the eigenvalues of 𝑇. (b) If 𝑉 is a complex vector space, then the minimal polynomial of 𝑇 has the form (𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) where 𝜆_1, …, 𝜆_𝑚 is a list of all eigenvalues of 𝑇, possibly with repetitions.",
      "statement_zh": "设𝑉是有限维的且𝑇 ∈ L(𝑉)． (a) 𝑇的最小多项式的零点即𝑇的特征值． (b) 若𝑉是复向量空间，那么𝑇的最小多项式具有下述形式 (𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚) 其中𝜆_1,..., 𝜆_𝑚是𝑇的所有特征值（可能有重复）．"
    },
    {
      "id": "5.29",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.29",
      "name_en": "𝑞(𝑇) = 0 ⟺ 𝑞 is a polynomial multiple of the minimal polynomial",
      "name_zh": "𝑞(𝑇) = 0 ⇐⇒ 𝑞是最小多项式的多项式倍",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ ℒ(𝑉), and 𝑞 ∈ 𝒫(𝐅). Then 𝑞(𝑇) = 0 if and only if 𝑞 is a polynomial multiple of the minimal polynomial of 𝑇.",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)，且 𝑞 ∈ P(F)．那么 𝑞(𝑇) = 0当且仅当 𝑞是𝑇的最小多项 式的多项式倍^2 ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ ℒ(𝑉), and 𝑞 ∈ 𝒫(𝐅). Then 𝑞(𝑇) = 0 if and only if 𝑞 is a polynomial multiple of the minimal polynomial of 𝑇.",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)，且 𝑞 ∈ P(F)．那么 𝑞(𝑇) = 0当且仅当 𝑞是𝑇的最小多项 式的多项式倍^2 ．"
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
          "en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ ℒ(𝑉), and 𝑈 is a subspace of 𝑉 that is invariant under 𝑇. Then the minimal polynomial of 𝑇 is a polynomial multiple of the minimal polynomial of 𝑇|_𝑈.",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)，且𝑈是𝑉的在𝑇下不变的子空间．那么𝑇的最小多项式 是𝑇|_𝑈的最小多项式的多项式倍．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ ℒ(𝑉), and 𝑈 is a subspace of 𝑉 that is invariant under 𝑇. Then the minimal polynomial of 𝑇 is a polynomial multiple of the minimal polynomial of 𝑇|_𝑈.",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)，且𝑈是𝑉的在𝑇下不变的子空间．那么𝑇的最小多项式 是𝑇|_𝑈的最小多项式的多项式倍．"
    },
    {
      "id": "5.32",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.32",
      "name_en": "𝑇 not invertible ⟺ constant term of minimal polynomial of 𝑇 is 0",
      "name_zh": "𝑇不可逆 ⇐⇒ 𝑇的最小多项式的常数项为0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then 𝑇 is not invertible if and only if the constant term of the minimal polynomial of 𝑇 is 0.",
          "zh": "设𝑉是有限维的且𝑇 ∈ L(𝑉)．那么𝑇不可逆，当且仅当𝑇的最小多项式的常数项为0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then 𝑇 is not invertible if and only if the constant term of the minimal polynomial of 𝑇 is 0.",
      "statement_zh": "设𝑉是有限维的且𝑇 ∈ L(𝑉)．那么𝑇不可逆，当且仅当𝑇的最小多项式的常数项为0．"
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
          "en": "Suppose 𝐅 = 𝐑 and 𝑉 is finite-dimensional. Suppose also that 𝑇 ∈ ℒ(𝑉) and 𝑏, 𝑐 ∈ 𝐑 with 𝑏^2 < 4𝑐. Then dim null(𝑇^2 + 𝑏𝑇 + 𝑐𝐼) is an even number.",
          "zh": "设 F = R 且𝑉是有限维的，并设𝑇 ∈ L(𝑉)，𝑏, 𝑐 ∈ R 使得𝑏^2 < 4𝑐．那么 dim null(𝑇^2 +𝑏𝑇+𝑐𝐼) 是偶数．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐑 and 𝑉 is finite-dimensional. Suppose also that 𝑇 ∈ ℒ(𝑉) and 𝑏, 𝑐 ∈ 𝐑 with 𝑏^2 < 4𝑐. Then dim null(𝑇^2 + 𝑏𝑇 + 𝑐𝐼) is an even number.",
      "statement_zh": "设 F = R 且𝑉是有限维的，并设𝑇 ∈ L(𝑉)，𝑏, 𝑐 ∈ R 使得𝑏^2 < 4𝑐．那么 dim null(𝑇^2 +𝑏𝑇+𝑐𝐼) 是偶数．"
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
          "en": "Every operator on an odd-dimensional vector space has an eigenvalue.",
          "zh": "奇数维向量空间上的每个算子都有特征值．"
        }
      ],
      "note": null,
      "statement_en": "Every operator on an odd-dimensional vector space has an eigenvalue.",
      "statement_zh": "奇数维向量空间上的每个算子都有特征值．"
    },
    {
      "id": "5.35",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.35",
      "name_en": "matrix of an operator, ℳ(𝑇)",
      "name_zh": "算子的矩阵（matrix of an operator）、M(𝑇)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). The matrix of 𝑇 with respect to a basis 𝑣_1, …, 𝑣_𝑛 of 𝑉 is the 𝑛-by-𝑛 matrix",
          "zh": "设𝑇 ∈ L(𝑉)．𝑇关于𝑉的基𝑣_1,..., 𝑣_𝑛的矩阵是𝑛 × 𝑛矩阵"
        },
        {
          "t": "formula",
          "en": "𝐴_{1,1} ⋯ 𝐴_{1,𝑛} ⎛⎜ ⎞⎟⎟⎟ ℳ(𝑇) = ⎜⎜ ⋮ ⋮ ⎝ 𝐴_{𝑛,1} ⋯ 𝐴_{𝑛,𝑛} ⎠",
          "zh": "𝐴_{1,1} · · · 𝐴_{1,𝑛} ���� ����...... M(𝑇) = � 𝐴_{𝑛,1} · · · 𝐴_{𝑛,𝑛} �",
          "eq": null
        },
        {
          "t": "p",
          "en": "whose entries 𝐴_{𝑗,𝑘} are defined by",
          "zh": "其中的元素 𝐴_{𝑗,𝑘}定义为"
        },
        {
          "t": "formula",
          "en": "𝑇𝑣_𝑘 = 𝐴_{1,𝑘} 𝑣_1 + ⋯ + 𝐴_{𝑛,𝑘} 𝑣_𝑛.",
          "zh": "𝑇𝑣𝑘 = 𝐴1,𝑘𝑣1 + · · · + 𝐴𝑛,𝑘𝑣𝑛． � �",
          "eq": null
        },
        {
          "t": "p",
          "en": "The notation ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) is used if the basis is not clear from the context.",
          "zh": "若根据上下文无法明确看出选取哪个基，就用 M 𝑇,(𝑣_1,..., 𝑣_𝑛) 这个记号．"
        }
      ],
      "note": {
        "en": "",
        "zh": "算子的矩阵是方阵（其行数等于列数），与前面我们讨论的一般线性映射的长方形矩阵不 同． 若𝑇是 F^𝑛上的算子，且未明确基的选取， 那么就假定所取的基是标准基（其中第 𝑘个 基向量除第 𝑘个坐标为1外，其余坐标均为0）．此时你可以认为 M(𝑇) 的第 𝑘列是将𝑇作用 于第 𝑘个基向量所得的结果（这里把 F^𝑛中的元素与𝑛 × 1列向量等同起来看）．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). The matrix of 𝑇 with respect to a basis 𝑣_1, …, 𝑣_𝑛 of 𝑉 is the 𝑛-by-𝑛 matrix 𝐴_{1,1} ⋯ 𝐴_{1,𝑛} ⎛⎜ ⎞⎟⎟⎟ ℳ(𝑇) = ⎜⎜ ⋮ ⋮ ⎝ 𝐴_{𝑛,1} ⋯ 𝐴_{𝑛,𝑛} ⎠ whose entries 𝐴_{𝑗,𝑘} are defined by 𝑇𝑣_𝑘 = 𝐴_{1,𝑘} 𝑣_1 + ⋯ + 𝐴_{𝑛,𝑘} 𝑣_𝑛. The notation ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) is used if the basis is not clear from the context.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．𝑇关于𝑉的基𝑣_1,..., 𝑣_𝑛的矩阵是𝑛 × 𝑛矩阵 𝐴_{1,1} · · · 𝐴_{1,𝑛} ���� ����...... M(𝑇) = � 𝐴_{𝑛,1} · · · 𝐴_{𝑛,𝑛} � 其中的元素 𝐴_{𝑗,𝑘}定义为 𝑇𝑣𝑘 = 𝐴1,𝑘𝑣1 + · · · + 𝐴𝑛,𝑘𝑣𝑛． � � 若根据上下文无法明确看出选取哪个基，就用 M 𝑇,(𝑣_1,..., 𝑣_𝑛) 这个记号． 算子的矩阵是方阵（其行数等于列数），与前面我们讨论的一般线性映射的长方形矩阵不 同． 若𝑇是 F^𝑛上的算子，且未明确基的选取， 那么就假定所取的基是标准基（其中第 𝑘个 基向量除第 𝑘个坐标为1外，其余坐标均为0）．此时你可以认为 M(𝑇) 的第 𝑘列是将𝑇作用 于第 𝑘个基向量所得的结果（这里把 F^𝑛中的元素与𝑛 × 1列向量等同起来看）．"
    },
    {
      "id": "5.37",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.37",
      "name_en": "diagonal of a matrix",
      "name_zh": "矩阵的对角线（diagonal of a matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The diagonal of a square matrix consists of the entries on the line from the upper left corner to the bottom right corner.",
          "zh": "方阵的对角线由从它的左上角到右下角的直线上的元素所构成．"
        }
      ],
      "note": null,
      "statement_en": "The diagonal of a square matrix consists of the entries on the line from the upper left corner to the bottom right corner.",
      "statement_zh": "方阵的对角线由从它的左上角到右下角的直线上的元素所构成．"
    },
    {
      "id": "5.38",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.38",
      "name_en": "upper-triangular matrix",
      "name_zh": "上三角矩阵（upper-triangular matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A square matrix is called upper triangular if all entries below the diagonal are 0.",
          "zh": "称一个方阵为上三角矩阵，若其中所有在对角线之下的元素都是0．"
        }
      ],
      "note": null,
      "statement_en": "A square matrix is called upper triangular if all entries below the diagonal are 0.",
      "statement_zh": "称一个方阵为上三角矩阵，若其中所有在对角线之下的元素都是0．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Then the following are equivalent. (a) The matrix of 𝑇 with respect to 𝑣_1, …, 𝑣_𝑛 is upper triangular. (b) span(𝑣_1, …, 𝑣_𝑘) is invariant under 𝑇 for each 𝑘 = 1, …, 𝑛. (c) 𝑇𝑣_𝑘 ∈ span(𝑣_1, …, 𝑣_𝑘) for each 𝑘 = 1, …, 𝑛.",
          "zh": "设𝑇 ∈ L(𝑉) 且𝑣_1,..., 𝑣_𝑛是𝑉的基．那么下面几条结论等价． (a) 𝑇关于𝑣_1,..., 𝑣_𝑛的矩阵是上三角矩阵． (b) 对每个 𝑘 = 1,..., 𝑛，均有 span(𝑣_1,..., 𝑣_𝑘) 在𝑇下不变． (c) 对每个 𝑘 = 1,..., 𝑛，均有𝑇𝑣_𝑘 ∈ span(𝑣_1,..., 𝑣_𝑘)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Then the following are equivalent. (a) The matrix of 𝑇 with respect to 𝑣_1, …, 𝑣_𝑛 is upper triangular. (b) span(𝑣_1, …, 𝑣_𝑘) is invariant under 𝑇 for each 𝑘 = 1, …, 𝑛. (c) 𝑇𝑣_𝑘 ∈ span(𝑣_1, …, 𝑣_𝑘) for each 𝑘 = 1, …, 𝑛.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝑣_1,..., 𝑣_𝑛是𝑉的基．那么下面几条结论等价． (a) 𝑇关于𝑣_1,..., 𝑣_𝑛的矩阵是上三角矩阵． (b) 对每个 𝑘 = 1,..., 𝑛，均有 span(𝑣_1,..., 𝑣_𝑘) 在𝑇下不变． (c) 对每个 𝑘 = 1,..., 𝑛，均有𝑇𝑣_𝑘 ∈ span(𝑣_1,..., 𝑣_𝑘)．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑉 has a basis with respect to which 𝑇 has an upper-triangular matrix with diagonal entries 𝜆_1, …, 𝜆_𝑛. Then",
          "zh": "设𝑇 ∈ L(𝑉) 且存在𝑉的一个基，使得𝑇关于该基有上三角矩阵，且该矩阵的对角线元 素是𝜆_1,..., 𝜆_𝑛，那么"
        },
        {
          "t": "formula",
          "en": "(𝑇−𝜆_1 𝐼) ⋯(𝑇−𝜆_𝑛 𝐼) = 0.",
          "zh": "(𝑇−𝜆_1 𝐼) · · ·(𝑇−𝜆_𝑛 𝐼) = 0．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑉 has a basis with respect to which 𝑇 has an upper-triangular matrix with diagonal entries 𝜆_1, …, 𝜆_𝑛. Then (𝑇−𝜆_1 𝐼) ⋯(𝑇−𝜆_𝑛 𝐼) = 0.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且存在𝑉的一个基，使得𝑇关于该基有上三角矩阵，且该矩阵的对角线元 素是𝜆_1,..., 𝜆_𝑛，那么 (𝑇−𝜆_1 𝐼) · · ·(𝑇−𝜆_𝑛 𝐼) = 0．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) has an upper-triangular matrix with respect to some basis of 𝑉. Then the eigenvalues of 𝑇 are precisely the entries on the diagonal of that upper-triangular matrix.",
          "zh": "设𝑇 ∈ L(𝑉) 关于𝑉的某个基有上三角矩阵．那么𝑇的特征值恰为该上三角矩阵对角线 上的各元素．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) has an upper-triangular matrix with respect to some basis of 𝑉. Then the eigenvalues of 𝑇 are precisely the entries on the diagonal of that upper-triangular matrix.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 关于𝑉的某个基有上三角矩阵．那么𝑇的特征值恰为该上三角矩阵对角线 上的各元素．"
    },
    {
      "id": "5.44",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.44",
      "name_en": "necessary and sufficient condition to have an upper-triangular matrix",
      "name_zh": "存在上三角矩阵的充要条件",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then 𝑇 has an upper-triangular matrix with respect to some basis of 𝑉 if and only if the minimal polynomial of 𝑇 equals(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) for some 𝜆_1, …, 𝜆_𝑚 ∈ 𝐅.",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)．那么𝑇关于𝑉的某个基有上三角矩阵，当且仅当𝑇的最 小多项式等于(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)（其中𝜆_1,..., 𝜆_𝑚 ∈ F）．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then 𝑇 has an upper-triangular matrix with respect to some basis of 𝑉 if and only if the minimal polynomial of 𝑇 equals(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) for some 𝜆_1, …, 𝜆_𝑚 ∈ 𝐅.",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)．那么𝑇关于𝑉的某个基有上三角矩阵，当且仅当𝑇的最 小多项式等于(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)（其中𝜆_1,..., 𝜆_𝑚 ∈ F）．"
    },
    {
      "id": "5.47",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.47",
      "name_en": "if 𝐅 = 𝐂, then every operator on 𝑉 has an upper-triangular matrix",
      "name_zh": "若 F = C，那么𝑉上的每个算子都有上三角矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is a finite-dimensional complex vector space and 𝑇 ∈ ℒ(𝑉). Then 𝑇 has an upper-triangular matrix with respect to some basis of 𝑉.",
          "zh": "设𝑉是有限维复向量空间且𝑇 ∈ L(𝑉)．那么𝑇关于𝑉的某个基具有上三角矩阵．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a finite-dimensional complex vector space and 𝑇 ∈ ℒ(𝑉). Then 𝑇 has an upper-triangular matrix with respect to some basis of 𝑉.",
      "statement_zh": "设𝑉是有限维复向量空间且𝑇 ∈ L(𝑉)．那么𝑇关于𝑉的某个基具有上三角矩阵．"
    },
    {
      "id": "5.48",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.48",
      "name_en": "diagonal matrix",
      "name_zh": "对角矩阵（diagonal matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A diagonal matrix is a square matrix that is 0 everywhere except possibly on the diagonal.",
          "zh": "对角矩阵是对角线之外元素均为0的方阵．"
        }
      ],
      "note": null,
      "statement_en": "A diagonal matrix is a square matrix that is 0 everywhere except possibly on the diagonal.",
      "statement_zh": "对角矩阵是对角线之外元素均为0的方阵．"
    },
    {
      "id": "5.50",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.50",
      "name_en": "diagonalizable",
      "name_zh": "可对角化（diagonalizable）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator on 𝑉 is called diagonalizable if the operator has a diagonal matrix with respect to some basis of 𝑉.",
          "zh": "若𝑉上的算子关于𝑉的某个基具有对角矩阵，则称该算子是可对角化的．"
        }
      ],
      "note": null,
      "statement_en": "An operator on 𝑉 is called diagonalizable if the operator has a diagonal matrix with respect to some basis of 𝑉.",
      "statement_zh": "若𝑉上的算子关于𝑉的某个基具有对角矩阵，则称该算子是可对角化的．"
    },
    {
      "id": "5.52",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.52",
      "name_en": "eigenspace, 𝐸(𝜆, 𝑇)",
      "name_zh": "特征空间（eigenspace）、𝐸(𝜆,𝑇)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅. The eigenspace of 𝑇 corresponding to 𝜆 is the subspace 𝐸(𝜆, 𝑇) of 𝑉 defined by",
          "zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F．𝑇对应于𝜆的特征空间记作 𝐸(𝜆,𝑇)，是定义如下的𝑉的子空间"
        },
        {
          "t": "formula",
          "en": "𝐸(𝜆, 𝑇) = null(𝑇−𝜆𝐼) ={𝑣 ∈ 𝑉 : 𝑇𝑣 = 𝜆𝑣}.",
          "zh": "𝐸(𝜆,𝑇) = null(𝑇−𝜆𝐼) ={𝑣 ∈ 𝑉: 𝑇𝑣 = 𝜆𝑣}．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Hence 𝐸(𝜆, 𝑇) is the set of all eigenvectors of 𝑇 corresponding to 𝜆, along with the 0 vector.",
          "zh": "因此 𝐸(𝜆,𝑇) 是𝑇对应于𝜆的所有特征向量以及向量0所构成的集合．"
        }
      ],
      "note": {
        "en": "",
        "zh": "对𝑇 ∈ L(𝑉) 且𝜆 ∈ F，集合𝐸(𝜆,𝑇) 是𝑉的子空间，因为𝑉上任何线性映射的零空间都是 𝑉的子空间．由定义可得，𝜆是𝑇的特征值当且仅当 𝐸(𝜆,𝑇) ≠{0}．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅. The eigenspace of 𝑇 corresponding to 𝜆 is the subspace 𝐸(𝜆, 𝑇) of 𝑉 defined by 𝐸(𝜆, 𝑇) = null(𝑇−𝜆𝐼) ={𝑣 ∈ 𝑉 : 𝑇𝑣 = 𝜆𝑣}. Hence 𝐸(𝜆, 𝑇) is the set of all eigenvectors of 𝑇 corresponding to 𝜆, along with the 0 vector.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F．𝑇对应于𝜆的特征空间记作 𝐸(𝜆,𝑇)，是定义如下的𝑉的子空间 𝐸(𝜆,𝑇) = null(𝑇−𝜆𝐼) ={𝑣 ∈ 𝑉: 𝑇𝑣 = 𝜆𝑣}． 因此 𝐸(𝜆,𝑇) 是𝑇对应于𝜆的所有特征向量以及向量0所构成的集合． 对𝑇 ∈ L(𝑉) 且𝜆 ∈ F，集合𝐸(𝜆,𝑇) 是𝑉的子空间，因为𝑉上任何线性映射的零空间都是 𝑉的子空间．由定义可得，𝜆是𝑇的特征值当且仅当 𝐸(𝜆,𝑇) ≠{0}．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆_1, …, 𝜆_𝑚 are distinct eigenvalues of 𝑇. Then",
          "zh": "设𝑇 ∈ L(𝑉) 且𝜆_1,..., 𝜆_𝑚是𝑇的互异特征值．那么"
        },
        {
          "t": "formula",
          "en": "𝐸(𝜆_1, 𝑇) + ⋯ + 𝐸(𝜆_𝑚, 𝑇)",
          "zh": "𝐸(𝜆_1,𝑇) + · · · + 𝐸(𝜆_𝑚,𝑇)",
          "eq": null
        },
        {
          "t": "p",
          "en": "is a direct sum. Furthermore, if 𝑉 is finite-dimensional, then",
          "zh": "是直和．此外，若𝑉是有限维的，那么"
        },
        {
          "t": "formula",
          "en": "dim 𝐸(𝜆_1, 𝑇) + ⋯ + dim 𝐸(𝜆_𝑚, 𝑇) ≤ dim 𝑉.",
          "zh": "dim 𝐸(𝜆_1,𝑇) + · · · + dim 𝐸(𝜆_𝑚,𝑇) ≤ dim 𝑉．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆_1, …, 𝜆_𝑚 are distinct eigenvalues of 𝑇. Then 𝐸(𝜆_1, 𝑇) + ⋯ + 𝐸(𝜆_𝑚, 𝑇) is a direct sum. Furthermore, if 𝑉 is finite-dimensional, then dim 𝐸(𝜆_1, 𝑇) + ⋯ + dim 𝐸(𝜆_𝑚, 𝑇) ≤ dim 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝜆_1,..., 𝜆_𝑚是𝑇的互异特征值．那么 𝐸(𝜆_1,𝑇) + · · · + 𝐸(𝜆_𝑚,𝑇) 是直和．此外，若𝑉是有限维的，那么 dim 𝐸(𝜆_1,𝑇) + · · · + dim 𝐸(𝜆_𝑚,𝑇) ≤ dim 𝑉．"
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
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 denote the distinct eigenvalues of 𝑇. Then the following are equivalent. (a) 𝑇 is diagonalizable. (b) 𝑉 has a basis consisting of eigenvectors of 𝑇. (c) 𝑉 = 𝐸(𝜆_1, 𝑇) ⊕ ⋯ ⊕ 𝐸(𝜆_𝑚, 𝑇). (d) dim 𝑉 = dim 𝐸(𝜆_1, 𝑇) + ⋯ + dim 𝐸(𝜆_𝑚, 𝑇).",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)．令𝜆_1,..., 𝜆_𝑚表示𝑇的所有互异特征值．则下列命题等价． (a) 𝑇是可对角化的． (b) 𝑉有由𝑇的特征向量构成的基． (c) 𝑉 = 𝐸(𝜆_1,𝑇) ⊕ · · · ⊕ 𝐸(𝜆_𝑚,𝑇)． (d) dim 𝑉 = dim 𝐸(𝜆_1,𝑇) + · · · + dim 𝐸(𝜆_𝑚,𝑇)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 denote the distinct eigenvalues of 𝑇. Then the following are equivalent. (a) 𝑇 is diagonalizable. (b) 𝑉 has a basis consisting of eigenvectors of 𝑇. (c) 𝑉 = 𝐸(𝜆_1, 𝑇) ⊕ ⋯ ⊕ 𝐸(𝜆_𝑚, 𝑇). (d) dim 𝑉 = dim 𝐸(𝜆_1, 𝑇) + ⋯ + dim 𝐸(𝜆_𝑚, 𝑇).",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)．令𝜆_1,..., 𝜆_𝑚表示𝑇的所有互异特征值．则下列命题等价． (a) 𝑇是可对角化的． (b) 𝑉有由𝑇的特征向量构成的基． (c) 𝑉 = 𝐸(𝜆_1,𝑇) ⊕ · · · ⊕ 𝐸(𝜆_𝑚,𝑇)． (d) dim 𝑉 = dim 𝐸(𝜆_1,𝑇) + · · · + dim 𝐸(𝜆_𝑚,𝑇)．"
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
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉) has dim 𝑉 distinct eigenvalues. Then 𝑇 is diagonalizable.",
          "zh": "设𝑉是有限维的且𝑇 ∈ L(𝑉) 有 dim 𝑉个互不相同的特征值．那么𝑇是可对角化的．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉) has dim 𝑉 distinct eigenvalues. Then 𝑇 is diagonalizable.",
      "statement_zh": "设𝑉是有限维的且𝑇 ∈ L(𝑉) 有 dim 𝑉个互不相同的特征值．那么𝑇是可对角化的．"
    },
    {
      "id": "5.62",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.62",
      "name_en": "necessary and sufficient condition for diagonalizability",
      "name_zh": "可对角化的充要条件",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then 𝑇 is diagonalizable if and only if the minimal polynomial of 𝑇 equals(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) for some list of distinct numbers 𝜆_1, …, 𝜆_𝑚 ∈ 𝐅.",
          "zh": "设𝑉是有限维的，且𝑇 ∈ L(𝑉)．那么𝑇是可对角化的，当且仅当𝑇的最小多项式等于 (𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)，其中𝜆_1,..., 𝜆_𝑚 ∈ F 为互不相同的数．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then 𝑇 is diagonalizable if and only if the minimal polynomial of 𝑇 equals(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) for some list of distinct numbers 𝜆_1, …, 𝜆_𝑚 ∈ 𝐅.",
      "statement_zh": "设𝑉是有限维的，且𝑇 ∈ L(𝑉)．那么𝑇是可对角化的，当且仅当𝑇的最小多项式等于 (𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)，其中𝜆_1,..., 𝜆_𝑚 ∈ F 为互不相同的数．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is diagonalizable and 𝑈 is a subspace of 𝑉 that is invariant under 𝑇. Then 𝑇|_𝑈 is a diagonalizable operator on 𝑈.",
          "zh": "设𝑇 ∈ L(𝑉) 是可对角化的，𝑈是𝑉的子空间且在𝑇下不变．那么𝑇|_𝑈是𝑈上的可对角 化算子．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is diagonalizable and 𝑈 is a subspace of 𝑉 that is invariant under 𝑇. Then 𝑇|_𝑈 is a diagonalizable operator on 𝑈.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 是可对角化的，𝑈是𝑉的子空间且在𝑇下不变．那么𝑇|_𝑈是𝑈上的可对角 化算子．"
    },
    {
      "id": "5.66",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.66",
      "name_en": "Gershgorin disks",
      "name_zh": "格什戈林圆盘（Gershgorin disks）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Let 𝐴 denote the matrix of 𝑇 with respect to this basis. A Gershgorin disk of 𝑇 with respect to the basis 𝑣_1, …, 𝑣_𝑛 is a set of the form",
          "zh": "设𝑇 ∈ L(𝑉) 且 𝑣_1,..., 𝑣_𝑛是𝑉的基．令 𝐴表示𝑇关于该基的矩阵．𝑇关于基 𝑣_1,..., 𝑣_𝑛 的格什戈林圆盘是形如"
        },
        {
          "t": "formula",
          "en": "{𝑧 ∈ 𝐅 : |𝑧−𝐴_{𝑗,𝑗} | ≤_𝑘 ∑^𝑛_{=1}|𝐴_{𝑗,𝑘} |}",
          "zh": "  ∑^𝑛 𝑧 ∈ F: |𝑧−𝐴_{𝑗,𝑗} | ≤ |𝐴_{𝑗,𝑘} _{𝑘𝑘≠=1𝑗} ",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑗 ∈{1, …, 𝑛}.^{𝑘≠𝑗}",
          "zh": "的集合，其中 𝑗 ∈{1,..., 𝑛}．"
        }
      ],
      "note": {
        "en": "",
        "zh": "因为上面定义中的 𝑗有 𝑛种取值，所以𝑇有 𝑛个格什戈林圆盘．若 F = C，那么对每个 𝑗 ∈{1,..., 𝑛}，与之对应的格什戈林圆盘就是 C 中以 𝐴_{𝑗,𝑗}为圆心的闭圆盘，其中 𝐴_{𝑗,𝑗}是 𝐴的 对角线上的第 𝑗个元素．这个闭圆盘的半径，等于 𝐴的第 𝑗行除对角线上的元素外各元素绝 对值之和．若 F = R，那么格什戈林圆盘是 R 中的闭区间． 在上述方阵 𝐴为对角阵的特殊情况下，每个格什戈林圆盘都仅包含一个点，即 𝐴的对角 线上的元素（进而𝑇的每个特征值都是这样的点，这也是下面结论所保证的）．下面的结论有 个推论：如果 𝐴的非对角线元素很小，那么𝑇的每个特征值都与 𝐴的对角线上的一个元素很 接近．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Let 𝐴 denote the matrix of 𝑇 with respect to this basis. A Gershgorin disk of 𝑇 with respect to the basis 𝑣_1, …, 𝑣_𝑛 is a set of the form {𝑧 ∈ 𝐅 : |𝑧−𝐴_{𝑗,𝑗} | ≤_𝑘 ∑^𝑛_{=1}|𝐴_{𝑗,𝑘} |} where 𝑗 ∈{1, …, 𝑛}.^{𝑘≠𝑗}",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且 𝑣_1,..., 𝑣_𝑛是𝑉的基．令 𝐴表示𝑇关于该基的矩阵．𝑇关于基 𝑣_1,..., 𝑣_𝑛 的格什戈林圆盘是形如   ∑^𝑛 𝑧 ∈ F: |𝑧−𝐴_{𝑗,𝑗} | ≤ |𝐴_{𝑗,𝑘} _{𝑘𝑘≠=1𝑗}  的集合，其中 𝑗 ∈{1,..., 𝑛}． 因为上面定义中的 𝑗有 𝑛种取值，所以𝑇有 𝑛个格什戈林圆盘．若 F = C，那么对每个 𝑗 ∈{1,..., 𝑛}，与之对应的格什戈林圆盘就是 C 中以 𝐴_{𝑗,𝑗}为圆心的闭圆盘，其中 𝐴_{𝑗,𝑗}是 𝐴的 对角线上的第 𝑗个元素．这个闭圆盘的半径，等于 𝐴的第 𝑗行除对角线上的元素外各元素绝 对值之和．若 F = R，那么格什戈林圆盘是 R 中的闭区间． 在上述方阵 𝐴为对角阵的特殊情况下，每个格什戈林圆盘都仅包含一个点，即 𝐴的对角 线上的元素（进而𝑇的每个特征值都是这样的点，这也是下面结论所保证的）．下面的结论有 个推论：如果 𝐴的非对角线元素很小，那么𝑇的每个特征值都与 𝐴的对角线上的一个元素很 接近．"
    },
    {
      "id": "5.67",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.67",
      "name_en": "Gershgorin disk theorem",
      "name_zh": "格什戈林圆盘定理（Gershgorin disk theorem）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Then each eigenvalue of 𝑇 is contained in some Gershgorin disk of 𝑇 with respect to the basis 𝑣_1, …, 𝑣_𝑛.",
          "zh": "设𝑇 ∈ L(𝑉)且𝑣_1,..., 𝑣_𝑛是𝑉的基．那么𝑇的每个特征值都被包含在𝑇关于基𝑣_1,..., 𝑣_𝑛 的某个格什戈林圆盘中．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Then each eigenvalue of 𝑇 is contained in some Gershgorin disk of 𝑇 with respect to the basis 𝑣_1, …, 𝑣_𝑛.",
      "statement_zh": "设𝑇 ∈ L(𝑉)且𝑣_1,..., 𝑣_𝑛是𝑉的基．那么𝑇的每个特征值都被包含在𝑇关于基𝑣_1,..., 𝑣_𝑛 的某个格什戈林圆盘中．"
    },
    {
      "id": "5.71",
      "kind": "definition",
      "chapter": "ch5",
      "number": "5.71",
      "name_en": "commute",
      "name_zh": "可交换（commute）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "Two operators 𝑆 and 𝑇 on the same vector space commute if 𝑆𝑇 = 𝑇𝑆.",
          "zh": "对于同一向量空间上的两个算子 𝑆和𝑇，若 𝑆𝑇 = 𝑇𝑆，则它们可交换． 对于两个大小相同的方阵 𝐴和 𝐵，若 𝐴𝐵 = 𝐵𝐴，则它们可交换．"
        },
        {
          "t": "bullet",
          "en": "Two square matrices 𝐴 and 𝐵 of the same size commute if 𝐴𝐵 = 𝐵𝐴.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Two operators 𝑆 and 𝑇 on the same vector space commute if 𝑆𝑇 = 𝑇𝑆. Two square matrices 𝐴 and 𝐵 of the same size commute if 𝐴𝐵 = 𝐵𝐴.",
      "statement_zh": "对于同一向量空间上的两个算子 𝑆和𝑇，若 𝑆𝑇 = 𝑇𝑆，则它们可交换． 对于两个大小相同的方阵 𝐴和 𝐵，若 𝐴𝐵 = 𝐵𝐴，则它们可交换．"
    },
    {
      "id": "5.74",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.74",
      "name_en": "commuting operators correspond to commuting matrices",
      "name_zh": "可交换算子对应可交换矩阵 � �",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑆, 𝑇 ∈ ℒ(𝑉) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Then 𝑆 and 𝑇 commute if and only if ℳ(𝑆,(𝑣_1, …, 𝑣_𝑛)) and ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) commute.",
          "zh": "� �"
        },
        {
          "t": "p",
          "en": "",
          "zh": "设𝑆,𝑇 ∈ L(𝑉) 且𝑣_1,..., 𝑣_𝑛是𝑉的基．那么𝑆和𝑇可交换，当且仅当 M 𝑆,(𝑣_1,..., 𝑣_𝑛)"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "和 M 𝑇,(𝑣_1,..., 𝑣_𝑛) 可交换．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑆, 𝑇 ∈ ℒ(𝑉) and 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Then 𝑆 and 𝑇 commute if and only if ℳ(𝑆,(𝑣_1, …, 𝑣_𝑛)) and ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) commute.",
      "statement_zh": "� � 设𝑆,𝑇 ∈ L(𝑉) 且𝑣_1,..., 𝑣_𝑛是𝑉的基．那么𝑆和𝑇可交换，当且仅当 M 𝑆,(𝑣_1,..., 𝑣_𝑛) � � 和 M 𝑇,(𝑣_1,..., 𝑣_𝑛) 可交换．"
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
          "en": "Suppose 𝑆, 𝑇 ∈ ℒ(𝑉) commute and 𝜆 ∈ 𝐅. Then 𝐸(𝜆, 𝑆) is invariant under 𝑇.",
          "zh": "设 𝑆,𝑇 ∈ L(𝑉) 可交换且𝜆 ∈ F．那么 𝐸(𝜆, 𝑆) 在𝑇下不变．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑆, 𝑇 ∈ ℒ(𝑉) commute and 𝜆 ∈ 𝐅. Then 𝐸(𝜆, 𝑆) is invariant under 𝑇.",
      "statement_zh": "设 𝑆,𝑇 ∈ L(𝑉) 可交换且𝜆 ∈ F．那么 𝐸(𝜆, 𝑆) 在𝑇下不变．"
    },
    {
      "id": "5.76",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.76",
      "name_en": "simultaneous diagonalizability ⟺ commutativity",
      "name_zh": "可同时对角化 ⇐⇒ 可交换性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Two diagonalizable operators on the same vector space have diagonal matrices with respect to the same basis if and only if the two operators commute.",
          "zh": "同一向量空间上的两个可对角化算子关于相同的基都有对角矩阵，当且仅当这两个算子 可交换．"
        }
      ],
      "note": null,
      "statement_en": "Two diagonalizable operators on the same vector space have diagonal matrices with respect to the same basis if and only if the two operators commute.",
      "statement_zh": "同一向量空间上的两个可对角化算子关于相同的基都有对角矩阵，当且仅当这两个算子 可交换．"
    },
    {
      "id": "5.78",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.78",
      "name_en": "common eigenvector for commuting operators",
      "name_zh": "可交换算子的公共特征向量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every pair of commuting operators on a finite-dimensional nonzero complex vector space has a common eigenvector.",
          "zh": "非零有限维复向量空间上的每对可交换算子都有公共的特征向量．"
        }
      ],
      "note": null,
      "statement_en": "Every pair of commuting operators on a finite-dimensional nonzero complex vector space has a common eigenvector.",
      "statement_zh": "非零有限维复向量空间上的每对可交换算子都有公共的特征向量．"
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
          "en": "Suppose 𝑉 is a finite-dimensional complex vector space and 𝑆, 𝑇 are commuting operators on 𝑉. Then there is a basis of 𝑉 with respect to which both 𝑆 and 𝑇 have upper-triangular matrices.",
          "zh": "设𝑉是有限维复向量空间，𝑆,𝑇是𝑉上的可交换算子．那么存在𝑉的一个基，使得𝑆和 𝑇关于该基均有上三角矩阵．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a finite-dimensional complex vector space and 𝑆, 𝑇 are commuting operators on 𝑉. Then there is a basis of 𝑉 with respect to which both 𝑆 and 𝑇 have upper-triangular matrices.",
      "statement_zh": "设𝑉是有限维复向量空间，𝑆,𝑇是𝑉上的可交换算子．那么存在𝑉的一个基，使得𝑆和 𝑇关于该基均有上三角矩阵．"
    },
    {
      "id": "5.81",
      "kind": "result",
      "chapter": "ch5",
      "number": "5.81",
      "name_en": "eigenvalues of sum and product of commuting operators",
      "name_zh": "可交换算子的和与积的特征值",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is a finite-dimensional complex vector space and 𝑆, 𝑇 are commuting operators on 𝑉. Then",
          "zh": "设𝑉是有限维复向量空间，𝑆,𝑇是𝑉上的可交换算子．那么 𝑆 + 𝑇的每个特征值都等于 𝑆的特征值加上𝑇的特征值． 𝑆𝑇的每个特征值都等于 𝑆的特征值乘以𝑇的特征值．"
        },
        {
          "t": "bullet",
          "en": "every eigenvalue of 𝑆 + 𝑇 is an eigenvalue of 𝑆 plus an eigenvalue of 𝑇,",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "every eigenvalue of 𝑆𝑇 is an eigenvalue of 𝑆 times an eigenvalue of 𝑇.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a finite-dimensional complex vector space and 𝑆, 𝑇 are commuting operators on 𝑉. Then every eigenvalue of 𝑆 + 𝑇 is an eigenvalue of 𝑆 plus an eigenvalue of 𝑇, every eigenvalue of 𝑆𝑇 is an eigenvalue of 𝑆 times an eigenvalue of 𝑇.",
      "statement_zh": "设𝑉是有限维复向量空间，𝑆,𝑇是𝑉上的可交换算子．那么 𝑆 + 𝑇的每个特征值都等于 𝑆的特征值加上𝑇的特征值． 𝑆𝑇的每个特征值都等于 𝑆的特征值乘以𝑇的特征值．"
    },
    {
      "id": "6.1",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.1",
      "name_en": "dot product",
      "name_zh": "点积（dot product）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑥, 𝑦 ∈ 𝐑^𝑛, the dot product of 𝑥 and 𝑦, denoted by 𝑥 ⋅ 𝑦, is defined by",
          "zh": "对𝑥, 𝑦 ∈ R^𝑛，𝑥和 𝑦的点积记作𝑥 · 𝑦，由下式定义："
        },
        {
          "t": "formula",
          "en": "𝑥 ⋅ 𝑦 = 𝑥_1 𝑦_1 + ⋯ + 𝑥_𝑛 𝑦_𝑛",
          "zh": "𝑥 · 𝑦 = 𝑥_1 𝑦_1 + · · · + 𝑥_𝑛 𝑦_𝑛",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑥 =(𝑥_1, …, 𝑥_𝑛) and 𝑦 =(𝑦_1, …, 𝑦_𝑛).",
          "zh": "其中𝑥 =(𝑥_1,..., 𝑥_𝑛)，𝑦 =(𝑦_1,..., 𝑦_𝑛)．"
        }
      ],
      "note": {
        "en": "",
        "zh": "R^𝑛中两个向量的点积是数而不是向量． 注意，对所有 𝑥 ∈ R^𝑛，有 𝑥 · 𝑥 = ∥𝑥∥^2 ．此 外，R^𝑛上的点积还满足下列性质． 对所有𝑥 ∈ R^𝑛，均有𝑥 · 𝑥 ≥ 0． 𝑥 · 𝑥 = 0当且仅当𝑥 = 0． 对于固定的 𝑦 ∈ R^𝑛，R^𝑛到 R 的将𝑥 ∈ R^𝑛对应到𝑥 · 𝑦的映射是线性的． 对所有𝑥, 𝑦 ∈ R^𝑛，均有𝑥 · 𝑦 = 𝑦 · 𝑥． 内积是对点积的推广．现在你可能会猜测，内积的定义就是通过将上一段讨论的点积性质 抽象化得出的．对于实向量空间，这个猜想没错．然而，为了让我们所作的定义同时适用于实 向量空间和复向量空间，我们需要在下定义之前考虑复数的情况． 回忆一下，如果𝜆 = 𝑎 + 𝑏 i，其中𝑎, 𝑏 ∈ R，那么 √ 𝜆的绝对值记作 |𝜆|，定义为 |𝜆| = 𝑎^2 + 𝑏^2； 𝜆的复共轭记作𝜆，定义为𝜆 = 𝑎−𝑏 i； |𝜆|^2 = 𝜆𝜆． 绝对值和复共轭的定义及基本性质见于第4章． 对于 𝑧 =(𝑧_1,..., 𝑧_𝑛) ∈ C^𝑛，我们定义 𝑧的范数为 � ∥𝑧∥ = |𝑧_1 |^2 + · · · + |𝑧_𝑛 |^2 ．"
      },
      "statement_en": "For 𝑥, 𝑦 ∈ 𝐑^𝑛, the dot product of 𝑥 and 𝑦, denoted by 𝑥 ⋅ 𝑦, is defined by 𝑥 ⋅ 𝑦 = 𝑥_1 𝑦_1 + ⋯ + 𝑥_𝑛 𝑦_𝑛 where 𝑥 =(𝑥_1, …, 𝑥_𝑛) and 𝑦 =(𝑦_1, …, 𝑦_𝑛).",
      "statement_zh": "对𝑥, 𝑦 ∈ R^𝑛，𝑥和 𝑦的点积记作𝑥 · 𝑦，由下式定义： 𝑥 · 𝑦 = 𝑥_1 𝑦_1 + · · · + 𝑥_𝑛 𝑦_𝑛 其中𝑥 =(𝑥_1,..., 𝑥_𝑛)，𝑦 =(𝑦_1,..., 𝑦_𝑛)． R^𝑛中两个向量的点积是数而不是向量． 注意，对所有 𝑥 ∈ R^𝑛，有 𝑥 · 𝑥 = ∥𝑥∥^2 ．此 外，R^𝑛上的点积还满足下列性质． 对所有𝑥 ∈ R^𝑛，均有𝑥 · 𝑥 ≥ 0． 𝑥 · 𝑥 = 0当且仅当𝑥 = 0． 对于固定的 𝑦 ∈ R^𝑛，R^𝑛到 R 的将𝑥 ∈ R^𝑛对应到𝑥 · 𝑦的映射是线性的． 对所有𝑥, 𝑦 ∈ R^𝑛，均有𝑥 · 𝑦 = 𝑦 · 𝑥． 内积是对点积的推广．现在你可能会猜测，内积的定义就是通过将上一段讨论的点积性质 抽象化得出的．对于实向量空间，这个猜想没错．然而，为了让我们所作的定义同时适用于实 向量空间和复向量空间，我们需要在下定义之前考虑复数的情况． 回忆一下，如果𝜆 = 𝑎 + 𝑏 i，其中𝑎, 𝑏 ∈ R，那么 √ 𝜆的绝对值记作 |𝜆|，定义为 |𝜆| = 𝑎^2 + 𝑏^2； 𝜆的复共轭记作𝜆，定义为𝜆 = 𝑎−𝑏 i； |𝜆|^2 = 𝜆𝜆． 绝对值和复共轭的定义及基本性质见于第4章． 对于 𝑧 =(𝑧_1,..., 𝑧_𝑛) ∈ C^𝑛，我们定义 𝑧的范数为 � ∥𝑧∥ = |𝑧_1 |^2 + · · · + |𝑧_𝑛 |^2 ．"
    },
    {
      "id": "6.2",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.2",
      "name_en": "inner product",
      "name_zh": "内积（inner product）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An inner product on 𝑉 is a function that takes each ordered pair(𝑢, 𝑣) of elements of 𝑉 to a number ⟨𝑢, 𝑣⟩ ∈ 𝐅 and has the following properties.",
          "zh": "𝑉上的内积是一个函数，它将由𝑉中元素构成的每个有序对(𝑢, 𝑣) 对应至一个数⟨𝑢, 𝑣⟩ ∈ F，并满足如下性质．"
        },
        {
          "t": "bullet",
          "en": "Positivity. ⟨𝑣, 𝑣⟩ ≥ 0 for all 𝑣 ∈ 𝑉.",
          "zh": "正性（positivity）. 对于所有𝑣 ∈ 𝑉，均有 ⟨𝑣, 𝑣⟩ ≥ 0．"
        },
        {
          "t": "bullet",
          "en": "Definiteness. ⟨𝑣, 𝑣⟩ = 0 if and only if 𝑣 = 0.",
          "zh": "定性（definiteness）. ⟨𝑣, 𝑣⟩ = 0当且仅当𝑣 = 0． 第一个位置上的可加性（additivity in first slot） 对于所有𝑢, 𝑣, 𝑤 ∈ 𝑉，均有 ⟨𝑢 + 𝑣, 𝑤⟩ = ⟨𝑢, 𝑤⟩ + ⟨𝑣, 𝑤⟩． 第一个位置上的齐次性（homogeneity in first slot） 对于所有𝜆 ∈ F 和所有𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝜆𝑢, 𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩．"
        },
        {
          "t": "bullet",
          "en": "Additivity in first slot. ⟨𝑢 + 𝑣, 𝑤⟩ = ⟨𝑢, 𝑤⟩ + ⟨𝑣, 𝑤⟩ for all 𝑢, 𝑣, 𝑤 ∈ 𝑉.",
          "zh": "共轭对称性（conjugate symmetry）. 对于所有𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩．"
        },
        {
          "t": "bullet",
          "en": "Homogeneity in first slot. ⟨𝜆𝑢, 𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩ for all 𝜆 ∈ 𝐅 and all 𝑢, 𝑣 ∈ 𝑉.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "Conjugate symmetry. ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩ for all 𝑢, 𝑣 ∈ 𝑉.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "每个实数都等于其复共轭．因此如果我 们讨论的是实向量空间，那么我们可以从上 面最后一个条件中省去复共轭，并直接把它 表述为：对于所有𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩．"
      },
      "statement_en": "An inner product on 𝑉 is a function that takes each ordered pair(𝑢, 𝑣) of elements of 𝑉 to a number ⟨𝑢, 𝑣⟩ ∈ 𝐅 and has the following properties. Positivity. ⟨𝑣, 𝑣⟩ ≥ 0 for all 𝑣 ∈ 𝑉. Definiteness. ⟨𝑣, 𝑣⟩ = 0 if and only if 𝑣 = 0. Additivity in first slot. ⟨𝑢 + 𝑣, 𝑤⟩ = ⟨𝑢, 𝑤⟩ + ⟨𝑣, 𝑤⟩ for all 𝑢, 𝑣, 𝑤 ∈ 𝑉. Homogeneity in first slot. ⟨𝜆𝑢, 𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩ for all 𝜆 ∈ 𝐅 and all 𝑢, 𝑣 ∈ 𝑉. Conjugate symmetry. ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩ for all 𝑢, 𝑣 ∈ 𝑉.",
      "statement_zh": "𝑉上的内积是一个函数，它将由𝑉中元素构成的每个有序对(𝑢, 𝑣) 对应至一个数⟨𝑢, 𝑣⟩ ∈ F，并满足如下性质． 正性（positivity）. 对于所有𝑣 ∈ 𝑉，均有 ⟨𝑣, 𝑣⟩ ≥ 0． 定性（definiteness）. ⟨𝑣, 𝑣⟩ = 0当且仅当𝑣 = 0． 第一个位置上的可加性（additivity in first slot） 对于所有𝑢, 𝑣, 𝑤 ∈ 𝑉，均有 ⟨𝑢 + 𝑣, 𝑤⟩ = ⟨𝑢, 𝑤⟩ + ⟨𝑣, 𝑤⟩． 第一个位置上的齐次性（homogeneity in first slot） 对于所有𝜆 ∈ F 和所有𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝜆𝑢, 𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩． 共轭对称性（conjugate symmetry）. 对于所有𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩． 每个实数都等于其复共轭．因此如果我 们讨论的是实向量空间，那么我们可以从上 面最后一个条件中省去复共轭，并直接把它 表述为：对于所有𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝑣⟩ = ⟨𝑣, 𝑢⟩．"
    },
    {
      "id": "6.4",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.4",
      "name_en": "inner product space",
      "name_zh": "内积空间（inner product space）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An inner product space is a vector space 𝑉 along with an inner product on 𝑉.",
          "zh": "带有内积的向量空间称为内积空间．"
        }
      ],
      "note": {
        "en": "The most important example of an inner product space is 𝐅^𝑛 with the Euclidean inner product given by(a) in the example above. When 𝐅^𝑛 is referred to as an inner product space, you should assume that the inner product is the Euclidean inner product unless explicitly told otherwise.",
        "zh": "内积空间的最重要的例子，就是带有如上例(a)所示欧几里得内积的 F^𝑛 ．当称 F^𝑛是内积 空间时，除非另有说明，你都应假设其上定义的内积是欧几里得内积． 为了让我们不用反复重申𝑉和𝑊是内积空间这个前提条件，我们作出如下假设．"
      },
      "statement_en": "An inner product space is a vector space 𝑉 along with an inner product on 𝑉. The most important example of an inner product space is 𝐅^𝑛 with the Euclidean inner product given by(a) in the example above. When 𝐅^𝑛 is referred to as an inner product space, you should assume that the inner product is the Euclidean inner product unless explicitly told otherwise.",
      "statement_zh": "带有内积的向量空间称为内积空间． 内积空间的最重要的例子，就是带有如上例(a)所示欧几里得内积的 F^𝑛 ．当称 F^𝑛是内积 空间时，除非另有说明，你都应假设其上定义的内积是欧几里得内积． 为了让我们不用反复重申𝑉和𝑊是内积空间这个前提条件，我们作出如下假设．"
    },
    {
      "id": "6.5",
      "kind": "notation",
      "chapter": "ch6",
      "number": "6.5",
      "name_en": "𝑉, 𝑊",
      "name_zh": "𝑉、𝑊",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For the rest of this chapter and the next chapter, 𝑉 and 𝑊 denote inner product spaces over 𝐅.",
          "zh": "在本章的剩余部分和下章中，𝑉和𝑊都指代 F 上的内积空间．"
        }
      ],
      "note": {
        "en": "Note the slight abuse of language here. An inner product space is a vector space along with an inner product on that vector space. When we say that a vector space 𝑉 is an inner product space, we are also thinking that an inner product on 𝑉 is lurking nearby or is clear from the context(or is the Euclidean inner product if the vector space is 𝐅^𝑛).",
        "zh": "注意，这里稍微有些滥用术语．内积空间是带有内积的向量空间．当我们称一向量空间𝑉 为内积空间时，我们或是将𝑉上的内积隐含于其中，或是由上下文可明确𝑉上的内积如何定 义（又或者，如果这个向量空间是 F^𝑛，那么所用内积就是欧几里得内积）．"
      },
      "statement_en": "For the rest of this chapter and the next chapter, 𝑉 and 𝑊 denote inner product spaces over 𝐅. Note the slight abuse of language here. An inner product space is a vector space along with an inner product on that vector space. When we say that a vector space 𝑉 is an inner product space, we are also thinking that an inner product on 𝑉 is lurking nearby or is clear from the context(or is the Euclidean inner product if the vector space is 𝐅^𝑛).",
      "statement_zh": "在本章的剩余部分和下章中，𝑉和𝑊都指代 F 上的内积空间． 注意，这里稍微有些滥用术语．内积空间是带有内积的向量空间．当我们称一向量空间𝑉 为内积空间时，我们或是将𝑉上的内积隐含于其中，或是由上下文可明确𝑉上的内积如何定 义（又或者，如果这个向量空间是 F^𝑛，那么所用内积就是欧几里得内积）．"
    },
    {
      "id": "6.6",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.6",
      "name_en": "basic properties of an inner product (a) For each fixed, the function that takes to is a linear",
      "name_zh": "内积的基本性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(a) For each fixed 𝑣 ∈ 𝑉, the function that takes 𝑢 ∈ 𝑉 to ⟨𝑢, 𝑣⟩ is a linear map from 𝑉 to 𝐅. (b) ⟨0, 𝑣⟩ = 0 for every 𝑣 ∈ 𝑉. (c) ⟨𝑣, 0⟩ = 0 for every 𝑣 ∈ 𝑉. (d) ⟨𝑢, 𝑣 + 𝑤⟩ = ⟨𝑢, 𝑣⟩ + ⟨𝑢, 𝑤⟩ for all 𝑢, 𝑣, 𝑤 ∈ 𝑉. (e) ⟨𝑢, 𝜆𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩ for all 𝜆 ∈ 𝐅 and all 𝑢, 𝑣 ∈ 𝑉.",
          "zh": "(a) 对每个固定的𝑣 ∈ 𝑉，将𝑢 ∈ 𝑉对应到 ⟨𝑢, 𝑣⟩ 的函数都是𝑉到 F 的线性映射． (b) 对每个𝑣 ∈ 𝑉，均有 ⟨0, 𝑣⟩ = 0． (c) 对每个𝑣 ∈ 𝑉，均有 ⟨𝑣, 0⟩ = 0． (d) 对所有𝑢, 𝑣, 𝑤 ∈ 𝑉，均有 ⟨𝑢, 𝑣 + 𝑤⟩ = ⟨𝑢, 𝑣⟩ + ⟨𝑢, 𝑤⟩． (e) 对所有𝜆 ∈ F 和𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝜆𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩．"
        }
      ],
      "note": null,
      "statement_en": "(a) For each fixed 𝑣 ∈ 𝑉, the function that takes 𝑢 ∈ 𝑉 to ⟨𝑢, 𝑣⟩ is a linear map from 𝑉 to 𝐅. (b) ⟨0, 𝑣⟩ = 0 for every 𝑣 ∈ 𝑉. (c) ⟨𝑣, 0⟩ = 0 for every 𝑣 ∈ 𝑉. (d) ⟨𝑢, 𝑣 + 𝑤⟩ = ⟨𝑢, 𝑣⟩ + ⟨𝑢, 𝑤⟩ for all 𝑢, 𝑣, 𝑤 ∈ 𝑉. (e) ⟨𝑢, 𝜆𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩ for all 𝜆 ∈ 𝐅 and all 𝑢, 𝑣 ∈ 𝑉.",
      "statement_zh": "(a) 对每个固定的𝑣 ∈ 𝑉，将𝑢 ∈ 𝑉对应到 ⟨𝑢, 𝑣⟩ 的函数都是𝑉到 F 的线性映射． (b) 对每个𝑣 ∈ 𝑉，均有 ⟨0, 𝑣⟩ = 0． (c) 对每个𝑣 ∈ 𝑉，均有 ⟨𝑣, 0⟩ = 0． (d) 对所有𝑢, 𝑣, 𝑤 ∈ 𝑉，均有 ⟨𝑢, 𝑣 + 𝑤⟩ = ⟨𝑢, 𝑣⟩ + ⟨𝑢, 𝑤⟩． (e) 对所有𝜆 ∈ F 和𝑢, 𝑣 ∈ 𝑉，均有 ⟨𝑢, 𝜆𝑣⟩ = 𝜆⟨𝑢, 𝑣⟩．"
    },
    {
      "id": "6.7",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.7",
      "name_en": "norm, ‖𝑣‖",
      "name_zh": "范数（norm）、∥𝑣∥",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑣 ∈ 𝑉, the norm of 𝑣, denoted by ‖𝑣‖, is defined by",
          "zh": "对𝑣 ∈ 𝑉，𝑣的范数记作 ∥𝑣∥，定义为 �"
        },
        {
          "t": "formula",
          "en": "‖𝑣‖ = √⟨𝑣, 𝑣⟩.",
          "zh": "∥𝑣∥ = ⟨𝑣, 𝑣⟩．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "For 𝑣 ∈ 𝑉, the norm of 𝑣, denoted by ‖𝑣‖, is defined by ‖𝑣‖ = √⟨𝑣, 𝑣⟩.",
      "statement_zh": "对𝑣 ∈ 𝑉，𝑣的范数记作 ∥𝑣∥，定义为 � ∥𝑣∥ = ⟨𝑣, 𝑣⟩．"
    },
    {
      "id": "6.9",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.9",
      "name_en": "basic properties of the norm",
      "name_zh": "范数的基本性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣 ∈ 𝑉. (a) ‖𝑣‖ = 0 if and only if 𝑣 = 0. (b) ‖𝜆𝑣‖ = |𝜆| ‖𝑣‖ for all 𝜆 ∈ 𝐅.",
          "zh": "设𝑣 ∈ 𝑉． (a) ∥𝑣∥ = 0当且仅当𝑣 = 0． (b) 对所有𝜆 ∈ F，均有 ∥𝜆𝑣∥ = |𝜆| ∥𝑣∥．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣 ∈ 𝑉. (a) ‖𝑣‖ = 0 if and only if 𝑣 = 0. (b) ‖𝜆𝑣‖ = |𝜆| ‖𝑣‖ for all 𝜆 ∈ 𝐅.",
      "statement_zh": "设𝑣 ∈ 𝑉． (a) ∥𝑣∥ = 0当且仅当𝑣 = 0． (b) 对所有𝜆 ∈ F，均有 ∥𝜆𝑣∥ = |𝜆| ∥𝑣∥．"
    },
    {
      "id": "6.10",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.10",
      "name_en": "orthogonal",
      "name_zh": "正交（orthogonal）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Two vectors 𝑢, 𝑣 ∈ 𝑉 are called orthogonal if ⟨𝑢, 𝑣⟩ = 0.",
          "zh": "称两个向量𝑢, 𝑣 ∈ 𝑉是正交的，若 ⟨𝑢, 𝑣⟩ = 0．"
        }
      ],
      "note": {
        "en": "",
        "zh": "在上述定义中，两个向量的顺序是无关 紧要的，因为 ⟨𝑢, 𝑣⟩ = 0 当且仅当 ⟨𝑣, 𝑢⟩ = 0． 除了说“𝑢和𝑣是正交的”，我们有时也说“𝑢正交于𝑣”．"
      },
      "statement_en": "Two vectors 𝑢, 𝑣 ∈ 𝑉 are called orthogonal if ⟨𝑢, 𝑣⟩ = 0.",
      "statement_zh": "称两个向量𝑢, 𝑣 ∈ 𝑉是正交的，若 ⟨𝑢, 𝑣⟩ = 0． 在上述定义中，两个向量的顺序是无关 紧要的，因为 ⟨𝑢, 𝑣⟩ = 0 当且仅当 ⟨𝑣, 𝑢⟩ = 0． 除了说“𝑢和𝑣是正交的”，我们有时也说“𝑢正交于𝑣”．"
    },
    {
      "id": "6.11",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.11",
      "name_en": "orthogonality and 0 (a) is orthogonal to every vector in.",
      "name_zh": "正交性和0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(a) 0 is orthogonal to every vector in 𝑉. (b) 0 is the only vector in 𝑉 that is orthogonal to itself.",
          "zh": "(a) 0与𝑉中每个向量都正交． (b) 0是𝑉中唯一与自身正交的向量．"
        }
      ],
      "note": null,
      "statement_en": "(a) 0 is orthogonal to every vector in 𝑉. (b) 0 is the only vector in 𝑉 that is orthogonal to itself.",
      "statement_zh": "(a) 0与𝑉中每个向量都正交． (b) 0是𝑉中唯一与自身正交的向量．"
    },
    {
      "id": "6.12",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.12",
      "name_en": "Pythagorean theorem",
      "name_zh": "毕达哥拉斯定理^1 （Pythagorean theorem）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑢, 𝑣 ∈ 𝑉. If 𝑢 and 𝑣 are orthogonal, then",
          "zh": "设𝑢, 𝑣 ∈ 𝑉．若𝑢和𝑣是正交的，那么"
        },
        {
          "t": "formula",
          "en": "‖𝑢 + 𝑣‖^2 = ‖𝑢‖^2 + ‖𝑣‖^2.",
          "zh": "∥𝑢 + 𝑣∥^2 = ∥𝑢∥^2 + ∥𝑣∥^2 ．",
          "eq": null
        }
      ],
      "note": {
        "en": "",
        "zh": "该定理又称勾股定理．"
      },
      "statement_en": "Suppose 𝑢, 𝑣 ∈ 𝑉. If 𝑢 and 𝑣 are orthogonal, then ‖𝑢 + 𝑣‖^2 = ‖𝑢‖^2 + ‖𝑣‖^2.",
      "statement_zh": "设𝑢, 𝑣 ∈ 𝑉．若𝑢和𝑣是正交的，那么 ∥𝑢 + 𝑣∥^2 = ∥𝑢∥^2 + ∥𝑣∥^2 ． 该定理又称勾股定理．"
    },
    {
      "id": "6.13",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.13",
      "name_en": "an orthogonal decomposition",
      "name_zh": "一种正交分解",
      "include": true,
      "body": [
        {
          "t": "formula",
          "en": "⟨𝑢, 𝑣⟩, 𝑣⟩",
          "zh": "⟨𝑢, 𝑣⟩ 𝑢, 𝑣⟩",
          "eq": null
        },
        {
          "t": "p",
          "en": "Suppose 𝑢, 𝑣 ∈ 𝑉, with 𝑣 ≠ 0. Set 𝑐 =_2 and 𝑤 = 𝑢−⟨𝑢_2 𝑣. Then",
          "zh": "设𝑢, 𝑣 ∈ 𝑉，且𝑣 ≠ 0．取𝑐 =_2及𝑤 = 𝑢−⟨_2 𝑣．那么"
        },
        {
          "t": "formula",
          "en": "‖𝑣‖ ‖𝑣‖ 𝑢 = 𝑐𝑣 + 𝑤 and ⟨𝑤, 𝑣⟩ = 0.",
          "zh": "∥𝑣∥ ∥𝑣∥ 𝑢 = 𝑐𝑣 + 𝑤且 ⟨𝑤, 𝑣⟩ = 0．",
          "eq": null
        }
      ],
      "note": {
        "en": "The orthogonal decomposition 6.13 will be used in the proof of the Cauchy– Schwarz inequality, which is our next result and is one of the most important inequalities in mathematics.",
        "zh": "我们将利用正交分解6.13来证明下面的柯西-施瓦茨不等式，它是数学中最重要的不等式 之一．"
      },
      "statement_en": "⟨𝑢, 𝑣⟩, 𝑣⟩ Suppose 𝑢, 𝑣 ∈ 𝑉, with 𝑣 ≠ 0. Set 𝑐 =_2 and 𝑤 = 𝑢−⟨𝑢_2 𝑣. Then ‖𝑣‖ ‖𝑣‖ 𝑢 = 𝑐𝑣 + 𝑤 and ⟨𝑤, 𝑣⟩ = 0. The orthogonal decomposition 6.13 will be used in the proof of the Cauchy– Schwarz inequality, which is our next result and is one of the most important inequalities in mathematics.",
      "statement_zh": "⟨𝑢, 𝑣⟩ 𝑢, 𝑣⟩ 设𝑢, 𝑣 ∈ 𝑉，且𝑣 ≠ 0．取𝑐 =_2及𝑤 = 𝑢−⟨_2 𝑣．那么 ∥𝑣∥ ∥𝑣∥ 𝑢 = 𝑐𝑣 + 𝑤且 ⟨𝑤, 𝑣⟩ = 0． 我们将利用正交分解6.13来证明下面的柯西-施瓦茨不等式，它是数学中最重要的不等式 之一．"
    },
    {
      "id": "6.14",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.14",
      "name_en": "Cauchy–Schwarz inequality",
      "name_zh": "柯西-施瓦茨不等式（Cauchy-Schwarz inequality）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑢, 𝑣 ∈ 𝑉. Then",
          "zh": "设𝑢, 𝑣 ∈ 𝑉．那么"
        },
        {
          "t": "formula",
          "en": "⟨𝑢, 𝑣⟩| ≤ ‖𝑢‖ ‖𝑣‖.",
          "zh": "⟨𝑢, 𝑣⟩| ≤ ∥𝑢∥∥𝑣∥．",
          "eq": null
        },
        {
          "t": "p",
          "en": "This inequality is an equality if and only if one of 𝑢, 𝑣 is a scalar multiple of the other.",
          "zh": "当且仅当𝑢, 𝑣成标量倍数关系时，上述不等式取得等号．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑢, 𝑣 ∈ 𝑉. Then ⟨𝑢, 𝑣⟩| ≤ ‖𝑢‖ ‖𝑣‖. This inequality is an equality if and only if one of 𝑢, 𝑣 is a scalar multiple of the other.",
      "statement_zh": "设𝑢, 𝑣 ∈ 𝑉．那么 ⟨𝑢, 𝑣⟩| ≤ ∥𝑢∥∥𝑣∥． 当且仅当𝑢, 𝑣成标量倍数关系时，上述不等式取得等号．"
    },
    {
      "id": "6.17",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.17",
      "name_en": "triangle inequality",
      "name_zh": "三角不等式（triangle inequality）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑢, 𝑣 ∈ 𝑉. Then",
          "zh": "设𝑢, 𝑣 ∈ 𝑉．那么"
        },
        {
          "t": "formula",
          "en": "‖𝑢 + 𝑣‖ ≤ ‖𝑢‖ + ‖𝑣‖.",
          "zh": "∥𝑢 + 𝑣∥ ≤ ∥𝑢∥ + ∥𝑣∥．",
          "eq": null
        },
        {
          "t": "p",
          "en": "This inequality is an equality if and only if one of 𝑢, 𝑣 is a nonnegative real multiple of the other.",
          "zh": "该不等式取得等号，当且仅当𝑢, 𝑣中任意一者是另一者的非负实数倍．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑢, 𝑣 ∈ 𝑉. Then ‖𝑢 + 𝑣‖ ≤ ‖𝑢‖ + ‖𝑣‖. This inequality is an equality if and only if one of 𝑢, 𝑣 is a nonnegative real multiple of the other.",
      "statement_zh": "设𝑢, 𝑣 ∈ 𝑉．那么 ∥𝑢 + 𝑣∥ ≤ ∥𝑢∥ + ∥𝑣∥． 该不等式取得等号，当且仅当𝑢, 𝑣中任意一者是另一者的非负实数倍．"
    },
    {
      "id": "6.21",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.21",
      "name_en": "parallelogram equality",
      "name_zh": "平行四边形等式（parallelogram equality）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑢, 𝑣 ∈ 𝑉. Then",
          "zh": "设𝑢, 𝑣 ∈ 𝑉．那么"
        },
        {
          "t": "formula",
          "en": "‖𝑢 + 𝑣‖^2 + ‖𝑢−𝑣‖^2 = 2(‖𝑢‖^2 + ‖𝑣‖^2).",
          "zh": "∥𝑢 + 𝑣∥^2 + ∥𝑢−𝑣∥^2 = 2(∥𝑢∥^2 + ∥𝑣∥^2)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑢, 𝑣 ∈ 𝑉. Then ‖𝑢 + 𝑣‖^2 + ‖𝑢−𝑣‖^2 = 2(‖𝑢‖^2 + ‖𝑣‖^2).",
      "statement_zh": "设𝑢, 𝑣 ∈ 𝑉．那么 ∥𝑢 + 𝑣∥^2 + ∥𝑢−𝑣∥^2 = 2(∥𝑢∥^2 + ∥𝑣∥^2)．"
    },
    {
      "id": "6.22",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.22",
      "name_en": "orthonormal",
      "name_zh": "规范正交（orthonormal）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A list of vectors is called orthonormal if each vector in the list has norm 1 and is orthogonal to all the other vectors in the list.",
          "zh": "如果一个向量组中所有向量的范数都是1，且每个向量与其他向量都正交，则称该向 量组是规范正交的． 换言之，𝑉中向量组𝑒_1,..., 𝑒_𝑚是规范正交的，若对所有 𝑗, 𝑘 ∈{1,..., 𝑚}，"
        },
        {
          "t": "bullet",
          "en": "In other words, a list 𝑒_1, …, 𝑒_𝑚 of vectors in 𝑉 is orthonormal if",
          "zh": " 1, 若 𝑗 = 𝑘 ⟨𝑒_𝑗, 𝑒_𝑘 ⟩ =  0, 若 𝑗 ≠ 𝑘."
        },
        {
          "t": "formula",
          "en": "⎧{1 if 𝑗 = 𝑘 ⟨𝑒_𝑗, 𝑒_𝑘 ⟩ = ⎨{⎩ 0 if 𝑗 ≠ 𝑘",
          "zh": "",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑗, 𝑘 ∈{1, …, 𝑚}.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "A list of vectors is called orthonormal if each vector in the list has norm 1 and is orthogonal to all the other vectors in the list. In other words, a list 𝑒_1, …, 𝑒_𝑚 of vectors in 𝑉 is orthonormal if ⎧{1 if 𝑗 = 𝑘 ⟨𝑒_𝑗, 𝑒_𝑘 ⟩ = ⎨{⎩ 0 if 𝑗 ≠ 𝑘 for all 𝑗, 𝑘 ∈{1, …, 𝑚}.",
      "statement_zh": "如果一个向量组中所有向量的范数都是1，且每个向量与其他向量都正交，则称该向 量组是规范正交的． 换言之，𝑉中向量组𝑒_1,..., 𝑒_𝑚是规范正交的，若对所有 𝑗, 𝑘 ∈{1,..., 𝑚}，  1, 若 𝑗 = 𝑘 ⟨𝑒_𝑗, 𝑒_𝑘 ⟩ =  0, 若 𝑗 ≠ 𝑘."
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
          "en": "Suppose 𝑒_1, …, 𝑒_𝑚 is an orthonormal list of vectors in 𝑉. Then",
          "zh": "设𝑒_1,..., 𝑒_𝑚是𝑉中的规范正交向量组．那么对所有𝑎_1,..., 𝑎_𝑚 ∈ F，有"
        },
        {
          "t": "formula",
          "en": "‖𝑎_1 𝑒_1 + ⋯ + 𝑎_𝑚 𝑒_𝑚 ‖^2 = |𝑎_1 |^2 + ⋯ + |𝑎_𝑚 |^2",
          "zh": "∥𝑎_1 𝑒_1 + · · · + 𝑎_𝑚 𝑒_𝑚 ∥^2 = |𝑎_1 |^2 + · · · + |𝑎_𝑚 |^2 ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑒_1, …, 𝑒_𝑚 is an orthonormal list of vectors in 𝑉. Then ‖𝑎_1 𝑒_1 + ⋯ + 𝑎_𝑚 𝑒_𝑚 ‖^2 = |𝑎_1 |^2 + ⋯ + |𝑎_𝑚 |^2 for all 𝑎_1, …, 𝑎_𝑚 ∈ 𝐅.",
      "statement_zh": "设𝑒_1,..., 𝑒_𝑚是𝑉中的规范正交向量组．那么对所有𝑎_1,..., 𝑎_𝑚 ∈ F，有 ∥𝑎_1 𝑒_1 + · · · + 𝑎_𝑚 𝑒_𝑚 ∥^2 = |𝑎_1 |^2 + · · · + |𝑎_𝑚 |^2 ．"
    },
    {
      "id": "6.25",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.25",
      "name_en": "orthonormal lists are linearly independent",
      "name_zh": "规范正交组是线性无关的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every orthonormal list of vectors is linearly independent.",
          "zh": "每个规范正交向量组都是线性无关的．"
        }
      ],
      "note": null,
      "statement_en": "Every orthonormal list of vectors is linearly independent.",
      "statement_zh": "每个规范正交向量组都是线性无关的．"
    },
    {
      "id": "6.26",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.26",
      "name_en": "Bessel’s inequality",
      "name_zh": "贝塞尔不等式（Bessel’s inequality）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑒_1, …, 𝑒_𝑚 is an orthonormal list of vectors in 𝑉. If 𝑣 ∈ 𝑉 then",
          "zh": "设𝑒_1,..., 𝑒_𝑚是𝑉中的规范正交向量组．若𝑣 ∈ 𝑉，那么"
        },
        {
          "t": "formula",
          "en": "∣⟨𝑣, 𝑒_1 ⟩∣^2 + ⋯ + ∣⟨𝑣, 𝑒_𝑚 ⟩∣^2 ≤ ‖𝑣‖^2.",
          "zh": "⟨𝑣, 𝑒_1 ⟩|^2 + · · · + |⟨𝑣, 𝑒_𝑚 ⟩|^2 ≤ ∥𝑣∥^2 ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑒_1, …, 𝑒_𝑚 is an orthonormal list of vectors in 𝑉. If 𝑣 ∈ 𝑉 then ∣⟨𝑣, 𝑒_1 ⟩∣^2 + ⋯ + ∣⟨𝑣, 𝑒_𝑚 ⟩∣^2 ≤ ‖𝑣‖^2.",
      "statement_zh": "设𝑒_1,..., 𝑒_𝑚是𝑉中的规范正交向量组．若𝑣 ∈ 𝑉，那么 ⟨𝑣, 𝑒_1 ⟩|^2 + · · · + |⟨𝑣, 𝑒_𝑚 ⟩|^2 ≤ ∥𝑣∥^2 ．"
    },
    {
      "id": "6.27",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.27",
      "name_en": "orthonormal basis",
      "name_zh": "规范正交基（orthonormal basis）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An orthonormal basis of 𝑉 is an orthonormal list of vectors in 𝑉 that is also a basis of 𝑉.",
          "zh": "𝑉的规范正交基，就是𝑉中既是规范正交组又是基的向量组．"
        }
      ],
      "note": null,
      "statement_en": "An orthonormal basis of 𝑉 is an orthonormal list of vectors in 𝑉 that is also a basis of 𝑉.",
      "statement_zh": "𝑉的规范正交基，就是𝑉中既是规范正交组又是基的向量组．"
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
          "zh": "设𝑉是有限维的．那么𝑉中每个长度为 dim 𝑉的规范正交向量组都是𝑉的规范正交基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then every orthonormal list of vectors in 𝑉 of length dim 𝑉 is an orthonormal basis of 𝑉.",
      "statement_zh": "设𝑉是有限维的．那么𝑉中每个长度为 dim 𝑉的规范正交向量组都是𝑉的规范正交基．"
    },
    {
      "id": "6.30",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.30",
      "name_en": "writing a vector as a linear combination of an orthonormal basis",
      "name_zh": "将向量写成规范正交基的线性组合",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉 and 𝑢, 𝑣 ∈ 𝑉. Then (a) 𝑣 = ⟨𝑣, 𝑒_1 ⟩𝑒_1 + ⋯ + ⟨𝑣, 𝑒_𝑛 ⟩𝑒_𝑛; (b) ‖𝑣‖^2 = ∣⟨𝑣, 𝑒_1 ⟩∣^2 + ⋯ + ∣⟨𝑣, 𝑒_𝑛 ⟩∣^2; (c) ⟨𝑢, 𝑣⟩ = ⟨𝑢, 𝑒_1 ⟩⟨𝑣, 𝑒_1 ⟩ + ⋯ + ⟨𝑢, 𝑒_𝑛 ⟩⟨𝑣, 𝑒_𝑛 ⟩.",
          "zh": "设𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基且𝑢, 𝑣 ∈ 𝑉．那么 (a) 𝑣 = ⟨𝑣, 𝑒_1 ⟩𝑒_1 + · · · + ⟨𝑣, 𝑒_𝑛 ⟩𝑒_𝑛， (b) ∥𝑣∥^2 = |⟨𝑣, 𝑒_1 ⟩|^2 + · · · + |⟨𝑣, 𝑒_𝑛 ⟩|^2， (c) ⟨𝑢, 𝑣⟩ = ⟨𝑢, 𝑒_1 ⟩⟨𝑣, 𝑒_1 ⟩ + · · · + ⟨𝑢, 𝑒_𝑛 ⟩⟨𝑣, 𝑒_𝑛 ⟩．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉 and 𝑢, 𝑣 ∈ 𝑉. Then (a) 𝑣 = ⟨𝑣, 𝑒_1 ⟩𝑒_1 + ⋯ + ⟨𝑣, 𝑒_𝑛 ⟩𝑒_𝑛; (b) ‖𝑣‖^2 = ∣⟨𝑣, 𝑒_1 ⟩∣^2 + ⋯ + ∣⟨𝑣, 𝑒_𝑛 ⟩∣^2; (c) ⟨𝑢, 𝑣⟩ = ⟨𝑢, 𝑒_1 ⟩⟨𝑣, 𝑒_1 ⟩ + ⋯ + ⟨𝑢, 𝑒_𝑛 ⟩⟨𝑣, 𝑒_𝑛 ⟩.",
      "statement_zh": "设𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基且𝑢, 𝑣 ∈ 𝑉．那么 (a) 𝑣 = ⟨𝑣, 𝑒_1 ⟩𝑒_1 + · · · + ⟨𝑣, 𝑒_𝑛 ⟩𝑒_𝑛， (b) ∥𝑣∥^2 = |⟨𝑣, 𝑒_1 ⟩|^2 + · · · + |⟨𝑣, 𝑒_𝑛 ⟩|^2， (c) ⟨𝑢, 𝑣⟩ = ⟨𝑢, 𝑒_1 ⟩⟨𝑣, 𝑒_1 ⟩ + · · · + ⟨𝑢, 𝑒_𝑛 ⟩⟨𝑣, 𝑒_𝑛 ⟩．"
    },
    {
      "id": "6.32",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.32",
      "name_en": "Gram–Schmidt procedure",
      "name_zh": "格拉姆-施密特过程（Gram-Schmidt procedure）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣_1, …, 𝑣_𝑚 is a linearly independent list of vectors in 𝑉. Let 𝑓_1 = 𝑣_1. For 𝑘 = 2, …, 𝑚, define 𝑓_𝑘 inductively by",
          "zh": "设𝑣_1,..., 𝑣_𝑚是𝑉中的线性无关向量组．令 𝑓_1 = 𝑣_1 ．对 𝑘 = 2,..., 𝑚，依次定义 𝑓_𝑘为"
        },
        {
          "t": "formula",
          "en": "⟨𝑣_𝑘, 𝑓_1 ⟩ ⟨𝑣_𝑘, 𝑓_{𝑘−1} ⟩ 𝑓_𝑘 = 𝑣_𝑘 −_2 𝑓_1 −⋯−_2 𝑓_{𝑘−1}. ‖𝑓_1 ‖ ‖𝑓_{𝑘−1} ‖ 𝑓_𝑘",
          "zh": "⟨𝑣_𝑘, 𝑓_1 ⟩ 𝑣_𝑘, 𝑓_{𝑘−1} ⟩ 𝑓𝑘 = 𝑣𝑘−_2 𝑓1−· · ·−⟨_2 𝑓𝑘−1． ∥ 𝑓_1 ∥ ∥ 𝑓_{𝑘−1} ∥ 𝑓_𝑘",
          "eq": null
        },
        {
          "t": "p",
          "en": "For each 𝑘 = 1, …, 𝑚, let 𝑒_𝑘 =. Then 𝑒_1, …, 𝑒_𝑚 is an orthonormal list of",
          "zh": "对每个 𝑘 = 1,..., 𝑚，令 𝑒_𝑘 = ．那么 𝑒_1,..., 𝑒_𝑚是𝑉中的规范正交向量组，且对每"
        },
        {
          "t": "formula",
          "en": "‖𝑓_𝑘 ‖",
          "zh": "∥ 𝑓_𝑘 ∥",
          "eq": null
        },
        {
          "t": "p",
          "en": "vectors in 𝑉 such that",
          "zh": "个 𝑘 = 1,..., 𝑚满足"
        },
        {
          "t": "formula",
          "en": "span(𝑣_1, …, 𝑣_𝑘) = span(𝑒_1, …, 𝑒_𝑘)",
          "zh": "span(𝑣_1,..., 𝑣_𝑘) = span(𝑒_1,..., 𝑒_𝑘)．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for each 𝑘 = 1, …, 𝑚.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣_1, …, 𝑣_𝑚 is a linearly independent list of vectors in 𝑉. Let 𝑓_1 = 𝑣_1. For 𝑘 = 2, …, 𝑚, define 𝑓_𝑘 inductively by ⟨𝑣_𝑘, 𝑓_1 ⟩ ⟨𝑣_𝑘, 𝑓_{𝑘−1} ⟩ 𝑓_𝑘 = 𝑣_𝑘 −_2 𝑓_1 −⋯−_2 𝑓_{𝑘−1}. ‖𝑓_1 ‖ ‖𝑓_{𝑘−1} ‖ 𝑓_𝑘 For each 𝑘 = 1, …, 𝑚, let 𝑒_𝑘 =. Then 𝑒_1, …, 𝑒_𝑚 is an orthonormal list of ‖𝑓_𝑘 ‖ vectors in 𝑉 such that span(𝑣_1, …, 𝑣_𝑘) = span(𝑒_1, …, 𝑒_𝑘) for each 𝑘 = 1, …, 𝑚.",
      "statement_zh": "设𝑣_1,..., 𝑣_𝑚是𝑉中的线性无关向量组．令 𝑓_1 = 𝑣_1 ．对 𝑘 = 2,..., 𝑚，依次定义 𝑓_𝑘为 ⟨𝑣_𝑘, 𝑓_1 ⟩ 𝑣_𝑘, 𝑓_{𝑘−1} ⟩ 𝑓𝑘 = 𝑣𝑘−_2 𝑓1−· · ·−⟨_2 𝑓𝑘−1． ∥ 𝑓_1 ∥ ∥ 𝑓_{𝑘−1} ∥ 𝑓_𝑘 对每个 𝑘 = 1,..., 𝑚，令 𝑒_𝑘 = ．那么 𝑒_1,..., 𝑒_𝑚是𝑉中的规范正交向量组，且对每 ∥ 𝑓_𝑘 ∥ 个 𝑘 = 1,..., 𝑚满足 span(𝑣_1,..., 𝑣_𝑘) = span(𝑒_1,..., 𝑒_𝑘)．"
    },
    {
      "id": "6.35",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.35",
      "name_en": "existence of orthonormal basis",
      "name_zh": "规范正交基的存在性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every finite-dimensional inner product space has an orthonormal basis.",
          "zh": "每个有限维内积空间都有规范正交基．"
        }
      ],
      "note": null,
      "statement_en": "Every finite-dimensional inner product space has an orthonormal basis.",
      "statement_zh": "每个有限维内积空间都有规范正交基．"
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
          "zh": "设𝑉是有限维的．那么𝑉中每个规范正交向量组都能被扩充为𝑉的一个规范正交基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. Then every orthonormal list of vectors in 𝑉 can be extended to an orthonormal basis of 𝑉.",
      "statement_zh": "设𝑉是有限维的．那么𝑉中每个规范正交向量组都能被扩充为𝑉的一个规范正交基．"
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
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then 𝑇 has an upper-triangular matrix with respect to some orthonormal basis of 𝑉 if and only if the minimal polynomial of 𝑇 equals(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) for some 𝜆_1, …, 𝜆_𝑚 ∈ 𝐅.",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)．那么𝑇关于𝑉的某个规范正交基有上三角矩阵，当且仅 当𝑇的最小多项式等于(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)，其中𝜆_1,..., 𝜆_𝑚 ∈ F．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉). Then 𝑇 has an upper-triangular matrix with respect to some orthonormal basis of 𝑉 if and only if the minimal polynomial of 𝑇 equals(𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) for some 𝜆_1, …, 𝜆_𝑚 ∈ 𝐅.",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉)．那么𝑇关于𝑉的某个规范正交基有上三角矩阵，当且仅 当𝑇的最小多项式等于(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)，其中𝜆_1,..., 𝜆_𝑚 ∈ F．"
    },
    {
      "id": "6.38",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.38",
      "name_en": "Schur’s theorem",
      "name_zh": "舒尔定理（Schur’s theorem）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every operator on a finite-dimensional complex inner product space has an upper-triangular matrix with respect to some orthonormal basis.",
          "zh": "有限维复内积空间上的每个算子都关于某个规范正交基有上三角矩阵．"
        }
      ],
      "note": null,
      "statement_en": "Every operator on a finite-dimensional complex inner product space has an upper-triangular matrix with respect to some orthonormal basis.",
      "statement_zh": "有限维复内积空间上的每个算子都关于某个规范正交基有上三角矩阵．"
    },
    {
      "id": "6.39",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.39",
      "name_en": "linear functional, dual space, 𝑉^′",
      "name_zh": "线性泛函（linear functional），对偶空间（dual space）、𝑉^′",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A linear functional on 𝑉 is a linear map from 𝑉 to 𝐅.",
          "zh": "𝑉上的一个线性泛函是一个从𝑉到 F 的线性映射． 𝑉的对偶空间记作𝑉^′，是𝑉上全体线性泛函所构成的向量空间．换言之，𝑉^′ = L(𝑉, F)．"
        },
        {
          "t": "bullet",
          "en": "The dual space of 𝑉, denoted by 𝑉^′, is the vector space of all linear functionals on 𝑉. In other words, 𝑉^′ = ℒ(𝑉, 𝐅).",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "A linear functional on 𝑉 is a linear map from 𝑉 to 𝐅. The dual space of 𝑉, denoted by 𝑉^′, is the vector space of all linear functionals on 𝑉. In other words, 𝑉^′ = ℒ(𝑉, 𝐅).",
      "statement_zh": "𝑉上的一个线性泛函是一个从𝑉到 F 的线性映射． 𝑉的对偶空间记作𝑉^′，是𝑉上全体线性泛函所构成的向量空间．换言之，𝑉^′ = L(𝑉, F)．"
    },
    {
      "id": "6.42",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.42",
      "name_en": "Riesz representation theorem",
      "name_zh": "里斯表示定理（Riesz representation theorem）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝜑 is a linear functional on 𝑉. Then there is a unique vector 𝑣 ∈ 𝑉 such that",
          "zh": "设𝑉是有限维的，𝜑是𝑉上的线性泛函．那么存在唯一的向量𝑣 ∈ 𝑉，使得对每个𝑢 ∈ 𝑉 都有"
        },
        {
          "t": "formula",
          "en": "𝜑(𝑢) = ⟨𝑢, 𝑣⟩",
          "zh": "𝜑(𝑢) = ⟨𝑢, 𝑣⟩．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for every 𝑢 ∈ 𝑉.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝜑 is a linear functional on 𝑉. Then there is a unique vector 𝑣 ∈ 𝑉 such that 𝜑(𝑢) = ⟨𝑢, 𝑣⟩ for every 𝑢 ∈ 𝑉.",
      "statement_zh": "设𝑉是有限维的，𝜑是𝑉上的线性泛函．那么存在唯一的向量𝑣 ∈ 𝑉，使得对每个𝑢 ∈ 𝑉 都有 𝜑(𝑢) = ⟨𝑢, 𝑣⟩．"
    },
    {
      "id": "6.46",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.46",
      "name_en": "orthogonal complement, 𝑈^⟂",
      "name_zh": "正交补（orthogonal complement）、𝑈^⊥",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "If 𝑈 is a subset of 𝑉, then the orthogonal complement of 𝑈, denoted by 𝑈^⟂, is the set of all vectors in 𝑉 that are orthogonal to every vector in 𝑈: 𝑈^⟂ ={𝑣 ∈ 𝑉 : ⟨𝑢, 𝑣⟩ = 0 for every 𝑢 ∈ 𝑈}.",
          "zh": "若𝑈是𝑉的子集，那么𝑈的正交补，记作𝑈^⊥，是与𝑈中的每个向量都正交的所有𝑉 中向量所构成的集合："
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑈^⊥ ={𝑣 ∈ 𝑉: 对于每个𝑢 ∈ 𝑈, ⟨𝑢, 𝑣⟩ = 0}．",
          "eq": null
        }
      ],
      "note": {
        "en": "The orthogonal complement 𝑈^⟂ depends on 𝑉 as well as on 𝑈. However, the inner product space 𝑉 should always be clear from the context and thus it can be omitted from the notation.",
        "zh": "正交补𝑈^⊥同时依赖于𝑉和𝑈．然而，我们总会由上下文明确得知内积空间𝑉的选取，于 是我们可从记号中省去它．"
      },
      "statement_en": "If 𝑈 is a subset of 𝑉, then the orthogonal complement of 𝑈, denoted by 𝑈^⟂, is the set of all vectors in 𝑉 that are orthogonal to every vector in 𝑈: 𝑈^⟂ ={𝑣 ∈ 𝑉 : ⟨𝑢, 𝑣⟩ = 0 for every 𝑢 ∈ 𝑈}. The orthogonal complement 𝑈^⟂ depends on 𝑉 as well as on 𝑈. However, the inner product space 𝑉 should always be clear from the context and thus it can be omitted from the notation.",
      "statement_zh": "若𝑈是𝑉的子集，那么𝑈的正交补，记作𝑈^⊥，是与𝑈中的每个向量都正交的所有𝑉 中向量所构成的集合： 𝑈^⊥ ={𝑣 ∈ 𝑉: 对于每个𝑢 ∈ 𝑈, ⟨𝑢, 𝑣⟩ = 0}． 正交补𝑈^⊥同时依赖于𝑉和𝑈．然而，我们总会由上下文明确得知内积空间𝑉的选取，于 是我们可从记号中省去它．"
    },
    {
      "id": "6.48",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.48",
      "name_en": "properties of orthogonal complement (a) If is a subset of, then is a subspace of.",
      "name_zh": "正交补的性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(a) If 𝑈 is a subset of 𝑉, then 𝑈^⟂ is a subspace of 𝑉. (b){0}^⟂ = 𝑉. (c) 𝑉^⟂ ={0}. (d) If 𝑈 is a subset of 𝑉, then 𝑈 ∩ 𝑈^⟂ ⊆{0}. (e) If 𝐺 and 𝐻 are subsets of 𝑉 and 𝐺 ⊆ 𝐻, then 𝐻^⟂ ⊆ 𝐺^⟂.",
          "zh": "(a) 若𝑈是𝑉的子集，那么𝑈^⊥是𝑉的子空间． (b){0}^⊥ = 𝑉． (c) 𝑉^⊥ ={0}． (d) 若𝑈是𝑉的子集，那么𝑈 ∩ 𝑈^⊥ ⊆{0}． (e) 若𝐺和 𝐻是𝑉的子集且𝐺 ⊆ 𝐻，那么 𝐻^⊥ ⊆ 𝐺^⊥ ．"
        }
      ],
      "note": null,
      "statement_en": "(a) If 𝑈 is a subset of 𝑉, then 𝑈^⟂ is a subspace of 𝑉. (b){0}^⟂ = 𝑉. (c) 𝑉^⟂ ={0}. (d) If 𝑈 is a subset of 𝑉, then 𝑈 ∩ 𝑈^⟂ ⊆{0}. (e) If 𝐺 and 𝐻 are subsets of 𝑉 and 𝐺 ⊆ 𝐻, then 𝐻^⟂ ⊆ 𝐺^⟂.",
      "statement_zh": "(a) 若𝑈是𝑉的子集，那么𝑈^⊥是𝑉的子空间． (b){0}^⊥ = 𝑉． (c) 𝑉^⊥ ={0}． (d) 若𝑈是𝑉的子集，那么𝑈 ∩ 𝑈^⊥ ⊆{0}． (e) 若𝐺和 𝐻是𝑉的子集且𝐺 ⊆ 𝐻，那么 𝐻^⊥ ⊆ 𝐺^⊥ ．"
    },
    {
      "id": "6.49",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.49",
      "name_en": "direct sum of a subspace and its orthogonal complement",
      "name_zh": "子空间及其正交补的直和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. Then",
          "zh": "设𝑈是𝑉的有限维子空间．那么"
        },
        {
          "t": "formula",
          "en": "𝑉 = 𝑈 ⊕ 𝑈^⟂.",
          "zh": "𝑉 = 𝑈 ⊕ 𝑈^⊥ ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. Then 𝑉 = 𝑈 ⊕ 𝑈^⟂.",
      "statement_zh": "设𝑈是𝑉的有限维子空间．那么 𝑉 = 𝑈 ⊕ 𝑈^⊥ ．"
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
          "en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then",
          "zh": "设𝑉是有限维的，𝑈是𝑉的子空间．那么"
        },
        {
          "t": "formula",
          "en": "dim 𝑈^⟂ = dim 𝑉−dim 𝑈.",
          "zh": "dim 𝑈^⊥ = dim 𝑉−dim 𝑈．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑈 is a subspace of 𝑉. Then dim 𝑈^⟂ = dim 𝑉−dim 𝑈.",
      "statement_zh": "设𝑉是有限维的，𝑈是𝑉的子空间．那么 dim 𝑈^⊥ = dim 𝑉−dim 𝑈．"
    },
    {
      "id": "6.52",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.52",
      "name_en": "orthogonal complement of the orthogonal complement",
      "name_zh": "正交补的正交补",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. Then",
          "zh": "设𝑈是𝑉的一个有限维子空间．那么"
        },
        {
          "t": "formula",
          "en": "𝑈 =(𝑈^⟂)^⟂.",
          "zh": "𝑈 =(𝑈^⊥)^⊥ ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. Then 𝑈 =(𝑈^⟂)^⟂.",
      "statement_zh": "设𝑈是𝑉的一个有限维子空间．那么 𝑈 =(𝑈^⊥)^⊥ ．"
    },
    {
      "id": "6.54",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.54",
      "name_en": "𝑈^⟂ ={0} ⟺ 𝑈 = 𝑉(for 𝑈 a finite-dimensional subspace of 𝑉)",
      "name_zh": "对𝑉的有限维子空间𝑈，有𝑈^⊥ ={0} ⇐⇒ 𝑈 = 𝑉",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. Then",
          "zh": "设𝑈是𝑉的有限维子空间．那么"
        },
        {
          "t": "formula",
          "en": "𝑈^⟂ ={0} ⟺ 𝑈 = 𝑉.",
          "zh": "𝑈^⊥ ={0} ⇐⇒ 𝑈 = 𝑉．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. Then 𝑈^⟂ ={0} ⟺ 𝑈 = 𝑉.",
      "statement_zh": "设𝑈是𝑉的有限维子空间．那么 𝑈^⊥ ={0} ⇐⇒ 𝑈 = 𝑉．"
    },
    {
      "id": "6.55",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.55",
      "name_en": "orthogonal projection, 𝑃_𝑈",
      "name_zh": "正交投影（orthogonal projection）、𝑃_𝑈",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. The orthogonal projection of 𝑉 onto 𝑈 is the operator 𝑃_𝑈 ∈ ℒ(𝑉) defined as follows: For each 𝑣 ∈ 𝑉, write 𝑣 = 𝑢 + 𝑤, where 𝑢 ∈ 𝑈 and 𝑤 ∈ 𝑈^⟂. Then let 𝑃_𝑈 𝑣 = 𝑢.",
          "zh": "设𝑈是𝑉的一个有限维子空间．将𝑉映成𝑈的正交投影是定义如下的算子 𝑃_𝑈 ∈ L(𝑉)： 对每个𝑣 ∈ 𝑉，将其写成𝑣 = 𝑢 + 𝑤，其中𝑢 ∈ 𝑈且𝑤 ∈ 𝑈^⊥，然后令 𝑃_𝑈 𝑣 = 𝑢．"
        }
      ],
      "note": {
        "en": "The direct sum decomposition 𝑉 = 𝑈 ⊕ 𝑈^⟂ given by 6.49 shows that each 𝑣 ∈ 𝑉 can be uniquely written in the form 𝑣 = 𝑢 + 𝑤 with 𝑢 ∈ 𝑈 and 𝑤 ∈ 𝑈^⟂ Thus 𝑃_𝑈 𝑣 is well defined. See the figure that accompanies the proof of 6.61 for the picture describing 𝑃_𝑈 𝑣 that you should keep in mind.",
        "zh": "6.49给出的直和分解式𝑉 = 𝑈 ⊕ 𝑈^⊥表明，𝑣 ∈ 𝑉可以被唯一表示为𝑣 = 𝑢 + 𝑤（其中𝑢 ∈ 𝑈 且𝑤 ∈ 𝑈^⊥ ）的形式．由此可见 𝑃_𝑈 𝑣的定义是完善的．请看6.61的证明中所附的示意图——你 应该将这张描述 𝑃_𝑈 𝑣的图像牢记于心．"
      },
      "statement_en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. The orthogonal projection of 𝑉 onto 𝑈 is the operator 𝑃_𝑈 ∈ ℒ(𝑉) defined as follows: For each 𝑣 ∈ 𝑉, write 𝑣 = 𝑢 + 𝑤, where 𝑢 ∈ 𝑈 and 𝑤 ∈ 𝑈^⟂. Then let 𝑃_𝑈 𝑣 = 𝑢. The direct sum decomposition 𝑉 = 𝑈 ⊕ 𝑈^⟂ given by 6.49 shows that each 𝑣 ∈ 𝑉 can be uniquely written in the form 𝑣 = 𝑢 + 𝑤 with 𝑢 ∈ 𝑈 and 𝑤 ∈ 𝑈^⟂ Thus 𝑃_𝑈 𝑣 is well defined. See the figure that accompanies the proof of 6.61 for the picture describing 𝑃_𝑈 𝑣 that you should keep in mind.",
      "statement_zh": "设𝑈是𝑉的一个有限维子空间．将𝑉映成𝑈的正交投影是定义如下的算子 𝑃_𝑈 ∈ L(𝑉)： 对每个𝑣 ∈ 𝑉，将其写成𝑣 = 𝑢 + 𝑤，其中𝑢 ∈ 𝑈且𝑤 ∈ 𝑈^⊥，然后令 𝑃_𝑈 𝑣 = 𝑢． 6.49给出的直和分解式𝑉 = 𝑈 ⊕ 𝑈^⊥表明，𝑣 ∈ 𝑉可以被唯一表示为𝑣 = 𝑢 + 𝑤（其中𝑢 ∈ 𝑈 且𝑤 ∈ 𝑈^⊥ ）的形式．由此可见 𝑃_𝑈 𝑣的定义是完善的．请看6.61的证明中所附的示意图——你 应该将这张描述 𝑃_𝑈 𝑣的图像牢记于心．"
    },
    {
      "id": "6.57",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.57",
      "name_en": "properties of orthogonal projection 𝑃_𝑈",
      "name_zh": "正交投影 𝑃_𝑈的性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. Then (a) 𝑃_𝑈 ∈ ℒ(𝑉); (b) 𝑃_𝑈 𝑢 = 𝑢 for every 𝑢 ∈ 𝑈; (c) 𝑃_𝑈 𝑤 = 0 for every 𝑤 ∈ 𝑈^⟂; (d) range 𝑃_𝑈 = 𝑈; (e) null 𝑃_𝑈 = 𝑈^⟂; (f) 𝑣−𝑃_𝑈 𝑣 ∈ 𝑈^⟂ for every 𝑣 ∈ 𝑉; 2 = 𝑃 (g) 𝑃_{𝑈𝑈}; (h) ‖𝑃_𝑈 𝑣‖ ≤ ‖𝑣‖ for every 𝑣 ∈ 𝑉; (i) if 𝑒_1, …, 𝑒_𝑚 is an orthonormal basis of 𝑈 and 𝑣 ∈ 𝑉, then",
          "zh": "设𝑈是𝑉的有限维子空间．那么 (a) 𝑃_𝑈 ∈ L(𝑉)； (b) 对每个𝑢 ∈ 𝑈，都有 𝑃_𝑈 𝑢 = 𝑢； (c) 对每个𝑤 ∈ 𝑈^⊥，都有 𝑃_𝑈 𝑤 = 0； (d) range 𝑃_𝑈 = 𝑈； (e) null 𝑃_𝑈 = 𝑈^⊥； (f) 对每个𝑣 ∈ 𝑉，都有𝑣−𝑃_𝑈 𝑣 ∈ 𝑈^⊥； (g) 𝑃^2_𝑈 = 𝑃_𝑈； (h) 对每个𝑣 ∈ 𝑉，都有 ∥𝑃_𝑈 𝑣∥ ≤ ∥𝑣∥； (i) 若𝑒_1,..., 𝑒_𝑚是𝑈的一个规范正交基且𝑣 ∈ 𝑉，那么"
        },
        {
          "t": "formula",
          "en": "𝑃_𝑈 𝑣 = ⟨𝑣, 𝑒_1 ⟩𝑒_1 + ⋯ + ⟨𝑣, 𝑒_𝑚 ⟩𝑒_𝑚.",
          "zh": "𝑃_𝑈 𝑣 = ⟨𝑣, 𝑒_1 ⟩𝑒_1 + · · · + ⟨𝑣, 𝑒_𝑚 ⟩𝑒_𝑚 ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉. Then (a) 𝑃_𝑈 ∈ ℒ(𝑉); (b) 𝑃_𝑈 𝑢 = 𝑢 for every 𝑢 ∈ 𝑈; (c) 𝑃_𝑈 𝑤 = 0 for every 𝑤 ∈ 𝑈^⟂; (d) range 𝑃_𝑈 = 𝑈; (e) null 𝑃_𝑈 = 𝑈^⟂; (f) 𝑣−𝑃_𝑈 𝑣 ∈ 𝑈^⟂ for every 𝑣 ∈ 𝑉; 2 = 𝑃 (g) 𝑃_{𝑈𝑈}; (h) ‖𝑃_𝑈 𝑣‖ ≤ ‖𝑣‖ for every 𝑣 ∈ 𝑉; (i) if 𝑒_1, …, 𝑒_𝑚 is an orthonormal basis of 𝑈 and 𝑣 ∈ 𝑉, then 𝑃_𝑈 𝑣 = ⟨𝑣, 𝑒_1 ⟩𝑒_1 + ⋯ + ⟨𝑣, 𝑒_𝑚 ⟩𝑒_𝑚.",
      "statement_zh": "设𝑈是𝑉的有限维子空间．那么 (a) 𝑃_𝑈 ∈ L(𝑉)； (b) 对每个𝑢 ∈ 𝑈，都有 𝑃_𝑈 𝑢 = 𝑢； (c) 对每个𝑤 ∈ 𝑈^⊥，都有 𝑃_𝑈 𝑤 = 0； (d) range 𝑃_𝑈 = 𝑈； (e) null 𝑃_𝑈 = 𝑈^⊥； (f) 对每个𝑣 ∈ 𝑉，都有𝑣−𝑃_𝑈 𝑣 ∈ 𝑈^⊥； (g) 𝑃^2_𝑈 = 𝑃_𝑈； (h) 对每个𝑣 ∈ 𝑉，都有 ∥𝑃_𝑈 𝑣∥ ≤ ∥𝑣∥； (i) 若𝑒_1,..., 𝑒_𝑚是𝑈的一个规范正交基且𝑣 ∈ 𝑉，那么 𝑃_𝑈 𝑣 = ⟨𝑣, 𝑒_1 ⟩𝑒_1 + · · · + ⟨𝑣, 𝑒_𝑚 ⟩𝑒_𝑚 ．"
    },
    {
      "id": "6.58",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.58",
      "name_en": "Riesz representation theorem, revisited",
      "name_zh": "里斯表示定理再讨论",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional. For each 𝑣 ∈ 𝑉, define 𝜑_𝑣 ∈ 𝑉^′ by",
          "zh": "设𝑉是有限维的．对每个𝑣 ∈ 𝑉，定义 𝜑_𝑣 ∈ 𝑉^′为：对每个𝑢 ∈ 𝑉，"
        },
        {
          "t": "formula",
          "en": "𝜑_𝑣(𝑢) = ⟨𝑢, 𝑣⟩",
          "zh": "𝜑_𝑣(𝑢) = ⟨𝑢, 𝑣⟩．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for each 𝑢 ∈ 𝑉. Then 𝑣 ↦ 𝜑_𝑣 is a one-to-one function from 𝑉 onto 𝑉^′.",
          "zh": "那么𝑣 ↦→ 𝜑_𝑣是将𝑉映成𝑉^′的一对一函数．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional. For each 𝑣 ∈ 𝑉, define 𝜑_𝑣 ∈ 𝑉^′ by 𝜑_𝑣(𝑢) = ⟨𝑢, 𝑣⟩ for each 𝑢 ∈ 𝑉. Then 𝑣 ↦ 𝜑_𝑣 is a one-to-one function from 𝑉 onto 𝑉^′.",
      "statement_zh": "设𝑉是有限维的．对每个𝑣 ∈ 𝑉，定义 𝜑_𝑣 ∈ 𝑉^′为：对每个𝑢 ∈ 𝑉， 𝜑_𝑣(𝑢) = ⟨𝑢, 𝑣⟩． 那么𝑣 ↦→ 𝜑_𝑣是将𝑉映成𝑉^′的一对一函数．"
    },
    {
      "id": "6.61",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.61",
      "name_en": "minimizing distance to a subspace",
      "name_zh": "到子空间的最短距离",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉, 𝑣 ∈ 𝑉, and 𝑢 ∈ 𝑈. Then",
          "zh": "设𝑈是𝑉的有限维子空间，𝑣 ∈ 𝑉且𝑢 ∈ 𝑈．那么"
        },
        {
          "t": "formula",
          "en": "‖𝑣−𝑃_𝑈 𝑣‖ ≤ ‖𝑣−𝑢‖.",
          "zh": "∥𝑣−𝑃_𝑈 𝑣∥ ≤ ∥𝑣−𝑢∥．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Furthermore, the inequality above is an equality if and only if 𝑢 = 𝑃_𝑈 𝑣.",
          "zh": "进一步，上述不等式取得等号当且仅当𝑢 = 𝑃_𝑈 𝑣．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a finite-dimensional subspace of 𝑉, 𝑣 ∈ 𝑉, and 𝑢 ∈ 𝑈. Then ‖𝑣−𝑃_𝑈 𝑣‖ ≤ ‖𝑣−𝑢‖. Furthermore, the inequality above is an equality if and only if 𝑢 = 𝑃_𝑈 𝑣.",
      "statement_zh": "设𝑈是𝑉的有限维子空间，𝑣 ∈ 𝑉且𝑢 ∈ 𝑈．那么 ∥𝑣−𝑃_𝑈 𝑣∥ ≤ ∥𝑣−𝑢∥． 进一步，上述不等式取得等号当且仅当𝑢 = 𝑃_𝑈 𝑣．"
    },
    {
      "id": "6.67",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.67",
      "name_en": "restriction of a linear map to obtain a one-to-one and onto map",
      "name_zh": "限制线性映射以获得既单又满的映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇|_{(null𝑇)} ⟂ is an injective map of(null 𝑇)^⟂ onto range 𝑇.",
          "zh": "设𝑉是有限维的，且𝑇 ∈ L(𝑉,𝑊)．那么𝑇|_{(null𝑇)} ⊥ 是将(null 𝑇)^⊥映成 range 𝑇的单射．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). Then 𝑇|_{(null𝑇)} ⟂ is an injective map of(null 𝑇)^⟂ onto range 𝑇.",
      "statement_zh": "设𝑉是有限维的，且𝑇 ∈ L(𝑉,𝑊)．那么𝑇|_{(null𝑇)} ⊥ 是将(null 𝑇)^⊥映成 range 𝑇的单射．"
    },
    {
      "id": "6.68",
      "kind": "definition",
      "chapter": "ch6",
      "number": "6.68",
      "name_en": "pseudoinverse, 𝑇^†",
      "name_zh": "伪逆（pseudoinverse）、𝑇^†",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). The pseudoinverse 𝑇^† ∈ ℒ(𝑊, 𝑉) of 𝑇 is the linear map from 𝑊 to 𝑉 defined by",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉,𝑊)．𝑇的伪逆𝑇^† ∈ L(𝑊,𝑉) 是定义如下的从𝑊到𝑉的线性 映射：对每个𝑤 ∈ 𝑊，"
        },
        {
          "t": "formula",
          "en": "𝑇^† 𝑤 =(𝑇|_{(null𝑇)} ⟂)^{−1} 𝑃_{range𝑇} 𝑤",
          "zh": "𝑇^† 𝑤 =(𝑇|_{(null𝑇)} ⊥)^{−1} 𝑃_{range𝑇} 𝑤．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for each 𝑤 ∈ 𝑊.",
          "zh": ""
        }
      ],
      "note": {
        "en": "Recall that 𝑃_{range𝑇} 𝑤 = 0 if 𝑤 ∈(range 𝑇)^⟂ and 𝑃_{range𝑇} 𝑤 = 𝑤 if 𝑤 ∈ range 𝑇 Thus if 𝑤 ∈(range 𝑇)^⟂, then 𝑇^† 𝑤 = 0, and if 𝑤 ∈ range 𝑇, then 𝑇^† 𝑤 is the unique element of(null 𝑇)^⟂ such that 𝑇(𝑇^† 𝑤) = 𝑤. The pseudoinverse behaves much like an inverse, as we will see.",
        "zh": "回忆一下，若𝑤 ∈(range 𝑇)^⊥，则𝑃_{range𝑇} 𝑤 = 0；若𝑤 ∈ range 𝑇，则𝑃_{range𝑇} 𝑤 = 𝑤．于是，如 果𝑤 ∈(range 𝑇)^⊥，则𝑇^† 𝑤 = 0；若𝑤 ∈ range 𝑇，则𝑇^† 𝑤是(null 𝑇)^⊥中唯一满足𝑇(𝑇^† 𝑤) = 𝑤的 元素． 我们将看到，伪逆看上去很像一般的逆．"
      },
      "statement_en": "Suppose that 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). The pseudoinverse 𝑇^† ∈ ℒ(𝑊, 𝑉) of 𝑇 is the linear map from 𝑊 to 𝑉 defined by 𝑇^† 𝑤 =(𝑇|_{(null𝑇)} ⟂)^{−1} 𝑃_{range𝑇} 𝑤 for each 𝑤 ∈ 𝑊. Recall that 𝑃_{range𝑇} 𝑤 = 0 if 𝑤 ∈(range 𝑇)^⟂ and 𝑃_{range𝑇} 𝑤 = 𝑤 if 𝑤 ∈ range 𝑇 Thus if 𝑤 ∈(range 𝑇)^⟂, then 𝑇^† 𝑤 = 0, and if 𝑤 ∈ range 𝑇, then 𝑇^† 𝑤 is the unique element of(null 𝑇)^⟂ such that 𝑇(𝑇^† 𝑤) = 𝑤. The pseudoinverse behaves much like an inverse, as we will see.",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉,𝑊)．𝑇的伪逆𝑇^† ∈ L(𝑊,𝑉) 是定义如下的从𝑊到𝑉的线性 映射：对每个𝑤 ∈ 𝑊， 𝑇^† 𝑤 =(𝑇|_{(null𝑇)} ⊥)^{−1} 𝑃_{range𝑇} 𝑤． 回忆一下，若𝑤 ∈(range 𝑇)^⊥，则𝑃_{range𝑇} 𝑤 = 0；若𝑤 ∈ range 𝑇，则𝑃_{range𝑇} 𝑤 = 𝑤．于是，如 果𝑤 ∈(range 𝑇)^⊥，则𝑇^† 𝑤 = 0；若𝑤 ∈ range 𝑇，则𝑇^† 𝑤是(null 𝑇)^⊥中唯一满足𝑇(𝑇^† 𝑤) = 𝑤的 元素． 我们将看到，伪逆看上去很像一般的逆．"
    },
    {
      "id": "6.69",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.69",
      "name_en": "algebraic properties of the pseudoinverse",
      "name_zh": "伪逆的代数性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). (a) If 𝑇 is invertible, then 𝑇^† = 𝑇^{−1}. (b) 𝑇𝑇^† = 𝑃_{range𝑇} = the orthogonal projection of 𝑊 onto range 𝑇. (c) 𝑇^† 𝑇 = 𝑃_{(null𝑇)} ⟂ = the orthogonal projection of 𝑉 onto(null 𝑇)^⟂.",
          "zh": "设𝑉是有限维的且𝑇 ∈ L(𝑉,𝑊)． (a) 若𝑇可逆，则𝑇^† = 𝑇^{−1} ． (b) 𝑇𝑇^† = 𝑃_{range𝑇} =将𝑊映成 range 𝑇的正交投影． (c) 𝑇^† 𝑇 = 𝑃_{(null𝑇)} ⊥ =将𝑉映成(null 𝑇)^⊥的正交投影．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional and 𝑇 ∈ ℒ(𝑉, 𝑊). (a) If 𝑇 is invertible, then 𝑇^† = 𝑇^{−1}. (b) 𝑇𝑇^† = 𝑃_{range𝑇} = the orthogonal projection of 𝑊 onto range 𝑇. (c) 𝑇^† 𝑇 = 𝑃_{(null𝑇)} ⟂ = the orthogonal projection of 𝑉 onto(null 𝑇)^⟂.",
      "statement_zh": "设𝑉是有限维的且𝑇 ∈ L(𝑉,𝑊)． (a) 若𝑇可逆，则𝑇^† = 𝑇^{−1} ． (b) 𝑇𝑇^† = 𝑃_{range𝑇} =将𝑊映成 range 𝑇的正交投影． (c) 𝑇^† 𝑇 = 𝑃_{(null𝑇)} ⊥ =将𝑉映成(null 𝑇)^⊥的正交投影．"
    },
    {
      "id": "6.70",
      "kind": "result",
      "chapter": "ch6",
      "number": "6.70",
      "name_en": "pseudoinverse provides best approximate solution or best solution",
      "name_zh": "伪逆可给出最佳近似解或最优解",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ ℒ(𝑉, 𝑊), and 𝑤 ∈ 𝑊. (a) If 𝑣 ∈ 𝑉, then",
          "zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉,𝑊)，𝑤 ∈ 𝑊． (a) 若𝑣 ∈ 𝑉，则"
        },
        {
          "t": "formula",
          "en": "∥𝑇(𝑇^† 𝑤)−𝑤∥ ≤ ‖𝑇𝑣−𝑤‖",
          "zh": "∥𝑇(𝑇^† 𝑤)−𝑤∥ ≤ ∥𝑇𝑣−𝑤∥",
          "eq": null
        },
        {
          "t": "p",
          "en": "with equality if and only if 𝑣 ∈ 𝑇^† 𝑤 + null 𝑇. (b) If 𝑣 ∈ 𝑇^† 𝑤 + null 𝑇, then",
          "zh": "当且仅当𝑣 ∈ 𝑇^† 𝑤 + null 𝑇时，上式取得等号． (b) 若𝑣 ∈ 𝑇^† 𝑤 + null 𝑇，则"
        },
        {
          "t": "formula",
          "en": "∥𝑇^† 𝑤∥ ≤ ‖𝑣‖",
          "zh": "∥𝑇^† 𝑤∥ ≤ ∥𝑣∥",
          "eq": null
        },
        {
          "t": "p",
          "en": "with equality if and only if 𝑣 = 𝑇^† 𝑤.",
          "zh": "当且仅当𝑣 = 𝑇^† 𝑤时，上式取得等号．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is finite-dimensional, 𝑇 ∈ ℒ(𝑉, 𝑊), and 𝑤 ∈ 𝑊. (a) If 𝑣 ∈ 𝑉, then ∥𝑇(𝑇^† 𝑤)−𝑤∥ ≤ ‖𝑇𝑣−𝑤‖ with equality if and only if 𝑣 ∈ 𝑇^† 𝑤 + null 𝑇. (b) If 𝑣 ∈ 𝑇^† 𝑤 + null 𝑇, then ∥𝑇^† 𝑤∥ ≤ ‖𝑣‖ with equality if and only if 𝑣 = 𝑇^† 𝑤.",
      "statement_zh": "设𝑉是有限维的，𝑇 ∈ L(𝑉,𝑊)，𝑤 ∈ 𝑊． (a) 若𝑣 ∈ 𝑉，则 ∥𝑇(𝑇^† 𝑤)−𝑤∥ ≤ ∥𝑇𝑣−𝑤∥ 当且仅当𝑣 ∈ 𝑇^† 𝑤 + null 𝑇时，上式取得等号． (b) 若𝑣 ∈ 𝑇^† 𝑤 + null 𝑇，则 ∥𝑇^† 𝑤∥ ≤ ∥𝑣∥ 当且仅当𝑣 = 𝑇^† 𝑤时，上式取得等号．"
    },
    {
      "id": "7.1",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.1",
      "name_en": "adjoint, 𝑇∗",
      "name_zh": "伴随（adjoint）、𝑇^∗",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). The adjoint of 𝑇 is the function 𝑇∗: 𝑊 → 𝑉 such that",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)．𝑇的伴随是使得对任一𝑣 ∈ 𝑉和任一𝑤 ∈ 𝑊都有"
        },
        {
          "t": "formula",
          "en": "⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣, 𝑇∗𝑤⟩",
          "zh": "⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣,𝑇^∗ 𝑤⟩",
          "eq": null
        },
        {
          "t": "p",
          "en": "for every 𝑣 ∈ 𝑉 and every 𝑤 ∈ 𝑊.",
          "zh": "的函数𝑇^∗: 𝑊 → 𝑉．"
        }
      ],
      "note": {
        "en": "",
        "zh": "下面看看以上定义为什么是有意义的： 设 𝑇 ∈ L(𝑉,𝑊)，取定 𝑤 ∈ 𝑊，考虑 𝑉上 的线性泛函 𝑣 ↦→ ⟨𝑇𝑣, 𝑤⟩， 它将𝑣 ∈ 𝑉映射到 ⟨𝑇𝑣, 𝑤⟩．该线性泛函依赖于𝑇和𝑤．根据里斯表示定理（6.42），𝑉中存在唯 一的向量，使得该线性泛函由与它的内积给出．我们称这唯一的向量为𝑇^∗ 𝑤．换句话说，𝑇^∗ 𝑤 是𝑉中使得对任一𝑣 ∈ 𝑉都有 ⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣,𝑇^∗ 𝑤⟩ 的唯一向量． 上式中，左侧的内积是在𝑊上的，右侧的内积是在𝑉上的．不过，我们对这两种内积用 相同的记号 ⟨·, ·⟩．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). The adjoint of 𝑇 is the function 𝑇∗: 𝑊 → 𝑉 such that ⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣, 𝑇∗𝑤⟩ for every 𝑣 ∈ 𝑉 and every 𝑤 ∈ 𝑊.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)．𝑇的伴随是使得对任一𝑣 ∈ 𝑉和任一𝑤 ∈ 𝑊都有 ⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣,𝑇^∗ 𝑤⟩ 的函数𝑇^∗: 𝑊 → 𝑉． 下面看看以上定义为什么是有意义的： 设 𝑇 ∈ L(𝑉,𝑊)，取定 𝑤 ∈ 𝑊，考虑 𝑉上 的线性泛函 𝑣 ↦→ ⟨𝑇𝑣, 𝑤⟩， 它将𝑣 ∈ 𝑉映射到 ⟨𝑇𝑣, 𝑤⟩．该线性泛函依赖于𝑇和𝑤．根据里斯表示定理（6.42），𝑉中存在唯 一的向量，使得该线性泛函由与它的内积给出．我们称这唯一的向量为𝑇^∗ 𝑤．换句话说，𝑇^∗ 𝑤 是𝑉中使得对任一𝑣 ∈ 𝑉都有 ⟨𝑇𝑣, 𝑤⟩ = ⟨𝑣,𝑇^∗ 𝑤⟩ 的唯一向量． 上式中，左侧的内积是在𝑊上的，右侧的内积是在𝑉上的．不过，我们对这两种内积用 相同的记号 ⟨·, ·⟩．"
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
          "en": "If 𝑇 ∈ ℒ(𝑉, 𝑊), then 𝑇∗ ∈ ℒ(𝑊, 𝑉).",
          "zh": "如果𝑇 ∈ L(𝑉,𝑊)，那么𝑇^∗ ∈ L(𝑊,𝑉)．"
        }
      ],
      "note": null,
      "statement_en": "If 𝑇 ∈ ℒ(𝑉, 𝑊), then 𝑇∗ ∈ ℒ(𝑊, 𝑉).",
      "statement_zh": "如果𝑇 ∈ L(𝑉,𝑊)，那么𝑇^∗ ∈ L(𝑊,𝑉)．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a)(𝑆 + 𝑇)∗ = 𝑆∗ + 𝑇∗ for all 𝑆 ∈ ℒ(𝑉, 𝑊); (b)(𝜆𝑇)∗ = 𝜆𝑇∗ for all 𝜆 ∈ 𝐅; ∗ ∗ (c)(𝑇) = 𝑇; (d)(𝑆𝑇)∗ = 𝑇∗𝑆∗ for all 𝑆 ∈ ℒ(𝑊, 𝑈)(here 𝑈 is a finite-dimensional inner product space over 𝐅); (e) 𝐼∗ = 𝐼, where 𝐼 is the identity operator on 𝑉;",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，那么有： (a)(𝑆 + 𝑇)^∗ = 𝑆^∗ + 𝑇^∗对所有 𝑆 ∈ L(𝑉,𝑊) 成立； (b)(𝜆𝑇)^∗ = 𝜆𝑇^∗对所有𝜆 ∈ F 成立； (c)(𝑇^∗)^∗ = 𝑇； (d)(𝑆𝑇)^∗ = 𝑇^∗ 𝑆^∗对所有 𝑆 ∈ L(𝑊,𝑈) 成立（这里𝑈是 F 上的有限维内积空间）； (e) 𝐼^∗ = 𝐼，其中 𝐼是𝑉上的恒等算子； (f) 如果𝑇可逆，那么𝑇^∗可逆且(𝑇^∗)^{−1} =(𝑇^{−1})^∗ ．"
        },
        {
          "t": "formula",
          "en": "∗ ∗−1−1 ∗",
          "zh": "",
          "eq": null
        },
        {
          "t": "p",
          "en": "(f) if 𝑇 is invertible, then 𝑇 is invertible and(𝑇) =(𝑇).",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a)(𝑆 + 𝑇)∗ = 𝑆∗ + 𝑇∗ for all 𝑆 ∈ ℒ(𝑉, 𝑊); (b)(𝜆𝑇)∗ = 𝜆𝑇∗ for all 𝜆 ∈ 𝐅; ∗ ∗ (c)(𝑇) = 𝑇; (d)(𝑆𝑇)∗ = 𝑇∗𝑆∗ for all 𝑆 ∈ ℒ(𝑊, 𝑈)(here 𝑈 is a finite-dimensional inner product space over 𝐅); (e) 𝐼∗ = 𝐼, where 𝐼 is the identity operator on 𝑉; ∗ ∗−1−1 ∗ (f) if 𝑇 is invertible, then 𝑇 is invertible and(𝑇) =(𝑇).",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，那么有： (a)(𝑆 + 𝑇)^∗ = 𝑆^∗ + 𝑇^∗对所有 𝑆 ∈ L(𝑉,𝑊) 成立； (b)(𝜆𝑇)^∗ = 𝜆𝑇^∗对所有𝜆 ∈ F 成立； (c)(𝑇^∗)^∗ = 𝑇； (d)(𝑆𝑇)^∗ = 𝑇^∗ 𝑆^∗对所有 𝑆 ∈ L(𝑊,𝑈) 成立（这里𝑈是 F 上的有限维内积空间）； (e) 𝐼^∗ = 𝐼，其中 𝐼是𝑉上的恒等算子； (f) 如果𝑇可逆，那么𝑇^∗可逆且(𝑇^∗)^{−1} =(𝑇^{−1})^∗ ．"
    },
    {
      "id": "7.6",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.6",
      "name_en": "null space and range of 𝑇∗",
      "name_zh": "𝑇^∗的零空间和值域",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) null 𝑇∗ =(range 𝑇)^⟂; (b) range 𝑇∗ =(null 𝑇)^⟂; (c) null 𝑇 =(range 𝑇∗)^⟂; (d) range 𝑇 =(null 𝑇∗)^⟂.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，那么有： (a) null 𝑇^∗ =(range 𝑇)^⊥； (b) range 𝑇^∗ =(null 𝑇)^⊥； (c) null 𝑇 =(range 𝑇^∗)^⊥； (d) range 𝑇 =(null 𝑇^∗)^⊥ ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) null 𝑇∗ =(range 𝑇)^⟂; (b) range 𝑇∗ =(null 𝑇)^⟂; (c) null 𝑇 =(range 𝑇∗)^⟂; (d) range 𝑇 =(null 𝑇∗)^⟂.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，那么有： (a) null 𝑇^∗ =(range 𝑇)^⊥； (b) range 𝑇^∗ =(null 𝑇)^⊥； (c) null 𝑇 =(range 𝑇^∗)^⊥； (d) range 𝑇 =(null 𝑇^∗)^⊥ ．"
    },
    {
      "id": "7.7",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.7",
      "name_en": "conjugate transpose, 𝐴∗",
      "name_zh": "共轭转置（conjugate transpose）、𝐴^∗",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The conjugate transpose of an 𝑚-by-𝑛 matrix 𝐴 is the 𝑛-by-𝑚 matrix 𝐴∗ obtained by interchanging the rows and columns and then taking the complex conjugate of each entry. In other words, if 𝑗 ∈{1, …, 𝑛} and 𝑘 ∈{1, …, 𝑚}, then",
          "zh": "𝑚 × 𝑛矩阵 𝐴的共轭转置是将其行列互换再对每个元素取复共轭得到的 𝑛 × 𝑚矩阵 𝐴^∗ ． 换句话说，如果 𝑗 ∈{1,..., 𝑛} 且 𝑘 ∈{1,..., 𝑚}，那么有"
        },
        {
          "t": "formula",
          "en": "(𝐴∗)_{𝑗,𝑘} = 𝐴_{𝑘,𝑗}.",
          "zh": "(𝐴^∗)𝑗,𝑘 = 𝐴_{𝑘,𝑗} ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "The conjugate transpose of an 𝑚-by-𝑛 matrix 𝐴 is the 𝑛-by-𝑚 matrix 𝐴∗ obtained by interchanging the rows and columns and then taking the complex conjugate of each entry. In other words, if 𝑗 ∈{1, …, 𝑛} and 𝑘 ∈{1, …, 𝑚}, then (𝐴∗)_{𝑗,𝑘} = 𝐴_{𝑘,𝑗}.",
      "statement_zh": "𝑚 × 𝑛矩阵 𝐴的共轭转置是将其行列互换再对每个元素取复共轭得到的 𝑛 × 𝑚矩阵 𝐴^∗ ． 换句话说，如果 𝑗 ∈{1,..., 𝑛} 且 𝑘 ∈{1,..., 𝑚}，那么有 (𝐴^∗)𝑗,𝑘 = 𝐴_{𝑘,𝑗} ．"
    },
    {
      "id": "7.9",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.9",
      "name_en": "matrix of 𝑇∗ equals conjugate transpose of matrix of 𝑇",
      "name_zh": "𝑇^∗的矩阵等于𝑇的矩阵的共轭转置",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Let 𝑇 ∈ ℒ(𝑉, 𝑊). Suppose 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉 and 𝑓_1, …, 𝑓_𝑚 is an orthonormal basis of 𝑊. Then ℳ(𝑇∗,(𝑓_1, …, 𝑓_𝑚),(𝑒_1, …, 𝑒_𝑛)) is the conjugate transpose of ℳ(𝑇,(𝑒_1, …, 𝑒_𝑛),(𝑓_1, …, 𝑓_𝑚)). In other words,",
          "zh": "令𝑇 ∈ L(𝑉,𝑊)．设 𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基， 𝑓_1,..., 𝑓_𝑚是 𝑊的规范正交基．那"
        },
        {
          "t": "formula",
          "en": "∗ ∗ ℳ(𝑇) =(ℳ(𝑇)).",
          "zh": "� � � �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "么 M 𝑇^∗,(𝑓_1,..., 𝑓_𝑚),(𝑒_1,..., 𝑒_𝑛) 是 M 𝑇,(𝑒_1,..., 𝑒_𝑛),(𝑓_1,..., 𝑓_𝑚) 的共轭转置．换句 话说，"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "_∗� �_∗ M(𝑇) = M(𝑇) ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Let 𝑇 ∈ ℒ(𝑉, 𝑊). Suppose 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉 and 𝑓_1, …, 𝑓_𝑚 is an orthonormal basis of 𝑊. Then ℳ(𝑇∗,(𝑓_1, …, 𝑓_𝑚),(𝑒_1, …, 𝑒_𝑛)) is the conjugate transpose of ℳ(𝑇,(𝑒_1, …, 𝑒_𝑛),(𝑓_1, …, 𝑓_𝑚)). In other words, ∗ ∗ ℳ(𝑇) =(ℳ(𝑇)).",
      "statement_zh": "令𝑇 ∈ L(𝑉,𝑊)．设 𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基， 𝑓_1,..., 𝑓_𝑚是 𝑊的规范正交基．那 � � � � 么 M 𝑇^∗,(𝑓_1,..., 𝑓_𝑚),(𝑒_1,..., 𝑒_𝑛) 是 M 𝑇,(𝑒_1,..., 𝑒_𝑛),(𝑓_1,..., 𝑓_𝑚) 的共轭转置．换句 话说， _∗� �_∗ M(𝑇) = M(𝑇) ．"
    },
    {
      "id": "7.10",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.10",
      "name_en": "self-adjoint",
      "name_zh": "自伴（self-adjoint）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑇 ∈ ℒ(𝑉) is called self-adjoint if 𝑇 = 𝑇∗.",
          "zh": "算子𝑇 ∈ L(𝑉) 称为自伴的，如果𝑇 = 𝑇^∗ ．"
        }
      ],
      "note": {
        "en": "If 𝑇 ∈ ℒ(𝑉) and 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉, then 𝑇 is self-adjoint ∗ if and only if ℳ(𝑇,(𝑒_1, …, 𝑒_𝑛)) = ℳ(𝑇,(𝑒_1, …, 𝑒_𝑛)), as follows from 7.9.",
        "zh": "� � 若𝑇 ∈ L(𝑉)且𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基，则𝑇是自伴的当且仅当 M 𝑇,(𝑒_1,..., 𝑒_𝑛) = � �_∗ M 𝑇,(𝑒_1,..., 𝑒_𝑛) ．这是由7.9推得的．"
      },
      "statement_en": "An operator 𝑇 ∈ ℒ(𝑉) is called self-adjoint if 𝑇 = 𝑇∗. If 𝑇 ∈ ℒ(𝑉) and 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉, then 𝑇 is self-adjoint ∗ if and only if ℳ(𝑇,(𝑒_1, …, 𝑒_𝑛)) = ℳ(𝑇,(𝑒_1, …, 𝑒_𝑛)), as follows from 7.9.",
      "statement_zh": "算子𝑇 ∈ L(𝑉) 称为自伴的，如果𝑇 = 𝑇^∗ ． � � 若𝑇 ∈ L(𝑉)且𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基，则𝑇是自伴的当且仅当 M 𝑇,(𝑒_1,..., 𝑒_𝑛) = � �_∗ M 𝑇,(𝑒_1,..., 𝑒_𝑛) ．这是由7.9推得的．"
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
          "zh": "自伴算子的每个特征值都是实的．"
        }
      ],
      "note": null,
      "statement_en": "Every eigenvalue of a self-adjoint operator is real.",
      "statement_zh": "自伴算子的每个特征值都是实的．"
    },
    {
      "id": "7.13",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.13",
      "name_en": "𝑇𝑣 is orthogonal to 𝑣 for all 𝑣 ⟺ 𝑇 = 0(assuming 𝐅 = 𝐂)",
      "name_zh": "对所有𝑣都有𝑇𝑣正交于𝑣 ⇐⇒ 𝑇 = 0（假设 F = C）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is a complex inner product space and 𝑇 ∈ ℒ(𝑉). Then ⟨𝑇𝑣, 𝑣⟩ = 0 for every 𝑣 ∈ 𝑉 ⟺ 𝑇 = 0.",
          "zh": "设𝑉是复内积空间以及𝑇 ∈ L(𝑉)，那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "⟨𝑇𝑣, 𝑣⟩ = 0对任一𝑣 ∈ 𝑉都成立 ⇐⇒ 𝑇 = 0．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a complex inner product space and 𝑇 ∈ ℒ(𝑉). Then ⟨𝑇𝑣, 𝑣⟩ = 0 for every 𝑣 ∈ 𝑉 ⟺ 𝑇 = 0.",
      "statement_zh": "设𝑉是复内积空间以及𝑇 ∈ L(𝑉)，那么 ⟨𝑇𝑣, 𝑣⟩ = 0对任一𝑣 ∈ 𝑉都成立 ⇐⇒ 𝑇 = 0．"
    },
    {
      "id": "7.14",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.14",
      "name_en": "⟨𝑇𝑣, 𝑣⟩ is real for all 𝑣 ⟺ 𝑇 is self-adjoint(assuming 𝐅 = 𝐂)",
      "name_zh": "⟨𝑇𝑣, 𝑣⟩ 对所有𝑣都是实的 ⇐⇒ 𝑇是自伴的（假设 F = C）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is a complex inner product space and 𝑇 ∈ ℒ(𝑉). Then 𝑇 is self-adjoint ⟺ ⟨𝑇𝑣, 𝑣⟩ ∈ 𝐑 for every 𝑣 ∈ 𝑉.",
          "zh": "设𝑉是复内积空间以及𝑇 ∈ L(𝑉)，那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑇是自伴的 ⇐⇒ ⟨𝑇𝑣, 𝑣⟩ ∈ R 对任一𝑣 ∈ 𝑉都成立．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a complex inner product space and 𝑇 ∈ ℒ(𝑉). Then 𝑇 is self-adjoint ⟺ ⟨𝑇𝑣, 𝑣⟩ ∈ 𝐑 for every 𝑣 ∈ 𝑉.",
      "statement_zh": "设𝑉是复内积空间以及𝑇 ∈ L(𝑉)，那么 𝑇是自伴的 ⇐⇒ ⟨𝑇𝑣, 𝑣⟩ ∈ R 对任一𝑣 ∈ 𝑉都成立．"
    },
    {
      "id": "7.16",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.16",
      "name_en": "𝑇 self-adjoint and ⟨𝑇𝑣, 𝑣⟩ = 0 for all 𝑣 ⟺ 𝑇 = 0",
      "name_zh": "𝑇自伴且 ⟨𝑇𝑣, 𝑣⟩ = 0对所有𝑣成立 ⇐⇒ 𝑇 = 0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 is a self-adjoint operator on 𝑉. Then ⟨𝑇𝑣, 𝑣⟩ = 0 for every 𝑣 ∈ 𝑉 ⟺ 𝑇 = 0.",
          "zh": "设𝑇是𝑉上的自伴算子，那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "⟨𝑇𝑣, 𝑣⟩ = 0对任一𝑣 ∈ 𝑉都成立 ⇐⇒ 𝑇 = 0．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 is a self-adjoint operator on 𝑉. Then ⟨𝑇𝑣, 𝑣⟩ = 0 for every 𝑣 ∈ 𝑉 ⟺ 𝑇 = 0.",
      "statement_zh": "设𝑇是𝑉上的自伴算子，那么 ⟨𝑇𝑣, 𝑣⟩ = 0对任一𝑣 ∈ 𝑉都成立 ⇐⇒ 𝑇 = 0．"
    },
    {
      "id": "7.18",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.18",
      "name_en": "normal",
      "name_zh": "正规（normal）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "An operator on an inner product space is called normal if it commutes with its adjoint.",
          "zh": "内积空间上的算子被称为正规的，如果它与它的伴随可交换． 换句话说，𝑇 ∈ L(𝑉) 是正规的，如果𝑇𝑇^∗ = 𝑇^∗ 𝑇．"
        },
        {
          "t": "bullet",
          "en": "In other words, 𝑇 ∈ ℒ(𝑉) is normal if 𝑇𝑇∗ = 𝑇∗𝑇.",
          "zh": ""
        }
      ],
      "note": {
        "en": "Every self-adjoint operator is normal, because if 𝑇 is self-adjoint then 𝑇∗ = 𝑇 and hence 𝑇 commutes with 𝑇∗.",
        "zh": "每个自伴算子都是正规的，这是因为，如果𝑇自伴，那么𝑇^∗ = 𝑇，于是𝑇和𝑇^∗可交换．"
      },
      "statement_en": "An operator on an inner product space is called normal if it commutes with its adjoint. In other words, 𝑇 ∈ ℒ(𝑉) is normal if 𝑇𝑇∗ = 𝑇∗𝑇. Every self-adjoint operator is normal, because if 𝑇 is self-adjoint then 𝑇∗ = 𝑇 and hence 𝑇 commutes with 𝑇∗.",
      "statement_zh": "内积空间上的算子被称为正规的，如果它与它的伴随可交换． 换句话说，𝑇 ∈ L(𝑉) 是正规的，如果𝑇𝑇^∗ = 𝑇^∗ 𝑇． 每个自伴算子都是正规的，这是因为，如果𝑇自伴，那么𝑇^∗ = 𝑇，于是𝑇和𝑇^∗可交换．"
    },
    {
      "id": "7.20",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.20",
      "name_en": "𝑇 is normal if and only if 𝑇𝑣 and 𝑇∗𝑣 have the same norm",
      "name_zh": "𝑇是正规的当且仅当𝑇𝑣和𝑇^∗ 𝑣的范数相同",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Then 𝑇 is normal ⟺ ‖𝑇𝑣‖ = ‖𝑇∗𝑣‖ for every 𝑣 ∈ 𝑉.",
          "zh": "设𝑇 ∈ L(𝑉)，那么有"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑇是正规的 ⇐⇒ ∥𝑇𝑣∥ = ∥𝑇^∗ 𝑣∥ 对任一𝑣 ∈ 𝑉都成立．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Then 𝑇 is normal ⟺ ‖𝑇𝑣‖ = ‖𝑇∗𝑣‖ for every 𝑣 ∈ 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉)，那么有 𝑇是正规的 ⇐⇒ ∥𝑇𝑣∥ = ∥𝑇^∗ 𝑣∥ 对任一𝑣 ∈ 𝑉都成立．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is normal. Then (a) null 𝑇 = null 𝑇∗; (b) range 𝑇 = range 𝑇∗; (c) 𝑉 = null 𝑇 ⊕ range 𝑇; (d) 𝑇−𝜆𝐼 is normal for every 𝜆 ∈ 𝐅; (e) if 𝑣 ∈ 𝑉 and 𝜆 ∈ 𝐅, then 𝑇𝑣 = 𝜆𝑣 if and only if 𝑇∗𝑣 = 𝜆𝑣.",
          "zh": "设𝑇 ∈ L(𝑉) 是正规的，那么有： (a) null 𝑇 = null 𝑇^∗； (b) range 𝑇 = range 𝑇^∗； (c) 𝑉 = null 𝑇 ⊕ range 𝑇； (d) 对任一𝜆 ∈ F，𝑇−𝜆𝐼都是正规的； (e) 如果𝑣 ∈ 𝑉且𝜆 ∈ F，那么𝑇𝑣 = 𝜆𝑣当且仅当𝑇^∗ 𝑣 = 𝜆𝑣．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is normal. Then (a) null 𝑇 = null 𝑇∗; (b) range 𝑇 = range 𝑇∗; (c) 𝑉 = null 𝑇 ⊕ range 𝑇; (d) 𝑇−𝜆𝐼 is normal for every 𝜆 ∈ 𝐅; (e) if 𝑣 ∈ 𝑉 and 𝜆 ∈ 𝐅, then 𝑇𝑣 = 𝜆𝑣 if and only if 𝑇∗𝑣 = 𝜆𝑣.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 是正规的，那么有： (a) null 𝑇 = null 𝑇^∗； (b) range 𝑇 = range 𝑇^∗； (c) 𝑉 = null 𝑇 ⊕ range 𝑇； (d) 对任一𝜆 ∈ F，𝑇−𝜆𝐼都是正规的； (e) 如果𝑣 ∈ 𝑉且𝜆 ∈ F，那么𝑇𝑣 = 𝜆𝑣当且仅当𝑇^∗ 𝑣 = 𝜆𝑣．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is normal. Then eigenvectors of 𝑇 corresponding to distinct eigenvalues are orthogonal.",
          "zh": "设𝑇 ∈ L(𝑉) 是正规的．那么𝑇的对应于不同特征值的特征向量正交．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is normal. Then eigenvectors of 𝑇 corresponding to distinct eigenvalues are orthogonal.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 是正规的．那么𝑇的对应于不同特征值的特征向量正交．"
    },
    {
      "id": "7.23",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.23",
      "name_en": "𝑇 is normal ⟺ the real and imaginary parts of 𝑇 commute",
      "name_zh": "𝑇是正规的 ⇐⇒ 𝑇的实部和虚部可交换",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then 𝑇 is normal if and only if there exist commuting self-adjoint operators 𝐴 and 𝐵 such that 𝑇 = 𝐴 + 𝑖𝐵.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么，𝑇是正规的当且仅当存在可交换的自伴算子 𝐴和 𝐵使得 𝑇 = 𝐴 + i 𝐵．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then 𝑇 is normal if and only if there exist commuting self-adjoint operators 𝐴 and 𝐵 such that 𝑇 = 𝐴 + 𝑖𝐵.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么，𝑇是正规的当且仅当存在可交换的自伴算子 𝐴和 𝐵使得 𝑇 = 𝐴 + i 𝐵．"
    },
    {
      "id": "7.26",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.26",
      "name_en": "invertible quadratic expressions",
      "name_zh": "可逆二次表达式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is self-adjoint and 𝑏, 𝑐 ∈ 𝐑 are such that 𝑏^2 < 4𝑐. Then",
          "zh": "设𝑇 ∈ L(𝑉) 是自伴的，且 𝑏, 𝑐 ∈ R 使得 𝑏^2 < 4𝑐．那么"
        },
        {
          "t": "formula",
          "en": "𝑇^2 + 𝑏𝑇 + 𝑐𝐼",
          "zh": "𝑇^2 + 𝑏𝑇 + 𝑐𝐼",
          "eq": null
        },
        {
          "t": "p",
          "en": "is an invertible operator.",
          "zh": "是可逆算子．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is self-adjoint and 𝑏, 𝑐 ∈ 𝐑 are such that 𝑏^2 < 4𝑐. Then 𝑇^2 + 𝑏𝑇 + 𝑐𝐼 is an invertible operator.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 是自伴的，且 𝑏, 𝑐 ∈ R 使得 𝑏^2 < 4𝑐．那么 𝑇^2 + 𝑏𝑇 + 𝑐𝐼 是可逆算子．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is self-adjoint. Then the minimal polynomial of 𝑇 equals (𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) for some 𝜆_1, …, 𝜆_𝑚 ∈ 𝐑.",
          "zh": "设𝑇 ∈ L(𝑉)是自伴的．那么𝑇的最小多项式等于(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)，其中𝜆_1,..., 𝜆_𝑚 ∈ R．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is self-adjoint. Then the minimal polynomial of 𝑇 equals (𝑧−𝜆_1) ⋯(𝑧−𝜆_𝑚) for some 𝜆_1, …, 𝜆_𝑚 ∈ 𝐑.",
      "statement_zh": "设𝑇 ∈ L(𝑉)是自伴的．那么𝑇的最小多项式等于(𝑧−𝜆_1) · · ·(𝑧−𝜆_𝑚)，其中𝜆_1,..., 𝜆_𝑚 ∈ R．"
    },
    {
      "id": "7.29",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.29",
      "name_en": "real spectral theorem",
      "name_zh": "实谱定理（real spectral theorem）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐑 and 𝑇 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑇 is self-adjoint. (b) 𝑇 has a diagonal matrix with respect to some orthonormal basis of 𝑉. (c) 𝑉 has an orthonormal basis consisting of eigenvectors of 𝑇.",
          "zh": "设 F = R 且𝑇 ∈ L(𝑉)．那么下列等价： (a) 𝑇是自伴的． (b) 𝑇关于𝑉的某个规范正交基有对角矩阵． (c) 𝑉有由𝑇的特征向量构成的规范正交基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐑 and 𝑇 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑇 is self-adjoint. (b) 𝑇 has a diagonal matrix with respect to some orthonormal basis of 𝑉. (c) 𝑉 has an orthonormal basis consisting of eigenvectors of 𝑇.",
      "statement_zh": "设 F = R 且𝑇 ∈ L(𝑉)．那么下列等价： (a) 𝑇是自伴的． (b) 𝑇关于𝑉的某个规范正交基有对角矩阵． (c) 𝑉有由𝑇的特征向量构成的规范正交基．"
    },
    {
      "id": "7.31",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.31",
      "name_en": "complex spectral theorem",
      "name_zh": "复谱定理（complex spectral theorem）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑇 is normal. (b) 𝑇 has a diagonal matrix with respect to some orthonormal basis of 𝑉. (c) 𝑉 has an orthonormal basis consisting of eigenvectors of 𝑇.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么下列等价： (a) 𝑇是正规的． (b) 𝑇关于𝑉的某个规范正交基有对角矩阵． (c) 𝑉有由𝑇的特征向量构成的规范正交基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑇 is normal. (b) 𝑇 has a diagonal matrix with respect to some orthonormal basis of 𝑉. (c) 𝑉 has an orthonormal basis consisting of eigenvectors of 𝑇.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么下列等价： (a) 𝑇是正规的． (b) 𝑇关于𝑉的某个规范正交基有对角矩阵． (c) 𝑉有由𝑇的特征向量构成的规范正交基．"
    },
    {
      "id": "7.34",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.34",
      "name_en": "positive operator",
      "name_zh": "正算子（positive operator）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑇 ∈ ℒ(𝑉) is called positive if 𝑇 is self-adjoint and",
          "zh": "算子𝑇 ∈ L(𝑉) 称为正的，如果𝑇是自伴的且对所有𝑣 ∈ 𝑉有"
        },
        {
          "t": "formula",
          "en": "⟨𝑇𝑣, 𝑣⟩ ≥ 0",
          "zh": "⟨𝑇𝑣, 𝑣⟩ ≥ 0．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑣 ∈ 𝑉.",
          "zh": ""
        }
      ],
      "note": {
        "en": "If 𝑉 is a complex vector space, then the requirement that 𝑇 be self-adjoint can be dropped from the definition above(by 7.14).",
        "zh": "如果𝑉是复向量空间，那么以上定义中“𝑇是自伴的”这一条件可以去掉（根据7.14）．"
      },
      "statement_en": "An operator 𝑇 ∈ ℒ(𝑉) is called positive if 𝑇 is self-adjoint and ⟨𝑇𝑣, 𝑣⟩ ≥ 0 for all 𝑣 ∈ 𝑉. If 𝑉 is a complex vector space, then the requirement that 𝑇 be self-adjoint can be dropped from the definition above(by 7.14).",
      "statement_zh": "算子𝑇 ∈ L(𝑉) 称为正的，如果𝑇是自伴的且对所有𝑣 ∈ 𝑉有 ⟨𝑇𝑣, 𝑣⟩ ≥ 0． 如果𝑉是复向量空间，那么以上定义中“𝑇是自伴的”这一条件可以去掉（根据7.14）．"
    },
    {
      "id": "7.36",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.36",
      "name_en": "square root",
      "name_zh": "平方根（square root）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑅 is called a square root of an operator 𝑇 if 𝑅^2 = 𝑇.",
          "zh": "算子 𝑅称为算子𝑇的平方根，如果 𝑅^2 = 𝑇．"
        }
      ],
      "note": null,
      "statement_en": "An operator 𝑅 is called a square root of an operator 𝑇 if 𝑅^2 = 𝑇.",
      "statement_zh": "算子 𝑅称为算子𝑇的平方根，如果 𝑅^2 = 𝑇．"
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
          "en": "Let 𝑇 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑇 is a positive operator. (b) 𝑇 is self-adjoint and all eigenvalues of 𝑇 are nonnegative. (c) With respect to some orthonormal basis of 𝑉, the matrix of 𝑇 is a diagonal matrix with only nonnegative numbers on the diagonal. (d) 𝑇 has a positive square root. (e) 𝑇 has a self-adjoint square root. (f) 𝑇 = 𝑅∗𝑅 for some 𝑅 ∈ ℒ(𝑉).",
          "zh": "令𝑇 ∈ L(𝑉)．那么下列等价： (a) 𝑇是正算子． (b) 𝑇自伴且所有特征值非负． (c) 关于𝑉的某个规范正交基，𝑇的矩阵是对角矩阵且对角线上仅有非负数． (d) 𝑇有正平方根． (e) 𝑇有自伴平方根． (f) 存在某个 𝑅 ∈ L(𝑉) 使得𝑇 = 𝑅^∗ 𝑅．"
        }
      ],
      "note": null,
      "statement_en": "Let 𝑇 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑇 is a positive operator. (b) 𝑇 is self-adjoint and all eigenvalues of 𝑇 are nonnegative. (c) With respect to some orthonormal basis of 𝑉, the matrix of 𝑇 is a diagonal matrix with only nonnegative numbers on the diagonal. (d) 𝑇 has a positive square root. (e) 𝑇 has a self-adjoint square root. (f) 𝑇 = 𝑅∗𝑅 for some 𝑅 ∈ ℒ(𝑉).",
      "statement_zh": "令𝑇 ∈ L(𝑉)．那么下列等价： (a) 𝑇是正算子． (b) 𝑇自伴且所有特征值非负． (c) 关于𝑉的某个规范正交基，𝑇的矩阵是对角矩阵且对角线上仅有非负数． (d) 𝑇有正平方根． (e) 𝑇有自伴平方根． (f) 存在某个 𝑅 ∈ L(𝑉) 使得𝑇 = 𝑅^∗ 𝑅．"
    },
    {
      "id": "7.39",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.39",
      "name_en": "each positive operator has only one positive square root",
      "name_zh": "每个正算子都只有一个正平方根",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Every positive operator on 𝑉 has a unique positive square root.",
          "zh": "𝑉上的每个正算子都有唯一正平方根．"
        }
      ],
      "note": null,
      "statement_en": "Every positive operator on 𝑉 has a unique positive square root.",
      "statement_zh": "𝑉上的每个正算子都有唯一正平方根．"
    },
    {
      "id": "7.40",
      "kind": "notation",
      "chapter": "ch7",
      "number": "7.40",
      "name_en": "√𝑇",
      "name_zh": "√ 记号： 𝑇 √",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑇 a positive operator,^√ 𝑇 denotes the unique positive square root of 𝑇.",
          "zh": "√"
        },
        {
          "t": "p",
          "en": "",
          "zh": "对于正算子𝑇， 𝑇表示𝑇的唯一正平方根．"
        }
      ],
      "note": null,
      "statement_en": "For 𝑇 a positive operator,^√ 𝑇 denotes the unique positive square root of 𝑇.",
      "statement_zh": "√ 对于正算子𝑇， 𝑇表示𝑇的唯一正平方根．"
    },
    {
      "id": "7.43",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.43",
      "name_en": "𝑇 positive and ⟨𝑇𝑣, 𝑣⟩ = 0 ⟹ 𝑇𝑣 = 0",
      "name_zh": "𝑇是正的且 ⟨𝑇𝑣, 𝑣⟩ = 0 =⇒ 𝑇𝑣 = 0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 is a positive operator on 𝑉 and 𝑣 ∈ 𝑉 is such that ⟨𝑇𝑣, 𝑣⟩ = 0. Then 𝑇𝑣 = 0.",
          "zh": "设𝑇是𝑉上的正算子且𝑣 ∈ 𝑉使得 ⟨𝑇𝑣, 𝑣⟩ = 0，那么𝑇𝑣 = 0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 is a positive operator on 𝑉 and 𝑣 ∈ 𝑉 is such that ⟨𝑇𝑣, 𝑣⟩ = 0. Then 𝑇𝑣 = 0.",
      "statement_zh": "设𝑇是𝑉上的正算子且𝑣 ∈ 𝑉使得 ⟨𝑇𝑣, 𝑣⟩ = 0，那么𝑇𝑣 = 0．"
    },
    {
      "id": "7.44",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.44",
      "name_en": "isometry",
      "name_zh": "等距映射（isometry）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A linear map 𝑆 ∈ ℒ(𝑉, 𝑊) is called an isometry if",
          "zh": "线性映射 𝑆 ∈ L(𝑉,𝑊) 被称为等距映射，如果"
        },
        {
          "t": "formula",
          "en": "‖𝑆𝑣‖ = ‖𝑣‖",
          "zh": "∥𝑆𝑣∥ = ∥𝑣∥",
          "eq": null
        },
        {
          "t": "p",
          "en": "for every 𝑣 ∈ 𝑉. In other words, a linear map is an isometry if it preserves norms.",
          "zh": "对任一𝑣 ∈ 𝑉都成立．换句话说，保持范数的线性映射就是等距映射．"
        }
      ],
      "note": {
        "en": "If 𝑆 ∈ ℒ(𝑉, 𝑊) is an isometry and 𝑣 ∈ 𝑉 is such that 𝑆𝑣 = 0, then ‖𝑣‖ = ‖𝑆𝑣‖ = ‖0‖ = 0, which implies that 𝑣 = 0. Thus every isometry is injective.",
        "zh": "如果 𝑆 ∈ L(𝑉,𝑊) 是等距映射且 𝑣 ∈ 𝑉 使得 𝑆𝑣 = 0，那么 ∥𝑣∥ = ∥𝑆𝑣∥ = ∥0∥ = 0，这 意味着𝑣 = 0．因此每个等距映射都是单射．"
      },
      "statement_en": "A linear map 𝑆 ∈ ℒ(𝑉, 𝑊) is called an isometry if ‖𝑆𝑣‖ = ‖𝑣‖ for every 𝑣 ∈ 𝑉. In other words, a linear map is an isometry if it preserves norms. If 𝑆 ∈ ℒ(𝑉, 𝑊) is an isometry and 𝑣 ∈ 𝑉 is such that 𝑆𝑣 = 0, then ‖𝑣‖ = ‖𝑆𝑣‖ = ‖0‖ = 0, which implies that 𝑣 = 0. Thus every isometry is injective.",
      "statement_zh": "线性映射 𝑆 ∈ L(𝑉,𝑊) 被称为等距映射，如果 ∥𝑆𝑣∥ = ∥𝑣∥ 对任一𝑣 ∈ 𝑉都成立．换句话说，保持范数的线性映射就是等距映射． 如果 𝑆 ∈ L(𝑉,𝑊) 是等距映射且 𝑣 ∈ 𝑉 使得 𝑆𝑣 = 0，那么 ∥𝑣∥ = ∥𝑆𝑣∥ = ∥0∥ = 0，这 意味着𝑣 = 0．因此每个等距映射都是单射．"
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
          "en": "Suppose 𝑆 ∈ ℒ(𝑉, 𝑊). Suppose 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉 and 𝑓_1, …, 𝑓_𝑚 is an orthonormal basis of 𝑊. Then the following are equivalent. (a) 𝑆 is an isometry. (b) 𝑆∗𝑆 = 𝐼. (c) ⟨𝑆𝑢, 𝑆𝑣⟩ = ⟨𝑢, 𝑣⟩ for all 𝑢, 𝑣 ∈ 𝑉. (d) 𝑆𝑒_1, …, 𝑆𝑒_𝑛 is an orthonormal list in 𝑊. (e) The columns of ℳ(𝑆,(𝑒_1, …, 𝑒_𝑛),(𝑓_1, …, 𝑓_𝑚)) form an orthonormal list in 𝐅^𝑚 with respect to the Euclidean inner product.",
          "zh": "设𝑆 ∈ L(𝑉,𝑊)．设𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基，𝑓_1,..., 𝑓_𝑚是𝑊的规范正交基．那么 下列等价： (a) 𝑆是等距映射． (b) 𝑆^∗ 𝑆 = 𝐼． (c) ⟨𝑆𝑢, 𝑆𝑣⟩ = ⟨𝑢, 𝑣⟩ 对所有𝑢, 𝑣 ∈ 𝑉成立． (d) 𝑆𝑒_1,..., 𝑆𝑒_𝑛是𝑊中的规范正交组．"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "(e) M 𝑆,(𝑒_1,..., 𝑒_𝑛),(𝑓_1,..., 𝑓_𝑚) 的列形成 F^𝑚中关于欧几里得内积的规范正交组．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑆 ∈ ℒ(𝑉, 𝑊). Suppose 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉 and 𝑓_1, …, 𝑓_𝑚 is an orthonormal basis of 𝑊. Then the following are equivalent. (a) 𝑆 is an isometry. (b) 𝑆∗𝑆 = 𝐼. (c) ⟨𝑆𝑢, 𝑆𝑣⟩ = ⟨𝑢, 𝑣⟩ for all 𝑢, 𝑣 ∈ 𝑉. (d) 𝑆𝑒_1, …, 𝑆𝑒_𝑛 is an orthonormal list in 𝑊. (e) The columns of ℳ(𝑆,(𝑒_1, …, 𝑒_𝑛),(𝑓_1, …, 𝑓_𝑚)) form an orthonormal list in 𝐅^𝑚 with respect to the Euclidean inner product.",
      "statement_zh": "设𝑆 ∈ L(𝑉,𝑊)．设𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基，𝑓_1,..., 𝑓_𝑚是𝑊的规范正交基．那么 下列等价： (a) 𝑆是等距映射． (b) 𝑆^∗ 𝑆 = 𝐼． (c) ⟨𝑆𝑢, 𝑆𝑣⟩ = ⟨𝑢, 𝑣⟩ 对所有𝑢, 𝑣 ∈ 𝑉成立． (d) 𝑆𝑒_1,..., 𝑆𝑒_𝑛是𝑊中的规范正交组． � � (e) M 𝑆,(𝑒_1,..., 𝑒_𝑛),(𝑓_1,..., 𝑓_𝑚) 的列形成 F^𝑚中关于欧几里得内积的规范正交组．"
    },
    {
      "id": "7.51",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.51",
      "name_en": "unitary operator",
      "name_zh": "幺正算子（unitary operator）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑆 ∈ ℒ(𝑉) is called unitary if 𝑆 is an invertible isometry.",
          "zh": "算子 𝑆 ∈ L(𝑉) 被称为幺正的，如果 𝑆是可逆等距映射．"
        }
      ],
      "note": null,
      "statement_en": "An operator 𝑆 ∈ ℒ(𝑉) is called unitary if 𝑆 is an invertible isometry.",
      "statement_zh": "算子 𝑆 ∈ L(𝑉) 被称为幺正的，如果 𝑆是可逆等距映射．"
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
          "en": "Suppose 𝑆 ∈ ℒ(𝑉). Suppose 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉. Then the following are equivalent. (a) 𝑆 is a unitary operator. (b) 𝑆∗𝑆 = 𝑆𝑆∗ = 𝐼. (c) 𝑆 is invertible and 𝑆^{−1} = 𝑆∗. (d) 𝑆𝑒_1, …, 𝑆𝑒_𝑛 is an orthonormal basis of 𝑉. (e) The rows of ℳ(𝑆,(𝑒_1, …, 𝑒_𝑛)) form an orthonormal basis of 𝐅^𝑛 with respect to the Euclidean inner product. (f) 𝑆∗ is a unitary operator.",
          "zh": "设 𝑆 ∈ L(𝑉)．设𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基．那么下列等价： (a) 𝑆是幺正算子． (b) 𝑆^∗ 𝑆 = 𝑆𝑆^∗ = 𝐼． (c) 𝑆可逆且 𝑆^{−1} = 𝑆^∗ ． (d) 𝑆𝑒_1,..., 𝑆𝑒_𝑛是𝑉的规范正交基．"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "(e) M 𝑆,(𝑒_1,..., 𝑒_𝑛) 的行形成 F^𝑛中关于欧几里得内积的规范正交基． (f) 𝑆^∗是幺正算子．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑆 ∈ ℒ(𝑉). Suppose 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉. Then the following are equivalent. (a) 𝑆 is a unitary operator. (b) 𝑆∗𝑆 = 𝑆𝑆∗ = 𝐼. (c) 𝑆 is invertible and 𝑆^{−1} = 𝑆∗. (d) 𝑆𝑒_1, …, 𝑆𝑒_𝑛 is an orthonormal basis of 𝑉. (e) The rows of ℳ(𝑆,(𝑒_1, …, 𝑒_𝑛)) form an orthonormal basis of 𝐅^𝑛 with respect to the Euclidean inner product. (f) 𝑆∗ is a unitary operator.",
      "statement_zh": "设 𝑆 ∈ L(𝑉)．设𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基．那么下列等价： (a) 𝑆是幺正算子． (b) 𝑆^∗ 𝑆 = 𝑆𝑆^∗ = 𝐼． (c) 𝑆可逆且 𝑆^{−1} = 𝑆^∗ ． (d) 𝑆𝑒_1,..., 𝑆𝑒_𝑛是𝑉的规范正交基． � � (e) M 𝑆,(𝑒_1,..., 𝑒_𝑛) 的行形成 F^𝑛中关于欧几里得内积的规范正交基． (f) 𝑆^∗是幺正算子．"
    },
    {
      "id": "7.54",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.54",
      "name_en": "eigenvalues of unitary operators have absolute value 1",
      "name_zh": "幺正算子的特征值绝对值是1",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝜆 is an eigenvalue of a unitary operator. Then |𝜆| = 1.",
          "zh": "设𝜆是幺正算子的特征值，那么 |𝜆| = 1．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝜆 is an eigenvalue of a unitary operator. Then |𝜆| = 1.",
      "statement_zh": "设𝜆是幺正算子的特征值，那么 |𝜆| = 1．"
    },
    {
      "id": "7.55",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.55",
      "name_en": "description of unitary operators on complex inner product spaces",
      "name_zh": "对复内积空间上的幺正算子的描述",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑆 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑆 is a unitary operator. (b) There is an orthonormal basis of 𝑉 consisting of eigenvectors of 𝑆 whose corresponding eigenvalues all have absolute value 1.",
          "zh": "设 F = C 且 𝑆 ∈ L(𝑉)．那么下列等价： (a) 𝑆是幺正算子． (b) 存在𝑉的一规范正交基由 𝑆的特征向量组成，其对应的特征值的绝对值都是1．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑆 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑆 is a unitary operator. (b) There is an orthonormal basis of 𝑉 consisting of eigenvectors of 𝑆 whose corresponding eigenvalues all have absolute value 1.",
      "statement_zh": "设 F = C 且 𝑆 ∈ L(𝑉)．那么下列等价： (a) 𝑆是幺正算子． (b) 存在𝑉的一规范正交基由 𝑆的特征向量组成，其对应的特征值的绝对值都是1．"
    },
    {
      "id": "7.56",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.56",
      "name_en": "unitary matrix",
      "name_zh": "幺正矩阵（unitary matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An 𝑛-by-𝑛 matrix is called unitary if its columns form an orthonormal list in 𝐅^𝑛.",
          "zh": "一𝑛 × 𝑛矩阵被称为幺正的，如果它的列形成 F^𝑛中的规范正交组．"
        }
      ],
      "note": {
        "en": "",
        "zh": "在以上定义中，我们可以把“F^𝑛中的规范正交组”替换为“F^𝑛的规范正交基”，因为 𝑛 维内积空间中的长度为 𝑛的每个规范正交组都是规范正交基．如果 𝑆 ∈ L(𝑉) 且 𝑒_1,..., 𝑒_𝑛和 � � 𝑓_1,..., 𝑓_𝑛是𝑉的规范正交基，那么𝑆是幺正算子当且仅当 M 𝑆,(𝑒_1,..., 𝑒_𝑛),(𝑓_1,..., 𝑓_𝑛) 是幺 正矩阵，这可由7.49中(a)和(e)的等价关系得到．还要注意，我们可以将定义中的“列”替 换为“行”，这用到了7.53中(a)和(e)的等价关系． 接下来这条结果，给出了“某方阵是幺正矩阵”的一些等价条件，其证明留作读者的习题． 在(c)中，𝑄𝑣表示𝑄和𝑣的矩阵乘积，这里将 F^𝑛的元素等同于𝑛 × 1矩阵（有时也称为列向 量）．下面的(c)中的范数是 F^𝑛上通常的欧几里得范数，其来自欧几里得内积．在(d)中，𝑄^∗ 表示矩阵𝑄的共轭转置，对应于其所关联的算子的伴随．"
      },
      "statement_en": "An 𝑛-by-𝑛 matrix is called unitary if its columns form an orthonormal list in 𝐅^𝑛.",
      "statement_zh": "一𝑛 × 𝑛矩阵被称为幺正的，如果它的列形成 F^𝑛中的规范正交组． 在以上定义中，我们可以把“F^𝑛中的规范正交组”替换为“F^𝑛的规范正交基”，因为 𝑛 维内积空间中的长度为 𝑛的每个规范正交组都是规范正交基．如果 𝑆 ∈ L(𝑉) 且 𝑒_1,..., 𝑒_𝑛和 � � 𝑓_1,..., 𝑓_𝑛是𝑉的规范正交基，那么𝑆是幺正算子当且仅当 M 𝑆,(𝑒_1,..., 𝑒_𝑛),(𝑓_1,..., 𝑓_𝑛) 是幺 正矩阵，这可由7.49中(a)和(e)的等价关系得到．还要注意，我们可以将定义中的“列”替 换为“行”，这用到了7.53中(a)和(e)的等价关系． 接下来这条结果，给出了“某方阵是幺正矩阵”的一些等价条件，其证明留作读者的习题． 在(c)中，𝑄𝑣表示𝑄和𝑣的矩阵乘积，这里将 F^𝑛的元素等同于𝑛 × 1矩阵（有时也称为列向 量）．下面的(c)中的范数是 F^𝑛上通常的欧几里得范数，其来自欧几里得内积．在(d)中，𝑄^∗ 表示矩阵𝑄的共轭转置，对应于其所关联的算子的伴随．"
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
          "en": "Suppose 𝑄 is an 𝑛-by-𝑛 matrix. Then the following are equivalent. (a) 𝑄 is a unitary matrix. (b) The rows of 𝑄 form an orthonormal list in 𝐅^𝑛. (c) ‖𝑄𝑣‖ = ‖𝑣‖ for every 𝑣 ∈ 𝐅^𝑛. (d) 𝑄∗𝑄 = 𝑄𝑄∗ = 𝐼, the 𝑛-by-𝑛 matrix with 1’s on the diagonal and 0’s elsewhere.",
          "zh": "设𝑄是𝑛 × 𝑛矩阵．那么下列等价： (a) 𝑄是幺正矩阵． (b) 𝑄的行形成 F^𝑛中的规范正交组． (c) ∥𝑄𝑣∥ = ∥𝑣∥ 对任一𝑣 ∈ F^𝑛都成立． (d) 𝑄^∗ 𝑄 = 𝑄𝑄^∗ = 𝐼，𝐼是对角线上为1、其余处处为0的𝑛 × 𝑛矩阵．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑄 is an 𝑛-by-𝑛 matrix. Then the following are equivalent. (a) 𝑄 is a unitary matrix. (b) The rows of 𝑄 form an orthonormal list in 𝐅^𝑛. (c) ‖𝑄𝑣‖ = ‖𝑣‖ for every 𝑣 ∈ 𝐅^𝑛. (d) 𝑄∗𝑄 = 𝑄𝑄∗ = 𝐼, the 𝑛-by-𝑛 matrix with 1’s on the diagonal and 0’s elsewhere.",
      "statement_zh": "设𝑄是𝑛 × 𝑛矩阵．那么下列等价： (a) 𝑄是幺正矩阵． (b) 𝑄的行形成 F^𝑛中的规范正交组． (c) ∥𝑄𝑣∥ = ∥𝑣∥ 对任一𝑣 ∈ F^𝑛都成立． (d) 𝑄^∗ 𝑄 = 𝑄𝑄^∗ = 𝐼，𝐼是对角线上为1、其余处处为0的𝑛 × 𝑛矩阵．"
    },
    {
      "id": "7.58",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.58",
      "name_en": "QR factorization",
      "name_zh": "QR 分解（QR factorization）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is a square matrix with linearly independent columns. Then there exist unique matrices 𝑄 and 𝑅 such that 𝑄 is unitary, 𝑅 is upper triangular with only positive numbers on its diagonal, and",
          "zh": "设 𝐴是各列线性无关的方阵．那么存在唯一一对矩阵𝑄和 𝑅，其中𝑄是幺正的，而 𝑅 是上三角的且对角线上仅有正数，使得"
        },
        {
          "t": "formula",
          "en": "𝐴 = 𝑄𝑅.",
          "zh": "𝐴 = 𝑄𝑅．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is a square matrix with linearly independent columns. Then there exist unique matrices 𝑄 and 𝑅 such that 𝑄 is unitary, 𝑅 is upper triangular with only positive numbers on its diagonal, and 𝐴 = 𝑄𝑅.",
      "statement_zh": "设 𝐴是各列线性无关的方阵．那么存在唯一一对矩阵𝑄和 𝑅，其中𝑄是幺正的，而 𝑅 是上三角的且对角线上仅有正数，使得 𝐴 = 𝑄𝑅．"
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
          "en": "A self-adjoint operator 𝑇 ∈ ℒ(𝑉) is a positive invertible operator if and only if ⟨𝑇𝑣, 𝑣⟩ > 0 for every nonzero 𝑣 ∈ 𝑉.",
          "zh": "自伴算子𝑇 ∈ L(𝑉) 是可逆正算子，当且仅当 ⟨𝑇𝑣, 𝑣⟩ > 0对任意非零𝑣 ∈ 𝑉都成立．"
        }
      ],
      "note": null,
      "statement_en": "A self-adjoint operator 𝑇 ∈ ℒ(𝑉) is a positive invertible operator if and only if ⟨𝑇𝑣, 𝑣⟩ > 0 for every nonzero 𝑣 ∈ 𝑉.",
      "statement_zh": "自伴算子𝑇 ∈ L(𝑉) 是可逆正算子，当且仅当 ⟨𝑇𝑣, 𝑣⟩ > 0对任意非零𝑣 ∈ 𝑉都成立．"
    },
    {
      "id": "7.62",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.62",
      "name_en": "positive definite",
      "name_zh": "正定（positive definite）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A matrix 𝐵 ∈ 𝐅^{𝑛,𝑛} is called positive definite if 𝐵∗ = 𝐵 and",
          "zh": "矩阵 𝐵 ∈ F^{𝑛,𝑛}称为正定的，如果 𝐵^∗ = 𝐵且"
        },
        {
          "t": "formula",
          "en": "⟨𝐵𝑥, 𝑥⟩ > 0",
          "zh": "⟨𝐵𝑥, 𝑥⟩ > 0",
          "eq": null
        },
        {
          "t": "p",
          "en": "for every nonzero 𝑥 ∈ 𝐅^𝑛.",
          "zh": "对任意非零𝑥 ∈ F^𝑛都成立．"
        }
      ],
      "note": {
        "en": "",
        "zh": "矩阵是上三角的当且仅当它的共轭转置是下三角的（意即对角线上方所有元素为 0）．下 面的这个分解，将正定矩阵写成下三角矩阵和它的共轭转置的乘积，它在数值线性代数^4中具 有重要意义． 接下来这条结果完全是关于矩阵的，不过它的证明也利用了算子和矩阵两者结论之间的 等同关系．在下面这条结果中，如果矩阵 𝐵属于 F^{𝑛,𝑛}，那么矩阵 𝑅也属于 F^{𝑛,𝑛} ．"
      },
      "statement_en": "A matrix 𝐵 ∈ 𝐅^{𝑛,𝑛} is called positive definite if 𝐵∗ = 𝐵 and ⟨𝐵𝑥, 𝑥⟩ > 0 for every nonzero 𝑥 ∈ 𝐅^𝑛.",
      "statement_zh": "矩阵 𝐵 ∈ F^{𝑛,𝑛}称为正定的，如果 𝐵^∗ = 𝐵且 ⟨𝐵𝑥, 𝑥⟩ > 0 对任意非零𝑥 ∈ F^𝑛都成立． 矩阵是上三角的当且仅当它的共轭转置是下三角的（意即对角线上方所有元素为 0）．下 面的这个分解，将正定矩阵写成下三角矩阵和它的共轭转置的乘积，它在数值线性代数^4中具 有重要意义． 接下来这条结果完全是关于矩阵的，不过它的证明也利用了算子和矩阵两者结论之间的 等同关系．在下面这条结果中，如果矩阵 𝐵属于 F^{𝑛,𝑛}，那么矩阵 𝑅也属于 F^{𝑛,𝑛} ．"
    },
    {
      "id": "7.63",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.63",
      "name_en": "Cholesky factorization",
      "name_zh": "楚列斯基分解（Cholesky factorization）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐵 is a positive definite matrix. Then there exists a unique upper-triangular matrix 𝑅 with only positive numbers on its diagonal such that",
          "zh": "设 𝐵是正定矩阵．那么存在唯一一个对角线上仅含正数的上三角矩阵 𝑅使得"
        },
        {
          "t": "formula",
          "en": "𝐵 = 𝑅∗𝑅.",
          "zh": "𝐵 = 𝑅^∗ 𝑅．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐵 is a positive definite matrix. Then there exists a unique upper-triangular matrix 𝑅 with only positive numbers on its diagonal such that 𝐵 = 𝑅∗𝑅.",
      "statement_zh": "设 𝐵是正定矩阵．那么存在唯一一个对角线上仅含正数的上三角矩阵 𝑅使得 𝐵 = 𝑅^∗ 𝑅．"
    },
    {
      "id": "7.64",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.64",
      "name_en": "properties of 𝑇∗𝑇",
      "name_zh": "𝑇^∗ 𝑇的性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) 𝑇∗𝑇 is a positive operator on 𝑉; (b) null 𝑇∗𝑇 = null 𝑇; (c) range 𝑇∗𝑇 = range 𝑇∗; (d) dim range 𝑇 = dim range 𝑇∗ = dim range 𝑇∗𝑇.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 (a) 𝑇^∗ 𝑇是𝑉上的正算子； (b) null 𝑇^∗ 𝑇 = null 𝑇； (c) range 𝑇^∗ 𝑇 = range 𝑇^∗； (d) dim range 𝑇 = dim range 𝑇^∗ = dim range 𝑇^∗ 𝑇．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) 𝑇∗𝑇 is a positive operator on 𝑉; (b) null 𝑇∗𝑇 = null 𝑇; (c) range 𝑇∗𝑇 = range 𝑇∗; (d) dim range 𝑇 = dim range 𝑇∗ = dim range 𝑇∗𝑇.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 (a) 𝑇^∗ 𝑇是𝑉上的正算子； (b) null 𝑇^∗ 𝑇 = null 𝑇； (c) range 𝑇^∗ 𝑇 = range 𝑇^∗； (d) dim range 𝑇 = dim range 𝑇^∗ = dim range 𝑇^∗ 𝑇．"
    },
    {
      "id": "7.65",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.65",
      "name_en": "singular values",
      "name_zh": "奇异值（singular values）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). The singular values of 𝑇 are the nonnegative square roots of the eigenvalues of 𝑇∗𝑇, listed in decreasing order, each included as many times as the dimension of the corresponding eigenspace of 𝑇∗𝑇.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)．𝑇的奇异值是𝑇^∗ 𝑇的特征值的非负平方根，按降序排列，而且每个奇 异值的出现次数，等于𝑇^∗ 𝑇对应特征空间的维数．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). The singular values of 𝑇 are the nonnegative square roots of the eigenvalues of 𝑇∗𝑇, listed in decreasing order, each included as many times as the dimension of the corresponding eigenspace of 𝑇∗𝑇.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)．𝑇的奇异值是𝑇^∗ 𝑇的特征值的非负平方根，按降序排列，而且每个奇 异值的出现次数，等于𝑇^∗ 𝑇对应特征空间的维数．"
    },
    {
      "id": "7.68",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.68",
      "name_en": "role of positive singular values",
      "name_zh": "正奇异值的作用",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) 𝑇 is injective ⟺ 0 is not a singular value of 𝑇; (b) the number of positive singular values of 𝑇 equals dim range 𝑇; (c) 𝑇 is surjective ⟺ number of positive singular values of 𝑇 equals dim 𝑊.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 (a) 𝑇是单射 ⇐⇒ 0不是𝑇的奇异值； (b) 𝑇的正奇异值个数等于 dim range 𝑇； (c) 𝑇是满射 ⇐⇒ 𝑇的正奇异值个数等于 dim 𝑊．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) 𝑇 is injective ⟺ 0 is not a singular value of 𝑇; (b) the number of positive singular values of 𝑇 equals dim range 𝑇; (c) 𝑇 is surjective ⟺ number of positive singular values of 𝑇 equals dim 𝑊.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 (a) 𝑇是单射 ⇐⇒ 0不是𝑇的奇异值； (b) 𝑇的正奇异值个数等于 dim range 𝑇； (c) 𝑇是满射 ⇐⇒ 𝑇的正奇异值个数等于 dim 𝑊．"
    },
    {
      "id": "7.69",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.69",
      "name_en": "isometries characterized by having all singular values equal 1",
      "name_zh": "等距映射可由所有奇异值都等于1来刻画",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑆 ∈ ℒ(𝑉, 𝑊). Then 𝑆 is an isometry ⟺ all singular values of 𝑆 equal 1.",
          "zh": "设 𝑆 ∈ L(𝑉,𝑊)，那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝑆是等距映射 ⇐⇒ 𝑆的所有奇异值都等于1．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑆 ∈ ℒ(𝑉, 𝑊). Then 𝑆 is an isometry ⟺ all singular values of 𝑆 equal 1.",
      "statement_zh": "设 𝑆 ∈ L(𝑉,𝑊)，那么 𝑆是等距映射 ⇐⇒ 𝑆的所有奇异值都等于1．"
    },
    {
      "id": "7.70",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.70",
      "name_en": "singular value decomposition",
      "name_zh": "奇异值分解（singular value decomposition）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and the positive singular values of 𝑇 are 𝑠_1, …, 𝑠_𝑚. Then there exist orthonormal lists 𝑒_1, …, 𝑒_𝑚 in 𝑉 and 𝑓_1, …, 𝑓_𝑚 in 𝑊 such that",
          "zh": "设𝑇 ∈ L(𝑉,𝑊) 且𝑇的正奇异值是𝑠_1,..., 𝑠_𝑚 ．那么存在𝑉中的规范正交组𝑒_1,..., 𝑒_𝑚和 𝑊中的规范正交组 𝑓_1,..., 𝑓_𝑚使得"
        },
        {
          "t": "formula",
          "en": "𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩𝑓_𝑚",
          "zh": "𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩ 𝑓_𝑚(7.71)",
          "eq": "7.71"
        },
        {
          "t": "p",
          "en": "for every 𝑣 ∈ 𝑉.",
          "zh": "对任一𝑣 ∈ 𝑉都成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and the positive singular values of 𝑇 are 𝑠_1, …, 𝑠_𝑚. Then there exist orthonormal lists 𝑒_1, …, 𝑒_𝑚 in 𝑉 and 𝑓_1, …, 𝑓_𝑚 in 𝑊 such that 𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩𝑓_𝑚 for every 𝑣 ∈ 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊) 且𝑇的正奇异值是𝑠_1,..., 𝑠_𝑚 ．那么存在𝑉中的规范正交组𝑒_1,..., 𝑒_𝑚和 𝑊中的规范正交组 𝑓_1,..., 𝑓_𝑚使得 𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩ 𝑓_𝑚(7.71) 对任一𝑣 ∈ 𝑉都成立．"
    },
    {
      "id": "7.74",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.74",
      "name_en": "diagonal matrix",
      "name_zh": "对角矩阵（diagonal matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An 𝑀-by-𝑁 matrix 𝐴 is called a diagonal matrix if all entries of the matrix are 0 except possibly 𝐴_{𝑘,𝑘} for 𝑘 = 1, …, min{𝑀, 𝑁}.",
          "zh": "𝑀 × 𝑁矩阵 𝐴被称为对角矩阵，如果除了 𝐴_{𝑘,𝑘} （𝑘 = 1,..., min{𝑀, 𝑁}）可能不为 0 以 外，所有元素都为0．"
        }
      ],
      "note": null,
      "statement_en": "An 𝑀-by-𝑁 matrix 𝐴 is called a diagonal matrix if all entries of the matrix are 0 except possibly 𝐴_{𝑘,𝑘} for 𝑘 = 1, …, min{𝑀, 𝑁}.",
      "statement_zh": "𝑀 × 𝑁矩阵 𝐴被称为对角矩阵，如果除了 𝐴_{𝑘,𝑘} （𝑘 = 1,..., min{𝑀, 𝑁}）可能不为 0 以 外，所有元素都为0．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and the positive singular values of 𝑇 are 𝑠_1, …, 𝑠_𝑚. Suppose 𝑒_1, …, 𝑒_𝑚 and 𝑓_1, …, 𝑓_𝑚 are orthonormal lists in 𝑉 and 𝑊 such that",
          "zh": "设𝑇 ∈ L(𝑉,𝑊) 且𝑇的正奇异值是𝑠_1,..., 𝑠_𝑚 ．设𝑒_1,..., 𝑒_𝑚和 𝑓_1,..., 𝑓_𝑚是𝑉和𝑊中的 规范正交组，使得对任一𝑣 ∈ 𝑉都有"
        },
        {
          "t": "formula",
          "en": "𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩𝑓_𝑚",
          "zh": "𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩ 𝑓_𝑚 ．(7.76)",
          "eq": "7.76"
        },
        {
          "t": "p",
          "en": "for every 𝑣 ∈ 𝑉. Then",
          "zh": "那么，对任一𝑤 ∈ 𝑊都有"
        },
        {
          "t": "formula",
          "en": "𝑇∗𝑤 = 𝑠_1 ⟨𝑤, 𝑓_1 ⟩𝑒_1 + ⋯ + 𝑠_𝑚 ⟨𝑤, 𝑓_𝑚 ⟩𝑒_𝑚",
          "zh": "𝑇^∗ 𝑤 = 𝑠_1 ⟨𝑤, 𝑓_1 ⟩ 𝑒_1 + · · · + 𝑠_𝑚 ⟨𝑤, 𝑓_𝑚 ⟩ 𝑒_𝑚(7.77)",
          "eq": "7.77"
        },
        {
          "t": "p",
          "en": "and",
          "zh": "和"
        },
        {
          "t": "formula",
          "en": "_†⟨𝑤, 𝑓_1 ⟩ ⟨𝑤, 𝑓_𝑚 ⟩",
          "zh": "_†⟨𝑤, 𝑓_1 ⟩ ⟨𝑤, 𝑓_𝑚 ⟩ 𝑇 𝑤 = 𝑒_1 + · · · + 𝑒_𝑚 ．(7.78) 𝑠_1 𝑠_𝑚",
          "eq": null
        },
        {
          "t": "formula",
          "en": "𝑇 𝑤 = 𝑒_1 + ⋯ + 𝑒_𝑚",
          "zh": "",
          "eq": "7.78"
        },
        {
          "t": "formula",
          "en": "𝑠_1 𝑠_𝑚",
          "zh": "",
          "eq": null
        },
        {
          "t": "p",
          "en": "for every 𝑤 ∈ 𝑊.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and the positive singular values of 𝑇 are 𝑠_1, …, 𝑠_𝑚. Suppose 𝑒_1, …, 𝑒_𝑚 and 𝑓_1, …, 𝑓_𝑚 are orthonormal lists in 𝑉 and 𝑊 such that 𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩𝑓_𝑚 for every 𝑣 ∈ 𝑉. Then 𝑇∗𝑤 = 𝑠_1 ⟨𝑤, 𝑓_1 ⟩𝑒_1 + ⋯ + 𝑠_𝑚 ⟨𝑤, 𝑓_𝑚 ⟩𝑒_𝑚 and _†⟨𝑤, 𝑓_1 ⟩ ⟨𝑤, 𝑓_𝑚 ⟩ 𝑇 𝑤 = 𝑒_1 + ⋯ + 𝑒_𝑚 𝑠_1 𝑠_𝑚 for every 𝑤 ∈ 𝑊.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊) 且𝑇的正奇异值是𝑠_1,..., 𝑠_𝑚 ．设𝑒_1,..., 𝑒_𝑚和 𝑓_1,..., 𝑓_𝑚是𝑉和𝑊中的 规范正交组，使得对任一𝑣 ∈ 𝑉都有 𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩ 𝑓_𝑚 ．(7.76) 那么，对任一𝑤 ∈ 𝑊都有 𝑇^∗ 𝑤 = 𝑠_1 ⟨𝑤, 𝑓_1 ⟩ 𝑒_1 + · · · + 𝑠_𝑚 ⟨𝑤, 𝑓_𝑚 ⟩ 𝑒_𝑚(7.77) 和 _†⟨𝑤, 𝑓_1 ⟩ ⟨𝑤, 𝑓_𝑚 ⟩ 𝑇 𝑤 = 𝑒_1 + · · · + 𝑒_𝑚 ．(7.78) 𝑠_1 𝑠_𝑚"
    },
    {
      "id": "7.80",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.80",
      "name_en": "matrix version of SVD",
      "name_zh": "奇异值分解（SVD）的矩阵版本",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is a 𝑝-by-𝑛 matrix of rank 𝑚 ≥ 1. Then there exist a 𝑝-by-𝑚 matrix 𝐵 with orthonormal columns, an 𝑚-by-𝑚 diagonal matrix 𝐷 with positive numbers on the diagonal, and an 𝑛-by-𝑚 matrix 𝐶 with orthonormal columns such that",
          "zh": "设 𝐴是 𝑝 × 𝑛矩阵（秩𝑚 ≥ 1）．那么，存在列规范正交的 𝑝 × 𝑚矩阵 𝐵，对角线上为正 数的𝑚 × 𝑚对角矩阵 𝐷以及列规范正交的𝑛 × 𝑚矩阵𝐶使得"
        },
        {
          "t": "formula",
          "en": "𝐴 = 𝐵𝐷𝐶∗.",
          "zh": "𝐴 = 𝐵𝐷𝐶^∗ ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is a 𝑝-by-𝑛 matrix of rank 𝑚 ≥ 1. Then there exist a 𝑝-by-𝑚 matrix 𝐵 with orthonormal columns, an 𝑚-by-𝑚 diagonal matrix 𝐷 with positive numbers on the diagonal, and an 𝑛-by-𝑚 matrix 𝐶 with orthonormal columns such that 𝐴 = 𝐵𝐷𝐶∗.",
      "statement_zh": "设 𝐴是 𝑝 × 𝑛矩阵（秩𝑚 ≥ 1）．那么，存在列规范正交的 𝑝 × 𝑚矩阵 𝐵，对角线上为正 数的𝑚 × 𝑚对角矩阵 𝐷以及列规范正交的𝑛 × 𝑚矩阵𝐶使得 𝐴 = 𝐵𝐷𝐶^∗ ．"
    },
    {
      "id": "7.82",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.82",
      "name_en": "upper bound for ‖𝑇𝑣‖",
      "name_zh": "∥𝑇𝑣∥ 的上界",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Let 𝑠1 be the largest singular value of 𝑇. Then",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)．令 𝑠_1是𝑇的最大奇异值．那么"
        },
        {
          "t": "formula",
          "en": "‖𝑇𝑣‖ ≤ 𝑠_1 ‖𝑣‖",
          "zh": "∥𝑇𝑣∥ ≤ 𝑠_1 ∥𝑣∥",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑣 ∈ 𝑉.",
          "zh": "对所有𝑣 ∈ 𝑉成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Let 𝑠1 be the largest singular value of 𝑇. Then ‖𝑇𝑣‖ ≤ 𝑠_1 ‖𝑣‖ for all 𝑣 ∈ 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)．令 𝑠_1是𝑇的最大奇异值．那么 ∥𝑇𝑣∥ ≤ 𝑠_1 ∥𝑣∥ 对所有𝑣 ∈ 𝑉成立．"
    },
    {
      "id": "7.86",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.86",
      "name_en": "norm of a linear map, ‖⋅‖",
      "name_zh": "线性映射的范数（norm of a linear map）、∥·∥",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then the norm of 𝑇, denoted by ‖𝑇‖, is defined by",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)．那么，𝑇的范数，记为 ∥𝑇∥，定义为"
        },
        {
          "t": "formula",
          "en": "‖𝑇‖ = max{‖𝑇𝑣‖ : 𝑣 ∈ 𝑉 and ‖𝑣‖ ≤ 1}.",
          "zh": "� � ∥𝑇∥ = max ∥𝑇𝑣∥: 𝑣 ∈ 𝑉且 ∥𝑣∥ ≤ 1 ．",
          "eq": null
        }
      ],
      "note": {
        "en": "",
        "zh": "一般地，由非负数构成的无限集不一定存在最大值．然而，7.86前的讨论表明，从𝑉到𝑊 的线性映射𝑇的范数定义中的最大值确实存在（且等于𝑇的最大奇异值）． 关于“范数”一词和 ∥·∥ 这一记号，我们现在有两种不同用法：第一种用法跟𝑉上的内 � 积相关，我们定义的是 ∥𝑣∥ = ⟨𝑣, 𝑣⟩ 对任一 𝑣 ∈ 𝑉都成立；第二种用法，则是用我们刚刚为"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then the norm of 𝑇, denoted by ‖𝑇‖, is defined by ‖𝑇‖ = max{‖𝑇𝑣‖ : 𝑣 ∈ 𝑉 and ‖𝑣‖ ≤ 1}.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)．那么，𝑇的范数，记为 ∥𝑇∥，定义为 � � ∥𝑇∥ = max ∥𝑇𝑣∥: 𝑣 ∈ 𝑉且 ∥𝑣∥ ≤ 1 ． 一般地，由非负数构成的无限集不一定存在最大值．然而，7.86前的讨论表明，从𝑉到𝑊 的线性映射𝑇的范数定义中的最大值确实存在（且等于𝑇的最大奇异值）． 关于“范数”一词和 ∥·∥ 这一记号，我们现在有两种不同用法：第一种用法跟𝑉上的内 � 积相关，我们定义的是 ∥𝑣∥ = ⟨𝑣, 𝑣⟩ 对任一 𝑣 ∈ 𝑉都成立；第二种用法，则是用我们刚刚为"
    },
    {
      "id": "7.87",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.87",
      "name_en": "basic properties of norms of linear maps",
      "name_zh": "线性映射范数的基本性质",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) ‖𝑇‖ ≥ 0; (b) ‖𝑇‖ = 0 ⟺ 𝑇 = 0; (c) ‖𝜆𝑇‖ = |𝜆| ‖𝑇‖ for all 𝜆 ∈ 𝐅; (d) ‖𝑆 + 𝑇‖ ≤ ‖𝑆‖ + ‖𝑇‖ for all 𝑆 ∈ ℒ(𝑉, 𝑊).",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 (a) ∥𝑇∥ ≥ 0； (b) ∥𝑇∥ = 0 ⇐⇒ 𝑇 = 0； (c) ∥𝜆𝑇∥ = |𝜆| ∥𝑇∥ 对所有𝜆 ∈ F 成立； (d) ∥𝑆 + 𝑇∥ ≤ ∥𝑆∥ + ∥𝑇∥ 对所有 𝑆 ∈ L(𝑉,𝑊) 成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) ‖𝑇‖ ≥ 0; (b) ‖𝑇‖ = 0 ⟺ 𝑇 = 0; (c) ‖𝜆𝑇‖ = |𝜆| ‖𝑇‖ for all 𝜆 ∈ 𝐅; (d) ‖𝑆 + 𝑇‖ ≤ ‖𝑆‖ + ‖𝑇‖ for all 𝑆 ∈ ℒ(𝑉, 𝑊).",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 (a) ∥𝑇∥ ≥ 0； (b) ∥𝑇∥ = 0 ⇐⇒ 𝑇 = 0； (c) ∥𝜆𝑇∥ = |𝜆| ∥𝑇∥ 对所有𝜆 ∈ F 成立； (d) ∥𝑆 + 𝑇∥ ≤ ∥𝑆∥ + ∥𝑇∥ 对所有 𝑆 ∈ L(𝑉,𝑊) 成立．"
    },
    {
      "id": "7.88",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.88",
      "name_en": "alternative formulas for ‖𝑇‖",
      "name_zh": "∥𝑇∥ 的多种表达式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) ‖𝑇‖ = the largest singular value of 𝑇; (b) ‖𝑇‖ = max{‖𝑇𝑣‖ : 𝑣 ∈ 𝑉 and ‖𝑣‖ = 1}; (c) ‖𝑇‖ = the smallest number 𝑐 such that ‖𝑇𝑣‖ ≤ 𝑐‖𝑣‖ for all 𝑣 ∈ 𝑉.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，那么： (a) ∥𝑇∥ = 𝑇的最大奇异值；"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "(b) ∥𝑇∥ = max ∥𝑇𝑣∥: 𝑣 ∈ 𝑉且 ∥𝑣∥ = 1； (c) ∥𝑇∥ =使得 ∥𝑇𝑣∥ ≤ 𝑐 ∥𝑣∥ 对所有𝑣 ∈ 𝑉成立的最小数𝑐．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then (a) ‖𝑇‖ = the largest singular value of 𝑇; (b) ‖𝑇‖ = max{‖𝑇𝑣‖ : 𝑣 ∈ 𝑉 and ‖𝑣‖ = 1}; (c) ‖𝑇‖ = the smallest number 𝑐 such that ‖𝑇𝑣‖ ≤ 𝑐‖𝑣‖ for all 𝑣 ∈ 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，那么： (a) ∥𝑇∥ = 𝑇的最大奇异值； � � (b) ∥𝑇∥ = max ∥𝑇𝑣∥: 𝑣 ∈ 𝑉且 ∥𝑣∥ = 1； (c) ∥𝑇∥ =使得 ∥𝑇𝑣∥ ≤ 𝑐 ∥𝑣∥ 对所有𝑣 ∈ 𝑉成立的最小数𝑐．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then ∥𝑇∗∥ = ‖𝑇‖.",
          "zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 ∥𝑇^∗ ∥ = ∥𝑇∥．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊). Then ∥𝑇∗∥ = ‖𝑇‖.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊)，那么 ∥𝑇^∗ ∥ = ∥𝑇∥．"
    },
    {
      "id": "7.92",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.92",
      "name_en": "best approximation by linear map whose range has dimension ≤ 𝑘",
      "name_zh": "用值域维数至多为 𝑘的线性映射得到的最佳逼近",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝑠_1 ≥ ⋯ ≥ 𝑠_𝑚 are the positive singular values of 𝑇. Suppose 1 ≤ 𝑘 < 𝑚. Then",
          "zh": "设𝑇 ∈ L(𝑉,𝑊) 且 𝑠_1 ≥ · · · ≥ 𝑠_𝑚是𝑇的正奇异值．设1 ≤ 𝑘 < 𝑚，那么有"
        },
        {
          "t": "formula",
          "en": "min{‖𝑇−𝑆‖ : 𝑆 ∈ ℒ(𝑉, 𝑊) and dim range 𝑆 ≤ 𝑘} = 𝑠_{𝑘+1}.",
          "zh": "� � min ∥𝑇−𝑆∥: 𝑆 ∈ L(𝑉,𝑊) 且 dim range 𝑆 ≤ 𝑘 = 𝑠_{𝑘+1} ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Furthermore, if",
          "zh": "进一步，如果"
        },
        {
          "t": "formula",
          "en": "𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩𝑓_𝑚",
          "zh": "𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩ 𝑓_𝑚",
          "eq": null
        },
        {
          "t": "p",
          "en": "is a singular value decomposition of 𝑇 and 𝑇_𝑘 ∈ ℒ(𝑉, 𝑊) is defined by",
          "zh": "是𝑇的奇异值分解，而𝑇_𝑘 ∈ L(𝑉,𝑊) 定义为"
        },
        {
          "t": "formula",
          "en": "𝑇_𝑘 𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑘 ⟨𝑣, 𝑒_𝑘 ⟩𝑓_𝑘",
          "zh": "𝑇_𝑘 𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑘 ⟨𝑣, 𝑒_𝑘 ⟩ 𝑓_𝑘",
          "eq": null
        },
        {
          "t": "p",
          "en": "for each 𝑣 ∈ 𝑉, then dim range 𝑇_𝑘 = 𝑘 and ‖𝑇−𝑇_𝑘 ‖ = 𝑠_{𝑘+1}.",
          "zh": "对任一𝑣 ∈ 𝑉都成立，那么 dim range 𝑇_𝑘 = 𝑘且 ∥𝑇−𝑇_𝑘 ∥ = 𝑠_{𝑘+1} ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉, 𝑊) and 𝑠_1 ≥ ⋯ ≥ 𝑠_𝑚 are the positive singular values of 𝑇. Suppose 1 ≤ 𝑘 < 𝑚. Then min{‖𝑇−𝑆‖ : 𝑆 ∈ ℒ(𝑉, 𝑊) and dim range 𝑆 ≤ 𝑘} = 𝑠_{𝑘+1}. Furthermore, if 𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩𝑓_𝑚 is a singular value decomposition of 𝑇 and 𝑇_𝑘 ∈ ℒ(𝑉, 𝑊) is defined by 𝑇_𝑘 𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑘 ⟨𝑣, 𝑒_𝑘 ⟩𝑓_𝑘 for each 𝑣 ∈ 𝑉, then dim range 𝑇_𝑘 = 𝑘 and ‖𝑇−𝑇_𝑘 ‖ = 𝑠_{𝑘+1}.",
      "statement_zh": "设𝑇 ∈ L(𝑉,𝑊) 且 𝑠_1 ≥ · · · ≥ 𝑠_𝑚是𝑇的正奇异值．设1 ≤ 𝑘 < 𝑚，那么有 � � min ∥𝑇−𝑆∥: 𝑆 ∈ L(𝑉,𝑊) 且 dim range 𝑆 ≤ 𝑘 = 𝑠_{𝑘+1} ． 进一步，如果 𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑚 ⟨𝑣, 𝑒_𝑚 ⟩ 𝑓_𝑚 是𝑇的奇异值分解，而𝑇_𝑘 ∈ L(𝑉,𝑊) 定义为 𝑇_𝑘 𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑘 ⟨𝑣, 𝑒_𝑘 ⟩ 𝑓_𝑘 对任一𝑣 ∈ 𝑉都成立，那么 dim range 𝑇_𝑘 = 𝑘且 ∥𝑇−𝑇_𝑘 ∥ = 𝑠_{𝑘+1} ．"
    },
    {
      "id": "7.93",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.93",
      "name_en": "polar decomposition",
      "name_zh": "极分解（polar decomposition）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Then there exists a unitary operator 𝑆 ∈ ℒ(𝑉) such that",
          "zh": "设𝑇 ∈ L(𝑉)，那么存在幺正算子 𝑆 ∈ L(𝑉) 使得"
        },
        {
          "t": "formula",
          "en": "𝑇 = 𝑆√𝑇∗𝑇.",
          "zh": "√ 𝑇 = 𝑆 𝑇^∗ 𝑇．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Then there exists a unitary operator 𝑆 ∈ ℒ(𝑉) such that 𝑇 = 𝑆√𝑇∗𝑇.",
      "statement_zh": "设𝑇 ∈ L(𝑉)，那么存在幺正算子 𝑆 ∈ L(𝑉) 使得 √ 𝑇 = 𝑆 𝑇^∗ 𝑇．"
    },
    {
      "id": "7.95",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.95",
      "name_en": "ball, 𝐵",
      "name_zh": "球（ball）、𝐵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The ball in 𝑉 of radius 1 centered at 0, denoted by 𝐵, is defined by",
          "zh": "𝑉中半径为1、以0为心的球（ball），记为 𝐵，定义为"
        },
        {
          "t": "formula",
          "en": "𝐵 ={𝑣 ∈ 𝑉 : ‖𝑣‖ < 1}.",
          "zh": "𝐵 ={𝑣 ∈ 𝑉: ∥𝑣∥ < 1} ．",
          "eq": null
        }
      ],
      "note": {
        "en": "",
        "zh": "如果 dim 𝑉 = 2，那么我们有时候用的词是“圆盘”（disk）而不是“球”． 然而，在所有维度中都用“球”这个词可以避免混乱．类似地，如果 dim 𝑉 = 2， 那么我们有时候用的词是“椭圆”（ellipse）而不是我们将要定义的“椭球”． 同样，在所有维度中都用“椭球”这个词可以避免混乱． 以下定义的椭球可以视为将球 𝐵沿每个 𝑓_𝑘轴伸缩至 𝑠_𝑘倍得到的． R2 中的球 𝐵．"
      },
      "statement_en": "The ball in 𝑉 of radius 1 centered at 0, denoted by 𝐵, is defined by 𝐵 ={𝑣 ∈ 𝑉 : ‖𝑣‖ < 1}.",
      "statement_zh": "𝑉中半径为1、以0为心的球（ball），记为 𝐵，定义为 𝐵 ={𝑣 ∈ 𝑉: ∥𝑣∥ < 1} ． 如果 dim 𝑉 = 2，那么我们有时候用的词是“圆盘”（disk）而不是“球”． 然而，在所有维度中都用“球”这个词可以避免混乱．类似地，如果 dim 𝑉 = 2， 那么我们有时候用的词是“椭圆”（ellipse）而不是我们将要定义的“椭球”． 同样，在所有维度中都用“椭球”这个词可以避免混乱． 以下定义的椭球可以视为将球 𝐵沿每个 𝑓_𝑘轴伸缩至 𝑠_𝑘倍得到的． R2 中的球 𝐵．"
    },
    {
      "id": "7.96",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.96",
      "name_en": "ellipsoid, 𝐸(𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛), principal axes",
      "name_zh": "椭球（ellipsoid）、𝐸(𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛)，主轴（principal axes）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑓_1, …, 𝑓_𝑛 is an orthonormal basis of 𝑉 and 𝑠_1, …, 𝑠_𝑛 are positive numbers. The ellipsoid 𝐸(𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛) with principal axes 𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛 is defined by",
          "zh": "设 𝑓_1,..., 𝑓_𝑛是 𝑉的规范正交基，𝑠_1,..., 𝑠_𝑛是正数．主轴为 𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛的椭球 𝐸(𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛) 定义为"
        },
        {
          "t": "formula",
          "en": "⟨𝑣, 𝑓_1 ⟩|^2 |⟨𝑣, 𝑓_𝑛 ⟩|^2 𝐸(𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛) ={𝑣 ∈ 𝑉 : + ⋯ + < 1}. 𝑠^2_1 𝑠^2_𝑛",
          "zh": "�_{22} � ⟨𝑣, 𝑓_1 ⟩| |⟨𝑣, 𝑓_𝑛 ⟩ 𝐸(𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛) = 𝑣 ∈ 𝑉: + · · · + < 1 ． 𝑠^2_1 𝑠^2_𝑛",
          "eq": null
        }
      ],
      "note": {
        "en": "The ellipsoid notation 𝐸(𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛) does not explicitly include the inner product space 𝑉, even though the definition above depends on 𝑉. However the inner product space 𝑉 should be clear from the context and also from the requirement that 𝑓_1, …, 𝑓_𝑛 be an orthonormal basis of 𝑉.",
        "zh": "椭球的记号𝐸(𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛)并没有显式地包含内积空间𝑉，尽管以上的定义依赖于𝑉．然 而，从上下文以及“ 𝑓_1,..., 𝑓_𝑛是𝑉的规范正交基”这一要求来看，内积空间𝑉应该是明确的．"
      },
      "statement_en": "Suppose that 𝑓_1, …, 𝑓_𝑛 is an orthonormal basis of 𝑉 and 𝑠_1, …, 𝑠_𝑛 are positive numbers. The ellipsoid 𝐸(𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛) with principal axes 𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛 is defined by ⟨𝑣, 𝑓_1 ⟩|^2 |⟨𝑣, 𝑓_𝑛 ⟩|^2 𝐸(𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛) ={𝑣 ∈ 𝑉 : + ⋯ + < 1}. 𝑠^2_1 𝑠^2_𝑛 The ellipsoid notation 𝐸(𝑠_1 𝑓_1, …, 𝑠_𝑛 𝑓_𝑛) does not explicitly include the inner product space 𝑉, even though the definition above depends on 𝑉. However the inner product space 𝑉 should be clear from the context and also from the requirement that 𝑓_1, …, 𝑓_𝑛 be an orthonormal basis of 𝑉.",
      "statement_zh": "设 𝑓_1,..., 𝑓_𝑛是 𝑉的规范正交基，𝑠_1,..., 𝑠_𝑛是正数．主轴为 𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛的椭球 𝐸(𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛) 定义为 �_{22} � ⟨𝑣, 𝑓_1 ⟩| |⟨𝑣, 𝑓_𝑛 ⟩ 𝐸(𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛) = 𝑣 ∈ 𝑉: + · · · + < 1 ． 𝑠^2_1 𝑠^2_𝑛 椭球的记号𝐸(𝑠_1 𝑓_1,..., 𝑠_𝑛 𝑓_𝑛)并没有显式地包含内积空间𝑉，尽管以上的定义依赖于𝑉．然 而，从上下文以及“ 𝑓_1,..., 𝑓_𝑛是𝑉的规范正交基”这一要求来看，内积空间𝑉应该是明确的．"
    },
    {
      "id": "7.98",
      "kind": "notation",
      "chapter": "ch7",
      "number": "7.98",
      "name_en": "𝑇(Ω)",
      "name_zh": "𝑇(Ω)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑇 a function defined on 𝑉 and Ω ⊆ 𝑉, define 𝑇(Ω) by",
          "zh": "对于定义在𝑉上的函数𝑇，以及Ω ⊆ 𝑉，定义𝑇(Ω) 为"
        },
        {
          "t": "formula",
          "en": "𝑇(Ω) ={𝑇𝑣 : 𝑣 ∈ Ω}.",
          "zh": "𝑇(Ω) ={𝑇𝑣: 𝑣 ∈ Ω} ．",
          "eq": null
        }
      ],
      "note": {
        "en": "Thus if 𝑇 is a function defined on 𝑉, then 𝑇(𝑉) = range 𝑇. The next result states that every invertible operator 𝑇 ∈ ℒ(𝑉) maps the ball 𝐵 in 𝑉 onto an ellipsoid in 𝑉. The proof shows that the principal axes of this ellipsoid come from the singular value decomposition of 𝑇.",
        "zh": "那么，如果𝑇是定义在𝑉上的函数，就有𝑇(𝑉) = range 𝑇． 接下来这条结果指出，每个可逆算子𝑇 ∈ L(𝑉) 都将𝑉中的球 𝐵映成𝑉中的椭球．其证明 表明这个椭球的主轴就由𝑇的奇异值分解得到．"
      },
      "statement_en": "For 𝑇 a function defined on 𝑉 and Ω ⊆ 𝑉, define 𝑇(Ω) by 𝑇(Ω) ={𝑇𝑣 : 𝑣 ∈ Ω}. Thus if 𝑇 is a function defined on 𝑉, then 𝑇(𝑉) = range 𝑇. The next result states that every invertible operator 𝑇 ∈ ℒ(𝑉) maps the ball 𝐵 in 𝑉 onto an ellipsoid in 𝑉. The proof shows that the principal axes of this ellipsoid come from the singular value decomposition of 𝑇.",
      "statement_zh": "对于定义在𝑉上的函数𝑇，以及Ω ⊆ 𝑉，定义𝑇(Ω) 为 𝑇(Ω) ={𝑇𝑣: 𝑣 ∈ Ω} ． 那么，如果𝑇是定义在𝑉上的函数，就有𝑇(𝑉) = range 𝑇． 接下来这条结果指出，每个可逆算子𝑇 ∈ L(𝑉) 都将𝑉中的球 𝐵映成𝑉中的椭球．其证明 表明这个椭球的主轴就由𝑇的奇异值分解得到．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is invertible. Then 𝑇 maps the ball 𝐵 in 𝑉 onto an ellipsoid in 𝑉.",
          "zh": "设𝑇 ∈ L(𝑉) 可逆，那么𝑇将𝑉中的球 𝐵映成𝑉中的椭球．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is invertible. Then 𝑇 maps the ball 𝐵 in 𝑉 onto an ellipsoid in 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 可逆，那么𝑇将𝑉中的球 𝐵映成𝑉中的椭球．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is invertible and 𝐸 is an ellipsoid in 𝑉. Then 𝑇(𝐸) is an ellipsoid in 𝑉.",
          "zh": "设𝑇 ∈ L(𝑉) 可逆，且 𝐸是𝑉中的椭球．那么𝑇(𝐸) 是𝑉中的椭球．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is invertible and 𝐸 is an ellipsoid in 𝑉. Then 𝑇(𝐸) is an ellipsoid in 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 可逆，且 𝐸是𝑉中的椭球．那么𝑇(𝐸) 是𝑉中的椭球．"
    },
    {
      "id": "7.102",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.102",
      "name_en": "𝑃(𝑣_1, …, 𝑣_𝑛), parallelepiped",
      "name_zh": "𝑃(𝑣_1,..., 𝑣_𝑛)、平行体（parallelepiped）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Let",
          "zh": "设𝑣_1,..., 𝑣_𝑛是𝑉的基，令"
        },
        {
          "t": "formula",
          "en": "𝑃(𝑣_1, …, 𝑣_𝑛) ={𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑛 𝑣_𝑛 : 𝑎_1, …, 𝑎_𝑛 ∈(0, 1)}.",
          "zh": "𝑃(𝑣_1,..., 𝑣_𝑛) ={𝑎_1 𝑣_1 + · · · + 𝑎_𝑛 𝑣_𝑛: 𝑎_1,..., 𝑎_𝑛 ∈(0, 1)} ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "A parallelepiped is a set of the form 𝑢 + 𝑃(𝑣_1, …, 𝑣_𝑛) for some 𝑢 ∈ 𝑉. The vectors 𝑣_1, …, 𝑣_𝑛 are called the edges of this parallelepiped.",
          "zh": "平行体是形如𝑢 + 𝑃(𝑣_1,..., 𝑣_𝑛) 的集合，其中𝑢 ∈ 𝑉．向量 𝑣_1,..., 𝑣_𝑛称为该平行体的边"
        },
        {
          "t": "bullet",
          "en": "",
          "zh": "（edges）．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉. Let 𝑃(𝑣_1, …, 𝑣_𝑛) ={𝑎_1 𝑣_1 + ⋯ + 𝑎_𝑛 𝑣_𝑛 : 𝑎_1, …, 𝑎_𝑛 ∈(0, 1)}. A parallelepiped is a set of the form 𝑢 + 𝑃(𝑣_1, …, 𝑣_𝑛) for some 𝑢 ∈ 𝑉. The vectors 𝑣_1, …, 𝑣_𝑛 are called the edges of this parallelepiped.",
      "statement_zh": "设𝑣_1,..., 𝑣_𝑛是𝑉的基，令 𝑃(𝑣_1,..., 𝑣_𝑛) ={𝑎_1 𝑣_1 + · · · + 𝑎_𝑛 𝑣_𝑛: 𝑎_1,..., 𝑎_𝑛 ∈(0, 1)} ． 平行体是形如𝑢 + 𝑃(𝑣_1,..., 𝑣_𝑛) 的集合，其中𝑢 ∈ 𝑉．向量 𝑣_1,..., 𝑣_𝑛称为该平行体的边 （edges）．"
    },
    {
      "id": "7.104",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.104",
      "name_en": "invertible operator takes parallelepipeds to parallelepipeds",
      "name_zh": "可逆算子化平行体为平行体",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑢 ∈ 𝑉, 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉, and 𝑇 ∈ ℒ(𝑉) is invertible. Then",
          "zh": "设𝑢 ∈ 𝑉且𝑣_1,..., 𝑣_𝑛是𝑉的基．设𝑇 ∈ L(𝑉) 可逆，那么"
        },
        {
          "t": "formula",
          "en": "𝑇(𝑢 + 𝑃(𝑣_1, …, 𝑣_𝑛)) = 𝑇𝑢 + 𝑃(𝑇𝑣_1, …, 𝑇𝑣_𝑛).",
          "zh": "� � 𝑇 𝑢 + 𝑃(𝑣_1,..., 𝑣_𝑛) = 𝑇𝑢 + 𝑃(𝑇𝑣_1,...,𝑇𝑣_𝑛)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑢 ∈ 𝑉, 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉, and 𝑇 ∈ ℒ(𝑉) is invertible. Then 𝑇(𝑢 + 𝑃(𝑣_1, …, 𝑣_𝑛)) = 𝑇𝑢 + 𝑃(𝑇𝑣_1, …, 𝑇𝑣_𝑛).",
      "statement_zh": "设𝑢 ∈ 𝑉且𝑣_1,..., 𝑣_𝑛是𝑉的基．设𝑇 ∈ L(𝑉) 可逆，那么 � � 𝑇 𝑢 + 𝑃(𝑣_1,..., 𝑣_𝑛) = 𝑇𝑢 + 𝑃(𝑇𝑣_1,...,𝑇𝑣_𝑛)．"
    },
    {
      "id": "7.105",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.105",
      "name_en": "box",
      "name_zh": "长方体（box）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A box in 𝑉 is a set of the form",
          "zh": "𝑉中的长方体^7是形如"
        },
        {
          "t": "formula",
          "en": "𝑢 + 𝑃(𝑟_1 𝑒_1, …, 𝑟_𝑛 𝑒_𝑛)",
          "zh": "𝑢 + 𝑃(𝑟_1 𝑒_1,..., 𝑟_𝑛 𝑒_𝑛)",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑢 ∈ 𝑉 and 𝑟_1, …, 𝑟_𝑛 are positive numbers and 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉.",
          "zh": "的集合，其中𝑢 ∈ 𝑉，𝑟_1,..., 𝑟_𝑛是正数，𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基．"
        }
      ],
      "note": {
        "en": "Note that in the special case of 𝐑^2 each box is a rectangle, but the terminology box can be used in all dimensions.",
        "zh": "即7.102中所说的“边”．"
      },
      "statement_en": "A box in 𝑉 is a set of the form 𝑢 + 𝑃(𝑟_1 𝑒_1, …, 𝑟_𝑛 𝑒_𝑛) where 𝑢 ∈ 𝑉 and 𝑟_1, …, 𝑟_𝑛 are positive numbers and 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉. Note that in the special case of 𝐑^2 each box is a rectangle, but the terminology box can be used in all dimensions.",
      "statement_zh": "𝑉中的长方体^7是形如 𝑢 + 𝑃(𝑟_1 𝑒_1,..., 𝑟_𝑛 𝑒_𝑛) 的集合，其中𝑢 ∈ 𝑉，𝑟_1,..., 𝑟_𝑛是正数，𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基． 即7.102中所说的“边”．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is invertible. Suppose 𝑇 has singular value decomposition",
          "zh": "设𝑇 ∈ L(𝑉) 可逆．设𝑇有奇异值分解"
        },
        {
          "t": "formula",
          "en": "𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑛 ⟨𝑣, 𝑒_𝑛 ⟩𝑓_𝑛",
          "zh": "𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑛 ⟨𝑣, 𝑒_𝑛 ⟩ 𝑓_𝑛",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑠_1, …, 𝑠_𝑛 are the singular values of 𝑇 and 𝑒_1, …, 𝑒_𝑛 and 𝑓_1, …, 𝑓_𝑛 are orthonormal bases of 𝑉 and the equation above holds for all 𝑣 ∈ 𝑉. Then 𝑇 maps the box 𝑢 + 𝑃(𝑟_1 𝑒_1, …, 𝑟_𝑛 𝑒_𝑛) onto the box 𝑇𝑢 + 𝑃(𝑟_1 𝑠_1 𝑓_1, …, 𝑟_𝑛 𝑠_𝑛 𝑓_𝑛) for all positive numbers 𝑟_1, …, 𝑟_𝑛 and all 𝑢 ∈ 𝑉.",
          "zh": "其中，𝑠_1,..., 𝑠_𝑛是𝑇的奇异值，𝑒_1,..., 𝑒_𝑛和 𝑓_1,..., 𝑓_𝑛是𝑉的规范正交基，上式对所有 𝑣 ∈ 𝑉成立．那么，对于所有正数𝑟_1,..., 𝑟_𝑛和所有𝑢 ∈ 𝑉，𝑇将长方体𝑢+𝑃(𝑟_1 𝑒_1,..., 𝑟_𝑛 𝑒_𝑛) 映成长方体𝑇𝑢 + 𝑃(𝑟_1 𝑠_1 𝑓_1,..., 𝑟_𝑛 𝑠_𝑛 𝑓_𝑛)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is invertible. Suppose 𝑇 has singular value decomposition 𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩𝑓_1 + ⋯ + 𝑠_𝑛 ⟨𝑣, 𝑒_𝑛 ⟩𝑓_𝑛 where 𝑠_1, …, 𝑠_𝑛 are the singular values of 𝑇 and 𝑒_1, …, 𝑒_𝑛 and 𝑓_1, …, 𝑓_𝑛 are orthonormal bases of 𝑉 and the equation above holds for all 𝑣 ∈ 𝑉. Then 𝑇 maps the box 𝑢 + 𝑃(𝑟_1 𝑒_1, …, 𝑟_𝑛 𝑒_𝑛) onto the box 𝑇𝑢 + 𝑃(𝑟_1 𝑠_1 𝑓_1, …, 𝑟_𝑛 𝑠_𝑛 𝑓_𝑛) for all positive numbers 𝑟_1, …, 𝑟_𝑛 and all 𝑢 ∈ 𝑉.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 可逆．设𝑇有奇异值分解 𝑇𝑣 = 𝑠_1 ⟨𝑣, 𝑒_1 ⟩ 𝑓_1 + · · · + 𝑠_𝑛 ⟨𝑣, 𝑒_𝑛 ⟩ 𝑓_𝑛 其中，𝑠_1,..., 𝑠_𝑛是𝑇的奇异值，𝑒_1,..., 𝑒_𝑛和 𝑓_1,..., 𝑓_𝑛是𝑉的规范正交基，上式对所有 𝑣 ∈ 𝑉成立．那么，对于所有正数𝑟_1,..., 𝑟_𝑛和所有𝑢 ∈ 𝑉，𝑇将长方体𝑢+𝑃(𝑟_1 𝑒_1,..., 𝑟_𝑛 𝑒_𝑛) 映成长方体𝑇𝑢 + 𝑃(𝑟_1 𝑠_1 𝑓_1,..., 𝑟_𝑛 𝑠_𝑛 𝑓_𝑛)．"
    },
    {
      "id": "7.108",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.108",
      "name_en": "volume of a box",
      "name_zh": "长方体的体积（volume of a box）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐑. If 𝑢 ∈ 𝑉 and 𝑟_1, …, 𝑟_𝑛 are positive numbers and 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉, then",
          "zh": "设 F = R．如果𝑢 ∈ 𝑉，𝑟_1,..., 𝑟_𝑛是正数，𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基，那么"
        },
        {
          "t": "formula",
          "en": "volume(𝑢 + 𝑃(𝑟_1 𝑒_1, …, 𝑟_𝑛 𝑒_𝑛)) = 𝑟_1 × ⋯ × 𝑟_𝑛.",
          "zh": "� � volume 𝑢 + 𝑃(𝑟_1 𝑒_1,..., 𝑟_𝑛 𝑒_𝑛) = 𝑟_1 × · · · × 𝑟_𝑛 ．",
          "eq": null
        }
      ],
      "note": {
        "en": "",
        "zh": "以上定义跟常见的 R^2中矩形面积（这里我们称为体积）公式和 R^3中长方体的体积公式 是一致的．例如，例7.106中第一个长方体具有二维体积（或面积），其值为2，因为其定义边 √ √ 的长度为 2和 2；第二个长方体具有三维体积，其值为2，因为其定义边的长度为1、2、1． 为了定义 𝑉的子集的体积，我们用有限个互不相交的长方体来逼 近这一子集，并且将用于逼近的这些长方体的体积加起来．我们对越多 的不相交长方体取并集，就能越准确地逼近𝑉的一子集，对其体积的逼 近也越好． 这些想法应该让你想起了黎曼积分（Riemann integral）是怎样定义 的——用若干互不相交的矩形来逼近曲线下的面积．上面的讨论引出了 该球的体积 ≈ 五个 以下不严谨但合乎直觉的定义． 长方体的体积之和．"
      },
      "statement_en": "Suppose 𝐅 = 𝐑. If 𝑢 ∈ 𝑉 and 𝑟_1, …, 𝑟_𝑛 are positive numbers and 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉, then volume(𝑢 + 𝑃(𝑟_1 𝑒_1, …, 𝑟_𝑛 𝑒_𝑛)) = 𝑟_1 × ⋯ × 𝑟_𝑛.",
      "statement_zh": "设 F = R．如果𝑢 ∈ 𝑉，𝑟_1,..., 𝑟_𝑛是正数，𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基，那么 � � volume 𝑢 + 𝑃(𝑟_1 𝑒_1,..., 𝑟_𝑛 𝑒_𝑛) = 𝑟_1 × · · · × 𝑟_𝑛 ． 以上定义跟常见的 R^2中矩形面积（这里我们称为体积）公式和 R^3中长方体的体积公式 是一致的．例如，例7.106中第一个长方体具有二维体积（或面积），其值为2，因为其定义边 √ √ 的长度为 2和 2；第二个长方体具有三维体积，其值为2，因为其定义边的长度为1、2、1． 为了定义 𝑉的子集的体积，我们用有限个互不相交的长方体来逼 近这一子集，并且将用于逼近的这些长方体的体积加起来．我们对越多 的不相交长方体取并集，就能越准确地逼近𝑉的一子集，对其体积的逼 近也越好． 这些想法应该让你想起了黎曼积分（Riemann integral）是怎样定义 的——用若干互不相交的矩形来逼近曲线下的面积．上面的讨论引出了 该球的体积 ≈ 五个 以下不严谨但合乎直觉的定义． 长方体的体积之和．"
    },
    {
      "id": "7.109",
      "kind": "definition",
      "chapter": "ch7",
      "number": "7.109",
      "name_en": "volume",
      "name_zh": "体积（volume）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐑 and Ω ⊆ 𝑉. Then the volume of Ω, denoted by volume Ω, is approximately the sum of the volumes of a collection of disjoint boxes that approximate Ω.",
          "zh": "设 F = R，Ω ⊆ 𝑉．那么Ω的体积，记为 volume Ω，约等于逼近Ω的若干个不相交长方 体的体积之和．"
        }
      ],
      "note": {
        "en": "We are ignoring many reasonable questions by taking an intuitive approach to volume. For example, if we approximate Ω by boxes with respect to one basis do we get the same volume if we approximate Ω by boxes with respect to a different basis? If Ω_1 and Ω_2 are disjoint subsets of 𝑉, is volume(Ω_1 ∪ Ω_2) = volume Ω_1 + volume Ω_2? Provided that we consider only reasonably nice subsets of 𝑉, techniques of analysis show that both these questions have affirmative answers that agree with our intuition about volume.",
        "zh": "我们用一种直观的方法处理体积，如此就忽略了许多值得推敲的问题．例如，如果我们用 关于一个基的长方体逼近 Ω，那么我们再用关于另一个基的长方体逼近 Ω 又能否得到相同的 体积？如果Ω_1和Ω_2是𝑉的不相交子集，那么是否有 volume(Ω_1 ∪Ω_2) = volume Ω_1 +volume Ω_2？ 假如我们仅考虑𝑉的性质相当好的子集，那么借助分析学的手段可以说明，这两个问题都有 肯定的回答，和我们对体积的直觉一致．"
      },
      "statement_en": "Suppose 𝐅 = 𝐑 and Ω ⊆ 𝑉. Then the volume of Ω, denoted by volume Ω, is approximately the sum of the volumes of a collection of disjoint boxes that approximate Ω. We are ignoring many reasonable questions by taking an intuitive approach to volume. For example, if we approximate Ω by boxes with respect to one basis do we get the same volume if we approximate Ω by boxes with respect to a different basis? If Ω_1 and Ω_2 are disjoint subsets of 𝑉, is volume(Ω_1 ∪ Ω_2) = volume Ω_1 + volume Ω_2? Provided that we consider only reasonably nice subsets of 𝑉, techniques of analysis show that both these questions have affirmative answers that agree with our intuition about volume.",
      "statement_zh": "设 F = R，Ω ⊆ 𝑉．那么Ω的体积，记为 volume Ω，约等于逼近Ω的若干个不相交长方 体的体积之和． 我们用一种直观的方法处理体积，如此就忽略了许多值得推敲的问题．例如，如果我们用 关于一个基的长方体逼近 Ω，那么我们再用关于另一个基的长方体逼近 Ω 又能否得到相同的 体积？如果Ω_1和Ω_2是𝑉的不相交子集，那么是否有 volume(Ω_1 ∪Ω_2) = volume Ω_1 +volume Ω_2？ 假如我们仅考虑𝑉的性质相当好的子集，那么借助分析学的手段可以说明，这两个问题都有 肯定的回答，和我们对体积的直觉一致．"
    },
    {
      "id": "7.111",
      "kind": "result",
      "chapter": "ch7",
      "number": "7.111",
      "name_en": "volume changes by a factor of the product of the singular values",
      "name_zh": "体积变化倍数是奇异值的乘积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐑, 𝑇 ∈ ℒ(𝑉) is invertible, and Ω ⊆ 𝑉. Then volume 𝑇(Ω) =(product of singular values of 𝑇)(volume Ω).",
          "zh": "设 F = R，𝑇 ∈ L(𝑉) 可逆，且Ω ⊆ 𝑉．那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "volume 𝑇(Ω) =(𝑇的奇异值的乘积)(volume Ω)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐑, 𝑇 ∈ ℒ(𝑉) is invertible, and Ω ⊆ 𝑉. Then volume 𝑇(Ω) =(product of singular values of 𝑇)(volume Ω).",
      "statement_zh": "设 F = R，𝑇 ∈ L(𝑉) 可逆，且Ω ⊆ 𝑉．那么 volume 𝑇(Ω) =(𝑇的奇异值的乘积)(volume Ω)．"
    },
    {
      "id": "8.1",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.1",
      "name_en": "sequence of increasing null spaces",
      "name_zh": "递增的零空间序列",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Then",
          "zh": "设𝑇 ∈ L(𝑉)．那么"
        },
        {
          "t": "formula",
          "en": "{0} = null 𝑇^0 ⊆ null 𝑇^1 ⊆ ⋯ ⊆ null 𝑇^𝑘 ⊆ null 𝑇^{𝑘+1} ⊆ ⋯.",
          "zh": "{0} = null 𝑇^0 ⊆ null 𝑇^1 ⊆ · · · ⊆ null 𝑇^𝑘 ⊆ null 𝑇^{𝑘+1} ⊆ · · · ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Then {0} = null 𝑇^0 ⊆ null 𝑇^1 ⊆ ⋯ ⊆ null 𝑇^𝑘 ⊆ null 𝑇^{𝑘+1} ⊆ ⋯.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．那么 {0} = null 𝑇^0 ⊆ null 𝑇^1 ⊆ · · · ⊆ null 𝑇^𝑘 ⊆ null 𝑇^{𝑘+1} ⊆ · · · ．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑚 is a nonnegative integer such that",
          "zh": "设𝑇 ∈ L(𝑉)，𝑚是非负整数，满足"
        },
        {
          "t": "formula",
          "en": "null 𝑇^𝑚 = null 𝑇^{𝑚+1}.",
          "zh": "null 𝑇^𝑚 = null 𝑇^{𝑚+1} ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Then",
          "zh": "那么"
        },
        {
          "t": "formula",
          "en": "null 𝑇^𝑚 = null 𝑇^{𝑚+1} = null 𝑇^{𝑚+2} = null 𝑇^{𝑚+3} = ⋯.",
          "zh": "null 𝑇^𝑚 = null 𝑇^{𝑚+1} = null 𝑇^{𝑚+2} = null 𝑇^{𝑚+3} = · · · ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑚 is a nonnegative integer such that null 𝑇^𝑚 = null 𝑇^{𝑚+1}. Then null 𝑇^𝑚 = null 𝑇^{𝑚+1} = null 𝑇^{𝑚+2} = null 𝑇^{𝑚+3} = ⋯.",
      "statement_zh": "设𝑇 ∈ L(𝑉)，𝑚是非负整数，满足 null 𝑇^𝑚 = null 𝑇^{𝑚+1} ． 那么 null 𝑇^𝑚 = null 𝑇^{𝑚+1} = null 𝑇^{𝑚+2} = null 𝑇^{𝑚+3} = · · · ．"
    },
    {
      "id": "8.3",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.3",
      "name_en": "null spaces stop growing",
      "name_zh": "零空间停止增长",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Then",
          "zh": "设𝑇 ∈ L(𝑉)．那么"
        },
        {
          "t": "formula",
          "en": "null 𝑇^{dim𝑉} = null 𝑇^{dim𝑉+1} = null 𝑇^{dim𝑉+2} = ⋯.",
          "zh": "null 𝑇^{dim𝑉} = null 𝑇^{dim𝑉+1} = null 𝑇^{dim𝑉+2} = · · · ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Then null 𝑇^{dim𝑉} = null 𝑇^{dim𝑉+1} = null 𝑇^{dim𝑉+2} = ⋯.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．那么 null 𝑇^{dim𝑉} = null 𝑇^{dim𝑉+1} = null 𝑇^{dim𝑉+2} = · · · ．"
    },
    {
      "id": "8.4",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.4",
      "name_en": "𝑉 is the direct sum of null 𝑇^{dim𝑉} and range 𝑇^{dim𝑉}",
      "name_zh": "𝑉是 null 𝑇^{dim𝑉}与 range 𝑇^{dim𝑉}的直和",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Then",
          "zh": "设𝑇 ∈ L(𝑉)．那么"
        },
        {
          "t": "formula",
          "en": "𝑉 = null 𝑇^{dim𝑉} ⊕ range 𝑇^{dim𝑉}.",
          "zh": "𝑉 = null 𝑇^{dim𝑉} ⊕ range 𝑇^{dim𝑉} ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Then 𝑉 = null 𝑇^{dim𝑉} ⊕ range 𝑇^{dim𝑉}.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．那么 𝑉 = null 𝑇^{dim𝑉} ⊕ range 𝑇^{dim𝑉} ．"
    },
    {
      "id": "8.8",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.8",
      "name_en": "generalized eigenvector",
      "name_zh": "广义特征向量（generalized eigenvector）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 is an eigenvalue of 𝑇. A vector 𝑣 ∈ 𝑉 is called a generalized eigenvector of 𝑇 corresponding to 𝜆 if 𝑣 ≠ 0 and",
          "zh": "设𝑇 ∈ L(𝑉)，𝜆是𝑇的特征值．称向量 𝑣 ∈ 𝑉是𝑇对应于𝜆的广义特征向量，若 𝑣 ≠ 0 且对某个正整数 𝑘有"
        },
        {
          "t": "formula",
          "en": "(𝑇−𝜆𝐼)^𝑘 𝑣 = 0",
          "zh": "(𝑇−𝜆𝐼)^𝑘 𝑣 = 0．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for some positive integer 𝑘.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "非零向量 𝑣 ∈ 𝑉是𝑇对应于 𝜆的广义特 征向量，当且仅当 (𝑇−𝜆𝐼)^{dim𝑉} 𝑣 = 0． 将8.1和8.3应用于算子𝑇−𝜆𝐼即可得出这点． 我们知道，复向量空间上的算子的特征向量可能不足以形成定义空间的基．下面结论说 明，这些算子的广义特征向量总能形成定义空间的基．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 is an eigenvalue of 𝑇. A vector 𝑣 ∈ 𝑉 is called a generalized eigenvector of 𝑇 corresponding to 𝜆 if 𝑣 ≠ 0 and (𝑇−𝜆𝐼)^𝑘 𝑣 = 0 for some positive integer 𝑘.",
      "statement_zh": "设𝑇 ∈ L(𝑉)，𝜆是𝑇的特征值．称向量 𝑣 ∈ 𝑉是𝑇对应于𝜆的广义特征向量，若 𝑣 ≠ 0 且对某个正整数 𝑘有 (𝑇−𝜆𝐼)^𝑘 𝑣 = 0． 非零向量 𝑣 ∈ 𝑉是𝑇对应于 𝜆的广义特 征向量，当且仅当 (𝑇−𝜆𝐼)^{dim𝑉} 𝑣 = 0． 将8.1和8.3应用于算子𝑇−𝜆𝐼即可得出这点． 我们知道，复向量空间上的算子的特征向量可能不足以形成定义空间的基．下面结论说 明，这些算子的广义特征向量总能形成定义空间的基．"
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
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then there is a basis of 𝑉 consisting of generalized eigenvectors of 𝑇.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么存在由𝑇的广义特征向量构成的𝑉的基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then there is a basis of 𝑉 consisting of generalized eigenvectors of 𝑇.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么存在由𝑇的广义特征向量构成的𝑉的基．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Then each generalized eigenvector of 𝑇 corresponds to only one eigenvalue of 𝑇.",
          "zh": "设𝑇 ∈ L(𝑉)．那么𝑇的每个广义特征向量都仅对应于𝑇的一个特征值．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Then each generalized eigenvector of 𝑇 corresponds to only one eigenvalue of 𝑇.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．那么𝑇的每个广义特征向量都仅对应于𝑇的一个特征值．"
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
          "en": "Suppose that 𝑇 ∈ ℒ(𝑉). Then every list of generalized eigenvectors of 𝑇 corresponding to distinct eigenvalues of 𝑇 is linearly independent.",
          "zh": "设𝑇 ∈ L(𝑉)．那么由对应于𝑇的互异特征值的广义特征向量构成的每个向量组都是线 性无关的．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑇 ∈ ℒ(𝑉). Then every list of generalized eigenvectors of 𝑇 corresponding to distinct eigenvalues of 𝑇 is linearly independent.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．那么由对应于𝑇的互异特征值的广义特征向量构成的每个向量组都是线 性无关的．"
    },
    {
      "id": "8.14",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.14",
      "name_en": "nilpotent",
      "name_zh": "幂零（nilpotent）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator is called nilpotent if some power of it equals 0.",
          "zh": "称一个算子是幂零的，如果它的某个幂等于0．"
        }
      ],
      "note": {
        "en": "Thus an operator 𝑇 ∈ ℒ(𝑉) is nilpotent if and only if every nonzero vector in 𝑉 is a generalized eigenvector of 𝑇 corresponding to the eigenvalue 0.",
        "zh": "于是，算子𝑇 ∈ L(𝑉) 是幂零的，若𝑉中每个非零向量都是𝑇对应于特征值0的广义特征 向量．"
      },
      "statement_en": "An operator is called nilpotent if some power of it equals 0. Thus an operator 𝑇 ∈ ℒ(𝑉) is nilpotent if and only if every nonzero vector in 𝑉 is a generalized eigenvector of 𝑇 corresponding to the eigenvalue 0.",
      "statement_zh": "称一个算子是幂零的，如果它的某个幂等于0． 于是，算子𝑇 ∈ L(𝑉) 是幂零的，若𝑉中每个非零向量都是𝑇对应于特征值0的广义特征 向量．"
    },
    {
      "id": "8.16",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.16",
      "name_en": "nilpotent operator raised to dimension of domain is 0",
      "name_zh": "𝑛维空间上幂零算子的𝑛次幂等于0",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is nilpotent. Then 𝑇^{dim𝑉} = 0.",
          "zh": "设𝑇 ∈ L(𝑉) 是幂零的．那么𝑇^{dim𝑉} = 0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is nilpotent. Then 𝑇^{dim𝑉} = 0.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 是幂零的．那么𝑇^{dim𝑉} = 0．"
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
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). (a) If 𝑇 is nilpotent, then 0 is an eigenvalue of 𝑇 and 𝑇 has no other eigenvalues. (b) If 𝐅 = 𝐂 and 0 is the only eigenvalue of 𝑇, then 𝑇 is nilpotent.",
          "zh": "设𝑇 ∈ L(𝑉)． (a) 如果𝑇是幂零的，那么0是𝑇的特征值，并且𝑇没有其他的特征值． (b) 若 F = C，且0是𝑇的唯一特征值，那么𝑇是幂零的．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). (a) If 𝑇 is nilpotent, then 0 is an eigenvalue of 𝑇 and 𝑇 has no other eigenvalues. (b) If 𝐅 = 𝐂 and 0 is the only eigenvalue of 𝑇, then 𝑇 is nilpotent.",
      "statement_zh": "设𝑇 ∈ L(𝑉)． (a) 如果𝑇是幂零的，那么0是𝑇的特征值，并且𝑇没有其他的特征值． (b) 若 F = C，且0是𝑇的唯一特征值，那么𝑇是幂零的．"
    },
    {
      "id": "8.18",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.18",
      "name_en": "minimal polynomial and upper-triangular matrix of nilpotent operator",
      "name_zh": "幂零算子的最小多项式和上三角矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑇 is nilpotent. (b) The minimal polynomial of 𝑇 is 𝑧^𝑚 for some positive integer 𝑚. (c) There is a basis of 𝑉 with respect to which the matrix of 𝑇 has the form",
          "zh": "设𝑇 ∈ L(𝑉)．那么下面各命题等价． (a) 𝑇是幂零的． (b) 𝑇的最小多项式等于 𝑧^𝑚 （𝑚为正整数）． (c) 存在𝑉的一个基，使得𝑇关于该基的矩阵形如"
        },
        {
          "t": "formula",
          "en": "0 ∗ ⎛⎜⎜⎜ ⎞⎟⎟⎟",
          "zh": "0 ∗ ���� ����...",
          "eq": null
        },
        {
          "t": "p",
          "en": "⋱,",
          "zh": "，"
        },
        {
          "t": "formula",
          "en": "⎝ 0 0 ⎠",
          "zh": "� 0 0 �",
          "eq": null
        },
        {
          "t": "p",
          "en": "where all entries on and below the diagonal equal 0.",
          "zh": "其中对角线及对角线下方各元素均等于0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Then the following are equivalent. (a) 𝑇 is nilpotent. (b) The minimal polynomial of 𝑇 is 𝑧^𝑚 for some positive integer 𝑚. (c) There is a basis of 𝑉 with respect to which the matrix of 𝑇 has the form 0 ∗ ⎛⎜⎜⎜ ⎞⎟⎟⎟ ⋱, ⎝ 0 0 ⎠ where all entries on and below the diagonal equal 0.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．那么下面各命题等价． (a) 𝑇是幂零的． (b) 𝑇的最小多项式等于 𝑧^𝑚 （𝑚为正整数）． (c) 存在𝑉的一个基，使得𝑇关于该基的矩阵形如 0 ∗ ���� ����... ， � 0 0 � 其中对角线及对角线下方各元素均等于0．"
    },
    {
      "id": "8.19",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.19",
      "name_en": "generalized eigenspace, 𝐺(𝜆, 𝑇)",
      "name_zh": "广义特征空间（generalized eigenspace）、𝐺(𝜆,𝑇)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅. The generalized eigenspace of 𝑇 corresponding to 𝜆, denoted by 𝐺(𝜆, 𝑇), is defined by 𝐺(𝜆, 𝑇) ={𝑣 ∈ 𝑉 :(𝑇−𝜆𝐼)^𝑘 𝑣 = 0 for some positive integer 𝑘}. Thus 𝐺(𝜆, 𝑇) is the set of generalized eigenvectors of 𝑇 corresponding to 𝜆, along with the 0 vector.",
          "zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F．𝑇对应于𝜆的广义特征空间，记作𝐺(𝜆,𝑇)，定义为"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝐺(𝜆,𝑇) ={𝑣 ∈ 𝑉:(𝑇−𝜆𝐼)^𝑘 𝑣 = 0, 𝑘为某正整数}．",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "于是，𝐺(𝜆,𝑇) 是由𝑇对应于𝜆的广义特征向量以及向量0所构成的集合．"
        }
      ],
      "note": {
        "en": "",
        "zh": "因为𝑇的每个特征向量都是𝑇的广义特征向量（在广义特征向量的定义中取 𝑘 = 1即可）， 所以每个特征空间都包含于相对应的广义特征空间．换言之，若 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F，那么 𝐸(𝜆,𝑇) ⊆ 𝐺(𝜆,𝑇)． 下面结论表明，如果𝑇 ∈ L(𝑉) 且 𝜆 ∈ F，那么广义特征空间 𝐺(𝜆,𝑇) 是𝑉的一个子空间 （因为𝑉上每个线性映射的零空间都是𝑉的子空间）．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅. The generalized eigenspace of 𝑇 corresponding to 𝜆, denoted by 𝐺(𝜆, 𝑇), is defined by 𝐺(𝜆, 𝑇) ={𝑣 ∈ 𝑉 :(𝑇−𝜆𝐼)^𝑘 𝑣 = 0 for some positive integer 𝑘}. Thus 𝐺(𝜆, 𝑇) is the set of generalized eigenvectors of 𝑇 corresponding to 𝜆, along with the 0 vector.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F．𝑇对应于𝜆的广义特征空间，记作𝐺(𝜆,𝑇)，定义为 𝐺(𝜆,𝑇) ={𝑣 ∈ 𝑉:(𝑇−𝜆𝐼)^𝑘 𝑣 = 0, 𝑘为某正整数}． 于是，𝐺(𝜆,𝑇) 是由𝑇对应于𝜆的广义特征向量以及向量0所构成的集合． 因为𝑇的每个特征向量都是𝑇的广义特征向量（在广义特征向量的定义中取 𝑘 = 1即可）， 所以每个特征空间都包含于相对应的广义特征空间．换言之，若 𝑇 ∈ L(𝑉) 且 𝜆 ∈ F，那么 𝐸(𝜆,𝑇) ⊆ 𝐺(𝜆,𝑇)． 下面结论表明，如果𝑇 ∈ L(𝑉) 且 𝜆 ∈ F，那么广义特征空间 𝐺(𝜆,𝑇) 是𝑉的一个子空间 （因为𝑉上每个线性映射的零空间都是𝑉的子空间）．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅. Then 𝐺(𝜆, 𝑇) = null(𝑇−𝜆𝐼)^{dim𝑉}.",
          "zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F．那么𝐺(𝜆,𝑇) = null(𝑇−𝜆𝐼)^{dim𝑉} ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅. Then 𝐺(𝜆, 𝑇) = null(𝑇−𝜆𝐼)^{dim𝑉}.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F．那么𝐺(𝜆,𝑇) = null(𝑇−𝜆𝐼)^{dim𝑉} ．"
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
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 be the distinct eigenvalues of 𝑇. Then (a) 𝐺(𝜆_𝑘, 𝑇) is invariant under 𝑇 for each 𝑘 = 1, …, 𝑚; (b)(𝑇−𝜆_𝑘 𝐼)|_{𝐺(𝜆𝑘,𝑇)} is nilpotent for each 𝑘 = 1, …, 𝑚; (c) 𝑉 = 𝐺(𝜆_1, 𝑇) ⊕ ⋯ ⊕ 𝐺(𝜆_𝑚, 𝑇).",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．令𝜆_1,..., 𝜆_𝑚是𝑇的所有互异特征值．那么 (a) 对每个 𝑘 = 1,..., 𝑚，𝐺(𝜆_𝑘,𝑇) 在𝑇下是不变的； (b) 对每个 𝑘 = 1,..., 𝑚，(𝑇−𝜆_𝑘 𝐼)|_{𝐺(𝜆𝑘,𝑇)}是幂零的； (c) 𝑉 = 𝐺(𝜆_1,𝑇) ⊕ · · · ⊕ 𝐺(𝜆_𝑚,𝑇)．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 be the distinct eigenvalues of 𝑇. Then (a) 𝐺(𝜆_𝑘, 𝑇) is invariant under 𝑇 for each 𝑘 = 1, …, 𝑚; (b)(𝑇−𝜆_𝑘 𝐼)|_{𝐺(𝜆𝑘,𝑇)} is nilpotent for each 𝑘 = 1, …, 𝑚; (c) 𝑉 = 𝐺(𝜆_1, 𝑇) ⊕ ⋯ ⊕ 𝐺(𝜆_𝑚, 𝑇).",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．令𝜆_1,..., 𝜆_𝑚是𝑇的所有互异特征值．那么 (a) 对每个 𝑘 = 1,..., 𝑚，𝐺(𝜆_𝑘,𝑇) 在𝑇下是不变的； (b) 对每个 𝑘 = 1,..., 𝑚，(𝑇−𝜆_𝑘 𝐼)|_{𝐺(𝜆𝑘,𝑇)}是幂零的； (c) 𝑉 = 𝐺(𝜆_1,𝑇) ⊕ · · · ⊕ 𝐺(𝜆_𝑚,𝑇)．"
    },
    {
      "id": "8.23",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.23",
      "name_en": "multiplicity",
      "name_zh": "重数（multiplicity）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). The multiplicity of an eigenvalue 𝜆 of 𝑇 is defined to be the dimension of the corresponding generalized eigenspace 𝐺(𝜆, 𝑇).",
          "zh": "设𝑇 ∈ L(𝑉)．定义𝑇的特征值𝜆的重数为其对应的广义特征空间𝐺(𝜆,𝑇) 的维数． 换言之，𝑇的特征值𝜆的重数等于"
        },
        {
          "t": "bullet",
          "en": "In other words, the multiplicity of an eigenvalue 𝜆 of 𝑇 equals",
          "zh": "dim null(𝑇−𝜆𝐼)^{dim𝑉} ．"
        },
        {
          "t": "formula",
          "en": "dim null(𝑇−𝜆𝐼)^{dim𝑉}.",
          "zh": "",
          "eq": null
        }
      ],
      "note": {
        "en": "The second bullet point above holds because 𝐺(𝜆, 𝑇) = null(𝑇−𝜆𝐼)^{dim𝑉} (see 8.20).",
        "zh": "上述第二点成立是因为𝐺(𝜆,𝑇) = null(𝑇−𝜆𝐼)^{dim𝑉} （见8.20）．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). The multiplicity of an eigenvalue 𝜆 of 𝑇 is defined to be the dimension of the corresponding generalized eigenspace 𝐺(𝜆, 𝑇). In other words, the multiplicity of an eigenvalue 𝜆 of 𝑇 equals dim null(𝑇−𝜆𝐼)^{dim𝑉}. The second bullet point above holds because 𝐺(𝜆, 𝑇) = null(𝑇−𝜆𝐼)^{dim𝑉} (see 8.20).",
      "statement_zh": "设𝑇 ∈ L(𝑉)．定义𝑇的特征值𝜆的重数为其对应的广义特征空间𝐺(𝜆,𝑇) 的维数． 换言之，𝑇的特征值𝜆的重数等于 dim null(𝑇−𝜆𝐼)^{dim𝑉} ． 上述第二点成立是因为𝐺(𝜆,𝑇) = null(𝑇−𝜆𝐼)^{dim𝑉} （见8.20）．"
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
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then the sum of the multiplicities of all eigenvalues of 𝑇 equals dim 𝑉.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么𝑇的所有特征值的重数之和等于 dim 𝑉．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then the sum of the multiplicities of all eigenvalues of 𝑇 equals dim 𝑉.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么𝑇的所有特征值的重数之和等于 dim 𝑉．"
    },
    {
      "id": "8.26",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.26",
      "name_en": "characteristic polynomial",
      "name_zh": "特征多项式（characteristic polynomial）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 denote the distinct eigenvalues of 𝑇, with multiplicities 𝑑_1, …, 𝑑_𝑚. The polynomial",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉)．令 𝜆_1,..., 𝜆_𝑚表示 𝑇的所有互异特征值，且其重数分别为 𝑑_1,..., 𝑑_𝑚 ．称多项式"
        },
        {
          "t": "formula",
          "en": "(𝑧−𝜆_1)^{𝑑1} ⋯(𝑧−𝜆_𝑚)^{𝑑𝑚}",
          "zh": "(𝑧−𝜆_1)^{𝑑1} · · ·(𝑧−𝜆_𝑚)^{𝑑𝑚}",
          "eq": null
        },
        {
          "t": "p",
          "en": "is called the characteristic polynomial of 𝑇.",
          "zh": "为𝑇的特征多项式．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 denote the distinct eigenvalues of 𝑇, with multiplicities 𝑑_1, …, 𝑑_𝑚. The polynomial (𝑧−𝜆_1)^{𝑑1} ⋯(𝑧−𝜆_𝑚)^{𝑑𝑚} is called the characteristic polynomial of 𝑇.",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉)．令 𝜆_1,..., 𝜆_𝑚表示 𝑇的所有互异特征值，且其重数分别为 𝑑_1,..., 𝑑_𝑚 ．称多项式 (𝑧−𝜆_1)^{𝑑1} · · ·(𝑧−𝜆_𝑚)^{𝑑𝑚} 为𝑇的特征多项式．"
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
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then (a) the characteristic polynomial of 𝑇 has degree dim 𝑉; (b) the zeros of the characteristic polynomial of 𝑇 are the eigenvalues of 𝑇.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么 (a) 𝑇的特征多项式的次数是 dim 𝑉； (b) 𝑇的特征多项式的零点就是𝑇的特征值．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then (a) the characteristic polynomial of 𝑇 has degree dim 𝑉; (b) the zeros of the characteristic polynomial of 𝑇 are the eigenvalues of 𝑇.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么 (a) 𝑇的特征多项式的次数是 dim 𝑉； (b) 𝑇的特征多项式的零点就是𝑇的特征值．"
    },
    {
      "id": "8.29",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.29",
      "name_en": "Cayley–Hamilton theorem",
      "name_zh": "凯莱-哈密顿定理（Cayley-Hamilton theorem）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂, 𝑇 ∈ ℒ(𝑉), and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
          "zh": "设 F = C，𝑇 ∈ L(𝑉)，且𝑞是𝑇的特征多项式．那么𝑞(𝑇) = 0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂, 𝑇 ∈ ℒ(𝑉), and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
      "statement_zh": "设 F = C，𝑇 ∈ L(𝑉)，且𝑞是𝑇的特征多项式．那么𝑞(𝑇) = 0．"
    },
    {
      "id": "8.30",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.30",
      "name_en": "characteristic polynomial is a multiple of minimal polynomial",
      "name_zh": "特征多项式是最小多项式的多项式倍",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then the characteristic polynomial of 𝑇 is a polynomial multiple of the minimal polynomial of 𝑇.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么𝑇的特征多项式是𝑇的最小多项式的多项式倍．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then the characteristic polynomial of 𝑇 is a polynomial multiple of the minimal polynomial of 𝑇.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么𝑇的特征多项式是𝑇的最小多项式的多项式倍．"
    },
    {
      "id": "8.31",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.31",
      "name_en": "multiplicity of an eigenvalue equals number of times on diagonal",
      "name_zh": "特征值的重数等于其在对角线上出现的次数 � �",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 such that ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) is upper triangular. Then the number of times that each eigenvalue 𝜆 of 𝑇 appears on the diagonal of ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) equals the multiplicity of 𝜆 as an eigenvalue of 𝑇.",
          "zh": "� �"
        },
        {
          "t": "p",
          "en": "",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．设 𝑣_1,..., 𝑣_𝑛是𝑉的一个基且使得 M 𝑇,(𝑣_1,..., 𝑣_𝑛) 为上三角"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "矩阵．那么𝑇的每个特征值𝜆在 M 𝑇,(𝑣_1,..., 𝑣_𝑛) 对角线上出现的次数，就等于𝜆作 为𝑇的特征值的重数．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Suppose 𝑣_1, …, 𝑣_𝑛 is a basis of 𝑉 such that ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) is upper triangular. Then the number of times that each eigenvalue 𝜆 of 𝑇 appears on the diagonal of ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) equals the multiplicity of 𝜆 as an eigenvalue of 𝑇.",
      "statement_zh": "� � 设 F = C 且𝑇 ∈ L(𝑉)．设 𝑣_1,..., 𝑣_𝑛是𝑉的一个基且使得 M 𝑇,(𝑣_1,..., 𝑣_𝑛) 为上三角 � � 矩阵．那么𝑇的每个特征值𝜆在 M 𝑇,(𝑣_1,..., 𝑣_𝑛) 对角线上出现的次数，就等于𝜆作 为𝑇的特征值的重数．"
    },
    {
      "id": "8.35",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.35",
      "name_en": "block diagonal matrix",
      "name_zh": "分块对角矩阵（block diagonal matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A block diagonal matrix is a square matrix of the form",
          "zh": "一个分块对角矩阵是形如"
        },
        {
          "t": "formula",
          "en": "𝐴_1 0 ⎛⎜⎜⎜ ⎞⎟⎟⎟",
          "zh": "𝐴_1 0 ���� ����...",
          "eq": null
        },
        {
          "t": "p",
          "en": "⋱,",
          "zh": "，"
        },
        {
          "t": "formula",
          "en": "⎝ 0 𝐴_𝑚 ⎠",
          "zh": "� 0 𝐴𝑚 �",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝐴_1, …, 𝐴_𝑚 are square matrices lying along the diagonal and all other entries of the matrix equal 0.",
          "zh": "的方阵，其中 𝐴_1,..., 𝐴_𝑚是排列在对角线上的方阵，且矩阵其他各元素都等于0．"
        }
      ],
      "note": null,
      "statement_en": "A block diagonal matrix is a square matrix of the form 𝐴_1 0 ⎛⎜⎜⎜ ⎞⎟⎟⎟ ⋱, ⎝ 0 𝐴_𝑚 ⎠ where 𝐴_1, …, 𝐴_𝑚 are square matrices lying along the diagonal and all other entries of the matrix equal 0.",
      "statement_zh": "一个分块对角矩阵是形如 𝐴_1 0 ���� ����... ， � 0 𝐴𝑚 � 的方阵，其中 𝐴_1,..., 𝐴_𝑚是排列在对角线上的方阵，且矩阵其他各元素都等于0．"
    },
    {
      "id": "8.37",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.37",
      "name_en": "block diagonal matrix with upper-triangular blocks",
      "name_zh": "由上三角块构成的分块对角矩阵",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 be the distinct eigenvalues of 𝑇, with multiplicities 𝑑_1, …, 𝑑_𝑚. Then there is a basis of 𝑉 with respect to which 𝑇 has a block diagonal matrix of the form",
          "zh": "设 F = C 且 𝑇 ∈ L(𝑉)．令 𝜆_1,..., 𝜆_𝑚是 𝑇的所有互异特征值，它们的重数分别为 𝑑_1,..., 𝑑_𝑚 ．那么存在𝑉的一个基，使得𝑇关于该基具有形如"
        },
        {
          "t": "formula",
          "en": "𝐴_1 0 ⎛⎜⎜⎜ ⎞⎟⎟⎟",
          "zh": "𝐴_1 0 ���� ����... � 0 𝐴𝑚 �",
          "eq": null
        },
        {
          "t": "p",
          "en": "⋱,",
          "zh": "的分块对角矩阵，其中各 𝐴_𝑘是形如"
        },
        {
          "t": "formula",
          "en": "⎝ 0 𝐴_𝑚 ⎠",
          "zh": "𝜆_𝑘 ∗ ���� ����... 𝐴_𝑘 = � 0 𝜆𝑘 �",
          "eq": null
        },
        {
          "t": "p",
          "en": "where each 𝐴_𝑘 is a 𝑑_𝑘 -by-𝑑_𝑘 upper-triangular matrix of the form",
          "zh": "的 𝑑_𝑘 × 𝑑_𝑘上三角矩阵．"
        },
        {
          "t": "formula",
          "en": "𝜆_𝑘 ∗ ⎛⎜ ⎞⎟⎟⎟ 𝐴_𝑘 = ⎜⎜ ⋱. ⎝ 0 𝜆_𝑘 ⎠",
          "zh": "",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 be the distinct eigenvalues of 𝑇, with multiplicities 𝑑_1, …, 𝑑_𝑚. Then there is a basis of 𝑉 with respect to which 𝑇 has a block diagonal matrix of the form 𝐴_1 0 ⎛⎜⎜⎜ ⎞⎟⎟⎟ ⋱, ⎝ 0 𝐴_𝑚 ⎠ where each 𝐴_𝑘 is a 𝑑_𝑘 -by-𝑑_𝑘 upper-triangular matrix of the form 𝜆_𝑘 ∗ ⎛⎜ ⎞⎟⎟⎟ 𝐴_𝑘 = ⎜⎜ ⋱. ⎝ 0 𝜆_𝑘 ⎠",
      "statement_zh": "设 F = C 且 𝑇 ∈ L(𝑉)．令 𝜆_1,..., 𝜆_𝑚是 𝑇的所有互异特征值，它们的重数分别为 𝑑_1,..., 𝑑_𝑚 ．那么存在𝑉的一个基，使得𝑇关于该基具有形如 𝐴_1 0 ���� ����... � 0 𝐴𝑚 � 的分块对角矩阵，其中各 𝐴_𝑘是形如 𝜆_𝑘 ∗ ���� ����... 𝐴_𝑘 = � 0 𝜆𝑘 � 的 𝑑_𝑘 × 𝑑_𝑘上三角矩阵．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is nilpotent. Then 𝐼 + 𝑇 has a square root.",
          "zh": "设𝑇 ∈ L(𝑉) 是幂零的．那么 𝐼 + 𝑇有平方根．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is nilpotent. Then 𝐼 + 𝑇 has a square root.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 是幂零的．那么 𝐼 + 𝑇有平方根．"
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
          "en": "Suppose 𝑉 is a complex vector space and 𝑇 ∈ ℒ(𝑉) is invertible. Then 𝑇 has a square root.",
          "zh": "设𝑉是复向量空间，𝑇 ∈ L(𝑉) 是可逆的．那么𝑇有平方根．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a complex vector space and 𝑇 ∈ ℒ(𝑉) is invertible. Then 𝑇 has a square root.",
      "statement_zh": "设𝑉是复向量空间，𝑇 ∈ L(𝑉) 是可逆的．那么𝑇有平方根．"
    },
    {
      "id": "8.44",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.44",
      "name_en": "Jordan basis",
      "name_zh": "若尔当基（Jordan basis）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). A basis of 𝑉 is called a Jordan basis for 𝑇 if with respect to this basis 𝑇 has a block diagonal matrix",
          "zh": "设𝑇 ∈ L(𝑉)．称𝑉的一个基是若尔当基，如果𝑇关于该基具有分块对角矩阵"
        },
        {
          "t": "formula",
          "en": "𝐴_1 0 ⎛⎜⎜⎜ ⎞⎟⎟⎟",
          "zh": "𝐴_1 0 ���� ����...",
          "eq": null
        },
        {
          "t": "p",
          "en": "⋱",
          "zh": "，"
        },
        {
          "t": "formula",
          "en": "⎝ 0 𝐴_𝑝 ⎠",
          "zh": "� 0 𝐴𝑝 �",
          "eq": null
        },
        {
          "t": "p",
          "en": "in which each 𝐴_𝑘 is an upper-triangular matrix of the form",
          "zh": "其中各 𝐴_𝑘是形如"
        },
        {
          "t": "formula",
          "en": "𝜆_𝑘 1 0 ⎛⎜⎜⎜⎜⎜⎜ ⎞⎟⎟⎟⎟⎟⎟ ⋱ ⋱ 𝐴_𝑘 =. ⋱ 1 ⎝ 0 𝜆_𝑘 ⎠",
          "zh": "𝜆_𝑘 1 0 ������� �������...... 𝐴_𝑘 =...",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "1"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� 0 𝜆𝑘 �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "的上三角矩阵．"
        }
      ],
      "note": {
        "en": "Most of the work in proving that every operator on a finite-dimensional com plex vector space has a Jordan basis occurs in proving the special case below of nilpotent operators. This special case holds on real vector spaces as well as complex vector spaces.",
        "zh": ""
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). A basis of 𝑉 is called a Jordan basis for 𝑇 if with respect to this basis 𝑇 has a block diagonal matrix 𝐴_1 0 ⎛⎜⎜⎜ ⎞⎟⎟⎟ ⋱ ⎝ 0 𝐴_𝑝 ⎠ in which each 𝐴_𝑘 is an upper-triangular matrix of the form 𝜆_𝑘 1 0 ⎛⎜⎜⎜⎜⎜⎜ ⎞⎟⎟⎟⎟⎟⎟ ⋱ ⋱ 𝐴_𝑘 =. ⋱ 1 ⎝ 0 𝜆_𝑘 ⎠ Most of the work in proving that every operator on a finite-dimensional com plex vector space has a Jordan basis occurs in proving the special case below of nilpotent operators. This special case holds on real vector spaces as well as complex vector spaces.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．称𝑉的一个基是若尔当基，如果𝑇关于该基具有分块对角矩阵 𝐴_1 0 ���� ����... ， � 0 𝐴𝑝 � 其中各 𝐴_𝑘是形如 𝜆_𝑘 1 0 ������� �������...... 𝐴_𝑘 =... 1 � 0 𝜆𝑘 � 的上三角矩阵．"
    },
    {
      "id": "8.45",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.45",
      "name_en": "every nilpotent operator has a Jordan basis",
      "name_zh": "每个幂零算子都有若尔当基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) is nilpotent. Then there is a basis of 𝑉 that is a Jordan basis for 𝑇.",
          "zh": "设𝑇 ∈ L(𝑉) 是幂零的．那么𝑉中有一个基是𝑇的若尔当基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) is nilpotent. Then there is a basis of 𝑉 that is a Jordan basis for 𝑇.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 是幂零的．那么𝑉中有一个基是𝑇的若尔当基．"
    },
    {
      "id": "8.46",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.46",
      "name_en": "Jordan form",
      "name_zh": "若尔当型（Jordan form）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then there is a basis of 𝑉 that is a Jordan basis for 𝑇.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么𝑉有一个基是𝑇的若尔当基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then there is a basis of 𝑉 that is a Jordan basis for 𝑇.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么𝑉有一个基是𝑇的若尔当基．"
    },
    {
      "id": "8.47",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.47",
      "name_en": "trace of a matrix",
      "name_zh": "矩阵的迹（trace of a matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is a square matrix with entries in 𝐅. The trace of 𝐴, denoted tr 𝐴, is defined to be the sum of the diagonal entries of 𝐴.",
          "zh": "设 𝐴是各元素均属于 F 的方阵．𝐴的迹，记为 tr 𝐴，定义为 𝐴对角线上各元素之和．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is a square matrix with entries in 𝐅. The trace of 𝐴, denoted tr 𝐴, is defined to be the sum of the diagonal entries of 𝐴.",
      "statement_zh": "设 𝐴是各元素均属于 F 的方阵．𝐴的迹，记为 tr 𝐴，定义为 𝐴对角线上各元素之和．"
    },
    {
      "id": "8.49",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.49",
      "name_en": "trace of 𝐴𝐵 equals trace of 𝐵𝐴",
      "name_zh": "𝐴𝐵的迹等于 𝐵𝐴的迹",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑚 matrix. Then",
          "zh": "设 𝐴是𝑚 × 𝑛矩阵且 𝐵是𝑛 × 𝑚矩阵．那么"
        },
        {
          "t": "formula",
          "en": "tr(𝐴𝐵) = tr(𝐵𝐴).",
          "zh": "tr(𝐴𝐵) = tr(𝐵𝐴)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑚-by-𝑛 matrix and 𝐵 is an 𝑛-by-𝑚 matrix. Then tr(𝐴𝐵) = tr(𝐵𝐴).",
      "statement_zh": "设 𝐴是𝑚 × 𝑛矩阵且 𝐵是𝑛 × 𝑚矩阵．那么 tr(𝐴𝐵) = tr(𝐵𝐴)．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Suppose 𝑢_1, …, 𝑢_𝑛 and 𝑣_1, …, 𝑣_𝑛 are bases of 𝑉. Then",
          "zh": "设𝑇 ∈ L(𝑉)．设𝑢_1,..., 𝑢_𝑛和𝑣_1,..., 𝑣_𝑛是𝑉的基．那么"
        },
        {
          "t": "formula",
          "en": "tr ℳ(𝑇,(𝑢_1, …, 𝑢_𝑛)) = tr ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)).",
          "zh": "� � � � tr M 𝑇,(𝑢_1,..., 𝑢_𝑛) = tr M 𝑇,(𝑣_1,..., 𝑣_𝑛) ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Suppose 𝑢_1, …, 𝑢_𝑛 and 𝑣_1, …, 𝑣_𝑛 are bases of 𝑉. Then tr ℳ(𝑇,(𝑢_1, …, 𝑢_𝑛)) = tr ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)).",
      "statement_zh": "设𝑇 ∈ L(𝑉)．设𝑢_1,..., 𝑢_𝑛和𝑣_1,..., 𝑣_𝑛是𝑉的基．那么 � � � � tr M 𝑇,(𝑢_1,..., 𝑢_𝑛) = tr M 𝑇,(𝑣_1,..., 𝑣_𝑛) ．"
    },
    {
      "id": "8.51",
      "kind": "definition",
      "chapter": "ch8",
      "number": "8.51",
      "name_en": "trace of an operator",
      "name_zh": "算子的迹（trace of an operator）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). The trace of 𝑇, denoted tr 𝑇, is defined by",
          "zh": "设𝑇 ∈ L(𝑉)．𝑇的迹，记作 tr 𝑇，定义为"
        },
        {
          "t": "formula",
          "en": "tr 𝑇 = tr ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛))",
          "zh": "� � tr 𝑇 = tr M 𝑇,(𝑣_1,..., 𝑣_𝑛)",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑣_1, …, 𝑣_𝑛 is any basis of 𝑉.",
          "zh": "其中𝑣_1,..., 𝑣_𝑛是𝑉的任意一个基．"
        }
      ],
      "note": {
        "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 is an eigenvalue of 𝑇. Recall that we defined the multiplicity of 𝜆 to be the dimension of the generalized eigenspace 𝐺(𝜆, 𝑇)(see",
        "zh": "设𝑇 ∈ L(𝑉)且𝜆是𝑇的一个特征值．回忆一下，我们定义𝜆的重数为广义特征空间𝐺(𝜆,𝑇) 的维数（见8.23）；我们证明了该重数等于 dim null(𝑇−𝜆𝐼)^{dim𝑉} （见8.20）；此外，若𝑉是复向 量空间，那么𝑇的所有特征值的重数之和等于 dim 𝑉（见8.25）． 在下面结论中，“各特征值出现次数等于其重数”的特征值之和，意为如果𝜆_1,..., 𝜆_𝑚是 𝑇的所有互异特征值，且重数分别为 𝑑_1,..., 𝑑_𝑚，那么求和式为 𝑑1𝜆1 + · · · + 𝑑𝑚𝜆𝑚． 如果你更喜欢将所有特征值按一组未必互异的数（其中各特征值出现的次数等于其重数）来 处理，那么可将所有特征值记为𝜆_1,..., 𝜆_𝑛 （其中𝑛等于 dim 𝑉），这样求和式可写为 𝜆1 + · · · + 𝜆𝑛．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). The trace of 𝑇, denoted tr 𝑇, is defined by tr 𝑇 = tr ℳ(𝑇,(𝑣_1, …, 𝑣_𝑛)) where 𝑣_1, …, 𝑣_𝑛 is any basis of 𝑉. Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 is an eigenvalue of 𝑇. Recall that we defined the multiplicity of 𝜆 to be the dimension of the generalized eigenspace 𝐺(𝜆, 𝑇)(see",
      "statement_zh": "设𝑇 ∈ L(𝑉)．𝑇的迹，记作 tr 𝑇，定义为 � � tr 𝑇 = tr M 𝑇,(𝑣_1,..., 𝑣_𝑛) 其中𝑣_1,..., 𝑣_𝑛是𝑉的任意一个基． 设𝑇 ∈ L(𝑉)且𝜆是𝑇的一个特征值．回忆一下，我们定义𝜆的重数为广义特征空间𝐺(𝜆,𝑇) 的维数（见8.23）；我们证明了该重数等于 dim null(𝑇−𝜆𝐼)^{dim𝑉} （见8.20）；此外，若𝑉是复向 量空间，那么𝑇的所有特征值的重数之和等于 dim 𝑉（见8.25）． 在下面结论中，“各特征值出现次数等于其重数”的特征值之和，意为如果𝜆_1,..., 𝜆_𝑚是 𝑇的所有互异特征值，且重数分别为 𝑑_1,..., 𝑑_𝑚，那么求和式为 𝑑1𝜆1 + · · · + 𝑑𝑚𝜆𝑚． 如果你更喜欢将所有特征值按一组未必互异的数（其中各特征值出现的次数等于其重数）来 处理，那么可将所有特征值记为𝜆_1,..., 𝜆_𝑛 （其中𝑛等于 dim 𝑉），这样求和式可写为 𝜆1 + · · · + 𝜆𝑛．"
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
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then tr 𝑇 equals the sum of the eigenvalues of 𝑇, with each eigenvalue included as many times as its multiplicity.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么 tr 𝑇等于𝑇的特征值之和，其中各特征值出现次数等于其重 数．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then tr 𝑇 equals the sum of the eigenvalues of 𝑇, with each eigenvalue included as many times as its multiplicity.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么 tr 𝑇等于𝑇的特征值之和，其中各特征值出现次数等于其重 数．"
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
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝑛 = dim 𝑉. Then tr 𝑇 equals the negative of the coefficient of 𝑧^{𝑛−1} in the characteristic polynomial of 𝑇.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．令𝑛 = dim 𝑉．那么 tr 𝑇等于𝑇的特征多项式中 𝑧^{𝑛−1}项的系数的 相反数．"
        }
      ],
      "note": {
        "en": "",
        "zh": "下面结论给出了内积空间上算子的迹的一个很漂亮的公式．"
      },
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝑛 = dim 𝑉. Then tr 𝑇 equals the negative of the coefficient of 𝑧^{𝑛−1} in the characteristic polynomial of 𝑇.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．令𝑛 = dim 𝑉．那么 tr 𝑇等于𝑇的特征多项式中 𝑧^{𝑛−1}项的系数的 相反数． 下面结论给出了内积空间上算子的迹的一个很漂亮的公式．"
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
          "en": "Suppose 𝑉 is an inner product space, 𝑇 ∈ ℒ(𝑉), and 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉. Then",
          "zh": "设𝑉是内积空间，𝑇 ∈ L(𝑉)，𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基．则"
        },
        {
          "t": "formula",
          "en": "tr 𝑇 = ⟨𝑇𝑒_1, 𝑒_1 ⟩ + ⋯ + ⟨𝑇𝑒_𝑛, 𝑒_𝑛 ⟩.",
          "zh": "tr 𝑇 = ⟨𝑇𝑒_1, 𝑒_1 ⟩ + · · · + ⟨𝑇𝑒_𝑛, 𝑒_𝑛 ⟩．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is an inner product space, 𝑇 ∈ ℒ(𝑉), and 𝑒_1, …, 𝑒_𝑛 is an orthonormal basis of 𝑉. Then tr 𝑇 = ⟨𝑇𝑒_1, 𝑒_1 ⟩ + ⋯ + ⟨𝑇𝑒_𝑛, 𝑒_𝑛 ⟩.",
      "statement_zh": "设𝑉是内积空间，𝑇 ∈ L(𝑉)，𝑒_1,..., 𝑒_𝑛是𝑉的规范正交基．则 tr 𝑇 = ⟨𝑇𝑒_1, 𝑒_1 ⟩ + · · · + ⟨𝑇𝑒_𝑛, 𝑒_𝑛 ⟩．"
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
          "en": "The function tr : ℒ(𝑉) → 𝐅 is a linear functional on ℒ(𝑉) such that",
          "zh": "函数 tr: L(𝑉) → F 是 L(𝑉) 上的线性泛函，且使"
        },
        {
          "t": "formula",
          "en": "tr(𝑆𝑇) = tr(𝑇𝑆)",
          "zh": "tr(𝑆𝑇) = tr(𝑇𝑆)",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑆, 𝑇 ∈ ℒ(𝑉).",
          "zh": "对所有 𝑆,𝑇 ∈ L(𝑉) 都成立．"
        }
      ],
      "note": null,
      "statement_en": "The function tr : ℒ(𝑉) → 𝐅 is a linear functional on ℒ(𝑉) such that tr(𝑆𝑇) = tr(𝑇𝑆) for all 𝑆, 𝑇 ∈ ℒ(𝑉).",
      "statement_zh": "函数 tr: L(𝑉) → F 是 L(𝑉) 上的线性泛函，且使 tr(𝑆𝑇) = tr(𝑇𝑆) 对所有 𝑆,𝑇 ∈ L(𝑉) 都成立．"
    },
    {
      "id": "8.57",
      "kind": "result",
      "chapter": "ch8",
      "number": "8.57",
      "name_en": "identity operator is not the difference of 𝑆𝑇 and 𝑇𝑆",
      "name_zh": "恒等算子不等于 𝑆𝑇与𝑇𝑆之差",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "There do not exist operators 𝑆, 𝑇 ∈ ℒ(𝑉) such that 𝑆𝑇−𝑇𝑆 = 𝐼.",
          "zh": "不存在使得 𝑆𝑇−𝑇𝑆 = 𝐼成立的算子 𝑆,𝑇 ∈ L(𝑉)．"
        }
      ],
      "note": null,
      "statement_en": "There do not exist operators 𝑆, 𝑇 ∈ ℒ(𝑉) such that 𝑆𝑇−𝑇𝑆 = 𝐼.",
      "statement_zh": "不存在使得 𝑆𝑇−𝑇𝑆 = 𝐼成立的算子 𝑆,𝑇 ∈ L(𝑉)．"
    },
    {
      "id": "9.1",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.1",
      "name_en": "bilinear form",
      "name_zh": "双线性型（bilinear form）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear form on 𝑉 is a function 𝛽: 𝑉 × 𝑉 → 𝐅 such that",
          "zh": "𝑉上的一个双线性型是一个函数 𝛽: 𝑉 × 𝑉 → F，该函数满足，对于所有𝑢 ∈ 𝑉，"
        },
        {
          "t": "formula",
          "en": "𝑣 ↦ 𝛽(𝑣, 𝑢) and 𝑣 ↦ 𝛽(𝑢, 𝑣)",
          "zh": "𝑣 ↦→ 𝛽(𝑣, 𝑢) 与 𝑣 ↦→ 𝛽(𝑢, 𝑣)",
          "eq": null
        },
        {
          "t": "p",
          "en": "are both linear functionals on 𝑉 for every 𝑢 ∈ 𝑉.",
          "zh": "都是𝑉上的线性泛函．"
        }
      ],
      "note": null,
      "statement_en": "A bilinear form on 𝑉 is a function 𝛽: 𝑉 × 𝑉 → 𝐅 such that 𝑣 ↦ 𝛽(𝑣, 𝑢) and 𝑣 ↦ 𝛽(𝑢, 𝑣) are both linear functionals on 𝑉 for every 𝑢 ∈ 𝑉.",
      "statement_zh": "𝑉上的一个双线性型是一个函数 𝛽: 𝑉 × 𝑉 → F，该函数满足，对于所有𝑢 ∈ 𝑉， 𝑣 ↦→ 𝛽(𝑣, 𝑢) 与 𝑣 ↦→ 𝛽(𝑢, 𝑣) 都是𝑉上的线性泛函．"
    },
    {
      "id": "9.3",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.3",
      "name_en": "𝑉^{(2)}",
      "name_zh": "𝑉^{(2)}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The set of bilinear forms on 𝑉 is denoted by 𝑉^{(2)}.",
          "zh": "𝑉上的双线性型构成的集合记为𝑉^{(2)} ．"
        }
      ],
      "note": null,
      "statement_en": "The set of bilinear forms on 𝑉 is denoted by 𝑉^{(2)}.",
      "statement_zh": "𝑉上的双线性型构成的集合记为𝑉^{(2)} ．"
    },
    {
      "id": "9.4",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.4",
      "name_en": "matrix of a bilinear form, ℳ(𝛽)",
      "name_zh": "双线性型的矩阵（matrix of a bilinear form）、M(𝛽)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝛽 is a bilinear form on 𝑉 and 𝑒_1, …, 𝑒_𝑛 is a basis of 𝑉. The matrix of 𝛽 with respect to this basis is the 𝑛-by-𝑛 matrix ℳ(𝛽) whose entry ℳ(𝛽)_{𝑗,𝑘} in row 𝑗, column 𝑘 is given by",
          "zh": "设 𝛽是𝑉上的双线性型，𝑒_1,..., 𝑒_𝑛是𝑉的基．𝛽关于该基的矩阵是 𝑛 × 𝑛矩阵 M(𝛽)， 其中第 𝑗行第 𝑘列中的元素 M(𝛽)𝑗,𝑘由下式给出："
        },
        {
          "t": "formula",
          "en": "ℳ(𝛽)_{𝑗,𝑘} = 𝛽(𝑒_𝑗, 𝑒_𝑘).",
          "zh": "M(𝛽)𝑗,𝑘 = 𝛽(𝑒_𝑗, 𝑒_𝑘)． � �",
          "eq": null
        },
        {
          "t": "p",
          "en": "If the basis 𝑒_1, …, 𝑒_𝑛 is not clear from the context, then the notation ℳ(𝛽,(𝑒_1, …, 𝑒_𝑛)) is used.",
          "zh": "如果从上下文不能明确基𝑒_1,..., 𝑒_𝑛的选取，就用 M 𝛽,(𝑒_1,..., 𝑒_𝑛) 这个记号．"
        }
      ],
      "note": {
        "en": "",
        "zh": "回忆一下，F^{𝑛,𝑛}代表由元素属于 F 的 𝑛 × 𝑛矩阵构成的向量空间，且有 dim F^{𝑛,𝑛} = 𝑛^2 （见 3.39和3.40）．"
      },
      "statement_en": "Suppose 𝛽 is a bilinear form on 𝑉 and 𝑒_1, …, 𝑒_𝑛 is a basis of 𝑉. The matrix of 𝛽 with respect to this basis is the 𝑛-by-𝑛 matrix ℳ(𝛽) whose entry ℳ(𝛽)_{𝑗,𝑘} in row 𝑗, column 𝑘 is given by ℳ(𝛽)_{𝑗,𝑘} = 𝛽(𝑒_𝑗, 𝑒_𝑘). If the basis 𝑒_1, …, 𝑒_𝑛 is not clear from the context, then the notation ℳ(𝛽,(𝑒_1, …, 𝑒_𝑛)) is used.",
      "statement_zh": "设 𝛽是𝑉上的双线性型，𝑒_1,..., 𝑒_𝑛是𝑉的基．𝛽关于该基的矩阵是 𝑛 × 𝑛矩阵 M(𝛽)， 其中第 𝑗行第 𝑘列中的元素 M(𝛽)𝑗,𝑘由下式给出： M(𝛽)𝑗,𝑘 = 𝛽(𝑒_𝑗, 𝑒_𝑘)． � � 如果从上下文不能明确基𝑒_1,..., 𝑒_𝑛的选取，就用 M 𝛽,(𝑒_1,..., 𝑒_𝑛) 这个记号． 回忆一下，F^{𝑛,𝑛}代表由元素属于 F 的 𝑛 × 𝑛矩阵构成的向量空间，且有 dim F^{𝑛,𝑛} = 𝑛^2 （见 3.39和3.40）．"
    },
    {
      "id": "9.5",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.5",
      "name_en": "dim 𝑉^{(2)} =(dim 𝑉)^2",
      "name_zh": "dim 𝑉^{(2)} =(dim 𝑉)^2",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑒_1, …, 𝑒_𝑛 is a basis of 𝑉. Then the map 𝛽 ↦ ℳ(𝛽) is an isomorphism of 𝑉^{(2)} onto 𝐅^{𝑛,𝑛}. Furthermore, dim 𝑉^{(2)} =(dim 𝑉)^2.",
          "zh": "设𝑒_1,..., 𝑒_𝑛是𝑉的基．那么映射𝛽 ↦→ M(𝛽)是将𝑉^{(2)}映成 F^{𝑛,𝑛}的同构．此外，dim 𝑉^{(2)} = (dim 𝑉)^2 ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑒_1, …, 𝑒_𝑛 is a basis of 𝑉. Then the map 𝛽 ↦ ℳ(𝛽) is an isomorphism of 𝑉^{(2)} onto 𝐅^{𝑛,𝑛}. Furthermore, dim 𝑉^{(2)} =(dim 𝑉)^2.",
      "statement_zh": "设𝑒_1,..., 𝑒_𝑛是𝑉的基．那么映射𝛽 ↦→ M(𝛽)是将𝑉^{(2)}映成 F^{𝑛,𝑛}的同构．此外，dim 𝑉^{(2)} = (dim 𝑉)^2 ．"
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
          "en": "Suppose 𝛽 is a bilinear form on 𝑉 and 𝑇 ∈ ℒ(𝑉). Define bilinear forms 𝛼 and 𝜌 on 𝑉 by",
          "zh": "设 𝛽是𝑉上的双线性型，𝑇 ∈ L(𝑉)．定义𝑉上的双线性型𝛼和 𝜌为"
        },
        {
          "t": "formula",
          "en": "𝛼(𝑢, 𝑣) = 𝛽(𝑢, 𝑇𝑣) and 𝜌(𝑢, 𝑣) = 𝛽(𝑇𝑢, 𝑣).",
          "zh": "𝛼(𝑢, 𝑣) = 𝛽(𝑢,𝑇𝑣) 与 𝜌(𝑢, 𝑣) = 𝛽(𝑇𝑢, 𝑣)．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Let 𝑒_1, …, 𝑒_𝑛 be a basis of 𝑉. Then",
          "zh": "令𝑒_1,..., 𝑒_𝑛是𝑉的基．那么"
        },
        {
          "t": "formula",
          "en": "ℳ(𝛼) = ℳ(𝛽)ℳ(𝑇) and ℳ(𝜌) = ℳ(𝑇)^t ℳ(𝛽).",
          "zh": "M(𝛼) = M(𝛽)M(𝑇) 且 M(𝜌) = M(𝑇)^t M(𝛽)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝛽 is a bilinear form on 𝑉 and 𝑇 ∈ ℒ(𝑉). Define bilinear forms 𝛼 and 𝜌 on 𝑉 by 𝛼(𝑢, 𝑣) = 𝛽(𝑢, 𝑇𝑣) and 𝜌(𝑢, 𝑣) = 𝛽(𝑇𝑢, 𝑣). Let 𝑒_1, …, 𝑒_𝑛 be a basis of 𝑉. Then ℳ(𝛼) = ℳ(𝛽)ℳ(𝑇) and ℳ(𝜌) = ℳ(𝑇)^t ℳ(𝛽).",
      "statement_zh": "设 𝛽是𝑉上的双线性型，𝑇 ∈ L(𝑉)．定义𝑉上的双线性型𝛼和 𝜌为 𝛼(𝑢, 𝑣) = 𝛽(𝑢,𝑇𝑣) 与 𝜌(𝑢, 𝑣) = 𝛽(𝑇𝑢, 𝑣)． 令𝑒_1,..., 𝑒_𝑛是𝑉的基．那么 M(𝛼) = M(𝛽)M(𝑇) 且 M(𝜌) = M(𝑇)^t M(𝛽)．"
    },
    {
      "id": "9.7",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.7",
      "name_en": "change-of-basis formula",
      "name_zh": "换基公式（change-of-basis formula）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝛽 ∈ 𝑉^{(2)}. Suppose 𝑒_1, …, 𝑒_𝑛 and 𝑓_1, …, 𝑓_𝑛 are bases of 𝑉. Let",
          "zh": "设 𝛽 ∈ 𝑉^{(2)} ．设𝑒_1,..., 𝑒_𝑛和 𝑓_1,..., 𝑓_𝑛是𝑉的基．令"
        },
        {
          "t": "formula",
          "en": "𝐴 = ℳ(𝛽,(𝑒_1, …, 𝑒_𝑛)) and 𝐵 = ℳ(𝛽,(𝑓_1, …, 𝑓_𝑛))",
          "zh": "� � � � 𝐴 = M 𝛽,(𝑒_1,..., 𝑒_𝑛) 且 𝐵 = M 𝛽,(𝑓_1,..., 𝑓_𝑛) � �",
          "eq": null
        },
        {
          "t": "p",
          "en": "and 𝐶 = ℳ(𝐼,(𝑒_1, …, 𝑒_𝑛),(𝑓_1, …, 𝑓_𝑛)). Then",
          "zh": "以及𝐶 = M 𝐼,(𝑒_1,..., 𝑒_𝑛),(𝑓_1,..., 𝑓_𝑛) ．那么"
        },
        {
          "t": "formula",
          "en": "𝐴 = 𝐶^t 𝐵𝐶.",
          "zh": "𝐴 = 𝐶^t 𝐵𝐶．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝛽 ∈ 𝑉^{(2)}. Suppose 𝑒_1, …, 𝑒_𝑛 and 𝑓_1, …, 𝑓_𝑛 are bases of 𝑉. Let 𝐴 = ℳ(𝛽,(𝑒_1, …, 𝑒_𝑛)) and 𝐵 = ℳ(𝛽,(𝑓_1, …, 𝑓_𝑛)) and 𝐶 = ℳ(𝐼,(𝑒_1, …, 𝑒_𝑛),(𝑓_1, …, 𝑓_𝑛)). Then 𝐴 = 𝐶^t 𝐵𝐶.",
      "statement_zh": "设 𝛽 ∈ 𝑉^{(2)} ．设𝑒_1,..., 𝑒_𝑛和 𝑓_1,..., 𝑓_𝑛是𝑉的基．令 � � � � 𝐴 = M 𝛽,(𝑒_1,..., 𝑒_𝑛) 且 𝐵 = M 𝛽,(𝑓_1,..., 𝑓_𝑛) � � 以及𝐶 = M 𝐼,(𝑒_1,..., 𝑒_𝑛),(𝑓_1,..., 𝑓_𝑛) ．那么 𝐴 = 𝐶^t 𝐵𝐶．"
    },
    {
      "id": "9.9",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.9",
      "name_en": "symmetric bilinear form, 𝑉^{(2)}_{sym}",
      "name_zh": "对称双线性型（symmetric bilinear form）、𝑉^{(2)}_{sym}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear form 𝜌 ∈ 𝑉^{(2)} is called symmetric if",
          "zh": "称双线性型 𝜌 ∈ 𝑉^{(2)}是对称的，若"
        },
        {
          "t": "formula",
          "en": "𝜌(𝑢, 𝑤) = 𝜌(𝑤, 𝑢)",
          "zh": "𝜌(𝑢, 𝑤) = 𝜌(𝑤, 𝑢)",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑢, 𝑤 ∈ 𝑉. The set of symmetric bilinear forms on 𝑉 is denoted by 𝑉^{(2)}_{sym}.",
          "zh": "对所有𝑢, 𝑤 ∈ 𝑉都成立． 𝑉上对称双线性型构成的集合记作𝑉^{(2)}_{sym} ．"
        }
      ],
      "note": null,
      "statement_en": "A bilinear form 𝜌 ∈ 𝑉^{(2)} is called symmetric if 𝜌(𝑢, 𝑤) = 𝜌(𝑤, 𝑢) for all 𝑢, 𝑤 ∈ 𝑉. The set of symmetric bilinear forms on 𝑉 is denoted by 𝑉^{(2)}_{sym}.",
      "statement_zh": "称双线性型 𝜌 ∈ 𝑉^{(2)}是对称的，若 𝜌(𝑢, 𝑤) = 𝜌(𝑤, 𝑢) 对所有𝑢, 𝑤 ∈ 𝑉都成立． 𝑉上对称双线性型构成的集合记作𝑉^{(2)}_{sym} ．"
    },
    {
      "id": "9.11",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.11",
      "name_en": "symmetric matrix",
      "name_zh": "对称矩阵（symmetric matrix）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A square matrix 𝐴 is called symmetric if it equals its transpose.",
          "zh": "若方阵 𝐴与其转置相等，则称 𝐴是对称的．"
        }
      ],
      "note": {
        "en": "An operator on 𝑉 may have a symmetric matrix with respect to some but not all bases of 𝑉. In contrast, the next result shows that a bilinear form on 𝑉 has a sym metric matrix with respect to either all bases of 𝑉 or with respect to no bases of 𝑉",
        "zh": "𝑉上的算子可能关于𝑉的某些基（但不是所有基）具有对称矩阵．相比之下，下面结论表 明，𝑉上的双线性型要么关于𝑉的所有基都具有对称矩阵，要么关于𝑉的所有基都不具有对 称矩阵．"
      },
      "statement_en": "A square matrix 𝐴 is called symmetric if it equals its transpose. An operator on 𝑉 may have a symmetric matrix with respect to some but not all bases of 𝑉. In contrast, the next result shows that a bilinear form on 𝑉 has a sym metric matrix with respect to either all bases of 𝑉 or with respect to no bases of 𝑉",
      "statement_zh": "若方阵 𝐴与其转置相等，则称 𝐴是对称的． 𝑉上的算子可能关于𝑉的某些基（但不是所有基）具有对称矩阵．相比之下，下面结论表 明，𝑉上的双线性型要么关于𝑉的所有基都具有对称矩阵，要么关于𝑉的所有基都不具有对 称矩阵．"
    },
    {
      "id": "9.12",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.12",
      "name_en": "symmetric bilinear forms are diagonalizable",
      "name_zh": "对称双线性型是可对角化的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝜌 ∈ 𝑉^{(2)}. Then the following are equivalent. (a) 𝜌 is a symmetric bilinear form on 𝑉. (b) ℳ(𝜌,(𝑒_1, …, 𝑒_𝑛)) is a symmetric matrix for every basis 𝑒_1, …, 𝑒_𝑛 of 𝑉. (c) ℳ(𝜌,(𝑒_1, …, 𝑒_𝑛)) is a symmetric matrix for some basis 𝑒_1, …, 𝑒_𝑛 of 𝑉. (d) ℳ(𝜌,(𝑒_1, …, 𝑒_𝑛)) is a diagonal matrix for some basis 𝑒_1, …, 𝑒_𝑛 of 𝑉.",
          "zh": "设 𝜌 ∈ 𝑉^{(2)} ．那么下面各命题等价． (a) 𝜌是𝑉上的对称双线性型．"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "(b) M 𝜌,(𝑒_1,..., 𝑒_𝑛) 对𝑉的每个基𝑒_1,..., 𝑒_𝑛都是对称矩阵．"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "(c) M 𝜌,(𝑒_1,..., 𝑒_𝑛) 对𝑉的某个基𝑒_1,..., 𝑒_𝑛是对称矩阵．"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "(d) M 𝜌,(𝑒_1,..., 𝑒_𝑛) 对𝑉的某个基𝑒_1,..., 𝑒_𝑛是对角矩阵．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝜌 ∈ 𝑉^{(2)}. Then the following are equivalent. (a) 𝜌 is a symmetric bilinear form on 𝑉. (b) ℳ(𝜌,(𝑒_1, …, 𝑒_𝑛)) is a symmetric matrix for every basis 𝑒_1, …, 𝑒_𝑛 of 𝑉. (c) ℳ(𝜌,(𝑒_1, …, 𝑒_𝑛)) is a symmetric matrix for some basis 𝑒_1, …, 𝑒_𝑛 of 𝑉. (d) ℳ(𝜌,(𝑒_1, …, 𝑒_𝑛)) is a diagonal matrix for some basis 𝑒_1, …, 𝑒_𝑛 of 𝑉.",
      "statement_zh": "设 𝜌 ∈ 𝑉^{(2)} ．那么下面各命题等价． (a) 𝜌是𝑉上的对称双线性型． � � (b) M 𝜌,(𝑒_1,..., 𝑒_𝑛) 对𝑉的每个基𝑒_1,..., 𝑒_𝑛都是对称矩阵． � � (c) M 𝜌,(𝑒_1,..., 𝑒_𝑛) 对𝑉的某个基𝑒_1,..., 𝑒_𝑛是对称矩阵． � � (d) M 𝜌,(𝑒_1,..., 𝑒_𝑛) 对𝑉的某个基𝑒_1,..., 𝑒_𝑛是对角矩阵．"
    },
    {
      "id": "9.13",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.13",
      "name_en": "diagonalization of a symmetric bilinear form by an orthonormal basis",
      "name_zh": "用规范正交基将对称双线性型对角化",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is a real inner product space and 𝜌 is a symmetric bilinear form on 𝑉. Then 𝜌 has a diagonal matrix with respect to some orthonormal basis of 𝑉.",
          "zh": "设𝑉是实内积空间且 𝜌是𝑉上的对称双线性型．那么 𝜌关于𝑉的某个规范正交基有对 角矩阵．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is a real inner product space and 𝜌 is a symmetric bilinear form on 𝑉. Then 𝜌 has a diagonal matrix with respect to some orthonormal basis of 𝑉.",
      "statement_zh": "设𝑉是实内积空间且 𝜌是𝑉上的对称双线性型．那么 𝜌关于𝑉的某个规范正交基有对 角矩阵．"
    },
    {
      "id": "9.14",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.14",
      "name_en": "alternating bilinear form, 𝑉^{(2)}_{alt}",
      "name_zh": "交错双线性型（alternating bilinear form）、𝑉^{(2)}_{alt}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear form 𝛼 ∈ 𝑉^{(2)} is called alternating if",
          "zh": "称双线性型𝛼 ∈ 𝑉^{(2)}是交错的，若对于所有𝑣 ∈ 𝑉有"
        },
        {
          "t": "formula",
          "en": "𝛼(𝑣, 𝑣) = 0",
          "zh": "𝛼(𝑣, 𝑣) = 0．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑣 ∈ 𝑉. The set of alternating bilinear forms on 𝑉 is denoted by 𝑉^{(2)}_{alt}.",
          "zh": "𝑉上交错双线性型所构成的集合记为𝑉^{(2)}_{alt} ．"
        }
      ],
      "note": null,
      "statement_en": "A bilinear form 𝛼 ∈ 𝑉^{(2)} is called alternating if 𝛼(𝑣, 𝑣) = 0 for all 𝑣 ∈ 𝑉. The set of alternating bilinear forms on 𝑉 is denoted by 𝑉^{(2)}_{alt}.",
      "statement_zh": "称双线性型𝛼 ∈ 𝑉^{(2)}是交错的，若对于所有𝑣 ∈ 𝑉有 𝛼(𝑣, 𝑣) = 0． 𝑉上交错双线性型所构成的集合记为𝑉^{(2)}_{alt} ．"
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
          "en": "A bilinear form 𝛼 on 𝑉 is alternating if and only if",
          "zh": "𝑉上的双线性型𝛼是交错的，当且仅当"
        },
        {
          "t": "formula",
          "en": "𝛼(𝑢, 𝑤) =−𝛼(𝑤, 𝑢)",
          "zh": "𝛼(𝑢, 𝑤) =−𝛼(𝑤, 𝑢)",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑢, 𝑤 ∈ 𝑉.",
          "zh": "对所有𝑢, 𝑤 ∈ 𝑉都成立．"
        }
      ],
      "note": null,
      "statement_en": "A bilinear form 𝛼 on 𝑉 is alternating if and only if 𝛼(𝑢, 𝑤) =−𝛼(𝑤, 𝑢) for all 𝑢, 𝑤 ∈ 𝑉.",
      "statement_zh": "𝑉上的双线性型𝛼是交错的，当且仅当 𝛼(𝑢, 𝑤) =−𝛼(𝑤, 𝑢) 对所有𝑢, 𝑤 ∈ 𝑉都成立．"
    },
    {
      "id": "9.17",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.17",
      "name_en": "𝑉^{(2)} = 𝑉^{(2)}_{sym} ⊕ 𝑉^{(2)}_{alt}",
      "name_zh": "𝑉^{(2)} = 𝑉^{(2)}_{sym} ⊕ 𝑉^{(2)}_{alt}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The sets 𝑉^{(2)}_{sym} and 𝑉^{(2)}_{alt} are subspaces of 𝑉^{(2)}. Furthermore,",
          "zh": "集合𝑉^{(2)}_{sym}和𝑉^{(2)}_{alt}都是𝑉^{(2)}的子空间，且有"
        },
        {
          "t": "formula",
          "en": "𝑉^{(2)} = 𝑉^{(2)}_{sym} ⊕ 𝑉^{(2)}_{alt}.",
          "zh": "𝑉^{(2)} = 𝑉^{(2)}_{sym} ⊕ 𝑉^{(2)}_{alt} ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "The sets 𝑉^{(2)}_{sym} and 𝑉^{(2)}_{alt} are subspaces of 𝑉^{(2)}. Furthermore, 𝑉^{(2)} = 𝑉^{(2)}_{sym} ⊕ 𝑉^{(2)}_{alt}.",
      "statement_zh": "集合𝑉^{(2)}_{sym}和𝑉^{(2)}_{alt}都是𝑉^{(2)}的子空间，且有 𝑉^{(2)} = 𝑉^{(2)}_{sym} ⊕ 𝑉^{(2)}_{alt} ．"
    },
    {
      "id": "9.18",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.18",
      "name_en": "quadratic form associated with a bilinear form, 𝑞_𝛽",
      "name_zh": "quadratic form associated with a bilinear form, 𝑞_𝛽",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝛽 a bilinear form on 𝑉, define a function 𝑞_𝛽 : 𝑉 → 𝐅 by 𝑞_𝛽(𝑣) = 𝛽(𝑣, 𝑣). A function 𝑞: 𝑉 → 𝐅 is called a quadratic form on 𝑉 if there exists a bilinear form 𝛽 on 𝑉 such that 𝑞 = 𝑞_𝛽.",
          "zh": ""
        }
      ],
      "note": {
        "en": "Note that if 𝛽 is a bilinear form, then 𝑞_𝛽 = 0 if and only if 𝛽 is alternating.",
        "zh": ""
      },
      "statement_en": "For 𝛽 a bilinear form on 𝑉, define a function 𝑞_𝛽 : 𝑉 → 𝐅 by 𝑞_𝛽(𝑣) = 𝛽(𝑣, 𝑣). A function 𝑞: 𝑉 → 𝐅 is called a quadratic form on 𝑉 if there exists a bilinear form 𝛽 on 𝑉 such that 𝑞 = 𝑞_𝛽. Note that if 𝛽 is a bilinear form, then 𝑞_𝛽 = 0 if and only if 𝛽 is alternating.",
      "statement_zh": ""
    },
    {
      "id": "9.20",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.20",
      "name_en": "quadratic forms on 𝐅^𝑛",
      "name_zh": "F^𝑛上的二次型",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑛 is a positive integer and 𝑞 is a function from 𝐅^𝑛 to 𝐅. Then 𝑞 is a quadratic form on 𝐅^𝑛 if and only if there exist numbers 𝐴_{𝑗,𝑘} ∈ 𝐅 for 𝑗, 𝑘 ∈{1, …, 𝑛} such that_{𝑛𝑛}",
          "zh": "设𝑛是正整数，𝑞是 F^𝑛到 F 的函数．那么𝑞是 F^𝑛上的二次型，当且仅当存在数 𝐴_{𝑗,𝑘} ∈ F （𝑗, 𝑘 ∈{1,..., 𝑛}）使得"
        },
        {
          "t": "formula",
          "en": "𝑞(𝑥_1, …, 𝑥_𝑛) =_𝑘 ∑_{=1𝑗} ∑_{=1} 𝐴_{𝑗,𝑘} 𝑥_𝑗 𝑥_𝑘",
          "zh": "∑^𝑛∑^𝑛 𝑞(𝑥_1,..., 𝑥_𝑛) =_{𝑘=1𝑗=1} 𝐴_{𝑗,𝑘} 𝑥_𝑗 𝑥_𝑘",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all(𝑥_1, …, 𝑥_𝑛) ∈ 𝐅^𝑛.",
          "zh": "对所有(𝑥_1,..., 𝑥_𝑛) ∈ F^𝑛成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑛 is a positive integer and 𝑞 is a function from 𝐅^𝑛 to 𝐅. Then 𝑞 is a quadratic form on 𝐅^𝑛 if and only if there exist numbers 𝐴_{𝑗,𝑘} ∈ 𝐅 for 𝑗, 𝑘 ∈{1, …, 𝑛} such that_{𝑛𝑛} 𝑞(𝑥_1, …, 𝑥_𝑛) =_𝑘 ∑_{=1𝑗} ∑_{=1} 𝐴_{𝑗,𝑘} 𝑥_𝑗 𝑥_𝑘 for all(𝑥_1, …, 𝑥_𝑛) ∈ 𝐅^𝑛.",
      "statement_zh": "设𝑛是正整数，𝑞是 F^𝑛到 F 的函数．那么𝑞是 F^𝑛上的二次型，当且仅当存在数 𝐴_{𝑗,𝑘} ∈ F （𝑗, 𝑘 ∈{1,..., 𝑛}）使得 ∑^𝑛∑^𝑛 𝑞(𝑥_1,..., 𝑥_𝑛) =_{𝑘=1𝑗=1} 𝐴_{𝑗,𝑘} 𝑥_𝑗 𝑥_𝑘 对所有(𝑥_1,..., 𝑥_𝑛) ∈ F^𝑛成立．"
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
          "en": "Suppose 𝑞: 𝑉 → 𝐅 is a function. The following are equivalent. (a) 𝑞 is a quadratic form. (b) There exists a unique symmetric bilinear form 𝜌 on 𝑉 such that 𝑞 = 𝑞_𝜌. (c) 𝑞(𝜆𝑣) = 𝜆^2 𝑞(𝑣) for all 𝜆 ∈ 𝐅 and all 𝑣 ∈ 𝑉, and the function",
          "zh": "设𝑞: 𝑉 → F 是一个函数．下面各命题等价． (a) 𝑞是一个二次型． (b) 𝑉上存在唯一的对称双线性型 𝜌使得𝑞 = 𝑞_𝜌成立． (c) 𝑞(𝜆𝑣) = 𝜆^2 𝑞(𝑣) 对所有𝜆 ∈ F 和𝑣 ∈ 𝑉成立，并且函数"
        },
        {
          "t": "formula",
          "en": "(𝑢, 𝑤) ↦ 𝑞(𝑢 + 𝑤)−𝑞(𝑢)−𝑞(𝑤)",
          "zh": "(𝑢, 𝑤) ↦→ 𝑞(𝑢 + 𝑤)−𝑞(𝑢)−𝑞(𝑤)",
          "eq": null
        },
        {
          "t": "p",
          "en": "is a symmetric bilinear form on 𝑉. (d) 𝑞(2𝑣) = 4𝑞(𝑣) for all 𝑣 ∈ 𝑉, and the function",
          "zh": "是𝑉上的对称双线性型． (d) 𝑞(2𝑣) = 4𝑞(𝑣) 对所有𝑣 ∈ 𝑉成立，并且函数"
        },
        {
          "t": "formula",
          "en": "(𝑢, 𝑤) ↦ 𝑞(𝑢 + 𝑤)−𝑞(𝑢)−𝑞(𝑤)",
          "zh": "(𝑢, 𝑤) ↦→ 𝑞(𝑢 + 𝑤)−𝑞(𝑢)−𝑞(𝑤)",
          "eq": null
        },
        {
          "t": "p",
          "en": "is a symmetric bilinear form on 𝑉.",
          "zh": "是𝑉上的对称双线性型．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑞: 𝑉 → 𝐅 is a function. The following are equivalent. (a) 𝑞 is a quadratic form. (b) There exists a unique symmetric bilinear form 𝜌 on 𝑉 such that 𝑞 = 𝑞_𝜌. (c) 𝑞(𝜆𝑣) = 𝜆^2 𝑞(𝑣) for all 𝜆 ∈ 𝐅 and all 𝑣 ∈ 𝑉, and the function (𝑢, 𝑤) ↦ 𝑞(𝑢 + 𝑤)−𝑞(𝑢)−𝑞(𝑤) is a symmetric bilinear form on 𝑉. (d) 𝑞(2𝑣) = 4𝑞(𝑣) for all 𝑣 ∈ 𝑉, and the function (𝑢, 𝑤) ↦ 𝑞(𝑢 + 𝑤)−𝑞(𝑢)−𝑞(𝑤) is a symmetric bilinear form on 𝑉.",
      "statement_zh": "设𝑞: 𝑉 → F 是一个函数．下面各命题等价． (a) 𝑞是一个二次型． (b) 𝑉上存在唯一的对称双线性型 𝜌使得𝑞 = 𝑞_𝜌成立． (c) 𝑞(𝜆𝑣) = 𝜆^2 𝑞(𝑣) 对所有𝜆 ∈ F 和𝑣 ∈ 𝑉成立，并且函数 (𝑢, 𝑤) ↦→ 𝑞(𝑢 + 𝑤)−𝑞(𝑢)−𝑞(𝑤) 是𝑉上的对称双线性型． (d) 𝑞(2𝑣) = 4𝑞(𝑣) 对所有𝑣 ∈ 𝑉成立，并且函数 (𝑢, 𝑤) ↦→ 𝑞(𝑢 + 𝑤)−𝑞(𝑢)−𝑞(𝑤) 是𝑉上的对称双线性型．"
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
          "t": "p",
          "en": "Suppose 𝑞 is a quadratic form on 𝑉. (a) There exist a basis 𝑒_1, …, 𝑒_𝑛 of 𝑉 and 𝜆_1, …, 𝜆_𝑛 ∈ 𝐅 such that",
          "zh": "设𝑞是𝑉上的二次型． (a) 存在𝑉的基𝑒_1,..., 𝑒_𝑛和𝜆_1,..., 𝜆_𝑛 ∈ F，使得"
        },
        {
          "t": "formula",
          "en": "𝑞(𝑥_1 𝑒_1 + ⋯ + 𝑥_𝑛 𝑒_𝑛) = 𝜆_1 𝑥^2_1 + ⋯ + 𝜆_𝑛 𝑥^2_𝑛",
          "zh": "𝑞(𝑥_1 𝑒_1 + · · · + 𝑥_𝑛 𝑒_𝑛) = 𝜆_1 𝑥^2_1 + · · · + 𝜆_𝑛 𝑥^2_𝑛",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑥_1, …, 𝑥_𝑛 ∈ 𝐅. (b) If 𝐅 = 𝐑 and 𝑉 is an inner product space, then the basis in(a) can be chosen to be an orthonormal basis of 𝑉.",
          "zh": "对所有𝑥_1,..., 𝑥_𝑛 ∈ F 成立． (b) 若 F = R 且𝑉是内积空间，那么(a)中的基可取为𝑉的规范正交基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑞 is a quadratic form on 𝑉. (a) There exist a basis 𝑒_1, …, 𝑒_𝑛 of 𝑉 and 𝜆_1, …, 𝜆_𝑛 ∈ 𝐅 such that 𝑞(𝑥_1 𝑒_1 + ⋯ + 𝑥_𝑛 𝑒_𝑛) = 𝜆_1 𝑥^2_1 + ⋯ + 𝜆_𝑛 𝑥^2_𝑛 for all 𝑥_1, …, 𝑥_𝑛 ∈ 𝐅. (b) If 𝐅 = 𝐑 and 𝑉 is an inner product space, then the basis in(a) can be chosen to be an orthonormal basis of 𝑉.",
      "statement_zh": "设𝑞是𝑉上的二次型． (a) 存在𝑉的基𝑒_1,..., 𝑒_𝑛和𝜆_1,..., 𝜆_𝑛 ∈ F，使得 𝑞(𝑥_1 𝑒_1 + · · · + 𝑥_𝑛 𝑒_𝑛) = 𝜆_1 𝑥^2_1 + · · · + 𝜆_𝑛 𝑥^2_𝑛 对所有𝑥_1,..., 𝑥_𝑛 ∈ F 成立． (b) 若 F = R 且𝑉是内积空间，那么(a)中的基可取为𝑉的规范正交基．"
    },
    {
      "id": "9.24",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.24",
      "name_en": "𝑉^𝑚",
      "name_zh": "𝑉^𝑚",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For 𝑚 a positive integer, define 𝑉^𝑚 by",
          "zh": "对于正整数𝑚，定义𝑉^𝑚为"
        },
        {
          "t": "formula",
          "en": "𝑉^𝑚 = 𝑉⏟×_𝑚 ⋯_{time} ×_s 𝑉.",
          "zh": "𝑉^𝑚 = 𝑉 × · · · × 𝑉 ． ��������������������^{𝑚个𝑉}",
          "eq": null
        }
      ],
      "note": {
        "en": "Now we can define 𝑚-linear forms as a generalization of the bilinear forms that we discussed in the previous section.",
        "zh": "现在我们可将上节中所讨论的双线性型推广得到𝑚重线性型的定义．"
      },
      "statement_en": "For 𝑚 a positive integer, define 𝑉^𝑚 by 𝑉^𝑚 = 𝑉⏟×_𝑚 ⋯_{time} ×_s 𝑉. Now we can define 𝑚-linear forms as a generalization of the bilinear forms that we discussed in the previous section.",
      "statement_zh": "对于正整数𝑚，定义𝑉^𝑚为 𝑉^𝑚 = 𝑉 × · · · × 𝑉 ． ��������������������^{𝑚个𝑉} 现在我们可将上节中所讨论的双线性型推广得到𝑚重线性型的定义．"
    },
    {
      "id": "9.25",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.25",
      "name_en": "𝑚-linear form, 𝑉^{(𝑚)}, multilinear form",
      "name_zh": "𝑚重线性型（𝑚-linear form）、𝑉^{(𝑚)}、多重线性型（multilinear form）",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "For 𝑚 a positive integer, an 𝑚-linear form on 𝑉 is a function 𝛽: 𝑉^𝑚 → 𝐅 that is linear in each slot when the other slots are held fixed. This means that for each 𝑘 ∈{1, …, 𝑚} and all 𝑢_1, …, 𝑢_𝑚 ∈ 𝑉, the function",
          "zh": "对于正整数𝑚，𝑉上的𝑚重线性型是一个函数 𝛽: 𝑉^𝑚 → F，它在每个位置都是线性的 （当其他位置的值固定时）．这意味着，对每个 𝑘 ∈{1,..., 𝑚} 和所有 𝑢_1,..., 𝑢_𝑚 ∈ 𝑉， 函数"
        },
        {
          "t": "formula",
          "en": "𝑣 ↦ 𝛽(𝑢_1, …, 𝑢_{𝑘−1}, 𝑣, 𝑢_{𝑘+1}, …, 𝑢_𝑚)",
          "zh": "𝑣 ↦→ 𝛽(𝑢_1,..., 𝑢_{𝑘−1}, 𝑣, 𝑢_{𝑘+1},..., 𝑢_𝑚)",
          "eq": null
        },
        {
          "t": "p",
          "en": "is a linear map from 𝑉 to 𝐅.",
          "zh": "是𝑉到 F 的线性映射． 𝑉上𝑚重线性型所构成的集合记作𝑉^{(𝑚)} ． 若函数 𝛽是𝑉上的𝑚重线性型（𝑚为正整数），则称该函数为一个多重线性型．"
        },
        {
          "t": "bullet",
          "en": "The set of 𝑚-linear forms on 𝑉 is denoted by 𝑉^{(𝑚)}.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "A function 𝛽 is called a multilinear form on 𝑉 if it is an 𝑚-linear form on 𝑉 for some positive integer 𝑚.",
          "zh": ""
        }
      ],
      "note": {
        "en": "In the definition above, the expression 𝛽(𝑢_1, …, 𝑢_{𝑘−1}, 𝑣, 𝑢_{𝑘+1}, …, 𝑢_𝑚) means 𝛽(𝑣, 𝑢_2, …, 𝑢_𝑚) if 𝑘 = 1 and means 𝛽(𝑢_1, …, 𝑢_{𝑚−1}, 𝑣) if 𝑘 = 𝑚. A 1-linear form on 𝑉 is a linear functional on 𝑉. A 2-linear form on 𝑉 is a bilinear form on 𝑉. You can verify that with the usual addition and scalar multiplication of functions, 𝑉^{(𝑚)} is a vector space.",
        "zh": "在上述定义中，表达式 𝛽(𝑢_1,..., 𝑢_{𝑘−1}, 𝑣, 𝑢_{𝑘+1},..., 𝑢_𝑚) 在 𝑘 = 1时表示 𝛽(𝑣, 𝑢_2,..., 𝑢_𝑚)，在 𝑘 = 𝑚时表示 𝛽(𝑢_1,..., 𝑢_{𝑚−1}, 𝑣)． 𝑉上的1重线性型是𝑉上的线性泛函．𝑉上的2重线性型是𝑉上的双线性型．你可验证， 带有通常的函数加法和标量乘法运算的𝑉^{(𝑚)}是向量空间．"
      },
      "statement_en": "For 𝑚 a positive integer, an 𝑚-linear form on 𝑉 is a function 𝛽: 𝑉^𝑚 → 𝐅 that is linear in each slot when the other slots are held fixed. This means that for each 𝑘 ∈{1, …, 𝑚} and all 𝑢_1, …, 𝑢_𝑚 ∈ 𝑉, the function 𝑣 ↦ 𝛽(𝑢_1, …, 𝑢_{𝑘−1}, 𝑣, 𝑢_{𝑘+1}, …, 𝑢_𝑚) is a linear map from 𝑉 to 𝐅. The set of 𝑚-linear forms on 𝑉 is denoted by 𝑉^{(𝑚)}. A function 𝛽 is called a multilinear form on 𝑉 if it is an 𝑚-linear form on 𝑉 for some positive integer 𝑚. In the definition above, the expression 𝛽(𝑢_1, …, 𝑢_{𝑘−1}, 𝑣, 𝑢_{𝑘+1}, …, 𝑢_𝑚) means 𝛽(𝑣, 𝑢_2, …, 𝑢_𝑚) if 𝑘 = 1 and means 𝛽(𝑢_1, …, 𝑢_{𝑚−1}, 𝑣) if 𝑘 = 𝑚. A 1-linear form on 𝑉 is a linear functional on 𝑉. A 2-linear form on 𝑉 is a bilinear form on 𝑉. You can verify that with the usual addition and scalar multiplication of functions, 𝑉^{(𝑚)} is a vector space.",
      "statement_zh": "对于正整数𝑚，𝑉上的𝑚重线性型是一个函数 𝛽: 𝑉^𝑚 → F，它在每个位置都是线性的 （当其他位置的值固定时）．这意味着，对每个 𝑘 ∈{1,..., 𝑚} 和所有 𝑢_1,..., 𝑢_𝑚 ∈ 𝑉， 函数 𝑣 ↦→ 𝛽(𝑢_1,..., 𝑢_{𝑘−1}, 𝑣, 𝑢_{𝑘+1},..., 𝑢_𝑚) 是𝑉到 F 的线性映射． 𝑉上𝑚重线性型所构成的集合记作𝑉^{(𝑚)} ． 若函数 𝛽是𝑉上的𝑚重线性型（𝑚为正整数），则称该函数为一个多重线性型． 在上述定义中，表达式 𝛽(𝑢_1,..., 𝑢_{𝑘−1}, 𝑣, 𝑢_{𝑘+1},..., 𝑢_𝑚) 在 𝑘 = 1时表示 𝛽(𝑣, 𝑢_2,..., 𝑢_𝑚)，在 𝑘 = 𝑚时表示 𝛽(𝑢_1,..., 𝑢_{𝑚−1}, 𝑣)． 𝑉上的1重线性型是𝑉上的线性泛函．𝑉上的2重线性型是𝑉上的双线性型．你可验证， 带有通常的函数加法和标量乘法运算的𝑉^{(𝑚)}是向量空间．"
    },
    {
      "id": "9.27",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.27",
      "name_en": "alternating forms, 𝑉^{(𝑚)}_{alt}",
      "name_zh": "交错型（alternating forms）、𝑉^{(𝑚)}_{alt}",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer.",
          "zh": "设𝑚是正整数． 对于𝑉上的 𝑚重线性型 𝛼，如果只要𝑉中向量组 𝑣_1,..., 𝑣_𝑚满足对于某两个不同的 𝑗, 𝑘 ∈{1,..., 𝑚} 有𝑣_𝑗 = 𝑣_𝑘，就有𝛼(𝑣_1,..., 𝑣_𝑚) = 0，则称𝛼是交错的． 𝑉^{(𝑚)}_{alt} ={𝛼 ∈ 𝑉^{(𝑚)}: 𝛼是𝑉上的交错𝑚重线性型}．"
        },
        {
          "t": "bullet",
          "en": "An 𝑚-linear form 𝛼 on 𝑉 is called alternating if 𝛼(𝑣_1, …, 𝑣_𝑚) = 0 whenever 𝑣_1, …, 𝑣_𝑚 is a list of vectors in 𝑉 with 𝑣_𝑗 = 𝑣_𝑘 for some two distinct values of 𝑗 and 𝑘 in{1, …, 𝑚}.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "𝑉^{(𝑚)}_{alt} ={𝛼 ∈ 𝑉^{(𝑚)} : 𝛼 is an alternating 𝑚-linear form on 𝑉}.",
          "zh": ""
        }
      ],
      "note": {
        "en": "You should verify that 𝑉^{(𝑚)}_{alt} is a subspace of 𝑉^{(𝑚)}. See Example 9.15 for examples of alternating 2-linear forms. See Exercise 2 for an example of an alternating 3-linear form. The next result tells us that if a linearly dependent list is input to an alternating multilinear form, then the output equals 0.",
        "zh": "你应自行验证𝑉^{(𝑚)}_{alt}是𝑉^{(𝑚)}的子空间．交错2重线性型的例子见例9.15．交错3重线性型 的例子见习题2． 下面结论告诉我们，如果将一个线性相关组作为交错多重线性型的输入，那么所得输出等 于0．"
      },
      "statement_en": "Suppose 𝑚 is a positive integer. An 𝑚-linear form 𝛼 on 𝑉 is called alternating if 𝛼(𝑣_1, …, 𝑣_𝑚) = 0 whenever 𝑣_1, …, 𝑣_𝑚 is a list of vectors in 𝑉 with 𝑣_𝑗 = 𝑣_𝑘 for some two distinct values of 𝑗 and 𝑘 in{1, …, 𝑚}. 𝑉^{(𝑚)}_{alt} ={𝛼 ∈ 𝑉^{(𝑚)} : 𝛼 is an alternating 𝑚-linear form on 𝑉}. You should verify that 𝑉^{(𝑚)}_{alt} is a subspace of 𝑉^{(𝑚)}. See Example 9.15 for examples of alternating 2-linear forms. See Exercise 2 for an example of an alternating 3-linear form. The next result tells us that if a linearly dependent list is input to an alternating multilinear form, then the output equals 0.",
      "statement_zh": "设𝑚是正整数． 对于𝑉上的 𝑚重线性型 𝛼，如果只要𝑉中向量组 𝑣_1,..., 𝑣_𝑚满足对于某两个不同的 𝑗, 𝑘 ∈{1,..., 𝑚} 有𝑣_𝑗 = 𝑣_𝑘，就有𝛼(𝑣_1,..., 𝑣_𝑚) = 0，则称𝛼是交错的． 𝑉^{(𝑚)}_{alt} ={𝛼 ∈ 𝑉^{(𝑚)}: 𝛼是𝑉上的交错𝑚重线性型}． 你应自行验证𝑉^{(𝑚)}_{alt}是𝑉^{(𝑚)}的子空间．交错2重线性型的例子见例9.15．交错3重线性型 的例子见习题2． 下面结论告诉我们，如果将一个线性相关组作为交错多重线性型的输入，那么所得输出等 于0．"
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
          "en": "Suppose 𝑚 is a positive integer and 𝛼 is an alternating 𝑚-linear form on 𝑉. If 𝑣_1, …, 𝑣_𝑚 is a linearly dependent list in 𝑉, then",
          "zh": "设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型．若𝑣_1,..., 𝑣_𝑚是𝑉中的线性相关组，那么"
        },
        {
          "t": "formula",
          "en": "𝛼(𝑣_1, …, 𝑣_𝑚) = 0.",
          "zh": "𝛼(𝑣_1,..., 𝑣_𝑚) = 0．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer and 𝛼 is an alternating 𝑚-linear form on 𝑉. If 𝑣_1, …, 𝑣_𝑚 is a linearly dependent list in 𝑉, then 𝛼(𝑣_1, …, 𝑣_𝑚) = 0.",
      "statement_zh": "设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型．若𝑣_1,..., 𝑣_𝑚是𝑉中的线性相关组，那么 𝛼(𝑣_1,..., 𝑣_𝑚) = 0．"
    },
    {
      "id": "9.29",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.29",
      "name_en": "no nonzero alternating 𝑚-linear forms for 𝑚 > dim 𝑉",
      "name_zh": "对𝑚 > dim 𝑉，不存在非零交错𝑚重线性型",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 > dim 𝑉. Then 0 is the only alternating 𝑚-linear form on 𝑉.",
          "zh": "设𝑚 > dim 𝑉．那么0是𝑉上唯一的交错𝑚重线性型．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 > dim 𝑉. Then 0 is the only alternating 𝑚-linear form on 𝑉.",
      "statement_zh": "设𝑚 > dim 𝑉．那么0是𝑉上唯一的交错𝑚重线性型．"
    },
    {
      "id": "9.30",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.30",
      "name_en": "swapping input vectors in an alternating multilinear form",
      "name_zh": "交换交错多重线性型的输入向量",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer, 𝛼 is an alternating 𝑚-linear form on 𝑉, and 𝑣_1, …, 𝑣_𝑚 is a list of vectors in 𝑉. Then swapping the vectors in any two slots of 𝛼(𝑣_1, …, 𝑣_𝑚) changes the value of 𝛼 by a factor of−1.",
          "zh": "设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型，且𝑣_1,..., 𝑣_𝑚是𝑉中的向量组．那么交换 𝛼(𝑣_1,..., 𝑣_𝑚) 中任意两个位置上的向量会使𝛼的值变为原来的−1倍．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer, 𝛼 is an alternating 𝑚-linear form on 𝑉, and 𝑣_1, …, 𝑣_𝑚 is a list of vectors in 𝑉. Then swapping the vectors in any two slots of 𝛼(𝑣_1, …, 𝑣_𝑚) changes the value of 𝛼 by a factor of−1.",
      "statement_zh": "设𝑚是正整数，𝛼是𝑉上的交错𝑚重线性型，且𝑣_1,..., 𝑣_𝑚是𝑉中的向量组．那么交换 𝛼(𝑣_1,..., 𝑣_𝑚) 中任意两个位置上的向量会使𝛼的值变为原来的−1倍．"
    },
    {
      "id": "9.31",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.31",
      "name_en": "permutation, perm 𝑚",
      "name_zh": "排列（permutation）、perm 𝑚",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑚 is a positive integer.",
          "zh": "设𝑚是正整数． (1,..., 𝑚) 的一个排列是不重不漏地包含1,..., 𝑚的组(𝑗_1,..., 𝑗_𝑚)． (1,..., 𝑚) 的所有排列所构成的集合记为 perm 𝑚．"
        },
        {
          "t": "bullet",
          "en": "A permutation of(1, …, 𝑚) is a list(𝑗_1, …, 𝑗_𝑚) that contains each of the numbers 1, …, 𝑚 exactly once.",
          "zh": ""
        },
        {
          "t": "bullet",
          "en": "The set of all permutations of(1, …, 𝑚) is denoted by perm 𝑚.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer. A permutation of(1, …, 𝑚) is a list(𝑗_1, …, 𝑗_𝑚) that contains each of the numbers 1, …, 𝑚 exactly once. The set of all permutations of(1, …, 𝑚) is denoted by perm 𝑚.",
      "statement_zh": "设𝑚是正整数． (1,..., 𝑚) 的一个排列是不重不漏地包含1,..., 𝑚的组(𝑗_1,..., 𝑗_𝑚)． (1,..., 𝑚) 的所有排列所构成的集合记为 perm 𝑚．"
    },
    {
      "id": "9.32",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.32",
      "name_en": "sign of a permutation",
      "name_zh": "排列的符号（sign of a permutation）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The sign of a permutation(𝑗_1, …, 𝑗_𝑚) is defined by",
          "zh": "排列(𝑗_1,..., 𝑗_𝑚) 的符号定义为"
        },
        {
          "t": "formula",
          "en": "sign(𝑗_1, …, 𝑗_𝑚) =(−1)^𝑁",
          "zh": "sign(𝑗_1,..., 𝑗_𝑚) =(−1)^𝑁",
          "eq": null
        },
        {
          "t": "p",
          "en": "where 𝑁 is the number of pairs of integers(𝑘, ℓ) with 1 ≤ 𝑘 < ℓ ≤ 𝑚 such that 𝑘 appears after ℓ in the list(𝑗_1, …, 𝑗_𝑚).",
          "zh": "其中 𝑁是所有整数对(𝑘, ℓ)（1 ≤ 𝑘 < ℓ ≤ 𝑚）中，满足 𝑘在组(𝑗_1,..., 𝑗_𝑚) 中排在ℓ之后 的数目．^1"
        }
      ],
      "note": {
        "en": "Hence the sign of a permutation equals 1 if the natural order has been changed an even number of times and equals−1 if the natural order has been changed an odd number of times.",
        "zh": "因此，若一排列中有偶数个不合自然顺序之处，则其符号等于1；而若一排列中有奇数个 不合自然顺序之处，则其符号等于−1．"
      },
      "statement_en": "The sign of a permutation(𝑗_1, …, 𝑗_𝑚) is defined by sign(𝑗_1, …, 𝑗_𝑚) =(−1)^𝑁 where 𝑁 is the number of pairs of integers(𝑘, ℓ) with 1 ≤ 𝑘 < ℓ ≤ 𝑚 such that 𝑘 appears after ℓ in the list(𝑗_1, …, 𝑗_𝑚). Hence the sign of a permutation equals 1 if the natural order has been changed an even number of times and equals−1 if the natural order has been changed an odd number of times.",
      "statement_zh": "排列(𝑗_1,..., 𝑗_𝑚) 的符号定义为 sign(𝑗_1,..., 𝑗_𝑚) =(−1)^𝑁 其中 𝑁是所有整数对(𝑘, ℓ)（1 ≤ 𝑘 < ℓ ≤ 𝑚）中，满足 𝑘在组(𝑗_1,..., 𝑗_𝑚) 中排在ℓ之后 的数目．^1 因此，若一排列中有偶数个不合自然顺序之处，则其符号等于1；而若一排列中有奇数个 不合自然顺序之处，则其符号等于−1．"
    },
    {
      "id": "9.34",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.34",
      "name_en": "swapping two entries in a permutation",
      "name_zh": "交换排列中的两项",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Swapping two entries in a permutation multiplies the sign of the permutation by−1.",
          "zh": "交换排列中的两项会将排列的符号乘以−1．"
        }
      ],
      "note": null,
      "statement_en": "Swapping two entries in a permutation multiplies the sign of the permutation by−1.",
      "statement_zh": "交换排列中的两项会将排列的符号乘以−1．"
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
          "en": "Suppose 𝑚 is a positive integer and 𝛼 ∈ 𝑉^{(𝑚)}_{alt}. Then",
          "zh": "设𝑚是正整数，且𝛼 ∈ 𝑉^{(𝑚)}_{alt} ．那么"
        },
        {
          "t": "formula",
          "en": "𝛼(𝑣_{𝑗1}, …, 𝑣_{𝑗𝑚}) =(sign(𝑗_1, …, 𝑗_𝑚))𝛼(𝑣_1, …, 𝑣_𝑚)",
          "zh": "� � 𝛼(𝑣_{𝑗1},..., 𝑣_{𝑗𝑚}) = sign(𝑗_1,..., 𝑗_𝑚) 𝛼(𝑣_1,..., 𝑣_𝑚)",
          "eq": null
        },
        {
          "t": "p",
          "en": "for every list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉 and all(𝑗_1, …, 𝑗_𝑚) ∈ perm 𝑚.",
          "zh": "对𝑉中每个向量组𝑣_1,..., 𝑣_𝑚以及所有(𝑗_1,..., 𝑗_𝑚) ∈ perm 𝑚成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑚 is a positive integer and 𝛼 ∈ 𝑉^{(𝑚)}_{alt}. Then 𝛼(𝑣_{𝑗1}, …, 𝑣_{𝑗𝑚}) =(sign(𝑗_1, …, 𝑗_𝑚))𝛼(𝑣_1, …, 𝑣_𝑚) for every list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉 and all(𝑗_1, …, 𝑗_𝑚) ∈ perm 𝑚.",
      "statement_zh": "设𝑚是正整数，且𝛼 ∈ 𝑉^{(𝑚)}_{alt} ．那么 � � 𝛼(𝑣_{𝑗1},..., 𝑣_{𝑗𝑚}) = sign(𝑗_1,..., 𝑗_𝑚) 𝛼(𝑣_1,..., 𝑣_𝑚) 对𝑉中每个向量组𝑣_1,..., 𝑣_𝑚以及所有(𝑗_1,..., 𝑗_𝑚) ∈ perm 𝑚成立．"
    },
    {
      "id": "9.36",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.36",
      "name_en": "formula for(dim 𝑉)-linear alternating forms on 𝑉",
      "name_zh": "𝑉上交错(dim 𝑉) 重线性型的公式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Let 𝑛 = dim 𝑉. Suppose 𝑒_1, …, 𝑒_𝑛 is a basis of 𝑉 and 𝑣_1, …, 𝑣_𝑛 ∈ 𝑉. For each 𝑘 ∈{1, …, 𝑛}, let 𝑏_{1,𝑘}, …, 𝑏_{𝑛,𝑘} ∈ 𝐅 be such that",
          "zh": "令 𝑛 = dim 𝑉．设 𝑒_1,..., 𝑒_𝑛是𝑉的一个基且 𝑣_1,..., 𝑣_𝑛 ∈ 𝑉．对每个 𝑘 ∈{1,..., 𝑛}，令 𝑏_{1,𝑘},..., 𝑏_{𝑛,𝑘} ∈ F 满足"
        },
        {
          "t": "formula",
          "en": "𝑣_𝑘 =_𝑗 ∑^𝑛_{=1}𝑏_{𝑗,𝑘} 𝑒_𝑗.",
          "zh": "∑^𝑛 𝑣_𝑘 =_{𝑗=1} 𝑏_{𝑗,𝑘} 𝑒_𝑗 ．",
          "eq": null
        },
        {
          "t": "p",
          "en": "Then 𝛼(𝑣_1, …, 𝑣_𝑛) = 𝛼(𝑒_1, …, 𝑒_𝑛)_{(𝑗1,…,𝑗𝑛} ∑_{)∈perm𝑛}(sign(𝑗_1, …, 𝑗_𝑛))𝑏_{𝑗1,1} ⋯ 𝑏_{𝑗𝑛,𝑛} for every alternating 𝑛-linear form 𝛼 on 𝑉.",
          "zh": "那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "∑ � � 𝛼(𝑣_1,..., 𝑣_𝑛) = 𝛼(𝑒_1,..., 𝑒_𝑛)_{(𝑗1,...,𝑗𝑛)∈perm𝑛} sign(𝑗_1,..., 𝑗_𝑛) 𝑏_{𝑗1,1} · · · 𝑏_{𝑗𝑛,𝑛}",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "对于𝑉上每个交错𝑛重线性型都成立．"
        }
      ],
      "note": {
        "en": "",
        "zh": "如9.33的最后一例中，若交换排列中的2和𝑚，则仅包含一个中间项3的数对为(1,3),(2,3),(3,𝑚)，原先其中不符合自然顺序的 是(1,3)，交换后不符合自然顺序的数对是(1,3),(2,3),(3,𝑚)，净增加量为2．对于其他中间项4,..., 𝑚−1，也是同样道理．"
      },
      "statement_en": "Let 𝑛 = dim 𝑉. Suppose 𝑒_1, …, 𝑒_𝑛 is a basis of 𝑉 and 𝑣_1, …, 𝑣_𝑛 ∈ 𝑉. For each 𝑘 ∈{1, …, 𝑛}, let 𝑏_{1,𝑘}, …, 𝑏_{𝑛,𝑘} ∈ 𝐅 be such that 𝑣_𝑘 =_𝑗 ∑^𝑛_{=1}𝑏_{𝑗,𝑘} 𝑒_𝑗. Then 𝛼(𝑣_1, …, 𝑣_𝑛) = 𝛼(𝑒_1, …, 𝑒_𝑛)_{(𝑗1,…,𝑗𝑛} ∑_{)∈perm𝑛}(sign(𝑗_1, …, 𝑗_𝑛))𝑏_{𝑗1,1} ⋯ 𝑏_{𝑗𝑛,𝑛} for every alternating 𝑛-linear form 𝛼 on 𝑉.",
      "statement_zh": "令 𝑛 = dim 𝑉．设 𝑒_1,..., 𝑒_𝑛是𝑉的一个基且 𝑣_1,..., 𝑣_𝑛 ∈ 𝑉．对每个 𝑘 ∈{1,..., 𝑛}，令 𝑏_{1,𝑘},..., 𝑏_{𝑛,𝑘} ∈ F 满足 ∑^𝑛 𝑣_𝑘 =_{𝑗=1} 𝑏_{𝑗,𝑘} 𝑒_𝑗 ． 那么 ∑ � � 𝛼(𝑣_1,..., 𝑣_𝑛) = 𝛼(𝑒_1,..., 𝑒_𝑛)_{(𝑗1,...,𝑗𝑛)∈perm𝑛} sign(𝑗_1,..., 𝑗_𝑛) 𝑏_{𝑗1,1} · · · 𝑏_{𝑗𝑛,𝑛} 对于𝑉上每个交错𝑛重线性型都成立． 如9.33的最后一例中，若交换排列中的2和𝑚，则仅包含一个中间项3的数对为(1,3),(2,3),(3,𝑚)，原先其中不符合自然顺序的 是(1,3)，交换后不符合自然顺序的数对是(1,3),(2,3),(3,𝑚)，净增加量为2．对于其他中间项4,..., 𝑚−1，也是同样道理．"
    },
    {
      "id": "9.37",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.37",
      "name_en": "dim 𝑉^{(dim𝑉)}_{alt} = 1",
      "name_zh": "dim 𝑉^{(dim𝑉)}_{alt} = 1",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "The vector space 𝑉^{(dim𝑉)}_{alt} has dimension one.",
          "zh": "向量空间𝑉^{(dim𝑉)}_{alt}的维数是1．"
        }
      ],
      "note": null,
      "statement_en": "The vector space 𝑉^{(dim𝑉)}_{alt} has dimension one.",
      "statement_zh": "向量空间𝑉^{(dim𝑉)}_{alt}的维数是1．"
    },
    {
      "id": "9.39",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.39",
      "name_en": "alternating(dim 𝑉)-linear forms and linear independence",
      "name_zh": "交错(dim 𝑉) 重线性型与线性无关性",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Let 𝑛 = dim 𝑉. Suppose 𝛼 is a nonzero alternating 𝑛-linear form on 𝑉 and 𝑒_1, …, 𝑒_𝑛 is a list of vectors in 𝑉. Then",
          "zh": "令𝑛 = dim 𝑉．设𝛼是𝑉上的非零交错𝑛重线性型，且𝑒_1,..., 𝑒_𝑛是𝑉中的向量组．那么"
        },
        {
          "t": "formula",
          "en": "𝛼(𝑒_1, …, 𝑒_𝑛) ≠ 0",
          "zh": "𝛼(𝑒_1,..., 𝑒_𝑛) ≠ 0",
          "eq": null
        },
        {
          "t": "p",
          "en": "if and only if 𝑒_1, …, 𝑒_𝑛 is linearly independent.",
          "zh": "当且仅当𝑒_1,..., 𝑒_𝑛是线性无关的．"
        }
      ],
      "note": null,
      "statement_en": "Let 𝑛 = dim 𝑉. Suppose 𝛼 is a nonzero alternating 𝑛-linear form on 𝑉 and 𝑒_1, …, 𝑒_𝑛 is a list of vectors in 𝑉. Then 𝛼(𝑒_1, …, 𝑒_𝑛) ≠ 0 if and only if 𝑒_1, …, 𝑒_𝑛 is linearly independent.",
      "statement_zh": "令𝑛 = dim 𝑉．设𝛼是𝑉上的非零交错𝑛重线性型，且𝑒_1,..., 𝑒_𝑛是𝑉中的向量组．那么 𝛼(𝑒_1,..., 𝑒_𝑛) ≠ 0 当且仅当𝑒_1,..., 𝑒_𝑛是线性无关的．"
    },
    {
      "id": "9.40",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.40",
      "name_en": "𝛼_𝑇",
      "name_zh": "𝛼_𝑇",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑚 is a positive integer and 𝑇 ∈ ℒ(𝑉). For 𝛼 ∈ 𝑉^{(𝑚)}_{alt}, define 𝛼_𝑇 ∈ 𝑉^{(𝑚)}_{alt} by",
          "zh": "设𝑚是正整数，𝑇 ∈ L(𝑉)．对𝛼 ∈ 𝑉^{(𝑚)}_{alt}，定义𝛼_𝑇 ∈ 𝑉^{(𝑚)}_{alt}为：对𝑉中每个向量组𝑣_1,..., 𝑣_𝑚，"
        },
        {
          "t": "formula",
          "en": "𝛼_𝑇(𝑣_1, …, 𝑣_𝑚) = 𝛼(𝑇𝑣_1, …, 𝑇𝑣_𝑚)",
          "zh": "𝛼_𝑇(𝑣_1,..., 𝑣_𝑚) = 𝛼(𝑇𝑣_1,...,𝑇𝑣_𝑚)．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for each list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉.",
          "zh": ""
        }
      ],
      "note": {
        "en": "",
        "zh": "设𝑇 ∈ L(𝑉)．如果𝛼 ∈ 𝑉^{(𝑚)}_{alt}，𝑣_1,..., 𝑣_𝑚是𝑉中的向量组且对某个 𝑗 ≠ 𝑘存在𝑣_𝑗 = 𝑣_𝑘，那 么𝑇𝑣_𝑗 = 𝑇𝑣_𝑘，这表明𝛼_𝑇(𝑣_1,..., 𝑣_𝑚) = 𝛼(𝑇𝑣_1,...,𝑇𝑣_𝑚) = 0．于是函数𝛼 ↦→ 𝛼_𝑇是从𝑉^{(𝑚)}_{alt}到其 自身的线性映射． 我们知道，dim 𝑉^{(dim𝑉)}_{alt} = 1（见9.37）．每个从一维向量空间到该空间本身的线性映射，就 是将向量与某个特定的标量相乘．我们现在就将 det 𝑇定义为线性映射 𝛼 ↦→ 𝛼_𝑇中乘在向量之 前的那个标量．"
      },
      "statement_en": "Suppose that 𝑚 is a positive integer and 𝑇 ∈ ℒ(𝑉). For 𝛼 ∈ 𝑉^{(𝑚)}_{alt}, define 𝛼_𝑇 ∈ 𝑉^{(𝑚)}_{alt} by 𝛼_𝑇(𝑣_1, …, 𝑣_𝑚) = 𝛼(𝑇𝑣_1, …, 𝑇𝑣_𝑚) for each list 𝑣_1, …, 𝑣_𝑚 of vectors in 𝑉.",
      "statement_zh": "设𝑚是正整数，𝑇 ∈ L(𝑉)．对𝛼 ∈ 𝑉^{(𝑚)}_{alt}，定义𝛼_𝑇 ∈ 𝑉^{(𝑚)}_{alt}为：对𝑉中每个向量组𝑣_1,..., 𝑣_𝑚， 𝛼_𝑇(𝑣_1,..., 𝑣_𝑚) = 𝛼(𝑇𝑣_1,...,𝑇𝑣_𝑚)． 设𝑇 ∈ L(𝑉)．如果𝛼 ∈ 𝑉^{(𝑚)}_{alt}，𝑣_1,..., 𝑣_𝑚是𝑉中的向量组且对某个 𝑗 ≠ 𝑘存在𝑣_𝑗 = 𝑣_𝑘，那 么𝑇𝑣_𝑗 = 𝑇𝑣_𝑘，这表明𝛼_𝑇(𝑣_1,..., 𝑣_𝑚) = 𝛼(𝑇𝑣_1,...,𝑇𝑣_𝑚) = 0．于是函数𝛼 ↦→ 𝛼_𝑇是从𝑉^{(𝑚)}_{alt}到其 自身的线性映射． 我们知道，dim 𝑉^{(dim𝑉)}_{alt} = 1（见9.37）．每个从一维向量空间到该空间本身的线性映射，就 是将向量与某个特定的标量相乘．我们现在就将 det 𝑇定义为线性映射 𝛼 ↦→ 𝛼_𝑇中乘在向量之 前的那个标量．"
    },
    {
      "id": "9.41",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.41",
      "name_en": "determinant of an operator, det 𝑇",
      "name_zh": "算子的行列式（determinant of an operator）、det 𝑇",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). The determinant of 𝑇, denoted by det 𝑇, is defined to be the unique number in 𝐅 such that",
          "zh": "设𝑇 ∈ L(𝑉)．𝑇的行列式，记作 det 𝑇，定义为 F 中唯一使得"
        },
        {
          "t": "formula",
          "en": "𝛼_𝑇 =(det 𝑇) 𝛼",
          "zh": "𝛼_𝑇 =(det 𝑇)𝛼",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝛼 ∈ 𝑉^{(dim𝑉)}_{alt}.",
          "zh": "对所有𝛼 ∈ 𝑉^{(dim𝑉)}_{alt}都成立的数．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). The determinant of 𝑇, denoted by det 𝑇, is defined to be the unique number in 𝐅 such that 𝛼_𝑇 =(det 𝑇) 𝛼 for all 𝛼 ∈ 𝑉^{(dim𝑉)}_{alt}.",
      "statement_zh": "设𝑇 ∈ L(𝑉)．𝑇的行列式，记作 det 𝑇，定义为 F 中唯一使得 𝛼_𝑇 =(det 𝑇)𝛼 对所有𝛼 ∈ 𝑉^{(dim𝑉)}_{alt}都成立的数．"
    },
    {
      "id": "9.43",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.43",
      "name_en": "determinant of a matrix, det 𝐴",
      "name_zh": "矩阵的行列式（determinant of a matrix）、det 𝐴",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑛 is a positive integer and 𝐴 is an 𝑛-by-𝑛 square matrix with entries in 𝐅. Let 𝑇 ∈ ℒ(𝐅^𝑛) be the operator whose matrix with respect to the standard basis of 𝐅^𝑛 equals 𝐴. The determinant of 𝐴, denoted by det 𝐴, is defined by det 𝐴 = det 𝑇.",
          "zh": "设 𝑛是正整数，且 𝐴是各元素均属于 F 的 𝑛 × 𝑛方阵．令𝑇 ∈ L(F^𝑛) 关于 F^𝑛的标准基 的矩阵等于 𝐴．𝐴的行列式，记为 det 𝐴，定义为 det 𝐴 = det 𝑇．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑛 is a positive integer and 𝐴 is an 𝑛-by-𝑛 square matrix with entries in 𝐅. Let 𝑇 ∈ ℒ(𝐅^𝑛) be the operator whose matrix with respect to the standard basis of 𝐅^𝑛 equals 𝐴. The determinant of 𝐴, denoted by det 𝐴, is defined by det 𝐴 = det 𝑇.",
      "statement_zh": "设 𝑛是正整数，且 𝐴是各元素均属于 F 的 𝑛 × 𝑛方阵．令𝑇 ∈ L(F^𝑛) 关于 F^𝑛的标准基 的矩阵等于 𝐴．𝐴的行列式，记为 det 𝐴，定义为 det 𝐴 = det 𝑇．"
    },
    {
      "id": "9.45",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.45",
      "name_en": "determinant is an alternating multilinear form",
      "name_zh": "行列式是交错多重线性型 � �",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑛 is a positive integer. The map that takes a list 𝑣_1, …, 𝑣_𝑛 of vectors in 𝐅^𝑛 to det(𝑣_1 ⋯ 𝑣_𝑛) is an alternating 𝑛-linear form on 𝐅^𝑛.",
          "zh": "_𝑛� �_𝑛"
        },
        {
          "t": "p",
          "en": "",
          "zh": "设𝑛是正整数．将 F 中向量组𝑣_1,..., 𝑣_𝑛对应到 det 𝑣_1 · · · 𝑣_𝑛的映射是 F 上的交 错𝑛重线性型．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑛 is a positive integer. The map that takes a list 𝑣_1, …, 𝑣_𝑛 of vectors in 𝐅^𝑛 to det(𝑣_1 ⋯ 𝑣_𝑛) is an alternating 𝑛-linear form on 𝐅^𝑛.",
      "statement_zh": "_𝑛� �_𝑛 设𝑛是正整数．将 F 中向量组𝑣_1,..., 𝑣_𝑛对应到 det 𝑣_1 · · · 𝑣_𝑛的映射是 F 上的交 错𝑛重线性型．"
    },
    {
      "id": "9.46",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.46",
      "name_en": "formula for determinant of a matrix",
      "name_zh": "矩阵的行列式的公式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose that 𝑛 is a positive integer and 𝐴 is an 𝑛-by-𝑛 square matrix. Then det 𝐴 =_{(𝑗1,…,𝑗𝑛} ∑_{)∈perm𝑛}(sign(𝑗_1, …, 𝑗_𝑛))𝐴_{𝑗1,1} ⋯ 𝐴_{𝑗𝑛,𝑛}.",
          "zh": "设𝑛是正整数且 𝐴是𝑛 × 𝑛方阵．那么"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "∑ � � det 𝐴 = sign(𝑗_1,..., 𝑗_𝑛) 𝐴_{𝑗1,1} · · · 𝐴_{𝑗𝑛,𝑛} ．^{(𝑗1,...,𝑗𝑛)∈perm𝑛}",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝑛 is a positive integer and 𝐴 is an 𝑛-by-𝑛 square matrix. Then det 𝐴 =_{(𝑗1,…,𝑗𝑛} ∑_{)∈perm𝑛}(sign(𝑗_1, …, 𝑗_𝑛))𝐴_{𝑗1,1} ⋯ 𝐴_{𝑗𝑛,𝑛}.",
      "statement_zh": "设𝑛是正整数且 𝐴是𝑛 × 𝑛方阵．那么 ∑ � � det 𝐴 = sign(𝑗_1,..., 𝑗_𝑛) 𝐴_{𝑗1,1} · · · 𝐴_{𝑗𝑛,𝑛} ．^{(𝑗1,...,𝑗𝑛)∈perm𝑛}"
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
          "en": "Suppose that 𝐴 is an upper-triangular matrix with 𝜆_1, …, 𝜆_𝑛 on the diagonal. Then det 𝐴 = 𝜆_1 ⋯ 𝜆_𝑛.",
          "zh": "设 𝐴是上三角矩阵，其对角线上各元素是𝜆_1,..., 𝜆_𝑛 ．那么 det 𝐴 = 𝜆_1 · · · 𝜆_𝑛 ．"
        }
      ],
      "note": null,
      "statement_en": "Suppose that 𝐴 is an upper-triangular matrix with 𝜆_1, …, 𝜆_𝑛 on the diagonal. Then det 𝐴 = 𝜆_1 ⋯ 𝜆_𝑛.",
      "statement_zh": "设 𝐴是上三角矩阵，其对角线上各元素是𝜆_1,..., 𝜆_𝑛 ．那么 det 𝐴 = 𝜆_1 · · · 𝜆_𝑛 ．"
    },
    {
      "id": "9.49",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.49",
      "name_en": "determinant is multiplicative (a) Suppose. Then det det det.",
      "name_zh": "行列式是可乘的",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(a) Suppose 𝑆, 𝑇 ∈ ℒ(𝑉). Then det(𝑆𝑇) =(det 𝑆)(det 𝑇). (b) Suppose 𝐴 and 𝐵 are square matrices of the same size. Then det(𝐴𝐵) =(det 𝐴)(det 𝐵).",
          "zh": "(a) 设 𝑆,𝑇 ∈ L(𝑉)．那么 det(𝑆𝑇) =(det 𝑆)(det 𝑇)． (b) 设 𝐴和 𝐵是大小相同的方阵．那么 det(𝐴𝐵) =(det 𝐴)(det 𝐵)．"
        }
      ],
      "note": null,
      "statement_en": "(a) Suppose 𝑆, 𝑇 ∈ ℒ(𝑉). Then det(𝑆𝑇) =(det 𝑆)(det 𝑇). (b) Suppose 𝐴 and 𝐵 are square matrices of the same size. Then det(𝐴𝐵) =(det 𝐴)(det 𝐵).",
      "statement_zh": "(a) 设 𝑆,𝑇 ∈ L(𝑉)．那么 det(𝑆𝑇) =(det 𝑆)(det 𝑇)． (b) 设 𝐴和 𝐵是大小相同的方阵．那么 det(𝐴𝐵) =(det 𝐴)(det 𝐵)．"
    },
    {
      "id": "9.50",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.50",
      "name_en": "invertible ⟺ nonzero determinant",
      "name_zh": "可逆 ⇐⇒ 行列式非零",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An operator 𝑇 ∈ ℒ(𝑉) is invertible if and only if det 𝑇 ≠ 0. Furthermore, if 𝑇 is invertible, then det(𝑇^{−1}) =^1_{det𝑇}.",
          "zh": "算子𝑇 ∈ L(𝑉)是可逆的，当且仅当 det 𝑇 ≠ 0．此外，若𝑇是可逆的，那么 det(𝑇^{−1}) =^1_{det𝑇} ．"
        }
      ],
      "note": null,
      "statement_en": "An operator 𝑇 ∈ ℒ(𝑉) is invertible if and only if det 𝑇 ≠ 0. Furthermore, if 𝑇 is invertible, then det(𝑇^{−1}) =^1_{det𝑇}.",
      "statement_zh": "算子𝑇 ∈ L(𝑉)是可逆的，当且仅当 det 𝑇 ≠ 0．此外，若𝑇是可逆的，那么 det(𝑇^{−1}) =^1_{det𝑇} ．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅. Then 𝜆 is an eigenvalue of 𝑇 if and only if det(𝜆𝐼−𝑇) = 0.",
          "zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F．那么𝜆是𝑇的特征值，当且仅当 det(𝜆𝐼−𝑇) = 0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝜆 ∈ 𝐅. Then 𝜆 is an eigenvalue of 𝑇 if and only if det(𝜆𝐼−𝑇) = 0.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝜆 ∈ F．那么𝜆是𝑇的特征值，当且仅当 det(𝜆𝐼−𝑇) = 0．"
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
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑆: 𝑊 → 𝑉 is an invertible linear map. Then",
          "zh": "设𝑇 ∈ L(𝑉) 且 𝑆: 𝑊 → 𝑉是可逆线性映射．那么"
        },
        {
          "t": "formula",
          "en": "det(𝑆^{−1} 𝑇𝑆) = det 𝑇.",
          "zh": "det(𝑆^{−1} 𝑇𝑆) = det 𝑇．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑆: 𝑊 → 𝑉 is an invertible linear map. Then det(𝑆^{−1} 𝑇𝑆) = det 𝑇.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且 𝑆: 𝑊 → 𝑉是可逆线性映射．那么 det(𝑆^{−1} 𝑇𝑆) = det 𝑇．"
    },
    {
      "id": "9.53",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.53",
      "name_en": "determinant of operator equals determinant of its matrix",
      "name_zh": "算子的行列式等于其矩阵的行列式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑒_1, …, 𝑒_𝑛 is a basis of 𝑉. Then",
          "zh": "设𝑇 ∈ L(𝑉) 且𝑒_1,..., 𝑒_𝑛是𝑉的基．那么"
        },
        {
          "t": "formula",
          "en": "det 𝑇 = det ℳ(𝑇,(𝑒_1, …, 𝑒_𝑛)).",
          "zh": "� � det 𝑇 = det M 𝑇,(𝑒_1,..., 𝑒_𝑛) ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑒_1, …, 𝑒_𝑛 is a basis of 𝑉. Then det 𝑇 = det ℳ(𝑇,(𝑒_1, …, 𝑒_𝑛)).",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝑒_1,..., 𝑒_𝑛是𝑉的基．那么 � � det 𝑇 = det M 𝑇,(𝑒_1,..., 𝑒_𝑛) ．"
    },
    {
      "id": "9.55",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.55",
      "name_en": "if 𝐅 = 𝐂, then determinant equals product of eigenvalues",
      "name_zh": "若 F = C，那么行列式等于特征值之积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then det 𝑇 equals the product of the eigenvalues of 𝑇, with each eigenvalue included as many times as its multiplicity.",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么 det 𝑇等于𝑇的特征值之积（其中每个特征值出现次数等于 其重数）．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Then det 𝑇 equals the product of the eigenvalues of 𝑇, with each eigenvalue included as many times as its multiplicity.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．那么 det 𝑇等于𝑇的特征值之积（其中每个特征值出现次数等于 其重数）．"
    },
    {
      "id": "9.56",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.56",
      "name_en": "determinant of transpose, dual, or adjoint (a) Suppose is a square matrix. Then det^t det.",
      "name_zh": "转置、对偶或伴随的行列式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(a) Suppose 𝐴 is a square matrix. Then det 𝐴^t = det 𝐴. (b) Suppose 𝑇 ∈ ℒ(𝑉). Then det 𝑇^′ = det 𝑇. (c) Suppose 𝑉 is an inner product space and 𝑇 ∈ ℒ(𝑉). Then",
          "zh": "(a) 设 𝐴是方阵．那么 det 𝐴^t = det 𝐴． (b) 设𝑇 ∈ L(𝑉)．那么 det 𝑇^′ = det 𝑇． (c) 设𝑉是内积空间且𝑇 ∈ L(𝑉)．那么"
        },
        {
          "t": "formula",
          "en": "det(𝑇∗) = det 𝑇.",
          "zh": "det(𝑇^∗) = det 𝑇．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "(a) Suppose 𝐴 is a square matrix. Then det 𝐴^t = det 𝐴. (b) Suppose 𝑇 ∈ ℒ(𝑉). Then det 𝑇^′ = det 𝑇. (c) Suppose 𝑉 is an inner product space and 𝑇 ∈ ℒ(𝑉). Then det(𝑇∗) = det 𝑇.",
      "statement_zh": "(a) 设 𝐴是方阵．那么 det 𝐴^t = det 𝐴． (b) 设𝑇 ∈ L(𝑉)．那么 det 𝑇^′ = det 𝑇． (c) 设𝑉是内积空间且𝑇 ∈ L(𝑉)．那么 det(𝑇^∗) = det 𝑇．"
    },
    {
      "id": "9.57",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.57",
      "name_en": "helpful results in evaluating determinants (a) If either two columns or two rows of a square matrix are equal, then the",
      "name_zh": "有助于计算行列式的若干结论",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "(a) If either two columns or two rows of a square matrix are equal, then the determinant of the matrix equals 0. (b) Suppose 𝐴 is a square matrix and 𝐵 is the matrix obtained from 𝐴 by swapping either two columns or two rows. Then det 𝐴 =−det 𝐵. (c) If one column or one row of a square matrix is multiplied by a scalar, then the value of the determinant is multiplied by the same scalar. (d) If a scalar multiple of one column of a square matrix is added to another column, then the value of the determinant is unchanged. (e) If a scalar multiple of one row of a square matrix is added to another row, then the value of the determinant is unchanged.",
          "zh": "(a) 如果一方阵中任意两行或两列相等，则该矩阵的行列式等于0． (b) 设 𝐴是方阵，且 𝐵是通过交换 𝐴中任意两行或两列所得的矩阵．则 det 𝐴 =−det 𝐵． (c) 若将方阵的某行或某列乘以一个标量，则其行列式的值也会被乘以同一个标量． (d) 若将一方阵中某列的标量倍加到该矩阵中另一列，则其行列式的值不变． (e) 若将一方阵中某行的标量倍加到该矩阵中另一行，则其行列式的值不变．"
        }
      ],
      "note": null,
      "statement_en": "(a) If either two columns or two rows of a square matrix are equal, then the determinant of the matrix equals 0. (b) Suppose 𝐴 is a square matrix and 𝐵 is the matrix obtained from 𝐴 by swapping either two columns or two rows. Then det 𝐴 =−det 𝐵. (c) If one column or one row of a square matrix is multiplied by a scalar, then the value of the determinant is multiplied by the same scalar. (d) If a scalar multiple of one column of a square matrix is added to another column, then the value of the determinant is unchanged. (e) If a scalar multiple of one row of a square matrix is added to another row, then the value of the determinant is unchanged.",
      "statement_zh": "(a) 如果一方阵中任意两行或两列相等，则该矩阵的行列式等于0． (b) 设 𝐴是方阵，且 𝐵是通过交换 𝐴中任意两行或两列所得的矩阵．则 det 𝐴 =−det 𝐵． (c) 若将方阵的某行或某列乘以一个标量，则其行列式的值也会被乘以同一个标量． (d) 若将一方阵中某列的标量倍加到该矩阵中另一列，则其行列式的值不变． (e) 若将一方阵中某行的标量倍加到该矩阵中另一行，则其行列式的值不变．"
    },
    {
      "id": "9.58",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.58",
      "name_en": "every unitary operator has determinant with absolute value 1",
      "name_zh": "每个幺正算子的行列式绝对值都为1",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is an inner product space and 𝑆 ∈ ℒ(𝑉) is a unitary operator. Then | det 𝑆| = 1.",
          "zh": "设𝑉是内积空间，𝑆 ∈ L(𝑉) 是幺正算子．那么 |det 𝑆| = 1．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is an inner product space and 𝑆 ∈ ℒ(𝑉) is a unitary operator. Then | det 𝑆| = 1.",
      "statement_zh": "设𝑉是内积空间，𝑆 ∈ L(𝑉) 是幺正算子．那么 |det 𝑆| = 1．"
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
          "en": "Suppose 𝑉 is an inner product space and 𝑇 ∈ ℒ(𝑉) is a positive operator. Then det 𝑇 ≥ 0.",
          "zh": "设𝑉是内积空间且𝑇 ∈ L(𝑉) 是正算子．那么 det 𝑇 ≥ 0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is an inner product space and 𝑇 ∈ ℒ(𝑉) is a positive operator. Then det 𝑇 ≥ 0.",
      "statement_zh": "设𝑉是内积空间且𝑇 ∈ L(𝑉) 是正算子．那么 det 𝑇 ≥ 0．"
    },
    {
      "id": "9.60",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.60",
      "name_en": "det 𝑇| = product of singular values of 𝑇",
      "name_zh": "det 𝑇| =(𝑇的奇异值之积)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 is an inner product space and 𝑇 ∈ ℒ(𝑉). Then | det 𝑇| =^√ det(𝑇∗𝑇) = product of singular values of 𝑇.",
          "zh": "设𝑉是内积空间且𝑇 ∈ L(𝑉)．那么 �"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "det 𝑇| = det(𝑇^∗ 𝑇) =(𝑇的奇异值之积)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 is an inner product space and 𝑇 ∈ ℒ(𝑉). Then | det 𝑇| =^√ det(𝑇∗𝑇) = product of singular values of 𝑇.",
      "statement_zh": "设𝑉是内积空间且𝑇 ∈ L(𝑉)．那么 � det 𝑇| = det(𝑇^∗ 𝑇) =(𝑇的奇异值之积)．"
    },
    {
      "id": "9.61",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.61",
      "name_en": "𝑇 changes volume by factor of | det 𝑇",
      "name_zh": "𝑇将体积变为其 |det 𝑇| 倍",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝐑^𝑛) and Ω ⊆ 𝐑^𝑛. Then volume 𝑇(Ω) = | det 𝑇|(volume Ω).",
          "zh": "设𝑇 ∈ L(R^𝑛) 且Ω ⊆ R^𝑛 ．那么 volume 𝑇(Ω) = |det 𝑇|(volume Ω)．"
        }
      ],
      "note": {
        "en": "For operators on finite-dimensional complex vector spaces,",
        "zh": "对于有限维复向量空间上的算子，我们现将其行列式与前面见过的一个多项式联系起来．"
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝐑^𝑛) and Ω ⊆ 𝐑^𝑛. Then volume 𝑇(Ω) = | det 𝑇|(volume Ω). For operators on finite-dimensional complex vector spaces,",
      "statement_zh": "设𝑇 ∈ L(R^𝑛) 且Ω ⊆ R^𝑛 ．那么 volume 𝑇(Ω) = |det 𝑇|(volume Ω)． 对于有限维复向量空间上的算子，我们现将其行列式与前面见过的一个多项式联系起来．"
    },
    {
      "id": "9.62",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.62",
      "name_en": "if 𝐅 = 𝐂, then characteristic polynomial of 𝑇 equals det(𝑧𝐼−𝑇)",
      "name_zh": "若 F = C，那么𝑇的特征多项式等于 det(𝑧𝐼−𝑇)",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 denote the distinct eigenvalues of 𝑇, and let 𝑑_1, …, 𝑑_𝑚 denote their multiplicities. Then",
          "zh": "设 F = C 且𝑇 ∈ L(𝑉)．令𝜆_1,..., 𝜆_𝑚表示𝑇的所有互异特征值，并令 𝑑_1,..., 𝑑_𝑚表示它 们的重数．那么"
        },
        {
          "t": "formula",
          "en": "det(𝑧𝐼−𝑇) =(𝑧−𝜆_1)^{𝑑1} ⋯(𝑧−𝜆_𝑚)^{𝑑𝑚}.",
          "zh": "det(𝑧𝐼−𝑇) =(𝑧−𝜆_1)^{𝑑1} · · ·(𝑧−𝜆_𝑚)^{𝑑𝑚} ．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐅 = 𝐂 and 𝑇 ∈ ℒ(𝑉). Let 𝜆_1, …, 𝜆_𝑚 denote the distinct eigenvalues of 𝑇, and let 𝑑_1, …, 𝑑_𝑚 denote their multiplicities. Then det(𝑧𝐼−𝑇) =(𝑧−𝜆_1)^{𝑑1} ⋯(𝑧−𝜆_𝑚)^{𝑑𝑚}.",
      "statement_zh": "设 F = C 且𝑇 ∈ L(𝑉)．令𝜆_1,..., 𝜆_𝑚表示𝑇的所有互异特征值，并令 𝑑_1,..., 𝑑_𝑚表示它 们的重数．那么 det(𝑧𝐼−𝑇) =(𝑧−𝜆_1)^{𝑑1} · · ·(𝑧−𝜆_𝑚)^{𝑑𝑚} ．"
    },
    {
      "id": "9.63",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.63",
      "name_en": "characteristic polynomial",
      "name_zh": "特征多项式（characteristic polynomial）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). The polynomial defined by",
          "zh": "设𝑇 ∈ L(𝑉)．定义为"
        },
        {
          "t": "formula",
          "en": "𝑧 ↦ det(𝑧𝐼−𝑇)",
          "zh": "𝑧 ↦→ det(𝑧𝐼−𝑇)",
          "eq": null
        },
        {
          "t": "p",
          "en": "is called the characteristic polynomial of 𝑇.",
          "zh": "的多项式被称为𝑇的特征多项式．"
        }
      ],
      "note": {
        "en": "The formula in 9.46 shows that the characteristic polynomial of an opera tor 𝑇 ∈ ℒ(𝑉) is a monic polynomial of degree dim 𝑉. The zeros in 𝐅 of the characteristic polynomial of 𝑇 are exactly the eigenvalues of 𝑇(by 9.51).",
        "zh": ""
      },
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). The polynomial defined by 𝑧 ↦ det(𝑧𝐼−𝑇) is called the characteristic polynomial of 𝑇. The formula in 9.46 shows that the characteristic polynomial of an opera tor 𝑇 ∈ ℒ(𝑉) is a monic polynomial of degree dim 𝑉. The zeros in 𝐅 of the characteristic polynomial of 𝑇 are exactly the eigenvalues of 𝑇(by 9.51).",
      "statement_zh": "设𝑇 ∈ L(𝑉)．定义为 𝑧 ↦→ det(𝑧𝐼−𝑇) 的多项式被称为𝑇的特征多项式．"
    },
    {
      "id": "9.64",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.64",
      "name_en": "Cayley–Hamilton theorem",
      "name_zh": "凯莱-哈密顿定理（Cayley-Hamilton theorem）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
          "zh": "设𝑇 ∈ L(𝑉) 且𝑞是𝑇的特征多项式．那么𝑞(𝑇) = 0．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉) and 𝑞 is the characteristic polynomial of 𝑇. Then 𝑞(𝑇) = 0.",
      "statement_zh": "设𝑇 ∈ L(𝑉) 且𝑞是𝑇的特征多项式．那么𝑞(𝑇) = 0．"
    },
    {
      "id": "9.65",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.65",
      "name_en": "characteristic polynomial, trace, and determinant",
      "name_zh": "特征多项式、迹和行列式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑇 ∈ ℒ(𝑉). Let 𝑛 = dim 𝑉. Then the characteristic polynomial of 𝑇 can be written as",
          "zh": "设𝑇 ∈ L(𝑉)．令𝑛 = dim 𝑉．那么𝑇的特征多项式可写为"
        },
        {
          "t": "formula",
          "en": "𝑧^𝑛 −(tr 𝑇)𝑧^{𝑛−1} + ⋯ +(−1)^𝑛(det 𝑇).",
          "zh": "𝑧^𝑛 −(tr 𝑇)𝑧^{𝑛−1} + · · · +(−1)^𝑛(det 𝑇)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑇 ∈ ℒ(𝑉). Let 𝑛 = dim 𝑉. Then the characteristic polynomial of 𝑇 can be written as 𝑧^𝑛 −(tr 𝑇)𝑧^{𝑛−1} + ⋯ +(−1)^𝑛(det 𝑇).",
      "statement_zh": "设𝑇 ∈ L(𝑉)．令𝑛 = dim 𝑉．那么𝑇的特征多项式可写为 𝑧^𝑛 −(tr 𝑇)𝑧^{𝑛−1} + · · · +(−1)^𝑛(det 𝑇)．"
    },
    {
      "id": "9.66",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.66",
      "name_en": "Hadamard’s inequality",
      "name_zh": "阿达马不等式（Hadamard’s inequality）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝐴 is an 𝑛-by-𝑛 matrix. Let 𝑣_1, …, 𝑣_𝑛 denote the columns of 𝐴. Then",
          "zh": "设 𝐴是𝑛 × 𝑛矩阵．令𝑣_1,..., 𝑣_𝑛表示 𝐴的各列．那么"
        },
        {
          "t": "formula",
          "en": "det 𝐴| ≤ ∏^𝑛_{𝑘=1}‖𝑣_𝑘 ‖.",
          "zh": "∏^𝑛 det 𝐴| ≤ ∥𝑣_𝑘 ∥．^{𝑘=1}",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝐴 is an 𝑛-by-𝑛 matrix. Let 𝑣_1, …, 𝑣_𝑛 denote the columns of 𝐴. Then det 𝐴| ≤ ∏^𝑛_{𝑘=1}‖𝑣_𝑘 ‖.",
      "statement_zh": "设 𝐴是𝑛 × 𝑛矩阵．令𝑣_1,..., 𝑣_𝑛表示 𝐴的各列．那么 ∏^𝑛 det 𝐴| ≤ ∥𝑣_𝑘 ∥．^{𝑘=1}"
    },
    {
      "id": "9.67",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.67",
      "name_en": "determinant of Vandermonde matrix",
      "name_zh": "范德蒙德矩阵的行列式",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑛 > 1 and 𝛽_1, …, 𝛽_𝑛 ∈ 𝐅. Then",
          "zh": "设𝑛 > 1及 𝛽_1,..., 𝛽_𝑛 ∈ F．那么"
        },
        {
          "t": "formula",
          "en": "1 𝛽_1 𝛽^2_1 ⋯ 𝛽^{𝑛−1}_1 ⎛⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜ ⎞⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟ 1 𝛽_2 𝛽^2_2 ⋯ 𝛽^{𝑛−1}_2 det = ∏(𝛽_𝑘 −𝛽_𝑗). ⋱_{1≤𝑗<𝑘≤𝑛} ⎝ 1 𝛽_𝑛 𝛽^2_𝑛 ⋯ 𝛽^{𝑛−1}_𝑛 ⎠",
          "zh": "1 𝛽_1 𝛽^2 · · · 𝛽^{𝑛−1} ������������^{11} ������������ 1 𝛽_2 𝛽^2_2 · · · 𝛽^{𝑛−1}_2 ∏ det... =_{1≤𝑗<𝑘≤𝑛}(𝛽_𝑘 −𝛽_𝑗)． � 1 𝛽_𝑛 𝛽^2_𝑛 · · · 𝛽^{𝑛−1}_𝑛 �",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑛 > 1 and 𝛽_1, …, 𝛽_𝑛 ∈ 𝐅. Then 1 𝛽_1 𝛽^2_1 ⋯ 𝛽^{𝑛−1}_1 ⎛⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜⎜ ⎞⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟⎟ 1 𝛽_2 𝛽^2_2 ⋯ 𝛽^{𝑛−1}_2 det = ∏(𝛽_𝑘 −𝛽_𝑗). ⋱_{1≤𝑗<𝑘≤𝑛} ⎝ 1 𝛽_𝑛 𝛽^2_𝑛 ⋯ 𝛽^{𝑛−1}_𝑛 ⎠",
      "statement_zh": "设𝑛 > 1及 𝛽_1,..., 𝛽_𝑛 ∈ F．那么 1 𝛽_1 𝛽^2 · · · 𝛽^{𝑛−1} ������������^{11} ������������ 1 𝛽_2 𝛽^2_2 · · · 𝛽^{𝑛−1}_2 ∏ det... =_{1≤𝑗<𝑘≤𝑛}(𝛽_𝑘 −𝛽_𝑗)． � 1 𝛽_𝑛 𝛽^2_𝑛 · · · 𝛽^{𝑛−1}_𝑛 �"
    },
    {
      "id": "9.68",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.68",
      "name_en": "bilinear functional on 𝑉 × 𝑊, the vector space ℬ(𝑉, 𝑊)",
      "name_zh": "𝑉 × 𝑊上的双线性泛函（bilinear functional）、向量空间 B(𝑉,𝑊)",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "A bilinear functional on 𝑉 × 𝑊 is a function 𝛽: 𝑉 × 𝑊 → 𝐅 such that 𝑣 ↦ 𝛽(𝑣, 𝑤) is a linear functional on 𝑉 for each 𝑤 ∈ 𝑊 and 𝑤 ↦ 𝛽(𝑣, 𝑤) is a linear functional on 𝑊 for each 𝑣 ∈ 𝑉.",
          "zh": "𝑉 × 𝑊上的双线性泛函是函数 𝛽: 𝑉 × 𝑊 → F，使得：对于任一 𝑤 ∈ 𝑊，𝑣 ↦→ 𝛽(𝑣, 𝑤) 都是𝑉上的线性泛函；对于任一𝑣 ∈ 𝑉，𝑤 ↦→ 𝛽(𝑣, 𝑤) 都是𝑊上的线性泛函． 𝑉 × 𝑊上的双线性泛函构成的向量空间，记为 B(𝑉,𝑊)．"
        },
        {
          "t": "bullet",
          "en": "The vector space of bilinear functionals on 𝑉 × 𝑊 is denoted by ℬ(𝑉, 𝑊).",
          "zh": ""
        }
      ],
      "note": {
        "en": "If 𝑊 = 𝑉, then a bilinear functional on 𝑉 × 𝑊 is a bilinear form; see 9.1. The operations of addition and scalar multiplication on ℬ(𝑉, 𝑊) are defined to be the usual operations of addition and scalar multiplication of functions. As you can verify, these operations make ℬ(𝑉, 𝑊) into a vector space whose additive identity is the zero function from 𝑉 × 𝑊 to 𝐅.",
        "zh": "如果𝑊 = 𝑉，那么𝑉 × 𝑊上的双线性泛函就是双线性型了（见9.1）． B(𝑉,𝑊) 上的加法和数乘运算，定义为函数通常的加法和标量乘法．你可以验证，这些运 算使 B(𝑉,𝑊) 成为向量空间，其加法恒等元是从𝑉 × 𝑊到 F 的零函数．"
      },
      "statement_en": "A bilinear functional on 𝑉 × 𝑊 is a function 𝛽: 𝑉 × 𝑊 → 𝐅 such that 𝑣 ↦ 𝛽(𝑣, 𝑤) is a linear functional on 𝑉 for each 𝑤 ∈ 𝑊 and 𝑤 ↦ 𝛽(𝑣, 𝑤) is a linear functional on 𝑊 for each 𝑣 ∈ 𝑉. The vector space of bilinear functionals on 𝑉 × 𝑊 is denoted by ℬ(𝑉, 𝑊). If 𝑊 = 𝑉, then a bilinear functional on 𝑉 × 𝑊 is a bilinear form; see 9.1. The operations of addition and scalar multiplication on ℬ(𝑉, 𝑊) are defined to be the usual operations of addition and scalar multiplication of functions. As you can verify, these operations make ℬ(𝑉, 𝑊) into a vector space whose additive identity is the zero function from 𝑉 × 𝑊 to 𝐅.",
      "statement_zh": "𝑉 × 𝑊上的双线性泛函是函数 𝛽: 𝑉 × 𝑊 → F，使得：对于任一 𝑤 ∈ 𝑊，𝑣 ↦→ 𝛽(𝑣, 𝑤) 都是𝑉上的线性泛函；对于任一𝑣 ∈ 𝑉，𝑤 ↦→ 𝛽(𝑣, 𝑤) 都是𝑊上的线性泛函． 𝑉 × 𝑊上的双线性泛函构成的向量空间，记为 B(𝑉,𝑊)． 如果𝑊 = 𝑉，那么𝑉 × 𝑊上的双线性泛函就是双线性型了（见9.1）． B(𝑉,𝑊) 上的加法和数乘运算，定义为函数通常的加法和标量乘法．你可以验证，这些运 算使 B(𝑉,𝑊) 成为向量空间，其加法恒等元是从𝑉 × 𝑊到 F 的零函数．"
    },
    {
      "id": "9.70",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.70",
      "name_en": "dimension of the vector space of bilinear functionals",
      "name_zh": "双线性泛函构成的向量空间的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "dim ℬ(𝑉, 𝑊) =(dim 𝑉)(dim 𝑊).",
          "zh": "dim B(𝑉,𝑊) =(dim 𝑉)(dim 𝑊)．"
        }
      ],
      "note": null,
      "statement_en": "dim ℬ(𝑉, 𝑊) =(dim 𝑉)(dim 𝑊).",
      "statement_zh": "dim B(𝑉,𝑊) =(dim 𝑉)(dim 𝑊)．"
    },
    {
      "id": "9.71",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.71",
      "name_en": "tensor product, 𝑉 ⊗ 𝑊, 𝑣 ⊗ 𝑤",
      "name_zh": "张量积（tensor product）、𝑉 ⊗ 𝑊、𝑣 ⊗ 𝑤",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "The tensor product 𝑉 ⊗ 𝑊 is defined to be ℬ(𝑉^′, 𝑊^′).",
          "zh": "张量积𝑉 ⊗ 𝑊定义为 B(𝑉^′,𝑊^′)． 对于𝑣 ∈ 𝑉和𝑤 ∈ 𝑊，张量积𝑣 ⊗ 𝑤是𝑉 ⊗ 𝑊的元素^5，定义为"
        },
        {
          "t": "bullet",
          "en": "For 𝑣 ∈ 𝑉 and 𝑤 ∈ 𝑊, the tensor product 𝑣 ⊗ 𝑤 is the element of 𝑉 ⊗ 𝑊 defined by",
          "zh": "(𝑣 ⊗ 𝑤)(𝜑, 𝜏) = 𝜑(𝑣)𝜏(𝑤)"
        },
        {
          "t": "formula",
          "en": "(𝑣 ⊗ 𝑤)(𝜑, 𝜏) = 𝜑(𝑣)𝜏(𝑤)",
          "zh": "对所有(𝜑, 𝜏) ∈ 𝑉^′ × 𝑊^′成立．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all(𝜑, 𝜏) ∈ 𝑉^′ × 𝑊^′.",
          "zh": ""
        }
      ],
      "note": {
        "en": "We can quickly prove that the definition of 𝑉⊗𝑊 gives it the desired dimension",
        "zh": "注意，这里并没有说𝑉 ⊗ 𝑊的元素都可以写成𝑣 ⊗ 𝑤的形式．"
      },
      "statement_en": "The tensor product 𝑉 ⊗ 𝑊 is defined to be ℬ(𝑉^′, 𝑊^′). For 𝑣 ∈ 𝑉 and 𝑤 ∈ 𝑊, the tensor product 𝑣 ⊗ 𝑤 is the element of 𝑉 ⊗ 𝑊 defined by (𝑣 ⊗ 𝑤)(𝜑, 𝜏) = 𝜑(𝑣)𝜏(𝑤) for all(𝜑, 𝜏) ∈ 𝑉^′ × 𝑊^′. We can quickly prove that the definition of 𝑉⊗𝑊 gives it the desired dimension",
      "statement_zh": "张量积𝑉 ⊗ 𝑊定义为 B(𝑉^′,𝑊^′)． 对于𝑣 ∈ 𝑉和𝑤 ∈ 𝑊，张量积𝑣 ⊗ 𝑤是𝑉 ⊗ 𝑊的元素^5，定义为 (𝑣 ⊗ 𝑤)(𝜑, 𝜏) = 𝜑(𝑣)𝜏(𝑤) 对所有(𝜑, 𝜏) ∈ 𝑉^′ × 𝑊^′成立． 注意，这里并没有说𝑉 ⊗ 𝑊的元素都可以写成𝑣 ⊗ 𝑤的形式．"
    },
    {
      "id": "9.72",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.72",
      "name_en": "dimension of the tensor product of two vector spaces",
      "name_zh": "两向量空间的张量积的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "dim(𝑉 ⊗ 𝑊) =(dim 𝑉)(dim 𝑊).",
          "zh": "dim(𝑉 ⊗ 𝑊) =(dim 𝑉)(dim 𝑊)．"
        }
      ],
      "note": null,
      "statement_en": "dim(𝑉 ⊗ 𝑊) =(dim 𝑉)(dim 𝑊).",
      "statement_zh": "dim(𝑉 ⊗ 𝑊) =(dim 𝑉)(dim 𝑊)．"
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
          "en": "Suppose 𝑣, 𝑣_1, 𝑣_2 ∈ 𝑉 and 𝑤, 𝑤_1, 𝑤_2 ∈ 𝑊 and 𝜆 ∈ 𝐅. Then (𝑣_1 + 𝑣_2) ⊗ 𝑤 = 𝑣_1 ⊗ 𝑤 + 𝑣_2 ⊗ 𝑤 and 𝑣 ⊗(𝑤_1 + 𝑤_2) = 𝑣 ⊗ 𝑤_1 + 𝑣 ⊗ 𝑤_2 and",
          "zh": "设𝑣, 𝑣_1, 𝑣_2 ∈ 𝑉，𝑤, 𝑤_1, 𝑤_2 ∈ 𝑊，𝜆 ∈ F．那么就有"
        },
        {
          "t": "formula",
          "en": "𝜆(𝑣 ⊗ 𝑤) =(𝜆𝑣) ⊗ 𝑤 = 𝑣 ⊗(𝜆𝑤).",
          "zh": "(𝑣_1 + 𝑣_2) ⊗ 𝑤 = 𝑣_1 ⊗ 𝑤 + 𝑣_2 ⊗ 𝑤和 𝑣 ⊗(𝑤_1 + 𝑤_2) = 𝑣 ⊗ 𝑤_1 + 𝑣 ⊗ 𝑤_2",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "以及"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "𝜆(𝑣 ⊗ 𝑤) =(𝜆𝑣) ⊗ 𝑤 = 𝑣 ⊗(𝜆𝑤)．",
          "eq": null
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑣, 𝑣_1, 𝑣_2 ∈ 𝑉 and 𝑤, 𝑤_1, 𝑤_2 ∈ 𝑊 and 𝜆 ∈ 𝐅. Then (𝑣_1 + 𝑣_2) ⊗ 𝑤 = 𝑣_1 ⊗ 𝑤 + 𝑣_2 ⊗ 𝑤 and 𝑣 ⊗(𝑤_1 + 𝑤_2) = 𝑣 ⊗ 𝑤_1 + 𝑣 ⊗ 𝑤_2 and 𝜆(𝑣 ⊗ 𝑤) =(𝜆𝑣) ⊗ 𝑤 = 𝑣 ⊗(𝜆𝑤).",
      "statement_zh": "设𝑣, 𝑣_1, 𝑣_2 ∈ 𝑉，𝑤, 𝑤_1, 𝑤_2 ∈ 𝑊，𝜆 ∈ F．那么就有 (𝑣_1 + 𝑣_2) ⊗ 𝑤 = 𝑣_1 ⊗ 𝑤 + 𝑣_2 ⊗ 𝑤和 𝑣 ⊗(𝑤_1 + 𝑤_2) = 𝑣 ⊗ 𝑤_1 + 𝑣 ⊗ 𝑤_2 以及 𝜆(𝑣 ⊗ 𝑤) =(𝜆𝑣) ⊗ 𝑤 = 𝑣 ⊗(𝜆𝑤)．"
    },
    {
      "id": "9.74",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.74",
      "name_en": "basis of 𝑉 ⊗ 𝑊",
      "name_zh": "𝑉 ⊗ 𝑊的基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑒_1, …, 𝑒_𝑚 is a list of vectors in 𝑉 and 𝑓_1, …, 𝑓_𝑛 is a list of vectors in 𝑊. (a) If 𝑒_1, …, 𝑒_𝑚 and 𝑓_1, …, 𝑓_𝑛 are both linearly independent lists, then",
          "zh": "设𝑒_1,..., 𝑒_𝑚是𝑉中的一组向量， 𝑓_1,..., 𝑓_𝑛是𝑊中的一组向量． (a) 如果𝑒_1,..., 𝑒_𝑚和 𝑓_1,..., 𝑓_𝑛都是线性无关组，那么"
        },
        {
          "t": "formula",
          "en": "{𝑒_𝑗 ⊗ 𝑓_𝑘}_{𝑗=1,…,𝑚;𝑘=1,…,𝑛}",
          "zh": "� � 𝑒_𝑗 ⊗ 𝑓_{𝑘𝑗=1,...,𝑚;𝑘=1,...,𝑛}",
          "eq": null
        },
        {
          "t": "p",
          "en": "is a linearly independent list in 𝑉 ⊗ 𝑊. (b) If 𝑒_1, …, 𝑒_𝑚 is a basis of 𝑉 and 𝑓_1, …, 𝑓_𝑛 is a basis of 𝑊, then the list {𝑒_𝑗 ⊗ 𝑓_𝑘}_{𝑗=1,…,𝑚;𝑘=1,…,𝑛} is a basis of 𝑉 ⊗ 𝑊.",
          "zh": "是𝑉 ⊗ 𝑊中的线性无关组．"
        },
        {
          "t": "formula",
          "en": "",
          "zh": "� �",
          "eq": null
        },
        {
          "t": "p",
          "en": "",
          "zh": "(b) 如果 𝑒_1,..., 𝑒_𝑚是𝑉的基， 𝑓_1,..., 𝑓_𝑛是𝑊的基，那么组 𝑒_𝑗 ⊗ 𝑓_{𝑘𝑗=1,...,𝑚;𝑘=1,...,𝑛}是 𝑉 ⊗ 𝑊的基．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑒_1, …, 𝑒_𝑚 is a list of vectors in 𝑉 and 𝑓_1, …, 𝑓_𝑛 is a list of vectors in 𝑊. (a) If 𝑒_1, …, 𝑒_𝑚 and 𝑓_1, …, 𝑓_𝑛 are both linearly independent lists, then {𝑒_𝑗 ⊗ 𝑓_𝑘}_{𝑗=1,…,𝑚;𝑘=1,…,𝑛} is a linearly independent list in 𝑉 ⊗ 𝑊. (b) If 𝑒_1, …, 𝑒_𝑚 is a basis of 𝑉 and 𝑓_1, …, 𝑓_𝑛 is a basis of 𝑊, then the list {𝑒_𝑗 ⊗ 𝑓_𝑘}_{𝑗=1,…,𝑚;𝑘=1,…,𝑛} is a basis of 𝑉 ⊗ 𝑊.",
      "statement_zh": "设𝑒_1,..., 𝑒_𝑚是𝑉中的一组向量， 𝑓_1,..., 𝑓_𝑛是𝑊中的一组向量． (a) 如果𝑒_1,..., 𝑒_𝑚和 𝑓_1,..., 𝑓_𝑛都是线性无关组，那么 � � 𝑒_𝑗 ⊗ 𝑓_{𝑘𝑗=1,...,𝑚;𝑘=1,...,𝑛} 是𝑉 ⊗ 𝑊中的线性无关组． � � (b) 如果 𝑒_1,..., 𝑒_𝑚是𝑉的基， 𝑓_1,..., 𝑓_𝑛是𝑊的基，那么组 𝑒_𝑗 ⊗ 𝑓_{𝑘𝑗=1,...,𝑚;𝑘=1,...,𝑛}是 𝑉 ⊗ 𝑊的基．"
    },
    {
      "id": "9.77",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.77",
      "name_en": "bilinear map",
      "name_zh": "双线性映射（bilinear map）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "A bilinear map from 𝑉 × 𝑊 to a vector space 𝑈 is a function Γ: 𝑉 × 𝑊 → 𝑈 such that 𝑣 ↦ Γ(𝑣, 𝑤) is a linear map from 𝑉 to 𝑈 for each 𝑤 ∈ 𝑊 and 𝑤 ↦ Γ(𝑣, 𝑤) is a linear map from 𝑊 to 𝑈 for each 𝑣 ∈ 𝑉.",
          "zh": "从𝑉×𝑊到向量空间𝑈的双线性映射是这样一个函数Γ: 𝑉×𝑊 → 𝑈，其使得𝑣 ↦→ Γ(𝑣, 𝑤) 对任一 𝑤 ∈ 𝑊都是从𝑉到𝑈的线性映射，𝑤 ↦→ Γ(𝑣, 𝑤) 对任一𝑣 ∈ 𝑉都是从𝑊到𝑈的 线性映射．"
        }
      ],
      "note": null,
      "statement_en": "A bilinear map from 𝑉 × 𝑊 to a vector space 𝑈 is a function Γ: 𝑉 × 𝑊 → 𝑈 such that 𝑣 ↦ Γ(𝑣, 𝑤) is a linear map from 𝑉 to 𝑈 for each 𝑤 ∈ 𝑊 and 𝑤 ↦ Γ(𝑣, 𝑤) is a linear map from 𝑊 to 𝑈 for each 𝑣 ∈ 𝑉.",
      "statement_zh": "从𝑉×𝑊到向量空间𝑈的双线性映射是这样一个函数Γ: 𝑉×𝑊 → 𝑈，其使得𝑣 ↦→ Γ(𝑣, 𝑤) 对任一 𝑤 ∈ 𝑊都是从𝑉到𝑈的线性映射，𝑤 ↦→ Γ(𝑣, 𝑤) 对任一𝑣 ∈ 𝑉都是从𝑊到𝑈的 线性映射．"
    },
    {
      "id": "9.79",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.79",
      "name_en": "converting bilinear maps to linear maps",
      "name_zh": "化双线性映射为线性映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a vector space. (a) Suppose Γ: 𝑉 × 𝑊 → 𝑈 is a bilinear map. Then there exists a unique linear map Γ̂: 𝑉 ⊗ 𝑊 → 𝑈 such that",
          "zh": "设𝑈是向量空间． (a) 设 Γ: 𝑉 × 𝑊 → 𝑈是双线性映射，那么存在唯一的线性映射 Γˆ: 𝑉 ⊗ 𝑊 → 𝑈使得"
        },
        {
          "t": "formula",
          "en": "Γ̂(𝑣 ⊗ 𝑤) = Γ(𝑣, 𝑤)",
          "zh": "Γˆ(𝑣 ⊗ 𝑤) = Γ(𝑣, 𝑤)",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all(𝑣, 𝑤) ∈ 𝑉 × 𝑊. (b) Conversely, suppose 𝑇: 𝑉 ⊗ 𝑊 → 𝑈 is a linear map. Then there exists a unique bilinear map 𝑇^# : 𝑉 × 𝑊 → 𝑈 such that",
          "zh": "对所有(𝑣, 𝑤) ∈ 𝑉 × 𝑊成立． (b) 反之，设𝑇: 𝑉 ⊗ 𝑊 → 𝑈是线性映射，那么存在唯一的双线性映射𝑇^#: 𝑉 × 𝑊 → 𝑈 使得"
        },
        {
          "t": "formula",
          "en": "𝑇^#(𝑣, 𝑤) = 𝑇(𝑣 ⊗ 𝑤)",
          "zh": "𝑇^#(𝑣, 𝑤) = 𝑇(𝑣 ⊗ 𝑤)",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all(𝑣, 𝑤) ∈ 𝑉 × 𝑊.",
          "zh": "对所有(𝑣, 𝑤) ∈ 𝑉 × 𝑊成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑈 is a vector space. (a) Suppose Γ: 𝑉 × 𝑊 → 𝑈 is a bilinear map. Then there exists a unique linear map Γ̂: 𝑉 ⊗ 𝑊 → 𝑈 such that Γ̂(𝑣 ⊗ 𝑤) = Γ(𝑣, 𝑤) for all(𝑣, 𝑤) ∈ 𝑉 × 𝑊. (b) Conversely, suppose 𝑇: 𝑉 ⊗ 𝑊 → 𝑈 is a linear map. Then there exists a unique bilinear map 𝑇^# : 𝑉 × 𝑊 → 𝑈 such that 𝑇^#(𝑣, 𝑤) = 𝑇(𝑣 ⊗ 𝑤) for all(𝑣, 𝑤) ∈ 𝑉 × 𝑊.",
      "statement_zh": "设𝑈是向量空间． (a) 设 Γ: 𝑉 × 𝑊 → 𝑈是双线性映射，那么存在唯一的线性映射 Γˆ: 𝑉 ⊗ 𝑊 → 𝑈使得 Γˆ(𝑣 ⊗ 𝑤) = Γ(𝑣, 𝑤) 对所有(𝑣, 𝑤) ∈ 𝑉 × 𝑊成立． (b) 反之，设𝑇: 𝑉 ⊗ 𝑊 → 𝑈是线性映射，那么存在唯一的双线性映射𝑇^#: 𝑉 × 𝑊 → 𝑈 使得 𝑇^#(𝑣, 𝑤) = 𝑇(𝑣 ⊗ 𝑤) 对所有(𝑣, 𝑤) ∈ 𝑉 × 𝑊成立．"
    },
    {
      "id": "9.80",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.80",
      "name_en": "inner product on tensor product of two inner product spaces",
      "name_zh": "两内积空间所成张量积上的内积",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are inner product spaces. Then there is a unique inner product on 𝑉 ⊗ 𝑊 such that",
          "zh": "设𝑉和𝑊是内积空间．那么，𝑉 ⊗ 𝑊上存在唯一一种内积使得"
        },
        {
          "t": "formula",
          "en": "⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩",
          "zh": "⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩ ⟨𝑤, 𝑥⟩",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑣, 𝑢 ∈ 𝑉 and 𝑤, 𝑥 ∈ 𝑊.",
          "zh": "对所有𝑣, 𝑢 ∈ 𝑉和𝑤, 𝑥 ∈ 𝑊成立．"
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are inner product spaces. Then there is a unique inner product on 𝑉 ⊗ 𝑊 such that ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩ for all 𝑣, 𝑢 ∈ 𝑉 and 𝑤, 𝑥 ∈ 𝑊.",
      "statement_zh": "设𝑉和𝑊是内积空间．那么，𝑉 ⊗ 𝑊上存在唯一一种内积使得 ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩ ⟨𝑤, 𝑥⟩ 对所有𝑣, 𝑢 ∈ 𝑉和𝑤, 𝑥 ∈ 𝑊成立．"
    },
    {
      "id": "9.82",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.82",
      "name_en": "inner product on tensor product of two inner product spaces",
      "name_zh": "inner product on tensor product of two inner product spaces",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are inner product spaces. The inner product on 𝑉 ⊗ 𝑊 is the unique function ⟨⋅, ⋅⟩ from(𝑉 ⊗ 𝑊) ×(𝑉 ⊗ 𝑊) to 𝐅 such that",
          "zh": ""
        },
        {
          "t": "formula",
          "en": "⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩",
          "zh": "",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all 𝑣, 𝑢 ∈ 𝑉 and 𝑤, 𝑥 ∈ 𝑊.",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "Suppose 𝑉 and 𝑊 are inner product spaces. The inner product on 𝑉 ⊗ 𝑊 is the unique function ⟨⋅, ⋅⟩ from(𝑉 ⊗ 𝑊) ×(𝑉 ⊗ 𝑊) to 𝐅 such that ⟨𝑣 ⊗ 𝑤, 𝑢 ⊗ 𝑥⟩ = ⟨𝑣, 𝑢⟩⟨𝑤, 𝑥⟩ for all 𝑣, 𝑢 ∈ 𝑉 and 𝑤, 𝑥 ∈ 𝑊.",
      "statement_zh": ""
    },
    {
      "id": "9.83",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.83",
      "name_en": "orthonormal basis of 𝑉 ⊗ 𝑊",
      "name_zh": "𝑉 ⊗ 𝑊的规范正交基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑉 and 𝑊 are inner product spaces, and 𝑒_1, …, 𝑒_𝑚 is an orthonormal basis of 𝑉 and 𝑓_1, …, 𝑓_𝑛 is an orthonormal basis of 𝑊. Then",
          "zh": "设𝑉和𝑊是内积空间，且𝑒_1,..., 𝑒_𝑚是𝑉的一个规范正交基，𝑓_1,..., 𝑓_𝑚是𝑊的一个规 范正交基．那么"
        },
        {
          "t": "formula",
          "en": "{𝑒_𝑗 ⊗ 𝑓_𝑘}_{𝑗=1,…,𝑚;𝑘=1,…,𝑛}",
          "zh": "� � 𝑒_𝑗 ⊗ 𝑓_{𝑘𝑗=1,...,𝑚;𝑘=1,...,𝑛}",
          "eq": null
        },
        {
          "t": "p",
          "en": "is an orthonormal basis of 𝑉 ⊗ 𝑊.",
          "zh": "是𝑉 ⊗ 𝑊的一个规范正交基．"
        }
      ],
      "note": {
        "en": "",
        "zh": "换句话说，不要误以为9.83只适用于9.80中定义内积时所用的那一对规范正交基．"
      },
      "statement_en": "Suppose 𝑉 and 𝑊 are inner product spaces, and 𝑒_1, …, 𝑒_𝑚 is an orthonormal basis of 𝑉 and 𝑓_1, …, 𝑓_𝑛 is an orthonormal basis of 𝑊. Then {𝑒_𝑗 ⊗ 𝑓_𝑘}_{𝑗=1,…,𝑚;𝑘=1,…,𝑛} is an orthonormal basis of 𝑉 ⊗ 𝑊.",
      "statement_zh": "设𝑉和𝑊是内积空间，且𝑒_1,..., 𝑒_𝑚是𝑉的一个规范正交基，𝑓_1,..., 𝑓_𝑚是𝑊的一个规 范正交基．那么 � � 𝑒_𝑗 ⊗ 𝑓_{𝑘𝑗=1,...,𝑚;𝑘=1,...,𝑛} 是𝑉 ⊗ 𝑊的一个规范正交基． 换句话说，不要误以为9.83只适用于9.80中定义内积时所用的那一对规范正交基．"
    },
    {
      "id": "9.84",
      "kind": "notation",
      "chapter": "ch9",
      "number": "9.84",
      "name_en": "𝑉_1, …, 𝑉_𝑚",
      "name_zh": "𝑉_1,...,𝑉_𝑚",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "For the rest of this subsection, 𝑚 denotes an integer greater than 1 and 𝑉_1, …, 𝑉_𝑚 denote finite-dimensional vector spaces.",
          "zh": "本小节剩余部分中，𝑚表示大于1的整数，而𝑉_1,...,𝑉_𝑚都表示有限维向量空间．"
        }
      ],
      "note": {
        "en": "The notion of an 𝑚-linear functional, which we are about to define, generalizes the notion of a bilinear functional(see 9.68). Recall that the use of the word “functional” indicates that we are mapping into the scalar field 𝐅. Recall also that the terminology “𝑚-linear form” is used in the special case 𝑉_1 = ⋯ = 𝑉_𝑚(see",
        "zh": "我们将要定义𝑚重线性泛函，这一概念推广了双线性泛函（见9.68）．回顾一下，“泛函” 一词指的是映射到标量域 F，以及，“𝑚重线性型”这一术语用于特殊情形𝑉_1 = · · · = 𝑉_𝑚 （见"
      },
      "statement_en": "For the rest of this subsection, 𝑚 denotes an integer greater than 1 and 𝑉_1, …, 𝑉_𝑚 denote finite-dimensional vector spaces. The notion of an 𝑚-linear functional, which we are about to define, generalizes the notion of a bilinear functional(see 9.68). Recall that the use of the word “functional” indicates that we are mapping into the scalar field 𝐅. Recall also that the terminology “𝑚-linear form” is used in the special case 𝑉_1 = ⋯ = 𝑉_𝑚(see",
      "statement_zh": "本小节剩余部分中，𝑚表示大于1的整数，而𝑉_1,...,𝑉_𝑚都表示有限维向量空间． 我们将要定义𝑚重线性泛函，这一概念推广了双线性泛函（见9.68）．回顾一下，“泛函” 一词指的是映射到标量域 F，以及，“𝑚重线性型”这一术语用于特殊情形𝑉_1 = · · · = 𝑉_𝑚 （见"
    },
    {
      "id": "9.85",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.85",
      "name_en": "𝑚-linear functional, the vector space ℬ(𝑉_1, …, 𝑉_𝑚)",
      "name_zh": "𝑚重线性泛函（𝑚-linear functional）、向量空间 B(𝑉_1,...,𝑉_𝑚)",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "An 𝑚-linear functional on 𝑉_1 × ⋯ × 𝑉_𝑚 is a function 𝛽: 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝐅 that is a linear functional in each slot when the other slots are held fixed.",
          "zh": "𝑉_1 × · · · × 𝑉_𝑚上的𝑚重线性泛函是满足如下性质的函数 𝛽: 𝑉_1 × · · · × 𝑉_𝑚 → F： 取 𝛽(·,..., ·) 中任一位置并将该位置之外的向量固定，则 𝛽都将成为该位置上的线性 泛函． 𝑉_1 × · · · × 𝑉_𝑚上的𝑚重线性泛函构成的向量空间，记为 B(𝑉_1,...,𝑉_𝑚)．"
        },
        {
          "t": "bullet",
          "en": "The vector space of 𝑚-linear functionals on 𝑉_1 × ⋯ × 𝑉_𝑚 is denoted by ℬ(𝑉_1, …, 𝑉_𝑚).",
          "zh": ""
        }
      ],
      "note": null,
      "statement_en": "An 𝑚-linear functional on 𝑉_1 × ⋯ × 𝑉_𝑚 is a function 𝛽: 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝐅 that is a linear functional in each slot when the other slots are held fixed. The vector space of 𝑚-linear functionals on 𝑉_1 × ⋯ × 𝑉_𝑚 is denoted by ℬ(𝑉_1, …, 𝑉_𝑚).",
      "statement_zh": "𝑉_1 × · · · × 𝑉_𝑚上的𝑚重线性泛函是满足如下性质的函数 𝛽: 𝑉_1 × · · · × 𝑉_𝑚 → F： 取 𝛽(·,..., ·) 中任一位置并将该位置之外的向量固定，则 𝛽都将成为该位置上的线性 泛函． 𝑉_1 × · · · × 𝑉_𝑚上的𝑚重线性泛函构成的向量空间，记为 B(𝑉_1,...,𝑉_𝑚)．"
    },
    {
      "id": "9.87",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.87",
      "name_en": "dimension of the vector space of 𝑚-linear functionals",
      "name_zh": "𝑚重线性泛函所成向量空间的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "dim ℬ(𝑉_1, …, 𝑉_𝑚) =(dim 𝑉_1) ⋯(dim 𝑉_𝑚).",
          "zh": "dim B(𝑉_1,...,𝑉_𝑚) =(dim 𝑉_1) × · · · ×(dim 𝑉_𝑚)．"
        }
      ],
      "note": null,
      "statement_en": "dim ℬ(𝑉_1, …, 𝑉_𝑚) =(dim 𝑉_1) ⋯(dim 𝑉_𝑚).",
      "statement_zh": "dim B(𝑉_1,...,𝑉_𝑚) =(dim 𝑉_1) × · · · ×(dim 𝑉_𝑚)．"
    },
    {
      "id": "9.88",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.88",
      "name_en": "tensor product, 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚, 𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚",
      "name_zh": "张量积（tensor product）、𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚、𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚",
      "include": true,
      "body": [
        {
          "t": "bullet",
          "en": "The tensor product 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚 is defined to be ℬ(𝑉^′_1, …, 𝑉^′_𝑚).",
          "zh": "张量积𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚定义为 B(𝑉^′_1,...,𝑉^′_𝑚)． 对于𝑣_1 ∈ 𝑉_1,..., 𝑣_𝑚 ∈ 𝑉_𝑚，张量积𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚是𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚的元素，定义为"
        },
        {
          "t": "bullet",
          "en": "For 𝑣_1 ∈ 𝑉_1, …, 𝑣_𝑚 ∈ 𝑉_𝑚, the tensor product 𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚 is the element of 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚 defined by",
          "zh": "(𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚)(𝜑_1,..., 𝜑_𝑚) = 𝜑_1(𝑣_1) · · · 𝜑_𝑚(𝑣_𝑚)"
        },
        {
          "t": "formula",
          "en": "(𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚)(𝜑_1, …, 𝜑_𝑚) = 𝜑_1(𝑣_1) ⋯ 𝜑_𝑚(𝑣_𝑚)",
          "zh": "对所有(𝜑_1,..., 𝜑_𝑚) ∈ 𝑉^′_1 × · · · × 𝑉^′_𝑚成立．",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all(𝜑_1, …, 𝜑_𝑚) ∈ 𝑉^′_1 × ⋯ × 𝑉^′_𝑚.",
          "zh": ""
        }
      ],
      "note": {
        "en": "The next result can be proved by following the pattern of the proof of the analogous result when 𝑚 = 2(see 9.72).",
        "zh": "接下来这条结果的证明，可以参照𝑚 = 2情形下的类似结果的证明方式（见9.72）．"
      },
      "statement_en": "The tensor product 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚 is defined to be ℬ(𝑉^′_1, …, 𝑉^′_𝑚). For 𝑣_1 ∈ 𝑉_1, …, 𝑣_𝑚 ∈ 𝑉_𝑚, the tensor product 𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚 is the element of 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚 defined by (𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚)(𝜑_1, …, 𝜑_𝑚) = 𝜑_1(𝑣_1) ⋯ 𝜑_𝑚(𝑣_𝑚) for all(𝜑_1, …, 𝜑_𝑚) ∈ 𝑉^′_1 × ⋯ × 𝑉^′_𝑚. The next result can be proved by following the pattern of the proof of the analogous result when 𝑚 = 2(see 9.72).",
      "statement_zh": "张量积𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚定义为 B(𝑉^′_1,...,𝑉^′_𝑚)． 对于𝑣_1 ∈ 𝑉_1,..., 𝑣_𝑚 ∈ 𝑉_𝑚，张量积𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚是𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚的元素，定义为 (𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚)(𝜑_1,..., 𝜑_𝑚) = 𝜑_1(𝑣_1) · · · 𝜑_𝑚(𝑣_𝑚) 对所有(𝜑_1,..., 𝜑_𝑚) ∈ 𝑉^′_1 × · · · × 𝑉^′_𝑚成立． 接下来这条结果的证明，可以参照𝑚 = 2情形下的类似结果的证明方式（见9.72）．"
    },
    {
      "id": "9.89",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.89",
      "name_en": "dimension of the tensor product",
      "name_zh": "张量积的维数",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "dim(𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚) =(dim 𝑉_1) ⋯(dim 𝑉_𝑚).",
          "zh": "dim(𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚) =(dim 𝑉_1) · · ·(dim 𝑉_𝑚)．"
        }
      ],
      "note": {
        "en": "Our next result generalizes 9.74.",
        "zh": "接下来这条结果推广了9.74．"
      },
      "statement_en": "dim(𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚) =(dim 𝑉_1) ⋯(dim 𝑉_𝑚). Our next result generalizes 9.74.",
      "statement_zh": "dim(𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚) =(dim 𝑉_1) · · ·(dim 𝑉_𝑚)． 接下来这条结果推广了9.74．"
    },
    {
      "id": "9.90",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.90",
      "name_en": "basis of 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚",
      "name_zh": "𝑉1 ⊗ · · · ⊗ 𝑉𝑚的基",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose dim 𝑉_𝑘 = 𝑛_𝑘 and 𝑒^𝑘_1, …, 𝑒^𝑘_{𝑛𝑘} is a basis of 𝑉_𝑘 for 𝑘 = 1, …, 𝑚. Then",
          "zh": "设 dim 𝑉_𝑘 = 𝑛_𝑘且𝑒^𝑘_1,..., 𝑒^𝑘_{𝑛𝑘}是𝑉_𝑘的基（𝑘 = 1,..., 𝑚）．那么"
        },
        {
          "t": "formula",
          "en": "{𝑒^1_{𝑗1} ⊗ ⋯ ⊗ 𝑒^𝑚_{𝑗𝑚}}_{𝑗1=1,…,𝑛1;⋯;𝑗𝑚=1,…,𝑛𝑚}",
          "zh": "�_{1𝑚} � 𝑒_{𝑗1} ⊗ · · · ⊗ 𝑒_{𝑗𝑚𝑗1=1,...,𝑛1;···;𝑗𝑚=1,...,𝑛𝑚}",
          "eq": null
        },
        {
          "t": "p",
          "en": "is a basis of 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚.",
          "zh": "是𝑉1 ⊗ · · · ⊗ 𝑉𝑚的基．"
        }
      ],
      "note": {
        "en": "",
        "zh": "设𝑚 = 2，𝑒^1_1,..., 𝑒^1_{𝑛1}是𝑉_1的基，𝑒^2_1,..., 𝑒^2_{𝑛2}是𝑉_2的基．那么，𝑉_1 ⊗ 𝑉_2的元素，关于以上 �_{12} � 结果中的基 𝑒_{𝑗1} ⊗ 𝑒_{𝑗2𝑗1=1,...,𝑛1;𝑗2=1,...,𝑛2}的系数，可以用 𝑛_1 × 𝑛_2矩阵表示，其中第 𝑗_1行第 𝑗_2列 的元素是 𝑒^1_{𝑗1} ⊗ 𝑒^2_{𝑗2}的系数．因此，为了表示𝑉1 ⊗ 𝑉2 的元素，我们需要一个矩阵——由两个下 标规定的数组． 如果𝑚 > 2，那么以上结果就表明我们需要一个由𝑚个下标规定的数组，来表示𝑉_1 ⊗· · ·⊗𝑉_𝑚 的一个任意元素．所以，当我们处理的对象由包含多个下标的数组指定时，可能就会出现张量 积． 接下来这条定义推广了双线性映射的概念（见9.77）．和双线性映射一样，其目标空间也 是任意向量空间．"
      },
      "statement_en": "Suppose dim 𝑉_𝑘 = 𝑛_𝑘 and 𝑒^𝑘_1, …, 𝑒^𝑘_{𝑛𝑘} is a basis of 𝑉_𝑘 for 𝑘 = 1, …, 𝑚. Then {𝑒^1_{𝑗1} ⊗ ⋯ ⊗ 𝑒^𝑚_{𝑗𝑚}}_{𝑗1=1,…,𝑛1;⋯;𝑗𝑚=1,…,𝑛𝑚} is a basis of 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚.",
      "statement_zh": "设 dim 𝑉_𝑘 = 𝑛_𝑘且𝑒^𝑘_1,..., 𝑒^𝑘_{𝑛𝑘}是𝑉_𝑘的基（𝑘 = 1,..., 𝑚）．那么 �_{1𝑚} � 𝑒_{𝑗1} ⊗ · · · ⊗ 𝑒_{𝑗𝑚𝑗1=1,...,𝑛1;···;𝑗𝑚=1,...,𝑛𝑚} 是𝑉1 ⊗ · · · ⊗ 𝑉𝑚的基． 设𝑚 = 2，𝑒^1_1,..., 𝑒^1_{𝑛1}是𝑉_1的基，𝑒^2_1,..., 𝑒^2_{𝑛2}是𝑉_2的基．那么，𝑉_1 ⊗ 𝑉_2的元素，关于以上 �_{12} � 结果中的基 𝑒_{𝑗1} ⊗ 𝑒_{𝑗2𝑗1=1,...,𝑛1;𝑗2=1,...,𝑛2}的系数，可以用 𝑛_1 × 𝑛_2矩阵表示，其中第 𝑗_1行第 𝑗_2列 的元素是 𝑒^1_{𝑗1} ⊗ 𝑒^2_{𝑗2}的系数．因此，为了表示𝑉1 ⊗ 𝑉2 的元素，我们需要一个矩阵——由两个下 标规定的数组． 如果𝑚 > 2，那么以上结果就表明我们需要一个由𝑚个下标规定的数组，来表示𝑉_1 ⊗· · ·⊗𝑉_𝑚 的一个任意元素．所以，当我们处理的对象由包含多个下标的数组指定时，可能就会出现张量 积． 接下来这条定义推广了双线性映射的概念（见9.77）．和双线性映射一样，其目标空间也 是任意向量空间．"
    },
    {
      "id": "9.91",
      "kind": "definition",
      "chapter": "ch9",
      "number": "9.91",
      "name_en": "𝑚-linear map",
      "name_zh": "𝑚重线性映射（𝑚-linear map）",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "An 𝑚-linear map from 𝑉_1 × ⋯ × 𝑉_𝑚 to a vector space 𝑈 is a function Γ: 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝑈 that is a linear map in each slot when the other slots are held fixed.",
          "zh": "从𝑉_1 ×· · ·×𝑉_𝑚到向量空间𝑈的𝑚重线性映射是满足如下性质的函数Γ: 𝑉_1 ×· · ·×𝑉_𝑚 → 𝑈： 固定 Γ(·,..., ·) 中任一位置以外的向量，都能得到该位置上的线性映射．"
        }
      ],
      "note": {
        "en": "",
        "zh": "接下来这条结果，可以参照9.79的证明方式来证．"
      },
      "statement_en": "An 𝑚-linear map from 𝑉_1 × ⋯ × 𝑉_𝑚 to a vector space 𝑈 is a function Γ: 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝑈 that is a linear map in each slot when the other slots are held fixed.",
      "statement_zh": "从𝑉_1 ×· · ·×𝑉_𝑚到向量空间𝑈的𝑚重线性映射是满足如下性质的函数Γ: 𝑉_1 ×· · ·×𝑉_𝑚 → 𝑈： 固定 Γ(·,..., ·) 中任一位置以外的向量，都能得到该位置上的线性映射． 接下来这条结果，可以参照9.79的证明方式来证．"
    },
    {
      "id": "9.92",
      "kind": "result",
      "chapter": "ch9",
      "number": "9.92",
      "name_en": "converting 𝑚-linear maps to linear maps",
      "name_zh": "化𝑚重线性映射为线性映射",
      "include": true,
      "body": [
        {
          "t": "p",
          "en": "Suppose 𝑈 is a vector space. (a) Suppose that Γ: 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝑈 is an 𝑚-linear map. Then there exists a unique linear map Γ̂: 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚 → 𝑈 such that",
          "zh": "设𝑈是向量空间． (a) 设Γ: 𝑉_1 ×· · ·×𝑉_𝑚 → 𝑈是𝑚重线性映射，那么存在唯一的线性映射Γˆ: 𝑉_1 ⊗· · ·⊗𝑉_𝑚 → 𝑈使得"
        },
        {
          "t": "formula",
          "en": "Γ̂(𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚) = Γ(𝑣_1, …, 𝑣_𝑚)",
          "zh": "Γˆ(𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚) = Γ(𝑣_1,..., 𝑣_𝑚)",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all(𝑣_1, …, 𝑣_𝑚) ∈ 𝑉_1 × ⋯ × 𝑉_𝑚. (b) Conversely, suppose 𝑇: 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚 → 𝑈 is a linear map. Then there exists a unique 𝑚-linear map 𝑇^# : 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝑈 such that",
          "zh": "对所有(𝑣_1,..., 𝑣_𝑚) ∈ 𝑉_1 × · · · × 𝑉_𝑚成立． (b) 反之，设𝑇: 𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚 → 𝑈是线性映射，那么存在唯一的 𝑚重线性映射𝑇^#: 𝑉1 × · · · × 𝑉𝑚 → 𝑈使得"
        },
        {
          "t": "formula",
          "en": "𝑇^#(𝑣_1, …, 𝑣_𝑚) = 𝑇(𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚)",
          "zh": "𝑇^#(𝑣_1,..., 𝑣_𝑚) = 𝑇(𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚)",
          "eq": null
        },
        {
          "t": "p",
          "en": "for all(𝑣_1, …, 𝑣_𝑚) ∈ 𝑉_1 × ⋯ × 𝑉_𝑚.",
          "zh": "对所有(𝑣_1,..., 𝑣_𝑚) ∈ 𝑉_1 × · · · × 𝑉_𝑚成立．"
        }
      ],
      "note": {
        "en": "See Exercises 12 and 13 for tensor products of multiple inner product spaces",
        "zh": "多个内积空间的张量积，见本节习题12、13． K 习题 9D k 1 设𝑣 ∈ 𝑉和𝑤 ∈ 𝑊．证明：𝑣 ⊗ 𝑤 = 0，当且仅当𝑣 = 0或𝑤 = 0． 2 给出一例：R^3中六个不同的向量𝑣_1, 𝑣_2, 𝑣_3, 𝑤_1, 𝑤_2, 𝑤_3，使得 𝑣1 ⊗ 𝑤1 + 𝑣2 ⊗ 𝑤2 + 𝑣3 ⊗ 𝑤3 = 0， 而𝑣1 ⊗ 𝑤1, 𝑣2 ⊗ 𝑤2, 𝑣3 ⊗ 𝑤3 当中，任一元素都不是该组中另一元素的标量倍． 3 设𝑣_1,..., 𝑣_𝑚是𝑉中的线性无关组．又设𝑤_1,..., 𝑤_𝑚是𝑊中的组，使得 𝑣1 ⊗ 𝑤1 + · · · + 𝑣𝑚 ⊗ 𝑤𝑚 = 0．"
      },
      "statement_en": "Suppose 𝑈 is a vector space. (a) Suppose that Γ: 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝑈 is an 𝑚-linear map. Then there exists a unique linear map Γ̂: 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚 → 𝑈 such that Γ̂(𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚) = Γ(𝑣_1, …, 𝑣_𝑚) for all(𝑣_1, …, 𝑣_𝑚) ∈ 𝑉_1 × ⋯ × 𝑉_𝑚. (b) Conversely, suppose 𝑇: 𝑉_1 ⊗ ⋯ ⊗ 𝑉_𝑚 → 𝑈 is a linear map. Then there exists a unique 𝑚-linear map 𝑇^# : 𝑉_1 × ⋯ × 𝑉_𝑚 → 𝑈 such that 𝑇^#(𝑣_1, …, 𝑣_𝑚) = 𝑇(𝑣_1 ⊗ ⋯ ⊗ 𝑣_𝑚) for all(𝑣_1, …, 𝑣_𝑚) ∈ 𝑉_1 × ⋯ × 𝑉_𝑚. See Exercises 12 and 13 for tensor products of multiple inner product spaces",
      "statement_zh": "设𝑈是向量空间． (a) 设Γ: 𝑉_1 ×· · ·×𝑉_𝑚 → 𝑈是𝑚重线性映射，那么存在唯一的线性映射Γˆ: 𝑉_1 ⊗· · ·⊗𝑉_𝑚 → 𝑈使得 Γˆ(𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚) = Γ(𝑣_1,..., 𝑣_𝑚) 对所有(𝑣_1,..., 𝑣_𝑚) ∈ 𝑉_1 × · · · × 𝑉_𝑚成立． (b) 反之，设𝑇: 𝑉_1 ⊗ · · · ⊗ 𝑉_𝑚 → 𝑈是线性映射，那么存在唯一的 𝑚重线性映射𝑇^#: 𝑉1 × · · · × 𝑉𝑚 → 𝑈使得 𝑇^#(𝑣_1,..., 𝑣_𝑚) = 𝑇(𝑣_1 ⊗ · · · ⊗ 𝑣_𝑚) 对所有(𝑣_1,..., 𝑣_𝑚) ∈ 𝑉_1 × · · · × 𝑉_𝑚成立． 多个内积空间的张量积，见本节习题12、13． K 习题 9D k 1 设𝑣 ∈ 𝑉和𝑤 ∈ 𝑊．证明：𝑣 ⊗ 𝑤 = 0，当且仅当𝑣 = 0或𝑤 = 0． 2 给出一例：R^3中六个不同的向量𝑣_1, 𝑣_2, 𝑣_3, 𝑤_1, 𝑤_2, 𝑤_3，使得 𝑣1 ⊗ 𝑤1 + 𝑣2 ⊗ 𝑤2 + 𝑣3 ⊗ 𝑤3 = 0， 而𝑣1 ⊗ 𝑤1, 𝑣2 ⊗ 𝑤2, 𝑣3 ⊗ 𝑤3 当中，任一元素都不是该组中另一元素的标量倍． 3 设𝑣_1,..., 𝑣_𝑚是𝑉中的线性无关组．又设𝑤_1,..., 𝑤_𝑚是𝑊中的组，使得 𝑣1 ⊗ 𝑤1 + · · · + 𝑣𝑚 ⊗ 𝑤𝑚 = 0．"
    }
  ]
};
