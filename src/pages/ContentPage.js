import React from "react";
import { Container, Box, Typography, Divider, Toolbar } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contentVideo from "../assets/content.mp4";
import journeyImage from "../assets/journey.png";

const ContentPage = () => {
  return (
    <>
      <Header />
      <Toolbar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        {/* 頂部影片 */}
        <Box sx={{ width: "100%", mb: 4 }}>
          <video
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          >
            <source src={contentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>

        {/* Title & Author */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            My Deep Learning Journey: From Core Concepts to Practical Applications
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom align="center" sx={{ fontStyle: 'italic' }}>
            Joe Chen
          </Typography>
        </Box>

        {/* Introduction */}
        <Box sx={{ my: 4 }}>
          <Typography variant="body1" paragraph>
            My journey into AI and machine learning began at IBM, where I developed a rule-based chatbot. At that time, Generative AI hadn't yet emerged, and our chatbot relied on predefined question-and-answer logic rather than dynamic language generation. This experience introduced me to natural language processing (NLP) and rule-based AI systems, but it also showed me the limitations of traditional approaches.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Part 1 */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Part 1: Core Insights from Advanced Machine Learning Course
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom sx={{ mt: 2 }}>
            Clarity Moment in Deep Learning
          </Typography>
          <Typography variant="body1" paragraph>
            The Advanced Machine Learning course transformed my understanding of AI systems. The most significant revelation was seeing how we could move beyond rule-based chatbots to generative AI. At IBM, our biggest limitation was the rigid nature of predefined responses. Learning about instruction-tuned large language models showed me how AI could dynamically generate responses based on user queries, rather than relying on fixed logic.
          </Typography>
          <Typography variant="body1" paragraph>
            Multimodal learning was another eye-opening concept. Seeing how AI could integrate multiple types of data, like in hurricane forecasting systems that combine satellite imagery, weather data, and historical patterns, expanded my view of AI's possibilities. This integration of different data types to improve prediction accuracy showed me the true potential of modern AI systems.
          </Typography>
          <Typography variant="body1" paragraph>
            The power of transfer learning particularly resonated with my experience. During my time at IBM, training models from scratch wasn't feasible due to data limitations. Understanding how we could fine-tune existing models on smaller datasets would have completely changed our approach to chatbot development.
          </Typography>
          {/* 加入圖片 */}
          <Box sx={{ textAlign: "center", my: 2 }}>
            <img
              src={journeyImage}
              alt="Journey"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Typography variant="subtitle1" component="h5" gutterBottom sx={{ mt: 3 }}>
            Technical Concepts That Shaped My Understanding
          </Typography>
          <Typography variant="body1" paragraph>
            The course emphasized that deep learning's success stems from three key factors: big data, GPU acceleration, and improved architectures. Learning about Computer Vision and CNNs showed me how these systems solve complex problems by using convolutions to extract key features from images - crucial for applications like autonomous driving.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Part 2 */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Part 2: Diving Deep into Transformer LLMs - How Transformer LLMs Work from DeepLearning.AI
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom sx={{ mt: 2 }}>
            From Simple Words to Complex Understanding
          </Typography>
          <Typography variant="body1" paragraph>
            The journey through language model evolution was fascinating. We started with the limitations of treating language as a bag-of-words, where early NLP models lost all contextual meaning. The transition to word embeddings marked a crucial shift from sparse representations to dense vector embeddings, fundamentally changing how machines process language.
          </Typography>
          <Typography variant="body1" paragraph>
            The breakthrough came with attention mechanisms, which finally allowed models to understand context effectively. Learning how transformers replaced traditional RNNs with a fully attention-based architecture explained why modern language models are so powerful - they can process entire sequences in parallel, enabling faster and more scalable training.
          </Typography>
          <Typography variant="subtitle1" component="h5" gutterBottom sx={{ mt: 3 }}>
            Advanced Concepts in Modern LLMs
          </Typography>
          <Typography variant="body1" paragraph>
            Understanding tokenization strategies and their role in handling complex language patterns was crucial. The course covered how subword tokenization and Byte-Pair Encoding (BPE) help models handle unseen words efficiently. Learning about model training and scaling challenges helped me appreciate why LLMs require massive datasets and computational resources.
          </Typography>
          <Typography variant="body1" paragraph>
            A particularly interesting concept was the Mixture of Experts (MoE) technique, which improves efficiency in large models by activating only relevant parts of the network for each input. This showed me how the field is evolving to balance performance with computational efficiency.
          </Typography>
          <Typography variant="body1" paragraph>
            This knowledge would have been invaluable during my chatbot development at my previous work. Instead of rewriting chatbot scripts manually to adjust output formats, I could have leveraged AI for efficient text transformation. The future of AI clearly lies in multimodal, general-purpose models that can adapt to various tasks. As I continue my career in AI development, I'm excited to apply these insights to create more sophisticated and responsible AI systems.
          </Typography>
          <Typography variant="body1" paragraph>
            This journey has transformed me from someone who worked with basic rule-based systems at my previous work to a practitioner who understands and can implement modern AI approaches. The future of AI development looks incredibly promising, and I'm thrilled to be part of this revolution with a comprehensive understanding of both its technical foundations and practical applications.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Part 3 */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Part 3: Mastering AI-Assisted Development - ChatGPT Prompt Engineering for Developers from DeepLearning.AI
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom sx={{ mt: 2 }}>
            From Vague Queries to Systematic Prompting
          </Typography>
          <Typography variant="body1" paragraph>
            The course transformed my approach to AI-assisted development. I learned crucial principles:
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <Typography component="li" variant="body1">
              Writing clear and specific instructions
            </Typography>
            <Typography component="li" variant="body1">
              Giving models time to think
            </Typography>
            <Typography component="li" variant="body1">
              Using an iterative process of trying, analyzing, and refining prompts
            </Typography>
          </Box>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            My previous debugging struggles often involved asking single-shot questions and manually figuring out what went wrong when the output wasn't correct. The course taught me to approach AI assistance systematically, breaking down problems and iteratively improving prompts based on the responses.
          </Typography>
          <Typography variant="subtitle1" component="h5" gutterBottom sx={{ mt: 3 }}>
            Practical Applications in Development
          </Typography>
          <Typography variant="body1" paragraph>
            The course showed me how to use AI effectively for various development tasks:
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <Typography component="li" variant="body1">
              Summarizing and extracting key information from chatbot logs
            </Typography>
            <Typography component="li" variant="body1">
              Transforming code and optimizing implementations
            </Typography>
            <Typography component="li" variant="body1">
              Expanding and refining chatbot responses to be more natural and engaging
            </Typography>
            <Typography component="li" variant="body1">
              Building multi-turn conversations with contextual memory
            </Typography>
          </Box>
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            Most importantly, I learned how to handle model limitations and reduce AI hallucinations by asking models to find relevant information before answering and encouraging retrieval-based approaches for high-accuracy requirements.
          </Typography>
          <Typography variant="body1" paragraph>
            Looking back, this comprehensive learning journey has equipped me with both theoretical understanding and practical skills. From the foundational concepts of deep learning to the intricacies of transformer models and the practical aspects of AI-assisted development, each course has contributed to my growth as an AI practitioner.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Part 4 */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Part 4: Describe how I used AI tools in my writing process
          </Typography>
          <Typography variant="body1" paragraph>
            To complete this blog post, I leveraged AI tools throughout the writing process to enhance structure. I began by analyzing my Advanced Machine Learning course materials and online course content, using AI to summarize key concepts and extract technical insights. This helped me organize my thoughts into a structured outline. Since I wanted to connect my chatbot development experience at IBM with my learnings, I refined my writing with my personal experience. Moreover, AI-assisted refinements improved technical explanations and made difficult concepts more understandable in a way that was both concise and engaging.
          </Typography>
          <Typography variant="body1" paragraph>
            I originally wrote the ideas in bullet-point format. Once I finalized my structured outline, I provided it to Claude to generate a cohesive and professional blog post. I then carefully reviewed and edited the output, ensuring it maintained my personal voice, technical accuracy, and real-world experience. This AI-assisted process allowed me to craft a well-structured article that effectively synthesized my learning journey.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContentPage;
