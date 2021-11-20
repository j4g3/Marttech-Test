export interface ReciveMessageUseCaseDTO {
  basicauth: string;
  text: string;
  room: string;
}

export interface ReciveMessageUseCaseResponseDTO {
  text: string;
  user_name: string;
}
