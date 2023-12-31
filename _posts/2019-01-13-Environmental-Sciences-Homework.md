---
class: exercise
date: 2019-01-13 12:00
last_modified_at: 2020-01-03 23:17
math: true
tags: 作业 环院专业课
title: 《环境科学》作业
---
### 物化部分
#### 请写出计算地球大气温室效应所需要的物理概念。取太阳常数$$S_0 = \pu{1367 W*m-2}$$，地表反照率$$A = 0.3$$，计算地气系统辐射平衡时的地球有效温度。
对于地球系统，其温度保持相对平衡，其接收的辐射等于其发射的辐射。太阳队地球辐射面积为地球截面积$$\pi R^2$$，其中$$R$$为地球半径，

$$F_1 = S_0\pi R^2(1-A),$$

其中$$S_0$$为太阳常数，$$A$$为地表反照率。地球近似看做黑体，设其有效温度为$$T_e$$，根据斯蒂芬-玻尔兹曼定律：

$$F_2 = \sigma T^4,$$

其中$$\sigma$$为斯蒂芬-玻尔兹曼常数。由$$F_1 = F_2$$得：

$$T_e = \sqrt[4]{\cfrac{S_0(1 - A)}{4\sigma}},$$

代入数值得：

$$T_e = \pu{255 K},$$

即地气系统辐射平衡时地球的有效温度约为$$\pu{-18 ^\circ C}$$。

由于地球地球表面存在大气，大气对太阳辐射和地表辐射具有一定吸收能力，且自身也会放出辐射，因此大气对维持地球温度具有重要意义。为计算地球大气温室效应，对大气顶部辐射平衡，有接受的太阳辐射等于大气向外层的辐射与地表辐射未被大气吸收部分之和，列方程得：

$$S_0\pi R^2(1 - A) = [\sigma T_a^4 A_L + \sigma T_g^4(1 - A_L)]\cdot 4\pi R^2,$$

其中$$A$$为大气层顶部反照率（行星反照率），$$T_a$$为大气温度，$$T_g$$为地表温度，$$A_L$$为大气对地表辐射（长波辐射）的吸收率。对地表辐射平衡，有接受的太阳辐射未被大气吸收部分与大气向内层的辐射之和等于地表辐射，列方程得：

$$S_0\pi R^2(1 - A)(1 - A_s) + 4\pi R^2\sigma T_a^4 A_L =  4\pi R^2\sigma T_g^4,$$

其中$$A_s$$为大气对太阳辐射（短波辐射）的吸收率。联立上述方程可求解。

#### 为什么说高处不胜寒？请推算底层大气温度随高度增加的变化率。
由分析可知，一般情况下，大气温度随海拔升高而降低，因此高处较为寒冷。具体分析过程如下：

考虑单位质量的气体随垂直运动过程中的能量变化，设其先做等容变化再做等压变化，则：

$$\mathrm dQ = \mathrm dE + \mathrm dW = C_V \mathrm dT + p\mathrm dV,$$

其中$$\mathrm dQ$$为该过程能量变化，$$C_V$$为等容比热容。由理想气体状态方程，$$pV = mRT$$，对单位质量气体$$pV = RT$$，其中$$R = \pu{0.287 J*g-1*K-1}$$，求微分得：

$$p\mathrm dV + V\mathrm dp = R\mathrm dT.$$

等压热容与等容热容关系为：

$$C_p = C_V + R,$$

其中$$C_p = \pu{1.005 J*g-1*K-1}$$。对绝热过程，$$\mathrm dQ = 0$$，整理得：

$$\mathrm dQ = (C_p - R)\mathrm dT + (R\mathrm dT - V\mathrm dP) = C_p \mathrm dT - RT\cfrac{\mathrm dp} p = 0,$$

即：

$$\mathrm dT = \cfrac {RT}{C_p}\cfrac{\mathrm dp} p.$$

考虑该气块受力平衡条件，由气团稳定性可推出其上下表面压力差与其重力相等，即：

$$S\mathrm dp = \rho Sg\mathrm dz,$$

即：

$$\cfrac {\mathrm dp}{\mathrm dz} = -\rho g.$$

可推出：

$${\mathrm dT}{\mathrm dz} = \cfrac {RT}{C_pp}\cfrac{\mathrm dp}{\mathrm dz} = -\cfrac {RT}{C_pp} \rho g$$

