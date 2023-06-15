---
date: 2019-09-28 12:00
last_modified_at: 2021-06-04 20:39
math: true
tags: 知识点整理 通选课
title: 《地震概论》2019年秋季学期（周四班）笔记
---
<style>
    h5 {
        bookmark-level: none;
    }

    .xz-sidenav-list > li > ul > li > ul {
        display: none;
    }
</style>

## 说明
本资料基于《地震概论》课程2019年秋季学期周四班板书内容整理，感谢蔡开奎、刘毅提供笔记资料，同时参考了Whq、Ytk、fu qihang等人整理的内容。由于本课程内容每次授课都会改变，因此本资料内容不适用于后续学期。

正文中斜体部分为补充说明部分，不在板书内容范围内，仅帮助理解。

由于本人手机像素极低，拍照能力极差，因此对板书的拍照效果差。如有较高质量照片，欢迎提供。

## 课程板书内容
### 第1章 地震学的研究范围和历史
- 历史记载全球死亡超过20万人的地震有6次，其中在中国就有4次。
- 按震源深度划分天然地震：浅源地震 < 60&nbsp;km，中源地震60 ~ 300&nbsp;km，深源地震 > 300&nbsp;km。
- 1966年邢台大地震，导致了1971年中国地震局成立。
- 地方震震中距 < 100&nbsp;km，近震震中距 < 1000&nbsp;km，远震震中距 > 1000&nbsp;km。
- 古代台湾人认为地震由地牛产生。
  - *古代人类对地震的认识：中国——大鳌鱼，日本——鲶鱼，印度——大象，希腊——气动说。*
  - *欧洲里斯本大地震使人们从神学中解放。*
- *地震学是一门应用物理学，属于固体地球物理学的分支，不是地质学。*

### 第2章 地震波
- 地震横波与纵波：
  - 纵波：P波，质点振动方向与振动（能量）传播方向一致。传播速度为$$v_P = \sqrt{E / \rho}$$。
  - 横波：S波，质点振动方向与振动（能量）传播方向垂直。传播速度为$$v_S = \sqrt{\mu / \rho}$$。
  - 纵波速度比横波速度大，一般$$v_P \approx \sqrt{3} v_S$$。

{% include figure.html src="https://file.moetu.org/images/2020/02/20/c492032838cb92d1770f89ed964e9b242752e9d801e2b7ea.png" alt="地震波的传播" width="360" height="315.77" %}

- 地震波的传播：<a class="xref-figure" href="#figure-c492032838cb92d1770f89ed964e9b242752e9d801e2b7ea.png"></a>。
  - *说明：地震波在传播到地表时几乎与地表垂直，以此可分析P波和S波的振动方向。*

{% include figure.html src="https://file.moetu.org/images/2020/02/20/89dd8af35a492fb456b497050a474350d88c30e4bf98b1fc.png" alt="S波的分解" width="360" height="177.60" %}

{% include figure.html src="https://file.moetu.org/images/2020/02/20/9dbc1ad89ba13e0c3b0b730f4a09c52bc2463eaf71ee8b88.gif" alt="SH波与SV波" width="263" height="286" %}

- S波的分解：<a class="xref-figure" href="#figure-89dd8af35a492fb456b497050a474350d88c30e4bf98b1fc.png"></a>。
  - *说明：S波可以分解成两个分量，平行于界面的分量为SH波，在入射线和界面法线构成的平面上（入射面）的分量为SV波。*
  - *SH波与SV波：<a class="xref-figure" href="#figure-9dbc1ad89ba13e0c3b0b730f4a09c52bc2463eaf71ee8b88.gif"></a>。*
- P波和S波的主要差异：
  - P波传播速度比S波快，地震图上先出现P波。
  - P波和S波的质点振动（偏振）方向相互垂直。
  - 一般情况下，三分量地震图上P波的垂直分量相对较强，S波的水平分量相对较强。
  - S波的低频成分比P波丰富。
  - 天然地震的振源破裂通常以剪切破裂和剪切错动为主，震源向外辐射的S波能量比P波的强。
  - P波通过时，质元无转动运动，而有体积变化，P波是一种无旋波。S波通过时，质元有转动，而无体积变化，S波是一种无散的等容波。
- 谚语：“地震不地震，抬头看吊灯”。
  - *说明：地震波中，P波上下振动，S波水平振动。而环境造成的振动不会产生水平方向的振动，因此当吊灯水平振动时，说明有地震发生。*
