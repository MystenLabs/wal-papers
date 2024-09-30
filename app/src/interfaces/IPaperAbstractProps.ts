export interface IPaperAbstractProps {
    doi: string;
    title: string;
    submissionDate: string;
    fileSize: string;
    authors: Array<{ name: string; link: string }>;
    abstract: string;
    subjects: string;
    citation: string;
    submissionHistory: string;
  }
  