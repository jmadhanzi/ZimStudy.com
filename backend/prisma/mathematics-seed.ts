import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const mathematicsCourses = [
  // PRE-ALGEBRA & BASIC MATHEMATICS
  
  {
    name: 'Pre-Algebra',
    code: 'MATH-100',
    description: 'Number systems, factors and multiples, fractions, decimals, percentages, and basic problem-solving strategies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Pre-Algebra & Basic Mathematics',
    isCompulsory: false,
    icon: '🔢',
    topics: [
      { title: 'Number Systems', description: 'Integers, rational numbers, and real numbers', order: 1 },
      { title: 'Factors and Multiples', description: 'Prime factorization and GCD/LCM', order: 2 },
      { title: 'Fractions and Decimals', description: 'Operations with fractions and decimals', order: 3 },
      { title: 'Percentages', description: 'Percentage calculations and applications', order: 4 },
      { title: 'Problem-Solving Strategies', description: 'Mathematical reasoning and word problems', order: 5 }
    ]
  },
  {
    name: 'Foundations of Mathematics',
    code: 'MATH-101',
    description: 'Introduction to mathematical reasoning, patterns, and proportional thinking.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Pre-Algebra & Basic Mathematics',
    isCompulsory: false,
    icon: '📐',
    topics: [
      { title: 'Mathematical Reasoning', description: 'Logic and mathematical thinking', order: 1 },
      { title: 'Patterns and Sequences', description: 'Recognizing and extending patterns', order: 2 },
      { title: 'Proportional Thinking', description: 'Ratios, rates, and proportions', order: 3 },
      { title: 'Mathematical Communication', description: 'Expressing mathematical ideas', order: 4 },
      { title: 'Problem-Solving Techniques', description: 'Strategies for solving problems', order: 5 }
    ]
  },
  {
    name: 'Basic Arithmetic Skills',
    code: 'MATH-102',
    description: 'Addition, subtraction, multiplication, division, and applied exercises for everyday math.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Pre-Algebra & Basic Mathematics',
    isCompulsory: false,
    icon: '➕',
    topics: [
      { title: 'Addition and Subtraction', description: 'Basic operations with whole numbers', order: 1 },
      { title: 'Multiplication and Division', description: 'Multiplication tables and division', order: 2 },
      { title: 'Order of Operations', description: 'PEMDAS/BODMAS rules', order: 3 },
      { title: 'Mental Math', description: 'Quick calculation strategies', order: 4 },
      { title: 'Everyday Math Applications', description: 'Real-world arithmetic problems', order: 5 }
    ]
  },

  // ALGEBRA COURSES
  
  {
    name: 'Introduction to Algebra',
    code: 'MATH-110',
    description: 'Expressions, equations, inequalities, and linear functions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Algebra',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Algebraic Expressions', description: 'Variables, terms, and simplification', order: 1 },
      { title: 'Linear Equations', description: 'Solving one-variable equations', order: 2 },
      { title: 'Inequalities', description: 'Solving and graphing inequalities', order: 3 },
      { title: 'Linear Functions', description: 'Slope, intercepts, and graphing', order: 4 },
      { title: 'Systems of Equations', description: 'Solving two-variable systems', order: 5 }
    ]
  },
  {
    name: 'Intermediate Algebra',
    code: 'MATH-111',
    description: 'Quadratic functions, polynomials, factoring, and rational expressions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Algebra',
    isCompulsory: false,
    icon: '📈',
    topics: [
      { title: 'Quadratic Functions', description: 'Parabolas and quadratic equations', order: 1 },
      { title: 'Polynomials', description: 'Operations with polynomials', order: 2 },
      { title: 'Factoring', description: 'Factoring techniques', order: 3 },
      { title: 'Rational Expressions', description: 'Simplifying and operations', order: 4 },
      { title: 'Radical Expressions', description: 'Square roots and radicals', order: 5 }
    ]
  },
  {
    name: 'College Algebra',
    code: 'MATH-112',
    description: 'Advanced functions, exponential and logarithmic functions, sequences, and series.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Algebra',
    isCompulsory: false,
    icon: '🎓',
    topics: [
      { title: 'Functions', description: 'Function notation and composition', order: 1 },
      { title: 'Exponential Functions', description: 'Growth and decay models', order: 2 },
      { title: 'Logarithmic Functions', description: 'Logarithms and their properties', order: 3 },
      { title: 'Sequences and Series', description: 'Arithmetic and geometric sequences', order: 4 },
      { title: 'Conic Sections', description: 'Circles, ellipses, hyperbolas', order: 5 }
    ]
  },
  {
    name: 'Linear Algebra',
    code: 'MATH-210',
    description: 'Vectors, matrices, determinants, eigenvalues, and linear transformations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Algebra',
    isCompulsory: false,
    icon: '🔲',
    topics: [
      { title: 'Vectors', description: 'Vector operations and properties', order: 1 },
      { title: 'Matrices', description: 'Matrix operations and applications', order: 2 },
      { title: 'Determinants', description: 'Computing and using determinants', order: 3 },
      { title: 'Eigenvalues and Eigenvectors', description: 'Characteristic equations', order: 4 },
      { title: 'Linear Transformations', description: 'Mapping and transformations', order: 5 }
    ]
  },
  {
    name: 'Abstract Algebra',
    code: 'MATH-310',
    description: 'Groups, rings, fields, and structures in higher-level mathematical reasoning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Algebra',
    isCompulsory: false,
    icon: '🔷',
    topics: [
      { title: 'Group Theory', description: 'Groups, subgroups, and homomorphisms', order: 1 },
      { title: 'Ring Theory', description: 'Rings, ideals, and quotient rings', order: 2 },
      { title: 'Field Theory', description: 'Fields and field extensions', order: 3 },
      { title: 'Galois Theory', description: 'Polynomial equations and symmetry', order: 4 },
      { title: 'Applications', description: 'Cryptography and coding theory', order: 5 }
    ]
  },

  // GEOMETRY COURSES
  
  {
    name: 'Plane Geometry',
    code: 'MATH-120',
    description: 'Points, lines, angles, triangles, circles, and polygons.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Geometry',
    isCompulsory: false,
    icon: '📐',
    topics: [
      { title: 'Points, Lines, and Angles', description: 'Basic geometric concepts', order: 1 },
      { title: 'Triangles', description: 'Triangle properties and theorems', order: 2 },
      { title: 'Circles', description: 'Circle properties and equations', order: 3 },
      { title: 'Polygons', description: 'Quadrilaterals and other polygons', order: 4 },
      { title: 'Geometric Proofs', description: 'Logical reasoning in geometry', order: 5 }
    ]
  },
  {
    name: 'Solid Geometry',
    code: 'MATH-121',
    description: 'Three-dimensional shapes, surface area, volume, and spatial visualization.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Geometry',
    isCompulsory: false,
    icon: '🔺',
    topics: [
      { title: '3D Shapes', description: 'Prisms, pyramids, cylinders, cones, spheres', order: 1 },
      { title: 'Surface Area', description: 'Calculating surface areas', order: 2 },
      { title: 'Volume', description: 'Computing volumes of solids', order: 3 },
      { title: 'Spatial Visualization', description: '3D thinking and representation', order: 4 },
      { title: 'Cross Sections', description: 'Slicing 3D objects', order: 5 }
    ]
  },
  {
    name: 'Analytic Geometry',
    code: 'MATH-122',
    description: 'Coordinate systems, lines, conic sections, and distance and slope calculations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Geometry',
    isCompulsory: false,
    icon: '📍',
    topics: [
      { title: 'Coordinate Systems', description: 'Cartesian plane and coordinates', order: 1 },
      { title: 'Lines', description: 'Equations of lines and slopes', order: 2 },
      { title: 'Distance and Midpoint', description: 'Distance formula and midpoint', order: 3 },
      { title: 'Conic Sections', description: 'Parabolas, ellipses, hyperbolas', order: 4 },
      { title: 'Polar Coordinates', description: 'Alternative coordinate systems', order: 5 }
    ]
  },
  {
    name: 'Euclidean & Non-Euclidean Geometry',
    code: 'MATH-320',
    description: 'Study of classical and modern geometric frameworks and axioms.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Geometry',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'Euclidean Axioms', description: 'Classical geometry foundations', order: 1 },
      { title: 'Parallel Postulate', description: 'Fifth postulate and alternatives', order: 2 },
      { title: 'Hyperbolic Geometry', description: 'Non-Euclidean geometry', order: 3 },
      { title: 'Spherical Geometry', description: 'Geometry on spheres', order: 4 },
      { title: 'Modern Applications', description: 'Relativity and curved space', order: 5 }
    ]
  },

  // TRIGONOMETRY & PRE-CALCULUS
  
  {
    name: 'Trigonometry',
    code: 'MATH-130',
    description: 'Sine, cosine, tangent, identities, laws of sines and cosines, and real-world applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Trigonometry & Pre-Calculus',
    isCompulsory: false,
    icon: '📐',
    topics: [
      { title: 'Trigonometric Functions', description: 'Sine, cosine, tangent', order: 1 },
      { title: 'Unit Circle', description: 'Angles and radians', order: 2 },
      { title: 'Trigonometric Identities', description: 'Pythagorean and angle identities', order: 3 },
      { title: 'Laws of Sines and Cosines', description: 'Solving triangles', order: 4 },
      { title: 'Applications', description: 'Real-world trigonometry problems', order: 5 }
    ]
  },
  {
    name: 'Pre-Calculus',
    code: 'MATH-131',
    description: 'Polynomial, rational, exponential, logarithmic, and trigonometric functions; limits and sequences.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Trigonometry & Pre-Calculus',
    isCompulsory: false,
    icon: '📉',
    topics: [
      { title: 'Polynomial Functions', description: 'Graphing and analyzing polynomials', order: 1 },
      { title: 'Rational Functions', description: 'Asymptotes and behavior', order: 2 },
      { title: 'Exponential and Logarithmic Functions', description: 'Growth and decay', order: 3 },
      { title: 'Trigonometric Functions', description: 'Graphing trig functions', order: 4 },
      { title: 'Limits and Sequences', description: 'Introduction to calculus concepts', order: 5 }
    ]
  },
  {
    name: 'Mathematical Modeling',
    code: 'MATH-132',
    description: 'Using algebraic and trigonometric functions to represent real-world phenomena.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Trigonometry & Pre-Calculus',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Modeling Process', description: 'Creating mathematical models', order: 1 },
      { title: 'Linear Models', description: 'Linear relationships', order: 2 },
      { title: 'Exponential Models', description: 'Growth and decay models', order: 3 },
      { title: 'Periodic Models', description: 'Trigonometric modeling', order: 4 },
      { title: 'Model Validation', description: 'Testing and refining models', order: 5 }
    ]
  },

  // CALCULUS COURSES
  
  {
    name: 'Calculus I (Differential Calculus)',
    code: 'MATH-140',
    description: 'Limits, derivatives, applications of derivatives, and curve analysis.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Calculus',
    isCompulsory: false,
    icon: '∫',
    topics: [
      { title: 'Limits', description: 'Limit concepts and calculations', order: 1 },
      { title: 'Derivatives', description: 'Definition and rules of differentiation', order: 2 },
      { title: 'Applications of Derivatives', description: 'Optimization and related rates', order: 3 },
      { title: 'Curve Analysis', description: 'Increasing/decreasing, concavity', order: 4 },
      { title: 'Mean Value Theorem', description: 'Theoretical foundations', order: 5 }
    ]
  },
  {
    name: 'Calculus II (Integral Calculus)',
    code: 'MATH-141',
    description: 'Integration techniques, definite and indefinite integrals, area and volume applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Calculus',
    isCompulsory: false,
    icon: '∫',
    topics: [
      { title: 'Antiderivatives', description: 'Indefinite integrals', order: 1 },
      { title: 'Definite Integrals', description: 'Fundamental theorem of calculus', order: 2 },
      { title: 'Integration Techniques', description: 'Substitution, parts, partial fractions', order: 3 },
      { title: 'Applications', description: 'Area, volume, arc length', order: 4 },
      { title: 'Improper Integrals', description: 'Infinite limits of integration', order: 5 }
    ]
  },
  {
    name: 'Calculus III (Multivariable Calculus)',
    code: 'MATH-240',
    description: 'Partial derivatives, multiple integrals, vector calculus, and optimization.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Calculus',
    isCompulsory: false,
    icon: '∇',
    topics: [
      { title: 'Multivariable Functions', description: 'Functions of several variables', order: 1 },
      { title: 'Partial Derivatives', description: 'Differentiation in multiple dimensions', order: 2 },
      { title: 'Multiple Integrals', description: 'Double and triple integrals', order: 3 },
      { title: 'Vector Calculus', description: 'Gradient, divergence, curl', order: 4 },
      { title: 'Optimization', description: 'Lagrange multipliers', order: 5 }
    ]
  },
  {
    name: 'Differential Equations',
    code: 'MATH-241',
    description: 'Ordinary differential equations, modeling, and solutions to physical and engineering problems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Calculus',
    isCompulsory: false,
    icon: '∂',
    topics: [
      { title: 'First-Order ODEs', description: 'Separable and linear equations', order: 1 },
      { title: 'Second-Order ODEs', description: 'Homogeneous and non-homogeneous', order: 2 },
      { title: 'Laplace Transforms', description: 'Transform methods', order: 3 },
      { title: 'Systems of ODEs', description: 'Matrix methods', order: 4 },
      { title: 'Applications', description: 'Modeling physical systems', order: 5 }
    ]
  },
  {
    name: 'Applied Calculus',
    code: 'MATH-142',
    description: 'Focus on real-world applications in business, economics, and social sciences.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Calculus',
    isCompulsory: false,
    icon: '💼',
    topics: [
      { title: 'Derivatives in Business', description: 'Marginal analysis', order: 1 },
      { title: 'Optimization', description: 'Maximizing profit and minimizing cost', order: 2 },
      { title: 'Integrals in Economics', description: 'Consumer and producer surplus', order: 3 },
      { title: 'Growth Models', description: 'Exponential growth and decay', order: 4 },
      { title: 'Differential Equations', description: 'Modeling change', order: 5 }
    ]
  },

  // STATISTICS & PROBABILITY
  
  {
    name: 'Introduction to Statistics',
    code: 'MATH-150',
    description: 'Descriptive statistics, data visualization, measures of central tendency and variability.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Statistics & Probability',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Descriptive Statistics', description: 'Summarizing data', order: 1 },
      { title: 'Data Visualization', description: 'Charts and graphs', order: 2 },
      { title: 'Measures of Central Tendency', description: 'Mean, median, mode', order: 3 },
      { title: 'Measures of Variability', description: 'Range, variance, standard deviation', order: 4 },
      { title: 'Correlation', description: 'Relationships between variables', order: 5 }
    ]
  },
  {
    name: 'Probability Theory',
    code: 'MATH-151',
    description: 'Basic probability, combinatorics, conditional probability, and probability distributions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Statistics & Probability',
    isCompulsory: false,
    icon: '🎲',
    topics: [
      { title: 'Basic Probability', description: 'Sample spaces and events', order: 1 },
      { title: 'Combinatorics', description: 'Counting principles', order: 2 },
      { title: 'Conditional Probability', description: 'Bayes\' theorem', order: 3 },
      { title: 'Random Variables', description: 'Discrete and continuous', order: 4 },
      { title: 'Probability Distributions', description: 'Normal, binomial, Poisson', order: 5 }
    ]
  },
  {
    name: 'Applied Statistics',
    code: 'MATH-250',
    description: 'Regression analysis, hypothesis testing, confidence intervals, and real-world data applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Statistics & Probability',
    isCompulsory: false,
    icon: '📈',
    topics: [
      { title: 'Sampling Methods', description: 'Collecting representative data', order: 1 },
      { title: 'Hypothesis Testing', description: 'Statistical significance', order: 2 },
      { title: 'Confidence Intervals', description: 'Estimating parameters', order: 3 },
      { title: 'Regression Analysis', description: 'Linear and multiple regression', order: 4 },
      { title: 'ANOVA', description: 'Analysis of variance', order: 5 }
    ]
  },
  {
    name: 'Biostatistics',
    code: 'MATH-251',
    description: 'Statistical methods applied in health sciences, medicine, and biological research.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Statistics & Probability',
    isCompulsory: false,
    icon: '🧬',
    topics: [
      { title: 'Study Design', description: 'Clinical trials and experiments', order: 1 },
      { title: 'Survival Analysis', description: 'Time-to-event data', order: 2 },
      { title: 'Epidemiological Statistics', description: 'Disease prevalence and incidence', order: 3 },
      { title: 'Diagnostic Tests', description: 'Sensitivity and specificity', order: 4 },
      { title: 'Meta-Analysis', description: 'Combining study results', order: 5 }
    ]
  },
  {
    name: 'Statistical Modeling',
    code: 'MATH-350',
    description: 'Predictive models, ANOVA, and multivariate statistical techniques.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Statistics & Probability',
    isCompulsory: false,
    icon: '🔮',
    topics: [
      { title: 'Linear Models', description: 'Multiple regression', order: 1 },
      { title: 'Logistic Regression', description: 'Binary outcomes', order: 2 },
      { title: 'Time Series Analysis', description: 'Temporal data', order: 3 },
      { title: 'Multivariate Analysis', description: 'Multiple variables', order: 4 },
      { title: 'Model Selection', description: 'Choosing the best model', order: 5 }
    ]
  },

  // DISCRETE MATHEMATICS & LOGIC
  
  {
    name: 'Discrete Mathematics',
    code: 'MATH-160',
    description: 'Sets, relations, functions, counting principles, and combinatorics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Discrete Mathematics & Logic',
    isCompulsory: false,
    icon: '🔢',
    topics: [
      { title: 'Sets and Set Operations', description: 'Set theory fundamentals', order: 1 },
      { title: 'Relations and Functions', description: 'Mathematical relationships', order: 2 },
      { title: 'Counting Principles', description: 'Permutations and combinations', order: 3 },
      { title: 'Combinatorics', description: 'Advanced counting techniques', order: 4 },
      { title: 'Recurrence Relations', description: 'Sequences and recursion', order: 5 }
    ]
  },
  {
    name: 'Graph Theory',
    code: 'MATH-161',
    description: 'Networks, connectivity, Eulerian and Hamiltonian paths, and applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Discrete Mathematics & Logic',
    isCompulsory: false,
    icon: '🕸️',
    topics: [
      { title: 'Graph Basics', description: 'Vertices, edges, and graphs', order: 1 },
      { title: 'Graph Types', description: 'Directed, undirected, weighted', order: 2 },
      { title: 'Paths and Circuits', description: 'Eulerian and Hamiltonian', order: 3 },
      { title: 'Trees', description: 'Special graphs', order: 4 },
      { title: 'Applications', description: 'Network analysis and algorithms', order: 5 }
    ]
  },
  {
    name: 'Mathematical Logic',
    code: 'MATH-162',
    description: 'Propositional and predicate logic, proof techniques, and formal reasoning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Discrete Mathematics & Logic',
    isCompulsory: false,
    icon: '🧩',
    topics: [
      { title: 'Propositional Logic', description: 'Logical statements and connectives', order: 1 },
      { title: 'Predicate Logic', description: 'Quantifiers and predicates', order: 2 },
      { title: 'Proof Techniques', description: 'Direct, indirect, and induction', order: 3 },
      { title: 'Boolean Algebra', description: 'Logical operations', order: 4 },
      { title: 'Formal Systems', description: 'Axioms and theorems', order: 5 }
    ]
  },
  {
    name: 'Number Theory',
    code: 'MATH-260',
    description: 'Prime numbers, divisibility, modular arithmetic, and cryptography foundations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Discrete Mathematics & Logic',
    isCompulsory: false,
    icon: '🔐',
    topics: [
      { title: 'Divisibility', description: 'Division algorithm and properties', order: 1 },
      { title: 'Prime Numbers', description: 'Primes and factorization', order: 2 },
      { title: 'Modular Arithmetic', description: 'Congruences and residues', order: 3 },
      { title: 'Diophantine Equations', description: 'Integer solutions', order: 4 },
      { title: 'Cryptography', description: 'RSA and number theory applications', order: 5 }
    ]
  },

  // APPLIED & SPECIALIZED MATHEMATICS
  
  {
    name: 'Mathematical Modeling & Simulation',
    code: 'MATH-360',
    description: 'Using mathematical methods to represent, analyze, and solve real-world problems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Applied Mathematics',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Modeling Principles', description: 'Creating mathematical models', order: 1 },
      { title: 'Deterministic Models', description: 'Predictable systems', order: 2 },
      { title: 'Stochastic Models', description: 'Random processes', order: 3 },
      { title: 'Simulation Techniques', description: 'Computer simulation', order: 4 },
      { title: 'Model Validation', description: 'Testing and refining', order: 5 }
    ]
  },
  {
    name: 'Operations Research',
    code: 'MATH-361',
    description: 'Linear programming, optimization techniques, and decision-making models.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Applied Mathematics',
    isCompulsory: false,
    icon: '⚙️',
    topics: [
      { title: 'Linear Programming', description: 'Simplex method', order: 1 },
      { title: 'Integer Programming', description: 'Discrete optimization', order: 2 },
      { title: 'Network Optimization', description: 'Flow and routing problems', order: 3 },
      { title: 'Dynamic Programming', description: 'Sequential decision-making', order: 4 },
      { title: 'Game Theory', description: 'Strategic decision-making', order: 5 }
    ]
  },
  {
    name: 'Financial Mathematics',
    code: 'MATH-362',
    description: 'Interest, annuities, risk assessment, and quantitative finance applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Applied Mathematics',
    isCompulsory: false,
    icon: '💰',
    topics: [
      { title: 'Time Value of Money', description: 'Interest and present value', order: 1 },
      { title: 'Annuities', description: 'Regular payment streams', order: 2 },
      { title: 'Bonds and Stocks', description: 'Valuation methods', order: 3 },
      { title: 'Options and Derivatives', description: 'Financial instruments', order: 4 },
      { title: 'Risk Management', description: 'Portfolio theory', order: 5 }
    ]
  },
  {
    name: 'Computational Mathematics',
    code: 'MATH-363',
    description: 'Numerical methods, algorithms, and programming applications in mathematics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Applied Mathematics',
    isCompulsory: false,
    icon: '💻',
    topics: [
      { title: 'Numerical Analysis', description: 'Approximation methods', order: 1 },
      { title: 'Root Finding', description: 'Solving equations numerically', order: 2 },
      { title: 'Numerical Integration', description: 'Approximating integrals', order: 3 },
      { title: 'Differential Equation Solvers', description: 'Numerical ODE methods', order: 4 },
      { title: 'Scientific Computing', description: 'Programming for math', order: 5 }
    ]
  },
  {
    name: 'Mathematical Analysis',
    code: 'MATH-460',
    description: 'Rigorous study of sequences, series, limits, and functions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Applied Mathematics',
    isCompulsory: false,
    icon: '∞',
    topics: [
      { title: 'Real Numbers', description: 'Completeness and properties', order: 1 },
      { title: 'Sequences and Series', description: 'Convergence and divergence', order: 2 },
      { title: 'Continuity', description: 'Continuous functions', order: 3 },
      { title: 'Differentiation', description: 'Rigorous derivative theory', order: 4 },
      { title: 'Integration', description: 'Riemann integration', order: 5 }
    ]
  }
];

