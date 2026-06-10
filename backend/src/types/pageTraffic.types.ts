export interface PageTrafficRequest {
  projectId: string;
  keyword: string;
  url: string;
}

export interface PageTrafficResponse {
  success: boolean;
  message: string;
  jobId?: string;
}