其中$$p = \rho RT$$，故：

$$\gamma_d = {\mathrm dT}{\mathrm dz} = -\cfrac g{C_p},$$

代入数值计算：

$$\gamma_d = \pu{1 ^\circ C/ 100 m}.$$

#### 在某一天观测到近地面每升高$$\pu{100 m}$$大气温度降低$$\pu{0.8 ^\circ C}$$, 这时近地面大气处于未饱和状态。请分析这时大气的稳定性。
对未饱和气团，近似看作干绝热过程，$$\gamma_d = \pu{1 ^\circ C/ 100 m}$$。当该气团上升$$\pu{100 m}$$时，其温度降低$$\pu{1 ^\circ C}$$，相比周围大气温度更低，因此趋向于下降返回原位置；反之当其下降时相比周围大气温度更高，趋于上升返回原位置，因此此时大气稳定。

#### 请写出大气中生成$$\ce{OH}$$自由基的主要光化学反应。
##### 臭氧光分解

$$\ce{O3 + }h\nu(< \pu{310 nm})\ce{ -> O2 (^1\Delta_g) + O(^1D)},$$

$$\ce{O(^1D) + H2O (g) -> 2OH.}.$$

##### 亚硝酸光分解

$$\ce{HONO +}h\nu(< \pu{400 nm})\ce{ -> OH. + NO}.$$

##### 过氧化氢光分解

$$\ce{H2O2 +}h\nu(< \pu{290 nm})\ce{ -> 2OH.}.$$

##### 甲醛

$$\ce{HCHO +}h\nu\ce{-> H. + HCO.},$$

其中

$$\ce{H. ->[O2] HO2. ->[NO] OH. + NO2}.$$

#### 请写出$$\ce{OH}$$自由基和环己烯的主要反应机理。
$$\ce{OH.}$$与<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="261.62 353.6 29.5 25.55" width="35" height="31"><g><g><g><path d="M269 379.15 L269 379.15 L269.17 378.85 L269.34 378.55 L283.41 378.55 L283.58 378.85 L283.75 379.15 Z" /></g><g><path d="M283.75 379.15 L283.75 379.15 L283.58 378.85 L283.41 378.55 L290.43 366.38 L290.78 366.38 L291.13 366.38 Z" /></g><g><path d="M291.13 366.38 L291.13 366.38 L290.78 366.38 L290.43 366.38 L283.41 354.2 L283.58 353.9 L283.75 353.6 Z" /></g><g><path d="M283.75 353.6 L283.75 353.6 L283.58 353.9 L283.41 354.2 L269.34 354.2 L269.17 353.9 L269 353.6 Z" /><line x1="282.08" y1="356.49" x2="270.67" y2="356.49" stroke-width="0.6" shape-rendering="auto" /></g><g><path d="M269 353.6 L269 353.6 L269.17 353.9 L269.34 354.2 L262.32 366.38 L261.97 366.38 L261.62 366.38 Z" /></g><g><path d="M261.62 366.38 L261.62 366.38 L261.97 366.38 L262.32 366.38 L269.34 378.55 L269.17 378.85 L269 379.15 Z" /></g></g></g></svg>反应式如下：

