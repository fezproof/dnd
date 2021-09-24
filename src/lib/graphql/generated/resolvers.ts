import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Parsed html prose */
  Prose: any;
};

export type Campaign = {
  __typename?: 'Campaign';
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  font?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['Prose']>;
  image?: Maybe<Scalars['String']>;
  players?: Maybe<Array<Maybe<Player>>>;
  logs?: Maybe<Array<Maybe<Log>>>;
};

export type Content = {
  __typename?: 'Content';
  excerpt?: Maybe<Scalars['Prose']>;
  prose?: Maybe<Scalars['Prose']>;
  raw?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  filePath: Scalars['String'];
  src?: Maybe<Scalars['String']>;
};

export type Log = {
  __typename?: 'Log';
  id: Scalars['ID'];
  date?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Content>;
  image?: Maybe<Scalars['String']>;
  campaign: Campaign;
};


export type LogImageArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Player = {
  __typename?: 'Player';
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};


export type PlayerImageArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};


export type Query = {
  __typename?: 'Query';
  campaigns?: Maybe<Array<Maybe<Campaign>>>;
  campaign?: Maybe<Campaign>;
  log?: Maybe<Log>;
  player?: Maybe<Player>;
  players?: Maybe<Array<Maybe<Player>>>;
};


export type QueryCampaignArgs = {
  id: Scalars['ID'];
};


export type QueryLogArgs = {
  id: Scalars['ID'];
  campaignId: Scalars['ID'];
};


export type QueryPlayerArgs = {
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Campaign: ResolverTypeWrapper<Campaign>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Content: ResolverTypeWrapper<Content>;
  Image: ResolverTypeWrapper<Image>;
  Log: ResolverTypeWrapper<Log>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Player: ResolverTypeWrapper<Player>;
  Prose: ResolverTypeWrapper<Scalars['Prose']>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Campaign: Campaign;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Content: Content;
  Image: Image;
  Log: Log;
  Int: Scalars['Int'];
  Player: Player;
  Prose: Scalars['Prose'];
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type CampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['Campaign'] = ResolversParentTypes['Campaign']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  font?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  excerpt?: Resolver<Maybe<ResolversTypes['Prose']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
  logs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Log']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Content'] = ResolversParentTypes['Content']> = {
  excerpt?: Resolver<Maybe<ResolversTypes['Prose']>, ParentType, ContextType>;
  prose?: Resolver<Maybe<ResolversTypes['Prose']>, ParentType, ContextType>;
  raw?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  filePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<LogImageArgs, never>>;
  campaign?: Resolver<ResolversTypes['Campaign'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  excerpt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<PlayerImageArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ProseScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Prose'], any> {
  name: 'Prose';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  campaigns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Campaign']>>>, ParentType, ContextType>;
  campaign?: Resolver<Maybe<ResolversTypes['Campaign']>, ParentType, ContextType, RequireFields<QueryCampaignArgs, 'id'>>;
  log?: Resolver<Maybe<ResolversTypes['Log']>, ParentType, ContextType, RequireFields<QueryLogArgs, 'id' | 'campaignId'>>;
  player?: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<QueryPlayerArgs, 'id'>>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['Player']>>>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Campaign?: CampaignResolvers<ContextType>;
  Content?: ContentResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Log?: LogResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  Prose?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
