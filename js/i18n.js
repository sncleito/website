// Internationalization system for João Gilberto's website
class I18n {
  constructor() {
    this.currentLanguage = 'en';
    this.translations = {};
    this.init();
  }

  init() {
    this.loadTranslations();
    this.createLanguageToggle();
    this.updateContent();
    this.bindEvents();
  }

  loadTranslations() {
    this.translations = {
      en: {
        // Navigation
        'nav.about': 'About',
        'nav.research': 'Research', 
        'nav.technical': 'Skills',
        'nav.hobbies': 'Hobbies',
        
        // About section
        'about.title': 'About Me',
        'about.description': "I'm a Computer Science graduate student at DCC-UFMG researching multi-robot perimeter defense at VeRLab. Skilled in full-stack development, robotics, and data science. Passionate about digital art, chess, and team sports like futsal and volleyball.",
        
        // Research section
        'research.title': 'Current Research',
        'research.ai.title': 'Artificial Intelligence',
        'research.ai.project': 'Adaptive Team Formation for Perimeter Defense in Multi-Robot Systems (2023-today)',
        'research.ai.description': 'The Perimeter Defense problem is a particular case in the application of multi-robot systems, since we have the presence of adversarial agents, that is, agents that act against the success of the entire mission.',
        'research.ai.funding': 'Funding: CNPq (Brazil).',
        'research.ai.location': 'Location: DCC - UFMG (Brazil).',
        'research.cv.title': 'Computer Vision',
        'research.cv.project': 'Computer Vision solution to construction site (2023-today)',
        'research.cv.description': 'The Multiview System enables the monitoring of construction and manufacturing processes on industrial sites using computer vision. This project focuses on investigating techniques, models, and algorithms to develop a system for the automatic semantic labeling of elements identified in point clouds. It aims to create innovative solutions for point cloud analysis.',
        'research.cv.funding': 'Funding: Petrobras (Brazil).',
        'research.cv.location': 'Location: DCC - UFMG (Brazil).',
        
        // Technical Skills section
        'skills.title': 'Technical Skills',
        'skills.web.title': 'Web Frameworks',
        'skills.backend.title': 'Backend',
        'skills.frontend.title': 'Frontend',
        'skills.devops.title': 'DevOps & Cloud',
        'skills.programming.title': 'Programming',
        'skills.datascience.title': 'Data Science',
        'skills.robotics.title': 'Robotics',
        
        // Hobbies section
        'hobbies.title': 'Arts & Sports',
        'hobbies.drawing.title': 'Digital Drawing',
        'hobbies.drawing.description': 'I have been sporadically drawing digitally. I use Krita for most of my drawings, but I also use Gimp for some projects. I have been focusing on fan art, but I also enjoy drawing original characters and concepts.',
        'hobbies.drawing.tools': 'Drawing Tools:',
        'hobbies.chess.title': 'Chess',
        'hobbies.chess.description': 'I\'m a chess hobbyist. I enjoy solving chess puzzles and playing casual games with friends sometimes.',
        'hobbies.chess.platforms': 'Platforms:',
        'hobbies.futsal.title': 'Futsal',
        'hobbies.futsal.description': 'I am part of the powerful team Fibonapoli φ(c). We participate in the DCC futsal championship,' +
                                      'we have never won the competition but it is fun to play and socialize. I play as a field player, but I am also the second goalkeeper.',
        'hobbies.volleyball.title': 'Volleyball',
        'hobbies.volleyball.description': 'I sporadically play very low performance volleyball with the MatComp mates, the infamous "MatVôlei". I enjoy the sport because it is a great way to socialize.',
        'hobbies.gym.title': 'Gym',
        'hobbies.gym.description': 'I try to maintain a healthy lifestyle by going to the gym regularly. A healthy body is a healthy mind.',

        'hobbies.social': 'Social Networks:',

        // Language toggle
        'lang.toggle': 'PT',
        'lang.current': 'English'
      },
      pt: {
        // Navigation
        'nav.about': 'Sobre',
        'nav.research': 'Pesquisa',
        'nav.technical': 'Habilidades', 
        'nav.hobbies': 'Hobbies',
        
        // About section
        'about.title': 'Sobre Mim',
        'about.description': 'Sou estudante de pós-graduação em Ciência da Computação (DCC-UFMG) pesquisando defesa de perímetro multi-robô no VeRLab. Especializado em desenvolvimento full-stack, robótica e ciência de dados. Apaixonado por arte digital, xadrez e esportes coletivos como futsal e vôlei.',

        // Research section
        'research.title': 'Pesquisa Atual',
        'research.ai.title': 'Inteligência Artificial',
        'research.ai.project': 'Formação Adaptativa de Equipes para Defesa de Perímetro em Sistemas Multi-Robô (2023-hoje)',
        'research.ai.description': 'O problema de Defesa de Perímetro é um caso particular na aplicação de sistemas multi-robô, pois temos a presença de agentes adversários, ou seja, agentes que agem contra o sucesso de toda a missão.',
        'research.ai.funding': 'Financiamento: CNPq (Brasil).',
        'research.ai.location': 'Local: DCC - UFMG (Brasil).',
        'research.cv.title': 'Visão Computacional',
        'research.cv.project': 'Solução de Visão Computacional para canteiro de obras (2023-hoje)',
        'research.cv.description': 'O Sistema Multivisão permite o monitoramento de processos de construção e manufatura em locais industriais usando visão computacional. Este projeto foca na investigação de técnicas, modelos e algoritmos para desenvolver um sistema para rotulagem semântica automática de elementos identificados em nuvens de pontos. Visa criar soluções inovadoras para análise de nuvens de pontos.',
        'research.cv.funding': 'Financiamento: Petrobras (Brasil).',
        'research.cv.location': 'Local: DCC - UFMG (Brasil).',
        
        // Technical Skills section
        'skills.title': 'Habilidades Técnicas',
        'skills.web.title': 'Frameworks Web',
        'skills.backend.title': 'Backend',
        'skills.frontend.title': 'Frontend',
        'skills.devops.title': 'DevOps & Cloud',
        'skills.programming.title': 'Programação',
        'skills.datascience.title': 'Ciência de Dados',
        'skills.robotics.title': 'Robótica',
        
        // Hobbies section
        'hobbies.title': 'Artes & Esportes',
        'hobbies.drawing.title': 'Desenho Digital',
        'hobbies.drawing.description': 'Tenho desenhado digitalmente esporadicamente. Comecei com um tablet Wacom Bamboo e depois mudei para um Wacom Intuos. Uso o Krita para a maioria dos meus desenhos, mas também uso o Gimp para alguns projetos. Tenho focado em fanarts, mas também gosto de desenhar personagens e conceitos originais.',
        'hobbies.drawing.tools': 'Ferramentas de Desenho:',
        'hobbies.chess.title': 'Xadrez',
        'hobbies.chess.description': 'Sou um entusiasta de xadrez. Gosto de resolver quebra-cabeças de xadrez e jogar partidas casuais com amigos às vezes.',
        'hobbies.chess.platforms': 'Redes Sociais:',
        'hobbies.futsal.title': 'Futsal',
        'hobbies.futsal.description': 'Sou parte da poderosíssima equipe Fibonapoli φ(c). Que participa do campeonato DCC de futsal, ' +
                                      'nunca vencemos a competição mas é divertido jogar e socializar. Jogo como jogador de linha, mas também sou o segundo goleiro.',
        'hobbies.volleyball.title': 'Vôlei',
        'hobbies.volleyball.description': 'Jogo esporadicamente vôlei de baixo desempenho com o pessoal da MatComp, o infame "MatVôlei". Gosto do esporte porque é uma ótima forma de socializar.',
        'hobbies.gym.title': 'Academia',
        'hobbies.gym.description': 'Tento também melhorar minha saúde geral. A academia é uma ótima maneira de aliviar o estresse e manter o corpo em forma.',

        'hobbies.social': 'Redes Sociais:',
        
        // Language toggle
        'lang.toggle': 'EN',
        'lang.current': 'Português'
      }
    };
  }