$$\ce{OH. +}$$<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="261.62 353.6 29.5 25.55" width="35" height="31"><g><g><g><path d="M269 379.15 L269 379.15 L269.17 378.85 L269.34 378.55 L283.41 378.55 L283.58 378.85 L283.75 379.15 Z" /></g><g><path d="M283.75 379.15 L283.75 379.15 L283.58 378.85 L283.41 378.55 L290.43 366.38 L290.78 366.38 L291.13 366.38 Z" /></g><g><path d="M291.13 366.38 L291.13 366.38 L290.78 366.38 L290.43 366.38 L283.41 354.2 L283.58 353.9 L283.75 353.6 Z" /></g><g><path d="M283.75 353.6 L283.75 353.6 L283.58 353.9 L283.41 354.2 L269.34 354.2 L269.17 353.9 L269 353.6 Z" /><line x1="282.08" y1="356.49" x2="270.67" y2="356.49" stroke-width="0.6" shape-rendering="auto" /></g><g><path d="M269 353.6 L269 353.6 L269.17 353.9 L269.34 354.2 L262.32 366.38 L261.97 366.38 L261.62 366.38 Z" /></g><g><path d="M261.62 366.38 L261.62 366.38 L261.97 366.38 L262.32 366.38 L269.34 378.55 L269.17 378.85 L269 379.15 Z" /></g></g></g></svg>$$\ce{->}$$<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="256.26 345.27 40.23 42.21" width="48" height="51"><g><g><g><path d="M263.64 387.48 L263.64 387.48 L263.81 387.18 L263.98 386.88 L278.04 386.88 L278.21 387.18 L278.38 387.48 Z" /></g><g><path d="M278.38 387.48 L278.38 387.48 L278.21 387.18 L278.04 386.88 L285.06 374.71 L285.41 374.71 L285.76 374.71 Z" /></g><g><path d="M285.76 374.71 L285.76 374.71 L285.41 374.71 L285.06 374.71 L278.04 362.54 L278.21 362.24 L278.56 362.24 Z" /></g><g><path d="M278.04 361.94 L278.04 361.94 L278.21 362.24 L278.04 362.54 L263.98 362.54 L263.81 362.24 L263.64 361.94 Z" /></g><g><path d="M263.64 361.94 L263.64 361.94 L263.81 362.24 L263.98 362.54 L256.96 374.71 L256.61 374.71 L256.26 374.71 Z" /></g><g><path d="M256.26 374.71 L256.26 374.71 L256.61 374.71 L256.96 374.71 L263.98 386.88 L263.81 387.18 L263.64 387.48 Z" /></g><g><text xml:space="preserve"><tspan x="281.54" y="353.67" font-size="9.95">OH</tspan></text></g><g><path d="M278.56 362.24 L278.56 362.24 L278.21 362.24 L278.04 361.94 L282.25 354.64 L282.51 354.79 L282.77 354.94 Z" /></g><circle cx="263.83" cy="359.47" r="0.833333333333333" /></g></g></svg>$$\ce{->[O2]}$$<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="250.62 343.73 51.51 45.29" width="62" height="54"><g><g><g><path d="M269.28 389.02 L269.28 389.02 L269.45 388.72 L269.62 388.42 L283.68 388.42 L283.85 388.72 L284.02 389.02 Z" /></g><g><path d="M284.02 389.02 L284.02 389.02 L283.85 388.72 L283.68 388.42 L290.7 376.25 L291.05 376.25 L291.4 376.25 Z" /></g><g><path d="M291.4 376.25 L291.4 376.25 L291.05 376.25 L290.7 376.25 L283.68 364.06 L283.85 363.76 L284.2 363.76 Z" /></g><g><path d="M283.68 363.46 L283.68 363.46 L283.85 363.76 L283.68 364.06 L269.62 364.06 L269.45 363.76 L269.62 363.46 Z" /></g><g><path d="M269.1 363.76 L269.1 363.76 L269.45 363.76 L269.62 364.06 L262.6 376.25 L262.25 376.25 L261.9 376.25 Z" /></g><g><path d="M261.9 376.25 L261.9 376.25 L262.25 376.25 L262.6 376.25 L269.62 388.42 L269.45 388.72 L269.28 389.02 Z" /></g><g><text xml:space="preserve"><tspan x="287.18" y="355.19" font-size="9.95">OH</tspan></text></g><g><path d="M284.2 363.76 L284.2 363.76 L283.85 363.76 L283.68 363.46 L287.91 356.14 L288.17 356.29 L288.43 356.44 Z" /></g><g><text xml:space="preserve" text-anchor="end"><tspan x="266.12" y="355.19" font-size="9.95">OO</tspan></text></g><g><path d="M269.62 363.46 L269.62 363.46 L269.45 363.76 L269.1 363.76 L264.87 356.44 L265.13 356.29 L265.39 356.14 Z" /></g><circle cx="254.47" cy="344.63" r="0.833333333333333" /></g></g></svg>$$\ce{->[\ce{NO -> NO2}]}$$<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="254.49 344.71 43.77 43.33" width="53" height="52"><g><g><g><path d="M265.42 388.04 L265.42 388.04 L265.59 387.74 L265.76 387.44 L279.82 387.44 L279.99 387.74 L280.16 388.04 Z" /></g><g><path d="M280.16 388.04 L280.16 388.04 L279.99 387.74 L279.82 387.44 L286.84 375.27 L287.19 375.27 L287.54 375.27 Z" /></g><g><path d="M287.54 375.27 L287.54 375.27 L287.19 375.27 L286.84 375.27 L279.82 363.09 L279.99 362.79 L280.34 362.79 Z" /></g><g><path d="M279.82 362.49 L279.82 362.49 L279.99 362.79 L279.82 363.09 L265.76 363.09 L265.59 362.79 L265.76 362.49 Z" /></g><g><path d="M265.24 362.79 L265.24 362.79 L265.59 362.79 L265.76 363.09 L258.74 375.27 L258.39 375.27 L258.04 375.27 Z" /></g><g><path d="M258.04 375.27 L258.04 375.27 L258.39 375.27 L258.74 375.27 L265.76 387.44 L265.59 387.74 L265.42 388.04 Z" /></g><g><text xml:space="preserve"><tspan x="283.31" y="354.22" font-size="9.95">OH</tspan></text></g><g><path d="M280.34 362.79 L280.34 362.79 L279.99 362.79 L279.82 362.49 L284.06 355.14 L284.32 355.29 L284.58 355.44 Z" /></g><g><text xml:space="preserve"><tspan x="254.49" y="354.22">O</tspan></text></g><g><path d="M265.76 362.49 L265.76 362.49 L265.59 362.79 L265.24 362.79 L261 355.44 L261.26 355.29 L261.52 355.14 Z" /></g><circle cx="263.1" cy="345.61" r="0.833333333333336" /></g></g></svg>$$\ce{->[O2]}$$<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="254.49 345.24 43.77 42.27" width="53" height="51"><g><g><g><path d="M265.42 387.51 L265.42 387.51 L265.59 387.21 L265.76 386.91 L279.82 386.91 L279.99 387.21 L280.16 387.51 Z" /></g><g><path d="M280.16 387.51 L280.16 387.51 L279.99 387.21 L279.82 386.91 L286.84 374.74 L287.19 374.74 L287.54 374.74 Z" /></g><g><path d="M287.54 374.74 L287.54 374.74 L287.19 374.74 L286.84 374.74 L279.82 362.57 L279.99 362.27 L280.34 362.27 Z" /></g><g><path d="M279.82 361.97 L279.82 361.97 L279.99 362.27 L279.82 362.57 L265.76 362.57 L265.59 362.27 L265.42 361.97 Z" /></g><g><path d="M265.42 361.97 L265.42 361.97 L265.59 362.27 L265.76 362.57 L258.74 374.74 L258.39 374.74 L258.04 374.74 Z" /></g><g><path d="M258.04 374.74 L258.04 374.74 L258.39 374.74 L258.74 374.74 L265.76 386.91 L265.59 387.21 L265.42 387.51 Z" /></g><g><text xml:space="preserve"><tspan x="283.31" y="353.7" font-size="9.95">OH</tspan></text></g><g><path d="M280.34 362.27 L280.34 362.27 L279.99 362.27 L279.82 361.97 L284.05 354.64 L284.31 354.79 L284.57 354.94 Z" /></g><g><text xml:space="preserve"><tspan x="254.49" y="353.7">O</tspan></text></g><g><line x1="264.47" y1="362.92" x2="260.44" y2="355.93" stroke-width="0.6" shape-rendering="auto" /><path d="M266.57 361.97 L266.57 361.97 L267.26 361.97 L262.94 354.49 L262.42 354.79 Z" /><path d="M264.5 363.57 L264.5 363.57 L264.84 362.97 L260.69 355.78 L260.18 356.08 Z" /></g></g></g></svg>，或<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="254.49 344.71 43.77 43.33" width="53" height="52"><g><g><g><path d="M265.42 388.04 L265.42 388.04 L265.59 387.74 L265.76 387.44 L279.82 387.44 L279.99 387.74 L280.16 388.04 Z"></path></g><g><path d="M280.16 388.04 L280.16 388.04 L279.99 387.74 L279.82 387.44 L286.84 375.27 L287.19 375.27 L287.54 375.27 Z"></path></g><g><path d="M287.54 375.27 L287.54 375.27 L287.19 375.27 L286.84 375.27 L279.82 363.09 L279.99 362.79 L280.34 362.79 Z"></path></g><g><path d="M279.82 362.49 L279.82 362.49 L279.99 362.79 L279.82 363.09 L265.76 363.09 L265.59 362.79 L265.76 362.49 Z"></path></g><g><path d="M265.24 362.79 L265.24 362.79 L265.59 362.79 L265.76 363.09 L258.74 375.27 L258.39 375.27 L258.04 375.27 Z"></path></g><g><path d="M258.04 375.27 L258.04 375.27 L258.39 375.27 L258.74 375.27 L265.76 387.44 L265.59 387.74 L265.42 388.04 Z"></path></g><g><text xml:space="preserve"><tspan x="283.31" y="354.22" font-size="9.95">OH</tspan></text></g><g><path d="M280.34 362.79 L280.34 362.79 L279.99 362.79 L279.82 362.49 L284.06 355.14 L284.32 355.29 L284.58 355.44 Z"></path></g><g><text xml:space="preserve"><tspan x="254.49" y="354.22">O</tspan></text></g><g><path d="M265.76 362.49 L265.76 362.49 L265.59 362.79 L265.24 362.79 L261 355.44 L261.26 355.29 L261.52 355.14 Z"></path></g><circle cx="263.1" cy="345.61" r="0.833333333333336"></circle></g></g></svg>$$\ce{->}$$<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="225.56 357.93 101.63 16.91" width="122" height="20"><g><g><g><path d="M241.28 371.17 L241.28 371.17 L241.28 370.82 L241.28 370.47 L253.75 363.27 L253.75 363.62 L253.75 363.97 Z" /></g><g><path d="M253.75 363.97 L253.75 363.97 L253.75 363.62 L253.75 363.27 L266.22 370.47 L266.22 370.82 L266.22 371.17 Z" /></g><g><path d="M266.22 371.17 L266.22 371.17 L266.22 370.82 L266.22 370.47 L278.69 363.27 L278.69 363.62 L278.69 363.97 Z" /></g><g><path d="M278.69 363.97 L278.69 363.97 L278.69 363.62 L278.69 363.27 L291.16 370.47 L291.16 370.82 L291.16 371.17 Z" /></g><g><path d="M291.16 371.17 L291.16 371.17 L291.16 370.82 L291.16 370.47 L303.64 363.27 L303.64 363.62 L303.64 363.97 Z" /></g><g><text xml:space="preserve"><tspan x="225.56" y="366.39">O</tspan></text></g><g><path d="M241.28 370.47 L241.28 370.47 L241.28 370.82 L241.28 371.17 L234.14 367.04 L234.29 366.78 L234.44 366.52 Z" /><line x1="241.28" y1="367.83" x2="235.58" y2="364.54" stroke-width="0.6" shape-rendering="auto" /></g><g><text xml:space="preserve"><tspan x="312.24" y="374.72" font-size="9.95">OH</tspan></text></g><g><path d="M303.64 363.97 L303.64 363.97 L303.64 363.62 L303.64 363.27 L311.86 368.02 L311.71 368.28 L311.56 368.54 Z" /></g><circle cx="303.66" cy="360.85" r="0.833333333333333" /></g></g></svg>$$\ce{->[\ce{O2 -> HO2.}]}$$<svg class="svg-chem" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="229.48 357.37 93.79 18.03" width="113" height="22"><g><g><g><path d="M245.21 370.6 L245.21 370.6 L245.21 370.25 L245.21 369.9 L257.68 362.7 L257.68 363.05 L257.68 363.4 Z" /></g><g><path d="M257.68 363.4 L257.68 363.4 L257.68 363.05 L257.68 362.7 L270.15 369.9 L270.15 370.25 L270.15 370.6 Z" /></g><g><path d="M270.15 370.6 L270.15 370.6 L270.15 370.25 L270.15 369.9 L282.62 362.7 L282.62 363.05 L282.62 363.4 Z" /></g><g><path d="M282.62 363.4 L282.62 363.4 L282.62 363.05 L282.62 362.7 L295.09 369.9 L295.09 370.25 L295.09 370.6 Z" /></g><g><path d="M295.09 370.6 L295.09 370.6 L295.09 370.25 L295.09 369.9 L307.57 362.7 L307.57 363.05 L307.57 363.4 Z" /></g><g><text xml:space="preserve"><tspan x="229.48" y="365.83">O</tspan></text></g><g><path d="M245.21 369.9 L245.21 369.9 L245.21 370.25 L245.21 370.6 L238.14 366.51 L238.29 366.25 L238.44 365.99 Z" /><line x1="245.21" y1="367.26" x2="239.58" y2="364.01" stroke-width="0.6" shape-rendering="auto" /></g><g><text xml:space="preserve"><tspan x="315.52" y="375.28" font-size="9.95">O</tspan></text></g><g><path d="M307.57 363.4 L307.57 363.4 L307.57 363.05 L307.57 362.7 L315.08 367.04 L314.93 367.3 L314.78 367.56 Z" /><line x1="307.57" y1="366.04" x2="313.63" y2="369.54" stroke-width="0.6" shape-rendering="auto" /></g></g></g></svg>。

