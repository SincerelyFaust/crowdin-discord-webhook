export interface Crowdin {
  events: Event[];
}

export interface Project {
  id: string;
  userId: string;
  sourceLanguageId: string;
  targetLanguageIds: string[];
  identifier: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  lastActivity: Date;
  description: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cname?: any;
  logo: string;
  isExternal: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  externalType?: any;
  hasCrowdsourcing: boolean;
}

export interface File {
  id: string;
  name: string;
  title: string;
  type: string;
  path: string;
  status: string;
  revision: string;
  branchId: string;
  directoryId: string;
  project: Project;
}

export interface TargetLanguage {
  id: string;
  name: string;
  editorCode: string;
  twoLettersCode: string;
  threeLettersCode: string;
  locale: string;
  androidCode: string;
  osxCode: string;
  osxLocale: string;
  textDirection: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dialectOf?: any;
}

export interface Build {
  id: string;
  downloadUrl: string;
  project: Project;
}

export interface NewTranslation {
  id: string;
  text: string;
  pluralCategoryName: string;
  rating: string;
  createdAt: Date;
  user: User;
  targetLanguage: TargetLanguage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  string: String;
}

export interface User {
  id: string;
  username: string;
  fullName: string;
  avatarUrl: string;
}

export interface String {
  id: string;
  identifier: string;
  text: string;
  type: string;
  context: string;
  maxLength: string;
  isHidden: boolean;
  isDuplicate: boolean;
  masterStringId: string;
  revision: string;
  hasPlurals: boolean;
  labelIds: number[];
  url: string;
  createdAt: Date;
  updatedAt: Date;
  file: File;
  project: Project;
}
export interface OldTranslation {
  id: string;
  text: string;
  pluralCategoryName: string;
  rating: string;
  createdAt: Date;
}

export interface User {
  id: string;
  username: string;
  fullName: string;
  avatarUrl: string;
}

export interface Translation {
  id: string;
  text: string;
  pluralCategoryName: string;
  rating: string;
  createdAt: Date;
  user: User;
  targetLanguage: TargetLanguage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  string: String;
}

export interface CommentResolver {
  id: string;
  username: string;
  fullName: string;
  avatarUrl: string;
}

export interface Comment {
  id: string;
  text: string;
  type: string;
  issueType: string;
  issueStatus: string;
  resolvedAt: Date;
  createdAt: Date;
  // eslint-disable-next-line @typescript-eslint/ban-types
  string: String;
  targetLanguage: TargetLanguage;
  user: User;
  commentResolver: CommentResolver;
}

export interface TaskCreator {
  id: string;
  username: string;
  fullName: string;
  avatarUrl: string;
}

export interface Task {
  id: string;
  type: string;
  vendor: string;
  status: string;
  title: string;
  assignees: Assignee[];
  assignedTeams: AssignedTeam[];
  fileIds: number[];
  progress: Progress;
  description: string;
  hash: string;
  translationUrl: string;
  wordsCount: string;
  filesCount: string;
  commentsCount: string;
  deadline: Date;
  timeRange: string;
  workflowStepId: string;
  buyUrl: string;
  createdAt: Date;
  updatedAt: Date;
  sourceLanguage: SourceLanguage;
  targetLanguage: TargetLanguage;
  project: Project;
  taskCreator: TaskCreator;
  oldStatus: string;
  newStatus: string;
}

export interface Assignee {
  id: number;
  username: string;
  fullName: string;
  avatarUrl: string;
  wordsCount: number;
  wordsLeft: number;
}

export interface AssignedTeam {
  id: number;
  wordsCount: number;
}

export interface Progress {
  total: number;
  done: number;
  percent: number;
}

export interface SourceLanguage {
  id: string;
  name: string;
  editorCode: string;
  twoLettersCode: string;
  threeLettersCode: string;
  locale: string;
  androidCode: string;
  osxCode: string;
  osxLocale: string;
  textDirection: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dialectOf?: any;
}

export interface Event {
  event: string;
  file: File;
  targetLanguage: TargetLanguage;
  project: Project;
  build: Build;
  oldTranslation: OldTranslation;
  newTranslation: NewTranslation;
  user: User;
  // eslint-disable-next-line @typescript-eslint/ban-types
  string: String;
  translation: Translation;
  comment: Comment;
  task: Task;
}
