export interface IIssue {
  url: string | null;
  repository_url: string | null;
  labels_url: string | null;
  comments_url: string | null;
  events_url: string | null;
  html_url: string | null;
  id: number;
  node_id: string | null;
  number: number;
  title: string;
  user: {
    login: string | null;
    id: number;
    node_id: string | null;
    avatar_url: string | null;
    gravatar_id: string | null;
    url: string | null;
    html_url: string | null;
    followers_url: string | null;
    following_url: string | null;
    gists_url: string | null;
    starred_url: string | null;
    subscriptions_url: string | null;
    organizations_url: string | null;
    repos_url: string | null;
    events_url: string | null;
    received_events_url: string | null;
    type: string | null;
    site_admin: boolean;
  };
  labels: [
    {
      id: number;
      node_id: string | null;
      url: string | null;
      name: string | null;
      color: string | null;
      default: boolean;
      description: string | null;
    },
    {
      id: number;
      node_id: string | null;
      url: string | null;
      name: string | null;
      color: string | null;
      default: boolean;
      description: string | null;
    },
  ];
  state: string | null;
  locked: boolean;
  assignee: string | null;
  assignees: string[] | null;
  milestone: string | null;
  comments: number;
  created_at: string;
  updated_at: string | null;
  closed_at: string | null;
  author_association: string | null;
  active_lock_reason: string | null;
  body: string | null;
  reactions: {
    url: string | null;
    total_count: number;
    '+1': number;
    '-1': number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  timeline_url: string | null;
  performed_via_github_app: string | null;
  state_reason: string | null;
}
