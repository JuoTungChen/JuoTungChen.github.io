---
layout: default
# title: Home
---

<h1>Juo-Tung (Justin) Chen</h1>

<div style="display: flex; align-items: flex-start; gap: 30px; margin-bottom: 20px;">
    <div style="text-align: center; flex: 0 0 22%;">
        <img src="./assets/JuoTung_photo_2025_5.jpg" width="100%" style="border-radius: 50%; max-width: 180px;">
        <br>
        <strong>Juo-Tung (Justin) Chen</strong>
        <br>
    </div>
    <div style="flex: 1;">
        <p>
            I am a PhD Student @
            <a href="https://www.jhu.edu/">Johns Hopkins University</a> in Mechanical Engineering, advised by <a href="https://imerse.lcsr.jhu.edu/"><b>Axel Krieger</b></a> in the <a href="https://imerse.lcsr.jhu.edu/">Intelligent Medical Robotic Systems and Equipment Lab (IMERSE)</a>.
        </p>
        <p>
            I received my Master's degree in Robotics from Johns Hopkins University and my Bachelor's degree in Biomechatronics Engineering from National Taiwan University.
            During my masters, I worked in <a href="https://intuitivecomputing.github.io/">Intuitive Computing Lab</a> advised by <a href="https://www.cs.jhu.edu/~cmhuang/">Chien-Ming Huang</a>, and during my undergrad, I worked in
            <a href="http://rmml.bime.ntu.edu.tw/nturmmle.html">Robots and Medical Mechatronics Lab (RMML)</a> advised by <a href="https://www.bime.ntu.edu.tw/English/News_Photo_Content_n_100917_s_104178.html">Ping-Lang Yen</a>.
        </p>
        <h3><b>Research Interest</b></h3>
        My research sits at the intersection of <b>surgical robotics</b> and <b>robot learning</b>, with a focus on building autonomous surgical systems. I am driven by the following questions:
        <ol>
            <li>How can we train <b>surgical foundation models</b> that generalize across procedures, robot platforms, and institutions by scaling multi-modal data collection?</li>
            <li>How can <b>hierarchical imitation learning</b> enable robots to complete long-horizon surgical tasks that require both high-level reasoning and precise low-level control?</li>
            <li>How can <b>surgical tool pose estimation</b> from monocular video unlock large-scale pretraining data for surgical foundation models — by recovering kinematics from the vast amounts of existing surgical footage that lack robot state recordings?</li>
            <!-- <li>How can we build rigorous <b>benchmarks and evaluation frameworks</b> to measure and drive progress toward fully autonomous surgery?</li> -->
        </ol>
        <br><br>
        <div style="text-align: center;">
            &nbsp; <i class="fa fa-file"></i> <a href="https://drive.google.com/file/d/1dqBe-cxOBq6YENV34dAOBzhwg_Q4R5o4/view?usp=sharing">&nbsp; CV</a> &nbsp; |
            &nbsp; <i class="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/juo-tung-chen/">&nbsp; LinkedIn</a>  &nbsp; |
            &nbsp; <i class="fa fa-github"></i> <a href="https://github.com/JuoTungChen">&nbsp; GitHub</a>  &nbsp; |
            &nbsp; <i class="fa fa-graduation-cap"></i> <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH70aAXxk2fHAZPjPFlZOI1pwkNiaeLONfXh8d1Bk3ozfIDCi39IcHQp8BZHilhw_QL-Gnu_nLg_e4Ew6t-VeA&user=qqUqgWoAAAAJ">Google Scholar</a>  &nbsp; |
            &nbsp; <i class="fa fa-envelope"></i> <a href="mailto:jchen396@jhu.edu">&nbsp; Email</a>
        </div>
    </div>
</div>