#### 请说明什么是Junge层，及与其相关的一个地球工程设想。
##### Junge层
在20 km高度附近的平流层中下层存在的一个常定的气溶胶层。观测和研究表明，在重大火山喷发后的3 ~ 5年甚至更长时间内，Junge层会得到明显的加强。

##### 地球工程设想
由于气溶胶对辐射具有吸收作用，在火山喷发后，中低纬出现了一致的降温趋势，高纬地区则出现连续的冷夏和暖冬。由此引发的地球工程设想是向平流层撒硫酸盐，用以屏蔽太阳辐射，抑制全球变暖。

#### 什么是海洋酸化，海洋酸化有什么后果，与全球气候变化有什么关系？
##### 海洋酸化
工业革命以来因大气中$$\ce{CO2}$$浓度升高而使海洋对$$\ce{CO2}$$的吸收增加，海水的pH值降低，海水的二氧化碳-碳酸盐平衡体系被改变，即：

$$\ce{CO2(atoms) <=> CO2(aq) + H2O <=> H2CO3 <=> H+ + HCO3- <=> 2H+ + CO3^2-},$$

使得海水中$$\ce{H+}$$、$$\ce{CO2}$$、$$\ce{HCO3-}$$浓度增加，$$\ce{CO3^2-}$$浓度降低。

