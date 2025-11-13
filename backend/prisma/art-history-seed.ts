import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const artHistoryProgramme = {
  name: 'Art History',
  code: 'ARTHIST-T',
  description: 'Comprehensive study of art history from ancient to contemporary periods, with special focus on African and Zimbabwean art traditions. Covers major art movements, critical theory, and curatorial practices.',
  level: 'TERTIARY' as EducationLevel,
  category: 'Art History & Visual Studies',
  isCompulsory: false,
  icon: '🖼️',
  topics: [
    // 1. Introduction to Art History
    {
      title: 'Introduction to Art History',
      description: 'Overview of African, European, Asian, and American art traditions. Introduction to key movements, styles, and methodologies for studying art history.',
      order: 1
    },
    {
      title: 'Key Art Movements & Styles',
      description: 'Survey of major art movements from ancient civilizations to modern times. Understanding stylistic characteristics and historical contexts.',
      order: 2
    },
    {
      title: 'Global Art Traditions',
      description: 'Comparative study of art traditions across continents. African, Asian, European, and American artistic heritage.',
      order: 3
    },

    // 2. African Art & Architecture
    {
      title: 'Pre-Colonial African Art',
      description: 'Ancient African civilizations and their artistic achievements. Benin bronzes, Nok terracottas, and Great Zimbabwe architecture.',
      order: 4
    },
    {
      title: 'Stone Sculpture Traditions',
      description: 'Zimbabwe Shona stone sculpture tradition. Techniques, themes, and contemporary practitioners. International recognition and market.',
      order: 5
    },
    {
      title: 'African Rock Art',
      description: 'San rock paintings in Matobo Hills and Chinhoyi Caves. Interpretation, preservation, and cultural significance.',
      order: 6
    },
    {
      title: 'African Textiles & Crafts',
      description: 'Traditional African textiles, pottery, basketry, and metalwork. Cultural meanings and contemporary applications.',
      order: 7
    },
    {
      title: 'African Architecture',
      description: 'Traditional and contemporary African architecture. Great Zimbabwe, Timbuktu, and modern African design.',
      order: 8
    },

    // 3. Zimbabwean Art History
    {
      title: 'Shona Stone Sculpture Movement',
      description: 'History of modern Shona sculpture from 1950s to present. Key artists: Takawira, Mukomberanwa, Ndandarika.',
      order: 9
    },
    {
      title: 'Liberation-Era Art',
      description: 'Art during Zimbabwe\'s liberation struggle. Political posters, protest art, and nationalist imagery.',
      order: 10
    },
    {
      title: 'Contemporary Zimbabwean Artists',
      description: 'Current generation of Zimbabwean artists. Painting, sculpture, installation, and mixed media.',
      order: 11
    },
    {
      title: 'Zimbabwean Art Market',
      description: 'Art galleries, collectors, and international market. Economic aspects of Zimbabwean art.',
      order: 12
    },

    // 4. Western Art Traditions
    {
      title: 'Classical Greek & Roman Art',
      description: 'Ancient Greek and Roman sculpture, architecture, and painting. Classical ideals and their influence.',
      order: 13
    },
    {
      title: 'Medieval & Byzantine Art',
      description: 'Christian art of the Middle Ages. Illuminated manuscripts, cathedral architecture, and iconography.',
      order: 14
    },
    {
      title: 'Renaissance Art',
      description: 'Italian Renaissance masters: Leonardo, Michelangelo, Raphael. Humanist ideals and artistic innovation.',
      order: 15
    },
    {
      title: 'Baroque & Rococo',
      description: '17th-18th century European art. Drama, emotion, and ornate decoration.',
      order: 16
    },
    {
      title: 'Impressionism & Post-Impressionism',
      description: 'Monet, Renoir, Van Gogh, Cézanne. Revolutionary approaches to light, color, and perception.',
      order: 17
    },
    {
      title: 'Modern Art Movements',
      description: 'Expressionism, Cubism, Surrealism, Abstract Expressionism. 20th century artistic revolutions.',
      order: 18
    },

    // 5. Art Theory & Criticism
    {
      title: 'Reading & Analyzing Artworks',
      description: 'Methods for visual analysis. Formal elements, composition, iconography, and contextual interpretation.',
      order: 19
    },
    {
      title: 'Historical Methods',
      description: 'Approaches to art historical research. Connoisseurship, stylistic analysis, and archival research.',
      order: 20
    },
    {
      title: 'Critical Theory in Art',
      description: 'Marxist, feminist, and postcolonial critique of art. Power, representation, and ideology.',
      order: 21
    },
    {
      title: 'Semiotics & Visual Language',
      description: 'Signs, symbols, and meaning in visual art. Structural analysis of images.',
      order: 22
    },

    // 6. Visual Culture Studies
    {
      title: 'Photography & Visual Media',
      description: 'History of photography. Documentary, artistic, and commercial photography.',
      order: 23
    },
    {
      title: 'Film & Moving Images',
      description: 'Cinema as art form. Film aesthetics and visual storytelling.',
      order: 24
    },
    {
      title: 'Advertising & Commercial Art',
      description: 'Visual persuasion and consumer culture. Graphic design and branding.',
      order: 25
    },
    {
      title: 'Visual Symbolism',
      description: 'Understanding visual language. Cultural symbols and their meanings.',
      order: 26
    },

    // 7. Museum & Curatorial Studies
    {
      title: 'Exhibition Design',
      description: 'Planning and installing art exhibitions. Spatial design and visitor experience.',
      order: 27
    },
    {
      title: 'Curation Principles',
      description: 'Selecting, organizing, and interpreting artworks. Curatorial concepts and themes.',
      order: 28
    },
    {
      title: 'Art Conservation',
      description: 'Preservation and restoration of artworks. Conservation ethics and techniques.',
      order: 29
    },
    {
      title: 'Art Documentation',
      description: 'Cataloging, photographing, and recording artworks. Database management and provenance research.',
      order: 30
    },
    {
      title: 'Museum Management',
      description: 'Running art institutions. Collections management, funding, and public programming.',
      order: 31
    },

    // 8. Contemporary Art & Global Trends
    {
      title: 'Digital & New Media Art',
      description: 'Computer-generated art, video art, and interactive installations. Technology in contemporary art.',
      order: 32
    },
    {
      title: 'Performance Art',
      description: 'Body art, happenings, and live art. Ephemeral and time-based works.',
      order: 33
    },
    {
      title: 'Installation Art',
      description: 'Site-specific and immersive artworks. Environmental and spatial art.',
      order: 34
    },
    {
      title: 'Conceptual Art',
      description: 'Art as idea. Dematerialization and conceptual strategies.',
      order: 35
    },
    {
      title: 'International Art Markets',
      description: 'Art fairs, auctions, and galleries. Economics of contemporary art.',
      order: 36
    },
    {
      title: 'Globalization & Art',
      description: 'Contemporary art in global context. Biennales and transnational art movements.',
      order: 37
    },

    // 9. Art of Religion & Ritual
    {
      title: 'Religious Iconography',
      description: 'Symbols and imagery in religious art. Christian, Islamic, Hindu, and Buddhist iconography.',
      order: 38
    },
    {
      title: 'Sacred Art Traditions',
      description: 'Art for worship and devotion. Icons, altarpieces, and ritual objects.',
      order: 39
    },
    {
      title: 'African Religious Art',
      description: 'Art in African Traditional Religion. Masks, sculptures, and ceremonial objects.',
      order: 40
    },
    {
      title: 'Christian Art in Africa',
      description: 'Adaptation of Christian imagery in African context. Inculturation and syncretism.',
      order: 41
    },
    {
      title: 'Artistic Symbolism',
      description: 'Symbolic meanings in religious and ritual art. Interpretation of sacred imagery.',
      order: 42
    },

    // 10. Aesthetics & Philosophy of Art
    {
      title: 'Ancient Aesthetics',
      description: 'Plato and Aristotle on art and beauty. Classical theories of aesthetics.',
      order: 43
    },
    {
      title: 'Enlightenment Aesthetics',
      description: 'Kant and the judgment of taste. Burke on the sublime.',
      order: 44
    },
    {
      title: 'Modern Philosophy of Art',
      description: 'Hegel, Nietzsche, and Heidegger. Art, truth, and being.',
      order: 45
    },
    {
      title: 'Contemporary Aesthetics',
      description: 'Postmodern theories of art. Institutional theory and the end of art.',
      order: 46
    },
    {
      title: 'African Aesthetics',
      description: 'Indigenous African concepts of beauty and art. Ubuntu and communal aesthetics.',
      order: 47
    },
    {
      title: 'Art & Value',
      description: 'Questions of artistic value and meaning. What makes art good or significant?',
      order: 48
    }
  ]
};