async function seedMathematics() {
  console.log('🔢 Starting Mathematics seeding...\n');

  for (const course of mathematicsCourses) {
    try {
      const { topics, ...courseData } = course;

      // Upsert subject
      const createdCourse = await prisma.subject.upsert({
        where: { code: course.code },
        update: courseData,
        create: courseData
      });

      console.log(`✅ ${course.name} (${course.category})`);

      // Create topics
      for (const topic of topics) {
        const existingTopic = await prisma.topic.findFirst({
          where: {
            subjectId: createdCourse.id,
            title: topic.title
          }
        });

        if (existingTopic) {
          await prisma.topic.update({
            where: { id: existingTopic.id },
            data: {
              description: topic.description,
              order: topic.order
            }
          });
        } else {
          await prisma.topic.create({
            data: {
              ...topic,
              subjectId: createdCourse.id
            }
          });
        }
      }

      console.log(`   └─ ${topics.length} topics added\n`);
    } catch (error) {
      console.error(`❌ Error seeding ${course.name}:`, error);
    }
  }

  console.log('✅ Mathematics seeding complete!\n');
  
  // Print summary
  const courseCount = mathematicsCourses.length;
  const topicCount = mathematicsCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`\n   Categories:`);
  console.log(`   - Pre-Algebra & Basic Mathematics (3 courses)`);
  console.log(`   - Algebra (5 courses)`);
  console.log(`   - Geometry (4 courses)`);
  console.log(`   - Trigonometry & Pre-Calculus (3 courses)`);
  console.log(`   - Calculus (5 courses)`);
  console.log(`   - Statistics & Probability (5 courses)`);
  console.log(`   - Discrete Mathematics & Logic (4 courses)`);
  console.log(`   - Applied Mathematics (5 courses)`);
}

seedMathematics()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