##### 后果
- 海洋酸化使$$\ce{CO3^2-}$$浓度降低，而海洋钙化生物依赖$$\ce{CO3^2-}$$合成钙质骨骼或保护壳。因此，海洋钙化生物的钙化作用将受到抑制，珊瑚礁等生物的生存和繁衍受到威胁。
- 海洋酸化使$$\ce{CO2}$$浓度上升，有利于海洋植物的光合作用将$$\ce{CO2}$$转化为有机物促进其生长发育，对C3植物的促进作用更明显。
- 海洋碳循环与$$\ce{N}$$、$$\ce{P}$$、$$\ce{Si}$$的生物地球化学循环密切相关，其中氮循环表现在固氮、脱氮作用增强及可能的硝化作用减弱。
- 海洋酸化导致$$\ce{OH-}$$、$$\ce{CO3^2-}$$浓度下降，影响海水中金属的溶解性、吸附性、毒性和氧化还原过程，进而影响生物对金属离子的利用。

##### 与全球气候变化的关系
- 人类活动产生大量二氧化碳，使大气$$\ce{CO2}$$浓度升高，海洋对$$\ce{CO2}$$的溶解增加，因而产生海洋酸化。
- 另一方面，二氧化碳浓度升高导致温室效应，使全球平均气温增加，$$\ce{CO2}$$在水中的溶解度降低。

