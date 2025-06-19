// types/Profile.ts

export interface ScoredValue<T = string> {
  value: T;
  confidence: number; // 0 to 1
}

export interface Profile {
  profile_id: string;
  tenant_id: string; // unique identifier for the tenant
  status: "processing" | "summarizing" | "ready";

  core_info?: {
    name?: ScoredValue<string>;
    age?: ScoredValue<number>;
    gender?: ScoredValue<string>;
    location?: ScoredValue<string>;
    language?: ScoredValue<string>;
  };

  interests?: {
    hobbies?: ScoredValue<string>[];
    music?: ScoredValue<string>[];
    food?: ScoredValue<string>[];
    books?: ScoredValue<string>[];
    movies?: ScoredValue<string>[];
    sports?: ScoredValue<string>[];
    travel?: ScoredValue<string>[];
    technology?: ScoredValue<string>[];
    art?: ScoredValue<string>[];
    gaming?: ScoredValue<string>[];
    fashion?: ScoredValue<string>[];
    fitness?: ScoredValue<string>[];
    pets?: ScoredValue<string>[];
    other?: ScoredValue<string>[];
  };

  personality?: {
    traits?: ScoredValue<string>[];
    mood_trends?: {
      default?: ScoredValue<string>;
      recent?: ScoredValue<string>;
    };
  };

  memories?: {
    event: string;
    date?: string;
    importance?: "low" | "medium" | "high";
    confidence?: number;
  }[];

  preferences?: {
    conversation_style?: ScoredValue<string>;
    topics_to_avoid?: ScoredValue<string>[];
  };

  field_timestamps?: {
    [section: string]: string; // ISO timestamp
  };

  update_log?: {
    extracted_on: string;
    changes: Partial<Profile>;
  }[];

  last_updated: Date;

  created_at: Date; // ISO timestamp

  summary?: string; // optional summary of the profile
}