async function seedArtHistory() {
  console.log('🎨 Starting Art History Programme seeding...\n');

  try {
    const { topics, ...programmeData } = artHistoryProgramme;

    // Upsert subject
    const createdProgramme = await prisma.subject.upsert({
      where: { code: artHistoryProgramme.code },
      update: programmeData,
      create: programmeData
    });

    console.log(`✅ ${artHistoryProgramme.name} (${artHistoryProgramme.category})`);

    // Create topics
    for (const topic of topics) {
      const existingTopic = await prisma.topic.findFirst({
        where: {
          subjectId: createdProgramme.id,
          title: topic.title
        }
      });

      if (existingTopic) {
        await prisma.topic.update({
          where: { id: existingTopic.id },
          data: {
            description: topic.description,
            order: topic.order
          }
        });
      } else {
        await prisma.topic.create({
          data: {
            ...topic,
            subjectId: createdProgramme.id
          }
        });
      }
    }

    console.log(`   └─ ${topics.length} topics/modules added\n`);

    console.log('✅ Art History Programme seeding complete!\n');
    
    // Print summary
    console.log('📊 Summary:');
    console.log(`   Programme: Art History`);
    console.log(`   Total Modules: ${topics.length}`);
    console.log(`   Module Categories:`);
    console.log(`   - Introduction to Art History (3 modules)`);
    console.log(`   - African Art & Architecture (5 modules)`);
    console.log(`   - Zimbabwean Art History (4 modules)`);
    console.log(`   - Western Art Traditions (6 modules)`);
    console.log(`   - Art Theory & Criticism (4 modules)`);
    console.log(`   - Visual Culture Studies (4 modules)`);
    console.log(`   - Museum & Curatorial Studies (5 modules)`);
    console.log(`   - Contemporary Art & Global Trends (6 modules)`);
    console.log(`   - Art of Religion & Ritual (5 modules)`);
    console.log(`   - Aesthetics & Philosophy of Art (6 modules)`);

  } catch (error) {
    console.error(`❌ Error seeding Art History:`, error);
  }
}

seedArtHistory()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