### 环境健康
#### 针对媒体报道的中国“癌症村”，请根据发病率、死亡率等相关概念以及描述性或分析性流行病学方法设计一流行病调查研究思路和方案。
通过对“癌症村”的人群（暴露组）与同纬度自然环境类似、但未受到严重环境污染地区的人群（对照组）的患癌症情况进行调查，计算癌症的发病率和死亡率，然后求出相对危险度RR、归因危险度AR，并分析“癌症村”的环境暴露与癌症患病率之间的关系。此外还可对年龄进行分组，对不同年龄段患癌症的概率进行统计，计算潜在减寿年数。

#### 有人对化合物XY的致病性做了队列研究，6年期间暴露组（500人）和对照组（500人）的发病数见下表，请计算7年累积致死性和非致死性发病率及其对应的RR、AR，分别说明RR和AR的意义。
<table class="table table-3lines">
<thead>
<tr><th></th><th></th><th>发病数</th><th>5年累积发病率（%）</th><th>RR</th><th>AR</th></tr>
</thead>
<tbody>
<tr><th rowspan="3">暴露组<br>（500人）</th><td>致死性</td><td>20</td><td></td><td></td><td></td></tr>
<tr><td>非致死性</td><td>16</td><td></td><td></td><td></td></tr>
<tr><td>合计</td><td></td><td></td><td></td><td></td></tr>
<tr class="line-top"><th rowspan="3">对照组<br>（500人）</th><td>致死性</td><td>5</td><td></td><td></td><td></td></tr>
<tr><td>非致死性</td><td>4</td><td></td><td></td><td></td></tr>
<tr><td>合计</td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>

