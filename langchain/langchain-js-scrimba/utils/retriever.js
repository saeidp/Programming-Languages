import 'dotenv/config'; // Automatically loads .env variables

import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { createClient } from "@supabase/supabase-js";
import { BedrockEmbeddings } from "@langchain/aws";



const sbApiKey = process.env.SUPABASE_API_KEY
const sbUrl = process.env.SUPABASE_URL
const client = createClient(sbUrl, sbApiKey)

const embeddings = new BedrockEmbeddings({
    model: "amazon.titan-embed-image-v1" ,
    region: "ap-southeast-2",
});

const vectorStore = new SupabaseVectorStore(embeddings, {
    client,
    tableName: 'documents',
    queryName: 'match_documents'
})
const retriever = vectorStore.asRetriever()

export { retriever }