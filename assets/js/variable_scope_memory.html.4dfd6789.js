"use strict";(self.webpackChunkalgorithm_doc=self.webpackChunkalgorithm_doc||[]).push([[285],{954:(a,n,s)=>{s.r(n),s.d(n,{comp:()=>i,data:()=>t});var e=s(641);const l=[(0,e.Fv)('<h1 id="变量、作用域与内存" tabindex="-1"><a class="header-anchor" href="#变量、作用域与内存"><span>变量、作用域与内存</span></a></h1><h2 id="原始值和引用值" tabindex="-1"><a class="header-anchor" href="#原始值和引用值"><span>原始值和引用值</span></a></h2><h3 id="复制变量值" tabindex="-1"><a class="header-anchor" href="#复制变量值"><span>复制变量值</span></a></h3><ul><li><p>复制基本类型值，这两个变量相互独立，互不影响。</p></li><li><p>复制引用类型（对象），值引用是一个指针，改变其中一个对象，会影响另一个对象。</p></li></ul><h3 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数"><span>传递参数</span></a></h3><ul><li>ECMAScript中的所有参数都是按值传递的。不可能按引用传递参数。如果把对象作为参数传递，那么传递的就是这个对象的引用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\tobj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Nicholas&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">setName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//&quot;Nicholas&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检测类型" tabindex="-1"><a class="header-anchor" href="#检测类型"><span>检测类型</span></a></h3><p>虽然在检测基本数据类型时 <code>typeof</code> 是非常得力的助手，但在检测引用类型的值时，这个操作符的用处不大。通常，我们并不是想知道某个值是对象，而是想知道它是什么类型的对象。为此，ECMAScript提供了 <code>instanceof</code> 操作符。</p><h2 id="执行上下文与作用域" tabindex="-1"><a class="header-anchor" href="#执行上下文与作用域"><span>执行上下文与作用域</span></a></h2><p>全局上下文是最外层的上下文，上下文在其所有代码执行完毕后会被销毁，包括定义在它上面所有的变量和函数</p><p>在寻找一个标识符时，会从当前上下文中开始往外层寻找</p><h3 id="作用域延长" tabindex="-1"><a class="header-anchor" href="#作用域延长"><span>作用域延长</span></a></h3><ul><li><p><code>try-catch</code> 语句中的 <code>catch</code> 块</p></li><li><p><code>with</code> 语句</p></li></ul><h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收"><span>垃圾回收</span></a></h2><p><strong>什么是内存泄漏？</strong></p><p>程序的运行需要内存，当程序提出要求，操作系统就会供给内存。对于不再用到的内存，没有及时释放，就叫做<strong>内存泄漏</strong>。</p><p>对于持续运行的服务进程，必须及时释放内存，否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。</p><p><strong>什么是垃圾回收机制</strong></p><p>JavaScript具有垃圾收集器，垃圾收集器会按照固定的时间间隔周期性的执行。</p><p>最常见的垃圾回收方式有两种：</p><ul><li><p>标记清除</p></li><li><p>引用计数</p></li></ul><h3 id="标记清除" tabindex="-1"><a class="header-anchor" href="#标记清除"><span>标记清除</span></a></h3><p><strong>原理：</strong> 是当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。标记“离开环境”的就回收内存。</p><ol><li><p>垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记。</p></li><li><p>去掉环境中的变量以及被环境中的变量引用的变量的标记。</p></li><li><p>再被加上标记的会被视为准备删除的变量。</p></li><li><p>垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。</p></li></ol><h3 id="引用计数" tabindex="-1"><a class="header-anchor" href="#引用计数"><span>引用计数</span></a></h3><p><strong>原理：</strong> 跟踪记录每个值被引用的次数。</p><ol><li><p>声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是1。</p></li><li><p>同一个值又被赋值给另一个变量，这个引用类型值的引用次数加1。</p></li><li><p>当包含这个引用类型值的变量又被赋值成另一个值了，那么这个引用类型值的引用次数减1。</p></li><li><p>当引用次数变成0时，说明没办法访问这个值了。</p></li><li><p>当垃圾收集器下一次运行时，它就会释放引用次数是0的值所占的内存。</p></li></ol><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><ul><li><p>基本类型值在内存中占据固定大小的空间，因此被保存在栈内存中；</p></li><li><p>从一个变量向另一个变量复制基本类型的值，会创建这个值的一个副本；</p></li><li><p>引用类型的值是对象，保存在堆内存中</p></li><li><p>包含引用类型值的变量实际上包含的并不是对象本身，而是一个指向该对象的指针；</p></li></ul>',30)],p={},i=(0,s(6262).A)(p,[["render",function(a,n){return(0,e.uX)(),(0,e.CE)("div",null,l)}]]),t=JSON.parse('{"path":"/jsBase/variable_scope_memory.html","title":"变量、作用域与内存","lang":"zh_CN","frontmatter":{},"headers":[{"level":2,"title":"原始值和引用值","slug":"原始值和引用值","link":"#原始值和引用值","children":[{"level":3,"title":"复制变量值","slug":"复制变量值","link":"#复制变量值","children":[]},{"level":3,"title":"传递参数","slug":"传递参数","link":"#传递参数","children":[]},{"level":3,"title":"检测类型","slug":"检测类型","link":"#检测类型","children":[]}]},{"level":2,"title":"执行上下文与作用域","slug":"执行上下文与作用域","link":"#执行上下文与作用域","children":[{"level":3,"title":"作用域延长","slug":"作用域延长","link":"#作用域延长","children":[]}]},{"level":2,"title":"垃圾回收","slug":"垃圾回收","link":"#垃圾回收","children":[{"level":3,"title":"标记清除","slug":"标记清除","link":"#标记清除","children":[]},{"level":3,"title":"引用计数","slug":"引用计数","link":"#引用计数","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"updatedTime":1713835095000,"contributors":[{"name":"颜豪","email":"2825060856@qq.com","commits":2}]},"filePathRelative":"jsBase/variable_scope_memory.md"}')}}]);