数据见下表。

<table class="table table-3lines">
<thead>
<tr><th></th><th></th><th>发病数</th><th>5年累积发病率（%）</th><th>RR</th><th>AR</th></tr>
</thead>
<tbody>
<tr><th rowspan="3">暴露组<br>（500人）</th><td>致死性</td><td>20</td><td>4</td><td>4</td><td>3</td></tr>
<tr><td>非致死性</td><td>16</td><td>3.2</td><td>4</td><td>2.4</td></tr>
<tr><td>合计</td><td>36</td><td>7.2</td><td></td><td></td></tr>
<tr class="line-top"><th rowspan="3">对照组<br>（500人）</th><td>致死性</td><td>5</td><td>1</td><td></td><td></td></tr>
<tr><td>非致死性</td><td>4</td><td>0.8</td><td></td><td></td></tr>
<tr><td>合计</td><td>9</td><td>1.8</td><td></td><td></td></tr>
</tbody>
</table>

RR是相对危险度，反应暴露组发病或死亡的风险是非暴露组的多少倍。此处RR = 4，关联强度强，说明XY的暴露很可能会造成疾病。AR是归因危险度，反应暴露与非暴露人群比较增加的疾病发生数量。此处RR = 3和2.4，表明控制XY的暴露可以有效预防疾病的发生。

#### 如果某种鱼F从水中吸收有机污染物A的速率常数为$$\pu{11 h-1}$$，鱼体消除A的速率常数为$$\pu{2E-2 h-1}$$，设A在鱼中起始浓度为0，在水中浓度不变，计算平衡后鱼F对A的浓缩系数。
设A在周围环境中的浓度是$$c_w$$，在鱼F体中的浓度是$$c_f$$。鱼F对A的吸收速率常数$$k_a = \pu{11 h-1}$$，对A的消除速率常数$$k_e = \pu{2E-2 h-1}$$。

则鱼F对A的吸收速率$$v_a = k_ac_w$$，对A的消除速率$$v_e = k_ec_f$$。

当达到平衡时，$$v_a = v_e$$，则生物浓缩系数$$\mathrm{BCF} = \cfrac{c_f}{c_w}  = \cfrac {k_a}{k_e} = 550$$。

#### 硝化和反硝化反应发生在大气、水体还是土壤？在全球环境问题中的作用是什么？
##### 发生位置
主要发生在水体和土壤中。硝化是生物用氧气将氨氧化为亚硝酸盐继而氧化为硝酸盐的过程，而反硝化则是硝酸盐在通气不良的情况下通过生物化学过程还原到$$\ce{N2}$$、$$\ce{N2O}$$、$$\ce{NO}$$等。

##### 作用
在氧的来源有限的情况下，反硝化作用明显，因此$$\ce{N}$$主要以$$\ce{N2}$$的形式存储，故$$\ce{N2}$$成为地球上氮最大的储库，而深层土壤和深层海洋的N缺乏。

#### 对比以下概念：被动扩散-主动转运，生物富集-生物放大，单成分酶-双成分酶。
##### 被动扩散-主动转运
- 被动扩散：指脂溶性物质顺浓度梯度扩散通过有类脂层屏障的生物膜，无需载体，无需消耗能量。
- 主动转运：指物质与膜上特异性蛋白质载体结合，消耗一定的能量，逆浓度梯度运输。所需的能量由三磷酸腺苷（ATP）水解提供。

