export interface IPaperTrimmed {
    id: string;
    title: string;
    authorsParsed: string[][];
    timestamp: number;
};

export interface ISubCategory {
    count: number;
    papers: IPaperTrimmed[];
};

export interface IAllPapers {
    count: number;
    "Astrophysics": {
        count: number;
        "Astrophysics of Galaxies": ISubCategory;
        "Cosmology and Nongalactic Astrophysics": ISubCategory;
        "Earth and Planetary Astrophysics": ISubCategory;
        "High Energy Astrophysical Phenomena": ISubCategory;
        "Instrumentation and Methods for Astrophysics": ISubCategory;
        "Solar and Stellar Astrophysics": ISubCategory;
    };
    "Condensed Matter": {
        count: number;
        "Disordered Systems and Neural Networks": ISubCategory;
        "Materials Science": ISubCategory;
        "Mesoscale and Nanoscale Physics": ISubCategory;
        "Other Condensed Matter": ISubCategory;
        "Quantum Gases": ISubCategory;
        "Soft Condensed Matter": ISubCategory;
        "Statistical Mechanics": ISubCategory;
        "Strongly Correlated Electrons": ISubCategory;
        "Superconductivity": ISubCategory;
    };
    "Physics": {
        count: number;
        "General Relativity and Quantum Cosmology": ISubCategory;
        "High Energy Physics - Experiment": ISubCategory;
        "High Energy Physics - Lattice": ISubCategory;
        "High Energy Physics - Phenomenology": ISubCategory;
        "High Energy Physics - Theory": ISubCategory;
        "Mathematical Physics": ISubCategory;
        "Nuclear Experiment": ISubCategory;
        "Nuclear Theory": ISubCategory;
        "Accelerator Physics": ISubCategory;
        "Applied Physics": ISubCategory;
        "Atmospheric and Oceanic Physics": ISubCategory;
        "Atomic and Molecular Clusters": ISubCategory;
        "Atomic Physics": ISubCategory;
        "Biological Physics": ISubCategory;
        "Chemical Physics": ISubCategory;
        "Classical Physics": ISubCategory;
        "Computational Physics": ISubCategory;
        "Data Analysis, Statistics and Probability": ISubCategory;
        "Fluid Dynamics": ISubCategory;
        "General Physics": ISubCategory;
        "Geophysics": ISubCategory;
        "History and Philosophy of Physics": ISubCategory;
        "Instrumentation and Detectors": ISubCategory;
        "Medical Physics": ISubCategory;
        "Optics": ISubCategory;
        "Physics and Society": ISubCategory;
        "Physics Education": ISubCategory;
        "Plasma Physics": ISubCategory;
        "Popular Physics": ISubCategory;
        "Space Physics": ISubCategory;
        "Quantum Physics": ISubCategory;
    };
    "Nonlinear Sciences": {
        count: number;
        "Adaptation and Self-Organizing Systems": ISubCategory;
        "Cellular Automata and Lattice Gases": ISubCategory;
        "Chaotic Dynamics": ISubCategory;
        "Exactly Solvable and Integrable Systems": ISubCategory;
        "Pattern Formation and Solitons": ISubCategory;
    };
    "Mathematics": {
        count: number;
        "Algebraic Geometry": ISubCategory;
        "Algebraic Topology": ISubCategory;
        "Analysis of PDEs": ISubCategory;
        "Category Theory": ISubCategory;
        "Classical Analysis and ODEs": ISubCategory;
        "Combinatorics": ISubCategory;
        "Commutative Algebra": ISubCategory;
        "Complex Variables": ISubCategory;
        "Differential Geometry": ISubCategory;
        "Dynamical Systems": ISubCategory;
        "Functional Analysis": ISubCategory;
        "General Mathematics": ISubCategory;
        "General Topology": ISubCategory;
        "Geometric Topology": ISubCategory;
        "Group Theory": ISubCategory;
        "History and Overview": ISubCategory;
        "Information Theory": ISubCategory;
        "K-Theory and Homology": ISubCategory;
        "Logic": ISubCategory;
        "Mathematical Physics": ISubCategory;
        "Metric Geometry": ISubCategory;
        "Number Theory": ISubCategory;
        "Numerical Analysis": ISubCategory;
        "Operator Algebras": ISubCategory;
        "Optimization and Control": ISubCategory;
        "Probability": ISubCategory;
        "Quantum Algebra": ISubCategory;
        "Representation Theory": ISubCategory;
        "Rings and Algebras": ISubCategory;
        "Spectral Theory": ISubCategory;
        "Statistics Theory": ISubCategory;
        "Symplectic Geometry": ISubCategory;
    };
    "Computing Research Repository": {
        count: number;
        "Artificial Intelligence": ISubCategory;
        "Computation and Language": ISubCategory;
        "Computational Complexity": ISubCategory;
        "Computational Engineering, Finance, and Science": ISubCategory;
        "Computational Geometry": ISubCategory;
        "Computer Science and Game Theory": ISubCategory;
        "Computer Vision and Pattern Recognition": ISubCategory;
        "Computers and Society": ISubCategory;
        "Cryptography and Security": ISubCategory;
        "Data Structures and Algorithms": ISubCategory;
        "Databases": ISubCategory;
        "Digital Libraries": ISubCategory;
        "Discrete Mathematics": ISubCategory;
        "Distributed, Parallel, and Cluster Computing": ISubCategory;
        "Emerging Technologies": ISubCategory;
        "Formal Languages and Automata Theory": ISubCategory;
        "General Literature": ISubCategory;
        "Graphics": ISubCategory;
        "Hardware Architecture": ISubCategory;
        "Human-Computer Interaction": ISubCategory;
        "Information Retrieval": ISubCategory;
        "Information Theory": ISubCategory;
        "Logic in Computer Science": ISubCategory;
        "Machine Learning": ISubCategory;
        "Mathematical Software": ISubCategory;
        "Multiagent Systems": ISubCategory;
        "Multimedia": ISubCategory;
        "Networking and Internet Architecture": ISubCategory;
        "Neural and Evolutionary Computing": ISubCategory;
        "Numerical Analysis": ISubCategory;
        "Operating Systems": ISubCategory;
        "Other Computer Science": ISubCategory;
        "Performance": ISubCategory;
        "Programming Languages": ISubCategory;
        "Robotics": ISubCategory;
        "Social and Information Networks": ISubCategory;
        "Software Engineering": ISubCategory;
        "Sound": ISubCategory;
        "Symbolic Computation": ISubCategory;
        "Systems and Control": ISubCategory;
    };
    "Quantitative Biology": {
        count: number;
        "Biomolecules": ISubCategory;
        "Cell Behavior": ISubCategory;
        "Genomics": ISubCategory;
        "Molecular Networks": ISubCategory;
        "Neurons and Cognition": ISubCategory;
        "Other Quantitative Biology": ISubCategory;
        "Populations and Evolution": ISubCategory;
        "Quantitative Methods": ISubCategory;
        "Subcellular Processes": ISubCategory;
        "Tissues and Organs": ISubCategory;
    };
    "Quantitative Finance": {
        count: number;
        "Computational Finance": ISubCategory;
        "Economics": ISubCategory;
        "General Finance": ISubCategory;
        "Mathematical Finance": ISubCategory;
        "Portfolio Management": ISubCategory;
        "Pricing of Securities": ISubCategory;
        "Risk Management": ISubCategory;
        "Statistical Finance": ISubCategory;
        "Trading and Market Microstructure": ISubCategory;
    };
    "Statistics": {
        count: number;
        "Applications": ISubCategory;
        "Computation": ISubCategory;
        "Machine Learning": ISubCategory;
        "Methodology": ISubCategory;
        "Other Statistics": ISubCategory;
        "Statistics Theory": ISubCategory;
    };
    "Electrical Engineering and Systems Science": {
        count: number;
        "Audio and Speech Processing": ISubCategory;
        "Image and Video Processing": ISubCategory;
        "Signal Processing": ISubCategory;
        "Systems and Control": ISubCategory;
    };
    "Economics": {
        count: number;
        "Econometrics": ISubCategory;
        "General Economics": ISubCategory;
        "Theoretical Economics": ISubCategory;
    };
};