- P波使建筑物上下晃动，S波使建筑物水平晃动。
- *一般波序：P波、S波、勒夫面波、瑞利面波、地震尾波。*

### 第3章 地震波传播理论
- 射线理论：地震射线是波阵面法线的轨迹。计算方法：*（感谢[树洞Hans](https://pkuhelper.pku.edu.cn/hole/##1061096)提醒）*

$$t = \int_A^B \sqrt{1 + y'R} \mathrm dx.$$

- 波长很短：$$v = \lambda f$$，在高频近似（短波近似）的情况下，可用波射线来描述波的传播。
- 费马原理：当一个震动由介质中一点传播到另一点时，它所经过的途径会使其传播时间为一稳定值（最大、最小或拐点）。
- 斯涅耳定律：（证明见作业，<a class="xref" href="#chap-fei-ma-yuan-li"></a>）

$$\cfrac {\sin\theta_{\alpha1}} {v_{\alpha1}} = \cfrac {\sin\theta_{\beta1}} {v_{\beta1}} = \cfrac {\sin\theta_{\alpha2}} {v_{\alpha2}} = \cfrac {\sin\theta_{\beta2}} {v_{\beta2}}.$$

- 地球内部体波的传播：<a class="xref-figure" href="#figure-75443b2d861915d41d37374e3bb7c1f47dfccc8c7c7c145f.gif"></a>。
  - PcPS不可能存在（$$v_P > v_S$$导出$$\theta_P > \theta_S$$），ScSP可能存在。P夹角比S大。*（感谢[树洞Hans](https://pkuhelper.pku.edu.cn/hole/##1061096)提醒）*
  - *说明：P、S分别表示从震源发出、向地球内部传播的纵波和横波；c表示在地核界面上波的反射；K表示通过外核的纵波，地球的外核是液态，所以只有通过外核的纵波，而没有通过外核的横波；I、J分别表示通过内核的纵波、横波；i表示在内核界面的反射；p、s分别表示由震源向上（地面）传播的射线。*

{% include figure.html src="https://file.moetu.org/images/2020/02/20/75443b2d861915d41d37374e3bb7c1f47dfccc8c7c7c145f.gif" alt="地球内部体波的传播" width="360" height="347.38" %}

- *SH波不能产生P波：在水平面内振动不能引起垂直面振动。*
- *面波的走时曲线为直线。*
- *S-P的走时差较多依赖于距离而较少依赖于深度；而pP-P走时差主要由震源深度决定，较少得依赖于震中距。*
- 计算题：（《地震概论》课本第41页，思考题2）一个震源深度为10&nbsp;km的地震，多个区域台站记到的Pn波走时直线的斜率为0.125&nbsp;s/km，截距为$$\pu{3\sqrt{7} s}$$（约8&nbsp;s），若均匀地壳内P波速度已知为6&nbsp;km/s，试估计地幔顶部的P波速度和地壳厚度。*（感谢[树洞Louis](https://pkuhelper.pku.edu.cn/hole/##1061096)提醒）*

计算过程如下：

参考作业1（<a class="xref" href="#chap-shou-bo"></a>），Pn波走时公式：

$$T = \cfrac {X - (2H - h)\tan\theta_c} {v_2} + \cfrac {(2H - h)~/ \cos\theta_c} {v_1} = \cfrac {1} {v_2} + \left( \cfrac {(2H - h)~/ \cos\theta_c} {v_1} - \cfrac {(2H - h)\tan\theta_c} {v_2} \right),$$

$$\text{斜率 } k = \cfrac {1} {v_2},~ \text{截距 } b = (2H - h) \cfrac {v_2 - v_1 \sin \theta_c} {v_1 v_2 \cos \theta_c}.$$

其中：$$v_1$$题干已给出，为6&nbsp;km/s，求解变量$$h$$和$$v_2$$。

代入求解得：

$$v_2 = \cfrac {1} {k} = \pu{8 km/s},$$

$$\sin \theta_c = \cfrac {v_1} {v_2} = \cfrac {3} {4}, ~ \cos \theta_c = \sqrt {1 - \sin^2 \theta_c} = \cfrac {\sqrt{7}} {4},$$

$$2H - h = \cfrac {b v_1 v_2 \cos \theta_c} {v_2 - v_1 \sin \theta_c} = \pu{72 km},~ H = \pu{41 km}.$$

### 第4章 地球内部的结构
{% include figure.html src="/images/ItS-04-01.svg" alt="地球内部的结构" width="360" height="347.53" %}

- 地壳是通过研究首波而发现的。
- 大陆地区地壳平均厚度为35&nbsp;km，海洋地区地壳不到10&nbsp;km。大洋和大陆下面的地壳厚度不同。
- 用面波可以研究地壳性质，因为面波在地壳中运行。
- 液态外核的发现来源于人们发现了影区存在。固体内核的发现者是丹麦地震学家英格·莱曼。
- 为什么核幔边界叫古登堡面而不是奥尔德姆面：
  - 古登堡利用了反射震相。
  - 古登堡利用了更丰富的地震记录。
  - 古登堡更精确地计算了地核深度。
- 应用地震波去透视地球内部首先要研究地震图。
- 上地幔（410&nbsp;km以上）、过渡层（410 ~ 670&nbsp;km之间）及下地幔（670&nbsp;km以下）。
- 古登堡教授拥有更丰富的地震记录，得出了更精确的核介面深度估计，首次估计出地核深度为2900&nbsp;km。
- 地球内核是固体，最硬。地球外核是液态的，故横波不能通过外核。
- 壳幔介面是莫霍面（M介面），幔核介面是古登堡面（G介面）。
- 反演不一定准确。

### 第5章 地震机制
- 破裂面扩展速度不会超过P波速度。
- 地震效率7.5% ~ 15%。
  - *说明：地震效率是指一次地震中地震波释放的能量在整个应变能中所占的比例，其值等于地震波能量除以地震能。*
- 弹性回跳理论只是一种假说，而非事实。
  - *说明：弹性回跳理论的主要论点：岩石体破裂是由于相对位移产生的应变超过岩石强度；这种相对位移是在一个比较长的时期内逐渐达到最大值的；地震时发生的唯一物质移动是破裂面两边的物质向减少弹性应变的方向突然发生弹性回跳；地震引起的振动源于破裂面；地震时释放的能量在岩石破裂前是以弹性应变能的形式储存在岩石中的。*
- 环太平洋地震带集中了全球80%的浅震、90%的中源地震以及全部深震。
- 92%的地震发生在地壳中，8%发生在地幔上部，其上半部分多于下半部分。
- 地震学为板块构造学说提供三方面的证据：
  - 天然地震的空间位置，可以勾画板块的边界。
  - 震源机制解，可以确定板块活动的力学性质。
  - 地震测深所得深度速度分布，可以给出板块运动的物理条件。
- 全球性的地震带有三个：环太平洋地震带、阿尔卑斯-喜马拉雅地震带（亚欧地震带）和海岭地震带（大洋中脊地震带）。
- 地震较多的国家：日本、意大利、智利、秘鲁、土耳其。
- 我国地震较多的省级行政区：四川、云南、甘肃、新疆、西藏、台湾。
- 地震按来源分类：
  - 天然地震：构造、火山、陷落。
  - 人工：工业爆破、地下核爆。
- P波初动一直被用来确定震源机制解。爆炸产生的P波垂直向初动都是向上的，初动在震源球上无四象限分布特征，沙滩球全黑；正断层中间白，逆断层中间黑。
- 断层是岩石破裂面的相互移动，地震沿断层发生。断层面几何与应力相关。地震的震源机制解是断层作用类型的图示描述。虽然断层类型可以由地震波初动确定，但不能确定哪一个是真正的断层面。有两种可能：真平面－断层面；假平面－辅助面。
- 人沿走向看去，断层上盘在右，走向用正北顺时针量至走向方向的角度来表示。
- *判断走滑断层左旋和右旋的方式：如果一个观察者站在断层的一侧，面向断层，另一边的岩块向他左方滑动，那它就叫左滑（左旋）。或者说，从上往下看，顺时针是右旋，逆时针是左旋。*
- 地震波能量和震级的通用关系为：

$$\lg E = 11.8 + 1.5M.$$

### 第6章 地震仪及地震基本参数的测定
- 三角测量法：通过直接的三角测量发现震中的位置。
- 里氏震级$$M_{\text{L}}$$是最大地震波振幅以10为底的对数。
- 伍德-安德森的特殊地震仪记录到的振幅测量精度达到1&nbsp;<i>μ</i>m。*（感谢[@mike.frank](#rightComment)提醒）*

### 第7章 地震预报
- 地震灾害具有某种周期性。
- 地震预报不等于地震预测。地震预测的精度差，地震预报要求三要素（时间、地点、震级大小）。

### 第8章 宏观地震学
- 震级和烈度的主要区别：
  - 震级是微观标准，而烈度是宏观标准。
  - 震级唯一，而烈度不唯一。
- 某地的基本烈度是该地475年一遇的地震烈度。

### 第9章 勘探地震学
- 石油勘探的地球物理方法（简称“物探”）：重力勘探、磁性勘探、电法勘探、地震勘探。
  - *说明：物探法主要利用各种物探仪器记录到来自地下的多种信息，然后对底下的构造和岩性特性做出预测，是间接探测方法，勘探范围深、效率高。*
  - *重力勘探：利用岩石密度的差别在地面上测量重力变化。磁性勘探：利用岩石磁性的差别在地面上测量地磁场的变化。电法勘探：利用岩石电阻率的差别在地面上测量电场的变化。地震勘探：利用岩石波阻抗的差别在地面上记录地震波场的变化。*
  - *地震勘探精度高、分辨率高、探测深度大，应用最为广泛，占97%。*
- “怪坡”是假的。
  - *说明：所谓“怪坡”是指物体可以自行上坡的奇异现象。*
- 为什么在求取地下构造信息时，以反射波取代折射波？
  - 折射波在地质条件复杂的情况下, 容易导致解释错误。
    - *说明：约束条件少，解析解数目多。*
  - 反射波信噪⽐⾼，易辨识。
- 地震资料解释的成功率不高，约为25%。
  - *说明：实际应用中应综合前人已经做出的成果、钻井的资料、重力数据、地磁数据、地质资料等来进行解释。*

### 第10章 海啸
- 浅水波：用$$h$$代表海水的深度，$$\lambda$$代表波长，则$$\lambda \gg h$$的这种具有非常长的波长的重力波就叫做潜水波。
- 浅水波的传播速度只与海水深度有关，有$$v = \sqrt{gh}$$，其中：$$v$$为波的传播速度，$$g$$为重力加速度，$$h$$为海水深度。
- *海啸的波长约100 miles，传播速度约500 miles/h。*
- 计算题：如<a class="xref-figure" href="#figure-ItS-10-01.svg"></a>，计算浅水波从$$A$$点传播到$$D$$点所用的时间。

{% include figure.html src="/images/ItS-10-01.svg" alt="第10章计算题图" width="360" height="127.41" %}

计算过程如下：

先证明$$BC$$、$$CD$$段为匀变速直线运动。由公式，$$v = \sqrt{gh}$$，也即：

$$v^2 = gh.$$

两边对$$t$$取微分，得：

$$2v \cfrac {\mathrm dv}{\mathrm dt} = g \cfrac {\mathrm dh}{\mathrm dt},$$

由于倾斜角一定，有：

$$\cfrac {\mathrm dh}{\mathrm dx} = \tan \theta,$$

故：

$$2v \cfrac {\mathrm dv}{\mathrm dt} = g \cfrac {\mathrm dh}{\mathrm dx}\cfrac {\mathrm dx}{\mathrm dt} = g \tan \theta \cdot v,$$

两边约去$$v$$后得到：

$$\cfrac {\mathrm dv}{\mathrm dt} = \cfrac {g \tan \theta} {2},$$

即加速度为定值，故该运动为匀变速直线运动，可用平均速度公式。

求得$$v_A = v_B = \pu{200 m/s}$$，$$v_C = \pu{100 m/s}$$，$$v_D = 0$$。

则$$v_{AB} = \pu{200 m/s}$$，$$v_{BC} = \pu{150 m/s}$$，$$v_{CD} = \pu{50 m/s}$$。

则$$t_{AB} = \pu{1000 s}$$，$$t_{BC} = \pu{2000 s}$$，$$t_{CD} = \pu{600 s}$$。

总时长为3600 s = 1 h。

### 讨论课
- 中国古代木质结构建筑的抗震原理：柔性框架、台基隔震、斗拱擎托、榫卯连接。
- *抗震要求：小震不坏、中震可修、大震不倒。*
- *地震预警存在一些局限。*
- 汶川大地震的形成是逆冲型地震，右旋。青藏高原往东北冲，四川盆地往西南冲。
- 海啸与地震的关系：
  - 破坏性海啸多发生在地震带上。
  - 震中距海岸越远，海啸滞后于地震的时间越长。
  - （海啸强度）取决于地震变形区上覆水体的强度、震向快速位移量和变形区面积。
  - 破坏性海啸需要有大的水体被扰动。

## 课程作业
### 1. 直达波、反射波和首波
{: #chap-shou-bo}

##### 题干
证明：当震中距$$X$$大于一定值$$X_M$$时，首波将最先到达，并求出$$X_M$$。（题图见<a class="xref-figure" href="#figure-d6ef96e8c5ce41671a7c79d6333916b8bf2093a0ab96b31b.jpg"></a>）

{% include figure.html src="https://file.moetu.org/images/2020/02/20/d6ef96e8c5ce41671a7c79d6333916b8bf2093a0ab96b31b.jpg" alt="作业1题图" width="360" height="371.53" %}

##### 提示
直达波走时：

$$T_1 = \cfrac {X} {v_1},$$

首波走时：

$$T_2 = \cfrac {X - 2h\tan\theta_c} {v_2} + \cfrac {2h~/ \cos\theta_c} {v_1},$$

其中$$h$$为第一层的厚度。

本题要证明的是：存在$$X_m$$，当$$X \ge X_m$$时，$$T_1 \ge T_2$$，也即$$T_1 - T_2 \ge 0$$。

##### 解答
**证明**：设震源深度为$$h$$，地壳厚度为$$H$$，震中距为$$X$$。考虑$$X \gg h$$时的近似情况。

对于直达波，其走时为

$$T_1 = \cfrac {X} {v_1}.$$

对于首波，其在$$v_1$$介质中的走时为

$$T_{2,~1} = \cfrac {2h / \cos\theta_c} {v_1},$$

在$$v_2$$介质中的走时为

$$T_{2,~2} = \cfrac {X - 2h\tan\theta_c} {v_2},$$

其中，

$$\sin\theta_c = \cfrac {v_1}{v_2},~\cos\theta_c = \sqrt{\cfrac {v_2^2 - v_1^2} {v_2^2}},$$

则

$$T_2 = \cfrac {X - 2h\tan\theta_c} {v_2} + \cfrac {2h~/ \cos\theta_c} {v_1}.$$

出现首波的条件为$$T_1 \ge T_2$$，此时

$$X \cfrac {v_2 - v_1}{v_1v_2} \ge 2H \cfrac {v_2 - v_1 \sin\theta_c}{v_1v_2\cos\theta_c},$$

解得

$$X_M = 2H \sqrt {\cfrac {v_2 + v_1} {v_2 - v_1}}.$$

故当$$X \ge X_m$$时，首波最先到达。

### 2. 弹性波在介面上的反、透射
{: #chap-fei-ma-yuan-li }

##### 题干
利用费马原理证明存在波型转换时的斯涅耳定律：

$$\cfrac {\sin\theta_{\alpha1}} {v_{\alpha1}} = \cfrac {\sin\theta_{\beta1}} {v_{\beta1}} = \cfrac {\sin\theta_{\alpha2}} {v_{\alpha2}} = \cfrac {\sin\theta_{\beta2}} {v_{\beta2}}.$$

（题图见<a class="xref-figure" href="#figure-ItS-HW-02.svg"></a>）

{% include figure.html src="/images/ItS-HW-02.svg" alt="作业2题图" width="360" height="254.01" %}

##### 提示
第一个等号的证明参考讲义：Fermat原理 → Snell定律 (1)，只需将走时改为

$$t = \cfrac {\sqrt {h^2 + x^2}}{v_{\alpha1}} + \cfrac{\sqrt{r^2 + (L - x)^2}}{v_{\beta1}}.$$

第二个等号和第三个等号的证明参考讲义：Fermat原理 → Snell定律 (2)，注意P波速度在第一层和第二层分别为$$v_{\alpha1}$$和$$v_{\alpha2}$$，S波速度在第二层为$$v_{\beta2}$$。

##### 解答
对于折射波，走时为：

$$t = \cfrac {\sqrt {h^2 + x^2}}{v_{\alpha1}} + \cfrac{\sqrt{r^2 + (L - x)^2}}{v_{\beta1}}.$$

令$$t$$对$$x$$求导，得：

$$\cfrac {\mathrm dt}{\mathrm dx} = \cfrac {x}{v_{\alpha1}\sqrt{h^2 + x^2}} - \cfrac {L - x}{v_{\alpha2}\sqrt{r^2 + (L - x)^2}},$$

其中，

$$\cfrac {x}{\sqrt{h^2 + x^2}} = \sin\theta_{\alpha1}, ~ \cfrac {L - x}{\sqrt{r^2 + (L - x)^2}} = \sin\theta_{\alpha2}.$$

当$$\cfrac {\mathrm dt}{\mathrm dx} = 0$$时$$t$$存在极值，此时有

$$\cfrac {\sin\theta_{\alpha1}} {v_{\alpha1}} - \cfrac {\sin\theta_{\alpha2}} {v_{\alpha2}} = 0,$$

也即

$$\cfrac {\sin\theta_{\alpha1}} {v_{\alpha1}} = \cfrac {\sin\theta_{\alpha2}} {v_{\alpha2}}.$$

同理可证明其他两等式。

## 网络作业
### 问题1
##### 题干
某地区有3个地震台A、B、C。地震台A的坐标为(50 km, 10 km)，B的坐标为(10 km, 40 km)，C的坐标为(-10 km, 10 km)。一次它们接收到同一个地震，A、B、C台站的P波和S波的走时差分别为2 s、1.5 s、1 s。已知地震发生在地表，该地区P波和S波的速度分别为5 km/s和4 km/s。请求出震中的位置。

##### 解答
(10 km, 10 km)。

易知：

$$t = s \left ( \cfrac {1} {v_\mathrm{P}} - \cfrac {1} {v_\mathrm{S}} \right ).$$

变形得：

$$s = t \cfrac {v_\mathrm{S} - v_\mathrm{P}} {v_\mathrm{S} v_\mathrm{P}}.$$

代入数值，得：

$$\cfrac {v_\mathrm{S} - v_\mathrm{P}} {v_\mathrm{S} v_\mathrm{P}} = \pu{20 m/s}.$$

故震中距A、B、C三点的距离分别为40 km、30 km、20 km，以A、B、C三点为圆心画圆可得交点坐标为(10 km, 10 km)。

### 问题2
##### 题干
震级相差两级，释放的能量相差多少倍？

##### 解答
1000。

《地震概论》第76页，地震波能量和震级的通用关系为：

$$\lg E = 11.8 + 1.5M.$$

*（感谢[@mike.frank](#rightComment)提醒）*

### 问题3
##### 题干
全球地震活动最强烈的地震带是哪一个？（全球80%的浅源地震、90%的深源地震均集中在该带上，这是一条对人类危害最大的地震带。）

##### 解答
环太平洋地震带。

《地震概论》教材第77页。

### 问题4
##### 题干
某个台站使用伍德-安德森地震仪接收信号。某天，接收到一串地震波，经过分析，知道震中距离台站100 km。工作人员测量出这串地震波的峰值波振幅为1 cm，求该地震的震级为里氏几级？

##### 解答
4。

按定义，里氏震级为距震中100 km距离处峰值波振幅与1‰ mm的比值。

### 问题5
##### 题干
地震波来临时会有什么样的感觉？

##### 解答
先上下颠簸后左右摇晃。

P波上下振动，先到达；S波左右振动，后到达。

## 后记

作为全校第一大课，同时也是一门A类通选课，地概其实能讲出来的东西有很多，正如赵老师所说地震学是一门物理学，想要深入讲很容易。但是这门课偏偏又没有这么多要求，只要能把板书内容背下来，基本保证能上90。
{: .font-fang-song }

说实话，在我选这门课的时候就是冲着“给分好”这点来的，赵老师上课讲了什么我很少留意去听，最后也是靠着同学的笔记和自己的理解整理出来了一份总结，并公开分享给了所有人。得到96这个成绩，我并不意外，但同时也有点羞愧，毕竟自己确实没把多少心思放在这堂课上。
{: .font-fang-song }

树洞里有人说，感觉赵老师是“大智若愚”。的确，赵老师不可能不知道很多人不听课甚至不来上课，选课就是冲着给分好来的。但他似乎并不在意，每次上课除了讲课程内容外还会东扯西扯，引来哄堂大笑。说不定他想要的正是这种和同学们交流的热闹的感觉吧，不然为什么他要坚持每年三个学期都要开课呢？
{: .font-fang-song }

希望大家都来选课吧，不管是为了给分、为了理财还是为了什么，毕竟这课可能上一次少一次了。
{: .font-fang-song }

Xzonn
{: .font-fang-song .text-right }

2020年1月7日
{: .font-fang-song .text-right }

《地震概论》成绩公布后于燕园
{: .font-fang-song .text-right }