##### 生物富集-生物放大
- 生物富集：生物通过非吞食的方式，从周围环境（水、土壤、大气）蓄积某种元素或难降解的物质，使其在机体内浓度超过周围环境浓度。在所有营养级都有发生。
- 生物放大：在同一食物链上的高营养级的生物，通过吞食低营养级生物蓄积的某种物质，使其在机体内的浓度随营养级的提高而增大。在高营养级中更为明显。

##### 单成分酶-多成分酶
- 单成分酶：仅含有蛋白质的酶，如脲酶、蛋白酶。
- 多成分酶：除蛋白质外，还含有非蛋白质部分，即辅基或辅酶。

#### 解释说明Krebs循环、Calvin循环。

##### Krebs循环
![三羧酸循环反应历程](https://upload.wikimedia.org/wikipedia/commons/c/c6/Citric_acid_cycle.svg)

由Krebs发现，又称为三羧酸循环、柠檬酸循环，因其中间体柠檬酸含有三个羧基而得名。该循环是有氧呼吸的第二阶段，在线粒体中发生。该反应的历程如<a class="xref-figure" href="#figure-Citric_acid_cycle.svg"></a> 所示。Krebs循环的大致步骤如下：

- 糖类在细胞质基质经糖酵解生成丙酮酸并进入线粒体基质，丙酮酸经丙酮酸脱氢酶生成乙酰辅酶A（<a class="xref-figure" href="#figure-Citric_acid_cycle.svg"></a> 中XI）并进入循环。
- 乙酰辅酶A与草酰乙酸（X）结合，生成柠檬酸（I），随后经过多个中间体，脱去两分子$$\ce{CO2}$$，重新生成草酰乙酸并用于下一轮循环。
- 在该过程中生成3分子$$\ce{NADH + H+}$$，1分子$$\ce{FADH2}$$，1分子GTP，用于为机体提供能量。
- 总反应式：乙酰辅酶$$\ce{A + 3 NAD+ + FAD + GDP + Pi + 2 H2O -> }$$辅酶$$\ce{A-SH + 3 NADH + 3 H+ + FADH2 + GTP + 2 CO2}$$。

##### Calvin 循环
![卡尔文循环反应历程]({{ "/assets/images/ESH-02.svg" | relative_url }})

由Calvin等人发现，也被称为碳反应，是光合作用的第二部分。该部分分为三个阶段：羧化、还原、二磷酸核酮糖再生。该反应在叶绿体中发生，反应历程如<a class="xref-figure" href="#figure-ESH-02.svg"></a> 所示。Calvin循环的大致步骤如下：

- 第一阶段：3 mol 1,5-二磷酸核酮糖（RuBP）和 3 mol$$\ce{CO2}$$在 RuBP 羧化／加氧酶（RuBisCO）的作用下生成6 mol 3-磷酸甘油酸。
- 第二阶段：6 mol 3-磷酸甘油酸被还原为6 mol 3-磷酸甘油醛（G3P），该过程消耗6 mol ATP和6 mol NADPH。
- 第三阶段：5 mol G3P生成3 mol 5-磷酸核酮糖，随后消耗3 mol ATP生成3 mol RuBP，完成循环。剩余1 mol G3P用于有机物的合成。
- 该过程中每生成1 mol G3P消耗9 mol ATP和6 mol NADPH，这些物质来源于光反应。

#### 汞毒性最大的形态是什么，如何在环境中生成的？
##### 形态
汞毒性最大的形态是甲基汞（MeHg）。有机汞可以在血液和中枢神经系统中蓄积，具有很强的神经毒性。

##### 生成
0价汞在环境中易被氧化为$$\ce{Hg^2+}$$，随后经微生物等生物反应形成甲基汞。甲基钴胺素是金属甲基化过程中甲基基团的重要生物来源，它是汞甲基化反应中最可能的甲基供体。2 mol甲基钴胺素将 2 mol甲基转移给$$\ce{Hg^2+}$$后生成水合钴胺素，随后其利用$$\ce{FADH2}$$将其转化为钴胺素，再经N<sup>5</sup>-甲基四氢叶酸变为甲基钴胺素完成循环。
