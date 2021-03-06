export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Prose: string;
};









export type GetCampaignQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCampaignQuery = { __typename?: 'Query', campaign?: Maybe<{ __typename?: 'Campaign', id: string, name?: Maybe<string>, font?: Maybe<string>, link?: Maybe<string>, image?: Maybe<{ __typename?: 'Image', src?: Maybe<string> }>, content?: Maybe<{ __typename?: 'Content', excerpt?: Maybe<string> }>, players?: Maybe<Array<{ __typename?: 'Player', id: string, link?: Maybe<string>, image?: Maybe<string>, name?: Maybe<string> }>>, logs?: Maybe<Array<{ __typename?: 'Log', id: string, name?: Maybe<string>, link?: Maybe<string>, image?: Maybe<string>, content?: Maybe<{ __typename?: 'Content', excerpt?: Maybe<string> }> }>> }> };

export type GetCampaignInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCampaignInfoQuery = { __typename?: 'Query', campaign?: Maybe<{ __typename?: 'Campaign', id: string, name?: Maybe<string>, font?: Maybe<string>, link?: Maybe<string>, image?: Maybe<{ __typename?: 'Image', src?: Maybe<string> }>, content?: Maybe<{ __typename?: 'Content', prose: string }> }> };

export type GetLogQueryVariables = Exact<{
  slug: Scalars['ID'];
  campaign: Scalars['ID'];
}>;


export type GetLogQuery = { __typename?: 'Query', log?: Maybe<{ __typename?: 'Log', id: string, date?: Maybe<string>, name?: Maybe<string>, image?: Maybe<string>, content?: Maybe<{ __typename?: 'Content', prose: string }>, campaign: { __typename?: 'Campaign', id: string, name?: Maybe<string>, link?: Maybe<string>, font?: Maybe<string> } }> };

export type GetCampaignsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCampaignsQuery = { __typename?: 'Query', campaigns?: Maybe<Array<Maybe<{ __typename?: 'Campaign', id: string, name?: Maybe<string>, font?: Maybe<string>, link?: Maybe<string>, image?: Maybe<{ __typename?: 'Image', src?: Maybe<string> }> }>>> };

export type GetPlayerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPlayerQuery = { __typename?: 'Query', player?: Maybe<{ __typename?: 'Player', id: string, name?: Maybe<string>, image?: Maybe<string>, content?: Maybe<{ __typename?: 'Content', prose: string }> }> };