<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">
    <tr>
        <h2>News</h2>
        <ul>
            <li><strong>[Apr, 2026]</strong> &nbsp;Our paper <a href="https://open-h.github.io/open-h-embodiment/">Open-H-Embodiment</a> is on arXiv!</li>
            <li><strong>[Feb, 2026]</strong> &nbsp;Our paper <a href="https://arxiv.org/abs/2510.16240">Cosmos-Surg-dVRK</a> got accepted to RA-L!</li>
            <li><strong>[Jan, 2026]</strong> &nbsp;<a href="https://www.nature.com/articles/s41597-025-06526-z">ImitateCholec</a> dataset paper published in Nature Scientific Data!</li>
            <li><strong>[Sep, 2025]</strong> &nbsp;Our paper <a href="https://suturebot.github.io/">SutureBot</a> was accepted to NeurIPS 2025!</li>
            <li><strong>[Jul, 2025]</strong> &nbsp;Our paper <a href="https://h-surgical-robot-transformer.github.io/">SRT-H</a> was featured on the cover of Science Robotics!</li>
            <li><strong>[Jun, 2025]</strong> &nbsp;Our paper <a href="https://ieeexplore.ieee.org/document/11247452">SurgiPose</a> got accepted to IROS 2025!</li>
        </ul>
    </tr>
</table>