  createLanguageToggle() {
    const langToggle = document.createElement('button');
    langToggle.id = 'lang-toggle';
    langToggle.className = 'lang-toggle-btn';
    langToggle.innerHTML = `
      <i class="fas fa-globe"></i>
      <span>${this.t('lang.toggle')}</span>
    `;
    langToggle.title = this.t('lang.current');
    
    // Insert after the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.parentNode.insertBefore(langToggle, themeToggle.nextSibling);
  }

  bindEvents() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => this.toggleLanguage());
    }
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pt' : 'en';
    localStorage.setItem('language', this.currentLanguage);
    this.updateContent();
    this.updateToggleButton();
  }

  updateToggleButton() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.innerHTML = `
        <i class="fas fa-globe"></i>
        <span>${this.t('lang.toggle')}</span>
      `;
      langToggle.title = this.t('lang.current');
    }
  }

  t(key) {
    return this.translations[this.currentLanguage][key] || key;
  }

  updateContent() {
    // Update navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const target = item.getAttribute('data-target');
      if (target) {
        item.textContent = this.t(`nav.${target}`);
      }
    });

    // Update section titles and content
    this.updateElement('#about h2', 'about.title');
    this.updateElement('#about .full-content p', 'about.description');
    
    this.updateElement('#research h2', 'research.title');
    this.updateElement('#research .topic:nth-child(1) h4', 'research.ai.title');
    this.updateElement('#research .topic:nth-child(1) h5', 'research.ai.project');
    this.updateElement('#research .topic:nth-child(1) .topic-content p[name="ai-description"]', 'research.ai.description');
    this.updateElement('#research .topic:nth-child(1) .topic-content p[name="ai-local"]', 'research.ai.location');
    this.updateElement('#research .topic:nth-child(1) .topic-content p[name="ai-funding"]', 'research.ai.funding');

    this.updateElement('#research .topic:nth-child(2) h4', 'research.cv.title');
    this.updateElement('#research .topic:nth-child(2) h5', 'research.cv.project');
    this.updateElement('#research .topic:nth-child(2) .topic-content p[name="cv-description"]', 'research.cv.description');
    this.updateElement('#research .topic:nth-child(2) .topic-content p[name="cv-local"]', 'research.cv.location');
    this.updateElement('#research .topic:nth-child(2) .topic-content p[name="cv-funding"]', 'research.cv.funding');
    
    this.updateElement('#technical h2', 'skills.title');
    this.updateElement('#technical .topic:nth-child(1) h4', 'skills.web.title');
    this.updateElement('#technical .topic:nth-child(2) h4', 'skills.backend.title');
    this.updateElement('#technical .topic:nth-child(3) h4', 'skills.frontend.title');
    this.updateElement('#technical .topic:nth-child(4) h4', 'skills.devops.title');
    this.updateElement('#technical .topic:nth-child(5) h4', 'skills.programming.title');
    this.updateElement('#technical .topic:nth-child(6) h4', 'skills.datascience.title');
    this.updateElement('#technical .topic:nth-child(7) h4', 'skills.robotics.title');
    
    this.updateElement('#hobbies h2', 'hobbies.title');
    this.updateElement('#hobbies .topic:nth-child(1) h4', 'hobbies.drawing.title');
    this.updateElement('#hobbies .topic:nth-child(1) .topic-content p:first-child', 'hobbies.drawing.description');
    this.updateElement('#hobbies .topic:nth-child(1) .skill-icons p:first-child', 'hobbies.social');
    this.updateElement('#hobbies .topic:nth-child(1) .skill-icons p[name="drawing-tools"]', 'hobbies.drawing.tools');

    // Update chess section
    this.updateElement('#hobbies .topic:nth-child(6) h4', 'hobbies.chess.title');
    this.updateElement('#hobbies .topic:nth-child(6) .topic-content p:first-child', 'hobbies.chess.description');
    this.updateElement('#hobbies .topic:nth-child(6) .skill-icons p', 'hobbies.chess.platforms');

    // Update futsal section
    this.updateElement('#hobbies .topic:nth-child(3) h4', 'hobbies.futsal.title');
    this.updateElement('#hobbies .topic:nth-child(3) .topic-content p:first-child', 'hobbies.futsal.description');
    this.updateElement('#hobbies .topic:nth-child(3) .skill-icons p', 'hobbies.social');

    // Update volleyball section
    this.updateElement('#hobbies .topic:nth-child(4) h4', 'hobbies.volleyball.title');
    this.updateElement('#hobbies .topic:nth-child(4) .topic-content p:first-child', 'hobbies.volleyball.description');
    this.updateElement('#hobbies .topic:nth-child(4) .skill-icons p', 'hobbies.social');

    // Update gym section
    this.updateElement('#hobbies .topic:nth-child(5) h4', 'hobbies.gym.title');
    this.updateElement('#hobbies .topic:nth-child(5) .topic-content p:first-child', 'hobbies.gym.description');
    this.updateElement('#hobbies .topic:nth-child(5) .skill-icons p', 'hobbies.social');
  }

  updateElement(selector, translationKey) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = this.t(translationKey);
    }
  }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
});