<table width="100%" align="center" border="0" cellspacing="0" cellpadding="20">
    <h2>Publications</h2>
    <p style="font-size: 0.85em; color: #666; margin-top: -10px;">* Equal contribution</p>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/open-h/open_h_overview.png" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>Open-H-Embodiment: A Large-Scale Dataset for Enabling Foundation Models in Medical Robotics</b> <br>
            Nigel Nelson*, <strong>Juo-Tung Chen*</strong>, Jesse Haworth*, Xinhao Chen*, Lukas Zbinden*, Dianye Huang*, ..., Nassir Navab, Mahdi Azizian, Sean D. Huver, Axel Krieger<br>
            <span style="display:inline-block; background:#6B7280; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">Preprint 2026</span><br>
            <a href="https://arxiv.org/abs/2604.21017">Paper</a> &nbsp;|&nbsp;
            <a href="https://open-h.github.io/open-h-embodiment/">Website</a> &nbsp;|&nbsp;
            <a href="https://huggingface.co/datasets/nvidia/PhysicalAI-Robotics-Open-H-Embodiment/tree/main/Surgical">Dataset</a>
        </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/imitatecholec/imitate_cholec.png" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>ImitateCholec: A Multimodal Dataset for Long-Horizon Imitation Learning in Robotic Cholecystectomy</b> <br>
            Pascal Hansen, Ji Woong Brian Kim, Antony Goldenberg, <strong>Juo-Tung Chen</strong>, Yuanzhe Amos Li, Anton Deguet, Brandon White, De Ru Tsai, Richard Cha, Jeffrey Jopling, Paul Maria Scheikl, Axel Krieger<br>
            <span style="display:inline-block; background:#DC2626; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">Nature Scientific Data 2026</span><br>
            <a href="https://www.nature.com/articles/s41597-025-06526-z">Paper</a> &nbsp;|&nbsp;
            <a href="https://archive.data.jhu.edu/dataset.xhtml?persistentId=doi:10.7281/T1PF3FYK">Dataset</a>
        </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/cosmos/cosmos_surg.png" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>Cosmos-Surg-dVRK: World Foundation Model-based Automated Online Evaluation of Surgical Robot Policy Learning</b> <br>
            Lukas Zbinden, Nigel Nelson, <strong>Juo-Tung Chen</strong>, Xinhao Chen, Ji Woong Kim, Mahdi Azizian, Axel Krieger, Sean Huver<br>
            <span style="display:inline-block; background:#059669; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">RA-L 2025</span><br>
            <a href="https://arxiv.org/abs/2510.16240">Paper</a> &nbsp;|&nbsp;
            <a href="https://cosmos-surg-dvrk.github.io/">Website</a>
        </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/suturebot/teaser.gif" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>SutureBot: A Precision Framework & Benchmark For Autonomous End-to-End Suturing</b> <br>
            <strong>Juo-Tung Chen*</strong>, Jesse Haworth*, Nigel Nelson, Ji Woong Kim, Masoud Moghani, Chelsea Finn, Axel Krieger<br>
            <span style="display:inline-block; background:#7C3AED; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">NeurIPS 2025</span><br>
            <a href="https://suturebot.github.io/static/SutureBot_NeurIPS_2025.pdf">Paper</a> &nbsp;|&nbsp;
            <a href="https://suturebot.github.io/">Website</a> &nbsp;|&nbsp;
            <a href="https://huggingface.co/datasets/jchen396/SutureBot">Dataset</a>
        </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/SRT-H/teaser.gif" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>SRT-H: A Hierarchical Framework for Autonomous Surgery via Language Conditioned Imitation Learning</b> <br>
            Ji Woong Kim, <strong>Juo-Tung Chen</strong>, Pascal Hansen, Lucy Shi, Antony Goldenberg, Samuel Schmidgall, Paul Scheikl, Anton Deguet, Brandon White, De Ru Tsai, Richard Cha, Jeffrey Jopling, Chelsea Finn, Axel Krieger<br>
            <span style="display:inline-block; background:#0066CC; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">Science Robotics 2025</span><br>
            <a href="https://www.science.org/doi/10.1126/scirobotics.adt5254">Paper</a> &nbsp;|&nbsp;
            <a href="https://h-surgical-robot-transformer.github.io/">Website</a>
        </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/surgipose/graphical_abstract.jpeg" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>SurgiPose: Estimating Surgical Tool Kinematics from Monocular Video for Surgical Robot Learning</b> <br>
            <strong>Juo-Tung Chen</strong>, XinHao Chen, Ji Woong Kim, Paul Maria Scheikl, Richard Jaepyeong Cha, Axel Krieger<br>
            <span style="display:inline-block; background:#059669; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">IROS 2025</span><br>
            <a href="https://ieeexplore.ieee.org/document/11247452">Paper</a>
        </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/IROS2024/IROS.jpg" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>Reducing Performance Variability and Overcoming Limited Spatial Ability: Targeted Training for Remote Robot Teleoperation</b> <br>
            <strong>Juo-Tung Chen*</strong>, Tsung-Chi Lin*, Chien-Ming Huang<br>
            <span style="display:inline-block; background:#059669; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">IROS 2024</span><br>
            <a href="https://ieeexplore.ieee.org/document/10801973">Paper</a>
        </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/forgetful/teaser.jpg" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>Forgetful Large Language Models: Lessons Learned from Using LLMs in Robot Programming</b> <br>
            <strong>Juo-Tung Chen</strong>, Chien-Ming Huang<br>
            <span style="display:inline-block; background:#D97706; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">AAAI Symposium 2023</span><br>
            <a href="https://ojs.aaai.org/index.php/AAAI-SS/article/view/27721">Paper</a> &nbsp;|&nbsp;
            <a href="./projects/LLM/Forgetful-Large-Language-Models-Lessons-Learned-from-Using-LLMs-in-Robot-Programming.pdf">Slides</a>
        </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 0 0 30%;">
            <img src="./projects/alchemist/alchemist_teaser.jpg" width="100%" style="max-width: 300px;">
        </div>
        <div style="flex: 1;">
            <b>Alchemist: LLM-Aided End-User Development of Robot Applications</b> <br>
            Ulas Berk Karl, <strong>Juo-Tung Chen</strong>, Victor Nikhil Antony, Chien-Ming Huang<br>
            <span style="display:inline-block; background:#2563EB; color:white; font-size:0.75em; padding:2px 8px; border-radius:4px; font-weight:600;">HRI 2024</span><br>
            <a href="https://dl.acm.org/doi/abs/10.1145/3610977.3634969">Paper</a> &nbsp;|&nbsp;
            <a href="https://sites.google.com/view/llm-alchemist/home">Website</a>
        </div>
    </div>
</table>
